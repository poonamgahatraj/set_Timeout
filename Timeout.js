console.log("hello")

let a=setTimeout(function(){
   console.log("hi,poonam")
},5000)

let b=prompt("is your name poonam?")
if("n"==b){
    clearTimeout(a)
}
