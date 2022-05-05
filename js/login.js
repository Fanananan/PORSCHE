// 封装类
class login {
  // 地址
  loginURL = "http://localhost:3000/user";
  testURL = "http://localhost:3000/test";
  constructor() {
    this.getData();
  }

  async getData() {
    let { data } = await axios.get(this.loginURL);

    // 点击提交获取表单的值
    login.getNode("#go").addEventListener("click", () => {
      // 获取表单的用户名和密码
      let username = login.getNode("#user").value;
      let password = login.getNode("#psw").value;

      // 判断是否为空
      if (!username || !password) {
        throw new Error("参数不能为空");
      }
  
      for(let i=0; i<data.length;i++) {
          if (username == data[i].username && password == data[i].password) {
          login.getNode("#error").style.opacity = 0;
          login.getNode(".modal").style.display = "block";
        //   axios.delete(this.testURL + "/" + id);
          setTimeout(() => {
            location.href="index.html";
            axios.post(this.testURL, {
                    name: 111,
                  });
          }, 3000);
          break;
        } else {
          login.getNode("#error").style.opacity = 1;
        }
      };
    });
  }

  //   获取节点的方法
  static getNode(id, all = false) {
    return all ? document.querySelectorAll(id) : document.querySelector(id);
  }
}

new login();
