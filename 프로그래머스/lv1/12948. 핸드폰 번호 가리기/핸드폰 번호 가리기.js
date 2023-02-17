function solution(phone_number) {
    var answer = '';
    var convert = [...phone_number]
    var len = convert.length;
    convert.forEach((element,index)=>{
        if(index <len-4){
            answer +='*';
        } else {
            answer += String(element);
        }
        
    });
    return answer;
}