export default class utils {
  //all functions go inside
  static add(input1, input2) {
    // A1: any JavaScript value
    // A2: any JavaScript value
    // R: a single JavaScript value
    //Returns the sum of 3 numbers
    /* Test for multi line 
        comments*/
    return input1 + input2;
  }

  static subtract(sub1, sub2) {
    //return should be the difference of the two values
    return sub1 - sub2;
  }

  static multiply(num1, num2, num3) {
    //return should be the product of the three values
    return num1 * num2 * num3;
  }

  static divide(div1, div2) {
    //return should be the quotient of the two values
    return div1 / div2;
  }

  static increment(myValue) {
    //return should add one to value
    myValue++;
    return myValue;
  }
  static decrement(myValue) {
    //return should add one to value
    myValue--;
    return myValue;
  }

  static multiDecimal(dec1, dec2) {
    //return should multiple two Decimals
    return dec1 * dec2;
  }

  static divDecimal(dec1, dec2, dec3) {
    //returns quotient of 3 decimals
    return dec1 / dec2 / dec3;
  }

  //fix these
  static concatenate(adj1, noun1) {
    //will concatenate the two inputs

    return adj1 + " " + noun1;
  }

  static concatenatePlusEquals(name1) {
    //return should concatenate adjective with phrase

    return (name1 += " is the GOAT");
  }

  static constructString(fruit) {
    //return should subtract 100 from number typed
    return "My favorite fruit is a/an " + fruit + " because it is delicious.";
  }

  static findLength(word1, word2) {
    //return should show length of each word
    return word1.length + ", " + word2.length;
  }

  static firstLetter(word1, word2, word3, word4) {
    //will return the first letter of each word
    return word1[0] + word2[0] + word3[0] + word4[0];
  }

  static nthLetter(word1, word2, word3, word4) {
    //will return the nth letter of each word
    return word1[3] + " " + word2[4] + " " + word3[2] + " " + word4[1];
  }

  static lastLetter(word1) {
    //will return the last letter in the input
    return word1[word1.length - 1];
  }

  static nthToLastLetter(word1, word2, word3, word4) {
    //will return the nth letter of each word
    return (
      word1[word1.length - 3] +
      " " +
      word2[word2.length - 4] +
      " " +
      word3[word3.length - 2] +
      " " +
      word4[word4.length - 1]
    );
  }

  static pushVar(input1) {
    //will push input to the create list
    const team = ["Lakers", " Knicks", " Celtics"];
    team.push(" " + input1);
    return team;
  }

  static popVar(input) {
    //will add the users input and pop the end of Array
    const foodList = ["bananas", "apples", "limes", "strawberry"];
    foodList.pop();
    foodList.push(input);
    return foodList;
  }

  static shiftVar(input) {
    //will add the users input and shift the front of Array
    const foodList2 = ["chicken", " sausage", " pork", " steak"];
    foodList2.shift();
    foodList2.push(input);
    return foodList2;
  }

  static unshiftVar(input) {
    //will add the users input to the front of array and shift the front of Array
    const foodList2 = ["omelete", " waffles", " french toast", " pancakes"];
    foodList2.shift();
    foodList2.unshift(input);
    return foodList2;
  }

  static listVar(foodie, num1) {
    //will add user input to a shopping list
    const foodList3 = [
      ["Apples", 4],
      ["Carrots", 6],
      ["Potatoes", 2],
      ["Milk", 5],
      ["Eggs", 12],
    ];
    foodList3.push(foodie, num1);
    return "[" + foodList3 + "]";
  }

  static standInLine(input) {
    const carList = ["car1", "car2", "car3", "car4"];
    carList.push(input);
    carList.shift();

    return carList;
  }

  // Your functions go here!
  // Counting cards
  //When user types in three numbers, they will produce numbers if they follow certain parameters.
  static countingUp(input, input2, input3) {
    var counter = 0;
    if (input > 0 && input < 10) {
      counter++;
    } else {
      counter--;
    }

    if (input2 > 0 && input2 < 10) {
      counter++;
    } else {
      counter--;
    }

    if (input3 > 0 && input3 < 10) {
      counter++;
    } else {
      counter--;
    }

    if (counter > 0) {
      return counter + " Great Score";
    } else {
      return counter + " Low Score, Try Again";
    }
    /// inputs 2, 4 , 10 should equal 1.
  }

  static nbaPlayers(name, prop) {
    /// contact lookup for NBA players
    const contactInfo = [
      {
        firstName: "Michael",
        lastName: "Jordan",
        jerseyNumber: ["23", " 45"],
        teams: ["Bulls", " Wizards"],
      },
      {
        firstName: "Lebron",
        lastName: "James",
        jerseyNumber: ["23", " 6"],
        teams: ["Lakers", " Cavaliers", " Heat"],
      },
      {
        firstName: "Kevin",
        lastName: "Durant",
        jerseyNumber: ["35", " 7"],
        teams: ["Warriors", " Thunder", " Nets"],
      },
    ];
    // for loop will search to see if firstName == user input of name
    //when then search to see if prop fit valid parameters
    for (var i = 0; i < contactInfo.length; i++) {
      if (contactInfo[i].firstName === name) {
        // will return contact prop values, if not, then display this message
        return contactInfo[i][prop] || "No such property";
      }
    }
    return "No such contact";
  }

  static generateRandom(minimum, maximum) {
    /// user can put in range and random number will generate
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  static removeSplice(index, remove) {
    /// user will be able to splice the arr using their inputs
    const arr = [
      "eggs",
      " milk",
      " bread",
      " meat",
      " cheese",
      " soda",
      " chips",
    ];
    /// index is where to start splice, remove is how many to splice from index start position
    arr.splice(index, remove);
    return arr;
  }

  static addSplice(index, remove, add1, add2) {
    //user will be able to splice from arr and add own values
    const list = [
      "eggs",
      " milk",
      " bread",
      " meat",
      " cheese",
      " soda",
      " chips",
    ];
    list.splice(index, remove, add1, add2);
    return list;
  }

  ///check for presence of an element with indexOf
  static checkFor(color) {
    let colorList = ["red", "blue", "green", "yellow", "purple"];
    if (colorList.indexOf(color) !== -1) {
      return "Your color is in the list: red, blue, green, yellow, purple";
    }
    return "No color found";
  }

  /// using typeof to check the Type of a Variable
  static checkType(input) {
    ///return the type of input ex: Boolean, Null, Undefined, Number, String, Symbol, Object

    return typeof input;
  }

  //   // Your functions go here!
  //   //Implement the filter Method on a Prototype
  //   static filteringNumbers(input) {
  //     var numbersToDivide = [44, 16, 12, 64, 9, 33, 36, 15, input]; //global

  //     Array.prototype.numFilter = function (divideNumbers) {
  //       // divideNumbers is the callback that triggers line 21
  //       //;/ filter that carries the function of 'divideByFour'
  //       var arrayFactors = []; /// empty array that results will be pushed into

  //       for (
  //         let i = 0;
  //         i < numbersToDivide.length;
  //         i++ /// goes through each index of array
  //       )
  //         if (divideNumbers(numbersToDivide[i]))
  //           // if input follows the parameters of being divisible by 4, then push those values into new array.
  //           arrayFactors.push(numbersToDivide[i]);
  //       return arrayFactors;
  //     };

  //     var divideByFour = numbersToDivide.numFilter(function (four) {
  //       //// this variable takes the array and filters out all numbers divisible by 4
  //       return four % 4 === 0;
  //     });
  //     return divideByFour;
  //   } //TODO try to add two inputs

  ///Return Part of an Array Using the slice Method
  static sliceArray(inputBeginSlice, inputEndSlice) {
    // It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice
    var inputGuards = ["Curry", " Magic", " Kyrie", " Stockton", " Nash"];
    var newArray = inputGuards.slice(inputBeginSlice, inputEndSlice);
    return newArray;
  }

  //Remove Elements from an Array Using slice Instead of splice
  static sliceNotSplice(input) {
    var inputConsoles = ["PS4", " Xbox One", " Switch", " Wii", " Dreamcast"];

    return inputConsoles.slice(0, input);
  }

  ///testing Combine Two Arrays Using the concat Method
  static userConcat(concatInput) {
    var legends = ["MJ", " Kobe", " Lebron"];
    var option1 = [" Kareem", " Wilt"];
    var option2 = [" Shaq", " Bird"];
    var option3 = [" Magic", " Pippen"];
    if (concatInput === 1) {
      return legends.concat(option1);
    } else if (concatInput === 2) {
      return legends.concat(option2);
    } else if (concatInput === 3) {
      return legends.concat(option3);
    } else {
      return legends;
    }
  }

  //////////////////////////////////////////////////
  //Add Elements to the End of an Array Using concat Instead of push//
  static concatNotPush(input) {
    var array1 = [" Red", " Blue"];
    var array2 = [" Green"];
    var array3 = [" Yellow"];
    var array4 = [" Purple"];
    var array5 = [" Orange"];

    if (input === "green" || input === "Green") {
      return array1.concat(array2);
    } else if (input === "yellow" || input === "Yellow") {
      return array1.concat(array3);
    } else if (input === "purple" || input === "Purple") {
      return array1.concat(array4);
    } else if (input === "orange" || input === "Orange") {
      return array1.concat(array5);
    } else {
      return "Please enter a different color";
    }
  }

  //////Use the reduce Method to Analyze DataPassed

  static reduceAndAccumulator(input) {
    var numbers = [3, 4, 5, 6, 7, 8, 35, 67, input];
    var sum = function (accumlator, currentIndexValue) {
      return accumlator + currentIndexValue; /// starts at the 0 index - accum = 0 + current = 3 => accum = 3 + current = 4 => accum = 7 + current + 5..etc.
    };
    var averageNumbers = numbers.reduce(sum) / numbers.length; //The reduce method iterates over each item in an array and returns a single value
    /// takes the array numbers and uses the reduce method to add all values together
    /// the value is then divide by the total length of the array
    if (input === null || input === "") {
      // if input is empty then display error message // https://stackoverflow.com/a/21017888
      return "Please type in a number";
    } else {
      return averageNumbers;
    }
  }

  ///Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
  // we want to filter the array with only strings, the map the array by capitatlizing the filtered elements
  static complexProblem(input) {
    const randomArray = [
      3,
      "coding",
      4,
      "tyler",
      true,
      5,
      null,
      false,
      "cat",
      input,
    ];
    let justStrings = randomArray
      .filter((strings) => {
        if (typeof strings === "string") {
          /// after console logging, can confirm that this filters out the strings
        }
        return strings;
      })
      .map(function (strings) {
        /// will take the newly adjusted array and manipulate it
        return strings.toUpperCase(); // all strings will be capitalized
      });
    return justStrings;
    // returns the array justStrings which should only have capitalized strings
  }
  // Sort an Array Alphabetically using the sort Method-->

  static abcOrder(input) {
    var abcOrder = [" Tom", " Jim", " Emily", " Bob", " Sam", " " + input];
    return abcOrder.sort(function (a, b) {
      return a === b ? 0 : a > b ? 1 : -1;
    });
  }
  // if (input !== input.toUpperCase()) {
  //    return input.charAt(0).toUpperCase() + input.slice(1); // if user input is a lowercase string, the first letter will return Uppercase, followed by the rest of the string //https://stackoverflow.com/a/1026087
  // }
  //TODO add this to function

  //Return a Sorted Array Without Changing the Original Array

  static doNotChangeArr(input) {
    var globalArray = [30, 45, 65, -4, -2, 43, input];
    var empty = [];
    return globalArray.concat(empty).sort(function (a, b) {
      // To compare numbers instead of strings, the compare function can simply subtract b from a.
      return a - b; // the array will sort the numbers in ascending order
    });
  }

  //Split a String into an Array Using the split Method

  static splittingString(input) {
    var firstSplit = "The dog.jumped-over$the fence";
    var secondSplit = "I-love)to(eat%Food";
    var thirdSplit = "Nice2to8meet3you";
    if (input === 1) {
      return firstSplit.split(/\W/); // splits all symbols and punctuations //TODO ask if you can use multiple
    } else if (input === 2) {
      return secondSplit.split(/\W/); //splits all symbols and punctuations
    } else if (input === 3) {
      return thirdSplit.split(/\d/); // splits all digits
    } else {
      return "please type a number between 1-3";
    }
  }

  ////Combine an Array into a String Using the join Method
  static joiningString(input) {
    var firstJoin = "The dog.jumped-over$the fence";
    var secondJoin = "I-love)to(eat%Food";
    var thirdJoin = "Nice2to8meet3you";
    if (input === 1) {
      return firstJoin.split(/\W/).join(" "); // splits all symbols and punctuations
    } else if (input === 2) {
      return secondJoin.split(/\W/).join(" "); //splits all symbols and punctuations
    } else if (input === 3) {
      return thirdJoin.split(/\d/).join(" "); // splits all digits
    } else {
      return "please type a number between 1-3";
    }
  }

  //Changing to Url
  static convertToUrl(input) {
    var convert1 = "Free/Code%Camp&Functional[Programming";
    var convert2 = "Turn this into a website url";
    var convert3 = "We7love8to4program";

    if (input === 1) {
      // if user types 1
      return convert1
        .toLowerCase() //converts everything in strong to lowercase
        .split(/\W/) // splits  all symbols and punctuations
        .filter(function (filtering) {
          // filters out the spaces so the return won't include: [" ", "string"]
          if (filtering !== /\W/) {
            //if string is not  all symbols and punctuations then remove and place in new array
          }
          return filtering; // move return outside of if statement
        })
        .join("-"); //joins together all strings with a hyphen in between
    } else if (input === 2) {
      return convert2
        .toLowerCase()
        .split(" ")
        .filter(function (filtertingAgain) {
          if (filtertingAgain !== " ") {
          }
          return filtertingAgain;
        })
        .join("-");
    } else if (input === 3) {
      return convert3
        .toLowerCase()
        .split(/\d/) ///split all numbers out of array
        .filter(function (filtertingOutNumbers) {
          if (filtertingOutNumbers !== /\d/) {
            //if string is not equal to a number than remove and place in new arrayß
          }
          return filtertingOutNumbers;
        })
        .join("-");
    } else {
      return "please type a number between 1-3";
    }
  }

  ////using the every method
  static checkString(inputNum) {
    var checkArray = [3, 499, 455, 234, 4, 5, 12, inputNum];
    return checkArray.every(function (lessThanFive) {
      // checks if every element in the string us a number that is less than 500
      return lessThanFive < 500;
    });
  }

  ///using the some method
  static someArray(input) {
    var multipleArray = [3, 9, 27, 36, input];
    return multipleArray.some(function (divisibleThree) {
      return divisibleThree % 5 === 0;
    });
  }

  // Convert Celsius to Fahrenheit
  static convertTemp(userTempCelsius) {
    var fahrenheit = (userTempCelsius * 9) / 5 + 32; // applies the algorithm to the user input and returns it
    return fahrenheit;
  }

  //Reverse a StringPassed
  static reverseAString(userInput) {
    var changeFromStringToArray = userInput.split(""); // split each character of input and place in own array
    return changeFromStringToArray.reverse().join(""); // the new array will then have its elements reversed but seperated by commas, .join removes and places all elements into one string
  }

  //Factorialize a Number
  static factorialize(input) {
    let outcome = 1;

    for (let i = input; i > 0; i--) {
      // for loop states that if user input is over 0, it will be multiplied by one, the input will decrement each time and then added together for the total
      outcome = outcome * i; // multiples total by i until number reaches 0 also can be written: outcome *= i
    }
    return outcome;
  }
  // Find the longest word in a string
  static longestWordString(addToString) {
    let longestWord = 0; // variable that will set longest word length to empty string
    let wordInStrings1 = addToString.split(" "); // splits string into array where the elements are each word
    for (let i = 0; i < wordInStrings1.length; i++) {
      //iterates through each word in string,increments each time by one and stops if it is greater the array's value
      if (wordInStrings1[i].length > longestWord) {
        //if length of index is greater than previous word, make that the new longest word
        longestWord = wordInStrings1[i].length;
      }
    }
    return longestWord; //TODO read up more on it
  }

  // Return Largest Numbers in Arrays
  static returnLargestNumber(input, input2, input3) {
    var newArray = [];
    var arrayOfNumber = [
      [5, 4, 455, 6, input], //array inside of array that contains user's input
      [34, 45, 75, 345, input2],
      [9, 40, 30, 20, input3],
    ];
    for (let i = 0; i < arrayOfNumber.length; i++) {
      //loop that interates through array's length and stops once it can not fulfill that condition
      let arrayIndexes = arrayOfNumber[i];
      //takes out all sub arrays and puts in indiviual arrays
      let highestNumber = arrayOfNumber[i][0];
      // starts at the 0 index of each array
      for (let j = 0; j < arrayIndexes.length; j++) {
        //interate through each array comparing one number to the next
        if (highestNumber < arrayIndexes[j]) {
          highestNumber = arrayIndexes[j]; //basically states if a number in the index is larger than the previous, make that the new highest number
        }
      }
      newArray.push(highestNumber); // once all highest numbers have been taken our of main array, push into a new one that only contains three values
    }
    console.log(newArray);

    return newArray;
  }

  //Confirming the ending of a string
  static confirmTheEnd(string, targetOfString) {
    let lengthOfTarget = targetOfString.length;
    var sliceTheEnd = string.slice(string.length - lengthOfTarget); /// takes the total length of string and subtracts the targets value to see if string ends with target
    if (sliceTheEnd === targetOfString) {
      //if subtracted amount is equal to the targeted amount then return true;
      return true;
    } else {
      return false;
    }
  }

  //Repeat a String Repeat a String
  static repeatingArray(userString, repeatNumber) {
    let repeatedResult = ""; //result will be made into a new string
    if (repeatNumber < 1) {
      return " please enter a number greater than zero"; // result 0- (-infinity) return a empty string
    }
    for (let i = 0; i < repeatNumber; i++) {
      //for loop that iterates through until value is greater than repeatNumber
      repeatedResult += userString; // the userString will repeat according to the repeatNumber, the result will be pushed into same string over and over
    }
    return repeatedResult; // must return the result to see new string
  }

  //Truncate a String
  static truncateString(string, number) {
    var truncated = string.slice(0, number); // slices the string at the start postions, takes the user number to see where the slice ends
    if (truncated < string) {
      return truncated + "..."; //if less, return the truncated amount
    } else {
      return string; // if truncated is longer then return the current string value
    }
  }
  // Finders Keepers
  static findingElement(input, input2, input3) {
    let arr = [input, input2, input3];
    let emptiedArray = [];
    for (var i = 0; i < arr.length; i++) {
      //iterates through  array
      if (arr[i] % 5 === 0) {
        // goes through each index
        return arr[i]; // which ever number is the first to pass the test, that number is returned
      } //can not add return here because the loop will stop
    }
    if (emptiedArray.length !== 0) {
      //if array is not empty
      return emptiedArray.push(arr[i]); // return new array
    } else {
      return "Insert a number that passes the test";
    }
  }

  //Basic Algorithm Scripting: Boo who
  static isABoolean(input) {
    if (typeof input === "boolean") {
      //if the parameter(user input) has a datatype of "boolean" return true
      return true;
    } else {
      return false;
    }
  }
  //Title Case a Sentence
  static titleCase(input) {
    var lowerCase = input.toLowerCase(); // turns all characters in string to lowercase
    var splitCharacters = lowerCase.split(" "); // splits all words of string into substrings inside of an array
    var manipulateCharacters = splitCharacters.map(function (mapWords) {
      // creates a new array which calls our function to manipulate each array element.
      return mapWords[0].toUpperCase() + mapWords.slice(1); // mapWords is the value of each substring, we use the upperCase method on each first character[0] // adds the rest of the substring to the newly manipulated string ex. T + yler; T = mapWords[0].toUpperCase; yler = mapwords.slice[1]
    });
    return manipulateCharacters.join(" "); // all substring now have the first letter capitalized, use join put them back into one string seperated by spaces.
  }
  // slice and splice
  static sliceNSplice(array1, array2, index) {
    var spliceSecondArray = array2.slice(); //creates a copy of second array so we can add the first one inside
    spliceSecondArray.splice(index, 0, ...array1); // splice starts at index input, and does not remove any items, the full first array will be inserted in the value of the index of the second array
    return spliceSecondArray;
  }

  //Falsy Bouncer
  static removeFalsy(input) {
    let filteredArray = input.filter(function (truthy) {
      // filter out truthy values and returns it
      return truthy;
    });
    return filteredArray; //returns new strings of all truthy values
  }
  //Where do I Belong
  static sortNumbers(array, inputNum) {
    array.push(inputNum); //push user num into array
    array.sort((a, b) => a - b); // sorts array from least to greatest, a-b will give negative number meaning a is smaller
    return array; //returns the index of the users num
  }

  ///Basic Algorithm Scripting: Mutations
  static mutations(word1, word2) {
    var firstWord = word1.toLowerCase();
    var secondWord = word2.toLowerCase(); //changes letters to lower case to help compare better
    for (var i = 0; i < secondWord.length; i++) {
      if (firstWord.indexOf(secondWord[i]) === -1) return false;
      //if the current index of secondword is in first word, stop loop
    }
    return true; //returns after loop has ended meaning all secondword's characters are in first word
  }
  //Basic Algorithm Scripting: Chunky Monkey
  static chunkyMonkeyArray(array, sizeOfArray) {
    var newArray = []; // new array to push results in
    while (array.length > 0) {
      //while array length is greater than 0, keep running function
      newArray.push(array.splice(0, sizeOfArray)); //push new array with parameters of 0 start, and length of user input
    } /// result [2,3,4,5,6],2 === [2,3],[4,5],[6]
    console.log(newArray);
    return newArray;
  }
}
