async function showMenu() {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    let response = await res.json();
    let result = response.categories;
    console.log(result);
    getMeal(result);
  } catch (err) {
    console.log("error:", err);
  }
}
let cart=JSON.parse(localStorage.getItem("Cart"))||[]
// let cart=JSON.parse(localStorage.getItem("Cart"))||[]
let main_div = document.getElementById("menu");

// getMeal(cartItem)
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

    let atc = document.createElement("button");
    atc.textContent = "Add to cart";
    atc.addEventListener("click", function () {
      addToCart(element);
    });
    div.append(item_num, id, price, img, atc);
    main_div.append(div);
  });
  function addToCart(element) {
    console.log(element);
    cart.push(element)
    localStorage.setItem("Cart", JSON.stringify(cart));
  }
}
document.getElementById("cart").addEventListener("click",function(){
    window.location.href="cart.html"
})
