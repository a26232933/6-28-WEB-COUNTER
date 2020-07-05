// 當頁面 準備完成時
$(document).ready(function () {
  // 2 當視窗 捲動時
  $(window).scroll(function () {
    // var 變數 = 資料
    var offset = $("#test").offset(); /* 取得位移元素資料 */
    var top = offset.top; /* 上方 */
    var left = offset.left; /* 左方 */

    console.log("元素的上方:" + top);

    var windowTop = $(window).scrollTop();

    console.log("視窗的上方:" + windowTop);


    var number=$("#test").attr("data-counter-number");
    var time=$("#test").attr("data-counter-time");
    var offset=$("#test").attr("data-counter-offset");

    // console.log("數字"+number);
    // console.log("時間"+time);
    // console.log("位移"+offset);

    // 判斷式
    // 如果 發生什麼 就....
    // if (條件) {程式}
    if (windowTop > top - offset) {
      // console.log("開始執行動畫...");
      $("#test").animate({
        num: number                           /* 數字 */
      }, {
        duration: parseInt(time),             /* 時間  duration 需要數字 parseInt() 將字串變為整數*/  
        step: (now) => {                       /* 步驟 */
          $("#test").text(Math.floor(now));    /* 文字(步驟)去小數點 Math.floor() */
        }
      })
    }

  });
});

