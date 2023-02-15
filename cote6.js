// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    var sampleSet = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    var inputSet = new Set(numbers);
    var sum = 0 ;
    inputSet.forEach((element)=>{
        sampleSet.delete(element);
    });
    sampleSet.forEach((element)=>{
        sum += Number(element);
    });
    var answer = sum;
    console.log(answer);
    return answer;
}