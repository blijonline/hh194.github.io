window.onload = function() {

// function supportsLocalStorage() {
// 	try {
// 		return 'localStorage' in window && window['localStorage'] !== null;
// 	} catch(e) {
// 		return false;
// 	}
// }

  // Check for LocalStorage support.
  if (localStorage) {

    // Add an event listener for form submissions
    document.getElementById('message-user-area').addEventListener('onkeyup', function() {
      // Get the value of the name field.
      var userName = document.getElementById('textarea').value;

      // Save the name in localStorage.
      localStorage.setItem('userName', username);
    });

  }

}

    