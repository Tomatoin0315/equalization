$(function () {
  $(".list").on("click", ".show", function () {
    // var sId = $(this).data("id"); //获取data-id的值
    var url = $(this).data("url"); //获取data-id的值
    // window.location.hash = sId; //设置锚点
    // loadInner(sId);
    $("#content").load(url);
  });
  function loadInner(sId) {
    var sId = window.location.hash;
    var pathn, i;
    switch (sId) {
      case "#personal": pathn = "personal.html"; i = 0; break;
      case "#power": pathn = "power.html"; i = 1; break;
      case "#role": pathn = "role.html"; i = 2; break;
      case "#checkUser": pathn = "checkUser.html"; i = 3; break;
      case "#add": pathn = "add.html"; i = 4; break;
      case "#policy": pathn = "policy.html"; i = 5; break;
      case "#upload": pathn = "upload.html"; i = 6; break;
      case "#economics": pathn = "economics.html"; i = 7; break;
      default: pathn = "power.html"; i = 1; break;
    }
    $("#content").load(pathn); //加载相对应的内容
  }
  // var sId = window.location.hash;
  $("#content").load("/user/personal");
});