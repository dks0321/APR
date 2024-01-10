const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

//sc-main swiper
const mainSlide = new Swiper('.sc-main .swiper', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    parallax:true,
    speed: 2000,
    loop: true,
})


//sc-main txt
const mainTxt = new SplitType('.sc-main .headline', { types: 'words, chars', });

setTimeout(() => {
    $('.group-main').addClass('on')
    gsap.from('.sc-main .headline .char',{
        opacity:0,
        xPercent:40,
        stagger:0.1,
    })
}, 500);



$('.header .ham').click(function(){
    $('.group-menu').addClass('on')
})
$('.side-nav .close').click(function(){
    $('.group-menu').removeClass('on')
})

gsap.set($('.link-page .circle span'),{scale:0})
gsap.set($('.link-page .img-box'),{scale:0})

$('.link-page .circle').mousemove(function(e){

    gsap.to($(this).find('span'),{
        scale:1,
        x:(e.offsetX-$(this).find('span').width()/2)/5,
        y:(e.offsetY-$(this).find('span').height()/2)/5
    })
    gsap.to('.link-page .img-box',{
        scale:1,
        x:(e.offsetX-$(this).find('span').width()/2)/2,
        y:(e.offsetY-$(this).find('span').height()/2)/2
    })

})
$('.link-page .circle').mouseleave(function(){
    gsap.to($(this).find('span'),{
        scale:0,
        x:0,
        y:0
    })
    gsap.to('.link-page .img-box',{
        scale:0,
        x:0,
        y:0
    })
})



gsap.set($('.pkg-area .cursor1 span'),{scale:0})
gsap.set($('.pkg-area .img'),{scale:0})

$('.pkg-area .circle').mousemove(function(e){

    gsap.to($(this).find('span'),{
        scale:1,
        x:(e.offsetX-$(this).find('span').width()/2)/5,
        y:(e.offsetY-$(this).find('span').height()/2)/5
    })
    gsap.to('.pkg-area .img',{
        scale:1,
        x:(e.offsetX-$(this).find('span').width()/2)/2,
        y:(e.offsetY-$(this).find('span').height()/2)/2
    })

})
$('.pkg-area .circle').mouseleave(function(){
    gsap.to($(this).find('span'),{
        scale:0,
        x:0,
        y:0
    })
    gsap.to('.pkg-area .img',{
        scale:0,
        x:0,
        y:0
    })
})






//sc-intro
ScrollTrigger.create({
    trigger:".sc-intro",
    start:"0% 0%",
    end:"100% 9%",
    //markers:true,
    toggleClass:{targets:".headline",className:"on"}
})
        ScrollTrigger.create({
            trigger:".sc-intro",
            start:"0 0%",
            end:"100% 0%",
            scrub:1,
            toggleClass:"bg"
        })

        const introVideo = gsap.timeline({
            scrollTrigger:{
                trigger:".sc-intro .bottom-area",
                start:"0 100%",
                end:"100% 0%",
                //markers:true,
                scrub:1,
            },
            ease:'none'
        })
        introVideo
        .to('.sc-intro .video-box',{
            transform: `translate3d(0px, 0px, 0em) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
        })
        .to('.sc-intro .video-box',{
             transform:`translate3d(0px, 0px, -5em) scale3d(1, 1, 1) rotateX(-10deg) rotateY(-10deg) rotateZ(0deg) skew(0deg, 0deg)`
         
        })
        


        $(window).mousemove(function(e){
            gsap.to('.sc-room .cursor',{
                x:e.clientX,
                y:e.clientY
            })
        
        })

        // const bgArr = ['#f00','#f00','#f00'];

        $('.sc-room .room-area').hover(function(e){
            idx=$(this).index();

            $('.sc-room').css('background',$(this).data('bg'))
            // $('.sc-room').addClass(bgArr[idx]).remo;
            // $('.sc-room').css(bgArr[idx]).remo;
            $('.sc-room .cursor .tech-box').eq(idx).addClass('show').siblings().removeClass('show');
            $('.sc-room .cursor').addClass('on')
        },function(){
            $('.sc-room .cursor').removeClass('on')
        })






    //gsap






// {
   
// },


    gsap.to('.marquee .wrap',40,{
        xPercent:-50,
        ease:'none',
        repeat:-1,
    })


    //sc-main swiper
const pkgBanner = new Swiper('.sc-pkg .swiper', {

    autoplay: {
        delay: 0,//add
        disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    // loopAdditionalSlides: 1,
    slidesPerView: 'auto',
})
//imgbox bg 
    gsap.to('.sc-pkg .img-inner',{
        scrollTrigger:{
            trigger:".sc-pkg",
            start:"0 0%",
            end:"100% 0%",
            // markers:true,
            scrub:1,
        },
        yPercent:-15
    })

    //sc-gastro
    $('.sc-gastro .col-left .img-box').each(function(i,el){
        
        gsap.to($(this).find('img'),{
          scrollTrigger:{
              trigger:el,
              start:"0 100%",
              end:"100% 0%",
              scrub:1,
          },
          transform: `translate(-50%, -60%)`,
          ease:'none'
      })

    })    





    //sc-event
    const eventSlide = new Swiper('.sc-event .bg-slide', {
        autoplay: {
            delay: 0, //add
            disableOnInteraction: false,
        },
        speed: 3000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 'auto',
    })
    const eventBanner = new Swiper('.sc-event .bnr-slide', {
        autoplay: {
            delay: 0, //add
            disableOnInteraction: false,
        },
        speed: 8000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 'auto',
    })
    //event bg
    gsap.to('.sc-event ',{
        scrollTrigger:{
            trigger:".sc-event",
            start:"0 0",
            end:"100% 100%",
            //markers:true,
            scrub:1,
        },
        background:"#5c5c6c",
    })




