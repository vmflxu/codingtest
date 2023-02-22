function solution(seoul) {
    let answer = '';
    for (let i = 0 ; i < seoul.length ; i++ ){
        if(seoul[i] == "Kim"){
            answer = "김서방은 "+String(i)+"에 있다";
            return answer;
        }
    }
}


// function solution(seoul) {
//     let answer = '';
//     seoul.forEach((element,index)=>{
//         element == "Kim";
//         answer = "김서방은 "+String(index)+"에 있다";
//     })
//     return answer;
// }