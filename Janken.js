
const compArray = ["Rock","Paper","Scissors"];

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * compArray.length);
    
    const item = compArray[randomIndex];
    
    return item;
}

const result = getComputerChoice(Array)
console.log(result)