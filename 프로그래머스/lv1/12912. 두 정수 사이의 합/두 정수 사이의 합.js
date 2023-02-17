function solution(a, b) {
    var answer = 0;
    var sum;
    if (a==b) return a;
    if (a>b){
        sum = b;
        for(let i =b+1 ; i<=a ; i++){
            sum += i;
        }
    } else if(a<b){
        sum = a;
        for(let i = a+1 ; i<= b ; i++){
            sum += i;
        }
    }
    answer = sum;
    return answer;
}