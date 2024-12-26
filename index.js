function ToggleNav() {
    if (document.getElementById("navMenu").style.display === "none") {
        document.getElementById("navMenu").style.display = "block";
    } else {
        document.getElementById("navMenu").style.display = "none";
    }
}

function ToggleAcontent() {
    if (document.getElementById("Acontent").style.display === "none") {
        document.getElementById("Acontent").style.display = "block";
        document.getElementById("AcTog").style.float = "right";
        document.getElementById("AcTog").textContent = "<";
    } else {
        document.getElementById("Acontent").style.display = "none";
        document.getElementById("AcTog").style.float = "left";
        document.getElementById("AcTog").textContent = ">";
    }
}

function TogglePcontent() {
    if (document.getElementById("Pcontent").style.display === "none") {
        document.getElementById("Pcontent").style.display = "block";
        document.getElementById("PjTog").style.float = "right";
        document.getElementById("PjTog").textContent = "<";
    } else {
        document.getElementById("Pcontent").style.display = "none";
        document.getElementById("PjTog").style.float = "left";
        document.getElementById("PjTog").textContent = ">";
    }
}

function ToggleScontent() {
    if (document.getElementById("Scontent").style.display === "none") {
        document.getElementById("Scontent").style.display = "block";
        document.getElementById("ScTog").style.float = "right";
        document.getElementById("ScTog").textContent = "<";
    } else {
        document.getElementById("Scontent").style.display = "none";
        document.getElementById("ScTog").style.float = "left";
        document.getElementById("ScTog").textContent = ">";
    }
}