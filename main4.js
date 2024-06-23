var objPeople = [
    {
        pass4: "48"
    },
];

function getInfo() {
    var pass4 = document.getElementById('pass4').value;

    for (var i = 0; i < objPeople.length; i++) {
        if (pass4 == objPeople[i].pass4) {
            window.location.href = "page5.html";
            return;
        }
        
    }
    alert(pass4 + " " + "to złe hasło")
}