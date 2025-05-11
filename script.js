

const lenis = new Lenis({
  autoRaf: true,
});


lenis.on('scroll', (e) => {
  console.log(e);
});
var typed = new Typed('#hero', {
  strings: ['I am a Frontend Developer'],
  typeSpeed: 150,
  showCursor: false,
  cursorChar: '|',
  autoInsertCss: true,
});

var typed = new Typed('#about', {
  strings: ['HI, I am Yahuza Usman  a Web and App Developer knacking on making your complex to simple.'],
  typeSpeed: 150,
  startDelay: 5000,
  showCursor: false,
  cursorChar: '|',
  autoInsertCss: true,
});
const show = () =>{
  document.getElementById('navg').style.display = "flex";
  document.getElementById('ham').style.display = "none";
};

const hide = () =>{
  document.getElementById('navg').style.display = "none";
  document.getElementById('ham').style.display = "block";
};

var move = () =>{
   document.querySelector("#alone").classList.add('active');
};



var move2 = () =>{
  document.querySelector("#alone2").classList.add('active');
}

var move3 = () =>{
  document.querySelector("#alone3").classList.add('active');
};
var see = gsap.timeline();
see.to("header", 
  { opacity: 2, y: -5});

  see.to("nav", 
    { opacity: 5, y: 10});
  

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".skills",
    start:"center 60%",
    end:"bottom center",
    scrub:true,
    toggleClass:"change",
    markers:false
  }

});


tl.from(".skills",{
  opacity:0
});

let tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:".contact",
    start:"center 90%",
    end:"bottom center",
    scrub:true,
    toggleClass:"change2",
    markers:false
  }

});
tl1.from("#change2",{
  opacity:0
});


let tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".services",
    start:"top bottom",
    end:"bottom center",
    scrub:true,
    toggleClass:"#change3",
  }

});
tl2.from("#change3",{
  opacity:0
});



let tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".footer",
    start:"center 80%",
    end:"bottom center",
    scrub:true,
    toggleClass:"#change4",
  }

});
tl3.from("#change4",{
  opacity:0
});


const handleSubmit = () =>{
  var inputContainer = document.getElementById('userInput').value;

  if(inputContainer == ""){
     alert("Write Email first");
  }
  else{
    alert("Subscribed Successfully")
  }
  return false
  
}

const HandleForm = () =>{
  alert("form Submitte Successfully")
   return false
}