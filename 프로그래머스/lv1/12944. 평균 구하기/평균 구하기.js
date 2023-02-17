function solution(arr) {
    var answer = 0;
    var sum = 0;
    var count = 0;
    arr.forEach((element) => {
        sum += element;
        count++;
    })
    answer = sum/count;
    return answer;
}