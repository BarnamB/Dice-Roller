function olouTolou(){
    const diceNum = document.getElementById("diceNum").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const result = [];
    const images = [];

    for(let i=0; i<diceNum; i++){
        const randomNum = Math.floor(Math.random()*6) + 1;
        result.push(randomNum);
        images.push(`<img src = "dice${randomNum}.png" alt = "Dice ${randomNum}">`);


    }
    diceResult.textContent = `You rolled: ${result.join(", ")}`;
    diceImages.innerHTML = images.join("");

}