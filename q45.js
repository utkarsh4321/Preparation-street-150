//Q45 Finding the Mode of Numbers in an Array

let arr = [1, 2, 2, 3, 4, 4, 4]; // find most frequent number in an array here it is 4
let n = arr.length;

const mm = new Map();
for(let i = 0;i<n;i++){
    if(mm.has(arr[i])){
        let val = mm.get(arr[i]);
        mm.set(arr[i],val + 1);
    }else{
        mm.set(arr[i],1);
    }
}
let tempVal = -1;
let mode = 0;
for(let [key,value] of mm){

    if(tempVal < value){
        tempVal = value;
        mode = key;
    }
}
console.log(mode);

