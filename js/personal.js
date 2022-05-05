// 封装类
class personal {
  // 地址
  testURL = "http://localhost:3000/test";
  constructor() {
    this.delData();
  }

  async delData() {
    let { data } = await axios.get(this.testURL);
    personal.getNode("#zx").addEventListener("click", () => {
      for (let i = 1; i <= data.length; i++) {
        axios.delete(this.testURL + "/" + i);
      }
      location.href = "index.html";
    });
  }

  //   获取节点的方法
  static getNode(id, all = false) {
    return all ? document.querySelectorAll(id) : document.querySelector(id);
  }
}

new personal();
