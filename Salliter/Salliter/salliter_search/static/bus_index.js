
$(document).ready(function(){
	$.ajax({
		url: 'http://127.0.0.1:5000/getcoupon_bus/',
		mathod: 'POST',
		success: function(data){
			var result = data['coupon'];
			console.log(result);
			slide_function(result);
		}
	});
});

var current = -1;
var couponsSize=0;
let coupons=[];
let selectors=[];

function slide_function(result)
{
//var current = -1;
console.log(result);

//selectors = document.querySelectorAll(".tableCol");
coupons = JSON.parse(result);
coupons.forEach(addInSlider); 

var owl = $('.owl-carousel');
owl.owlCarousel({
                rtl: false,
                margin: 10,
				autoplay:true,
				autoplayTimeout:3000,
				autoplayHoverPause:true,
				slideSpeed: 200,
				paginationSpeed: 500,
				animateOut: 'fadeOut',
                nav: false,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 3
                  }
                }
              })

}


function addInSlider(item,index)
{
  document.getElementById("loadRunTime").innerHTML +='<div class="item"><div class="flex-caption"><p class="p_1 font-Bold">Coupon by ' +item.disc +
                                                     '</p><div class="copy" onClick = copyToClipboard(this)><div class="copyText">'+item.promocode+
													 '</div><p class="pull-right">Valid till '+item.validity+
													 '</p></div><div class="TipsMsg">Successfully copied to the clipboard.</div></div><div  class = "slide"><img  src = '+
													  '"'+item.src+'"'+
													 ' alt = '+item.site_link+ 
													 ' onClick = redirect(this)'+
													   '></div></div>';

 console.log(document.getElementById("loadRunTime").innerHTML);												   
}


function redirect(event){
   window.open(event.alt, '_blank');
}

function copyToClipboard(event) {

  var el = document.createElement('textarea');
  el.value = event.firstChild.innerText;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  
  event.nextElementSibling.style.display = 'block';
  setTimeout(function(){
    event.nextElementSibling.style.display = '';
   } , 2000); 
}



/*---------------------------------------------------------*/

$('#form').on('submit', function(e){
	var src = $('#num1 :selected').text();
	var dst = $('#num2 :selected').text();
	var date = $('#num3').val();
	e.preventDefault();
	$.ajax({
		url: 'http://127.0.0.1:5000/bus_search/',
		data: {'src': src,'dst':dst,'date':date},
		method: 'POST',
		success: function(data) {
			$('#num1').val('');
			$('#num2').val('');
			$('#num3').val('');
			//window.location.replace('http://127.0.0.1:5000/result/');
			//window.location.href="/result/"+data['search_result'];
			//$('#search_res').html('cheapest Flight between' +src+' and '+dst  + ' is ' + data['search_result']);
			var result=data['search_result'];
			myfun(result);
		}
	});

});

function myfun(res){
	//var parsing_data=JSON.stringify(res);
	var parsing_data=res;
	//var p = document.getElementById('search_res'); 
	//p.innerHTML = parsing_data;
	//window.location.replace('http://127.0.0.1:5000/result/');
	//window.location.href='/result/'+parsing_data;
	//var p = document.getElementById('search_res'); 
	//p.innerHTML = parsing_data;
	//var div = document.createElement('div');
	//div.append(parsing_data);
	//console.log(parsing_data);
	window.location.href="/busresult/"+parsing_data;
}