
var tl = gsap.timeline({
    scrollTrigger:{
     scroller:'body',
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
      scroller:'body',
      trigger:'.containerlast',
      start:'top 50%',
      scrub:3
     }
  })
  tl2
  .to('.box img',{
      left:'150px'
  })