var objPeople = [
    {
        pass2: "1389478685"
    },
];

function getInfo() {
    var pass2 = document.getElementById('pass2').value;

    for (var i = 0; i < objPeople.length; i++) {
        if (pass2 == objPeople[i].pass2) {
            window.location.href = "page3.html";
            return;
        }
        
    }
    alert(pass2 + " " + "to złe hasło")
}