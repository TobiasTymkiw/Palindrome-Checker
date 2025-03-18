function checkPalindrome() {
    const input = document.getElementById('text-input')
    const inputContent = input.value
    const result = document.getElementById("result")
    if (!inputContent) {
        alert("Please input a value")
    } else {
        //const reg = /[^\w]/g;
        const reg = /[^a-zA-Z0-9]/g;
        const cleanContent = inputContent.toLowerCase().replaceAll(reg, "")
        if (cleanContent === cleanContent.split("").reverse().join("")) {
            result.textContent = `${inputContent} is a palindrome.`
        } else {
            result.textContent = `${inputContent} is not a palindrome.`
        }
    }
}
