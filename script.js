function username() {
    var username = prompt("Enter your name: ")
    if (username) {
        document.getElementById('username').innerHTML = username
    }
}