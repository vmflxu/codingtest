function solution(s) {
    var len = s.length;
    var isOdd = Boolean(len%2);
    var answer = '';
    if (isOdd) {
        answer = s[Math.floor(len/2)];
    } else {
        answer = s[len/2-1]+s[len/2];
    }
    
    return answer;
}