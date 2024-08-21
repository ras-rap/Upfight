namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Button2 = SpriteKind.create()
    export const Text = SpriteKind.create()
}

function delete_all_text() {
    for (let sprite of sprites.allOfKind(SpriteKind.Text)) {
        sprites.destroy(sprite, effects.disintegrate, 500)
    }
}

controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    if (Button_selected2 == 1) {
        Play_button.setImage(assets.image`
            Play button selected
        `)
        Multiplayer_button.setImage(assets.image`
            Multiplayer button
        `)
        music.play(music.createSong(assets.song`
                Ding
            `), music.PlaybackMode.InBackground)
        Button_selected2 = 0
    }
    
})
function WriteText(text: string, x: number, y: number, scale: number) {
    let char_sprite: Sprite;
    let char: string;
    
    char_width = 16
    //  Width of each character sprite (adjust as needed)
    console.logValue("Len", text.length)
    while (i <= text.length - 1) {
        char_sprite = sprites.create(assets.image`
            period
        `, SpriteKind.Text)
        //  Determine the character to use for the image
        char = text[i]
        //  Convert to uppercase for consistency
        if (char == "A") {
            char_sprite.setImage(assets.image`
                A
            `)
        } else if (char == "B") {
            char_sprite.setImage(assets.image`
                B
            `)
        } else if (char == "C") {
            char_sprite.setImage(assets.image`
                C
            `)
        } else if (char == "D") {
            char_sprite.setImage(assets.image`
                D
            `)
        } else if (char == "E") {
            char_sprite.setImage(assets.image`
                E
            `)
        } else if (char == "F") {
            char_sprite.setImage(assets.image`
                F
            `)
        } else if (char == "G") {
            char_sprite.setImage(assets.image`
                G
            `)
        } else if (char == "H") {
            char_sprite.setImage(assets.image`
                H
            `)
        } else if (char == "I") {
            char_sprite.setImage(assets.image`
                I
            `)
        } else if (char == "J") {
            char_sprite.setImage(assets.image`
                J
            `)
        } else if (char == "K") {
            char_sprite.setImage(assets.image`
                K
            `)
        } else if (char == "L") {
            char_sprite.setImage(assets.image`
                L
            `)
        } else if (char == "M") {
            char_sprite.setImage(assets.image`
                M
            `)
        } else if (char == "N") {
            char_sprite.setImage(assets.image`
                N
            `)
        } else if (char == "O") {
            char_sprite.setImage(assets.image`
                O
            `)
        } else if (char == "P") {
            char_sprite.setImage(assets.image`
                P
            `)
        } else if (char == "Q") {
            char_sprite.setImage(assets.image`
                Q
            `)
        } else if (char == "R") {
            char_sprite.setImage(assets.image`
                R
            `)
        } else if (char == "S") {
            char_sprite.setImage(assets.image`
                S
            `)
        } else if (char == "T") {
            char_sprite.setImage(assets.image`
                T
            `)
        } else if (char == "U") {
            char_sprite.setImage(assets.image`
                U
            `)
        } else if (char == "V") {
            char_sprite.setImage(assets.image`
                V
            `)
        } else if (char == "W") {
            char_sprite.setImage(assets.image`
                W
            `)
        } else if (char == "X") {
            char_sprite.setImage(assets.image`
                X
            `)
        } else if (char == "Y") {
            char_sprite.setImage(assets.image`
                Y
            `)
        } else if (char == "Z") {
            char_sprite.setImage(assets.image`
                Z
            `)
        } else if (char == " ") {
            char_sprite.setImage(assets.image`
                Space
            `)
        } else {
            //  Optionally handle non-alphabet characters
            console.logValue("Unknown Char", char)
            continue
        }
        
        //  Position the sprite
        char_sprite.left = x + i * char_width
        char_sprite.top = y
        console.logValue("Rendered", char)
        console.logValue("Position", char_sprite.left + char_sprite.top)
        i += 1
        char_sprite.setScale(scale, ScaleAnchor.Middle)
    }
}

controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    if (Button_selected2 == 0) {
        Play_button.setImage(assets.image`
            Play button selected
        `)
        Multiplayer_button.setImage(assets.image`
            Multiplayer button
        `)
        music.play(music.createSong(assets.song`
                error
            `), music.PlaybackMode.InBackground)
        Button_selected2 = 0
    }
    
})
let i = 0
let char_width = 0
let Button_selected2 = 0
let Play_button : Sprite = null
let Multiplayer_button : Sprite = null
let Button_selected = 0
let BG = sprites.create(assets.image`
    Background
`, SpriteKind.Background)
Multiplayer_button = sprites.create(assets.image`
        Multiplayer button
    `, SpriteKind.Button)
Multiplayer_button.setScale(3, ScaleAnchor.Middle)
Multiplayer_button.setPosition(114, 100)
Play_button = sprites.create(assets.image`
        Play button selected
    `, SpriteKind.Button)
Play_button.setPosition(46, 100)
Play_button.setScale(3, ScaleAnchor.Middle)
let start_bg = sprites.create(assets.image`
    bg start
`, SpriteKind.Background)
start_bg.setScale(10, ScaleAnchor.Middle)
WriteText("WIP", 60, 53, 1)
pause(5000)
sprites.destroy(start_bg, effects.disintegrate, 500)
delete_all_text()
BG.setScale(10, ScaleAnchor.Middle)
game.onUpdate(function on_on_update() {
    
})
