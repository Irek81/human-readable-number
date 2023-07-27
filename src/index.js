module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const h = ' hundred';

    let str = number.toString();
    let out = '';

    if(str.length == 1){
        out = units[number];
    } else if(str.length == 2){
        if(str[0] == 1) {
            out = teens[(str[1])];
        } else {
            out = (tens[(str[0] - 1)] + ((str[1]!='0')?(' ' + units[(str[1])]):''));
        }
    }
    else if(str.length == 3){
        out = units[str[0]] + h + ((str[1] === '0') ? ((str[2] === '0') ? '' : (' ' + units[str[2]])) : ((str[1] === '1') ? (' ' + teens[str[2]]) : (' ' + tens[str[1] - 1] + ((str[2] === '0') ? '' : (' ' + units[str[2]])))));
    }

    return out;
}
