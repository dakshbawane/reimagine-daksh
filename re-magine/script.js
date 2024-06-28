gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

Shery.imageEffect("#back",{style: 3,config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.44,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9626865683781616},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0.010204081632652962,"y":0}},"shapeScale":{"value":{"x":1,"y":1}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":2},"noise_speed":{"value":1.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.38,"range":[0,2]},"noise_scale":{"value":47.33,"range":[0,100]}},gooey:true});


// var swiper = new Swiper(".mySwiper", {
//   loop:true,
//   autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },  
// });    



//cursor animation


var crsr = document.querySelector("#crsr")

  document.addEventListener("mousemove", function (dets) {
      gsap.to(crsr, {
          x: dets.x,
          y: dets.y,
          transform:"translate(-50%,-50%)"
      })
  })

  
  var page1=document.querySelector("#page1")
  var page2collage=document.querySelector("#page2")

  
  var page2=document.querySelector("#page4")
  var page3=document.querySelector("#page8")
  var page4=document.querySelector("#page5")
  var page5=document.querySelector("#page7")
  var page6=document.querySelector("#lastpage")


  page1.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })
  page2collage.addEventListener("mouseenter",function(){
    crsr.innerHTML="SCROLL"
  })
  page2.addEventListener("mouseenter",function(){
    crsr.innerHTML="CLICK"
  })
  page3.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })
  page4.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })
  page5.addEventListener("mouseenter",function(){
    crsr.innerHTML="SCROLL & FOLLOW"
  })
  page6.addEventListener("mouseenter",function(){
    crsr.innerHTML="NATURALS"
  })

  //yaha tk cursor animation tha



//navpagemain animation--------------------------------------
var menu =document.querySelector("#navpagemain-part2 i")
var close=document.querySelector("#full i")
var tml=gsap.timeline()

    tml.to("#full",{
        right:"0%",
        duration:.7,
        opacity:1

    })

    tml.from("#full h3",{
        x:250,
        duration:1,
        opacity:0,
        stagger:0.1

    })
    tml.pause() 

    menu.addEventListener("click",function(){
      menu.style.display="none";
      // menu.style.pointerEvents="none"
        tml.play();
    })
    close.addEventListener("click",function(){
      tml.reverse();
      gsap.to(menu,{
        delay:2,
        display:"initial"
      })
      // menu.style.

    })



//page2COLLAGEPAGE ANIMATION/////////////////////////////////////////////////////////////////////////////////////////////

var page2h1Text=document.querySelector("#page2 #page2left h1").textContent
var splittedText=page2h1Text.split("")
var cluttered=""
splittedText.forEach(function(elem){
    cluttered+= `<span>${elem}</span>`
})
document.querySelector("#page2 #page2left h1").innerHTML=cluttered

gsap.to("#page2 #page2left h1 span",{
    color:"black",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        start:"top 40%",
        end:"top top",
        scrub:2,
        // pin:true
    }
})








// page4 =>
  var swiper2 = new Swiper("#page1 .mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 2500,
      duration:2,
      disableOnInteraction: false,
    },  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },  
  });  


  //page4 text effect animation
  var elems=document.querySelectorAll("#page4 .elem")
elems.forEach(function(elem){
    var index1=0;
    var index2=0;
    var index3=0;


    var animating=false;
    var h1s=elem.querySelectorAll("#page4 h1")
    var p1s=elem.querySelectorAll("#page4 p")
    var buttons=elem.querySelectorAll("#page4 button")



    document.querySelector("#page4").addEventListener("click",function(){
            if(!animating){
                animating=true

            gsap.to(h1s[index1],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    gsap.set(this._targets[0],{top:"100%"});
                    animating=false;
                }
            }
        )
        gsap.to(p1s[index2],{
            top:"-=100%",
            ease:Expo.easeInOut,
            duration:1,
            onComplete:function(){
                gsap.set(this._targets[0],{top:"100%"});
                animating=false;
            }
        }
        )

        gsap.to(buttons[index3],{
          top:"-=100%",
          // rotate:"0deg",
          ease:Expo.easeInOut,
          duration:1,
          onComplete:function(){
              gsap.set(this._targets[0],{top:"100%"});
              animating=false;
          }
      }
      )
           index1===h1s.length-1?(index1=0): index1++;
           index2===p1s.length-1?(index2=0): index2++;
           index3===buttons.length-1?(index3=0): index3++;


            gsap.to(h1s[index1],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1
            })
            gsap.to(p1s[index2],{
                top:"-=100%",
                ease:Expo.easeInOut,
                duration:1
            })
            gsap.to(buttons[index3],{
              top:"-=100%",
              // rotate:"0deg",
              ease:Expo.easeInOut,
              duration:1
          })
        }
        })


})




  
//page5 review page swiper
var tl = gsap.timeline({
  scrollTrigger:{
   scroller:'#main',
   trigger:'#page7',
   start:'top top',
   pin:true,
   scrub:3
  }
})
tl
.to('.containerlast',{
   left:'-100%'
})

var tl2 = gsap.timeline({
   scrollTrigger:{
    scroller:'#main',
    trigger:'.containerlast',
    start:'top 50%',
    scrub:3
   }
})
tl2
.to('#page7 .box img',{
    left:'10px',
    transform:'translate(-10px) scale(1.012)'
})

var swiper3 = new Swiper("#page5 .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




    
var swiper8 = new Swiper("#page8 .mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const arrr=[
  {productImage:"https://media.istockphoto.com/id/470731269/photo/scoops-of-mango-sorbet.webp?b=1&s=170667a&w=0&k=20&c=bgm0vYICaCE0lGxKh19LVCwEeTVYvy0NJmcEoHPzeNY=",
  productName:"MANGO ICECREAM",
  productDes:"Ditch the ordinary, scoop up extraordinary! Our mango ice cream is a taste explosion of Alphonso mangoes, a luxurious treat that's perfect for mango lovers who crave the real deal",
  seasonImage:"./summer4.jpg"
},
{
productImage:"data:image/jpeg;base64,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",
productName:"PINEAPPLE ICECREAM",
productDes:" Pucker up for perfection! Our pineapple ice cream is the perfect balance of sweet and tart, a refreshing treat that will transport you to a beachside bliss.",
seasonImage:"./winter5.jpg ",
season:"Winter"
} ,

{
  productImage:"https://media.istockphoto.com/id/520982830/photo/ice-cream-in-a-coconut.webp?b=1&s=170667a&w=0&k=20&c=zDe-yRwaanR4e2AAxWH-SxCKVuNCYklGvuIgMOq4nKs=",
  productName:"COCONUT ICECREAM",
  productDes:"Naturals is a pioneer of the ‘Tender Coconut’ flavour in the country. As an original flavour from Naturals, it is a huge favourite among ice cream lovers. It’s made with real malai from tender coconuts that are sourced from Kerala and Karnataka. You just can’t have enough of this delicious flavour!",
  seasonImage:"./summer4.jpg",
  season:"Summer"
},

{
  productImage:"https://media.istockphoto.com/id/1345295716/photo/a-scoop-of-grape-flavored-purple-ice-cream-served-in-a-white-bowl-close-up-of-gastronomic.webp?b=1&s=170667a&w=0&k=20&c=43PuOivpr6pTSjliBobYnDF7Ty-2jRe7oZBqx8Aqj-w=",
  productName:"BLACK GRAPES ICECREAM",
  productDes:" Expect a taste of heaven in every bite of our original Black Grapes ice cream. Its amazing taste will leave you craving for more!",
  seasonImage:"https://img.freepik.com/premium-photo/little-girl-sitting-rock-rain-she-is-wearing-yellow-raincoat-red-boots-holding-red-umbrella_14117-419180.jpg?w=1380 ",
  season:"Monsoon"
},
{
  productImage:"https://flockler.com/thumbs/sites/192/no-churn-pomegranate-ice-cream_s1500x0_q80_noupscale.jpg",
  productName:"POMEGRANATE ICECREAM",
  productDes:" Beyond the ordinary lies extraordinary flavor. Our pomegranate ice cream is a symphony of sweet and tart, with a beautiful pink hue that's as delightful to see as it is to savor",
  seasonImage:"./autum2.jpg ",
  season:"AUTUMN"
},
  {
    productImage:"https://i.pinimg.com/236x/c5/45/21/c54521d2f97f5d3283818ea4225cd720.jpg",
    productName:"KIWI ICECREAM",
    productDes:" This delicious flavour will transport you to another world. The Kiwi is imported from New Zealand which is known for its genuine taste that come together in our original ice cream, you’re bound to get lost in the taste!.",
    seasonImage:"./winter5.png ",
    season:"Winter"
  }  
  
]
var main2=document.querySelector("#page8 .swiper-wrapper")

var clutter=""



arrr.forEach(function(product){
  clutter+=`
  
                  <div class="swiper-slide"><img src="${product.productImage}" alt=""></div>
                  
                `
                
})
main2.innerHTML=clutter

const productContainer = document.getElementById("productname");
const descriptionContainer = document.getElementById("description");

swiper8.on('slideChange', function () {
const currentSlideIndex = this.activeIndex;
// Calculate index within the array boundaries
const effectiveIndex = currentSlideIndex % arrr.length; // modulo operator (%)
const product = arrr[effectiveIndex];

productContainer.textContent = product.productName;
descriptionContainer.textContent = product.productDes;

// Optional: Update background image based on season
if (product.seasonImage) {
  document.getElementById("page8").style.backgroundImage = `url(${product.seasonImage})`;
}
});



const swiperWrapper = document.querySelector("#page8 .swiper-wrapper");

// Assuming "arrr" contains your JSON data
arrr.forEach(function(product) {
const slide = document.createElement("div"); // Create a slide element
slide.classList.add("#page8 swiper-slide"); // Add the "swiper-slide" class

// Create and configure slide content based on your product object (product.productName, product.productImage, etc.)
const slideContent = `

  <img src="${product.productImage}" alt="${product.productName}">


  <h1>${product.productName}</h1>
  
  <p>${product.productDes}</p>
`; // Example slide content (replace with your own)

slide.innerHTML = slideContent;
swiperWrapper.appendChild(slide); // Add the slide to the carousel
});
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// prevButton.addEventListener("click", function() {
// swiper.slidePrev();
// });

// nextButton.addEventListener("click", function() {
// swiper.slideNext();
// });

nextButton.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0; // Loop back to the first image
  }
  backgroundElement.style.backgroundImage = `url(${images[currentImageIndex].seasonImage})`;
});

prevButton.addEventListener("click", () => {
  currentImageIndex--;
  // Handle looping from the first image to the last one
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  backgroundElement.style.backgroundImage = `url(${images[currentImageIndex].seasonImage})`;
});



///triallllllllllllllllllllllllllllllllllllll


// let currentImageIndex = 0; // Keeps track of the current image

// const backgroundElement = document.getElementById("background-container"); // Assuming you have an element with this id

// const nextButton = document.getElementById("next-button");
// const prevButton = document.getElementById("prev-button");

// nextButton.addEventListener("click", () => {
//   currentImageIndex++;
//   if (currentImageIndex >= images.length) {
//     currentImageIndex = 0; // Loop back to the first image
//   }
//   backgroundElement.style.backgroundImage = `url(${images[currentImageIndex].seasonImage})`;
// });

// prevButton.addEventListener("click", () => {
//   currentImageIndex--;
//   if (currentImageIndex < 0) {
//     currentImageIndex = images.length - 1; // Loop back to the last image
//   }
//   backgroundElement.style.backgroundImage = `url(${images[currentImageIndex].seasonImage})`;
// });





//cursor animation

var crsr = document.querySelector("#cursor")

  document.addEventListener("mousemove", function (dets) {
      gsap.to(crsr, {
          x: dets.x,
          y: dets.y
      })
  })

  

  // copy dx 
  

// gsap.registerPlugin(ScrollTrigger);

{
  const ingredients = document.querySelector('.ingredients');
  if ((typeof(ingredients) != 'undefined' && ingredients != null)) {
    let sections = gsap.utils.toArray('.ingredients__item');
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ingredients,
        markers: false,
        scrub: 1,
        pin: true,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".ingredients").offsetWidth
      },
    });
  }
}

// var im = document.querySelectorAll(".ingredients__item img")

// im.addEventListener("click",function(){

//     gsap.from("#page2  #text",{
//         duration:2,
//         opacity:0,
//         x:-500
//     })
// })



var h1Text=document.querySelector("#ingredientpageh1").textContent
var splitted=h1Text.split("")

var clutter=""
splitted.forEach(function(elem){
    clutter+= `<span>${elem}</span>`
})
// document.querySelector("h1").innerHTML=clutter
// gsap.from("h1 span",{
//     opacity:0,
//     duration:1,
//     stagger:0.4,
//     y:40,
//     color:"white"
// })

// var p1Text=document.querySelector("p").textContent
// var splitted2=p1Text.split("")

// var clutter=""
// splitted2.forEach(function(elem){
//     clutter+= `<span>${elem}</span>`
// })
// document.querySelector("p").innerHTML=clutter
// gsap.from("p span",{
//     opacity:0,
//     duration:1,
//     stagger:0.02,
//     y:80,
//     x:-500,
//     color:"white"
// })


// gsap.from("#page2  #text",{
//            duration:2,
//            opacity:0,
//            x:-500,
//            y:100,
//            stagger:0.3  
//        })



gsap.registerPlugin(ScrollTrigger);

// Animation for all h1 elements within .ingredients__item
gsap.from(".ingredients__item h1", {
    opacity: 0,
    duration: 2,
    stagger: 0.4,
    y: 40,
    color: "white",
    scrollTrigger: {
        trigger: ".ingredients",
        start: "top 80%", // Adjust as needed for when you want the animation to start
    }
});

// Animation for all p elements within .ingredients__item
gsap.from(".ingredients__item p", {
    opacity: 0,
    duration: 2,
    stagger: 0.02,
    y: 80,
    x: -500,
    color: "white",
    scrollTrigger: {
        trigger: ".ingredients",
        start: "top 80%", // Adjust as needed for when you want the animation to start
    }
});


