$(document).ready(function() {


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
         //>=, not <=
        if (scroll >= 60) {
            //clearHeader, not clearheader - caps H
            $(".navbar").addClass("bg-light");
        } else {
          $(".navbar").removeClass("bg-light");
        }
    }); //missing );

    $("#navtogg").click(function(){
        var scroll = $(window).scrollTop();
        if(scroll<= 60){
            $(".navbar").addClass("bg-light");
        } else {
          $(".navbar").removeClass("bg-light");
        }
        
    })
    ScrollReveal({ reset: true }); 
    ScrollReveal().reveal('#intro',{ interval: 500, 
                                     delay   :1200,
                                     easing  :'ease-in-out'});
    ScrollReveal().reveal('#intro1',{ origin : 'right',
                                      duration: 1000,
                                      delay    : 1800,
                                      distance : '50px',
                                     easing   : 'ease-in',});
    ScrollReveal().reveal('.letters',{  origin: 'top',
                                        interval: 200, 
                                        delay   :1800,
                                        easing  :'ease-in'});
    ScrollReveal().reveal('#intro2',{ duration: 500,
                                      delay    : 3500,
                                      //distance : '600px',
                                      easing   : 'ease-in-out',}); 
    ScrollReveal().reveal('.typewriter',{duration :200,
                                         delay    :5500})                                 
    ScrollReveal().reveal('#intro3', { //origin : 'right',
                                       duration: 500,
                                       delay    : 9900,
                                       //distance : '400px',
                                       easing   : 'ease-in-out',}); 
    ScrollReveal().reveal('#art4',  { origin : 'left',
                                     duration: 1500,
                                     delay    : 400,
                                     distance : '400px',
                                     easing   : 'ease-in-out',});
      
    
    //   About

    ScrollReveal().reveal('#abtFeatHead',{ origin : 'top',
                                        duration: 800,
                                        delay    : 400,
                                        distance : '80%',
                                        easing   : 'ease-in',});
    ScrollReveal().reveal('#abtFeatSub',{ origin : 'top',
                                        duration: 800,
                                        delay    : 1100,
                                        distance : '80%',
                                        easing   : 'ease-in',});
    ScrollReveal().reveal('#abtFeat1',{ 
                                        duration: 500,
                                        delay    : 1500,
                                        easing   : 'ease-in-out',});
    ScrollReveal().reveal('#abtFeat2',{ 
                                        duration: 500,
                                        delay    : 1700,
                                        easing   : 'ease-in-out',}); 
    ScrollReveal().reveal('#abtFeat3',{ 
                                        duration: 500,
                                        delay    : 1900,
                                        easing   : 'ease-in-out',});                                                                   
    ScrollReveal().reveal('#abtHead',{ origin : 'top',
                                        duration: 800,
                                        delay    : 400,
                                        distance : '80%',
                                        easing   : 'ease-in',});
    ScrollReveal().reveal('#abtSub',{ origin : 'top',
                                        duration: 800,
                                        delay    : 1100,
                                        distance : '80%',
                                        easing   : 'ease-in',});
    ScrollReveal().reveal('#abtText',{  origin :'top',
                                        duration: 800,
                                        delay    : 1500,
                                        easing   : 'ease-in-out',});                                     
    //services
    ScrollReveal().reveal('#serI', { interval: 400,
                                    delay   : 100, 
                                    easing   : 'ease-in-out',});
    ScrollReveal().reveal('#ser',{ scale :   0.3,
                                    duration:  900,
                                    delay    : 100,
                                    //distance : '200px',
                                    easing   : 'ease-in-out',}); 
    ScrollReveal().reveal('#serImg',{ origin: 'left',
                                       duration:  800,
                                       delay    : 2000,
                                       distance : '200px',
                                       easing   : 'ease-in-out',});
    ScrollReveal().reveal('#serHead',{ origin: 'left',
                                       duration:  500,
                                       delay    : 2500,
                                       distance : '200px',
                                       easing   : 'ease-in-out',});
    ScrollReveal().reveal('.serSub1',{ origin : 'left',
                                      interval: 400,
                                      delay   : 3000, 
                                      distance : '200px',
                                      easing   : 'ease-in-out',});
    ScrollReveal().reveal('.serSub2',{ origin : 'left',
                                      interval: 400,
                                      delay   : 4000, 
                                      distance : '200px',
                                      easing   : 'ease-in-out',});
    ScrollReveal().reveal('.serSub3',{ origin : 'left',
                                      interval: 400,
                                      delay   : 5000, 
                                      distance : '200px',
                                      easing   : 'ease-in-out',});


    //  works 
    ScrollReveal().reveal('#web',{ origin : 'left',
                                     duration   :1500,
                                     delay      :600, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#web1',{ origin : 'top',
                                     duration   :1500,
                                     delay      :700, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#web4',{ origin : 'bottom',
                                     duration   :1500,
                                     delay      :800, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#web2',{ origin : 'top',
                                     duration   :1500,
                                     delay      :900, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#web3',{ origin : 'bottom',
                                     duration   :1500,
                                     delay      :1000, 
                                     easing     :'ease-in-out',}); 
    ScrollReveal().reveal('#game',{ origin : 'left',
                                     duration   :1500,
                                     delay      :1100, 
                                     easing     :'ease-in-out',});                                  
    ScrollReveal().reveal('#game1',{ origin : 'top',
                                     duration   :1500,
                                     delay      :1200, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#game3',{ origin : 'bottom',
                                     duration   :1500,
                                     delay      :1300, 
                                     easing     :'ease-in-out',}); 
    ScrollReveal().reveal('#game2',{ origin : 'top',
                                     duration   :1500,
                                     delay      :1400, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#tool',{ origin : 'left',
                                    duration   :1500,
                                    delay      :1100, 
                                    easing     :'ease-in-out',})
    ScrollReveal().reveal('#tool1',{origin : 'left',
                                    duration   :1500,
                                    delay      :1100, 
                                    easing     :'ease-in-out',})
                                                                    // document ready  
    });