module.exports = function reverse (n) {

    (n < 0 ? n = -n : n = n);

    const str = n.toString();

    let i = 0;
    let result = '';

    while (i < str.length) {
        result = str[i] + result;
        i = i + 1;
    }
    return(result * 1);
};
