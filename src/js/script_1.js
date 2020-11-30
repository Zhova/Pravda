$(document).ready(function () {
  $(".choice-list__title").on("click", function () {
    $(".choice-list__desc").not(this).slideUp();
    $(this).next().slideToggle();
  });

  $(".about-content").on("click", function () {
    console.log("play");
    const video = $(".about-video-bg")[0];
    if (video.paused) {
      video.play();
      $(".play").fadeOut();
    } else {
      video.pause();
      $(".play").fadeIn();
    }
  });
  $(".main-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<div class="btn slick-custom-arrow slick-custom-arrow-right">Prew</div>',
    prevArrow:
      '<div class="btn slick-custom-arrow slick-custom-arrow-left">Next</div>',
  });
  $(".cases-slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow:
      '<div class="btn slick-custom-arrow slick-custom-arrow-right">Prew</div>',
    prevArrow:
      '<div class="btn slick-custom-arrow slick-custom-arrow-left">Next</div>',
  });
  $(".reviews-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<div class="btn slick-custom-arrow slick-custom-arrow-right">Prew</div>',
    prevArrow:
      '<div class="btn slick-custom-arrow slick-custom-arrow-left">Next</div>',
  });
  $(".reviews-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<div class="btn slick-custom-arrow slick-custom-arrow-right">Prew</div>',
    prevArrow:
      '<div class="btn slick-custom-arrow slick-custom-arrow-left">Next</div>',
  });
  $(".clients-filter-slider").slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow:
      '<div class="clients-filter-arrow clients-filter-arrow-right"></div>',
    prevArrow:
      '<div class="clients-filter-arrow clients-filter-arrow-left"></div>',
  });
});
