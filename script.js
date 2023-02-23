function show() {
    document.getElementById("name").innerHTML = "Christian Ortiz"
    var inputVal = document.getElementById("grade_sec").value;
    if(inputVal === "12-ICT") {
        document.getElementById("ICT").style.display = "table";
        document.getElementById("ABM").style.display = "none";
    } else if(inputVal === "12-ABM") {
        document.getElementById("ABM").style.display = "table";
        document.getElementById("ICT").style.display = "none";
    } else {
        alert("Invalid input! Please enter the right strand.");
    }
        document.getElementById("input_field").value = "";
}