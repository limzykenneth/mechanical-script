const urlParams = new URLSearchParams(window.location.search);
const getFrame = urlParams.get("frame") !== null ? true : false;
const hash = XXH.h64();

let lineGraphics = [];
let graphics;
let testText = "In principle a work of art has always been reproducible. Man-madeartifacts could always be imitated by men. Replicas were made by pupilsin practice of their craft, by masters for diffusing their works, and,finally, by third parties in the pursuit of gain. Mechanical reproduction ofa work of art, however, represents something new. Historically, itadvanced intermittently and in leaps at long intervals, but withaccelerated intensity. The Greeks knew only two procedures oftechnically reproducing works of art: founding and stamping. Bronzes,terra cottas, and coins were the only art works which they could producein quantity. All others were unique and could not be mechanicallyreproduced. With the woodcut graphic art became mechanicallyreproducible for the first time, long before script became reproducible byprint. The enormous changes which printing, the mechanicalreproduction of writing, has brought about in literature are a familiarstory. However, within the phenomenon which we are here examiningfrom the perspective of world history, print is merely a special, thoughparticularly important, case. During the Middle Ages engraving andetching were added to the woodcut; at the beginning of the nineteenthcentury lithography made its appearance. With lithography the techniqueof reproduction reached an essentially new stage. This much more directprocess was distinguished by the tracing of the design on a stone ratherthan its incision on a block of wood or its etching on a copperplate andpermitted graphic art for the first time to put its products on the market,not only in large numbers as hitherto, but also in daily changing forms.Lithography enabled graphic art to illustrate everyday life, and it beganto keep pace with printing. But only a few decades after its invention,lithography was surpassed by photography. For the first time in theprocess of pictorial reproduction, photography freed the hand of the mostimportant artistic functions which henceforth devolved only upon the eyelooking into a lens. Since the eye perceives more swiftly than the handcan draw, the process of pictorial reproduction was accelerated soenormously that it could keep pace with speech. A film operator shooting a scene in the studio captures the images at the speed of an actor’sspeech. Just as lithography virtually implied the illustrated newspaper, sodid photography foreshadow the sound film. The technical reproductionof sound was tackled at the end of the last century. These convergentendeavors made predictable a situation which Paul Valery pointed up inthis sentence:“Just as water, gas, and electricity are brought into our houses from faroff to satisfy our needs in response to a minimal effort, so we shall besupplied with visual or auditory images, which will appear anddisappear at a simple movement of the hand, hardly more than a sign.”Around 1900 technical reproduction had reached a standard that not onlypermitted it to reproduce all transmitted works of art and thus to causethe most profound change in their impact upon the public; it also hadcaptured a place of its own among the artistic processes. For the study ofthis standard nothing is more revealing than the nature of therepercussions that these two different manifestations – the reproductionof works of art and the art of the film – have had on art in its traditionalform.\nEven the most perfect reproduction of a work of art is lacking in oneelement: its presence in time and space, its unique existence at the placewhere it happens to be. This unique existence of the work of artdetermined the history to which it was subject throughout the time of itsexistence. This includes the changes which it may have suffered inphysical condition over the years as well as the various changes in itsownership. The traces of the first can be revealed only by chemical orphysical analyses which it is impossible to perform on a reproduction;changes of ownership are subject to a tradition which must be tracedfrom the situation of the original.The presence of the original is the prerequisite to the concept ofauthenticity. Chemical analyses of the patina of a bronze can help toestablish this, as does the proof that a given manuscript of the MiddleAges stems from an archive of the fifteenth century. The whole sphere ofauthenticity is outside technical – and, of course, not only technical –reproducibility. Confronted with its manual reproduction, which wasusually branded as a forgery, the original preserved all its authority; notso vis-à-vis technical reproduction. The reason is twofold. First, processreproduction is more independent of the original than manualreproduction. For example, in photography, process reproduction canbring out those aspects of the original that are unattainable to the nakedeye yet accessible to the lens, which is adjustable and chooses its angle atwill. And photographic reproduction, with the aid of certain processes,such as enlargement or slow motion, can capture images which escapenatural vision. Secondly, technical reproduction can put the copy of theoriginal into situations which would be out of reach for the originalitself. Above all, it enables the original to meet the beholder halfway, beit in the form of a photograph or a phonograph record. The cathedralleaves its locale to be received in the studio of a lover of art; the choralproduction, performed in an auditorium or in the open air, resounds inthe drawing room. The situations into which the product of mechanical reproduction can bebrought may not touch the actual work of art, yet the quality of itspresence is always depreciated. This holds not only for the art work butalso, for instance, for a landscape which passes in review before thespectator in a movie. In the case of the art object, a most sensitivenucleus – namely, its authenticity – is interfered with whereas no naturalobject is vulnerable on that score. The authenticity of a thing is theessence of all that is transmissible from its beginning, ranging from itssubstantive duration to its testimony to the history which it hasexperienced. Since the historical testimony rests on the authenticity, theformer, too, is jeopardized by reproduction when substantive durationceases to matter. And what is really jeopardized when the historicaltestimony is affected is the authority of the object.One might subsume the eliminated element in the term “aura” and go onto say: that which withers in the age of mechanical reproduction is theaura of the work of art. This is a symptomatic process whosesignificance points beyond the realm of art. One might generalize bysaying: the technique of reproduction detaches the reproduced objectfrom the domain of tradition. By making many reproductions itsubstitutes a plurality of copies for a unique existence. And in permittingthe reproduction to meet the beholder or listener in his own particularsituation, it reactivates the object reproduced. These two processes leadto a tremendous shattering of tradition which is the obverse of thecontemporary crisis and renewal of mankind. Both processes areintimately connected with the contemporary mass movements. Theirmost powerful agent is the film. Its social significance, particularly in itsmost positive form, is inconceivable without its destructive, catharticaspect, that is, the liquidation of the traditional value of the culturalheritage. This phenomenon is most palpable in the great historical films.It extends to ever new positions. In 1927 Abel Gance exclaimedenthusiastically:“Shakespeare, Rembrandt, Beethoven will make films... all legends,all mythologies and all myths, all founders of religion, and the veryreligions... await their exposed resurrection, and the heroes crowd eachother at the gate.”Presumably without intending it, he issued an invitation to a far-reachingliquidation.";
let chars = testText.split("");
let codePoints = [];
let codeGlyphs;
let charWidth;
let i = 0;
let multiples = 0;
let maxYPos = 0;
const padding = 10;

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

	charWidth = (width - padding * 2)/40;

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
	translate(padding, padding);

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

	const xPos = (charWidth * i) % (width - padding * 2);
	const yPos = Math.floor((charWidth * i) / (width - padding * 2)) * charWidth - multiples * maxYPos;

	if(yPos + charWidth > (height - padding * 2)){
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
		charWidth = (width - padding * 2)/40;

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