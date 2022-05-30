
    

   var Btn = document.querySelectorAll("button")


   function affiche(e){
     var cible = e.target 
     var c = cible.innerHTML
    //  console.log(c)
    var div = parent.cible
    console.log(div)
     switch (c) {
         case "+":
              val ++
             break;
         case "-" :
           if (val >0){
                val -- 
           }
           else val = 0 
     }console.log(val)
     return num.innerText = val
   }

   for (i=0 ;i< Btn.length ;i++) {
       Btn[i].addEventListener ("click" ,affiche);
   }