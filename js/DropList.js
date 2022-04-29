// 获取节点
let img = document.getElementById('carimg');
let name = document.getElementById('carname');
console.log(carimg.src);

// 获取数据
// 封装类
class DropList {
  baseUrl = "http://localhost:3000/List";
  constructor() {
    this.getData();
  }

  // 获取数据的方法
  async getData() {
    let { data, status } = await axios.get(this.baseUrl);
    if (status != 200) throw new error("请求失败");
    // console.log(data[2].img);
    // 将数据渲染到页面
    // 移入显示下拉
    $(".car li")
      .mouseenter(function () {
        // 获取当前下标
        var index = $(this).index();
        if (index < 6) {
          $(".navList").stop().slideDown(300);
		  if(index == 0){
			img.src = data[0].img; 
			name.innerHTML=data[0].name;
		  } 
		  if(index == 1){
			img.src = data[1].img; 
			name.innerHTML=data[1].name;
		  }
		  if(index == 2){
			img.src = data[2].img; 
			name.innerHTML=data[2].name;
		  }
		  if(index == 3){
			img.src = data[3].img; 
			name.innerHTML=data[3].name;
		  }
		  if(index == 4){
			img.src = data[4].img; 
			name.innerHTML=data[4].name;
		  }
		  if(index == 5){
			img.src = data[5].img; 
			name.innerHTML=data[5].name;
		  }
        }
      })
      .mouseleave(function () {
        $(".navList").stop().slideUp(300);
      });

    $(".navList")
      .mouseenter(function () {
        $(".navList").stop().slideDown(0);
      })
      .mouseleave(function () {
        $(".navList").stop().slideUp(300);
      });
  }
}

new DropList();
