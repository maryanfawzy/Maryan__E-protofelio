//  template_kqbkzal
// service_q19ok5f
// 4nCE9DGyE5x8gH489
let contrastToggel=false
function moveBackGround(event){
   const shapes = document.querySelectorAll(".shape")
   const x = event.clientx;
   const y = event.clienty;
   for (let i = 0; i <shapes.length; ++i){
      shapes[i].style.transform=`translate(${x}px, ${y}px)`
   }
}
function toggleContrast(){
   contrastToggel=!contrastToggel;
   if(contrastToggel){
      document.body.classList += "dark-theme"}
   else{
      document.body.classList.remove("dark-theme")
   }

}

  function contact(event){
   event.preventDefault();
   const loading= document.querySelector(".model__overlay--loading")
const sucsess = document.querySelector(".model__overlay--sucsess")
loading.classList += " model__overlay--visable"
 
    emailjs
   .sendForm(
      "service_q19ok5f",
      "template_kqbkzal",
      event.target,
      "4nCE9DGyE5x8gH489"

   ).then(()=>{
      loading.classList.remove("model__overlay--visable")
      sucsess.classList += "model__overlay--visable";
   }).catch(()=> loading.classList.remove("model__overlay--visable"));
   alert(
      "The email servises is temporarily unavalibale. Please email me directlly on maryanfawzy7@gmail.com"
   );
     
  }
  let isModelOpen = false
  function toggleModal (){
  
   if (isModelOpen){
      isModelOpen=false
      return document.body.classList.remove("model__open")
   }
   isModelOpen= true
   document.body.classList+= " model__open"
  }



  

   












