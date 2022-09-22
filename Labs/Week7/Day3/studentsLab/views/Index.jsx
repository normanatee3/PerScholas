const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component{
    render(){
        const { students } = this.props;
        console.log(students);
        return(
            <DefaultLayout title ={"StudentDashboard"}>
                <a href="/students/new">Create New Student</a>
                <ul>
                {students.map((student, i)=>{
                    return <li key={i}>
                        <a href={`/students/${student.id}`}>
                            {student.name}
                        </a>
                        {' '}
                        has a GPA of {student.gpa} <br />
                        
                        {student.isPassing 
                        ? "and is eligible to graduate"
                        : "and is NOT eligible to graduate"}
                        <br />
                        <a href={`students/${student._id}/edit`}>Edit Student</a>

                        <form action={`/students/${student._id}?_method=DELETE`} method = 'POST'>
                        <input type="submit" value="DELETE" />
                        </form>
                    </li>
                })}
                </ul>
            </DefaultLayout>
        )
    }
}
module.exports = Index