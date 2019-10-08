let diameter = 22
let xplace = 383
let yplace = 300
let xdirection = "right"
let ydirection = "up"
let speed = 2


function setup() {

	createCanvas(800, 600)
	// xplace = random(0, width)
	// yplace = random(0, height)
	angleMode(DEGREES)
}


function draw() {

	background(255)

// //left/right motion
// 	if (xdirection == "right") {
// 		xplace = xplace + speed 
// 	}

// 	if (xdirection == "left") {
// 		xplace = xplace - speed
// 	}

// 	if (xplace + diameter*7 >= width) {
// 		xdirection = "left"
// 	}

// 	if (xplace - diameter*7 <= 0) {
// 		xdirection = "right"
// 	}

// //up/down motion
// 	if (ydirection == "up") {
// 		yplace = yplace - speed
// 	}

// 	if (ydirection == "down") {
// 		yplace = yplace + speed
// 	}

// 	if (yplace - diameter*7 <= 0) {
// 		ydirection = "down"
// 	}

// 	if (yplace + diameter*7 >= height) {
// 		ydirection = "up"
// 	}

	noFill()

//circles
	fill(0) //pupil
		ellipse(xplace, yplace-(diameter/2), diameter, diameter)
	
	noFill()
	strokeWeight(5)
		ellipse(xplace, yplace-(diameter/2), diameter*2.5, diameter*2.5) // iris
		ellipse(xplace, yplace, diameter*7, diameter*7) //inner eye circle
	
	strokeWeight(2) //outer eye circles
		ellipse(xplace, yplace, diameter*7.5, diameter*7.5)
		ellipse(xplace, yplace, diameter*8, diameter*8)
		ellipse(xplace, yplace, diameter*8.5, diameter*8.5)
	
	strokeWeight(5) //outer circle
		ellipse(xplace, yplace, diameter*12.5, diameter*12.5)
	
	strokeWeight(2) //outer outer circles
		ellipse(xplace, yplace, diameter*13, diameter*13)
		ellipse(xplace, yplace, diameter*13.5, diameter*13.5)

	strokeWeight(3) // outermost circles
		ellipse(xplace, yplace, diameter*14, diameter*14)


	strokeWeight(4)
		beginShape() //eyelid
			vertex(xplace-(diameter*2.91), yplace)
			
			vertex(xplace, yplace-(diameter*1.63))
			
			vertex(xplace+(diameter*2.78), yplace-(diameter*.82))

			vertex(xplace+(diameter*2.45), yplace+(diameter*.27))

		endShape()


//border
	push()
		noFill()
		strokeWeight(1)
		stroke(0)
		rect(0, 0, 800, 600)
	pop()

}



//mouseclick pixel finder
	function mouseClicked() {
		print(int(mouseX), int(mouseY));
	}