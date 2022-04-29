    // 1 获取节点
    const ulLisObj = document.querySelectorAll('.lb li');
    const olLisObj = document.querySelectorAll('.bs li');
    const prev = document.querySelector('#goPrev');
    const next = document.querySelector('#goNext');

    // 2 设置变量
    let index = 0; // 要出来的图片索引
    let lastIndex = 0; // 要进去的图片缩影
    let times;  // 定时器返回值


    // 3点击ol 中的li,实现图片切换
    olLisObj.forEach((li, key) => {
      // console.log(li);
      // 3-1 给li绑定点击事件
      li.onclick = function () {
        // console.log(this);
        // 将当前index值给lastIndex
        // 将当前li对象的key赋值给index
        lastIndex = index;
        index = key;
        change();
      }

    });

    // 4 点击左边按钮,上一张上一张  index值为--
    prev.onclick = function () {
      // 4-1 将index的值给lastIndex
      lastIndex = index;
      index--;
      // console.log(index);
      // 当index值为0,则赋值最大索引
      if (index < 0) {
        index = olLisObj.length - 1;
      }
      change();
    }
    // 5 右边按钮,下一张,下一章  index++
    // obj.say =function(){}
    next.onclick = function () {
      lastIndex = index;
      index++;
      if (index > olLisObj.length - 1) {
        index = 0;
      }
      change();
    }

    //  6 轮播的实现
    function autoPaly() {
      times = setInterval(() => {
        next.onclick();
      }, 3000)

    }
    autoPaly();
    // 给banner 设置移入和移除事件
    next.parentNode.onmouseover = function () {
      clearInterval(times)
    }

    next.parentNode.onmouseout = function () {
      autoPaly();
    }

    // 实现图片切换,设置和取消op类
    function change() {
      // console.log(lastIndex, index);
      // 取消ol和ul中li有op类的
      olLisObj[lastIndex].className = '';
      ulLisObj[lastIndex].className = '';

      // 设置当前选中的图片和序列号
      olLisObj[index].className = 'bh';
      ulLisObj[index].className = 'bh';
    }
