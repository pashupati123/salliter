
$(document).ready(function(){
	$.ajax({
		url: 'http://salliter.com/getcoupon/',
		mathod: 'POST',
		success: function(data){
			var result = data['coupon'];
			console.log(result);
			slide_function(result);
			console.log(result);
		}
	});

})


var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      auth2 = gapi.auth2.init({
        client_id: '354753915649-tha1v9j2ehprddd6gur75keo0urrmg9m.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          console.log("Signed in: " +
              googleUser.getBasicProfile().getName());
        }, function(error) {
					console.log(error);
          alert(JSON.stringify(error, undefined, 2));
        });
  }


startApp();


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
var onSuccess = function (googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
			var profile = googleUser.getBasicProfile();
			console.log("USER");
			console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
			console.log('Name: ' + profile.getName());
			console.log('Image URL: ' + profile.getImageUrl());
			console.log('Email: ' + profile.getEmail());
    }
var  onFailure = function (error) {
      console.log(error);
    }
    function renderButton() {
			var element = document.getElementById('customBtn')
      gapi.signin2.render(element.id, {
        'scope': 'profile email',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }

  window.addEventListener("click",function(event) {


	var modal = document.getElementById("myModal");
	if (event.target == modal ){
		modal.className = "modal";
		$('.containerForBlurr').removeClass('is-blurred');
	}
  }
)

var current = -1;
var couponsSize=0;
let coupons=[];
let selectors=[];

function showLoginModal()
{
	$('.containerForBlurr').addClass('is-blurred');
	$(".modal").addClass("visible");

}

function slide_function(result)
{
console.log(result);
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
	try
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
 	catch(err)
 	{
 		console.log(err);
 	}
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

//---------------------------------------------------------------

$('#form').on('submit', function(e){
	e.preventDefault();
	var src = $('#num1 :selected').text();
	var dst = $('#num2 :selected').text();
	var date = $('#num3').val();
	e.preventDefault();
	$.ajax({
		url: 'http://salliter.com/search/',
		data: {'src': src,'dst':dst,'date':date},
		method: 'POST',
		success: function(data) {
			$('#num1').val('');
			$('#num2').val('');
			$('#num3').val('');
			var result=data['search_result'];
			myfun(result);
		}
	});
});




function myfun(res){
	var parsing_data=res;
	console.log(parsing_data);
	window.location.href="/result/"+parsing_data;
}
