let studentData = [];

function saveStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const course = document.getElementById('course').value;
    const email = document.getElementById('email').value;

    const student = { name, age, gender, course, email };
    studentData.push(student);
    displayStudents();
}

function displayStudents() {
    const tableBody = document.querySelector('#studentTable tbody');
    tableBody.innerHTML = '';

    studentData.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.gender}</td>
            <td>${student.email}</td>
            <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteStudent(index) {
    studentData.splice(index, 1);
    displayStudents();
}
