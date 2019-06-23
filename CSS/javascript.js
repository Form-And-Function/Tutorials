var draw = SVG('drawing')
var myTimeline = anime.timeline(parameters);
var obs = [];
var slides = [
    [],
    []
];
var currentSlideIdx = 0;
class slide {
    constructor(duration, idx, ...obs){
        this.duration = duration;
        this.obs = $([]);
        this.idx = idx;
        this.prevIdx = idx - 1;
        this.nextIdx = idx + 1;
        this.addObs(obs);

    }
    addObs(...obs){
        obs.forEach((ob)=>
            this.addOb(ob)
        );
    }
    addOb(ob){
        var svg;
        if(typeof ob === "text"){
            svg = $('<object type="image/svg+xml" data="'+ob+'">');
        }
        else {
            svg = $(ob);
        }
        this.obs.push(svg);
    }
    next(){
        slides[nextIdx].play();
        currentSlideIdx = this.nextIdx;
    }
    play(){

    }
    back(){
        this.obs.forEach( ob =>
            body.remove(ob)
        )
        slides[prevIdx].play();
    }
}

SVG.extend(SVG.Shape, {
    addClass: (className) => {
        this.node.classList.push(className);
        return this;
    }
})

function popIn($elem, width, delay = 0) {
    var scale = width/$elem.width();
    anime({
        targets: $elem[0],
        scale: scale,
        easing:'easeInElastic',
        duration: 1000,
        delay: delay
    });
}

function writeIn($elem){

}

const darkPink = "#af0585",
lightPink = "#f2b8e3",
lightGray = "#999"
magenta = "#8700b89"
lilac = "#a971ce";

///spaghetti!!!


var titleSlide = new slide();
titleSlide.play = () => {
    this.circles.each(popIn);
    writeIn(this.obs.filter(".title"));
    let sizes = [20, 30, 10, 100, 30, 70, 20, 100];
    $().each(i => {
        this.fill(darkPink);
        var size = sizes[i];
        popIn(thids, size);
    });
}

titleSlide.obscircles = [
    draw.circle(1).move("20vw", "20vh").addClass('.introCircle'),
    draw.circle(1).move("70vw", "100vh").addClass('.introCircle'),
    draw.circle(1).move("5vw", "70vh").addClass('.introCircle'),
    draw.circle(1).move("12vw", "52vh").addClass('.introCircle'),
    draw.circle(1).move("66vw", "90vh").addClass('.introCircle'),
    draw.circle(1).move("0vw", "30vh").addClass('.introCircle'),
    draw.circle(1).move("90vw", "10vh").addClass('.introCircle'),
    draw.circle(1).move("70vw", "50vh").addClass('.introCircle'),
    draw.
];

var optionsSlide = new slide();
optionsSlide.obs = [
    $('<div>').append(
        $('<p>Give the</p>'),
        dropdown(),
        $('<p>a</p>')
    )
    $('<p>that's</p>')
];

function dropdown(...strs){
    $wrap = $('<div class="input">');
    strs.forEach( str => {
        $('<div>').text(str).; 
    }
    )
    return $wrap;
}