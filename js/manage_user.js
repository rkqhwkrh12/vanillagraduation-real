const userForm = document.querySelector("#user_management_form");
const userFormInput = document.querySelector("#user_management_form input");
const userName = document.querySelector("#user_name");
const login = document.querySelector("#log_in");

const USER_KEY = "username";
const HIDDEN_CLASS = "hidden";

function manageUser(event){
    //submit하는 동작을 잠시 멈춰줌.
    event.preventDefault();
    // console.dir(userFormInput); >> form에 입력되는 값이 value임을 알 수 있음.
    userForm.classList.add(HIDDEN_CLASS); //classList를 
    const userNameValue = userFormInput.value;
    localStorage.setItem(USER_KEY, userNameValue);
    greeting(userNameValue);

}

function greeting(username){
    userForm.classList.add(HIDDEN_CLASS);
    login.innerText="";
    userName.innerText = `Welcome ${username}! Today is yours!`;
}

const savedName = localStorage.getItem(USER_KEY);

if(savedName === null) {
    userForm.classList.remove(HIDDEN_CLASS);
    userForm.addEventListener("submit", manageUser);
} else {
    
    greeting(savedName);
}
