// function myFunction(){
  
//   document.querySelector("#navbar").style.cssText = 'margin-left: -40vh,transition: 2s;'
// }

function openNav() {
  document.getElementById("mySidenav").style.cssText = 'margin-left: 0vh'
  document.getElementById("mySide").style.cssText = 'display: none'

}

function closeNav() {
  document.getElementById("mySidenav").style.cssText = 'margin-left: -40vh'
  document.getElementById("mySide").style.cssText = 'display: absolute'
}

var f = document.getElementById('foo');
document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-25)+'px)';
    f.style.transform += 'translateX('+(ev.clientX-25)+'px)';
},false);