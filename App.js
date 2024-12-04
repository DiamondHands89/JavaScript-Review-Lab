// I. Variables & Datatypes
    // A. Q + A
        // 1. How do we assign a value to a variable?
            // We use the assignment operator (=).
            // let x = 3

        // 2. How do we change the value of a variable?
            // We use the assignment operator again (=)... assuming we didn't use const to assign it in the first place.
            // let x = 5

        // 3. How do we assign an existing variable to a new variable?
            // let agent = "DiamondHands"
            // let codeName = agent

        // 4. Remind me, what are declare, assign, and define?
            // Declare creates the variable: let x
            // Assign gives the variable a value: x = 10
            // Define is both together: let x = 10

        // 5. What is pseudocoding and why should you do it?
            // Planning out your code in human language as opposed to computer language. It's easier for the humans to read.

        // 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
            // 70%-30%



    // B. Strings
        // For all other questions that involve writing code, you can solve them via the following instructions.
            
        // 1. Create a variable called firstVariable
            let firstVariable;

        // 2. Assign it the value of the string "Hello World"
            firstVariable = "Hello World";
            // console.log(firstVariable)

        // 3. Change the value of this variable to some number
            firstVariable = 5;
            // console.log(firstVariable)

        // 4. Store the value of firstVariablein a new variable called secondVariable
            let secondVariable = firstVariable;
            // console.log(secondVariable)

        // 5. Change the value of secondVariableto any string.
            secondVariable = "Juice World";
            // console.log(secondVariable)

        // 6. What is the value of firstVariable?
            // 5

        // 7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
        // ex: Hello, my name is Jean Valjean
            let yourName = "Kevin";
            let greeting = "Hello, my name is " + yourName;
            // console.log(greeting)

    // C. Booleans
        // Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
        const a = 4;
        const b = 53;
        const c = 57;
        const d = 16;
        const e = 'Kevin';

        // console.log(a < b);
        // console.log(c > d);
        // console.log('Name' === 'Name');
        // // FOR THE NEXT TWO, USE ONLY && OR ||
        // console.log(true || false);
        // console.log(false || false || false || false || false || true);
        // console.log(false === false);
        // console.log(e === 'Kevin');
        // console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
        // console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
        // console.log(48 == '48');

    // D. The Farm
        // 1. Declare a variable animal. Set it to be either "cow" or something else
            let animal = "pig";

        // 2. Write code that will print out "mooooo" if the it is equal to cow
            if (animal === "cow") {
                // console.log("mooooo");
            } else {
                // console.log("Hey! You're not a cow.");
            }
        // 3. Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
            
        // 4. Commit

    // E. Driver's Ed
        // 1. Make a variable that holds a person's age; be semantic
            let personAge = 15;
            
        // 2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
            if (personAge >= 16) {
                    // console.log("Here are the keys!");
            } else {
                    // console.log("Sorry, you're too young");
            };

// II. Loops
    // Remember: USE letwhen you initialize your for loops!
    // This is GOOD: for(let i = 0; i < 100; i++)
    //This is NO GOOD: for(i = 0; i < 100; i++)
    // A. The Basics
        // 1. Write a loop that will print out all the numbers from 0 to 10, inclusive
            for (let i = 0; i <= 10; i++) {
                // console.log(i);
            }
        // 2. Write a loop that will print out all the numbers from 10 up to and including 400
            for (let i = 10; i <= 400; i++) {
                // console.log(i);
            }
        // 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
            for (let i = 12; i <= 4000; i += 3) {
                // console.log(i);
            };

    // B. Get Even
        // 1. Print out the numbers that are within the range of 1 - 100
        // 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
            for (let i = 1; i <= 100; i++) {
                if (i % 2 === 0) {
                    // console.log(i);
                };
            };
        
    // C. Give me Five
        // 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
        // For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
        // 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
        // 3. For numbers divisible by both three and five, be sure your code prints both messages
            for (let i = 0; i <= 100; i++) {
                if (i % 5 === 0 && i % 3 === 0) {
                    // console.log("I found a " + i + ". Three is a croud, High Five");
                } else if (i % 5 === 0) {
                    // console.log("I found a " + i + ". Hight five!");
                } else if (i % 3 === 0) {
                    // console.log("I found a " + i + ". Three is a crowd");
                }
            }

    // D. Savings Account
        // 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
            let bank_account = 0
            for (let i = 1; i <= 10; i++) {
                // bank_account += i;
            }
            // console.log(bank_account)
        // 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
            for (let i = 1; i <= 100; i++) {
                bank_account += i * 2
            }
            // console.log(bank_account)

// III. Arrays & Control flow
    // A. Talk about it:
        // 1. What are the things in an array called?
            // Elements
        // 2. Do Arrays guarantee those things will be in order?
            // Yes
        // 3. What real-life thing could you model with an array?
            // List of worlds in my game

    // B. Easy Does It
        // 1. Create an array that contains three quotes and store it in a variable called quotes
            let linen = ["sheets", "towels", "blankets"];
    
    // C. Accessing elements
    // Given the following array const 
    let randomThings = [1, 10, "Hello", true]
        // 1. How do you access the 1st element in the array?
            // randomThings[0]
        // 2. Change the value of "Hello"to "World"
            randomThings[2] = "World";
        // 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
            // console.log(randomThings)

    // D. Change Values
    const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
        // 1. What would you write to access the 3rd element of the array?
            ourClass[2]
        // 2. Change the value of "Github" to "Octocat"
            ourClass[4] = "Octocat"
        // 3. Add a new element, "Cloud City" to the array
            ourClass.push("Cloud City");
            // console.log(ourClass)

    // E. Mix It Up
    const myArray = [5, 10, 500, 20];
        // 1. Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
            myArray.push("Aegon", "Juicy");
        // 2. Remove the 5 from the beginning of the array.
            myArray.shift();
        // 3. Add the string "Bob Marley" to the beginning of the array.
            myArray.unshift("Bob Marley");
        // 4. Remove the string of your choice from the end of the array.
            myArray.pop();
        // 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
            myArray.reverse();
            // Yes
            // To change its contents directly
            // Yes
            // console.log(myArray);

    // F. Biggie Smalls