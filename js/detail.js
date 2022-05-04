// 获取弹窗
var modal = document.getElementById('myModal');
// 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
var img = document.querySelectorAll('#myImg');
var modalImg = document.getElementById("img01");

img.forEach((ele)=>{
    ele.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
})
 
// 获取 <span> 元素，设置关闭按钮
var span = document.getElementsByClassName("close")[0];
 
// 当点击 (x), 关闭弹窗
span.onclick = function() { 
  modal.style.display = "none";
}




// 封装类
class Detail {
  // 地址
  baseURL = "http://localhost:3000/shopCar";

  constructor() {
    this.bindEve();
  }

  bindEve() {
    // 给添加按钮绑定事件
    Detail.getNode("#sc").addEventListener(
      "click",
      this.addData.bind(this)
    );
  }


  addData() {
    axios
      .post(this.baseURL, {
        name: "2021 保时捷 718 Cayman T (982)"
      })
      .then(({ status }) => {
        if (status == 201) location.reload();
      });
  }

   //   获取节点的方法
   static getNode(id, all = false) {
    return all ? document.querySelectorAll(id) : document.querySelector(id);
  }
}

new Detail();