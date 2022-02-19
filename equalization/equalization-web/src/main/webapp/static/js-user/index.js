window.onload = function () {
  var lis = document.getElementsByTagName("li");
  for (let i = 0; i < lis.length - 1; i++) {
    lis[i].onclick = function () {
      for (var i = 0; i < lis.length - 1; i++) {
        lis[i].classList.remove('current');
      }
      this.classList.add('current');
    }
  }
}