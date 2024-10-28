var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

gsap.from(".image",{
  x:1200,
  duration:2,
  delay:1,
  rotate:360
})
gsap.from(".About",{
  x:1200,
  duration:2,
  delay:1,
  backgroundColor:"blue"
})