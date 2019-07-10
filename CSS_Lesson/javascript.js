var d = Snap('body');
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
});

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
lightGray = "#999",
magenta = "#8700b89",
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
        popIn(this, size), i*100;
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
    draw.circle(1).move("70vw", "50vh").addClass('.introCircle')
    
];

var optionsSlide = new slide();
optionsSlide.obs = [
    $('<div>').append(
        $('<p>Give the</p>'),
        dropdown(),
        $('<p>a</p>')
    ),
    $("<p>that's</p>")
];

function dropdown(...strs){
    $wrap = $('<div class="input">');
    strs.forEach( str => {
        $('<div>').text(str).; 
    }
    )
    return $wrap;
}



var selectionLv1 = function(){
    const colors = ['pink', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const sizes = ['10px', '100px', '500px', '1in', '1cm'];
var propertyValuesPairs = {
	background: colors,
  width: sizes,
  height: sizes,
  color: colors
};

function updateCSS(target, property, value) {
  let styleStr = `${target}{${property}: ${value};}`;
  let $styleTag = $('<style>').addClass('tempSheet').html(styleStr);
  $('head').append($styleTag);
}

function addOptions($dropDown, options) {
	$dropDown.data('selected', false)
  .remove('.options');
  deselect($dropDown);
  for (let [idx, opt] of options.entries()) {

    let $fill = $dropDown.children('.fill');
    $("<button>")
      .addClass("option")
      .text(opt)
      .css('margin-top', idx * 5 + "vh")
      .click(() => {

        let $this = $(this);


        if ($this.data('clicked')) {
        $opt.data('clicked', false)
            .css('border-width', '0');
          deselect($dropDown);
        } else {
          $dropDown.children('.option').css('border-width', '3%').data('clicked', false);
          $this.data('clicked', true)
            .css('border-width', '0');
          $fill.text(opt)
            .css('transform', 'scaleY(1)')
        }
        $dropDown.data('clicked', true);

      })
      .appendTo($dropDown);
  }
}
function deselect($dropDown){
	
          $dropDown.children('.fill').text('')
            .css('transform', '');
          $dropDown.data('clicked', false);
}
function makeDropDown(options) {
  var $container = $("<div>")
    .addClass("dropDown");

  var $fill = $("<div>").addClass("fill")
    .appendTo($container);
  addOptions($container, options);

  $container.hover(
    () => {
      $container.children(".option").show().each((i, elem) => {
        let e = $(elem);
        setTimeout(() => {
          e.css('transform', 'scaleY(1)');
        }, 500 * i);

      });
    },
    () => {

      $($container.children(".option").get().reverse()).each((i, elem) => {
        let e = $(elem);
        setTimeout(() => {

          e.css('transform', 'scaleY(0)');
          setTimeout(() => {
            e.hide()
          }, 500);

        }, 500 * i);

      });
    }

  );
  return $container;
}
const $valueSelector = makeDropDown(propertyValuesPairs.values()[0])
  .children('.option');

const $propertySelector = makeDropDown(propertyValuesPairs.keys())
  .children('.option').click(() => {
    let values = propertyValuesPairs[property];
    addOptions($valueSelector, values);
  });

$('body').append(
  $('<div>').addClass('flexWrap')
  .append(
    $('<div>').addClass('topHalf').append(
      $('<span>').text('Give the'),
      $valueSelector,
      $('<span>').text('a fancy'),
      $propertySelector,
      $('<span>').text("that's"),
      makeDropDown(["background", "width", "height", "color"]),
      $('<span>').text(".")
    ),
    $('<div>').addClass('bottomHalf').append(

      $('<div>').append(
        $('<button>').text('Click me!'),
        $('<p>').html('This is a paragraph <strong>inside</strong> a div.')
      ),
      $('<p>').html('This is a paragraph <em>outside</em> a div.')
    )
  )
);

}