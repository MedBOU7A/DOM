    
const odd = document.querySelector('.btn-add1')
console.log(odd)
const sup = document.querySelector('.btn-minus1')
console.log(sup)
let num = document.querySelector('p') 
console.log(num)
let value = num.innerHTML

odd.addEventListener("click" , function(e)  {
    console.log('test')
value ++
num.innerHTML = value

})
sup.addEventListener("click" , function(e) {
    if (value>0 ){
      value --
    }
   else {
      value = 0
   }return num.innerHTML = value


})