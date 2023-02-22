function solution(arr)
{
    var a = arr;
    var b = [];
    for (let i = 0 ; i < arr.length ; i++) {
        if(arr[i] != arr[i+1]){
            b.push(arr[i]);
        }
    }
    
    return b;
}