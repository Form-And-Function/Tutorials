var myTimeline = anime.timeline(parameters);
var obs = [];
var slides = [];

class slide {
    constructor(){
        this.obs = [];
        slides.push(this);
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
            svg = ob;
        }
        this.obs.push(svg);
    }
}
