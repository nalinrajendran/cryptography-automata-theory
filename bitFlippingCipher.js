module.exports = bitFlippingCipher;


function bitFlippingCipher(text, key) {
// Initialize empty result string
let result = "";

// Loop through each character in the text
for (let i = 0; i < text.length; i++) {
    // Get the ASCII value of the character
    let charCode = text.charCodeAt(i);

    // Flip the bits of the ASCII value using the key
    charCode ^= key;

    // Convert the ASCII value back to a character and add it to the result string
    result += String.fromCharCode(charCode);
}

return result;
};