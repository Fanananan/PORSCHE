// 获取节点
let fenlei = document.getElementsByTagName("label");
let rightObj = document.querySelector(".list");
let anniu = document.querySelector("#btm");
let arr = Array.from(fenlei);

class shop {
  baseUrl = "http://localhost:3000/shopList";
  constructor() {
    this.getData();
  }

  // 获取数据的方法
  async getData() {
    let { data, status } = await axios.get(this.baseUrl);
    if (status != 200) throw new error("请求失败");
    let ul = "";
    data.forEach((ele) => {
      ul += `
              <li>
                <img src="${ele.img}" alt="" />
                <p>${ele.name}</p>
                <p>${ele.price}</p>
              </li>
           `;
      rightObj.innerHTML = ul;
    });

    // 点击按钮切换样式
    arr.forEach((item, index) => {
      item.onclick = function () {
        if (this.className == "nocheck") {
          this.className = "check";

          console.log(index);
          if (index == 0) {
            let car718 = "";
            for (let i = 0; i <= 9; i++) {
              car718 += `
                <li>
                  <img src="${data[i].img}" alt="" />
                  <p>${data[i].name}</p>
                  <p>${data[i].price}</p>
                </li>
             `;
              rightObj.innerHTML = car718;
            }
          }
          if (index == 1) {
            let car911 = "";
            for (let i = 11; i <= 22; i++) {
              car911 += `
                    <li>
                      <img src="${data[i].img}" alt="" />
                      <p>${data[i].name}</p>
                      <p>${data[i].price}</p>
                    </li>
                 `;
              rightObj.innerHTML = car911;
            }
          }
          if (index == 2) {
            let taycan = "";
            for (let i = 23; i <= 26; i++) {
              taycan += `
                        <li>
                          <img src="${data[i].img}" alt="" />
                          <p>${data[i].name}</p>
                          <p>${data[i].price}</p>
                        </li>
                     `;
              rightObj.innerHTML = taycan;
            }
          }
          if (index == 3) {
            let panamera = "";
            for (let i = 27; i <= 47; i++) {
                panamera += `
                            <li>
                              <img src="${data[i].img}" alt="" />
                              <p>${data[i].name}</p>
                              <p>${data[i].price}</p>
                            </li>
                         `;
              rightObj.innerHTML = panamera;
            }
          }
          if (index == 4) {
            let Macan = "";
            for (let i = 48; i <= 51; i++) {
                Macan += `
                            <li>
                              <img src="${data[i].img}" alt="" />
                              <p>${data[i].name}</p>
                              <p>${data[i].price}</p>
                            </li>
                         `;
              rightObj.innerHTML = Macan;
            }
          }
          if (index == 5) {
            let Cayenne = "";
            for (let i = 52; i <= 66; i++) {
                Cayenne += `
                            <li>
                              <img src="${data[i].img}" alt="" />
                              <p>${data[i].name}</p>
                              <p>${data[i].price}</p>
                            </li>
                         `;
              rightObj.innerHTML = Cayenne;
            }
          }
        } else {
          this.className = "nocheck";
          rightObj.innerHTML = ul;
        }
      };
      anniu.onclick = function () {
        for(let i = 0; i<arr.length; i++){
          arr[i].className = "nocheck";
      }}
    });

   
  }
}
new shop();
