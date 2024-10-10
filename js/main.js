const bar =document.getElementById('bar')
const nav =document.getElementById('navbar')
const close =document.getElementById('close')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active') 
      })

}
if(close){
    
close.addEventListener('click',()=>{
    nav.classList.remove('active') 

})}
// main slider product details
const mainImg=document.getElementById('MainImg')
const smallImgs=document.querySelectorAll('.small-img')
smallImgs.forEach((img)=>{
    img.addEventListener('click',()=>{
       mainImg.src=img.src 
    })
})
let productDetails=document.querySelectorAll('.pro')
productDetails.forEach(product => {
    product.addEventListener('click',()=>{
        window.location.href='sproduct.html'
    })
});