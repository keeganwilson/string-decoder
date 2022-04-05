const decoder = code => {
    code = code.split('');
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    let decodedArr = [];
    for (let i = 0; i < code.length; i++) {
        if (number.includes(code[i])) {
            decodedArr.push(code[i + (Number(code[i]) + 1)])
        }
    }
    const decoded = decodedArr.join('')
    return decoded
}  

console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('3vdfn'))
console.log(decoder('0r'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))