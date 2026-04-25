function Students({ student, index, onUpdate, onDelete }) {
  return (
    <>
      <div className="student-box">
        <h3>Name : {student.name}</h3>
        <p>Age : {student.age}</p>
        <p>Course : {student.course}</p>
        <p>Status : {student.status || "Not Available"}</p>
        <button onClick={() => onUpdate(index)}>Update</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </div>
    </>
  );
}
export default Students;
