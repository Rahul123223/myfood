let cartItem=JSON.parse(localStorage.getItem("Cart"));
console.log(cartItem)
getMeal(cartItem)


function getMeal(arr) {
    arr.forEach(function (element) {
      let div = document.createElement("div");
  
      let item_num = document.createElement("p");
      item_num.innerHTML = element.idCategory;
  
      let price = (element.price = Math.floor(Math.random(100) * 500));
  
      let id = document.createElement("p");
      id.innerHTML = element.strCategory;
  
      let img = document.createElement("img");
      img.src = element.strCategoryThumb;
     
      div.append(item_num, id, price, img);
      document.querySelector("body").append(div)
    });
   
  }