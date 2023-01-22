const reverseString = function(text) {
    var text_split = text.split('');
    
    var text_reverse = text_split.reverse();
    
    var text_join = text_reverse.join('');
    
    return text_join;
};

// Do not edit below this line
module.exports = reverseString;
