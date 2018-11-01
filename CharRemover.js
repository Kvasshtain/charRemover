function separateWord(separatorArr, string)	{
    var start = 0,
        words = [],
        arr = string.split(''),
        bufString;

    arr.forEach(function (letter, i) {
        if (separatorArr.indexOf(letter) !== -1) {
            bufString = string.substr(start, i - start);
            if ( bufString !== "" ) words.push(bufString);
            start = i + 1;
        }
    });

    words.push(string.substr(start));

    return words;
}

function findRepeatChar(words) {
    var letters = {};

    words.forEach(function (word) {
        word.split('').forEach(function (letter, i) {
            if (!letters[letter] && -1 !== word.indexOf(letter, i + 1)) {
                letters[letter] = 1;
            }
        });
    });

    return letters;
}

function remCharsFromStr(string, remchars) {
    var result = string.split('').filter(function (v) {
        return !remchars[v];
    }).join('');

    return result;
}

function main(str){
    var sepArr = ["?", "!", ":", ";", ",", ".", " ", "\t"],
        words = separateWord(sepArr,str),
        remChars = findRepeatChar(words);

    return remCharsFromStr(str,remChars);
}

window.onload = function () {
    var input = document.getElementById("Input"),
        output = document.getElementById("Output");
        document.getElementById("Process").onclick = function() {
        output.value = main(input.value);
    };
}