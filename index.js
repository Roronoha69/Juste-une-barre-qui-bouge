const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth 
canvas.height = innerHeight


class Barre{
    constructor() { 
        this.posistion = {
            x: 500,
            y:400
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 150
        this.height = 30
    }

    draw() {
        c.fillStyle = 'black'
        c.fillRect(this.posistion.x, this.posistion.y, this.width, this.height)

    }
    update(){ 
        this.draw();
        this.posistion.x += this.velocity.x;
        if(this.posistion.x +this.width +this.velocity.x >= canvas.width) {
            this.velocity.x = 0
            
       }
       else if(this.posistion.x +this.width +this.velocity.x < 140) {
        this.velocity.x = 0

       }


      
    }
}

// class Ball{
//     constructor(){
//         this.posistion = {
//             x: 100,
//             y: 100
//         }
//         this.velocity ={
//             x: 0,
//             y: 0        
//         }
//         this.width = 40
//         this.height = 40
//     }

//     draw(){
//         c.fillStyle = 'grey'
//         c.fillRect(this.posistion.x, this.posistion.y, this.width, this.height)
//     }

//     update(){
//         this.draw();
//         this.posistion.x += this.velocity.x;
//         if(this.posistion.x +this.width +this.velocity.x >= canvas.width) {
//             this.velocity.x = 0
            
//        }
//        else if(this.posistion.x +this.width +this.velocity.x < 140) {
//         this.velocity.x = 0

//        }
//     }
// }

const barre = new Barre()
const keys = {
    right: { 
    pressed: false
},
    left: {
        pressed: false
    }
}
//const ball = new Ball()


function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    barre.update()
    //ball.update()

    if(keys.right.pressed && barre.posistion.x +barre.width +barre.velocity.x <= canvas.width) {
        barre.velocity.x = 20
    }
    else if(keys.left.pressed && barre.posistion.x +barre.width +barre.velocity.x >= 140){
        barre.velocity.x = -20
    }
    else {
        barre.velocity.x = 0
    }
}

animate();

addEventListener('keydown', ({keyCode}) => {

    switch (keyCode) {
        case 37:
            keys.left.pressed = true 

            
            break;
        case 39:
            keys.right.pressed = true 
            

            break;
        default:
            break;
    }
})


addEventListener('keyup', ({keyCode}) => {

    switch (keyCode) {
        case 37:
            keys.left.pressed = false
            
            break;
        case 39:
            keys.right.pressed = false

            break;
        default:
            break;
    }
})