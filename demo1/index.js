var images = 
['https://res.vmallres.com/pimages//pages/picImages/vpXiBDvdFDe4VMaPs0OW.jpg',
'https://res.vmallres.com/pimages//pages/picImages/YMRP8QfW9AeGJhBfMNfp.jpg',
'https://res.vmallres.com/pimages//pages/picImages/KMqEJkCF12GXWRT6lhed.jpg',
'https://res.vmallres.com/pimages//pages/picImages/gvIHKY3RtvKpiJCpDhyQ.jpg',
'https://res.vmallres.com/pimages//pages/picImages/VSFYDh7Wrn5mLXnDNYcF.jpg',
'https://res.vmallres.com/pimages//pages/picImages/uNMc2850Wkip2too4PM1.jpg'
]
var i = 1;
var hb = document.getElementById("hotImage");
var circle = document.getElementById("circle").children;
circle[i-1].style.backgroundColor = "white";
setInterval(function (){
    hb.style.backgroundImage = "url(" + images[i] +")";
    circle[i].style.backgroundColor = "white";
    if(i != 0){
        circle[i-1].style.backgroundColor = "";
    }
    if(i == 0){
        circle[5].style.backgroundColor = "";
    }
    i++;
    if(i == 6){
        i=0;
    }
},4000);

