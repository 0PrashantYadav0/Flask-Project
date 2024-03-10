//create a alert with the message "Welcome to do made from Flask"
if (!localStorage.getItem('alertShown')) {
    alert("This is a one-time alert!");
    // Set a flag in localStorage to indicate the alert has been shown
    localStorage.setItem('alertShown', 'true');
}
console.log("Made by Prashant")