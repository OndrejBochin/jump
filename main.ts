scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom) && sprite.tileKindAt(TileDirection.Bottom, sprites.builtin.oceanDepths2)) {
        if (first_touch) {
            info.changeScoreBy(1)
        }
        first_touch = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    first_touch = true
    mySprite.vy = -150
})
let first_touch = false
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite.ay = 300
controller.moveSprite(mySprite, 100, 0)
tiles.setTilemap(tilemap`level1`)
first_touch = true
