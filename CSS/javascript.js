var myTimeline = anime.timeline(parameters);
var obs = [];
var slides = [];

class slide {
    constructor(...obs){
        this.obs = [];
        this.addObs(obs);
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

