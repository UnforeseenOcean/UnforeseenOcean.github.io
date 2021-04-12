// Torbjörn Name Generator library v1.0
// This uses phonemes instead of words, making it sound absolutely random yet at leaast pronuncible.

// Do not move into any other function
var output_namegen = "";
const phoneme = ["aa", "ae", "ai", "ao", "au", "ba", "be", "bi", "bo", "bu", "ca", "ce", "ci", "co", "cu", "da", "de", "di", "do", "du", "ea", "ee", "ei", "eo", "eu", "fa", "fe", "fi", "fo", "fu", "ga", "ge", "gi", "go", "gu", "ha", "he", "hi", "ho", "hu", "ia", "ie", "i", "io", "iu", "ja", "je", "ji", "jo", "ju", "ka", "ke", "ki", "ko", "ku", "la", "le", "li", "lo", "lu", "ma", "me", "mi", "mo", "mu", "na", "ne", "ni", "no", "nu", "oa", "oe", "oi", "oo", "ou", "pa", "pe", "pi", "po", "pu", "ra", "re", "ri", "ro", "ru", "sa", "se", "si", "so", "su", "ta", "te", "ti", "to", "tu", "ua", "ue", "ui", "uo", "u", "va", "ve", "vi", "vo", "vu", "wa", "we", "wi", "wo", "wu", "ya", "ye", "yo", "yu", "za", "ze", "zi", "zo", "zu"];
// Single letters
const singlelets = ["a", "e", "i", "o", "u"];
// Add head if the length is less than or equal to 6
const head = ["God", "Goddess", "Private", "Pilot", "Warfighter", "Inquisitor", "Medic", "Lieutenant", "Soldier", "Commander", "Officer", "Codename", "Half of", "Manager", "Worker", "Slave", "Master", "Nameless", "Speaksperson", "Subject", "Chronologist", "Tactician", "Magician", "Fighter", "Warrior"];
// Add tail if the length is more than 6
const tail = ["The First", "The Last", "The Forsaken", "The Nameless", "The Dwarf", "The Orc", "II", "III", "IV", "V", "The Explorer", "The Destroyer", "The Barbarian", "The Mage", "The Warlock", "The Ranger", "The Abomination", "The Troublemaker", "Version 2.0", "The Fighter", "The Monk", "The Wizard", "The Xyzzy", "The God", "The Immortal", "The Warrior", "The GM", "The Evil", "The Malicious", "The Spiteful", "The Happy", "The Depressed"];

// End of settings
console.log("Phoneme array length: " + phoneme.length);
console.log("Head array length: " + head.length);
console.log("Tail array length: " + tail.length);
// Use placename(id, length1); instead of generate(); or namegen(length);

function placename(id, length1) {
    document.getElementById(id).innerHTML = namegen(length1);
    output_namegen = "";
}

function namegen(length) {
    if (length == "rand" || length == undefined) {
        length = Math.round(Math.random() * 2 + 2);
    }
    for (var i = 0; i < length; i++) {
        generate();
    }
    console.log("Name: " + output_namegen);
    return output_namegen;
}

function generate() {
    var dice1 = Math.round(Math.random() * 5);
    var dice2 = Math.round(Math.random() * phoneme.length);
    var tmp = phoneme[dice2];
    if (tmp != undefined) {
        output_namegen += tmp;
    } else {
        console.error("Result is undefined, rerolling.");
        var tmp = phoneme[dice2];
    }
    return output_namegen;
}
