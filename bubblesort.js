let arr = [12,34,10,22,100,50,11,40]


let swap = false
let temp;
for(let i = 0 ; i < arr.length  ; i++) {
    for(let z = 0 ; z < arr.length - 1  ; z++) {
        
        if(arr[z] < arr[z+1]) {
           
            temp = arr[z]
            arr[z] = arr[z+1]
            arr[z+1] = temp
        }
    }
}
console.log(arr)