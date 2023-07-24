
//< !------------A Script For "About" ---------->

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}



//<!-------------- A Script For "Side Menu" ------------>

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0"
}
function closemenu() {
    sidemenu.style.right = "-200px"
}




// < !------------- A Script For "Contact" ------------->

let scriptURL = "https://script.google.com/macros/s/AKfycbxeBGNz8PDHZs6d2DQ_cKosxZxArMgcnn6t59kfZzCmyOnJaFQ3tze3xFjEEcr68Ck/exec"
let form = document.forms["submit-to-google-sheet"]
let msg = document.getElementById("msg")
form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = `Your Message Has Been Sent Successfully!`
            setTimeout(function () {
                msg.innerHTML = ""
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
