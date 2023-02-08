var swiper = new Swiper(".mySwiper", {
  loop:true,
  spaceBetween: 20,
  autoplay:{
      delay:4000,
      disableOnInteraction:false,
  },
  centeredSlides:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
  // Default parameters
slidesPerView: 1,
spaceBetween: 10,
// Responsive breakpoints
breakpoints: {
// when window width is >= 320px
320: {
  slidesPerView: 1,
  spaceBetween: 20
},
// when window width is >= 480px
480: {
  slidesPerView: 1,
  spaceBetween: 30
},
// when window width is >= 640px
640: {
  slidesPerView: 1,
  spaceBetween: 40
}
}
});

// contact
function sendEmail() {
  Email.send({
    SecureToken: "edba4d8f-2b48-4d2f-9721-4f842cd4a751",
    To: 'akramahraf2004@gmail.com',
    From: "akramahraf2004@gmail.com",
    Subject: "This is the subject",
    Body: "name: " + document.querySelector("#name").value
      + "<br/> Email: " + document.querySelector("#email").value
      + "<br/> phone: " + document.querySelector("#phone").value
      + "<br/> massege: " + document.querySelector("#massege").value
  }).then(
    message => alert("لقد تمم ارساله الرساله بنجاح ")
  );
}

function revealFunction (){
  window.sr = ScrollReveal({duration:650, distance:'250px',
  easing:'ease-out'});
  sr.reveal('.reveal-reset-top',{origin:'top', reset:true});
  sr.reveal('.reveal-reset-bottom',{origin:'bottom', reset:true});
  sr.reveal('.reveal-rotateww',{origin:'bottom', rotate:{z:-13, z:22},
  reset:true
});

}

window.addEventListener('load',()=>{
  revealFunction();
})
  // // select landing page
  
  // let landingPage = document.querySelector('.home');
  
  // //  get arrey
  // let imgArrey = ["bg-1.jpg"];
  
  // setInterval(()=>{
  //     // get random numper
  //     let randomNumpur = Math.floor(Math.random() * imgArrey.length);
  //     // change background img url
  //     landingPage.style.backgroundImage = 'url("../img-bg/'+imgArrey[randomNumpur] +'")';
  
  // },2000);