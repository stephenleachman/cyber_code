// Slick Slide | Static Websites
$(document).ready(function(){

  $('.slick-static-websites').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Slick Slide | Dynamic Websites
  $('.slick-dynamic-websites').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,  
    arrows: true,
    nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Slick Slide | Other Websites
  $('.slick-other-services').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
    prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});