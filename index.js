function palindrume(string) {
    string = string.toLowerCase();
    var charactersArr = string.split("");
    var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

    var lettersArr = [];
    charactersArr.forEach((char) => {
        if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });

    return lettersArr.join("") === lettersArr.reverse().join("");
}

var palindrome = prompt("Input Your Text");
console.log(palindrume(palindrome));