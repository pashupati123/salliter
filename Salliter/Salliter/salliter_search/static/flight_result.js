$(document).ready(function(){
  console.log("pashupati");
  var flight_data = JSON.parse(localStorage.getItem("paytm_code"));
  var default_paytm_code = flight_data[0]["flight"]["coupon"]["paytm"];
  console.log(default_paytm_code);
  var div_dis = document.getElementById('print'); 
  div_dis.innerHTML = '';
  var divdis_h3 = document.createElement('span');
  divdis_h3.innerHTML = "Apply Paytm Coupon Code On Click";
  divdis_h3.style.color = "green";
  divdis_h3.style.align = "center";
  divdis_h3.className = "ml2";
  div_dis.appendChild(divdis_h3);
  
  var div = document.getElementById('paytm_code'); 
  div.innerHTML = '';
  var div_wrap = document.createElement('div');
  div_wrap.className = "menu-wrapper";

  //var div_ul = document.createElement('ul'); 
  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';

  //div_ul.className = "menu";
  for (i = 0; i <= default_paytm_code.length-1; i++)
  {
    //var div_li = document.createElement('li');
    //div_li.className = "item";
    var div_span = document.createElement('span');
    //div_span.className = "item";
    div_span.className = "button";
    div_span.innerHTML = default_paytm_code[i];
    div_span.style.color = "black";
    div_carousal.appendChild(div_span);
    //div_ul.appendChild(div_li);

  }
  div_wrap.appendChild(div_carousal);
  div.appendChild(div_wrap);
  applyCarousal();
  console.log("carousal applied"); 

  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
})


function paytm(paytm_code){
  var div_dis = document.getElementById('print'); 
  div_dis.innerHTML = '';
  var divdis_h3 = document.createElement('span');
  divdis_h3.innerHTML = "Apply Paytm Coupon Code On Click";
  divdis_h3.style.color = "green";
  divdis_h3.style.align = "center";
  divdis_h3.className = "ml2";
  div_dis.appendChild(divdis_h3);
  
  var div = document.getElementById('paytm_code'); 
  div.innerHTML = '';
  var div_wrap = document.createElement('div');
  div_wrap.className = "menu-wrapper";

  //var div_ul = document.createElement('ul'); 
  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';

  //div_ul.className = "menu";
  for (i = 0; i <= paytm_code.length-1; i++)
  {
    //var div_li = document.createElement('li');
    //div_li.className = "item";
    var div_span = document.createElement('span');
    //div_span.className = "item";
    div_span.className = "button";
    div_span.innerHTML = paytm_code[i];
    div_span.style.color = "black";
    div_carousal.appendChild(div_span);
    //div_ul.appendChild(div_li);

  }
  div_wrap.appendChild(div_carousal);
  div.appendChild(div_wrap);
  applyCarousal();
  console.log("carousal applied"); 

  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


}


function mmt(mmt_code){
  var div_dis = document.getElementById('print'); 
  div_dis.innerHTML = '';
  var divdis_span = document.createElement('span');
  var divdis_h3 = document.createElement('span');
  divdis_h3.innerHTML = "Apply MMT Coupon Code On Click";
  divdis_h3.style.color = "green";
  divdis_h3.style.align = "center";
  divdis_h3.className = "ml2";
  div_dis.appendChild(divdis_h3);
  
  var div = document.getElementById('paytm_code'); 
  div.innerHTML = '';
  var div_wrap = document.createElement('div');
  div_wrap.className = "menu-wrapper";

  //var div_ul = document.createElement('ul'); 
  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';

  //div_ul.className = "menu";
  for (i = 0; i <= mmt_code.length-1; i++)
  {
    //var div_li = document.createElement('li');
    //div_li.className = "item";
    var div_span = document.createElement('span');
    //div_span.className = "item";
    div_span.className = "button";
    div_span.innerHTML = mmt_code[i];
    div_span.style.color = "black";
    div_carousal.appendChild(div_span);
    //div_ul.appendChild(div_li);

  }
  div_wrap.appendChild(div_carousal);
  div.appendChild(div_wrap);
  applyCarousal();
  console.log("carousal applied"); 

  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


}


function goibigo(go_code){
  var div_dis = document.getElementById('print'); 
  div_dis.innerHTML = '';
  var divdis_span = document.createElement('span');
  var divdis_h3 = document.createElement('span');
  divdis_h3.innerHTML = "Apply Goibibo Coupon Code On Click";
  divdis_h3.style.color = "green";
  divdis_h3.style.align = "center";
  divdis_h3.className = "ml2";
  div_dis.appendChild(divdis_h3);

  var div = document.getElementById('paytm_code'); 
  div.innerHTML = '';
  var div_wrap = document.createElement('div');
  div_wrap.className = "menu-wrapper";

  //var div_ul = document.createElement('ul'); 
  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';

  //div_ul.className = "menu";
  for (i = 0; i <= go_code.length-1; i++)
  {
    //var div_li = document.createElement('li');
    //div_li.className = "item";
    var div_span = document.createElement('span');
    //div_span.className = "item";
    div_span.className = "button";
    div_span.innerHTML = go_code[i];
    div_span.style.color = "black";
    div_carousal.appendChild(div_span);
    //div_ul.appendChild(div_li);

  }
  div_wrap.appendChild(div_carousal);
  div.appendChild(div_wrap);
  applyCarousal();
  console.log("carousal applied");

  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }); 

}

function happyeasygo(happy_code){
  var div_dis = document.getElementById('print'); 
  div_dis.innerHTML = '';
  var divdis_span = document.createElement('span');
  var divdis_h3 = document.createElement('span');
  divdis_h3.innerHTML = "Apply HappyEasyGo Coupon Code On Click";
  divdis_h3.style.color = "green";
  divdis_h3.style.align = "center";
  divdis_h3.className = "ml2";
  div_dis.appendChild(divdis_h3);
  
  var div = document.getElementById('paytm_code'); 
  div.innerHTML = '';
  var div_wrap = document.createElement('div');
  div_wrap.className = "menu-wrapper";

  //var div_ul = document.createElement('ul'); 
  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';

  //div_ul.className = "menu";
  for (i = 0; i <= happy_code.length-1; i++)
  {
    //var div_li = document.createElement('li');
    //div_li.className = "item";
    var div_span = document.createElement('span');
    //div_span.className = "item";
    div_span.className = "button";
    div_span.innerHTML = happy_code[i];
    div_span.style.color = "black";
    div_carousal.appendChild(div_span);
    //div_ul.appendChild(div_li);

  }
  div_wrap.appendChild(div_carousal);
  div.appendChild(div_wrap);
  applyCarousal();
  console.log("carousal applied"); 

  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

}

function yatra(yatra_code){
  var div_dis = document.getElementById('print'); 
  div_dis.innerHTML = '';
  var divdis_span = document.createElement('span');
  var divdis_h3 = document.createElement('span');
  divdis_h3.innerHTML = "Apply Yatra Coupon Code On Click";
  divdis_h3.style.color = "green";
  divdis_h3.style.align = "center";
  divdis_h3.className = "ml2";
  div_dis.appendChild(divdis_h3);
  
  var div = document.getElementById('paytm_code'); 
  div.innerHTML = '';
  var div_wrap = document.createElement('div');
  div_wrap.className = "menu-wrapper";

  //var div_ul = document.createElement('ul'); 
  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';

  //div_ul.className = "menu";
  for (i = 0; i <= yatra_code.length-1; i++)
  {
    //var div_li = document.createElement('li');
    //div_li.className = "item";
    var div_span = document.createElement('span');
    //div_span.className = "item";
    div_span.className = "button";
    div_span.innerHTML = yatra_code[i];
    div_span.style.color = "black";
    div_carousal.appendChild(div_span);
    //div_ul.appendChild(div_li);

  }
  div_wrap.appendChild(div_carousal);
  div.appendChild(div_wrap);
  applyCarousal();
  console.log("carousal applied"); 

  var textWrapper = document.querySelector('.ml2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

}


function applyCarousal()
{
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
                    items: 3
                  },
                  600: {
                    items: 5
                  },
                  1000: {
                    items: 8
                  }
                }
              })             
}


