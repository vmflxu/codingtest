function solution(numbers) {
    let answer = []
    let splicedNumber = [];
    if (numbers.length == 1) {
        return answer.sort((a, b) => a - b).filter((n, idx) => idx == answer.indexOf(n));
    }
    for (let num of numbers) {
        splicedNumber = numbers.splice(1, numbers.length - 1);
        for (let i = 0; i < splicedNumber.length; i++) {
            answer.push(num + splicedNumber[i])
        }
    }
    solution(splicedNumber);
}