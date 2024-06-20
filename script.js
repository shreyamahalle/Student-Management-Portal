document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('studentForm');
    const studentTable = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    const searchInput = document.getElementById('searchInput');

    let students = [];

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newStudent = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            studentId: e.target.studentId.value,
            course: e.target.course.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        };

        students.push(newStudent);
        e.target.reset();
        displayStudents(students);
    });

    searchInput.addEventListener('input', (e) => {
        const searchQuery = e.target.value.toLowerCase();
        const filteredStudents = students.filter(student =>
            student.studentId.toLowerCase().includes(searchQuery)
        );
        displayStudents(filteredStudents);
    });

    function displayStudents(studentsArray) {
        studentTable.innerHTML = '';
        studentsArray.forEach(student => {
            const row = studentTable.insertRow();
            row.innerHTML = `
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.studentId}</td>
                <td>${student.course}</td>
                <td>${student.email}</td>
                <td>${student.phone}</td>
            `;
        });
    }
});
