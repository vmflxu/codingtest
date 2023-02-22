function solution(arr) {
    var answer = [];
    var a = Math.min.apply(null,arr);
    // a = String(a);
    var temp = arr;
    if(temp.length == 1){
        return [-1];
    }
    answer = temp.filter((element)=>{
        return element != a
    })
    return answer;
}