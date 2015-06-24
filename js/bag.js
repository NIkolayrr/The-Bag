$(document).ready(function () {

  var controls = $('.controls'),
      init = [];

  //Place data into the DOM
  function loadData(context,data) {
    $.each(context, function (key,value) {
      var $this = $(this),
          img = $this.find('img'),
          title = $this.find('.title'),
          price = $this.find('.price');
      img.fadeOut(300, function () {
        $(this).fadeIn(300).attr('src',data[key].url);
      });
      title.text(data[key].title);
      price.text(data[key].price + " EUR");
    });
  }

  //LOAD JSON DATA
  function loadJSONData(arr,index) {
    var i = index ? index : 1;
    $.each(arr, function (key,val) {
      init.push(val);
    });
    $.each(arr, function (key,val) {
      $.getJSON(val.file, function (data) {
        val.itemNum = Object.keys(data).length;
        loadData(val.placeholder,data[i]);
      });
    });
  }

  controls.click(function (e) {
    var $this = $(this),
        target = e.target.getAttribute('class'),
        data = $this.attr('data-num'),
        num,
        file = 0;
    if(!data){
      $this.attr('data-num',1);
      data = $this.attr('data-num');
      num = parseInt(data);
    }else {
      data = $this.attr('data-num');
      num = parseInt(data);
    }
    $.each(init, function (key,value) {
      if (value.file.split('.')[0] == $this.parent().attr('id')) {
        file = parseInt(key);
      }
    });
    if(target == 'prev'){
      if(num == 1){
        num = init[file].itemNum;
      }else {
        num--;
      }
      loadJSONData([init[file]],num);
      $this.attr('data-num',num);
    }else if(target == 'next'){
      if(num == init[file].itemNum){
        num = 1;
      }else {
        num++;
      }
      loadJSONData([init[file]],num);
      $this.attr('data-num',num);
    }
    e.preventDefault()
  });


  window.bag = {
    loadJSONData : loadJSONData
  }
//END
});