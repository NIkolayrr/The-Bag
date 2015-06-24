$(document).ready(function () {
  var bags = $('#bags').find('.items .col'),
      homeware = $('#homeware').find('.items .col'),
      knitware = $('#knitware').find('.items .col');
  bag.loadJSONData(
      [
        {'file':'bags.json','placeholder':bags,'itemNum':null},
        {'file':'homeware.json','placeholder':homeware,'itemNum':null},
        {'file':'knitware.json','placeholder':knitware,'itemNum':null}
      ]
  );
});