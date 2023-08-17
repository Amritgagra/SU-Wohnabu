AOS.init();

const swiper = new Swiper('.news-swiper', {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 15,
      },
      400:{
        slidesPerView: 2,
      },
     768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    },
  })

  const principleSwiper = new Swiper('.principle__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      400:{
        slidesPerView: 1,
      },
     768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      }
    },
  });

 


  const menuOpen = document.querySelector('.navbar-toggler');
  const menuClose = document.querySelector('.menu-close');
  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.header');


  if(typeof $('.show-more') !== 'undefined') {
    $('.show-more').on('click',function(e){
      e.preventDefault();
      let text = $(this).text() === 'mehr laden' ? 'Weniger laden' : 'mehr laden' ;
      $(this).text(text);
      if($('.more-content').hasClass('d-none')){
        $('.more-content').removeClass('d-none');
      }         
      else {
        $('.more-content').addClass('d-none');
      }
    })
  }



const banner = document.querySelector('.banner');
const bannerTitle = document.querySelector('.banner__content');
window.onscroll = function() {
  scrollFunction()
  // fixedTitle()
};
function scrollFunction() {

  if(window.innerWidth > 768){
    if (document.body.scrollTop > (banner.offsetHeight - 150) || document.documentElement.scrollTop > (banner.offsetHeight - 150)) {
      header.classList.add('active');
      if ($('.about-us__content.aos-animate')) {
        $(".about-us__title").css('opacity',"1");
        $(".banner__content").css('z-index',"1");
      }
     
      if(bannerTitle) {
        bannerTitle.classList.add('active');
      }
  
    }
     else {
      header.classList.remove('active');
      if(bannerTitle) {
        bannerTitle.classList.remove('active');
      }
      if($('.about-us__content')) {
        $(".about-us__title").css('opacity',"0");
        $(".banner__content").css('z-index',"4");
      }
    }
   
  }
  else if(window.innerWidth <= 768){
    if (document.body.scrollTop > (banner.offsetHeight - 450) || document.documentElement.scrollTop > (banner.offsetHeight - 450)) {
      header.classList.add('active');
      if ($('.about-us__content.aos-animate')) {
        $(".about-us__title").css('opacity',"1");
        $(".banner__content").css('z-index',"1");
      }
      if(bannerTitle) {
        bannerTitle.classList.add('active');
      }
  
    } else {
      header.classList.remove('active');
      if($('.about-us__content')) {
        $(".about-us__title").css('opacity',"0");
        $(".banner__content").css('z-index',"4");
      }
      if(bannerTitle) {
        bannerTitle.classList.remove('active');
      }
    }
  }
} 


window.addEventListener("resize", scrollFunction);

var teamImgSwiper = new Swiper(".teams-img-slider", {
  spaceBetween: 36,
  slidesPerView: 5,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
      freeMode: false,
      focusableElements:'img'
    },
    400:{
      slidesPerView: 1,
      spaceBetween: 30,
    },
   768: {
      slidesPerView: 2,
      spaceBetween: 36,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 36,
    }
  },
});
var teamContentSwiper = new Swiper(".teams-content-slider", {
  spaceBetween: 10,
  slidesPerView: 1,
  thumbs: {
    swiper: teamImgSwiper,
  },
});

$(function() {
  AOS.init({});
  
  onElementHeightChange(document.body, function(){
    AOS.refresh();
  });
});

function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }
