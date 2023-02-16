function solution(arr1,arr2) {
    var answer = [[], []];
    
    for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr1[i].length ; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}


// function solution(arr1, arr2) {
//     var answer = [[[]];
//     var lenRow = arr1[0].length;
//     var lenCol = arr1.length;
//     var temp = [];]
    
//     for (let i = 0 ; i <lenCol ; i++){
//         for (let j = 0 ; j < lenRow ; j++){
//             temp[j] = (arr1[i][j]+arr2[i][j])
//         }
//         answer[i] = temp;
//         temp = [];
//     }
    
//     return answer;
// }