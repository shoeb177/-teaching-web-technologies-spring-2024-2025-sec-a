function login() {
    alert("Login successful!");
    window.location.href = "../profile/view-profile.html";
  }
  
  function signup() {
    alert("Registered! Check your email to verify.");
    window.location.href = "verify-email.html";
  }
  
  function sendResetLink() {
    alert("Reset link sent to your email.");
    window.location.href = "reset-password.html";
  }
  
  function resetPassword() {
    alert("Password has been reset!");
    window.location.href = "login.html";
  }
  
  function saveProfile() {
    alert("Profile updated!");
    window.location.href = "view-profile.html";
  }
  
  function changePassword() {
    alert("Password changed!");
    window.location.href = "view-profile.html";
  }
  
  function uploadAvatar() {
    alert("Avatar uploaded!");
    window.location.href = "view-profile.html";
  }
  