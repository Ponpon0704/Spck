let signInBox =document.getElementById("sign-in")
let signUpBox =document.getElementById("sign-up")
let signInAlert =document.getElementById("sign-in-alert")
let signUpAlert =document.getElementById("sign-up-alert")
signInAlert.addEventListener("click", () => {
   signInBox.classList.remove("hidden")
   signUpBox.classList.add("hidden") 
})
signInAlert.addEventListener("click", () => {
    signInBox.classList.add("hidden")
    signUpBox.classList.remove("hidden") 
 })