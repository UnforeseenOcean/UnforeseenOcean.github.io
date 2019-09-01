// Torbjörn Common UI Library, V1.1
console.log("Torbjörn UI Library Loaded. V1.1");


// Go to the URL, basically a shorthand for window.location.assign("URL");
// because well... I'm lazy. No sanitization done here.
function gotoPage(pageURL) {
    console.log("Moving to " + pageURL);
    window.location.assign(pageURL);
}

// Find the popup div, change the content, then display it
// The popup div must be on top of everything, even the one openWindow is looking for
function popupMsg(popupType1, msg1, popupType2, msg2, popupType3, msg3, doAfter) {
    // Log the action, disable after dev
    console.log("Popup invoked. " + "Popup 1: " + popupType1 + " Content: " + msg1);
    console.log("Popup 2: " + popupType2 + " Content: " + msg2);
    console.log("Popup 3: " + popupType3 + " Content: " + msg3);
    console.warn("This will execute: " + "'" + doAfter + "'");
    // Change the popup content to the first one
    // If the input is "AlertYN", reopen the popup immediately with the next non-empty set of messages
    // If they're undefined, skip to the action
}

// Close the popup container
// Whatever this is looking for must be the same one popupMsg is looking for
function popupMsgClose() {
    try {
        // Find the div "popup-container" and set it to not display anything
        document.getElementById("popup-container").style.display = "none";
    } 
    catch (err) {
        // Well you fucked it up, didn't you?!
        console.error("Popup close failed. Reason: " + err);
    }
    console.log("Popup closed.");
}

// Open full-page interactive overlay
// The div this is looking for must be below the popup but above everything else
function openWindow(divID, displayType) {
    // Log the action, disable after dev
    console.log("Overlay invoked. " + "Window DIV: " + divID);
    if (displayType == undefined) {
        displayType = "block";
    }
    try {
        // Set the display to whatever is given, else use "block"
        document.getElementById(divID).style.display = displayType;
    }
    catch (err) {
        // You fucked up again?! Jeez!
        console.error("Window overlay open failed. Reason: " + err);
    }
}

// Close the said overlay
// It's painful
function closeWindow(divID) {
    // Log the action, disable after dev
    console.log("Overlay closure invoked. " + "Window DIV: " + divID);
    try {
        // Set the div to display nothing
        document.getElementById(divID).style.display = "none";
    }
    catch (err) {
        // WHAT?! You really did what?!!?!?!!!!!
        console.error("Window overlay close failed. Reason: " + err);
    }
}

// AAAAAAAAAAAAAAAAAAAAAAAAAAAARGH
