let students=[
    {Student_Name:"jaanu", Marks:"38%",Class:"3rd", Address:"india" },
    {Student_Name:"sri", Marks:"98%",Class:"12th", Address:" 123 ABC colony" },
    {Student_Name:"shruti", Marks:"58%",Class:"10th", Address:"456, XYZ Street, Mumbai" },
    {Student_Name:"karthik", Marks:"40%",Class:"8th", Address:"789, PQR NAgar, Bangalore" },
    {Student_Name:"nancy", Marks:" 60%",Class:"6th", Address:" 101, LMN Road,karada" },
    {Student_Name:"nandy", Marks:"70%",Class:"7th", Address:"222,DEF Avenue, chennai" },
    {Student_Name:"punam", Marks:"50%",Class:"8th", Address:"333, GHI Lane, Hyderabad" },
    {Student_Name:"shiva", Marks:"66%",Class:"6th", Address:"444, STU Calony,pune" },
    {Student_Name:"shashi", Marks:"88%",Class:"3rd", Address:" 555,VWX Street,jaipur" },
];
function searchStudent(){
    let text=document.getElementById("search").value.toLowerCase();
    document.getElementById("heading").innerText=`search Results for ${text}...`;

    let filteredStudents=students.filter(student=>
        student.Student_Name.toLowerCase().includes(text));
    displayStudents(filteredStudents);
}

function displayStudents(data){

const card = document.getElementById("card");

card.innerHTML = data.map(student => `
    <div class="student-card">
         <p><strong>Student_name:</strong>  ${student.Student_Name}</p>
        <p><strong>Marks:</strong> ${student.Marks}</p>
        <p><strong>Class:</strong> ${student.Class}</p>
        <p><strong>Address:</strong> ${student.Address}</p>
    </div>
`).join("");
}

displayStudents(students);

//searching
// const searchInput = document.querySelector("input");
// const heading=document.getElementById()

