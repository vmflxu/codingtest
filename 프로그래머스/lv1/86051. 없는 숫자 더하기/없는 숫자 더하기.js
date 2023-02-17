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