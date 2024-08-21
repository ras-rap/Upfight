namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const button2 = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Button_selected == 1) {
        Play_button.setImage(assets.image`Play button selected`)
        Multiplayer_button.setImage(assets.image`Multiplayer button`)
        music.play(music.createSong(assets.song`Ding`), music.PlaybackMode.InBackground)
        Button_selected = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Button_selected == 0) {
        Play_button.setImage(assets.image`Play button`)
        Multiplayer_button.setImage(assets.image`Multiplayer button selected`)
        music.play(music.createSong(assets.song`Ding`), music.PlaybackMode.InBackground)
        Button_selected = 1
    }
})
let Button_selected = 0
let Play_button: Sprite = null
let Multiplayer_button: Sprite = null
let BG = sprites.create(assets.image`Background`, SpriteKind.Background)
BG.setScale(10, ScaleAnchor.Middle)
Multiplayer_button = sprites.create(assets.image`Multiplayer button`, SpriteKind.button2)
Multiplayer_button.setScale(3, ScaleAnchor.Middle)
Multiplayer_button.setPosition(114, 100)
Play_button = sprites.create(assets.image`Play button selected`, SpriteKind.Button)
Play_button.setPosition(46, 100)
Play_button.setScale(3, ScaleAnchor.Middle)
Button_selected = 0
game.onUpdate(function () {
	
})
