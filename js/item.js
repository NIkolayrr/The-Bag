/**
 * Created by William on 9/15/2014.
 */
$(document).ready(function () {
  var item = $('#item').find('img').first(),
      hoverDiv = $('.hover'),
      related = $('.related-img').find('img');

  function zoom(e){
    var parentOffset = $(this).offset(),
        posX = (e.pageX - parentOffset.left)/5,
        posY = (e.pageY - parentOffset.top)/5;
    if(posX*3 > 100){
      $(this).css({
        'background-size':posX*3 + '%'
      })
    }

  }
  related.click(function () {
    item.attr('src',$(this).attr('src'));
  });
  item.click(function () {
    var path = $(this).attr('src'),
        parentOffset;
    hoverDiv
        .fadeIn(500)
        .css({
          'background':'url('+ path +') no-repeat center',
          'background-size':'cover'
        })
        .mousedown(function (e) {
          $(this)
              .mousemove(zoom)
              .find('h5').fadeOut()

        })
        .mouseup(function (e) {
          $(this).off('mousemove',zoom).find('h5').fadeIn()
        })
        .find('a').click(function (e) {
          $(this).parent().fadeOut(500)
          e.preventDefault()
        })

  });
});