function Subscribe() {
  const input = document.getElementById("email").value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(input)) {
    alert("You have successfully subscribed and will receive weekly emails about any updates, events and more!");
  } else {
    alert("Please enter a valid email address.");
  }
}
let enlarged = false;

