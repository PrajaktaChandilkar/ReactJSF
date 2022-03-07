import React from "react";
import "./CollegeStudents.css";

// import developer from "componen"

class CollegeStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id:1,
          name: "Lakshman",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur",
          course: "Full Stack Web Dev",
          techStack: "MERN",
          batch: "Batch 11",
        },
        {
          id:2,
          name: "RAm",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur",
          course: "Full Stack Web Dev",
          techStack: "MERN",
          batch: "Batch 12",
        },
        {
          id:3,
          name: "Prajakta",
          bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, tenetur",
          course: "Full Stack Web Dev",
          techStack: "MERN",
          batch: "Batch 12",
        },
      ]
    };
  }

  render() {
    const { students } = this.state;
    // console.log(students.length)
    // const student1 = students[0];
    // const student2 = students[1]
    // let length = students.length
    
    return (
      <>
      {students.map((student, index)=> 
        <div className="student-data" key={ index}>
          <h2> {student.name} </h2>
          <p> {student.bio} </p>
          <h3> {student.course} </h3>
          <h3> {student.techStack} </h3>
          <h3> {student.batch} </h3>
        </div>

)}
      {/* {students.map(student=> 
        <div className="student-data" key={ student.id}>
          <h2> {student.name} </h2>
          <p> {student.bio} </p>
          <h3> {student.course} </h3>
          <h3> {student.techStack} </h3>
          <h3> {student.batch} </h3>
        </div>

)} */}
        {/* <div className="student-data">
          <h2> {student2.name} </h2>
          <p> {student2.bio} </p>
          <h3> {student2.course} </h3>
          <h3> {student2.techStack} </h3>
          <h3> {student2.batch} </h3>
        </div> */}
        {/* <img src={developer} alt="Developer"/> */}
      </>
    );
  }
}

export default CollegeStudents;
