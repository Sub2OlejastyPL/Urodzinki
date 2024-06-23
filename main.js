var objPeople = [
    {
        pass1: "816629"
    },
];

function getInfo() {
    var pass1 = document.getElementById('pass1').value;

    for (var i = 0; i < objPeople.length; i++) {
        if (pass1 == objPeople[i].pass1) {
            window.location.href = "page2.html";
            return;
        }
        
    }
    alert(pass1 + " " + "to złe hasło")
}