(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('-BeZauXTcWVY9NBqG');
})();

window.onload = function() {
    // Add event listener to submit button on page load
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        // Stop form from reloading the page
        event.preventDefault();
        // Get form values
        let username = document.getElementById('user-name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;
        // Create params object with email settings
        let params = {
            to_name: username,
            to_email: email,
            from_name: "Wordle Clone!",
            message: message,
            reply_to: "no-reply@wordleclone",
        }
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.send("wordle_clone","wordle_clone_template", params)
            .then(function() {
                console.log('SUCCESS!', params);
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}