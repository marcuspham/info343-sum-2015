"use strict";

//initialize Parse library with your application ID and your app's JavaScript library key
Parse.initialize('lh211Ecwo1pymMLGys7uILhEeJO7V5TkupCAmlSz', 'SpKQU5Yfr6fEJrY6mUGwmoaMYmyNOn3h2m2uj4H2');

/**
 * Shows an error in an element on the page with the class 'error-message'
 * @param err {Object} the error to be shown
 */
function showError(err) {
    $('.error-message').html(err.message).fadeIn();
}

/**
 * Clears any currently showing error
 */
function clearError() {
    $('.error-message').fadeOut().empty();
}
