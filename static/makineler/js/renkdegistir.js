var btn1=document.querySelector("#btn1");
        var btn2=document.querySelector("#btn2");
        var btn3=document.querySelector("#btn3");
        var btn4=document.querySelector("#btn4");
        var kutu=document.querySelector("#kutu");
        
        btn1.onclick=function(){
            kutu.style.background="#ff0000";//div yazzeminı rengini kırmızı yap
        }
        
        btn2.onclick=function(){
            kutu.style.color="red";//div yazı rengini beyaz yap
        }
        
        btn3.onclick=function(){
            
            var kirmizi=Math.floor(Math.random()*255);
            var yesil=Math.floor(Math.random()*255);
            var mavi=Math.floor(Math.random()*255);
            
            var renk=`rgb(${kirmizi} ,${yesil}, ${mavi})`;
            kutu.style.background=renk;
        }
        
        btn4.onclick=function(){
            this.style.background="red";// tıklanan butonun zemin rengini kırmızı yap
            this.style.color="#ffffff";//tıklanan butonun yazı rengini beyaz yap
        }
        