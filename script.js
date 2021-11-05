function add() {
    event.preventDefault();
    let a = parseFloat(document.getElementById("number_one").value)
    let b = parseFloat(document.getElementById("number_two").value)
    document.getElementById("answer").value = a + b;
    document.getElementById("ans").style.display = "block";
}