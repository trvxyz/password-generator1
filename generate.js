function generatePassword() {
    // Get the form data.
    var length = document.getElementById("length").value;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
  
    // Generate the password.
    var characters = [];
    if (uppercase) {
      characters.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (lowercase) {
      characters.push("abcdefghijklmnopqrstuvwxyz");
    }
    if (numbers) {
      characters.push("0123456789");
    }
    if (symbols) {
      characters.push("!@#$%^&*()-_=+[{]}\\|;:'\",.<>/?");
    }
    var password = "";
    for (var i = 0; i < length; i++) {
      password += characters[Math.floor(Math.random() * characters.length)];
    }
  
    // Set the password in the DOM.
    document.getElementById("password").innerHTML = password;
  }
  