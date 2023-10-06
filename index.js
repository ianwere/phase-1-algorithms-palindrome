function isPalindrome(word) {
  // Write your algorithm here
  // Remove non-letter characters and convert to lowercase
  const cleanWord = word.replace(/[^a-z]/g, '').toLowerCase();

  // Compare the cleanWord with its reverse
  return cleanWord === cleanWord.split('').reverse().join('');

}

/* 
  Add your pseudocode here
   Pseudocode:
  1. Remove all non-letter characters and convert the input word to lowercase.
  2. Check if the cleaned word is equal to its reverse.
  3. If they are equal, return true (it's a palindrome); otherwise, return false.
*/

/*
  Add written explanation of your solution here
   Written Explanation:
  1. First, we remove any non-letter characters from the input word using a regular expression and convert the word to lowercase.
  2. Then, we compare the cleaned word with its reverse to determine if it's a palindrome.
  3. If the cleaned word is the same forwards and backwards, we return true, indicating it's a palindrome. Otherwise, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");
  

  console.log("Expecting: true");
  console.log("=>", isPalindrome("amanaplanacanalpanama"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("wasitacaroracatisaw"));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("nolemonnomelon"));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", isPalindrome("helloworld"));
}

module.exports = isPalindrome;
