const textInput = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

/*  
Indicar si es un palíndromo mediante un texto
    limpiar input (solo alfanumerico)
    aplicar mayuscula al texto limpio
    comparar si es igual su original y su reverso
    si es igual agregar texto, sino agregar otro texto a p
        
*/

const detectPalindrome = (str) => {
    const cleanedString = cleanInputString(str).toUpperCase();
    
    isAPalindrome(cleanedString) ? result.innerHTML = `<strong>${str}</strong> is a palindrome` : result.innerHTML = `<strong>${str}</strong> is not a palindrome`;
}

const cleanInputString = (originalStr) => {
    const regex = /[\W_]/g;
    return originalStr.replace(regex, "");   
}

const isAPalindrome = (cleanedString) => {
    const reverseStr = cleanedString.split("").reverse().join("");
    return (cleanedString === reverseStr) ? true : false;
}

button.addEventListener("click", () => {
    if(textInput.value === "") {
        alert("Please input a value")
    } else {
        detectPalindrome(textInput.value)}
})

console.log(cleanInputString("A man, a plan, a canal. Panama"))