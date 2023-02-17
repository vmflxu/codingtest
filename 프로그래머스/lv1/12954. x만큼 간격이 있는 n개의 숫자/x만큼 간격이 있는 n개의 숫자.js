function solution(x,n){
    // 1. answer라는 빈 배열을 만들어.
    var answer = [];
    
    // 2. 배열에서.. x부터 시작해서, x씩 증가하려면? i번째방의 값은, i-1번째 방의 값에 x를 더한값이다.
    // 3. 반복문을 돌려, i=0 부터, n만큼 반복해라.    
    for( let i = 0 ; i<n ; i++ ){
        // answer[i] = x * (i+1);
        if( i == 0){
            answer[i] = x;
        } else {
            answer[i]  = answer[i-1] + x    
        }
    }
    // 4. answer를 리턴해라.
    return answer;
}















// function solution(x, n) {
//     var answer = [x];
//     for (let i = 1 ; i < n ; i++){
//         answer.push(answer[i-1]+x);
//     }
//     return answer;
// }