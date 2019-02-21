
/* This script is the base for opening and closing the burger menu. */

/**
 * Shows the burger menu.
 */
function showMenu() {
    var menu = document.getElementById('center_left');
    menu.style.display = 'block';
}

/**
 * Hides the burger menu.
 */
function hideMenu() {
    var menu = document.getElementById('center_left');
    menu.style.display = 'none';
}

/**
 * Makes the burger menu button active.
 */
function burgerOn() {
    
    // Gets the burger menu icon element
    var burgerIcon = document.getElementById('burger_menu_icon');
    
    // Sets the icon's border's color
    burgerIcon.style.borderColor = 'yellow';
    
    // Sets the icon's inner parts' color
    var c = burgerIcon.children;
    for (var i = 0; i < c.length; i += 1) {
        c[i].style.backgroundColor = 'yellow';
    }
}

/**
 * Makes the burger menu button inactive.
 */
function burgerOff() {
    
    // Gets the burger menu element
    // (the center area's left side contains
    // only the burger menu at this point)
    var menu = document.getElementById('center_left');

    // The button can be made inactive only if the burger menu is not visible
    if (menu.style.display === 'none') {
        
        // Gets the burger menu icon element
        var burgerIcon = document.getElementById('burger_menu_icon');
        
        // Sets the icon's border's color
        burgerIcon.style.borderColor = 'white';
        
        // Sets the icon's inner parts' color
        var c = burgerIcon.children;
        for (var i = 0; i < c.length; i += 1) {
            c[i].style.backgroundColor = 'white';
        }
    }
}

/**
 * Toggles between showing and hiding the burger menu.
 */
function toggleBurgerMenu() {
    
    // Gets the burger menu element
    // (the center area's left side contains
    // only the burger menu at this point)
    var menu = document.getElementById('center_left');
    
    // If the burger menu is not visible, is is made visible
    // and the burger menu icon is made active
    if (menu.style.display === 'none') {
        showMenu();
        burgerOn();
    }
    // Otherwise the burger menu is hidden
    else {
        hideMenu();
    }
}