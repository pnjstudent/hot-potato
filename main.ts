let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showIcon(IconNames.Square)
    while (0 < timer) {
        timer += -1
        music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Forever)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
        basic.pause(1000)
    }
    music.stopAllSounds()
    basic.showIcon(IconNames.Skull)
})
basic.forever(function () {
	
})
