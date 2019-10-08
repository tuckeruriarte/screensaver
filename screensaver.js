let xplace = 0
let yplace = 0
let xdirection = "right"
let ydirection = "up"
let speed = 1

let r1 = 0
let g1 = 0
let b1 = 0

let rfade = 0
let gfade = 0
let bfade = 0


function setup() {

	createCanvas(800, 600)
	xplace = random(0, width)
	yplace = random(0, height)
	r1 = random(0, 255)
	b1 = random(0, 255)
	g1 = random(0, 255)
}

function draw() {

	background(255)

	rfade = random(0, 50)
	gfade = random(0, 50)
	bfade = random(0, 50)

	if (r1 >= 255) {
		r1 = r1 - 1
	} else if (r1 <= 0) {
		r1 = r1 + 1
	} else {
		if (rfade >= 25.5) {
			(r1 = r1 + 1)
		} else {
			r1 = r1 - 1
		}
	}


	if (b1 >= 255) {
		b1 = b1 - 1
	} else if (b1 <= 0) {
		b1 = b1 + 1
	} else {
		if (bfade >= 25.5) {
			b1 = b1 + 1
		} else {
			b1 = b1 - 1
		}
	}

	if (g1 >= 255) {
		g1 = g1 - 1
	} else if (g1 <= 0) {
		g1 = g1 + 1
	} else {
		if (gfade >= 25.5) {
			g1 = g1 + 1
		} else {
			g1 = g1 - 1
		}
	}

//left/right motion
	if (xdirection == "right") {
		xplace = xplace + speed 
	}

	if (xdirection == "left") {
		xplace = xplace - speed
	}

	if (xplace + 211.65 >= width) {
		xdirection = "left"
		fill(random(0, 255), random(0, 255), random(0, 255))
	}

	if (xplace + 9.15 <= 0) {
		xdirection = "right"
		fill(random(0, 255), random(0, 255), random(0, 255))
	}

//up/down motion
	if (ydirection == "up") {
		yplace = yplace - speed
	}

	if (ydirection == "down") {
		yplace = yplace + speed
	}

	if (yplace + 3 <= 0) {
		ydirection = "down"
		fill(random(0, 255), random(0, 255), random(0, 255))
	}

	if (yplace + 240 >= height) {
		ydirection = "up"
		fill(random(0, 255), random(0, 255), random(0, 255))
	}


push()
	translate(xplace, yplace)
	scale(.3)

//background

	ellipse(368, 410, 675, 780); //background

	push();
	fill(255, 255, 255, 50);
		ellipse(340, 400, 504, 690); //
	pop();

		arc(368, 410, 675, 780, -90, 90);

//Sargent time lmao

//Head
	fill(252, 201, 105); //highlight skin tones
		beginShape();
			vertex(353, 144);
			vertex(364, 300);
			vertex(496, 302);
			vertex(466, 146);
		endShape();

	fill(242, 161, 88); //primary skin tone
		beginShape();
			vertex(291, 147);
			vertex(289, 205);
			vertex(294, 301);
			vertex(296, 381);
			vertex(419, 385);
			vertex(413, 464);
			vertex(488, 428);
			vertex(482, 380);
			vertex(514, 313);
			vertex(525, 268);
			vertex(500, 266);
			vertex(393, 289);
			vertex(437, 252);
			vertex(391, 234);
			vertex(385, 219);
			vertex(356, 212);
			vertex(383, 192);
			vertex(383, 140);
			vertex(328, 129);
		endShape();


	fill(56, 39, 25); //darker skin tones
			beginShape(); //face shadow, behind nose
				vertex(265, 350);
				vertex(265, 279);
				vertex(305, 279);
				vertex(294, 301);
				vertex(294, 350);
			endShape();

			beginShape(); //forehead
				vertex(263, 241);
				vertex(276, 173);
				vertex(293, 171);
				vertex(307, 185);
				vertex(289, 205);
				vertex(306, 215);
				vertex(317, 236);
				vertex(318, 239);

				vertex(375, 240); //brow/eye
				vertex(391, 253);
				vertex(370, 263);
				vertex(371, 272);
				vertex(393, 289);
				vertex(383, 296);
				vertex(356, 279);
				vertex(339, 256);
				vertex(333, 251);
				vertex(336, 253);
				vertex(321, 252);
				vertex(316, 252);
			endShape();	

			beginShape(); //under nose shadow
				vertex(309, 330);
				vertex(309, 316);
				vertex(328, 313);
				vertex(353, 327);
				vertex(347, 333);
				vertex(336, 330);
				vertex(332, 326);
				vertex(323, 321);
				vertex(326, 323);
			endShape();

			beginShape(); //shadow under ear
				vertex(493, 355);
				vertex(485, 382);
				vertex(472, 372);
				vertex(465, 377);
				vertex(469, 355);
			endShape();

//dark parts of beard
	fill(r1, g1, b1)
		push();
		strokeWeight(1)
		stroke(0)
		beginShape();
			vertex(317, 580);
			vertex(317, 503);
			vertex(315, 467);
			vertex(288, 471);
			vertex(266, 410);
			vertex(270, 386);
			vertex(306, 366);
			vertex(305, 352);
			vertex(318, 344);
			vertex(327, 361);
			vertex(345, 364);
			vertex(354, 374);
			vertex(312, 382);
			vertex(321, 388);
			vertex(303, 397);
			vertex(286, 410);
			vertex(281, 433);
			vertex(304, 439);
			vertex(311, 426);
			vertex(343, 428);
			vertex(358, 385);
			vertex(378, 397);
			vertex(386, 412);
			vertex(450, 362);
			vertex(456, 371);
			vertex(463, 304); 
			vertex(467, 275);
			vertex(480, 300);
			vertex(474, 306);
			vertex(466, 375);
			vertex(432, 418);//
			vertex(431, 441);
			vertex(378, 487);
			vertex(378, 580);
		endShape();
		pop();

//side of face and left hair
		beginShape();
			vertex(266, 410);
			vertex(256, 260);
			vertex(250, 257);
			vertex(256, 245);
			vertex(258, 224);
			vertex(252, 218);
			vertex(263, 182);
			vertex(291, 147);
			vertex(293, 171);
			vertex(279, 177);
			vertex(286, 200);
			vertex(275, 221);
			vertex(286, 227);
			vertex(305, 235);
			vertex(312, 233);
			vertex(321, 244);
			vertex(309, 269);
			vertex(305, 279);
			vertex(290, 287);
			vertex(270, 291);
			vertex(276, 310);
			vertex(276, 410);
		endShape();

//top hair
		beginShape();
			vertex(297, 151);
			vertex(329, 144);
			vertex(354, 159);
			vertex(402, 161);
			vertex(442, 176);
			vertex(432, 175);
			vertex(462, 216);
			vertex(454, 228);
			vertex(465, 247);
			vertex(467, 275);
			vertex(480, 300);
			vertex(498, 277);
			vertex(510, 273);
			vertex(527, 286);
			vertex(539, 206);
			vertex(529, 147);
			vertex(465, 99);
			vertex(411, 82);
			vertex(342, 98);
			vertex(324, 111);
			vertex(300, 122);
			vertex(289, 140);
			vertex(285, 157);
		endShape();

//left nose shadow dark
		beginShape();
			vertex(281, 350);
			vertex(281, 338);
			vertex(289, 326);
			vertex(294, 301);
			vertex(309, 316);
			vertex(318, 326);
			vertex(318, 350);
		endShape();

//eyebrow
		beginShape();
			vertex(351, 242);
			vertex(363, 234);
			vertex(402, 232);
			vertex(422, 244);
			vertex(400, 242);
			vertex(381, 247);
		endShape();

//back of hair
		beginShape();
			vertex(502, 324);
			vertex(489, 407);
			vertex(483, 382);
			vertex(490, 348);
		endShape();


//ear blush	
	fill(207, 85, 57);
		beginShape();
			vertex(526, 286);
			vertex(524, 306);
			vertex(489, 358);
			vertex(474, 359);
			vertex(468, 355);
			vertex(470, 342);
			vertex(478, 339);
			vertex(492, 334);
			vertex(495, 319);
			vertex(489, 314);
			vertex(493, 293);
			vertex(502, 284);
			vertex(510, 281);
			vertex(524, 284);
		endShape();


//light parts of beard
	fill(53, 32, 23); 
		beginShape();
			vertex(458, 323);
			vertex(438, 359);
			vertex(399, 373);
			vertex(338, 334);
			vertex(317, 328);
			vertex(290, 346);
			vertex(292, 336);
			vertex(281, 338);
			vertex(272, 355);
			vertex(274, 359);
			vertex(251, 373);
			vertex(270, 386);
			vertex(306, 366);
			vertex(305, 352);
			vertex(318, 344);
			vertex(327, 361);
			vertex(345, 364);
			vertex(354, 374);
			vertex(312, 382);
			vertex(321, 388);
			vertex(303, 397);
			vertex(286, 410);
			vertex(281, 433);
			vertex(304, 439);
			vertex(311, 426);
			vertex(343, 428);
			vertex(358, 385);
			vertex(378, 397);
			vertex(386, 412);
			vertex(450, 362);
			vertex(456, 371);
			vertex(462, 317);
		endShape();

		beginShape(); //underbeard
			vertex(466, 375);
			vertex(432, 418);
			vertex(431, 441);
			vertex(378, 487);
			vertex(393, 487);
			vertex(454, 421);
			vertex(463, 399);
		endShape();

//collar right
	fill(255, 255, 255);
		beginShape();
			vertex(485, 421);
			vertex(388, 466);
			vertex(385, 527);
			vertex(476, 486);
			vertex(496, 460);
		endShape();
	fill(125, 117, 108);
		beginShape();
			vertex(388, 466);
			vertex(385, 527);
			vertex(325, 575);
			vertex(368, 473);
		endShape();

//necktie
	fill(0, 0, 39);
		beginShape();
			vertex(476, 486);
			vertex(399, 519);
			vertex(410, 549);
			vertex(460, 520);
		endShape();

		beginShape();
			vertex(267, 673); 
			vertex(271, 630); 
			vertex(316, 589); 			
			vertex(345, 594); 
		endShape();	
	fill(0, 0, 10);
		beginShape();
			vertex(399, 519);
			vertex(385, 527);
			vertex(328, 570);
			vertex(286, 558);
			vertex(253, 577); 
			vertex(253, 640); 
			vertex(243, 699);
			vertex(267, 673); 
			vertex(271, 630); 
			vertex(316, 589); 
			vertex(345, 594); 
			vertex(410, 549);
		endShape();

//vest
	fill(53, 56, 57)
		beginShape();
			vertex(203, 783);
			vertex(243, 699);
			vertex(345, 594);
			vertex(410, 549);
			vertex(460, 520);
			vertex(285, 790);
		endShape();

	fill(8, 9, 9);
		beginShape();
			vertex(203, 783);
			vertex(243, 699);
			vertex(253, 640);
			vertex(253, 577);
			vertex(110, 689);
		endShape();

	fill(63, 59, 54);
		beginShape();
			vertex(134, 714)
			vertex(185, 658)
			vertex(240, 622)
			vertex(219, 678)
			vertex(170, 749)
		endShape();

	fill(125, 117, 108);
		beginShape();
			vertex(245, 675)
			vertex(226, 714)
			vertex(219, 753)
			vertex(239, 713)
		endShape();

//collar left
	fill(125, 117, 108);
		beginShape();
			vertex(337, 573);
			vertex(317, 503);
			vertex(286, 558);
		endShape();

//jacket right
	fill (125, 117, 108);
		beginShape();
			vertex(281, 800);
			vertex(257, 793)
			vertex(325, 669)
			vertex(476, 486);
			vertex(496, 460);
			vertex(501, 456);
			vertex(641, 635);
			vertex(591, 708);
			vertex(459, 800);
		endShape();
pop()





//Brians Internal Device
	// push()
	// strokeWeight(2)
	// stroke(255)
	// arc(xplace, yplace, diameter, diameter, angle, angle+1, PIE)
	// pop()
	// angle = angle + 1
//internal device
	// push()
	// stroke(0)
	// line(xplace, yplace, (diameter/2)*cos(degree)+xplace, (diameter/2)*sin(degree)+yplace)
	// pop()
//border
	push()
		noFill()
		strokeWeight(1)
		stroke(0)
		rect(0, 0, 800, 600)
	pop()
}