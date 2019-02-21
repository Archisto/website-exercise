
// This adds the rest of burger menu toggle script to the front page

// Was the window narrow before it was resized
var oldWindowNarrow = window.matchMedia( "(max-width: 600px)" ).matches;

// Updates the burger menu's visibility when the window is resized
function updateBurgerMenu() {

    // Is the window currently narrow
    var windowNarrow = window.matchMedia( "(max-width: 600px)" ).matches;

    // Hides the burger menu if the window goes from wide to narrow
    if (windowNarrow && !oldWindowNarrow) {
        hideMenu();
        burgerOff();
    }
    // Shows the burger menu if the window is wide
    else if (!windowNarrow) {
        showMenu();
        burgerOn();
    }

    // Stores the new windowNarrow value to the old
    oldWindowNarrow = windowNarrow;
}

// Resets the burger menu's visibility when the page is reloaded
function resetBurgerMenu() {

    if ( window.matchMedia( "(max-width: 600px)" ).matches ) {
        hideMenu();
        burgerOff();
    } else {
        showMenu();
        burgerOn();
    }
}