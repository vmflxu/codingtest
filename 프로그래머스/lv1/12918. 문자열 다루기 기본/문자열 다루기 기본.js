function solution(s) {
    var answer;

    if(s.length === 4 || s.length ===6){
    } else {
        return answer = false;
    }
    
    if(isNaN(s)){
        answer = false;
    } else {
        answer = true;
    }
    
    return answer;
}



// // 슈도코드를 습관화해라. 코드가 익숙해질때까지는.


function solution(s) {
    var answer = true;
    var convert = [...s];
    var len = convert.length;
    if(len == 4 || len == 6){   
    } else {
        answer = false;
        return answer;
    }

    convert.forEach((element) => {
        var temp = Number(element);
        if( !temp && temp!=0 ){
            answer = false;
        }
    });
    return answer;
}