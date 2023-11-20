const express   = require('express')
const app       = express()
const port      = 3000
const mysql     = require('mysql2')
const cors      = require('cors')

app.use(express.json())
app.use(cors())

// List of SQL Queries
const QUERY = {
    SELECT_ALL: "SELECT * FROM lanutan_users",
    INSERT: "INSERT INTO `lanutan_users`(`name`, `age`) VALUES (?,?)",
    SELECT_USERID: "SELECT * FROM lanutan_users WHERE id = ?",
}

const db = mysql.createConnection({
    host:       "localhost",
    user:       "root",
    password:   "",
    database:   "lanutan",
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})

// Params: error, data, field
// GETS ALL THE USERS IN THE 'lanutan_users' TABLE
app.get("/api/users", (req, res) => {
    db.query(QUERY.SELECT_ALL, (error, data) => {
        console.log(data)
        res.send(data)
    })
})
app.get("/api/users/:id", (req, res) => {
    db.query(QUERY.SELECT_USERID, [req.params.id], (error, data) => {
        console.log(data)
        res.send(data)
    })
})

app.post("/api/register", (req, res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        res.status(400).send("Name and age are required");
        return;
    }

    db.query(QUERY.INSERT, [name, age], (error, data) => {
        if (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
            return;
        }
        console.log(res)
        res.send("User registered successfully!");
    });
});

app.listen(port, () => {
    console.log(`Running on port ${port}...`)
})