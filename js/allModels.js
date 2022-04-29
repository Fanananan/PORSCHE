let imgList = document.querySelector(".imgList");

class allModels {
  baseUrl = "http://localhost:3000/carList";
  constructor() {
    this.getData();
  }

  // 获取数据的方法
  async getData() {
    let { data, status } = await axios.get(this.baseUrl);
    if (status != 200) throw new error("请求失败");
    // 将数据渲染到页面
    let li = "";
    data.forEach((ele) => {
      li += `
        <li>
          <p>${ele.name}</p>
          <p>${ele.price}</p>
          <div class="box">
            <a href="javascript:;">
              车辆配置器
            </a>
            <a href="shop.html">
              所有车型
            </a>
          </div>
        </li>`;
    });
    imgList.innerHTML = li;
  }
}
new allModels();
