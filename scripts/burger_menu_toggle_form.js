
/* This script adds the rest of the burger menu functionality to the form page. */
/* The reason for this script to exist is only because the form page needs "max-width: 675px". */

// Was the window narrow before it was resized
var oldWindowNarrow = window.matchMedia( "(max-width: 675px)" ).matches;

/**
 * Updates the burger menu's visibility when the window is resized.
 */
function updateBurgerMenu() {

    // Is the window currently narrow
    var windowNarrow = window.matchMedia( "(max-width: 675px)" ).matches;

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

/**
 * Resets the burger menu's visibility when the page is reloaded.
 */
function resetBurgerMenu() {

    // Hides the menu if the window is narrow
    if ( window.matchMedia( "(max-width: 675px)" ).matches ) {
        hideMenu();
        burgerOff();
    }
    // Otherwise shows the menu
    else {
        showMenu();
        burgerOn();
    }
}
