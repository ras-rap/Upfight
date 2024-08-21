@namespace
class SpriteKind:
    Background = SpriteKind.create()
    Button = SpriteKind.create()
    Button2 = SpriteKind.create()
    Text = SpriteKind.create()
def delete_all_text():
    for sprite in sprites.all_of_kind(SpriteKind.Text):
        sprites.destroy(sprite, effects.disintegrate, 500)

def on_left_pressed():
    global Button_selected2
    if Button_selected2 == 1:
        Play_button.set_image(assets.image("""
            Play button selected
        """))
        Multiplayer_button.set_image(assets.image("""
            Multiplayer button
        """))
        music.play(music.create_song(assets.song("""
                Ding
            """)),
            music.PlaybackMode.IN_BACKGROUND)
        Button_selected2 = 0
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def WriteText(text: str, x: number, y: number, scale: number):
    global char_width, i
    char_width = 16
    # Width of each character sprite (adjust as needed)
    console.log_value("Len", len(text))
    while i <= len(text) - 1:
        char_sprite = sprites.create(assets.image("""
            period
        """), SpriteKind.Text)
        # Determine the character to use for the image
        char = text[i]
        # Convert to uppercase for consistency
        if char == "A":
            char_sprite.set_image(assets.image("""
                A
            """))
        elif char == "B":
            char_sprite.set_image(assets.image("""
                B
            """))
        elif char == "C":
            char_sprite.set_image(assets.image("""
                C
            """))
        elif char == "D":
            char_sprite.set_image(assets.image("""
                D
            """))
        elif char == "E":
            char_sprite.set_image(assets.image("""
                E
            """))
        elif char == "F":
            char_sprite.set_image(assets.image("""
                F
            """))
        elif char == "G":
            char_sprite.set_image(assets.image("""
                G
            """))
        elif char == "H":
            char_sprite.set_image(assets.image("""
                H
            """))
        elif char == "I":
            char_sprite.set_image(assets.image("""
                I
            """))
        elif char == "J":
            char_sprite.set_image(assets.image("""
                J
            """))
        elif char == "K":
            char_sprite.set_image(assets.image("""
                K
            """))
        elif char == "L":
            char_sprite.set_image(assets.image("""
                L
            """))
        elif char == "M":
            char_sprite.set_image(assets.image("""
                M
            """))
        elif char == "N":
            char_sprite.set_image(assets.image("""
                N
            """))
        elif char == "O":
            char_sprite.set_image(assets.image("""
                O
            """))
        elif char == "P":
            char_sprite.set_image(assets.image("""
                P
            """))
        elif char == "Q":
            char_sprite.set_image(assets.image("""
                Q
            """))
        elif char == "R":
            char_sprite.set_image(assets.image("""
                R
            """))
        elif char == "S":
            char_sprite.set_image(assets.image("""
                S
            """))
        elif char == "T":
            char_sprite.set_image(assets.image("""
                T
            """))
        elif char == "U":
            char_sprite.set_image(assets.image("""
                U
            """))
        elif char == "V":
            char_sprite.set_image(assets.image("""
                V
            """))
        elif char == "W":
            char_sprite.set_image(assets.image("""
                W
            """))
        elif char == "X":
            char_sprite.set_image(assets.image("""
                X
            """))
        elif char == "Y":
            char_sprite.set_image(assets.image("""
                Y
            """))
        elif char == "Z":
            char_sprite.set_image(assets.image("""
                Z
            """))
        elif char == " ":
            char_sprite.set_image(assets.image("""
                Space
            """))
        else:
            # Optionally handle non-alphabet characters
            console.log_value("Unknown Char", char)
            continue
        # Position the sprite
        char_sprite.left = x + i * char_width
        char_sprite.top = y
        console.log_value("Rendered", char)
        console.log_value("Position", char_sprite.left + char_sprite.top)
        i += 1
        char_sprite.set_scale(scale, ScaleAnchor.MIDDLE)

def on_right_pressed():
    global Button_selected2
    if Button_selected2 == 0:
        Play_button.set_image(assets.image("""
            Play button selected
        """))
        Multiplayer_button.set_image(assets.image("""
            Multiplayer button
        """))
        music.play(music.create_song(assets.song("""
                error
            """)),
            music.PlaybackMode.IN_BACKGROUND)
        Button_selected2 = 0
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

i = 0
char_width = 0
Button_selected2 = 0
Play_button: Sprite = None
Multiplayer_button: Sprite = None
Button_selected = 0
BG = sprites.create(assets.image("""
    Background
"""), SpriteKind.Background)
Multiplayer_button = sprites.create(assets.image("""
        Multiplayer button
    """),
    SpriteKind.Button)
Multiplayer_button.set_scale(3, ScaleAnchor.MIDDLE)
Multiplayer_button.set_position(114, 100)
Play_button = sprites.create(assets.image("""
        Play button selected
    """),
    SpriteKind.Button)
Play_button.set_position(46, 100)
Play_button.set_scale(3, ScaleAnchor.MIDDLE)
start_bg = sprites.create(assets.image("""
    bg start
"""), SpriteKind.Background)
start_bg.set_scale(10, ScaleAnchor.MIDDLE)
WriteText("WIP", 60, 53, 1)
pause(5000)
sprites.destroy(start_bg, effects.disintegrate, 500)
delete_all_text()
BG.set_scale(10, ScaleAnchor.MIDDLE)

def on_on_update():
    pass
game.on_update(on_on_update)
