document.getElementById("submit_btn").addEventListener("click", function () {
  let userEmail = document.getElementById("user_email");
  let email = userEmail.value;
  //    console.log(email);
  let userPassword = document.getElementById("user_password");
  let password = userPassword.value;
  //    console.log(password);
  if (email === "imran@gmail.com" && password === "imran1234") {
    window.location.href = "bank.html";
  } else {
    alert("invalid User");
  }
});
