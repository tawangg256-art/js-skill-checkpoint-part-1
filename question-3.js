// Question #3
let userPassword = "ssswnalWadqQ";
// let userPassword = "TechUp";
// let userPassword = "abcde";
function checkPasswordStrength(password) {
    if (password.length < 6) {
        return "Weak";
    } else if (password.length >= 6 && password.length < 10) {
        return "Medium";
    } else {
        return "Strong";
    }
}
console.log(checkPasswordStrength(userPassword));
