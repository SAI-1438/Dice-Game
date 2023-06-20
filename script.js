let imgDice = document.getElementById('item_dice_img');
let item_roll = document.getElementById('item_roll');
let secondBtn = document.getElementById('item_dice2');
let item_child1 = document.getElementById('item_child1');
let turn1 = document.getElementById('turn1');
let turn2 = document.getElementById('turn2');
let playerChance = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
function newgame(){
    location.reload();
}
(function(){
    item_roll.style.display = "none"
    secondBtn.style.display = "none"
    turn1.style.display = 'none'
    turn2.style.display = 'none'
    imgDice.style.display = 'none'
})()

function playerOne(){
    let item_playerOne = document.getElementById('item_player1').value;
    if(item_playerOne.length >=1){
        document.getElementById('item_player1').style.display = 'none'
        let playerOne = document.getElementById('playerOne');
        playerOne.innerText = item_playerOne;
        document.getElementById('item_dice1').style.display = 'none'
        secondBtn.style.display = "inline-block"
    }
    else{
        alert("Please Enter Name...")
    }
}

function playerTwo(){
    let item_playerTwo = document.getElementById('item_player2').value;
    if(!item_playerTwo.length){
        alert("Enter Enter Name..")
    }
    else{
        document.getElementById('item_player2').style.display = 'none'
        let playerOne = document.getElementById('playerTwo');
        playerOne.innerText = item_playerTwo;
        document.getElementById('item_dice2').style.display = 'none';
        item_roll.style.display = 'block';
        turn1.style.display = 'block'
        imgDice.style.display = 'block'
    }
}

function rollDice(){
    let randomNumber = Math.floor(Math.random()*6 + 1);
    if(playerChance % 2 === 1 && playerOneScore < 100 && playerTwoScore < 100){
        playerChance++;
        if(randomNumber ===1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5 || randomNumber === 6){
            const diceImage = 'Asset/'+ randomNumber + '.jpg';
            document.getElementById('item_dice_img').setAttribute('src',diceImage)
            playerOneScore += randomNumber;
            document.getElementById('item_resultOne').innerText = playerOneScore;
            // console the value of player one
            console.log(`Player chance ${playerChance}, Player 1 Random Number ${randomNumber}`);
            console.log(`player 1 score ${playerOneScore}`);
            turn1.style.display = 'none'
            turn2.style.display = 'block'
        }
    }
    else if(playerChance % 2 === 0 && playerTwoScore < 100 && playerOneScore < 100){
        playerChance++;
        if(randomNumber ===1 || randomNumber === 2 || randomNumber === 3 || randomNumber === 4 || randomNumber === 5 || randomNumber === 6){
            playerTwoScore += randomNumber;
            const diceImage = 'Asset/'+ randomNumber + '.jpg';
            document.getElementById('item_dice_img').setAttribute('src',diceImage);
            document.getElementById('item_resultTwo').innerText = playerTwoScore;
            // console the value of player 2
            console.log(`Player chance ${playerChance}, Player 2 Random Number ${randomNumber}`);
            console.log(`player 2 score ${playerOneScore}`);
            turn1.style.display = 'block'
            turn2.style.display = 'none'
        }
    }
    if(playerOneScore >= 100 || playerTwoScore >=100){
        let winner1 = document.getElementById('winner1');
        let winner2 = document.getElementById('winner2');
        let child1 = document.getElementById('item_child1');
        let child2 = document.getElementById('item_child2');
        child1.style.display = 'none'
        child2.style.display = 'none'
        item_roll.style.display = 'none'
        imgDice.style.display = 'none'
        if(playerOneScore >= 100){
            winner1.innerHTML = `You are the Winner`
        }
        else if(playerTwoScore >= 100){
            winner2.innerHTML = `You are the Winner`
        }
    }
}