sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function (sprite, otherSprite) {
    game.showLongText("You did it kid!", DialogLayout.Bottom)
    game.showLongText(" I'll be waiting for you!", DialogLayout.Bottom)
    carnival.customGameOverExpanded("Good" + " Job" + " Kid!", effects.confetti, music.powerUp, carnival.ScoreTypes.LTime)
})
info.onCountdownEnd(function () {
    game.showLongText("Oh no kid! You ran out of time!", DialogLayout.Bottom)
    game.showLongText("Try again, and look out for the timer!", DialogLayout.Bottom)
    game.gameOver(false)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.showLongText("Bad luck kid. You'll get it next time!", DialogLayout.Bottom)
    game.gameOver(false)
    game.reset()
})
game.splash("LEVEL 3", "Headless Horseman Chase!")
scene.setBackgroundImage(assets.image`bg`)
let mySprite = sprites.create(img`
    . . . . . . . . . f . . . . . . 
    . . . . f f f f f 3 f . . . . . 
    . . . f f 1 1 f 3 d 3 f . . . . 
    . . f 1 1 1 1 1 f 3 f . . . . . 
    . . f 1 1 1 1 1 1 f f . . . . . 
    . f 1 1 f 1 1 1 1 1 1 f . . . . 
    . f 1 1 f f 1 f f 1 1 f . . . . 
    . f 1 3 f f 1 f f 3 1 f . . . . 
    . f 1 1 1 1 1 1 1 1 1 f . . . . 
    . f 1 f 1 1 1 1 f f 1 f . . . . 
    . f 1 1 f f f f 1 1 1 f . . . . 
    . f 1 1 1 f 1 f 1 1 1 f . . . . 
    . f 1 f 1 1 1 1 1 f 1 f . . . . 
    . f f . f 1 1 f f . f f . . . . 
    . f . . . f f . . . . f . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(16, 30)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite)
info.startCountdown(3.5)
let horseman = sprites.create(assets.image`p1`, SpriteKind.Enemy)
horseman.setPosition(16, 71)
horseman.setVelocity(250, 250)
horseman.setBounceOnWall(true)
horseman.setStayInScreen(true)
let finish = sprites.create(img`
    ....................
    .......fffff........
    .....ffbb111f.......
    ..fffb11111b1f......
    .feef11111fff.......
    ..fefff1ff..........
    ...feeff............
    ....feeef...........
    .....feeef..........
    .....feeeef.........
    ......feeeef........
    .......ffeeefff.....
    .........feeeeef....
    ..........feeeeef...
    ...........feeef....
    ..........feeff.....
    `, SpriteKind.Finish)
finish.setPosition(140, 50)
game.wrap(function () {
    music.setVolume(20)
    music.play(music.createSong(hex`0078000408090305001c000f0a006400f4010a00000400000000000000000000000000000000023c008400880001208c009000012798009c000122ac00b000012cb400b800011ec000c4000127d000d4000127e000e400012cec00f000011bf400f800012906001c00010a006400f401640000040000000000000000000000000000000002c70008000c00011b0c001000012218001c00012c1c002000012028002c00012534003800012c3c004000012044004800011d4c005000021d2a54005800012460006400021d2a6c007000012470007400012578007c0001197c00800002272c84008800012990009400011b9c00a0000124a400a8000119b000b4000124b800bc00012ac400c800011ed400d800021b25e400e8000127f000f400021e2cfc00000101270401080102222a08010c01011b0c011001012410011401012918011c010222241c012001012a08001c000e050046006603320000040a002d0000006400140001320002010002bc0008000c00012010001400012918001c0001222000240001242c003000012538003c00012c3c004000012248004c00012a4c005000011e5c00600002202968006c0001256c007000011e74007800012778007c00011d7c008000012984008800012994009800011da000a4000129a800ac00011eb800bc00022024c400c800012ac800cc000120d400d800012adc00e0000122e000e400011dec00f0000125fc00000101290001040101200c011001012010011401012918011c010120`), music.PlaybackMode.InBackground)
    carnival.addLabelTo("Headless Horseman Chase", carnival.Areas.Bottom, 4)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f f f f f f f f f f . . . 
        . . f f f 1 1 1 1 1 f f f . . . 
        . . f f 1 1 1 1 1 1 1 f f . . . 
        . . f f 1 1 f 1 f 1 1 f f . . . 
        . . f f 1 1 f 1 f 1 1 f f . . . 
        . . f f 1 1 1 1 1 1 1 f f . . . 
        . . f f f 1 1 1 1 1 f f f . . . 
        . . . f f 1 f 1 f 1 f f . . . . 
        . f f f f f f f f f f f f f . . 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `)
    game.setDialogFrame(img`
        a a a a a a a a a a a a a a a 
        a f f f f f f f f f f f f f a 
        a f f f f f f f f f f f f f a 
        a f f 4 4 4 4 4 4 4 4 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 d d d d d d d 4 f f a 
        a f f 4 4 4 4 4 4 4 4 4 f f a 
        a f f f f f f f f f f f f f a 
        a f f f f f f f f f f f f f a 
        a a a a a a a a a a a a a a a 
        `)
    game.showLongText("Your almost there kid!", DialogLayout.Bottom)
    game.showLongText("Press W to start and retrieve my scythe!", DialogLayout.Bottom)
    game.showLongText("Be careful, there is a headless horseman roaming!", DialogLayout.Bottom)
    game.showLongText("WAIT, I forgot to tell you, there is a countdown!", DialogLayout.Bottom)
    game.showLongText("Make sure to watch the time as well!", DialogLayout.Bottom)
    game.showLongText("Good luck kid, this horseman is tough!", DialogLayout.Bottom)
})
