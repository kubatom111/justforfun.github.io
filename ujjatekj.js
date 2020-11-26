function Direction(Choice){
// The choice of the first buttons 
    
    if(Choice == "left"){
        document.getElementById("result").innerHTML = "<div>Odamentél hozzá, úgy néz ki mint Morpheus a Mátrixból és 2 pirulát ajánl neked, egy pirosat és egy kéket! Melyiket választod??</div>";
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById('left2').style.display = 'inline';
        document.getElementById("right2").style.display = 'inline';
        document.getElementById("escape2").style.display = 'inline';
        document.getElementById("pirula").style.display = 'block';
    }
    
    if(Choice == "right"){
        document.getElementById("result").innerHTML = "<div>Figyelmen kívül hagytad, elmentél dolgozni, 50 év mulva meghaltál!</div>";
        
       //making sure the right buttons are displayed
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("tryagain").style.display = 'block';
        document.getElementById("result").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }

    if(Choice == "escape"){
        document.getElementById("result").innerHTML = "<div>Visszalőtt, meghaltál!</div>";
        
       //making sure the right buttons are displayed
        document.getElementById('left1').style.display = 'none';
        document.getElementById("right1").style.display = 'none';
        document.getElementById("escape1").style.display = 'none';
        document.getElementById("tryagain").style.display = 'block';
        document.getElementById("result").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
}
        
function Direction2(Choice){

        if(Choice == 'left2'){
            document.getElementById("result2").innerHTML = '<div>A drog furcsán hatott a szervezetedre, korházban ébredtél és elvesztetted a bal kezedet, amit egy robot kézzel helyettesítettek!</br></br>Nincs mit vesztened</div>';
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById('A').style.display = 'inline';
        document.getElementById("B").style.display = 'inline';
        document.getElementById("pirula").style.display = 'none';
        document.getElementById("result").style.display = 'none';
        document.getElementById("eleje").style.display = 'none';
        document.getElementById("robotkez").style.display = 'block';
        
        }
        
        if(Choice == 'right2'){
            document.getElementById("result2").innerHTML = '<div>Cián volt benne, meghaltál!</div>';
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        document.getElementById("pirula").style.display = 'none';
        document.getElementById("result").style.display = 'none';
        }
        
        if(Choice == 'escape2'){
            document.getElementById("result2").innerHTML = '';
        document.getElementById('left2').style.display = 'none';
        document.getElementById("right2").style.display = 'none';
        document.getElementById("escape2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
        document.getElementById("pirula").style.display = 'none';
        document.getElementById("result").style.display = 'none';
    }
}

function Direction3(Choice){

        if(Choice == "A"){
            document.getElementById("result3").innerHTML = '<div>Kikerültél a kórházbol és kaptál egy fülest Morpheus hollétéről.</br>Egy elhagyatott raktárba találtad meg őt és úgy tűnik már várt rád!</div>';
        document.getElementById('A').style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById('blue').style.display = 'inline';
        document.getElementById("red").style.display = 'inline';
        document.getElementById("yellow").style.display = 'inline';
        document.getElementById("pink").style.display = 'inline';
        document.getElementById("robotkez").style.display = 'none';
        document.getElementById("result2").style.display = 'none';
        document.getElementById("moroom").style.display = 'block';
        }
        
        if(Choice == "B"){
        document.getElementById("result3").innerHTML = '<div>A rendőrségen megtetted e bejelentésedet!</br>Másnap arra lettél figyelmes hogy valaki követ.</br>1 hét telt el és tudtad, hogy állandóan figyelnek, de nem a rendősrég!</div>';
        document.getElementById('A').style.display = 'none';
        document.getElementById("B").style.display = 'none';
        document.getElementById("dead1").style.display = 'inline';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById("menekul").style.display = 'block';
        document.getElementById("robotkez").style.display = 'none';
        document.getElementById("result2").style.display = 'none';
        }
        
}

function Direction4(Choice){

    if(Choice == "pink"){
        document.getElementById("result4").innerHTML = '<div>Már vártalak.. Neo</div>';
        document.getElementById('blue').style.display = 'none';
        document.getElementById("red").style.display = 'none';
        document.getElementById("yellow").style.display = 'none';
        document.getElementById("pink").style.display = 'none';
        document.getElementById("result4").style.display = 'inline';
        document.getElementById('blue2').style.display = 'inline';
        document.getElementById("red2").style.display = 'inline';
        document.getElementById("yellow2").style.display = 'inline';
        document.getElementById("pink2").style.display = 'inline';
        document.getElementById("green2").style.display = 'inline';
        document.getElementById("result3").style.display = 'none';
        document.getElementById("moroom").style.display = 'none';
    }

    if(Choice == "blue" || Choice == "yellow" || Choice == "red"){
        document.getElementById("result3").style.display = 'none';
        document.getElementById('blue').style.display = 'none';
        document.getElementById("red").style.display = 'none';
        document.getElementById("yellow").style.display = 'none';
        document.getElementById("pink").style.display = 'none';
        document.getElementById("robotkez").style.display = 'none';
        document.getElementById("result2").style.display = 'none';
        document.getElementById("moroom").style.display = 'none';
        document.getElementById("loseGif1").style.display = 'block';
   }

}



function Direction5(Choice){
    
    if(Choice == "red2"){
        document.getElementById("result5").innerHTML = "<br><br>Looks like you're almost out! Just one last question. Will you give this code a like?";
        document.getElementById("result5").style.display = 'inline';
        document.getElementById('blue2').style.display = 'none';
        document.getElementById("red2").style.display = 'none';
        document.getElementById("yellow2").style.display = 'none';
        document.getElementById("pink2").style.display = 'none';
        document.getElementById("green2").style.display = 'none';
        document.getElementById("yes").style.display = 'inline';
        document.getElementById("no").style.display = 'inline';
    }
    
    if(Choice == "blue2" || Choice == "yellow2" || Choice == "pink2" || Choice == "green2"){
         document.getElementById("result5").innerHTML = "";
        document.getElementById("result5").style.display = 'inline';
        document.getElementById('blue2').style.display = 'none';
        document.getElementById("red2").style.display = 'none';
        document.getElementById("yellow2").style.display = 'none';
        document.getElementById("pink2").style.display = 'none';
        document.getElementById("green2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
}

function Direction6(Choice){
    if(Choice == "yes"){
        document.getElementById("result6").innerHTML = "<br><br>WOOOOO YOU MADE IT! CONGRATS! *gives high five* Don't forget to actually give a like now ;)<br>";
        document.getElementById("yes").style.display = 'none';
        document.getElementById("no").style.display = 'none';
        document.getElementById("winGif").style.display = 'block';
    }
    
    if(Choice == "no"){
        document.getElementById("result6").innerHTML = "<br><br>Shame I can't let you out now... Try again when you're ready...";
        document.getElementById("yes").style.display = 'none';
        document.getElementById("no").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
}
    
function TryAgain(){ //running the whole code again 
    Direction();
    document.getElementById("result3").style.display = 'none';
    document.getElementById("result4").style.display = 'none';
    document.getElementById("result5").style.display = 'none';
    document.getElementById("result6").style.display = 'none';
    document.getElementById('left1').style.display = 'inline';
    document.getElementById("right1").style.display = 'inline';
    document.getElementById("escape1").style.display = 'inline';
    document.getElementById('left2').style.display = 'none';
    document.getElementById("right2").style.display = 'none';
    document.getElementById("escape2").style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById("result2").style.display = 'none';
    document.getElementById('tryagain').style.display = 'none';
    document.getElementById("loseGif1").style.display = 'none';
}