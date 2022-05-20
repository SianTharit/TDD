function validateEmail(email, password) {
    if (email.length <= 5) {
        return false;
    } else if (!email.includes(".com")) {
        return false;
    } else if (!email.includes("@")) {
        return false;
    } else if (email === "") {
        return false;
    }
    if (password.length <= 5) {
        return false;
    } else if (password === null) {
        return false;
    }
    return true;
}

module.exports = validateEmail;
