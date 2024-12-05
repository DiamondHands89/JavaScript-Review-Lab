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
    // Write an if ... elsestatement that:
        // 1. console.log()s "little number" if the number is entered is less than 100
        // 2. console.log()s big numberif the number is greater than or equal to 100.
            let ranVariable = 45;
            if (ranVariable < 100) {
                // console.log("little number")
            } else {
                // console.log("big number")
            }

    // G. Monkey in the Middle
    // Write an if ... else if ... elsestatement:
        // 1. console.log()little numberif the number entered is less than 5.
        // 2. If the number entered is more than 10, log big number.
        // 3. Otherwise, log "monkey".
            if (ranVariable < 5) {
                // console.log("little number")
            } else if (ranVariable > 10) {
                // console.log("big number")
            } else {
                // console.log("monkey")
            }

    // H. What's in Your Closet?
    const kristynsCloset = [
      "left shoe",
      "cowboy boots",
      "right sock",
      "Per Scholas hoodie",
      "green pants",
      "yellow knit hat",
      "marshmallow peeps"
    ];
    
    // Thom's closet is more complicated. Check out this nested data structure!!
    const thomsCloset = [
      [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
      ],[
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
      ],[
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
      ]
    ];
        // 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
            // console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

        // 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
            kristynsCloset.splice(6, 0, "raybans");
            // console.log(kristynsCloset)

        // 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
            kristynsCloset[5] = "stained knit hat";
            // console.log(kristynsCloset)

        // 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
            thomsCloset[0][0];

        // 5. In the same way, access one item from Thom's pants array.
            thomsCloset[1][1];

        // 6. Access one item from Thom's accessories array.
            thomsCloset[2][2];

        // 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
            // console.log("Thom has excessive drip today with his " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + ", and " + thomsCloset[2][2] + ".");

        // 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
            thomsCloset[1][2] = "Footie Pajamas";
            // console.log(thomsCloset);

// IV. Functions
    // A. printGreeting
    
    // B. printCool
    // Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
    function printCool(name) {
        console.log(name + " is cool")
    }
    // printCool("Cobra Kwame")

    // C. calculateCube
    // Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
    function calculateCube(number) {
        return number ** 3;
    }
    // console.log(calculateCube(3))

    // D. isVowel
    // Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
    function isVowel(char) {
        const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        return vowels.includes(char);
    }
    // console.log(isVowel("o"))

    // E. getTwoLengths
    // Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
    function getTwoLengths(string1, string2) {
        return [string1.length, string2.length];
    }
    // console.log(getTwoLengths("Jesus loves you!", "This I know!"))

    // F. getMultipleLengths
    // Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
    function getMultipleLengths(array) {
        return array.map(string => string.length);
    }
    // console.log(getMultipleLengths(["Jesus", "Loves", "Me", "This", "I", "Know"]))

    // G. maxOfThree
    // Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
    function maxOfThree(num1, num2, num3) {
        let max = num1;
        if (num2 > max) {
            max = num2;
        }
        if (num3 > max) {
            max = num3;
        }
        return max;
    }
    // console.log(maxOfThree(9727, 837237, 1971781))

    // H. printLongestWord
    // Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
    function printLongestWord(arr) {
        let longestWord = "";
        for (let i = 0; i < arr.length; i++)
            if (arr[i].length > longestWord.length) {
                longestWord = arr[i];
            }
        return longestWord
    }
    // console.log(printLongestWord(["one", "two", "three", "four", "five", "six", "seven", "eleventy-leven"]))



// OBJECTS

    // A. Make a user object
        // 1. Create an object called user.
        // 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
            const user = {
                name: "Jesus Shuttlesworth",
                email: "rayallen@mail.com",
                age: 55,
                purchased: []
            };
        
    // B. Update the user
        // 1. Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
            user.email = "jesusshuttlesworth@mail.com"
        // 2. Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
            user.age ++;
            // console.log(user);

    // C. Adding keys and values
    // You have decided to add your user's location to the data that you want to collect.
        // 1. Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
            user.location = "Boston";
            // console.log(user)

    // D. Shopaholic
        // 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
            user.purchased.push("carbohydrates")
        
        // 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
            user.purchased.push("peace of mind")

        // 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
            user.purchased.push("Merino jodhpurs")

        // 4. Console.log just the "Merino jodhpurs" from the purchasedarray.
            // console.log(user.purchased[2])

    // E. Object-within-object
        // 1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
            user.friend = {
                name: "Bugs Bunny",
                age: 30,
                location: "Looney Toon Land",
                purchased: []
            }
        
        // 2. Console.log just the friend's name
            // console.log(user.friend.name)

        // 3. Console.log just the friend's location
            // console.log(user.friend.location)

        // 4. CHANGE the friend's age to 55
            user.friend.age = 55;

        // 5. The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
            user.friend.purchased.push("The One Ring");

        // 6. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
            user.friend.purchased.push("A latte");

        // 7. Console.log just "A latte" from the friend's purchasedarray.
            // console.log(user.friend.purchased[1])

    // F. Loops
        // 1. Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
            for (let i = 0; i < user.purchased.length; i++) {
                // console.log(user.purchased[i])
            }
        
        // 2. Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
            for (let i = 0; i < user.friend.purchased.length; i++) {
                    // console.log(user.friend.purchased[i])
                }

    // G. Functions can operate on objects
        // 1. Write a single function updateUserthat takes no parameters. When the function is run, it should:
        //  it should increment the user's age by 1
        //  make the user's name uppercase
            function updateUser() {
                user.age++;
                user.name = user.name.toUpperCase();
            }
            updateUser();
            // console.log(user)

        // 2. Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.
        function oldAndLoud(person) {
            person.age++;
            person.name = person.name.toUpperCase();
        }

        oldAndLoud(user);
        // console.log(user);



    

// CAT COMBINATOR
        // 1. Mama cat
        const cat1 = {
            name: "Tickle",
            breed: "Curly-Haired",
            age: 5
        }
        // console.log(cat1.age)
        // console.log(cat1.breed)

        // 2. Papa cat
        const cat2 = {
            name: "Mr Whiskers",
            breed: "Wavy-Furred",
            age: 6
        }

        // 3. Combine Cats!
        // function combineCats(mama, papa) {
        //     // console.log(mama);
        //     // console.log(papa);
        // }
        // combineCats(cat1, cat2)



        function combineCats(papa, mama) {
            return {
                name: papa.name + mama.name,
                age: 1,
                breed: papa.breed + "-" + mama.breed
            };
        }
        const combinedCat = combineCats(cat2, cat1)
        console.log(combinedCat);