const express   = require('express')
const app       = express()
const port      = 3000
const mysql     = require('mysql2')
const cors      = require('cors')
const { application } = require('express')

app.use(express.json())
app.use(cors())

// List of SQL Queries
const QUERY = {
    SELECT_ALL: "SELECT * FROM persons",
    INSERT: "INSERT INTO `persons`(`name`, `age`) VALUES (?,?)",
    SELECT_USERID: "SELECT * FROM persons WHERE id = ?",
    DELETE_USERID: "DELETE FROM `persons` WHERE id = ?",
    UPDATE_USERID: "UPDATE persons SET name = ?, age = ? WHERE id = ?"
}

const db = mysql.createConnection({
    host:       "localhost",
    user:       "root",
    password:   "",
    database:   "cuhs",
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

app.delete("/api/deleteUser/:id", (req, res) => {
    db.query(QUERY.DELETE_USERID, [req.params.id], (err, data) => {
        res.send({ message: `User with ID ${req.params.id} deleted successfully.` })
    })
})

app.patch("/api/updateUser/:id", (req, res) => {
    db.query(QUERY.UPDATE_USERID, [req.body.name, req.body.age, req.params.id], (err, data) => {
        res.send({ message: `User with ID ${req.params.id} updated successfully.`})
    })
})

app.listen(port, () => {
    console.log(`Running on port ${port}...`)
})