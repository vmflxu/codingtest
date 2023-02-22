
function solution(n) {
    var answer = 0;
    var convert = [...String(n)];
    var len = convert.length;
    convert.sort((a,b)=>b-a);
    convert.forEach((element)=>{
        answer += element;
    })
    
    return Number(answer);
}