var button =document.querySelector('.header .header__menu .header__menu-button');
var menulist = document.querySelector('.header .header__menu .header__menu-list ');
button.addEventListener('click',function()
{
    menulist.classList.toggle('show');
})
//**================== 3, Sticky Menu ==================== **//
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".header").classList.add("record");
  } else {
    document.querySelector(".header").classList.remove("record");
  }
}
/**=========== Scroll menu */
function functionScroll() {
  var section = document.querySelectorAll(".section");
  (sections = {}), (i = 0);

  Array.prototype.forEach.call(section, function (e) {
    sections[e.id] = e.offsetTop;
  });

  for (let i in sections) {
    if (sections[i] <= window.pageYOffset + 72) {
      document.querySelector(".appear").classList.remove("appear");
      document.querySelector("a[href*=" + i + "]").classList.add("appear");
    
    }
  }
}
//**================== 4, Back to top ==================== **//
// Show or hide the sticky footer button
$(window).on("scroll", function (event) {
  if ($(this).scrollTop() > 200) {
    $(".back-to-top").fadeIn(200);
  } else {
    $(".back-to-top").fadeOut(200);
  }
});
//Animate the scroll to top
$(".back-to-top").on("click", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    600
  );
});
window.addEventListener("scroll", functionScroll);
window.addEventListener("resize", functionScroll);
// ========================5,MoDal =============================
var myBtn = Array.from(document.querySelectorAll('#myBtn'));
myBtn.forEach(function(btn){
  btn.onclick=function(){
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
  }
});
var closeBtns = Array.from(document.querySelectorAll("#close"));
closeBtns.forEach(function(btn){
  btn.onclick = function() {
    var modal = btn.closest('.modal-window');
    modal.style.display = "none"; 
  }
});


window.onclick = function(event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
}