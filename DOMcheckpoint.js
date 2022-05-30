

               //function total

var total = document.getElementById("total")
console.log(total)
var z = document.querySelectorAll(".price")
console.log(z)



function sum(z){
  var sum = 0
  for (let i = 0; i < z.length; i++) {
    sum +=Number(z[i].innerHTML)
    }
    console.log(sum)
total.innerHTML = sum
}

                   //    add  la quentite et le price de product


 var btn_plus = document.querySelectorAll('.plus') 
 console.log(btn_plus)

function add(e) {
  var cible = e.target
  console.log(cible)
  var div = cible.parentElement
  console.log(div)
  var x = div.querySelector('p')
  console.log(x)
  var value = Number(x.innerHTML)
  console.log(value)
  value ++
  x.innerHTML=value
  
  var y = (div.parentElement).parentElement
  console.log(y)
  var unitPrice = y.querySelector('.unitPrice')
  console.log(unitPrice)
  var price = y.querySelector('.price')
  console.log(price)
  price.innerHTML = x.innerHTML * unitPrice.innerHTML
sum(z)  

}
for (let i = 0; i < btn_plus.length; i++) {
  btn_plus[i].addEventListener('click' , add)
  }

                     //    sup  la quentite et le price de product 

var btn_minus = document.querySelectorAll('.minus') 
 console.log(btn_minus)

function sup(e) {
  var cible = e.target
  console.log(cible)
  var div = cible.parentElement
  console.log(div)
  var x = div.querySelector('p')
  console.log(x)
  var value = Number(x.innerHTML)
  console.log(value)
  if (value > 0){
    value--
  }
  x.innerHTML=value
  
  var y = (div.parentElement).parentElement
  console.log(y)
  var unitPrice = y.querySelector('.unitPrice')
  console.log(unitPrice)
  var price = y.querySelector('.price')
  console.log(price)
  price.innerHTML = x.innerHTML *unitPrice.innerHTML
  sum(z)
}
for (let i = 0; i < btn_minus.length; i++) {
btn_minus[i].addEventListener('click' , sup)
  }              

              // change color

var like = document.querySelectorAll('.like')
console.log(like)
function color(e){
  var c = e.target
  console.log(c)
  if (c.style.color !== "red"){
    c.style.color = "red"
  }else{
    c.style.color = "black"
  }

  }
for (let i = 0; i < like.length; i++) {
  like[i].addEventListener('click' ,color)
  
}

         //suprimer

 var btn_del = document.querySelectorAll('.delete')
  console.log(btn_del)
function suprimer(e) {
 var b = e.target
 console.log(b)
 var f = (((b.parentElement).parentElement).parentElement).parentElement
 console.log(f)
 var g = f.querySelector('.price')
 console.log(g)
 g.innerHTML = 0
 sum(z)
  f.remove()
 document.innerHTML = f.remove()

} 

  for (let i = 0; i < btn_del.length; i++) {
    btn_del[i].addEventListener('click' , suprimer)
    }