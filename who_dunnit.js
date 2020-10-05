// Episode 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

// Prediction: The murderer is Miss Scarlet
// Reason: The scenario variable is within the lexical scope



// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: Error, cannot re-assign a const variable
// Reason: When the function assigned to the variable changeMurderer is called it will create the error.



// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Prediction: First Verdict: The murderer is Mrs. Peacock. Second Verdict: The murderer is Professor Plum
// Reason: When the declareMurder function is run it has the murderer assigned to Mrs Peacock within the function and returns the line within the fuction, it has not re-assigned the murderer variable, as it is all done within the function scope. The second verdic doesn't have access to the variable inside the declareMurderer function and so returns Professor Plum as this is in the lexical scope.



// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Prediction: The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. Suspect three is Mrs Peacock
// Reason: The declareAllSuspects function re-assigns suspectThree within the function and returns the message with it changed to Colonal Mustard as this is within the function scope. As the 2nd console.log does not have access to the function scope it uses the original variable of Mrs. Peacock within the lexical scope.



// Episode 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

// Prediction: The weapon is the Revolver
// Reason: The scenario variable, although a const, can have a value amended within it. The the first function updates the weapon while the second returns the updated weapon.



// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: The murderer is Mrs. White.
// Reason: The original murderer variable is let, so can be altered. The plotTwist funtion is created and called within the same function scope and to alters the variable to Mrs. White.



// Episode 7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Prediction: The murderer is Miss Scarlet
// Reason: The original murderer variable is let, so can be re-assigned. Each of the functions within the changeMurderer function, call the function within it's function scope and so the outcome is that the original murderer variable changes to Miss Scarlet.



// Episode 8

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

// Prediction: The weapon is Candle Stick.
// Return: No variables are being re-assigned, it is just details of the object which are being updated.



// Episode 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Prediction: The murderer is Mrs. Peacock
// Reason: As the if statement is true it re-assignes the let variable of murderer to Mrs. Peacock, which is then logged when the delareMurderer function is called.