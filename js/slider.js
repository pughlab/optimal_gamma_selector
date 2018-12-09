//customize your slider by adjusting range, interval, and step
const min = 0, max = 2000, step= 20, interval=50, initialVal=600; 
var imageUrl = new Array();
for (var i = min; i <= max; i+=step) { 
  imageUrl[i] = "gamma_" + i + "_gamma_pcf_" + i +".png";
}
$(document).on('input change', '#slider', function() {//listen to slider changes
    var v=$(this).val();//getting slider val
    $('#sliderStatus').html( $(this).val() );
    $("#img").prop("src", imageUrl[v]);
});
set_ticks(min, max, interval);
function set_ticks(min, max, step){
	var myHTML = '';
  	for (var i = min; i <= max; i+=step) { 
  	  myHTML += '<p>' + i + '</p>';
  	}
  document.getElementById('sliderticks').innerHTML = myHTML;
  document.getElementById('sliderStatus').innerHTML = initialVal;
  document.getElementById('slider').min = min;
  document.getElementById('slider').max = max;
  document.getElementById('slider').step = step;
  document.getElementById('slider').value = initialVal;
};