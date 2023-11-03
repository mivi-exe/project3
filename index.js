var video = document.getElementById("vid");

//Tips Var
var tip1 = document.getElementById("tip1");
var tip2 = document.getElementById("tip2");
var tip3 = document.getElementById("tip3");
var tip4 = document.getElementById("tip4");
var tip5 = document.getElementById("tip5");
var tip6 = document.getElementById("tip6");
var tip7 = document.getElementById("tip7");
var tip8 = document.getElementById("tip8");
var tactive = false;
var tbool1 = false;
var tbool2 = false;
var tbool3 = false;
var tbool4 = false;
var tbool5 = false;
var tbool6 = false;
var tbool7 = false;
var tbool8 = false;


//tip timing
 //tip1: 00:03 - 00:09;
 //tip2: 00:13 - 00:22;
 //tip3: 00:25 - 00:37;
 //tip4: 00:39 -  00:45;
 //tip5: 00:46 - 00:53;
 //tip6: 00:54 - 01:01; 
 //tip7: 01:03 - 01:16;
 //tip8: 01:25 - 01:43;
//

//tip functions
video.addEventListener('timeupdate', function() {
    //tip1
    if ((video.currentTime > 3) && (video.currentTime < 9)) {
        while (tbool1 == false) {
            tactive = true;
            tbool1 = true;
            if (tactive == true) {
                setTimeout(function(){tip1.classList.add("fade-in");
                tip1.style.display = "flex";
                setTimeout(function() {
                tip1.classList.remove("fade-in");
                }, 400);}, 400);
            }
            else {
                tip1.classList.add("fade-in");
                tip1.style.display = "flex";
                setTimeout(function() {
                tip1.classList.remove("fade-in");
                }, 400);
            }
        }
    }
    
    if ((video.currentTime < 3) || (video.currentTime > 9)) {
        while (tbool1 == true) {
            tip1.classList.add("fade-out");
            setTimeout(function() {
            tip1.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                tip1.style.display = "none";
            }, 400);
            tactive = false; 
            tbool1 = false;
        }
    }


    //tip2
    if ((video.currentTime > 13) && (video.currentTime < 22)) {
        while (tbool2 == false) {
            tactive = true;
            tbool2 = true;
            if (tactive == true) {
                console.log(tactive);
                setTimeout(function(){tip2.classList.add("fade-in");
                tip2.style.display = "flex";
                setTimeout(function() {
                tip2.classList.remove("fade-in");
                }, 400);}, 400);
            }
            else {
                tip2.classList.add("fade-in");
                tip2.style.display = "flex";
                setTimeout(function() {
                tip2.classList.remove("fade-in");
                }, 400);
            }
        }
    }
    
    if ((video.currentTime < 13) || (video.currentTime > 22)) {
        while (tbool2 == true) {
            tip2.classList.add("fade-out");
            setTimeout(function() {
            tip2.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                tip2.style.display = "none";
            }, 400);
            tactive = false;
            tbool2 = false; 
        }
    }


    //tip3
    if ((video.currentTime > 25) && (video.currentTime < 37)) {
        while (tbool3 == false) {
            tactive = true;
            tbool3 = true;
            if (tactive == true) {
                setTimeout(function(){tip3.classList.add("fade-in");
                tip3.style.display = "flex";
                setTimeout(function() {
                tip3.classList.remove("fade-in");
                }, 400);}, 500);
            }
            else {
                tip3.classList.add("fade-in");
                tip3.style.display = "flex";
                setTimeout(function() {
                tip3.classList.remove("fade-in");
                }, 400);
            }
        }
    }
    
    if ((video.currentTime < 25) || (video.currentTime > 37)) {
        while (tbool3 == true) {
            tip3.classList.add("fade-out");
            setTimeout(function() {
            tip3.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                tip3.style.display = "none";
            }, 400);
            tactive = false;
            tbool3 = false; 
        }
    }


    //tip4
    if ((video.currentTime > 38) && (video.currentTime < 45)) {
        while (tbool4 == false) {
            tactive = true;
            tbool4 = true;
            if (tactive == true) {
                setTimeout(function(){tip4.classList.add("fade-in");
                tip4.style.display = "flex";
                setTimeout(function() {
                tip4.classList.remove("fade-in");
                }, 400);}, 500);
            }
            else {
                tip4.classList.add("fade-in");
                tip4.style.display = "flex";
                setTimeout(function() {
                tip4.classList.remove("fade-in");
                }, 400);
            }
        }
    }
    
    if ((video.currentTime < 38) || (video.currentTime > 45)) {
        while (tbool4 == true) {
            tip4.classList.add("fade-out");
            setTimeout(function() {
            tip4.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                tip4.style.display = "none";
            }, 400);
            tactive = false;
            tbool4 = false; 
        }
    }



    //tip5
    if ((video.currentTime > 46) && (video.currentTime < 53)) {
        while (tbool5 == false) {
            tactive = true;
            tbool5 = true;
            if (tactive == true) {
                setTimeout(function(){tip5.classList.add("fade-in");
                tip5.style.display = "flex";
                setTimeout(function() {
                tip5.classList.remove("fade-in");
                }, 400);}, 500);
            }
            else {
                tip5.classList.add("fade-in");
                tip5.style.display = "flex";
                setTimeout(function() {
                tip5.classList.remove("fade-in");
                }, 400);
            }
        }
    }
    
    if ((video.currentTime < 46) || (video.currentTime > 53)) {
        while (tbool5 == true) {
            tip5.classList.add("fade-out");
            setTimeout(function() {
            tip5.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                tip5.style.display = "none";
            }, 400);
            tactive = false;
            tbool5 = false; 
        }
    }


    //tip6
    if ((video.currentTime > 54) && (video.currentTime < 62)) {
        while (tbool6 == false) {
            tactive = true;
            tbool6 = true;
            if (tactive == true) {
                setTimeout(function(){tip6.classList.add("fade-in");
                tip6.style.display = "flex";
                setTimeout(function() {
                tip6.classList.remove("fade-in");
                }, 400);}, 500);
            }
            else {
                tip6.classList.add("fade-in");
                tip6.style.display = "flex";
                setTimeout(function() {
                tip6.classList.remove("fade-in");
                }, 400);
            }
        }
    }
    
    if ((video.currentTime < 54) || (video.currentTime > 62)) {
        while (tbool6 == true) {
            tip6.classList.add("fade-out");
            setTimeout(function() {
            tip6.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                tip6.style.display = "none";
            }, 400);
            tactive = false;
            tbool6 = false; 
        }
    }
    

    //tip7
    if ((video.currentTime > 63) && (video.currentTime < 76)) {
        while (tbool7 == false) {
            tactive = true;
            tbool7 = true;
            if (tactive == true) {
                setTimeout(function(){tip7.classList.add("fade-in");
                tip7.style.display = "flex";
                setTimeout(function() {
                tip7.classList.remove("fade-in");
                }, 400);}, 500);
            }
            else {
                tip7.classList.add("fade-in");
                tip7.style.display = "flex";
                setTimeout(function() {
                tip7.classList.remove("fade-in");
                }, 400);
            }
        }
    }
    
    if ((video.currentTime < 63) || (video.currentTime > 76)) {
        while (tbool7 == true) {
            tip7.classList.add("fade-out");
            setTimeout(function() {
            tip7.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                tip7.style.display = "none";
            }, 400);
            tactive = false;
            tbool7 = false; 
        }
    }


    //tip8
    if ((video.currentTime > 83) && (video.currentTime < 103)) {
        while (tbool8 == false) {
            tactive = true;
            tbool8 = true;
            if (tactive == true) {
                setTimeout(function(){tip8.classList.add("fade-in");
                tip8.style.display = "flex";
                setTimeout(function() {
                tip8.classList.remove("fade-in");
                }, 400);}, 500);
            }
            else {
                tip8.classList.add("fade-in");
                tip8.style.display = "flex";
                setTimeout(function() {
                tip8.classList.remove("fade-in");
                }, 400);
            }
        }
    }
    
    if ((video.currentTime < 83) || (video.currentTime > 103)) {
        while (tbool8 == true) {
            tip8.classList.add("fade-out");
            setTimeout(function() {
            tip8.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                tip8.style.display = "none";
            }, 400);
            tactive = false;
            tbool8 = false; 
        }
    }

});

    



//Ingredients Var
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var i4 = document.getElementById("i4");
var i5 = document.getElementById("i5");
var ibool1 = false;
var ibool2 = false;
var ibool3 = false;
var ibool4 = false;
var ibool5 = false;

var i_time = true;
var i_icon = document.getElementById("i-icon");
var i_bool = false;
var i_bool_temp = false;


//ingredient timing
 //i1: 00:23;
 //i2: 00:39;
 //i3: 00:48;
 //i4: 00:56;
 //i5: 01:27;
//

//ingredient functions 
    video.addEventListener('timeupdate', function() {
        if (i_time == false) {
            return;
        }

        //ingredient1
        if (video.currentTime > 23) {
            while (ibool1 == false) {
                ibool1 = true;
                i1.classList.add("fade-in");
                i1.style.display = "flex";
                setTimeout(function() {
                i1.classList.remove("fade-in");
                }, 400);
            }
        }
        
        if (video.currentTime < 23) {
            while (ibool1 == true) {
                i1.classList.add("fade-out");
                setTimeout(function() {
                i1.classList.remove("fade-out");
                }, 400);
                setTimeout(function() {
                    i1.style.display = "none";
                }, 400); 
                ibool1 = false;
            }
        }
    
    
        //ingredient2
        if (video.currentTime > 39) {
            while (ibool2 == false) {
                ibool2 = true;
                i2.classList.add("fade-in");
                i2.style.display = "flex";
                setTimeout(function() {
                i2.classList.remove("fade-in");
                }, 400);
            }
        }
        
        if (video.currentTime < 39) {
            while (ibool2 == true) {
                i2.classList.add("fade-out");
                setTimeout(function() {
                i2.classList.remove("fade-out");
                }, 400);
                setTimeout(function() {
                    i2.style.display = "none";
                }, 400); 
                ibool2 = false;
            }
        }
    
    
        //ingredient3
        if (video.currentTime > 48) {
            while (ibool2 == false) {
                ibool2 = true;
                i2.classList.add("fade-in");
                i2.style.display = "flex";
                setTimeout(function() {
                i2.classList.remove("fade-in");
                }, 400);
            }
        }
        
        if (video.currentTime < 48) {
            while (ibool3 == true) {
                i3.classList.add("fade-out");
                setTimeout(function() {
                i3.classList.remove("fade-out");
                }, 400);
                setTimeout(function() {
                    i3.style.display = "none";
                }, 400); 
                ibool3 = false;
            }
        }
    
        
        //ingredient4
        if (video.currentTime > 56) {
            while (ibool4 == false) {
                ibool4 = true;
                i4.classList.add("fade-in");
                i4.style.display = "flex";
                setTimeout(function() {
                i4.classList.remove("fade-in");
                }, 400);
            }
        }
        
        if (video.currentTime < 56) {
            while (ibool4 == true) {
                i4.classList.add("fade-out");
                setTimeout(function() {
                i4.classList.remove("fade-out");
                }, 400);
                setTimeout(function() {
                    i4.style.display = "none";
                }, 400); 
                ibool4 = false;
            }
        }
    
    
        //ingredient5
        if (video.currentTime > 87) {
            while (ibool5 == false) {
                ibool5 = true;
                i5.classList.add("fade-in");
                i5.style.display = "flex";
                setTimeout(function() {
                i5.classList.remove("fade-in");
                }, 400);
            }
        }
        
        if (video.currentTime < 87) {
            while (ibool5 == true) {
                i5.classList.add("fade-out");
                setTimeout(function() {
                i5.classList.remove("fade-out");
                }, 400);
                setTimeout(function() {
                    i5.style.display = "none";
                }, 400); 
                ibool5 = false;
            }
        }
    
       
    });


//toggle ingredient

function togglei() {
    if (i_bool == false) {
        i_icon.style.color = "rgb(112, 112, 112)";
        i_bool_temp = true;
        i_time = false;
        //i1
        while (ibool1 == false) {
            ibool1 = true;
            i1.classList.add("fade-in");
            i1.style.display = "flex";
            setTimeout(function() {
            i1.classList.remove("fade-in");
            }, 400);
        }
        //i2
        while (ibool2 == false) {
            ibool2 = true;
            i2.classList.add("fade-in");
            i2.style.display = "flex";
            setTimeout(function() {
            i2.classList.remove("fade-in");
            }, 400);
        }
        //i3
        while (ibool2 == false) {
            ibool2 = true;
            i2.classList.add("fade-in");
            i2.style.display = "flex";
            setTimeout(function() {
            i2.classList.remove("fade-in");
            }, 400);
        }
        //i4
        while (ibool4 == false) {
            ibool4 = true;
            i4.classList.add("fade-in");
            i4.style.display = "flex";
            setTimeout(function() {
            i4.classList.remove("fade-in");
            }, 400);
        }
        //i5
        while (ibool5 == false) {
            ibool5 = true;
            i5.classList.add("fade-in");
            i5.style.display = "flex";
            setTimeout(function() {
            i5.classList.remove("fade-in");
            }, 400);
        }
        console.log(i_bool);
    }

    if (i_bool == true) {
        i_icon.style.color = "rgb(255, 255, 255)";
        i_bool_temp = false;
        i_time = true;
    }

    i_bool = i_bool_temp;
}


//Preparation Var
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");
var p7 = document.getElementById("p7");
var p8 = document.getElementById("p8");
var p9 = document.getElementById("p9");
var pbool1 = false;
var pbool2 = false;
var pbool3 = false;
var pbool4 = false;
var pbool5 = false;
var pbool6 = false;
var pbool7 = false;
var pbool8 = false;
var pbool9 = false;

var p_time = true;
var p_icon = document.getElementById("p-icon");
var p_bool = false;
var p_bool_temp = false;

//preparation timing
 //p1: 00:27;
 //p2: 00:41;
 //p3: 00:50;
 //p4: 01:03;
 //p5: 01:13;
 //p6: 01:23;
 //p7: 01:29;
 //p8: 01:33;
 //p9: 01:39;
//

//prep functions
video.addEventListener('timeupdate', function() {
    if (p_time == false) {
        return;
    }

    //prepare 1
    if (video.currentTime > 27) {
        while (pbool1 == false) {
            pbool1 = true;
            p1.classList.add("fade-in");
            p1.style.display = "flex";
            setTimeout(function() {
            p1.classList.remove("fade-in");
            }, 400);
        }
    }
    
    if (video.currentTime < 27) {
        while (pbool1 == true) {
            p1.classList.add("fade-out");
            setTimeout(function() {
            p1.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                p1.style.display = "none";
            }, 400); 
            pbool1 = false;
        }
    }


    //prepare 2
    if (video.currentTime > 41) {
        while (pbool2 == false) {
            pbool2 = true;
            p2.classList.add("fade-in");
            p2.style.display = "flex";
            setTimeout(function() {
            p2.classList.remove("fade-in");
            }, 400);
        }
    }
    
    if (video.currentTime < 41) {
        while (pbool2 == true) {
            p2.classList.add("fade-out");
            setTimeout(function() {
            p2.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                p2.style.display = "none";
            }, 400); 
            pbool2 = false;
        }
    }


    //prepare 3
    if (video.currentTime > 50) {
        while (pbool3 == false) {
            pbool3 = true;
            p3.classList.add("fade-in");
            p3.style.display = "flex";
            setTimeout(function() {
            p3.classList.remove("fade-in");
            }, 400);
        }
    }
    
    if (video.currentTime < 50) {
        while (pbool3 == true) {
            p3.classList.add("fade-out");
            setTimeout(function() {
            p3.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                p3.style.display = "none";
            }, 400); 
            pbool3 = false;
        }
    }

    
    //prepare 4
    if (video.currentTime > 63) {
        while (pbool4 == false) {
            pbool4 = true;
            p4.classList.add("fade-in");
            p4.style.display = "flex";
            setTimeout(function() {
            p4.classList.remove("fade-in");
            }, 400);
        }
    }
    
    if (video.currentTime < 63) {
        while (pbool4 == true) {
            p4.classList.add("fade-out");
            setTimeout(function() {
            p4.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                p4.style.display = "none";
            }, 400); 
            pbool4 = false;
        }
    }


    //prepare 5
    if (video.currentTime > 73) {
        while (pbool5 == false) {
            pbool5 = true;
            p5.classList.add("fade-in");
            p5.style.display = "flex";
            setTimeout(function() {
            p5.classList.remove("fade-in");
            }, 400);
        }
    }
    
    if (video.currentTime < 73) {
        while (pbool5 == true) {
            p5.classList.add("fade-out");
            setTimeout(function() {
            p5.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                p5.style.display = "none";
            }, 400); 
            pbool5 = false;
        }
    }

   
    //prepare 6
    if (video.currentTime > 83) {
        while (pbool6 == false) {
            pbool6 = true;
            p6.classList.add("fade-in");
            p6.style.display = "flex";
            setTimeout(function() {
            p6.classList.remove("fade-in");
            }, 400);
        }
    }
    
    if (video.currentTime < 83) {
        while (pbool6 == true) {
            p6.classList.add("fade-out");
            setTimeout(function() {
            p6.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                p6.style.display = "none";
            }, 400); 
            pbool6 = false;
        }
    }

    //prepare 7
    if (video.currentTime > 89) {
        while (pbool7 == false) {
            pbool7 = true;
            p7.classList.add("fade-in");
            p7.style.display = "flex";
            setTimeout(function() {
            p7.classList.remove("fade-in");
            }, 400);
        }
    }
    
    if (video.currentTime < 89) {
        while (pbool7 == true) {
            p7.classList.add("fade-out");
            setTimeout(function() {
            p7.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                p7.style.display = "none";
            }, 400); 
            pbool7 = false;
        }
    }

    //prepare 8
    if (video.currentTime > 93) {
        while (pbool8 == false) {
            pbool8 = true;
            p8.classList.add("fade-in");
            p8.style.display = "flex";
            setTimeout(function() {
            p8.classList.remove("fade-in");
            }, 400);
        }
    }
    
    if (video.currentTime < 93) {
        while (pbool8 == true) {
            p8.classList.add("fade-out");
            setTimeout(function() {
            p8.classList.remove("fade-out");
            }, 400);
            setTimeout(function() {
                p8.style.display = "none";
            }, 400); 
            pbool8 = false;
        }
    }

        //prepare 9
        if (video.currentTime > 99) {
            while (pbool9 == false) {
                pbool9 = true;
                p9.classList.add("fade-in");
                p9.style.display = "flex";
                setTimeout(function() {
                p9.classList.remove("fade-in");
                }, 400);
            }
        }
        
        if (video.currentTime < 99) {
            while (pbool9 == true) {
                p9.classList.add("fade-out");
                setTimeout(function() {
                p9.classList.remove("fade-out");
                }, 400);
                setTimeout(function() {
                    p9.style.display = "none";
                }, 400); 
                pbool9 = false;
            }
        }
});


//toggle prepare

function togglep() {
    if (p_bool == false) {
        p_icon.style.color = "rgb(112, 112, 112)";
        p_bool_temp = true;
        p_time = false;
        //p1
        while (pbool1 == false) {
            pbool1 = true;
            p1.classList.add("fade-in");
            p1.style.display = "flex";
            setTimeout(function() {
            p1.classList.remove("fade-in");
            }, 400);
        }   
        //p2
        while (pbool2 == false) {
            pbool2 = true;
            p2.classList.add("fade-in");
            p2.style.display = "flex";
            setTimeout(function() {
            p2.classList.remove("fade-in");
            }, 400);
        }
        //p3
        while (pbool3 == false) {
            pbool3 = true;
            p3.classList.add("fade-in");
            p3.style.display = "flex";
            setTimeout(function() {
            p3.classList.remove("fade-in");
            }, 400);
        }
        //p4
        while (pbool4 == false) {
            pbool4 = true;
            p4.classList.add("fade-in");
            p4.style.display = "flex";
            setTimeout(function() {
            p4.classList.remove("fade-in");
            }, 400);
        }
        //p5
        while (pbool5 == false) {
            pbool5 = true;
            p5.classList.add("fade-in");
            p5.style.display = "flex";
            setTimeout(function() {
            p5.classList.remove("fade-in");
            }, 400);
        }
        //p6
        while (pbool6 == false) {
            pbool6 = true;
            p6.classList.add("fade-in");
            p6.style.display = "flex";
            setTimeout(function() {
            p6.classList.remove("fade-in");
            }, 400);
        }
        //p7
        while (pbool7 == false) {
            pbool7 = true;
            p7.classList.add("fade-in");
            p7.style.display = "flex";
            setTimeout(function() {
            p7.classList.remove("fade-in");
            }, 400);
        }
        //p8
        while (pbool8 == false) {
            pbool8 = true;
            p8.classList.add("fade-in");
            p8.style.display = "flex";
            setTimeout(function() {
            p8.classList.remove("fade-in");
            }, 400);
        }
        //p9
        while (pbool9 == false) {
            pbool9 = true;
            p9.classList.add("fade-in");
            p9.style.display = "flex";
            setTimeout(function() {
            p9.classList.remove("fade-in");
            }, 400);
        }
    }

    if (p_bool == true) {
        p_icon.style.color = "rgb(255, 255, 255)";
        p_bool_temp = false;
        p_time = true;
    }
    p_bool = p_bool_temp;
}