function solution(participant, completion) {
    var part = participant;
    var comp = completion;
    var partOj = {};
    var compOj = {};
    for (let i = 0 ; i < part.length ; i++ ){
        if(!partOj[part[i]]){
            partOj[part[i]] = 1;
        } else {
            partOj[part[i]]++;
        }
    }
    for (let i = 0 ; i < comp.length ; i++ ){
        if(!compOj[comp[i]]){
            compOj[comp[i]] = 1;
        } else {
            compOj[comp[i]]++;
        }
    }
    const keys = Object.keys(partOj);
    for (let i = 0 ; i < keys.length ; i++)
    {
        if(compOj[keys[i]]!=partOj[keys[i]]){
            return keys[i];
        }
    }
}

// function solution(participant, completion) {
//     completion.forEach((element)=>{
//         participant.splice(participant.indexOf(element),1);
//     })
//     return participant[0];
// }