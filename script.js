//your code here
let input = document.getElementById("evaluatedText");
let counter = document.getElementById("letterCount");

input.addEventListener("input",countletters)

function countletters()
{
    counter.innerHTML=input.value.length;
}