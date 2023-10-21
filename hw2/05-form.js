// Add your code here
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  //prevent the normal submission of the form
  e.preventDefault();

  // Get values from form fields
  const fullName = document.querySelector("#fullname").value;
  const email = document.querySelector("#email").value;
  const registrationStatus = document.querySelector("#registration").value;

  // Get values of the checkboxes
  const programmingCheckbox = document.querySelector("#programming").checked;
  const osCheckbox = document.querySelector("#os").checked;
  const fullstackCheckbox = document.querySelector("#fullstack").checked;

  const comment = document.querySelector("#comment").value;

  // Print the collected values to the console
  console.log("Full Name:", fullName);
  console.log("Email:", email);
  console.log("Registration Status:", registrationStatus);
  console.log("courses taken:");
  if (programmingCheckbox){
    console.log("Programming Languages");}
  if (osCheckbox){
    console.log("Operating Systems");}
  if (fullstackCheckbox) {
    console.log("Full Stack Web Development");}
  console.log("Comment:", comment);
});
