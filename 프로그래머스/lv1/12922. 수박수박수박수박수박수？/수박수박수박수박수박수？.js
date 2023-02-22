
// for문 안에, if문이 있어야함. 그래서, 그 if문 안에서, answer에 문자를 추가해준다.

// 1. for( let i = 0 ; i < n ; i++){
//     if(i%2 == 0){
//         answer = answer + "박";
//     } else {
//         answer = answer + "수";
//     }
// }
// 2. if문 써라. 
// 2-1)  if(, answer의 기존 문자열 + "수"를 해줘라. answer = answer + "수";
// 2-2)  짝수 일때 answer에다가, answer의 기존 문자열 + "박"을 해줘라. answer = answer + "박";

// function solution(n){
//     var answer = '';
    
//     for( let i = 0 ; i < n ; i++){
//         if(i%2 == 0){
//             answer += "수";
//         } else {
//             answer += "박";
//         }    
//     }
//     return answer;
// }


function solution(n) {
    var answer = '';
    for (let i = 0 ; i < n ; i++){
        if( i%2 == 0 ){
            answer += "수";
        } else {
            answer += "박";
        }
    }
    return answer;
}