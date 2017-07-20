

class Boot {
  preload() {
    console.log("Boot.preload")
  }
  create() {
    console.log("Boot.create")
    game.state.start("Load")
  }

}

class Load {
  preload() {
    console.log("Loading...")
     this.load.spritesheet("player", "assets/player.png", 100, 56, 1)
     this.load.spritesheet("dodge", "assets/dodge.png", 100, 89, 1)
  }
  create() {
    console.log("Load.create")
    game.state.start("Play")
  }

}

class Play {
  preload() {
    console.log("Play.preload")
  }
  create() {
    console.log("Play.create")
    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.player = this.add.sprite(10, 200, "player")
    game.physics.arcade.enable(this.player)
    this.player.body.collideWorldBounds = true


    this.player.body.gravity.y = 500
    this.player.body.bounce.setTo(1.2)
    this.player.body.velocity.y = -500
    this.player.body.velocity.x = 200

    this.cursors = game.input.keyboard.createCursorKeys()

    this.dodge = this.add.sprite(10, 200, "dodge")
    game.physics.arcade.enable(this.dodge)
    this.dodge.body.collideWorldBounds = true
    this.dodge.body.gravity.y = 50
    this.dodge.body.bounce.setTo(.5)
    this.dodge.body.velocity.y = -50
    this.dodge.body.velocity.x = 50



  }
  update() {

     game.physics.arcade.collide(this.player, this.dodge)

     if (this.cursors.left.isDown) {
       this.player.body.velocity.x = -100
       //console.log("Left")
        }
     if (this.cursors.right.isDown) {
       this.player.body.velocity.x = 100
       //console.log("Right")
        }
     if (this.cursors.up.isDown) {
       this.player.body.velocity.y = -100
       //console.log("Up")
     }
     if (this.cursors.down.isDown) {
       this.player.body.velocity.y = 100
       //console.log("Down")
     }
                              }
     }




var game = new Phaser.Game(500,500);
game.state.add("Boot", Boot)
game.state.add("Load", Load)
game.state.add("Play", Play)
game.state.start("Boot")
