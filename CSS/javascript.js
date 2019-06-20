var myTimeline = anime.timeline(parameters);
var obs = [];
var slides = [
    [],
    []
];

class slide {
    constructor(duration, idx, ...obs){
        this.duration = duration;
        this.obs = [];
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