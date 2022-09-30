console.log('ok 1');
//btnmenu
document.querySelector('.btnmenu').addEventListener('click', function(){
    if(this.classList.contains('clicked')){
        this.classList.remove('clicked')
    }
    else{
        
        this.classList.add('clicked')
    }
    // this.classList.toggle('clicked')
    // document.querySelector('.nav').classList.toggle('active')
    if(document.querySelector('.nav').classList.contains('active')){
        document.querySelector('.nav').classList.remove('active')
        setTimeout(function(){ document.querySelector('.nav').style.display = 'none';},150) 
    }
    else{
        
        document.querySelector('.nav').style.display = 'block'
       setTimeout(function(){ document.querySelector('.nav').classList.add('active')},10) 
    }

})
// backTotop
function backTotop() {
        let scrollTop = document.querySelector('html').scrollTop;
        if(scrollTop > 100){
            document.querySelector('.back-to-top').style.display = 'block'
        }
        else{
            document.querySelector('.back-to-top').style.display = 'none'
        }
}
document.querySelector('.back-to-top').addEventListener('click', function(e){
    e.preventDefault();
    window.scrollBy({
        top: -document.body.offsetHeight,
        behavior: 'smooth'
    })
})
backTotop()
window.addEventListener('scroll', backTotop)

//menu change color
let $slider = document.querySelector('.slider')
let $header = document.querySelector('header')
window.addEventListener('scroll', function() {
    let scrollTop = document.querySelector('html').scrollTop;
    if(scrollTop >($slider.offsetHeight - $header.offsetHeight)){
        $header.style.background = 'black'
    }else{
        $header.style.background = 'transparent'
    }
})
//Slider
let $sliderItems = document.querySelectorAll('.slider__image-item')
let $sliderDots = document.querySelectorAll('.slider .list li')
let sliderCurrent = 0
let sliderNumber = document.querySelector('.slider .count')
document.querySelector('.slider .control__prev').addEventListener('click',function(){
    console.log('prev');
    if(sliderCurrent > 0){
        sliderTo(sliderCurrent - 1)
        // $sliderItems[sliderCurrent].classList.remove('active');
        // $sliderItems[sliderCurrent - 1].classList.add('active');
        // $sliderDots[sliderCurrent].classList.remove('is-selected');

        // sliderCurrent--;

        // $sliderDots[sliderCurrent].classList.add('is-selected');
    }

    // sliderNumber.innerText = (sliderCurrent + 1).toString().padStart(2,'0');
})

document.querySelector('.slider .control__next').addEventListener('click',function(){
    console.log('next')
    if(sliderCurrent < $sliderItems.length - 1){
        sliderTo(sliderCurrent + 1)
    //     $sliderItems[sliderCurrent].classList.remove('active');
    //     $sliderItems[sliderCurrent + 1].classList.add('active');
    //     $sliderDots[sliderCurrent].classList.remove('is-selected');

    //     sliderCurrent++;

    //     $sliderDots[sliderCurrent].classList.add('is-selected');
    }

    // sliderNumber.innerText = (sliderCurrent + 1).toString().padStart(2,'0')
})

function sliderTo(to){
    $sliderItems[sliderCurrent].classList.remove('active');

    $sliderItems[to].classList.add('active');

    $sliderDots[sliderCurrent].classList.remove('is-selected')

    $sliderDots[to].classList.add('is-selected');

    sliderCurrent = to;

    sliderNumber.innerText = (sliderCurrent + 1).toString().padStart(2,'0')
}
$sliderDots.forEach((e, i) => {
    e.addEventListener('click', function () {
        sliderTo(i)
    })
})
//play-video
let iframeVideo = document.querySelector('#video-iframe')
document.querySelectorAll('.video .play-btn').forEach((e) =>{
    e.addEventListener('click', function (e) {
        let videoSrc = this.getAttribute('data-video-src')
        iframeVideo.src = 'https://www.youtube.com/embed/' + videoSrc;
        document.querySelector('.popup-video').style.display = 'flex'
    })
})
document.querySelector('.popup-video .close').addEventListener('click', function () {
    document.querySelector('.popup-video').style.display = 'none'
    iframeVideo.src = ''
})