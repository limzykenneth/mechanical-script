const urlParams = new URLSearchParams(window.location.search);
const getFrame = urlParams.get("frame") !== null ? true : false;
const hash = XXH.h64();

let lineGraphics = [];
let graphics;
let testText = "Chippy ipsum dolor amet coke coleslaw fish cake plaice jacket potato skate battered onion rings chicken & mushroom pie coleslaw battered skate curry chips prawn salad. Roe beef burger cod cheeseburger mushy peas battered skate burger peas beef burger beef burger nuggets cheeseburger. Cheeseburger scampi beef & onion pie peas burger cheeseburger gravy vinegar cheeseburger plaice chicken & mushroom pie skate. Battered plaice chicken burger nuggets beef & onion pie fish cake steak & kidney pie mushy peas coke fish fingers battered cod ketchup chips. Fish fingers battered chips saveloy gravy beef burger battered haddock fish jumbo battered vegetarian saussage peas, battered chips cheeseburger. Gravy battered plaice chicken burger cod fish fingers nuggets fish fingers chicken burger peas cheeseburger cheeseburger battered onion rings. Ketchup battered cod jumbo battered saveloy fish jacket potato cheeseburger pickled egg plaice irn-bru haddock haddock chicken burger.\nFish fingers fish battered skate coke jumbo battered saveloy curry chips chips greek salad beef burger vinegar roe fried chicken. Peas beef burger chips jumbo saveloy lemonade skate cod fish jacket potato jumbo saveloy battered plaice vegetarian saussage. Battered haddock saussage vinegar jumbo saveloy beef burger battered onion rings beef burger pickled egg curry chips vegetarian burger chicken burger battered haddock. Gravy jacket potato cheeseburger jacket potato ketchup pickled egg curry chips cheeseburger fried chicken beef burger beef burger battered roe. Coleslaw burger brown sauce, vegetarian saussage battered onion rings peas brown sauce fish cake jacket potato greek salad curry chips. Battered plaice cheeseburger fish cake battered skate battered cod, fried chicken brown sauce brown sauce chips haddock scampi. Fish peas greek salad scampi scampi battered chips fish fingers nuggets irn-bru cheeseburger gravy battered chips.\nCod pickled egg brown sauce coleslaw jumbo saussage battered plaice fish cake battered cod chicken burger burger battered cod pickled onion. Cod battered chips chicken burger chicken burger chips mushy peas battered haddock mayonaise burger battered fish curry chips gravy. Beef burger, jumbo saveloy cod steak & kidney pie pickled onion cheeseburger coleslaw curry chips cheeseburger mayonaise beef burger. Jumbo battered saussage curry chips chicken burger chicken & mushroom pie cod gravy brown sauce battered onion rings chicken burger chicken burger pickled onion fish. Cheeseburger coleslaw pickled egg fish fingers cheeseburger, skate haddock coke battered plaice battered chips coleslaw. Cheeseburger lemonade jacket potato jumbo battered vegetarian saussage jacket potato fish brown sauce pickled onion fish jumbo saveloy battered roe beef burger. Mushy peas coleslaw coleslaw jacket potato cheeseburger burger nuggets scampi beef burger battered roe haddock saveloy.\nFish fingers cheeseburger jacket potato gravy beef burger chips fish fingers peas chicken burger brown sauce coleslaw curry chips. Chicken burger fish cake fish coleslaw gravy battered chips onion rings mayonaise brown sauce saussage battered chips jacket potato. Peas, haddock, gravy onion rings brown sauce brown sauce beef burger brown sauce battered onion rings onion rings. Chips roe cheeseburger burger peas pickled onion beef & onion pie lemonade, battered plaice fried chicken fish fingers. Fish fingers roe roe beef burger vegetarian saussage battered onion rings battered fish beef burger vegetarian saussage jacket potato vinegar cheeseburger. Mushy peas fish fingers fish fingers battered vegetarian saussage beef burger gravy onion rings orange pop fish cake pickled egg mushy peas plaice. Chicken burger pickled onion vegetarian saussage cod battered cod fish fingers chicken & mushroom pie battered scampi peas coleslaw curry chips.\nBeef burger battered fish ketchup, chips vegetarian burger jacket potato jacket potato battered skate chicken burger coleslaw. Coleslaw beef burger peas battered roe fish cake skate jacket potato cheeseburger brown sauce jacket potato chicken & mushroom pie beef burger. Battered cod onion rings lemonade battered cod beef burger battered haddock vegetarian burger chips nuggets battered chips plaice chips. Lemonade saussage orange pop scampi gravy onion rings battered skate nuggets battered scampi fish curry chips orange pop. Fried chicken curry chips cheeseburger beef burger onion rings fish vegetarian saussage scampi mayonaise brown sauce nuggets chicken burger. Burger scampi gravy gravy gravy cod curry chips onion rings fish cake burger beef burger saveloy. Battered saveloy jacket potato battered roe mayonaise fried chicken pickled egg burger, fish skate battered scampi chips.\nPickled egg brown sauce coleslaw fish fingers battered skate saveloy battered roe battered haddock cheeseburger gravy coleslaw cod. Jacket potato pickled onion haddock, battered fish battered scampi chicken burger gravy fish, battered haddock fried chicken. Vegetarian burger vegetarian burger pickled egg chicken burger fish cake battered chips battered saveloy mushy peas chicken burger steak & kidney pie fish battered chips. Scampi coleslaw haddock saveloy pickled egg irn-bru skate fried chicken curry chips haddock battered roe haddock. Fish fingers jumbo battered saussage, brown sauce jacket potato chicken burger jacket potato beef burger jacket potato peas battered plaice battered chips. Gravy cheeseburger peas chicken burger coleslaw irn-bru fried chicken jumbo battered saussage jacket potato fried chicken battered onion rings fish. Coke fish cake pickled onion chicken burger fish fingers battered scampi steak & kidney pie pickled egg battered skate onion rings onion rings burger.\nJumbo saveloy roe chips, roe scampi cod pickled onion coleslaw steak & kidney pie battered haddock chicken burger. Fish cake pickled egg battered plaice scampi nuggets battered scampi pickled onion plaice burger mushy peas burger. Plaice fish fingers roe skate chips steak & kidney pie battered plaice nuggets battered chips battered chips brown sauce lemonade. Coleslaw fish cake burger curry chips chicken burger chicken burger jacket potato nuggets cheeseburger beef & onion pie chips. Battered plaice plaice, chicken burger onion rings curry chips jacket potato onion rings greek salad pickled egg coleslaw beef burger. Chicken burger coleslaw steak & kidney pie battered chips curry chips jumbo vegetarian saussage battered chips haddock nuggets gravy peas fish. Curry chips mushy peas battered plaice fish cake vegetarian burger beef burger mayonaise fish cheeseburger chicken burger fish fingers brown sauce.\nCurry chips skate ketchup cheeseburger battered plaice, scampi pickled egg pickled onion saveloy nuggets battered haddock. Jacket potato vinegar mushy peas jumbo saveloy cheeseburger chicken burger fish battered saussage pickled egg peas, fried chicken. Beef burger chicken burger coleslaw fried chicken curry chips burger fried chicken jumbo vegetarian saussage fish fingers beef burger nuggets battered plaice. Battered roe fish cake coleslaw brown sauce haddock gravy cod gravy irn-bru, chicken & mushroom pie battered skate. Fish cake plaice, fish cake ketchup roe pickled onion mushy peas coke, battered roe coleslaw. Roe cheeseburger fish jumbo battered saveloy curry chips vegetarian burger jacket potato skate lemonade cheeseburger fish fingers coleslaw. Orange pop pickled onion beef burger battered fish curry chips cod onion rings vegetarian saussage battered vegetarian saussage steak & kidney pie fish cake battered onion rings.\nJacket potato battered skate battered onion rings skate chips ketchup cheeseburger fried chicken mushy peas chips fish fingers curry chips. Fish fingers coleslaw burger nuggets onion rings scampi onion rings gravy ketchup beef & onion pie battered fish. Vegetarian burger fish fingers battered fish chicken burger burger pickled onion fried chicken beef burger mixed salad plaice battered cod nuggets. Pickled onion jacket potato chicken burger nuggets, battered roe battered cod battered roe curry chips ketchup beef burger jacket potato. Nuggets battered fish plaice peas brown sauce, jacket potato chips chicken burger, vinegar roe. Plaice battered skate plaice plaice fried chicken battered plaice beef & onion pie curry chips onion rings fish cake battered vegetarian saussage coleslaw. Vegetarian saussage lemonade cod irn-bru, gravy vinegar burger battered saveloy cheeseburger curry chips lemonade.\nFish coleslaw peas chips mayonaise battered fish jacket potato chicken burger cheeseburger saveloy fish chicken burger. Brown sauce cod fried chicken brown sauce gravy battered fish battered roe beef burger peas pickled onion peas jacket potato. Curry chips haddock curry chips curry chips onion rings cheeseburger steak & kidney pie nuggets brown sauce battered cod chicken & mushroom pie peas. Jacket potato gravy curry chips, fried chicken jacket potato fish cake curry chips roe, beef burger beef burger. Mixed salad haddock fried chicken battered scampi gravy brown sauce fish cake battered plaice fish fingers mushy peas beef burger cheeseburger. Chicken burger pickled egg battered haddock ketchup pickled egg battered plaice saveloy fried chicken vinegar lemonade fried chicken jacket potato. Chicken & mushroom pie jacket potato roe cheeseburger battered haddock fried chicken cod battered plaice fish cake plaice coleslaw fish cake.";
let chars = testText.split("");
let codePoints = [];
let codeGlyphs;
let charWidth;
let i = 0;
let multiples = 0;
let maxYPos = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	graphics = createGraphics(100, 100);
	graphics.noFill();

	for(let i=0; i<8; i++){
		lineGraphics.push(createGraphics(100, 100));
		lineGraphics[i].strokeWeight(10);
		lineGraphics[i].strokeCap(PROJECT);
		lineGraphics[i].stroke(255);
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

	codeGlyphs = textToGlyphIndex(testText);

	charWidth = width/40;

	frameRate(60);
	background(0);

	if(getFrame){
		noLoop();
		const vertLines = floor(height / charWidth);

		for(let j=1; j<vertLines * 40; j++){
			draw();
		}
	}
}

function draw() {
	const squareLength = graphics.width/2;

	graphics.clear();
	const codeGpyph = codeGlyphs[i];

	for(let y=0; y<2; y++){
		for(let x=0; x<2; x++){
			const cell = y * 2 + x;
			const glyph = parseInt(codeGpyph[cell]);

			graphics.image(lineGraphics[glyph], x * squareLength, y * squareLength, squareLength, squareLength);
		}
	}

	const xPos = (charWidth * i) % width;
	const yPos = Math.floor((charWidth * i) / width) * charWidth - multiples * maxYPos;

	if(yPos + charWidth > height){
		multiples++;
		maxYPos = yPos;
		background(0);
	}else if(i < codeGlyphs.length - 1){
		image(graphics, xPos, yPos, charWidth, charWidth);

		i++;
	}
}

function windowResized(){
	if(getFrame){
		resizeCanvas(windowWidth, windowHeight);
		background(0);
		i=0;
		multiples=0;
		maxYPos=0;
		charWidth = width/40;

		noLoop();
		const vertLines = floor(height / charWidth);

		for(let j=1; j<vertLines * 40; j++){
			draw();
		}
	}
}

function textToGlyphIndex(text){
	const chars = text.split("");
	chars.forEach((char) => {
		codePoints.push(char.codePointAt(0));
	});

	return codePoints.map((code) => {
		return hash.update(code.toString()).digest().toString(8).slice(0, 4).split("");
	});
}