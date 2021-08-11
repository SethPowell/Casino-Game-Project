let wallet= 100

priceToPlay= 10

rouletteWheel = [
    [0,'green'],
    [00,'green'],
    [1,'red'],
    [2,'black'],
    [3,'red'],
    [4,'black'],
    [5,'red'],
    [6,'black'],
    [7,'red'],
    [8,'black'],
    [9,'red'],
    [10,'black'],
    [11,'black'],
    [12,'red'],
    [13,'black'],
    [14,'red'],
    [15,'black'],
    [16,'red'],
    [17,'black'],
    [18,'red'],
    [19,'red'],
    [20,'black'],
    [21,'red'],
    [22,'black'],
    [23,'red'],
    [24,'black'],
    [25,'red'],
    [26,'black'],
    [27,'red'],
    [28,'black'],
    [29,'black'],
    [30,'red'],
    [31,'black'],
    [32,'red'],
    [33,'black'],
    [34,'red'],
    [35,'black'],
    [36,'red']
]

jackpot = (priceToPlay*(Math.random()*3).toPrecision(2))

function spinTheWheel() {
    randomNum = (Math.floor(Math.random()*rouletteWheel.length))
    console.log((rouletteWheel[randomNum])[0].toString())
    return (rouletteWheel[randomNum])
}
// create a loop so this runs until your wallet reaches 0 and you bust
function playRoulette() {
  if (wallet >= 10) {
    bet = prompt('What would you like to bet on?')
    console.log(bet)
    if (isNaN(bet) === false) {
      console.log('number')
      spinTheWheel()
      betNumber(bet)
    } else if (bet.toString() === 'red' || 'black') {
      console.log('color')
      spinTheWheel();
      betColor(bet);
    }
  } else {
    console.log("Sorry you're too poor to play this game")
  }
}

function betColor(bet) {
  if (bet === 'red' || 'black') {
    if ((rouletteWheel[randomNum])[1] === bet) {
        wallet += jackpot
        console.log(`How does it feel to be a winner? Well now you know because the spin came up ${bet}`)
        console.log(`You now have $${wallet.toPrecision(5)} why not play again.`)
        playRoulette()
    } else {
        wallet -= priceToPlay
        console.log(`How does it feel to be a loser? The spin unfortuanately was not ${bet}, but you might win back what you lost on the next spin!!!`)
        console.log(`You now have $${wallet.toPrecision(5)} why not play again.`)
        playRoulette()
    }
  } 
}

function betNumber(bet) {
  if (bet.toString() === ((rouletteWheel[randomNum])[0]).toString()) {
      wallet += jackpot
      console.log(`How does it feel to be a winner? Well now you know because the spin came up ${bet}`)
      console.log(`You now have $${wallet.toPrecision(5)} why not play again.`)
      playRoulette()
  } else {
      wallet -= priceToPlay
      console.log(`How does it feel to be a loser? The spin unfortuanately was not ${bet}, but you might win back what you lost on the next spin!!!`)
      console.log(`You now have $${wallet.toPrecision(5)} why not play again.`)
      playRoulette()
  }
}

playRoulette()