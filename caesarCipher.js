module.exports = caesarCipher;

function caesarCipher(text, shift) {

// Concatenate the text and shift (key) together and store in a variable called 'tape'

let tape = text + shift;

// Set the head position to the beginning of the tape


let head = 0;
 // Set the state to 'start'
let state = "start";



  // Run the loop as long as the state is not 'end'

while (state !== "end") {
    // Get the character at the current head position
    let char = tape[head];
    // If the character is a capital letter
    if ((char >= "A" && char <= "Z")  ) {
        // Shift the character by the specified number of places
      // and replace it in the tape string
    tape = tape.substr(0, head) + String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65) + tape.substr(head + 1);
    }

// If the character is the shift key, move the head position to the next character
    if (char === shift) {
    head++;
    }
// Move the head position to the next character
    head++;
 // If the head has reached the end of the tape, set the state to 'end'
    if (head >= tape.length) {
    state = "end";
    }
}
// Return the encrypted message, excluding the shift key
return tape.substr(0, tape.length - 1);
};


