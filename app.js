const userForm = document.getElementById("userForm");
const submitButton = document.getElementById("submitButton");
        // Add an event listener to the submit button
submitButton.addEventListener("click", function() {
    // Get the values entered by the user
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Create an object to store the user details
    const userDetails = {
        name: name,
        email: email
    };

    // Convert the object to a JSON string
    const userDetailsJSON = JSON.stringify(userDetails);

    // Store the JSON string in local storage
    localStorage.setItem("userDetails", userDetailsJSON);

    alert("User details have been stored in local storage.");
});