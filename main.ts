input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . # . #
            # # . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . # # .
            # # . . #
            `)
        basic.clearScreen()
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    X = 0
    for (let X = 0; X <= 4; X++) {
        led.plot(X, 0)
        basic.pause(100)
        led.unplot(X, 0)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    counter = randint(0, 15)
    basic.showNumber(counter)
    basic.showIcon(IconNames.Surprised)
    basic.clearScreen()
})
let counter = 0
let X = 0
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
