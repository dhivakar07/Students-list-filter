import Students from "./Students";
import { useState } from "react";

function StudentsList() {
  const students = [
    { name: "Ravi", age: 22, course: "MERN Stack", status: "Completed" },
    { name: "Meena", age: 20, course: "Python" },
    { name: "Arun", age: 23, course: "Java", status: "Ongoing" },
    { name: "Deepak", age: 24, course: "MERN Stack", status: "Ongoing" },
    { name: "Sita", age: 21, course: "Python", status: "Completed" },
    { name: "Kiran", age: 19, course: "JavaScript" },
    { name: "Anjali", age: 22, course: "MERN Stack", status: "Ongoing" },
    { name: "Rahul", age: 25, course: "Java", status: "Completed" },
    { name: "Priya", age: 18, course: "Python" },
    { name: "Vikram", age: 23, course: "MERN Stack", status: "Completed" },
    { name: "Aakash", age: 21, course: "MERN Stack", status: "Ongoing" },
    { name: "Divya", age: 19, course: "Python", status: "Completed" },
    { name: "Naveen", age: 24, course: "Java" },
    { name: "Sneha", age: 22, course: "MERN Stack", status: "Completed" },
    { name: "Karthik", age: 23, course: "Python" },
    { name: "Pooja", age: 20, course: "JavaScript", status: "Ongoing" },
    { name: "Manoj", age: 25, course: "Java", status: "Completed" },
    { name: "Keerthi", age: 18, course: "Python" },
    { name: "Ramesh", age: 26, course: "MERN Stack", status: "Ongoing" },
    { name: "Lavanya", age: 21, course: "JavaScript", status: "Completed" },
  ];

  const [studentdata, setStudentdata] = useState(students);

  function showAll() {
    setStudentdata(students);
  }

  function ageGreater21() {
    setStudentdata(
      students.filter(function (data) {
        return data.age > 21;
      }),
    );
  }

  function mernStudents() {
    setStudentdata(
      students.filter(function (data) {
        return data.course === "MERN Stack";
      }),
    );
  }

  function pythonOrJava() {
    setStudentdata(
      students.filter(function (data) {
        return data.course === "Python" || data.course === "Java";
      }),
    );
  }

  function hasStatus() {
    setStudentdata(
      students.filter(function (data) {
        return data.status !== undefined;
      }),
    );
  }

  return (
    <>
      <section className="header-section">
        <h1>Student Management</h1>
        <div className="header-buttons">
          <button onClick={showAll}>All</button>
          <button onClick={ageGreater21}>Age</button>
          <button onClick={mernStudents}>MERN Students</button>
          <button onClick={pythonOrJava}>Java / Python</button>
          <button onClick={hasStatus}>Status</button>
        </div>
      </section>
      <section className="student-section">
        {studentdata.map(function (student, index) {
          return <Students key={index} student={student}></Students>;
        })}
      </section>
    </>
  );
}

export default StudentsList;
