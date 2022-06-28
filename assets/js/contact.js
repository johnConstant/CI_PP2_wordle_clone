/*jshint esversion: 9 */
/* globals emailjs */

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
            reply_to: email,
        };
        let p1 = document.getElementById('password').value;
        let p2 = document.getElementById('confirm-password').value;
        // check if password fields match
        if (p1 !== p2) {
          let errorDiv = document.getElementById('errors');
          errorDiv.innerHTML = "<p>Please ensure your passwords match.</p>";
        } else {
           // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;
            // these IDs from the previous steps
            emailjs.send("wordle_clone","wordle_clone_template", params)
                .then(function() {
                    console.log('SUCCESS!', params);
                    window.location.href = '/CI_PP2_wordle_clone/thank-you.html'
                }, function(error) {
                    throw error;
                });
        }
      }
    );
};