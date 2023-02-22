function solution(a, b) {
    const daysInMonth = [31,29,31,30,31,30,31,31,30,31,30,31];
    var answer = '';
    var days = -1;
    var launchCalCul = (a,b) => {
        daysInMonth.forEach((element,index)=>{
            if(index<a-1){
                days += element;
            } else if (index>=a-1){
                days -= 0;
            };
        })
        days += b;
    }
    launchCalCul(a,b);
    switch(days%7){
        case 0:
            answer = "FRI";
            break;
        case 1:
            answer = "SAT";
            break;
        case 2:
            answer = "SUN";
            break;
        case 3:
            answer = "MON";
            break;
        case 4:
            answer = "TUE";
            break;
        case 5:
            answer = "WED";
            break;
        case 6:
            answer = "THU";
            break;
        default:
            answer = "error";
            break;
    }
    return answer ;
}
