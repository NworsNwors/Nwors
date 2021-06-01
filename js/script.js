'use strict'

{ // ハンバーガーメニュー //
  document.getElementById('burger-btn').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('header-nav').classList.toggle('active');
  });
  // const burger = document.getElementById('burger-btn');
  // const headernav = document.getElementById('header-nav');
  // burger.addEventListener('click', function() {
  //   burger.classList.toggle('active');
  //   headernav.classList.toggle('active');
  // });
}


{ // アニメーション //
  const targetElement = document.getElementsByClassName("point-item");
  console.log("画面の高さ", window.innerHeight)
  document.addEventListener("scroll", function() {
    for (let i = 0; i < targetElement.length; i++) {
      const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6
      if (window.innerHeight > getElementDistance) {
        targetElement[i].classList.add("show");
      }
    }
  });
}
