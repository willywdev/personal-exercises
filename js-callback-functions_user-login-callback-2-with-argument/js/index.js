console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
function showWelcomeMessage(userName) {
  console.log("Welcome " + userName);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((userName) => {
  console.log("Welcome General Kenobi! Oh it's " + userName);
});
