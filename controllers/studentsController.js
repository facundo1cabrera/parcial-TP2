import studentService from "../services/studentService.js";

const addStudent = (req, res) => {
    const { nombre, nota } = req.body;
    if (!nombre || !nota) {
        res.status(400).json({ message: 'One or both of the following fields is missing: nombre, nota' });
    }
    if (nombre.length > 50) {
        res.status(400).json({ message: 'Nombre value can not be bigger than 50 chracters.' });
    }

    const student = studentService.addStudent(nombre, nota);
    res.status(201).json(student);
}

const getAllStudents = (req, res) => {
    const students = studentService.getAllStudents();
    res.status(200).json(students);
}

const getStudentById = (req, res) => {
    const { id } = req.params;
    const student = studentService.getStudentById(id);
    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
}

export default {
    getAllStudents,
    getStudentById,
    addStudent
}