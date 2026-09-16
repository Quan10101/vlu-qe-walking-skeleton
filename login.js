function login(user, pass) {
    if (user === "admin" && pass === "123") {
        return true;
    }

    return false;
}

if (typeof module !== "undefined") {
    module.exports = login;
}
