const createBtn = document.getElementById("createAccountTrigger");
const modal = document.getElementById("registerModal");
const closeBtn = document.getElementById("closeModal");
const registerForm = document.getElementById("registerForm");

createBtn.addEventListener("click", function(e){
    e.preventDefault();
    modal.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    modal.classList.remove("active");
});

modal.addEventListener("click", function(e){
    if(e.target === modal){
        modal.classList.remove("active");
    }
});

function handleRegister(e){
    e.preventDefault();

    const selectedRole = document.getElementById("roleSelect").value;
    const usernameCreated = document.getElementById("regUsername").value;

    alert("Account ya " + selectedRole + " yafunguwe neza!");

    registerForm.reset();
    modal.classList.remove("active");

    document.getElementById("loginUsername").value = usernameCreated;
}

function handleLogin(e){
    e.preventDefault();
    alert("Uri kugerageza kwinjira...");
}
// Show pages in the student dashboard
function showPage(page) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(section) {
        section.style.display = "none";
    });

    document.getElementById(page).style.display = "block";
}