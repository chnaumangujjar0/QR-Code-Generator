let input=document.querySelector("input")
let img=document.querySelector(".qr-code")
let generateQr=document.querySelector(".inner-div button")

generateQr.addEventListener("click", ()=>{
    
   let value=input.value
   if(value==""){
     alert("Add Text for QR code generation")
     return;
   }
    img.style.display="block";
   img.src=`https://quickchart.io/qr?text=${value}`
   
})