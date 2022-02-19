window.onload = function () {
  var btn = document.querySelectorAll(".layui-btn-danger");
  var tbody = document.getElementsByTagName("tbody")[0];
  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      tbody.removeChild(this.parentNode.parentNode);
    }
  }
}