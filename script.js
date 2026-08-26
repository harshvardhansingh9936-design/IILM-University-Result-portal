// ==========================================
// IILM UNIVERSITY - STUDENT RESULT DATA
// ==========================================

const students = [
    {
        rollNumber: "2410030250",
        name: "Harsh Vardhan Singh",
        fatherName: "Buddhraj Singh",
        motherName: "Gudiya Singh",

        course: "B.Tech Computer Science and Engineering",
        programme: "2024 - 2028",
        semester: "Sem 3",
        issueDate: "27/Feb/2026",

        subjects: [
            {
                code: "UCS3003",
                name: "Analysis and Design of Algorithms",
                credit: 5,
                grade: "B+",
                gradePoints: 8,
                creditPoints: 40
            },
            {
                code: "UCS3006",
                name: "Discrete Structures",
                credit: 4,
                grade: "B",
                gradePoints: 7,
                creditPoints: 28
            },
            {
                code: "UVA3001",
                name: "EMERGING TECHNOLOGIES",
                credit: 2,
                grade: "A",
                gradePoints: 9,
                creditPoints: 18
            },
            {
                code: "USEC3001",
                name: "FUNDAMENTALS IN QUANTITATIVE APTITUDE",
                credit: 2,
                grade: "C+",
                gradePoints: 6,
                creditPoints: 12
            },
            {
                code: "USI3001",
                name: "INTERNSHIP EVALUATION",
                credit: 0,
                grade: "A",
                gradePoints: 9,
                creditPoints: 0
            },
            {
                code: "UCS3005",
                name: "INTRODUCTION TO CYBER SECURITY",
                credit: 2,
                grade: "B+",
                gradePoints: 8,
                creditPoints: 16
            },
            {
                code: "UCS3007",
                name: "Intro to Cloud Computing",
                credit: 2,
                grade: "B+",
                gradePoints: 8,
                creditPoints: 16
            },
            {
                code: "UCS3004",
                name: "Object Oriented Programming",
                credit: 4,
                grade: "B",
                gradePoints: 7,
                creditPoints: 28
            }
        ],

        totalCredits: 21,
        totalCreditPoints: 158,
        totalCreditsObtained: 21,
        totalCreditsEarned: 21,
        sgpa: "7.52"
    }
];


// ==========================================
// SEARCH RESULT
// ==========================================

function searchResult() {

    const rollNumber = document
        .getElementById("rollNumber")
        .value
        .trim();

    const studentName = document
        .getElementById("studentName")
        .value
        .trim();

    const errorMessage = document.getElementById("errorMessage");
    const resultSection = document.getElementById("resultSection");


    // Clear previous error
    errorMessage.textContent = "";

    // Hide previous result
    resultSection.style.display = "none";


    // Check empty fields
    if (!rollNumber || !studentName) {

        errorMessage.textContent =
            "Please enter both Roll Number and Student Name.";

        return;
    }


    // Find matching student
    const student = students.find(function (item) {

        return (
            item.rollNumber.toLowerCase() === rollNumber.toLowerCase() &&
            item.name.toLowerCase() === studentName.toLowerCase()
        );

    });


    // Student not found
    if (!student) {

        errorMessage.textContent =
            "No matching student record found. Please check the Roll Number and Name.";

        return;
    }


    // ==========================================
    // DISPLAY STUDENT INFORMATION
    // ==========================================

    document.getElementById("resultName").textContent =
        "Mr. " + student.name;

    document.getElementById("resultRoll").textContent =
        student.rollNumber;


    // ==========================================
    // CREATE RESULT TABLE
    // ==========================================

    const tableBody = document.getElementById("resultTableBody");

    tableBody.innerHTML = "";


    student.subjects.forEach(function (subject) {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${subject.code}</td>
            <td>${subject.name}</td>
            <td>${subject.credit}</td>
            <td>${subject.grade}</td>
            <td>${subject.gradePoints}</td>
            <td>${subject.creditPoints}</td>
        `;

        tableBody.appendChild(row);

    });


    // ==========================================
    // RESULT SUMMARY
    // ==========================================

    document.getElementById("totalCredits").textContent =
        student.totalCreditsObtained;

    document.getElementById("totalCreditPoints").textContent =
        student.totalCreditPoints;

    document.getElementById("sgpa").textContent =
        student.sgpa;


    // ==========================================
    // SHOW RESULT
    // ==========================================

    resultSection.style.display = "block";


    // Scroll smoothly to result
    resultSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}