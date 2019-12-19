//I heavily struggled with this assignment. I am trying my best to grasp JS. I spent a TON of time going
//essentially nowhere and getting extremely frustrated. I met with a friend who knows JS well and he walked 
//me though creating this in the simplest way possible. I have fully commented this to my best ability
//explaining each step of the code and what is accomplishes. I want to make it clear that I am not trying to
//pass this code off as 100% my own creation as I was walked through the creation of multiple portions of the
//code. I intend to continue studying this and fully understand and conceptualize every peice of code.




function generate() {  //creates main function to be used on onClick of my button
    let passLength = prompt(  //creates variable that is = to the response of chosen pass length
      "How many characters would you like your password to be? Your password must be between 8-128 characters!"
    );
    let values = [  //this is my array of possible characters seperated into strings
      "!@#$%^&*()=+[]?",
      "0123456789",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "abcdefghijklmnopqrstuvwxyz"
    ];
  
    let password = "";  //creates my password variable which will hold the randomized password
    let options = [     //creates variable that represents the 4 checkable boxes
      "inlineCheckbox1", //Special Characters
      "inlineCheckbox2", //Numbers
      "inlineCheckbox3", //Uppercase
      "inlineCheckbox4"  //Lowercase
    ];
    function getRandomInt(max) { //creates a function to get a random number                                     
      return Math.floor(Math.random() * Math.floor(max)); //this function will be used later to get a random number for my seed variable.
    }
    if (passLength >= 8 && passLength <= 128) { //checks if the passLength chosen is viable
      let allUnchecked = true; // creates a variable and assigning it to true
      for (option of options) { // run a loop and check if any of the boxes are checked
        if (document.getElementById(option).checked) {
          allUnchecked = false; //if any of them are checked make allUnchecked false
        }
      }
      if (!allUnchecked) { //if allUnchecked is false
        for (let i = 0; i <= passLength; i++) { //run this loop until passLength is satisfied
          let seed;  //seed holds the value for what type of characters we will generate on this loop
          do {
            seed = getRandomInt(options.length); //randomly select an option of my options array
            console.log("seed: ", seed);
            console.log(document.getElementById(options[seed]).checked);
          } while (!document.getElementById(options[seed]).checked); //check to see if that type was selected otherwise choose again
  
          password =  
            password +  // this will add a character each loop to my password randomly selected based on which randomized seed was already chosen
            values[seed].charAt( Math.floor(Math.random() * Math.floor(values[seed].length - 1))
            );
        }
      }
      else { //if they didn't check any boxes the loop will not have run and give them this alert based on if(!allUnchecked) and end the loop
        alert("CHECK A DAMN BOX!");
      }
      
    } 
        else { //if they didn't choose between 8-128 char alert this and end the loop.
        alert("I SAID BETWEEN 8-128!... CHOOSE WISELY");
    }
  
    document.getElementById("securepass").value = password; //this is value because it is an input. I would rewrite this as innerHTML if it was text in a div.
    console.log(password);
  }
  
  function clipboard() { //clipboard function that doesnt work on text in say a <p>. Only works with <input>
    let copyClip = document.getElementById("securepass"); //variable that holds the "securepass" input text
    copyClip.select(); //selects text
    document.execCommand("copy"); //copies selected text
  }
  
