//challange 1: your age in days
function rspGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRspInt);
    console.log('com choic :',botChoice);
    results = decideWinner(humanChoice, botChoice);  //[0,1] human lose\ bot win
    message = finalMessage(results); //{messsage:you win , colore:green}
    rpsFrontEnd(humanChoice, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, computerChoice) {
    var rspDatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5,'scissors': 0 },
        'scissors': { 'paper': 1,'scissors': 0.5, 'rock': 0 },
    }
    var yourScore = rspDatabase[yourChoice][computerChoice];
    var computerScore = rspDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage(yourScore, computerScore) {
    if (yourScore === 0) {
        return { 'message': 'You Lost', 'color': 'red' };

    } else if (yourScore === 0.5) {
        return { 'message': 'You tied', 'color': 'yellow' };

    } else {
        return { 'message': 'You Win!', 'color': 'green' };
    }
}
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var ImagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    //lets remove all the images
        document.getElementById('rock').remove(),
        document.getElementById('paper').remove(),
        document.getElementById('scissors').remove()

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = `<img src='${imagesDatabase[humanImageChoice]}' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)'>`;
    botDiv.innerHTML = `<img src='${imagesDatabase[botImageChoice]}' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>`;
    messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color']+";font-size:60px; padding:30px; '>"+finalMessage['message']+"</h1>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(MessageDiv);

    
}





