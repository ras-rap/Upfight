@namespace
class SpriteKind:
    Background = SpriteKind.create()
    Button = SpriteKind.create()
    button2 = SpriteKind.create()

def on_left_pressed():
    global Button_selected
    if Button_selected == 1:
        Play_button.set_image(assets.image("""
            Play button selected
        """))
        Button_selected = 0
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    global Button_selected
    if Button_selected == 0:
        Play_button.set_image(assets.image("""
            Play button
        """))
        Button_selected = 1
        Play_button.set_image(assets.image("""
            Play button
        """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

Button_selected = 0
Play_button: Sprite = None
BG = sprites.create(assets.image("""
    Background
"""), SpriteKind.Background)
BG.set_scale(10, ScaleAnchor.MIDDLE)
Multiplayer_button = sprites.create(assets.image("""
        Multiplayer button
    """),
    SpriteKind.button2)
Multiplayer_button.set_scale(3, ScaleAnchor.MIDDLE)
Multiplayer_button.set_position(41, 100)
Play_button = sprites.create(assets.image("""
    Play button
"""), SpriteKind.Button)
Play_button.set_position(43, 100)
Play_button.set_scale(3, ScaleAnchor.MIDDLE)
Button_selected = 1

def on_on_update():
    pass
game.on_update(on_on_update)
