
/* This script adds functionality to the form. */

/**
 * Checks if the form has been correctly filled.
 * If not, the errors are highlighted.
 * If everything is OK, the user is alerted
 * of the fact and the page reloads.
 */
function validateForm() {
    
    // Stops highlighting errors
    resetAllHighlights();
    
    // If any of the 'gender' radio buttons are checked, gets true
    var genderRadioButtonChecked = (document.getElementById('gender_male').checked ||
                                    document.getElementById('gender_female').checked ||
                                    document.getElementById('gender_unknown').checked);

    // Gets all of the form's values
    var inputValue = [document.forms['center_form']['lastname'].value,
                      genderRadioButtonChecked,
                      document.forms['center_form']['car'].value,
                      document.forms['center_form']['othercar'].value];
    
    // Was there any errors
    var errorFound = false;
           
    // Checks if 'lastname' has an invalid value
    if (inputValue[0].length == 0) {
        errorFound = true;
        highlightError(0);
    }
    
    // Checks if 'gender' has an invalid value
    if (!genderRadioButtonChecked) {
        errorFound = true;
        highlightError(1);
    }
    
    // Checks if 'car' has an invalid value
    if (inputValue[2] == 'blank') {
        errorFound = true;
        highlightError(2);
    }
    
    // Checks if 'othercar' has an invalid value
    // (only if the value of 'car' is 'other')
    if (inputValue[2] == 'other' && inputValue[3].length < 3) {
        errorFound = true;
        highlightError(3);
    }
    
    if (!errorFound) {
        alert("Kiitos vastauksesta!");
        return true;
    } else {
        return false;
    }
}

/**
 * Checks if 'lastname' has a valid value and
 * higlights the input element accordingly.
 */
function checkLastname() {
    
    // Gets the input value
    var inputValue = document.forms['center_form']['lastname'].value;
    
    // Gets the 'lastname' text input element
    var lastnameInput = document.getElementById('lastname_text_input');
    
    // Checks if the text length is sufficient and
    // if so, stops higlighting the input element
    if (inputValue.length > 0) {
        resetHighlight(0);
    }
    // If not, highlights the input element
    else {
        highlightError(0);
    }
}

/**
 * Checks if 'gender' has a valid value and
 * if so, removes its higlight.
 */
function checkGenderRadioButtons() {
    
    // If any of the 'gender' radio buttons are checked, gets true
    var genderRadioButtonChecked = (document.getElementById('gender_male').checked ||
                                    document.getElementById('gender_female').checked ||
                                    document.getElementById('gender_unknown').checked);

    // Gets the 'gender' radio button input element
    var genderInput = document.getElementById('gender_radio_buttons');
    
    // If there is a checked radio button, stops highlighting the input element 
    if (genderRadioButtonChecked) {
        resetHighlight(1);
    }
}

/**
 * Checks if the selected item in the 'car' drop-down menu
 * is 'other', and if so, shows the 'othercar' text field.
 */
function checkCarDropdown() {
    
    // Stops highlighting the drop-down menu
    var carDropdown = document.getElementById('car_dropdown');
    carDropdown.style.borderColor = 'black';
    carDropdown.style.backgroundColor = 'white';

    // Gets the input value
    var carDropdownValue = document.forms['center_form']['car'].value;
    
    // Gets the 'othercar' text input element
    var othercarFormPart = document.getElementById('form_car_other');
    
    // Checks if 'other' is selected in the drop-down menu
    // and if so, shows the 'othercar' text input element
    if (carDropdownValue == 'other') {
        othercarFormPart.style.display = 'block';
    }
    // If not, hides the 'othercar' text input element
    else {
        othercarFormPart.style.display = 'none';
    }
}

/**
 * Checks if 'othercar' has a valid value and
 * higlights the input element accordingly.
 */
function checkOthercar() {
    
    // Gets the input value
    var inputValue = document.forms['center_form']['othercar'].value;
    
    // Gets the 'othercar' text input element
    var othercarInput = document.getElementById('othercar_text_input');
    
    // Checks if the text length is sufficient and
    // if so, stops higlighting the input element
    if (inputValue.length >= 3) {
        resetHighlight(3);
    }
    // If not, highlights the input element
    else {
        highlightError(3);
    }
}

/**
 * Highlights the given input element (as a number between 0 and 3).
 */
function highlightError(inputErrorNumber) {
    
    // Gets the input elements
    var input = [document.getElementById('lastname_text_input'),
                 document.getElementById('gender_radio_buttons'),
                 document.getElementById('car_dropdown'),
                 document.getElementById('othercar_text_input')];

    // Highlights the corresponding input element
    if (inputErrorNumber >= 0 && inputErrorNumber <= 3) {
        input[inputErrorNumber].style.borderColor = '#c00';
        input[inputErrorNumber].style.backgroundColor = '#ff9';
    }
}

/**
 * Stops highlighting all of the input elements.
 */
function resetAllHighlights() {
    
    // Gets the input elements
    var input = [document.getElementById('lastname_text_input'),
                 document.getElementById('gender_radio_buttons'),
                 document.getElementById('car_dropdown'),
                 document.getElementById('othercar_text_input')];

    // Loops through each input element
    for (var i = 0; i < input.length; i += 1) {
        
        // Changes the border color
        if (input[i].id == 'gender_radio_buttons') {
            input[i].style.borderColor = 'white';
        } else {
            input[i].style.borderColor = 'black';
        }
        
        // Changes the background color
        input[i].style.backgroundColor = 'white';
    }
}

/**
 * Stops highlighting the given input element (as a number between 0 and 3).
 */
function resetHighlight(inputNumber) {
    
    // Gets the input elements
    var input = [document.getElementById('lastname_text_input'),
                 document.getElementById('gender_radio_buttons'),
                 document.getElementById('car_dropdown'),
                 document.getElementById('othercar_text_input')];

    // Stops highlighting the corresponding input element
    if (inputNumber >= 0 && inputNumber <= 3) {
        
        // Changes the border color
        if (inputNumber == 1) {
            input[inputNumber].style.borderColor = 'white';
        } else {
            input[inputNumber].style.borderColor = 'black';
        }
        
        // Changes the background color
        input[inputNumber].style.backgroundColor = 'white';
    }
}

/**
 * Allows checking radio buttons by clicking their respective input label.
 */
function selectRadioButton(buttonNumber) {
    
    // Gender: male
    if (buttonNumber == 0) {
        document.getElementById('gender_male').checked = true;
    }
    // Gender: female
    else if (buttonNumber == 1) {
        document.getElementById('gender_female').checked = true;
    }
    // Gender: unknown
    else if (buttonNumber == 2) {
        document.getElementById('gender_unknown').checked = true;
    }
    
    // Gets the 'gender' radio button input element
    var genderInput = document.getElementById('gender_radio_buttons');
    
    // Stops highlighting the input element 
    resetHighlight(1);
}