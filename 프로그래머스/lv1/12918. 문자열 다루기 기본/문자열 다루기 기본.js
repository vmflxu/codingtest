
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