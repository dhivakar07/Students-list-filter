function Students({ student }) {
  return (
    <>
      <div className="student-box">
        <h3>Name : {student.name}</h3>
        <p>Age : {student.age}</p>
        <p>Course : {student.course}</p>
        <p>Status : {student.status || "Not Available"}</p>
      </div>
    </>
  );
}
export default Students;
