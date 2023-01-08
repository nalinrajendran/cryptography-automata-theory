module.exports = bitflip_dec;

function bitflip_dec(text, key) {
    // Initialize variables
    let encrypted = "";
    let decrypted = "";
    let flip = false;
    
    // Loop through each character in the text
    for (let i = 0; i < text.length; i++) {
      // Get the ASCII value of the character
      let charCode = text.charCodeAt(i);
      
      // Flip the bits according to the key
      if (key[i % key.length] === "1") {
        flip = !flip;
      }
      
      // Encrypt the character by flipping the bits
      if (flip) {
        encrypted += String.fromCharCode(charCode ^ 1);
      } else {
        encrypted += text[i];
      }
    }
    
    // Reset the flip variable
    flip = false;
    
    // Loop through each character in the encrypted text
    for (let i = 0; i < encrypted.length; i++) {
      // Get the ASCII value of the character
      let charCode = encrypted.charCodeAt(i);
      
      // Flip the bits according to the key
      if (key[i % key.length] === "1") {
        flip = !flip;
      }
      
      // Decrypt the character by flipping the bits
      if (flip) {
        decrypted += String.fromCharCode(charCode ^ 1);
      } else {
        decrypted += encrypted[i];
      }
    }
    
    return decrypted
  };
  