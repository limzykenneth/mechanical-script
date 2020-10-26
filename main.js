const urlParams = new URLSearchParams(window.location.search);
const getFrame = urlParams.get("frame") !== null ? true : false;

let lineGraphics = [];
let graphics;

function setup() {
	createCanvas(windowWidth, windowHeight);
	graphics = createGraphics(100, 100);

	for(let i=0; i<8; i++){
		lineGraphics.push(createGraphics(100, 100));
		lineGraphics[i].strokeWeight(10);
		lineGraphics[i].strokeCap(PROJECT);
	}

	lineGraphics[0].line(0, 0, 100, 100);

	lineGraphics[1].line(0, 100, 100, 0);

	lineGraphics[2].line(0, 50, 100, 50);

	lineGraphics[3].line(50, 0, 50, 100);

	lineGraphics[4].line(50, 50, 50, 100);
	lineGraphics[4].line(50, 50, 100, 50);

	lineGraphics[5].line(50, 50, 0, 50);
	lineGraphics[5].line(50, 50, 50, 100);

	lineGraphics[6].line(50, 50, 50, 0);
	lineGraphics[6].line(50, 50, 100, 50);

	lineGraphics[7].line(50, 50, 0, 50);
	lineGraphics[7].line(50, 50, 50, 0);

}

function draw() {
	background(200);

	const squareLength = graphics.width/2;
	for(let y=0; y<2; y++){
		for(let x=0; x<2; x++){
			graphics.image(lineGraphics[7], x * squareLength, y * squareLength, squareLength, squareLength);
		}
	}

	image(graphics, 0, 0, 100, 100);
}
