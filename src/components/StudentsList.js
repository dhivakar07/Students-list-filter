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

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");
  //insert new student
  function insertStudent() {
    if (!name || !age || !course) {
      alert("Please fill all required fields");
      return;
    }

    const newStudent = {
      name: name,
      age: Number(age),
      course: course,
      status: status || undefined,
    };
    setStudentdata([...studentdata, newStudent]);
    setName("");
    setAge("");
    setCourse("");
    setStatus("");
  }
  //show all
  function showAll() {
    setStudentdata(students);
  }
  //age>21
  function ageGreater21() {
    setStudentdata(students.filter((data) => data.age > 21));
  }
  //age<21
  function ageLesser21() {
    setStudentdata(students.filter((data) => data.age < 21));
  }
  //mern students
  function mernStudents() {
    setStudentdata(students.filter((data) => data.course === "MERN Stack"));
  }
  //python or java students
  function pythonOrJava() {
    setStudentdata(
      students.filter(
        (data) => data.course === "Python" || data.course === "Java",
      ),
    );
  }
  //status
  function hasStatus() {
    setStudentdata(students.filter((data) => data.status !== undefined));
  }
  //delete student
  function deleteStudent(index) {
    const updatedList = studentdata.filter((_, i) => i !== index);
    setStudentdata(updatedList);
  }
  //update student
  function updateStudent(index) {
    const updatedList = [...studentdata];
    if (updatedList[index].status === "Completed") {
      updatedList[index].status = "Ongoing";
    } else {
      updatedList[index].status = "Completed";
    }

    setStudentdata(updatedList);
  }

  return (
    <>
      <section className="header-section">
        <h1>Student Management</h1>
        <div className="header-buttons">
          <button onClick={showAll}>All</button>
          <button onClick={ageGreater21}>AgeGreater21</button>
          <button onClick={ageLesser21}>AgeLesser21</button>
          <button onClick={mernStudents}>MERN Students</button>
          <button onClick={pythonOrJava}>Java / Python</button>
          <button onClick={hasStatus}>Status</button>
        </div>
        <br />
        <div className="form-section">
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />

          <button onClick={insertStudent}>Insert</button>
        </div>
      </section>

      <section className="student-section">
        {studentdata.map((student, index) => (
          <Students
            index={index}
            onDelete={deleteStudent}
            onUpdate={updateStudent}
            student={student}
          />
        ))}
      </section>
    </>
  );
}

export default StudentsList;
