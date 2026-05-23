const array = [1,2,3,4]

const result = array.reduce((prev,next) => {
    return prev + next
},0) 

console.log(result)