$(document).ready(function()
{
    setTotalValues();
});

function setTotalValues(){
    var columns = $("#id tr:first th").length - 1;
    var array = [];
    for (var i=0; i<columns;i++){
      array[i] = 0;
    }
    $('#id tbody').find('tr').each(function (i, el) {   
          for (let i=0; i<columns;i++){
              array[i] =array[i] + parseFloat($(this).find('td').eq(i+1).text());
          }            
    });  
      for (let i=0; i<=array.length;i++){
          var value = Math.round(array[i] * 100) / 100;
        $('#id tfoot tr th').eq(i+1).text(value);
      }
}

function changeValue(el,val,initialQuantity){
    var value= parseFloat(el.find('td').eq(val).text());
    var initialValue= el.find('td')[val].getAttribute('initialValue');
    value = document.getElementsByClassName('increase-box__input')[0].value * initialValue / initialQuantity;
    value = Math.round(value * 100) / 100;
    el.find('td')[val].innerHTML = value;
    setTotalValues();
}

function changeTableValues(number){
  var columns = $("#id tr:first th").length - 1;
  var initialQuantity= document.getElementsByClassName('increase-box__input')[0].getAttribute('initialValue');
  $('#id tbody').find('tr').each(function (i, el) {   
    if (number == 'all'){
        for (let i=0; i<columns;i++){
            changeValue($(this),i+1,initialQuantity);
        }
    }
    else{
            changeValue($(this),columns,initialQuantity);            
    }        
  });  
}