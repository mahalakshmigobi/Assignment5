
function getrandomcolor() {

    let color='#';
    const letters="0123456789ABCDEF";
    
   
    for (let index = 0; index < 6; index++) {
        let charpos=Math.floor(Math.random()*16);
        //console.log(charpos);
       color+= letters.charAt(charpos);
        //console.log(color);
 
    }
      
    alert("Hey checkout console");
        console.log("your Generate Random Color, " +color );
    }
    
    // referring elements//
    const randomcolor = document.getElementById("btn-color");
    console.log(randomcolor);
    
    randomcolor.addEventListener("click",getrandomcolor);
    
    
      
      
      