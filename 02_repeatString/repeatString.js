const repeatString = function(text, number) {
let textRepeat = '';
while (number) {
    textRepeat += text;
    number--;
}
return textRepeat;
};

// Do not edit below this line
module.exports = repeatString;
