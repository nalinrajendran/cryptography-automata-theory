module.exports = stringMatching;

function stringMatching(str1, str2) {
    // Concatenate the two strings with a blank space at the end
    let tape = str1 + " " + str2 + " ";
    // Set the head position to the beginning of the tape
    let head = 0;
    // Set the state to 'start'
    let state = "start";
  
    // Run the loop as long as the state is not 'end'
    while (state !== "end") {
      // Get the character at the current head position
      let char = tape[head];
      // If the character matches the next character in the second string
      if (char === str2[0]) {
        // Move the head to the next character and shift the second string by one character
        head++;
        str2 = str2.substr(1);
        // If the second string is empty, set the state to 'end'
        if (str2.length === 0) {
          state = "end";
        }
      }
      // If the character does not match the next character in the second string
      else {
        // If the character is not a blank space, set the state to 'end' and return false
        if (char !== " ") {
          state = "end";
          return false;
        }
        // Move the head to the next character
        head++;
        // If the head has reached the end of the tape, set the state to 'end'
        if (head >= tape.length) {
          state = "end";
        }
      }
    }
  
    // Return true if the state is 'end' (meaning the strings are equivalent)
    return true;
  }

  