input.onButtonPressed(Button.A, function () {
    if (startgame == 1) {
        startgame = 0
        scoreA += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (startgame == 1) {
        startgame = 0
        scoreB += 1
    }
})
let startgame = 0
let scoreA = 0
let scoreB = 0
startgame = 0
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(randint(0, 10000))
    basic.clearScreen()
    startgame = 1
    while (startgame == 1) {
        basic.pause(10)
    }
    basic.showString("A=")
    basic.showString("" + (scoreA))
    basic.showString("B=")
    basic.showString("" + (scoreB))
})
