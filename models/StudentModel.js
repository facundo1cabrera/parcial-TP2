let students = [];
let currentId = 1;

function addStudent(nombre, nota) {
    const student = { id: currentId++, nombre, nota };
    console.log(student);
    students.push(student);
    return student;
}

function getAllStudents() {
    console.log(students)
    return students;
}

function getStudentById(id) {
    const user = students.find(student => student.id === parseInt(id));

    return user;
}

export default {
    addStudent,
    getAllStudents,
    getStudentById
};