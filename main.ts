let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Diamond)
    while (0 < timer) {
        timer += -1
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Target)
        basic.pause(1000)
    }
    music.playMelody("- - - D D - - - ", 120)
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
	
})
