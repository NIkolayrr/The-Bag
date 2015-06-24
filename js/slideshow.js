/**
 * Created by William on 9/15/2014.
 */
$(document).ready(function () {
  var slideshow = $('#slideshow').find('img'),
      imgs = ['img/slide1.jpg','img/slide2.jpg','img/slide3.jpg'],
      i = 0;

  function slide(duration) {
    slideshow.fadeOut(1000, function () {
      $(this).attr('src',imgs[i]).fadeIn(1000);
    });
    i++;
    if (i >= imgs.length){
      i = 0;
    }
  }

  setInterval(slide,3000);
});