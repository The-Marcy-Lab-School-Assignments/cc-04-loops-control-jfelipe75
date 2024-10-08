//Write your solutions in this file, don't forget to test your functions.
// Problem 1
const countFromOne = (num) => {
    for (let i = 1; i < num; i++) {
        console.log(i);
    }
};

// Problem 2
const countEveryOdd = (num) => {
    for (let i = 1; i < num; i += 2) {
        console.log(i);
    }
};

countEveryOdd(10);

// Problem 3
 const isNegative = (num) => {
    if (num < 0) {
        return true;
    } else if (num > 0) {
        return false;
    }
 };

 // problem 4

 const betweenFiveAndTwenty = (num) => {
    if (num >= 5 && num <= 20) {
        return true;
    } else {
        return false;
    }
 };

 // problem 5

 const sumOfThreeOrFive = () => {
    let sum = 0;
   for (let i = 0; i < 1000; i++) {
   
    if (i % 3 === 0) {
       sum += i;
    } else if (i % 5 === 0) {
       sum += i;
    }
   } 
   console.log(sum)
 };
 sumOfThreeOrFive()
// problem 6
 const isAllLowerCase = (str) => {
    str = str.split('');
    str.forEach((element) => {
        if (element === element.toUpperCase()) {
            console.log(false);

        } else {
            console.log(true);
        }
    });
 };
isAllLowerCase('Hello');

// 2nd solution 

const isAllLowerCase2 = (str) => {
    if (str === str.toLowerCase()) {
        console.log(true);
    } else {}
    console.log(false);
}

// bonus 



