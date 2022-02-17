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
    ScrollReveal().reveal('.art', { interval: 900 }); 
    ScrollReveal().reveal('#art2',{ origin : 'left',
                                    duration: 900,
                                    delay    : 200,
                                    distance : '600px',
                                    easing   : 'ease-in-out',}); 
    ScrollReveal().reveal('#art3', { origin : 'right',
                                     duration: 1500,
                                     delay    : 300,
                                     distance : '400px',
                                     easing   : 'ease-in-out',}); 
    ScrollReveal().reveal('#art4',  { origin : 'left',
                                     duration: 1500,
                                     delay    : 400,
                                     distance : '400px',
                                     easing   : 'ease-in-out',});
      
    
    //   About

    ScrollReveal().reveal('#abtHR',{ origin : 'left',
                                    duration: 500,
                                    delay    : 200,
                                    distance : '200px',
                                    easing   : 'ease-in-out',});
    ScrollReveal().reveal('#val',{ origin : 'left',
                                    duration: 500,
                                    delay    : 200,
                                    distance : '80%',
                                    easing   : 'ease-in-out',});
    ScrollReveal().reveal('#mis',{ origin : 'right',
                                    duration: 500,
                                    delay    : 200,
                                    distance : '80%',
                                    easing   : 'ease-in-out',});
                                    
    
    //services
    ScrollReveal().reveal('.ser', { interval: 400,
                                    delay   : 100, 
                                    easing   : 'ease-in-out',});
    ScrollReveal().reveal('#serHR',{ scale :   0.3,
                                    duration:  900,
                                    delay    : 100,
                                    //distance : '200px',
                                    easing   : 'ease-in-out',}); 

    ScrollReveal().reveal('#serv1',{ duration   :1500,
                                     delay      :700, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#serv3',{ duration   :1500,
                                     delay      :800, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#serv5',{ duration   :1500,
                                     delay      :900, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#serv2',{ duration   :1500,
                                     delay      :1000, 
                                     easing     :'ease-in-out',});                                   
    ScrollReveal().reveal('#serv4',{ duration   :1500,
                                     delay      :1100, 
                                     easing     :'ease-in-out',});
    ScrollReveal().reveal('#serv6',{ duration   :1500,
                                     delay      :1200, 
                                     easing     :'ease-in-out',}); 
                                     
    ScrollReveal().reveal('#suc',{})
                                     // document ready  
    });