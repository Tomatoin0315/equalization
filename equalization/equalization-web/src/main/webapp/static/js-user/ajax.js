// $(function () {
//   $(".navItem").on("click", ".aa", function () {
//     var sId = $(this).data("id"); //获取data-id的值
//     window.location.hash = sId; //设置锚点
//     loadInner(sId);
//   })
//   function loadInner(sId) {
//     var sId = window.location.hash;
//     var pathn, i;
//     switch (sId) {
//       case "#indexContent-user": pathn = "indexContent-user.html"; i = 0; break;
//       case "#policy-user": pathn = "policy-user.html"; i = 1; break;
//       case "#economy-user": pathn = "economy-user.html"; i = 2; break;
//       // case "#personal": pathn = "personal-user.html"; i = 3; break;
//       default: pathn = "indexContent-user.html"; i = 0; break;
//     }
//     $("#content").load(pathn); //加载相对应的内容
//   }
//   var sId = window.location.hash;
//   loadInner(sId);
// })
$(function () {
  $(".navItem").on("click", ".aa", function () {
    // var sId = $(this).data("id"); //获取data-id的值
    var url = $(this).data("url"); //获取data-id的值
    // window.location.hash = sId; //设置锚点
    // loadInner(sId);
    console.log("成功");
    $("#content").load(url);
  });
});