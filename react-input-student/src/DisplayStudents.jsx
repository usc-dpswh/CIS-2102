import Card from "./components/UI/Card";
import StudentInfo from "./components/StudentInfo";

const DisplayStudents = (props) => {
    console.log(props);
    
    if (props.length === 0){
        return (
            <h1>No student with that IDs!</h1>
        )
    } else {

        return (
            <div>
                {props.map(student => (
                    <Card className="card" key={student.id}>
                        <StudentInfo
                            id={student.id}
                            name={student.name}
                            age={student.age}
                            course={student.course}
                        />
                    </Card>
                ))}
            </div>
        );
    }

}

export default DisplayStudents;