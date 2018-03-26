        // Starting variables...Reference Car Object and myFirst Function
    
        var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        var wins = 0;
        var losses = 0;
        var guessesRemaining = 9;
        var userGuess = [];

        document.onkeyup = function(event) {
    
            var computerLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerLetter);
            //Determine which key was pressed and putting the letter to lower case regardless if caps lock is on
            var userInput = event.key;    
            document.getElementById("userGuess").innerHTML += userInput;
            document.getElementById("userGuess").appendChild(document.createTextNode(" "));
            //Input the key you pressed


         if (userInput === computerLetter) {
             wins++;
             document.getElementById("wins").innerHTML = wins;
             alert("You win, push any button to reset the game!");
             //Reset game
             guessesRemaining = 10;
             document.getElementById("userGuess").innerHTML = "";
         }
    
         else if (guessesRemaining === 0) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
            alert("Sorry, you did not guess correctly! Please press any button to reset the game.");
    
            //Reset game
            guessesRemaining = 10;
            document.getElementById("userGuess").innerHTML = "";
        }

         else if (userInput != computerLetter) {
             guessesRemaining--;
             document.getElementById("guesses-left").innerHTML = guessesRemaining;
         }
    

        }
    
