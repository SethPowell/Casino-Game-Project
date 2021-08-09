let wallet= 100

priceToPlay= 10

rouletteWheel = [
    [0,'green']
    [00,'green']
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

jackpot = (priceToPlay*(Math.random()*2))

function spinTheWheel() {
    randomNum = (Math.floor(Math.random()*rouletteWheel.length))
    return (rouletteWheel[randomNum])
}

bet = prompt('What would you like to bet on?')

function betColor(bet) {
    if (bet === 'red' | 'black') {
        if (bet === spinTheWheel()[1]) {
            wallet += jackpot
            console.log(`How does it feel to be a winner? Well now you know because the spin came up ${bet}`)
        } else {
            wallet -= priceToPlay
            console.log(`How does it feel to be a loser? The spin unfortuanately was not ${bet}, but you might win back what you lost on the next spin!!!`)
        }
    } else {
        break;
    }
}

function betNumber(bet) {
    if (bet === spinTheWheel()[0]) {
        if (bet === spinTheWheel()[0]) {
            wallet += jackpot
            console.log(`How does it feel to be a winner? Well now you know because the spin came up ${bet}`)
        } else {
            wallet -= priceToPlay
            console.log(`How does it feel to be a loser? The spin unfortuanately was not ${bet}, but you might win back what you lost on the next spin!!!`)
        }
    } else {
        break;
    }
}


function betColorAndNumber(bet) {
    if (bet === 'red' spinTheWheel()[0] | 'black' spinTheWheel()[0] {
        if (bet === spinTheWheel()[0]) {
            wallet += jackpot
            console.log(`How does it feel to be a winner? Well now you know because the spin came up ${bet}`)
        } else {
            wallet -= priceToPlay
            console.log(`How does it feel to be a loser? The spin unfortuanately was not ${bet}, but you might win back what you lost on the next spin!!!`)
        }
    } else {
        break;
    }
}



// make simple betting method for general red or black bet
// make another simple bettting method to bet on single number results
// make complex betting method to bet for groups of numbers