// 封装类
class register {
  // 地址
  regURL = "http://localhost:3000/user";
  constructor() {
    this.postData();
  }

  async postData() {
    let { data } = await axios.get(this.regURL);

    register.getNode("#btn").addEventListener("click", () => {
      // 用户名正则表达式
      let namezz = /^[a-zA-Z0-9_-]{4,6}$/;
      // 密码正则表达式
      let pswzz = /^[a-zA-Z0-9_-]{5,10}$/;

      // input获取数据
      let uName = register.getNode("#uName").value;
      let pwd = register.getNode("#pwd").value;

      if (!namezz.test(uName)) {
        register.getNode("#nameerror").style.opacity = 1;
      }
      if (!pswzz.test(pwd)) {
        register.getNode("#pswerror").style.opacity = 1;
      }
      if (namezz.test(uName) && pswzz.test(pwd)) {
        register.getNode("#nameerror").style.opacity = 0;
        register.getNode("#pswerror").style.opacity = 0;
        register.getNode(".modal").style.display = "block";

        setTimeout(() => {
          location.href = "login.html";
          axios.post(this.regURL, {
            username: uName,
            password: pwd,
          });
        }, 3000);
      }
    });
  }

  //   获取节点的方法
  static getNode(id, all = false) {
    return all ? document.querySelectorAll(id) : document.querySelector(id);
  }
}

new register();
