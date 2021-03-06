// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;

    this.y = y;
    this.speed = 1000 * speed;

    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    //  initial enemy when enemy beyond the canvas
    if(this.x >= 505) {
      this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.x = 200;
  this.y = 392;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
// when you get the river
  if(this.y <= 0) {
    this.x = 200;
    this.y = 392;
    var myElement = document.querySelector("body");
myElement.style.backgroundColor = "green";
document.location.reload()
  }
  //set the collision condition
  for (var i = 0; i < allEnemies.length; i++) {
    var enemy = allEnemies[i];
    if (enemy.y === this.y && enemy.x + 50 >= this.x - 30  && enemy.x - 50 <= this.x + 30) {
//to recenter the player
      this.x = 200;
      this.y = 392;
      var myElement = document.querySelector("body");
      myElement.style.backgroundColor = "red";
      document.location.reload()

       }
  }

};

// draw the Player
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {
  if (direction === "left" && this.x >= 100) {
    this.x -= 100;
  }
  if (direction === "right" && this.x <= 300) {
    this.x += 100;
  }
  if (direction === "up" ) {
    this.y -= 83;
  }
  if (direction === "down" && this.y <= 309) {
    this.y += 83;
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


var enemy1 = new Enemy(-100,60,Math.random());
var enemy2 = new Enemy(-100,143,Math.random());
var enemy3 = new Enemy(-100,226,Math.random());
//i did the speed with math.random to make a random  difficulty each time..

var player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [enemy1,enemy2,enemy3];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
