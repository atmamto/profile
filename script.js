
window.addEventListener("load",function(){
    setInterval(changeCommentsAuto,8000);
    setInterval(clockDiv,1000);
    getColorWithCookie();
});

// charger la coleur da le page 

function getColorWithCookie(){
    var myCookie = document.cookie.split(';');
    var myNewCookiePinkIndex = myCookie.indexOf('pageColor=Pink');
    var myNewCookieRedIndex = myCookie.indexOf('pageColor=Red');
    var myNewCookieBlueIndex = myCookie.indexOf('pageColor=Blue');
    if(myNewCookiePinkIndex >= 0){
        changeColor( myCookie[myNewCookiePinkIndex].split('=')[1]);
    }
    if(myNewCookieRedIndex >= 0){
        changeColor( myCookie[myNewCookieRedIndex].split('=')[1]);
    }
    if(myNewCookieBlueIndex >= 0){
        changeColor( myCookie[myNewCookieBlueIndex].split('=')[1]);
    }
};




// placeholder deplace

function deplacePlaceholder(e, indx){
    var dvInput = document.querySelectorAll(`${e}`);
    dvInput[`${indx}`].nextElementSibling.style.top = '-24px';
    dvInput[`${indx}`].nextElementSibling.style.color = '#908e8e';

}

function deplacePlaceholderNon(e, indx){
    var dvInput = document.querySelectorAll(`${e}`); // div.inpt input  
    if(dvInput[`${indx}`].value === ''){
        dvInput[`${indx}`].nextElementSibling.style.top = '3px';
        dvInput[`${indx}`].nextElementSibling.style.color = '#ddd9d9';
    }
    else{
        dvInput[`${indx}`].nextElementSibling.style.top = '-24px';
        dvInput[`${indx}`].nextElementSibling.style.color = '#908e8e';
    }
    
}




// afficher les icones social media
function afficheSocialIcons(){
    var icons = document.querySelectorAll('.sharInnerBox i'),
        sharBox = document.querySelector('.sharBox');
    for(var i =1 ; i< icons.length; i++){
        icons[i].classList.toggle('activePage');
    }
    sharBox.classList.toggle('bgColYes');
}
// remplir skill progress

function progress(){
    var skVal = document.getElementsByClassName('skilProgress');
        
    // console.log(skVal.length);
    for(var i = 0; i<skVal.length; i++){
        var skValSpan = skVal[i].children[0];
        var skValue = skVal[i].children[0].textContent;
        // console.log(skValue);
        skVal[i].style.width = skValue;

    }
}

function progressNo(){
    var skVal = document.getElementsByClassName('skilProgress');
    for(var i = 0; i<skVal.length; i++){
        
        skVal[i].style.width = 0;

    }
}



// afficher la Page
function affichePage(e){
    // var btsMenu = document.getElementsByClassName('btn');
    var mypage = document.getElementsByClassName('mypage');
    // console.log(mypage.length);
    for(var i=0; i<mypage.length; i++){
        mypage[i].classList.remove('activePage');
    }
    mypage[`${e}`].classList.add('activePage');
}

function changeColor(e){

    var dt = new Date();
    dt.setFullYear(dt.getFullYear()+1);
    var styleColor = document.getElementById('styleColor');
    styleColor.setAttribute('href', `css/color${e}.css`);
    document.cookie =`pageColor=${e}; expires=${dt}; path=/`; 
}



// btn color
var colorBox = document.querySelector('.colorBox');
var btnparametre = document.querySelector('.btnParametre') ;
btnparametre.onclick = function(){
    colorBox.classList.toggle('activeColorBox');
}



// ckock

function clockDiv(){
    var myClockDiv = document.getElementById('homeHour');
    var clockTime = new Date();
    var HourClock = clockTime.getHours();
        if (HourClock <10){HourClock= '0'+ HourClock;}
    var minuteClock = clockTime.getMinutes();
        if (minuteClock <10){minuteClock= '0'+ minuteClock;}
    var secundlock = clockTime.getSeconds();
        if (secundlock <10){secundlock= '0'+ secundlock;}
    var myTime = `<span id="Hr">${HourClock}</span> : <span id="Mn">${minuteClock}</span> : <span id="Sc">${secundlock}</span>`;

    myClockDiv.innerHTML = myTime;
}





// comment

// btns Comment

// color btns 
 function colorCommentsBtns(e){
     var btsComments = document.querySelectorAll('.btnsSlide span');
     var commentsInnerBox = document.querySelector('.commentsInnerBox');
     for(var j =0; j<btsComments.length; j++){
         btsComments[j].classList.remove('colorCommentsBtns');
         if(e == 0){commentsInnerBox.style.transform = 'translate(0,0)'}
         if(e == 1){commentsInnerBox.style.transform = 'translate(calc(-100%/3),0)'}
         if(e== 2){commentsInnerBox.style.transform = 'translate(calc(-200%/3),0)'}

     }
     
     btsComments[e].classList.add('colorCommentsBtns');
 }

//  change Comments Automatique
 function changeCommentsAuto(){
    var spanComment = document.querySelector('span.colorCommentsBtns');
    if(spanComment.nextElementSibling == null){
        spanComment.parentElement.firstElementChild.click();
    }else{
        spanComment.nextElementSibling.click();
    }

 };


//  portfolio

function showImgBox(e){
    var showImgeBox = document.querySelector('.showImgeBox');
    var item = document.querySelectorAll('.portfolioItem img');
    var showImgeBoxImg = document.querySelector('.showImgeBox img');
    var btnShow = document.querySelector('.closeShoxBox');
    btnShow.classList.add('afficheSowImgbtn');
    showImgeBoxImg.src = item[e].src;
    showImgeBox.classList.add('afficheSowImgBox');
}

function hideSowImgBox(){
    var showImgeBox = document.querySelector('.showImgeBox');
    var btnShow = document.querySelector('.closeShoxBox');
    btnShow.classList.remove('afficheSowImgbtn');
    showImgeBox.classList.remove('afficheSowImgBox');

}


function afficheListItems(e){
    if(e == "0"){
        var portfolioItem = document.getElementsByClassName('portfolioItem');
        for(var i = 0; i<portfolioItem.length; i++){
            portfolioItem[i].classList.add('afficheItem');
        };
    }
    if(e == "1"){
        var portfolioItem = document.getElementsByClassName('portfolioItem');
        var list1 = document.querySelectorAll('.list1')
        for(var i = 0; i<portfolioItem.length; i++){
            portfolioItem[i].classList.remove('afficheItem');
        };
        for(var j = 0; j<list1.length; j++){
            list1[j].classList.add('afficheItem');
        };
    }
    if(e == 2){
        var portfolioItem = document.getElementsByClassName('portfolioItem');
        var list2 = document.querySelectorAll('.list2')
        for(var i = 0; i<portfolioItem.length; i++){
            portfolioItem[i].classList.remove('afficheItem');
        }
        for(var j = 0; j<list2.length; j++){
            list2[j].classList.add('afficheItem');
        }
    }
    if(e == 3){
        var portfolioItem = document.getElementsByClassName('portfolioItem');
        var list3 = document.querySelectorAll('.list3')
        for(var i = 0; i<portfolioItem.length; i++){
            portfolioItem[i].classList.remove('afficheItem');
        }
        for(var j = 0; j<list3.length; j++){
            list3[j].classList.add('afficheItem');
        }
    }


}


function colorItem(e){
    var porfolioLink = document.getElementsByClassName('porfolioLink');
    for(var i = 0; i<porfolioLink.length; i++){
        porfolioLink[i].style.color = "#ddd9d9";
    }
    porfolioLink[e].style.color = "var(--secundCol)";
}