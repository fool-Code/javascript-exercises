const repeatString = function(text, number) {
if (number > 0)
    return text.repeat(number);
if (number == 0)
    return '';
else 
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
