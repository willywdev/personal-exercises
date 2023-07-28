console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "General Kenobi") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!
function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

handleUserLogin(showWelcomeMessage, showErrorMessage, "General Kenobi");
handleUserLogin(showWelcomeMessage, showErrorMessage, "General Grievous");
