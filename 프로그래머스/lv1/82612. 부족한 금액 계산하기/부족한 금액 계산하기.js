// function solution(price, money, count){
//     var answer = 0 ;
//     // 0. sum이라는 변수를 만들자( 가격 누적용 )
//     var sum = 0;
    
//     // 1. 반복해라. count 횟수만큼 반복.
//     // 2. 1 * price, 2 * price, .., count * price 의 총합(누적된 가격)
//     // 3. ==> 반복문에서 i가 의미하는 것은, 타는 횟수가 될것이다.
//     // 4. 뭘 반복할까? sum = sum + i*price;
//     for (let i = 0 ; i < count ; i++){
//         sum = sum + (i+1) * price;
//     }
    
//     // 6. 반복이 다 끝났을때, 
//     //     money가 sum보다 작으면, 그 차이를 answer에 넣어서 리턴해라.
//     // 7. 만약, money가 같거나 크면, 0을 answer에 넣어서 리턴해라.
//     if ( money < sum ){
//         answer = sum - money;
//     } else {
//         answer = 0;
//     }
    
//     return answer;
// }









function solution(price, money, count) {
    var answer = -1;
    var sumPrice = 0;
    for (let i = 0 ; i<=count; i++){
        sumPrice += i*price;
        if(money>sumPrice) {
            answer = 0;
        } else if(money < sumPrice) {
            answer = sumPrice - money;
        }
    }

    return answer;
}