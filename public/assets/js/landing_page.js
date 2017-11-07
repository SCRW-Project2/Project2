$(document).ready(function() {

  console.log("js loaded");

  var $newFirstName = $("input.first-name");
  var $newLastName = $("input.last-name");
  var $newEmail = $("input.email");
  var $newUserName = $("input.uname");
  var $newPassword = $("input.password");
  var $newRepeatPW = $("input.password2");


  $(document).on("submit", "#login-form", handleUserCreation);

  function handleUserCreation(event){
    console.log("in user creation")
     // This function inserts a new user into our database
    event.preventDefault();
    var newUser = {
      firstName: $newFirstName.val().trim(),
      lastName: $newLastName.val().trim(),
      email: $newEmail.val().trim(),
      userName: $newUserName.val().trim(),
      password: $newPassword.val().trim(),

    };

    $.post("/api/newUser", newUser);
    window.location.replace("/questionnaire.html");
  } 


  // Get the modal
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      };
  };


});