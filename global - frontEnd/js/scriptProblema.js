var imagens =[
    '../images/slide1.jpg',
    '../images/slide2.jpg',
    '../images/slide3.jpg',
    '../images/slide4.jpg',
    '../images/slide5.jpg',
    '../images/slide6.jpg',
    '../images/slide7.jpg',
];

var Index=0;
var time=2000;

function slideShow(){
    document.getElementById('image').src=imagens[Index];
    Index++;
    if (Index ==imagens.length){Index=0;}
    setTimeout("slideShow()",time);

}
slideShow();
