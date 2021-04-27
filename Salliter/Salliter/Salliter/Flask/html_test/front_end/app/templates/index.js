function paytmflightshow() {

        var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        function reportStatus() {
            if (oXHR.readyState == 4)   
                // Request completed.
                //alert(this.responseText);
                showTheList(this.responseText);     // All set. Now show the data.
        }

        oXHR.onreadystatechange = reportStatus;
        //oXHR.open("GET", "data/paytm_flight.json", true);   // true = asynchronous request, false = synchronous request.
        oXHR.open("GET", "data/paytm_flight.json", true); 
        oXHR.send();
         
        function showTheList(json) {
            //var arrItems = [{"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/SUMMERFLY_Carousel+(1).jpg", "promocode": "SUMMERFLY"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/flytwo.jpg", "promocode": "FLYTWO"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/FLY2019_Carousel_640X378+(1).jpg", "promocode": "FLY2019"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/Carousel---International-Flights-640x372-(2).jpg", "promocode": "FLYINT100"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/FLYINTL_Carousel.jpg", "promocode": "FLYINTL"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/FLYSTAR_Carousel.jpg", "promocode": "FLYSTAR"}];
               // Populate array with JSON data.
            var arrItems=[];
            //alert(json);
            arrItems = JSON.parse(json); 
            //var arrItems=[{"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/SUMMERFLY_Carousel+(1).jpg", "promocode": "SUMMERFLY"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/flytwo.jpg", "promocode": "FLYTWO"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/FLY2019_Carousel_640X378+(1).jpg", "promocode": "FLY2019"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/Carousel---International-Flights-640x372-(2).jpg", "promocode": "FLYINT100"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/FLYINTL_Carousel.jpg", "promocode": "FLYINTL"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/FLYSTAR_Carousel.jpg", "promocode": "FLYSTAR"}];
            var div = document.getElementById('paytm_flight'); 
            //var table = document.getElementById('birds');
            // The parent <div>.
            div.innerHTML = '';
            //table.innerHTML = '';
            // Loop through data in the JSON array.
            for (i = 0; i <= arrItems.length - 1; i++) {
                // Create two <div> elements, one for the name and the other to show the image.
                /*
                var divLeft = document.createElement('div');
                divLeft.className="container";
                //divLeft.innerHTML = arrItems[i].Name;
                var img = document.createElement('img');
                img.className="image"
                // Create an <img> element.
                img.src = arrItems[i].src; 
                var a=document.createElement('a');
                a.setAttribute('href','https://paytm.com/flights');
                a.setAttribute('target','_blank');
                a.appendChild(img);
                divLeft.appendChild(a);
                */

                //var divLeft = document.createElement('div');
                //divLeft.className ="container";

                var divLeft0 = document.createElement('div');
                divLeft0.className = "flip-box";

                var divLeft1 = document.createElement('div');
                divLeft1.className = "flip-box-inner";

                var divLeft2 = document.createElement('div');
                divLeft2.className = "flip-box-front";

                var img = document.createElement('img');
                img.className="image"
                // Create an <img> element.
                img.src = arrItems[i].src; 
                var a=document.createElement('a');
                a.setAttribute('href','https://paytm.com/flights');
                a.setAttribute('target','_blank');
                a.appendChild(img);
                divLeft2.appendChild(a);
                var divLeft3 = document.createElement('div');
                divLeft3.className= "flip-box-back";
                var h2=document.createElement('h3');
                h2.innerHTML="Best Deal Of The Day"
                divLeft3.appendChild(h2);
                var p=document.createElement('p');
                p.className="image1";
                p.innerHTML="PromoCode"
                divLeft3.appendChild(p);
                divLeft1.appendChild(divLeft2);
                divLeft1.appendChild(divLeft3);
                divLeft0.appendChild(divLeft1);
                
                //divLeft.appendChild(divLeft0);
                
                var divr = document.createElement('div');
                divr.className="overlay";
                //ivr.innerHTML=arrItems[i].promocode;
                divr.innerHTML=arrItems[i].promocode;
                // Add the child DIVs to parent DIV.
                divLeft0.appendChild(divr);
                divLeft0.style.display="inline-block";
                div.appendChild(divLeft0);
                
            }
            
        }
        
    }

function paytmmovi() {

        var oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

        function reportStatus() {
            if (oXHR.readyState == 4)   
                // Request completed.
                //alert(this.responseText);
                showTheList(this.responseText);     // All set. Now show the data.
        }

        oXHR.onreadystatechange = reportStatus;
        //oXHR.open("GET", "data/paytm_flight.json", true);   // true = asynchronous request, false = synchronous request.
        oXHR.open("GET", "data/paytm_movi.json", true); 
        oXHR.send();
         
        function showTheList(json) {
            //var arrItems = [{"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/SUMMERFLY_Carousel+(1).jpg", "promocode": "SUMMERFLY"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/flytwo.jpg", "promocode": "FLYTWO"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/FLY2019_Carousel_640X378+(1).jpg", "promocode": "FLY2019"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/Carousel---International-Flights-640x372-(2).jpg", "promocode": "FLYINT100"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/FLYINTL_Carousel.jpg", "promocode": "FLYINTL"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/FLYSTAR_Carousel.jpg", "promocode": "FLYSTAR"}];
               // Populate array with JSON data.
            //var arrItems=[];
            var arrItems=[{"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2019/08/760x500-1.jpg", "code": "\nMOVIEBOB\n"}, {"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2019/07/HTML-760x500-LUCKYMOVIE.jpg", "code": "\nLUCKYMOVIE\n"}, {"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2019/07/HTML-760x500-Moviebuff.jpg", "code": "\nMOVIEBUFF\n"}, {"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2019/07/HTML-SBI-DC-6-760-500.jpg", "code": "\nSBIMOVIE\n"}, {"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2018/11/icici-app-2.jpg", "code": "\nICICINB\n"}, {"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2019/07/html-1-2.jpg", "code": "\nCITIFRIDAY\n"}, {"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2019/04/Axis-Bank-HTML-760x500.jpg", "code": "\nAxis Bank MyZone Card Offer\n"}, {"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2018/01/conNew-Html.jpg", "code": "\nCancellation Protect\n"}, {"src": "https://paytmofferlive.wpengine.com/wp-content/uploads/2019/02/HTML-760-500-Updated.jpg", "code": "\nFOOD200\n"}];
            //alert(json);
            //arrItems = JSON.parse(json); 
            //var arrItems=[{"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/SUMMERFLY_Carousel+(1).jpg", "promocode": "SUMMERFLY"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/flytwo.jpg", "promocode": "FLYTWO"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Rajesh/FLY2019_Carousel_640X378+(1).jpg", "promocode": "FLY2019"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/Carousel---International-Flights-640x372-(2).jpg", "promocode": "FLYINT100"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/FLYINTL_Carousel.jpg", "promocode": "FLYINTL"}, {"src": "https://s3-us-west-2.amazonaws.com/paytm-travel/Marketing/Prachi/FLYSTAR_Carousel.jpg", "promocode": "FLYSTAR"}];
            var div = document.getElementById('paytm_movi'); 
            //var table = document.getElementById('birds');
            // The parent <div>.
            div.innerHTML = '';
            //table.innerHTML = '';
            // Loop through data in the JSON array.
            for (i = 0; i <= arrItems.length - 1; i++) {
                // Create two <div> elements, one for the name and the other to show the image.
                /*
                var divLeft = document.createElement('div');
                divLeft.className="container";
                //divLeft.innerHTML = arrItems[i].Name;
                var img = document.createElement('img');
                img.className="image"
                // Create an <img> element.
                img.src = arrItems[i].src; 
                var a=document.createElement('a');
                a.setAttribute('href','https://paytm.com/movies/bengaluru');
                a.setAttribute('target','_blank');
                a.appendChild(img);
                divLeft.appendChild(a);

                var divr = document.createElement('div');
                divr.className="overlay";
                //divr.innerHTML=arrItems[i].promocode;
                divr.innerHTML=arrItems[i].code;
                // Add the child DIVs to parent DIV.
                divLeft.appendChild(divr);
                divLeft.style.display="inline-block";
                div.appendChild(divLeft);*/
                var divLeft0 = document.createElement('div');
                divLeft0.className = "flip-box";

                var divLeft1 = document.createElement('div');
                divLeft1.className = "flip-box-inner";

                var divLeft2 = document.createElement('div');
                divLeft2.className = "flip-box-front";

                var img = document.createElement('img');
                img.className="image"
                // Create an <img> element.
                img.src = arrItems[i].src; 
                var a=document.createElement('a');
                a.setAttribute('href','https://paytm.com/flights');
                a.setAttribute('target','_blank');
                a.appendChild(img);
                divLeft2.appendChild(a);

                var divLeft3 = document.createElement('div');
                divLeft3.className= "flip-box-back";
                var divLeft3 = document.createElement('div');
                divLeft3.className= "flip-box-back";
                var h2=document.createElement('h3');
                h2.innerHTML="Best Deal Of The Day"
                divLeft3.appendChild(h2);
                var p=document.createElement('p');
                p.className="image1";
                p.innerHTML="PromoCode & Detail"
                divLeft3.appendChild(p);
                divLeft1.appendChild(divLeft2);
                divLeft1.appendChild(divLeft3);
                divLeft0.appendChild(divLeft1);
                
                //divLeft.appendChild(divLeft0);
                
                var divr = document.createElement('div');
                divr.className="overlay";
                //ivr.innerHTML=arrItems[i].promocode;
                divr.innerHTML=arrItems[i].code;
                // Add the child DIVs to parent DIV.
                divLeft0.appendChild(divr);
                divLeft0.style.display="inline-block";
                div.appendChild(divLeft0);

            }
            
        }
        
    }
function openNav() {
    document.getElementById("myNav").style.display = "block";
    paytmflightshow();
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
function openNavmovi() {
    document.getElementById("myNavmovi").style.display = "block";
    paytmmovi();
}

function closeNavmovi() {
    document.getElementById("myNavmovi").style.display = "none";
}
