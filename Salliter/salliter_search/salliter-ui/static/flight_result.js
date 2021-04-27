$(document).ready(function(){
  var flight_data = JSON.parse(localStorage.getItem("flight_data"));
  var default_paytm_code = flight_data[0]["coupon"]["paytm"];
  console.log("pashupati")
  console.log(default_paytm_code);
  console.log("pri nted")
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


  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';
  console.log("size : "+default_paytm_code.length);

  for (i = 0; i <= default_paytm_code.length-1; i++)
  {

    var coupon_code = default_paytm_code[i]["code"];
    var coupon_discount = default_paytm_code[i]["discount"];
    var coupon_discription = default_paytm_code[i]["discription"];
    var coupon_validity = default_paytm_code[i]["validity"];
    div_carousal.appendChild(getHTMLDiv(coupon_code,coupon_discount,coupon_discription,coupon_validity));


  }

  div.appendChild(div_carousal);
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



var discount="-0%";

function paytm(paytm_code){

  link = "https://paytm.com/flights";
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
  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';

  for (i = 0; i <= paytm_code.length-1; i++)
  {
    var coupon_code = paytm_code[i]["code"];
    var coupon_discount = paytm_code[i]["discount"];
    var coupon_discription = paytm_code[i]["discription"];
    var coupon_validity = paytm_code[i]["validity"];
    div_carousal.appendChild(getHTMLDiv(coupon_code,coupon_discount,coupon_discription,coupon_validity));

  }

  div.appendChild(div_carousal);
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
  link ="https://www.makemytrip.com/flights/";
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


  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';


  for (i = 0; i <= mmt_code.length-1; i++)
  {

    var coupon_code = mmt_code[i]["code"];
    var coupon_discount = mmt_code[i]["discount"];
    var coupon_discription = mmt_code[i]["discription"];
    var coupon_validity = mmt_code[i]["validity"];
    div_carousal.appendChild(getHTMLDiv(coupon_code,coupon_discount,coupon_discription,coupon_validity));

  }

  div.appendChild(div_carousal);
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
  link = "https://www.goibibo.com/flights/";
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

  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';


  for (i = 0; i <= go_code.length-1; i++)
  {

    var coupon_code = go_code[i]["code"];
    var coupon_discount = go_code[i]["discount"];
    var coupon_discription = go_code[i]["discription"];
    var coupon_validity = go_code[i]["validity"];
    div_carousal.appendChild(getHTMLDiv(coupon_code,coupon_discount,coupon_discription,coupon_validity));
  }

  div.appendChild(div_carousal);
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
  link ="https://www.happyeasygo.com/";
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


  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';


  for (i = 0; i <= happy_code.length-1; i++)
  {

    var coupon_code = happy_code[i]["code"];
    var coupon_discount = happy_code[i]["discount"];
    var coupon_discription = happy_code[i]["discription"];
    var coupon_validity = happy_code[i]["validity"];
    div_carousal.appendChild(getHTMLDiv(coupon_code,coupon_discount,coupon_discription,coupon_validity));

  }

  div.appendChild(div_carousal);
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
  link ="https://www.yatra.com/flights";
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


  var div_carousal = document.createElement('div');
  div_carousal.className = 'owl-carousel owl-theme';


  for (i = 0; i <= yatra_code.length-1; i++)
  {

    var coupon_code = yatra_code[i]["code"];
    var coupon_discount = yatra_code[i]["discount"];
    var coupon_discription = yatra_code[i]["discription"];
    var coupon_validity = yatra_code[i]["validity"];
    div_carousal.appendChild(getHTMLDiv(coupon_code,coupon_discount,coupon_discription,coupon_validity));

  }

  div.appendChild(div_carousal);
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



var link="https://paytm.com/flights";
function redirect_link()
{
  var win=window.open(link,'_blank');
  win.focus();
}


function getHTMLDiv(coupon_code,coupon_discount,coupon_discription,coupon_validity){
    var htmlString ='';

    htmlString = '<div class ="dropdown_coupon"><div class="button" onClick = showRel(\'' + coupon_code + '\',\'' + coupon_discount + '\') style="color:black">'+coupon_code+
                 '</div><div class="dropdown_coupon-content"><p>'+coupon_validity+'</p><p>'+coupon_discription+'</p></div></div>';

    var template = document.createElement('template');
    template.innerHTML = htmlString;
    return template.content.firstChild;

}

function getHTMLDivBook(book) {
  var htmlString = '';
  htmlString = '<div class="button1 buttonradius" onClick = redirect_link() style="color:black">'+book+'</div>';
  var template = document.createElement('template');
  template.innerHTML = htmlString;
  return template.content.firstChild;

}

function showRel(code,coupon_discount)
{
  var dis = coupon_discount.split('%');
  var dis_percentage = parseInt(dis[0]);
  var div_dis = document.getElementById('display_flight');
  div_dis.innerHTML = '';
  var flight_data = JSON.parse(localStorage.getItem("flight_data"));
  for(var i = 0; i<flight_data.length-1;i++)
  {
    var div_1 = document.createElement('div');
    div_1.className = "flight";
    if(flight_data[i]["flight"]=="GoAir")
    {

      var apply_discount =parseInt((flight_data[i]['price']*dis_percentage)/100);

      var img1 = document.createElement('img');
      var src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2-DLgOgg226QZZfo5Ucm4ePsLnzDS9f4xeepFCXf7wF_iELae&s';
      img1.src=src;
      img1.style.width="30px";
      img1.style.height="30px";
      img1.innerHTML=flight_data[i]["flight"];

      var span_saving = document.createElement('span');
      span_saving.innerHTML="SAVED ";
      span_saving.style.color='green';
      span_saving.style.fontSize="20px";
      span_saving.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
      var span_saving_price=document.createElement('span');
      var saving_amount = apply_discount;
      span_saving_price.innerHTML=saving_amount;
      span_saving_price.style.color='green';
      span_saving_price.style.fontSize="20px";



      var br = document.createElement("br");
      div_1.appendChild(img1);
      var space_span = document.createElement('span');
      space_span.innerHTML='';
      space_span.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'));
      var coupon_code = code;
      var span_applied = document.createElement('span');
      span_applied.innerHTML="Code  Applied";
      span_applied.style.color = 'green';
      span_applied.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_coupon_code = document.createElement('span');
      span_coupon_code.innerHTML=coupon_code;
      span_coupon_code.style.color='green';
      span_coupon_code.appendChild( document.createTextNode('\u00A0\u00A0\u00A0'));

      div_1.appendChild(space_span);
      div_1.appendChild(span_coupon_code);
      div_1.appendChild(span_applied);
      div_1.appendChild(span_saving);
      div_1.appendChild(span_saving_price);
      div_1.appendChild(br);

      var span_src = document.createElement('span');
      span_src.innerHTML=flight_data[i]['src'];
      span_src.style.color='black';
      span_src.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_depart_time = document.createElement('span');
      span_depart_time.innerHTML=flight_data[i]['depart_time'];
      span_depart_time.style.color='black';
      span_depart_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_travel_time = document.createElement('span');
      span_travel_time.innerHTML=flight_data[i]['travel_time'];
      span_travel_time.style.color='black';
      span_travel_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_dst = document.createElement('span');
      span_dst.innerHTML=flight_data[i]['dst'];
      span_dst.style.color='black';
      span_dst.appendChild( document.createTextNode('\u00A0\u00A0\u00A0') );

      var span_arrival_time = document.createElement('span');
      span_arrival_time.innerHTML=flight_data[i]['arrival_time'];
      span_arrival_time.style.color='black';
      span_arrival_time.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_stop = document.createElement('span');
      span_stop.innerHTML=flight_data[i]['stops'];
      span_stop.style.color='black';
      span_stop.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_price = document.createElement('span');
      var span_strike = document.createElement('strike');
      span_strike.innerHTML=flight_data[i]['price'];
      span_strike.style.color='black';
      span_price.appendChild(span_strike);
      span_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );


      var span_got_discount = document.createElement('span');
      span_got_discount.innerHTML=coupon_discount;
      span_got_discount.style.color='red';
      span_got_discount.style.fontSize="11px";
      span_got_discount.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_expected_price = document.createElement('span');
      span_expected_price.innerHTML=flight_data[i]['price']-apply_discount;
      span_expected_price.style.color='black';
      span_expected_price.style.fontSize ="20px";
      span_expected_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      div_1.appendChild(span_src);
      div_1.appendChild(span_depart_time);
      div_1.appendChild(span_travel_time);
      div_1.appendChild(span_dst);
      div_1.appendChild(span_arrival_time);
      div_1.appendChild(span_stop);
      div_1.appendChild(span_price);
      div_1.appendChild(span_got_discount);
      div_1.appendChild(span_expected_price);
      div_1.appendChild(getHTMLDivBook("BOOK NOW"));
      var br2 = document.createElement("br");
      div_1.appendChild(br2);
      div_dis.appendChild(div_1);
    }

    else if(flight_data[i]["flight"]=="IndiGo")
    {
      var apply_discount =parseInt((flight_data[i]['price']*dis_percentage)/100);

      var img1 = document.createElement('img');
      var src='https://goibibo.ibcdn.com/images/v2/carrierImages/6E.gif';
      img1.src=src;
      img1.style.width="30px";
      img1.style.height="30px";
      img1.innerHTML=flight_data[i]["flight"];

      var span_saving = document.createElement('span');
      span_saving.innerHTML="SAVED ";
      span_saving.style.color='green';
      span_saving.style.fontSize="20px";
      span_saving.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
      var span_saving_price=document.createElement('span');
      var saving_amount = apply_discount;
      span_saving_price.innerHTML=saving_amount;
      span_saving_price.style.color='green';
      span_saving_price.style.fontSize="20px";



      var br = document.createElement("br");
      div_1.appendChild(img1);
      var space_span = document.createElement('span');
      space_span.innerHTML='';
      space_span.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'));
      var coupon_code = code;
      var span_applied = document.createElement('span');
      span_applied.innerHTML="Code  Applied";
      span_applied.style.color = 'green';
      span_applied.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_coupon_code = document.createElement('span');
      span_coupon_code.innerHTML=coupon_code;
      span_coupon_code.style.color='green';
      span_coupon_code.appendChild( document.createTextNode('\u00A0\u00A0\u00A0'));

      div_1.appendChild(space_span);
      div_1.appendChild(span_coupon_code);
      div_1.appendChild(span_applied);
      div_1.appendChild(span_saving);
      div_1.appendChild(span_saving_price);
      div_1.appendChild(br);

      var span_src = document.createElement('span');
      span_src.innerHTML=flight_data[i]['src'];
      span_src.style.color='black';
      span_src.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_depart_time = document.createElement('span');
      span_depart_time.innerHTML=flight_data[i]['depart_time'];
      span_depart_time.style.color='black';
      span_depart_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_travel_time = document.createElement('span');
      span_travel_time.innerHTML=flight_data[i]['travel_time'];
      span_travel_time.style.color='black';
      span_travel_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_dst = document.createElement('span');
      span_dst.innerHTML=flight_data[i]['dst'];
      span_dst.style.color='black';
      span_dst.appendChild( document.createTextNode('\u00A0\u00A0\u00A0') );

      var span_arrival_time = document.createElement('span');
      span_arrival_time.innerHTML=flight_data[i]['arrival_time'];
      span_arrival_time.style.color='black';
      span_arrival_time.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_stop = document.createElement('span');
      span_stop.innerHTML=flight_data[i]['stops'];
      span_stop.style.color='black';
      span_stop.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_price = document.createElement('span');
      var span_strike = document.createElement('strike');
      span_strike.innerHTML=flight_data[i]['price'];
      span_strike.style.color='black';
      span_price.appendChild(span_strike);
      span_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );


      var span_got_discount = document.createElement('span');
      span_got_discount.innerHTML=coupon_discount;
      span_got_discount.style.color='red';
      span_got_discount.style.fontSize="11px";
      span_got_discount.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_expected_price = document.createElement('span');
      span_expected_price.innerHTML=flight_data[i]['price']-apply_discount;
      span_expected_price.style.color='black';
      span_expected_price.style.fontSize ="20px";
      span_expected_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      div_1.appendChild(span_src);
      div_1.appendChild(span_depart_time);
      div_1.appendChild(span_travel_time);
      div_1.appendChild(span_dst);
      div_1.appendChild(span_arrival_time);
      div_1.appendChild(span_stop);
      div_1.appendChild(span_price);
      div_1.appendChild(span_got_discount);
      div_1.appendChild(span_expected_price);
      div_1.appendChild(getHTMLDivBook("BOOK NOW"));
      var br2 = document.createElement("br");
      div_1.appendChild(br2);
      div_dis.appendChild(div_1);

    }
    else if(flight_data[i]["flight"]=="Air India")
    {
      var apply_discount =parseInt((flight_data[i]['price']*dis_percentage)/100);

      var img1 = document.createElement('img');
      var src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqnGt2zrwwOdDzxYe0lqRycjXr_hN6Nz5ScP6qLd5-CaTyC49HQ&s';
      img1.src=src;
      img1.style.width="30px";
      img1.style.height="30px";
      img1.innerHTML=flight_data[i]["flight"];

      var span_saving = document.createElement('span');
      span_saving.innerHTML="SAVED ";
      span_saving.style.color='green';
      span_saving.style.fontSize="20px";
      span_saving.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
      var span_saving_price=document.createElement('span');
      var saving_amount = apply_discount;
      span_saving_price.innerHTML=saving_amount;
      span_saving_price.style.color='green';
      span_saving_price.style.fontSize="20px";



      var br = document.createElement("br");
      div_1.appendChild(img1);
      var space_span = document.createElement('span');
      space_span.innerHTML='';
      space_span.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'));
      var coupon_code = code;
      var span_applied = document.createElement('span');
      span_applied.innerHTML="Code  Applied";
      span_applied.style.color = 'green';
      span_applied.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_coupon_code = document.createElement('span');
      span_coupon_code.innerHTML=coupon_code;
      span_coupon_code.style.color='green';
      span_coupon_code.appendChild( document.createTextNode('\u00A0\u00A0\u00A0'));

      div_1.appendChild(space_span);
      div_1.appendChild(span_coupon_code);
      div_1.appendChild(span_applied);
      div_1.appendChild(span_saving);
      div_1.appendChild(span_saving_price);
      div_1.appendChild(br);

      var span_src = document.createElement('span');
      span_src.innerHTML=flight_data[i]['src'];
      span_src.style.color='black';
      span_src.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_depart_time = document.createElement('span');
      span_depart_time.innerHTML=flight_data[i]['depart_time'];
      span_depart_time.style.color='black';
      span_depart_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_travel_time = document.createElement('span');
      span_travel_time.innerHTML=flight_data[i]['travel_time'];
      span_travel_time.style.color='black';
      span_travel_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_dst = document.createElement('span');
      span_dst.innerHTML=flight_data[i]['dst'];
      span_dst.style.color='black';
      span_dst.appendChild( document.createTextNode('\u00A0\u00A0\u00A0') );

      var span_arrival_time = document.createElement('span');
      span_arrival_time.innerHTML=flight_data[i]['arrival_time'];
      span_arrival_time.style.color='black';
      span_arrival_time.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_stop = document.createElement('span');
      span_stop.innerHTML=flight_data[i]['stops'];
      span_stop.style.color='black';
      span_stop.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_price = document.createElement('span');
      var span_strike = document.createElement('strike');
      span_strike.innerHTML=flight_data[i]['price'];
      span_strike.style.color='black';
      span_price.appendChild(span_strike);
      span_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );


      var span_got_discount = document.createElement('span');
      span_got_discount.innerHTML=coupon_discount;
      span_got_discount.style.color='red';
      span_got_discount.style.fontSize="11px";
      span_got_discount.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_expected_price = document.createElement('span');
      span_expected_price.innerHTML=flight_data[i]['price']-apply_discount;
      span_expected_price.style.color='black';
      span_expected_price.style.fontSize ="20px";
      span_expected_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      div_1.appendChild(span_src);
      div_1.appendChild(span_depart_time);
      div_1.appendChild(span_travel_time);
      div_1.appendChild(span_dst);
      div_1.appendChild(span_arrival_time);
      div_1.appendChild(span_stop);
      div_1.appendChild(span_price);
      div_1.appendChild(span_got_discount);
      div_1.appendChild(span_expected_price);
      div_1.appendChild(getHTMLDivBook("BOOK NOW"));
      var br2 = document.createElement("br");
      div_1.appendChild(br2);
      div_dis.appendChild(div_1);
    }
    else if(flight_data[i]["flight"]=="AirAsia India")
    {
      var apply_discount =parseInt((flight_data[i]['price']*dis_percentage)/100);

      var img1 = document.createElement('img');
      var src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/1024px-AirAsia_New_Logo.svg.png';
      img1.src=src;
      img1.style.width="30px";
      img1.style.height="30px";
      img1.innerHTML=flight_data[i]["flight"];

      var span_saving = document.createElement('span');
      span_saving.innerHTML="SAVED ";
      span_saving.style.color='green';
      span_saving.style.fontSize="20px";
      span_saving.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
      var span_saving_price=document.createElement('span');
      var saving_amount = apply_discount;
      span_saving_price.innerHTML=saving_amount;
      span_saving_price.style.color='green';
      span_saving_price.style.fontSize="20px";



      var br = document.createElement("br");
      div_1.appendChild(img1);
      var space_span = document.createElement('span');
      space_span.innerHTML='';
      space_span.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'));
      var coupon_code = code;
      var span_applied = document.createElement('span');
      span_applied.innerHTML="Code  Applied";
      span_applied.style.color = 'green';
      span_applied.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_coupon_code = document.createElement('span');
      span_coupon_code.innerHTML=coupon_code;
      span_coupon_code.style.color='green';
      span_coupon_code.appendChild( document.createTextNode('\u00A0\u00A0\u00A0'));

      div_1.appendChild(space_span);
      div_1.appendChild(span_coupon_code);
      div_1.appendChild(span_applied);
      div_1.appendChild(span_saving);
      div_1.appendChild(span_saving_price);
      div_1.appendChild(br);

      var span_src = document.createElement('span');
      span_src.innerHTML=flight_data[i]['src'];
      span_src.style.color='black';
      span_src.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_depart_time = document.createElement('span');
      span_depart_time.innerHTML=flight_data[i]['depart_time'];
      span_depart_time.style.color='black';
      span_depart_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_travel_time = document.createElement('span');
      span_travel_time.innerHTML=flight_data[i]['travel_time'];
      span_travel_time.style.color='black';
      span_travel_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_dst = document.createElement('span');
      span_dst.innerHTML=flight_data[i]['dst'];
      span_dst.style.color='black';
      span_dst.appendChild( document.createTextNode('\u00A0\u00A0\u00A0') );

      var span_arrival_time = document.createElement('span');
      span_arrival_time.innerHTML=flight_data[i]['arrival_time'];
      span_arrival_time.style.color='black';
      span_arrival_time.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_stop = document.createElement('span');
      span_stop.innerHTML=flight_data[i]['stops'];
      span_stop.style.color='black';
      span_stop.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_price = document.createElement('span');
      var span_strike = document.createElement('strike');
      span_strike.innerHTML=flight_data[i]['price'];
      span_strike.style.color='black';
      span_price.appendChild(span_strike);
      span_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );


      var span_got_discount = document.createElement('span');
      span_got_discount.innerHTML=coupon_discount;
      span_got_discount.style.color='red';
      span_got_discount.style.fontSize="11px";
      span_got_discount.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_expected_price = document.createElement('span');
      span_expected_price.innerHTML=flight_data[i]['price']-apply_discount;
      span_expected_price.style.color='black';
      span_expected_price.style.fontSize ="20px";
      span_expected_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      div_1.appendChild(span_src);
      div_1.appendChild(span_depart_time);
      div_1.appendChild(span_travel_time);
      div_1.appendChild(span_dst);
      div_1.appendChild(span_arrival_time);
      div_1.appendChild(span_stop);
      div_1.appendChild(span_price);
      div_1.appendChild(span_got_discount);
      div_1.appendChild(span_expected_price);
      div_1.appendChild(getHTMLDivBook("BOOK NOW"));
      var br2 = document.createElement("br");
      div_1.appendChild(br2);
      div_dis.appendChild(div_1);

    }
    else if(flight_data[i]["flight"]=="Spicejet")
    {
      var apply_discount =parseInt((flight_data[i]['price']*dis_percentage)/100);

      var img1 = document.createElement('img');
      var src='https://www.logotaglines.com/wp-content/uploads/2019/03/Spicejet-Logo-Slogan-1280x720.png';
      img1.src=src;
      img1.style.width="30px";
      img1.style.height="30px";
      img1.innerHTML=flight_data[i]["flight"];

      var span_saving = document.createElement('span');
      span_saving.innerHTML="SAVED ";
      span_saving.style.color='green';
      span_saving.style.fontSize="20px";
      span_saving.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
      var span_saving_price=document.createElement('span');
      var saving_amount = apply_discount;
      span_saving_price.innerHTML=saving_amount;
      span_saving_price.style.color='green';
      span_saving_price.style.fontSize="20px";



      var br = document.createElement("br");
      div_1.appendChild(img1);
      var space_span = document.createElement('span');
      space_span.innerHTML='';
      space_span.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'));
      var coupon_code = code;
      var span_applied = document.createElement('span');
      span_applied.innerHTML="Code  Applied";
      span_applied.style.color = 'green';
      span_applied.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_coupon_code = document.createElement('span');
      span_coupon_code.innerHTML=coupon_code;
      span_coupon_code.style.color='green';
      span_coupon_code.appendChild( document.createTextNode('\u00A0\u00A0\u00A0'));

      div_1.appendChild(space_span);
      div_1.appendChild(span_coupon_code);
      div_1.appendChild(span_applied);
      div_1.appendChild(span_saving);
      div_1.appendChild(span_saving_price);
      div_1.appendChild(br);

      var span_src = document.createElement('span');
      span_src.innerHTML=flight_data[i]['src'];
      span_src.style.color='black';
      span_src.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_depart_time = document.createElement('span');
      span_depart_time.innerHTML=flight_data[i]['depart_time'];
      span_depart_time.style.color='black';
      span_depart_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_travel_time = document.createElement('span');
      span_travel_time.innerHTML=flight_data[i]['travel_time'];
      span_travel_time.style.color='black';
      span_travel_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_dst = document.createElement('span');
      span_dst.innerHTML=flight_data[i]['dst'];
      span_dst.style.color='black';
      span_dst.appendChild( document.createTextNode('\u00A0\u00A0\u00A0') );

      var span_arrival_time = document.createElement('span');
      span_arrival_time.innerHTML=flight_data[i]['arrival_time'];
      span_arrival_time.style.color='black';
      span_arrival_time.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_stop = document.createElement('span');
      span_stop.innerHTML=flight_data[i]['stops'];
      span_stop.style.color='black';
      span_stop.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_price = document.createElement('span');
      var span_strike = document.createElement('strike');
      span_strike.innerHTML=flight_data[i]['price'];
      span_strike.style.color='black';
      span_price.appendChild(span_strike);
      span_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );


      var span_got_discount = document.createElement('span');
      span_got_discount.innerHTML=coupon_discount;
      span_got_discount.style.color='red';
      span_got_discount.style.fontSize="11px";
      span_got_discount.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_expected_price = document.createElement('span');
      span_expected_price.innerHTML=flight_data[i]['price']-apply_discount;
      span_expected_price.style.color='black';
      span_expected_price.style.fontSize ="20px";
      span_expected_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      div_1.appendChild(span_src);
      div_1.appendChild(span_depart_time);
      div_1.appendChild(span_travel_time);
      div_1.appendChild(span_dst);
      div_1.appendChild(span_arrival_time);
      div_1.appendChild(span_stop);
      div_1.appendChild(span_price);
      div_1.appendChild(span_got_discount);
      div_1.appendChild(span_expected_price);
      div_1.appendChild(getHTMLDivBook("BOOK NOW"));
      var br2 = document.createElement("br");
      div_1.appendChild(br2);
      div_dis.appendChild(div_1);
    }
    else if(flight_data[i]["flight"]=="Vistra")
    {
      var apply_discount =parseInt((flight_data[i]['price']*dis_percentage)/100);

      var img1 = document.createElement('img');
      var src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdqnGt2zrwwOdDzxYe0lqRycjXr_hN6Nz5ScP6qLd5-CaTyC49HQ&s';
      img1.src=src;
      img1.style.width="30px";
      img1.style.height="30px";
      img1.innerHTML=flight_data[i]["flight"];

      var span_saving = document.createElement('span');
      span_saving.innerHTML="SAVED ";
      span_saving.style.color='green';
      span_saving.style.fontSize="20px";
      span_saving.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );
      var span_saving_price=document.createElement('span');
      var saving_amount = apply_discount;
      span_saving_price.innerHTML=saving_amount;
      span_saving_price.style.color='green';
      span_saving_price.style.fontSize="20px";



      var br = document.createElement("br");
      div_1.appendChild(img1);
      var space_span = document.createElement('span');
      space_span.innerHTML='';
      space_span.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'));
      var coupon_code = code;
      var span_applied = document.createElement('span');
      span_applied.innerHTML="Code  Applied";
      span_applied.style.color = 'green';
      span_applied.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_coupon_code = document.createElement('span');
      span_coupon_code.innerHTML=coupon_code;
      span_coupon_code.style.color='green';
      span_coupon_code.appendChild( document.createTextNode('\u00A0\u00A0\u00A0'));

      div_1.appendChild(space_span);
      div_1.appendChild(span_coupon_code);
      div_1.appendChild(span_applied);
      div_1.appendChild(span_saving);
      div_1.appendChild(span_saving_price);
      div_1.appendChild(br);

      var span_src = document.createElement('span');
      span_src.innerHTML=flight_data[i]['src'];
      span_src.style.color='black';
      span_src.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0' ) );

      var span_depart_time = document.createElement('span');
      span_depart_time.innerHTML=flight_data[i]['depart_time'];
      span_depart_time.style.color='black';
      span_depart_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_travel_time = document.createElement('span');
      span_travel_time.innerHTML=flight_data[i]['travel_time'];
      span_travel_time.style.color='black';
      span_travel_time.appendChild( document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' ) );

      var span_dst = document.createElement('span');
      span_dst.innerHTML=flight_data[i]['dst'];
      span_dst.style.color='black';
      span_dst.appendChild( document.createTextNode('\u00A0\u00A0\u00A0') );

      var span_arrival_time = document.createElement('span');
      span_arrival_time.innerHTML=flight_data[i]['arrival_time'];
      span_arrival_time.style.color='black';
      span_arrival_time.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_stop = document.createElement('span');
      span_stop.innerHTML=flight_data[i]['stops'];
      span_stop.style.color='black';
      span_stop.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_price = document.createElement('span');
      var span_strike = document.createElement('strike');
      span_strike.innerHTML=flight_data[i]['price'];
      span_strike.style.color='black';
      span_price.appendChild(span_strike);
      span_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );


      var span_got_discount = document.createElement('span');
      span_got_discount.innerHTML=coupon_discount;
      span_got_discount.style.color='red';
      span_got_discount.style.fontSize="11px";
      span_got_discount.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      var span_expected_price = document.createElement('span');
      span_expected_price.innerHTML=flight_data[i]['price']-apply_discount;
      span_expected_price.style.color='black';
      span_expected_price.style.fontSize ="20px";
      span_expected_price.appendChild( document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0') );

      div_1.appendChild(span_src);
      div_1.appendChild(span_depart_time);
      div_1.appendChild(span_travel_time);
      div_1.appendChild(span_dst);
      div_1.appendChild(span_arrival_time);
      div_1.appendChild(span_stop);
      div_1.appendChild(span_price);
      div_1.appendChild(span_got_discount);
      div_1.appendChild(span_expected_price);
      div_1.appendChild(getHTMLDivBook("BOOK NOW"));
      var br2 = document.createElement("br");
      div_1.appendChild(br2);
      div_dis.appendChild(div_1);

    }
  }
}
