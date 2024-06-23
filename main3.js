var objPeople = [
    {
        pass3: "Wakacje!"
    },
];

function getInfo() {
    var pass3 = document.getElementById('pass3').value;

    for (var i = 0; i < objPeople.length; i++) {
        if (pass3 == objPeople[i].pass3) {
            window.location.href = "page4.html";
            return;
        }
        
    }
    alert(pass3 + " " + "to złe hasło")
}