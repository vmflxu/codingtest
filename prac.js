function solution(numbers) {
    var answer = [];
    var temp = [];
    subSum(numbers,temp);
    
    temp.sort((a,b) => a-b);
    for (let i = 0 ; i < temp.length ; i++) {
        if(temp[i] != temp[i+1]){
            answer.push(temp[i]);
        }
    }
    return answer;
}

function subSum(arr,result){ 
    if(arr.length == 1) return 0;
    var sp = arr.splice(1,arr.length-1);
    for ( let i = 0 ; i < sp.length ; i++ ){
        result.push(arr[0]+sp[i]);
    }
    subSum(sp,result);
}