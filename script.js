function firstWord(s) {
    // Trim leading and trailing spaces
    s = s.trim();
    
    // If the string is empty after trimming, return an empty string
    if (s === '') {
        return '';
    }
    
    // Split the string by spaces and return the first element
    return s.split(/\s+/)[0];
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
