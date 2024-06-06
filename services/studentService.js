import studentModel from "../models/StudentModel.js";

const addStudent = (nombre, nota) => {
    const studentDB = studentModel.addStudent(nombre, nota);
    return studentDB;
}

const getAllStudents = () => {
    const students = studentModel.getAllStudents();
    return students;
}

const getStudentById = (id) => {
    const student = studentModel.getStudentById(id);

    if (student) {
        return `¡Hola ${student.nombre}! Tu nota es ${student.nombre}.`
    }
    return null
}

export default {
    getAllStudents,
    addStudent,
    getStudentById
}