// 封装类
class shopCar {
  // 地址
  baseURL = "http://localhost:3000/shopCar";

  constructor() {
    this.getData();
  }

  //   获取数据方法
  async getData() {
    let { data } = await axios.get(this.baseURL);
    
    if(data.length){
      for (let i = 0; i < data.length; i++) {
        let id = data[i].id;
      // 将数据渲染到页面
      let li = "";
      li += `<li data-id = ${id}>
      <div class="left">
        <div class="top">
          <img src="./img/detail/10001.webp" alt="" />
        </div>
        <div class="btm">
          <img src="./img/detail/10002.webp" alt="" />
          <img src="./img/detail/10003.webp" alt="" />
          <img src="./img/detail/10004.webp" alt="" />
        </div>
      </div>
      <div class="right">
        <h2>2021 保时捷 718 Cayman T (982)</h2>
        <img src="./img/删除.png" id="del">
        <ul>
          <li><span>熔岩橙</span> · 黑色真皮内饰组件</li>
          <li>保时捷双离合器变速箱(自动)</li>
          <li>184 kW / 250 PS</li>
          <li>汽油 · 7.21 / 100 km · 174 g/km</li>
          <h3>￥708,000</h3><span>增值税不可抵扣</span>
          <a href="detail.html">显示详情信息</a>
        </ul>
      </div>
    </li>`;

      shopCar.getNode("#shopCarList").innerHTML += li;
      shopCar.getNode("#del").addEventListener(
        "click",this.delData.bind(this));

    }
    }else {
      let dd = '';
      dd+=`<div>
      没有任何收藏~~
      </div>`;
      shopCar.getNode("#shopCarList").innerHTML = dd;
    }
    
  }


  delData() {
    // 获取当前正在删除的li
    let sc = document.querySelector("#del");
    let liObj = sc.parentNode.parentNode;
    // 获取id
    let id1 = liObj.dataset.id;
    console.log(id1);
    // 删除数据
    axios.delete(this.baseURL + "/" + id1).then(data => {
      if (data.status == 200) location.reload();
    });
  }

  //   获取节点的方法
  static getNode(id, all = false) {
    return all ? document.querySelectorAll(id) : document.querySelector(id);
  }
}

new shopCar();
