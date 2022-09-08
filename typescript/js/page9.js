var vowelsconsonent = function (str) {
    var vowels = ['a', 'e', 'i', 'o', 'i', 'u', 'A', 'E', 'I', 'O', 'I', 'U'];
    str.replace(/\s/g, "");
    var letters = str.split('');
    var result = '';
    for (var i in letters) {
        if (vowels.includes(letters[i] || '')) 
        // if(vowels===letters[i] || ' ')
        {
            result += letters[i];
        }
        else {
            result += letters[i] + 'o' + letters[i];
        }
    }
    console.log(result);
};
var str = 'this is fun';
vowelsconsonent(str);
