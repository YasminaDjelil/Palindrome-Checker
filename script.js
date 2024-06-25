document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text-input");
  const checkButton = document.getElementById("check-btn");
  const result = document.getElementById("result");

  function checkBtn() {
    const str = textInput.value;
    if (!str) {
      alert("Please input a value");
      return;
    }
    isPalindrome(str);
  }

  function isPalindrome(string) {
    const formattedStr = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseStr = formattedStr.split("").reverse().join("");
    result.className = "results-div";
    if (reverseStr === formattedStr) {
      result.innerText = `${string} is a palindrome`;
    } else {
      result.innerText = `${string} is not a palindrome`;
    }
  }

  checkButton.addEventListener("click", checkBtn);
});
