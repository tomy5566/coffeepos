// 1.變數宣告
const menu = document.getElementById('menu')
const cart = document.getElementById('cart')
const totalAmount = document.getElementById('total-amount')
const submitbutton = document.getElementById('submit-button')
const resetbutton = document.getElementById('reset-button')

let total = 0
let productData = []
let cartItems = []


//API抓進來的資料樣貌
// [
//   {
//     id: 'product-1',
//     name: '馬卡龍',
//     price: 60,
//     quantity: 1
//   },
//   {
//     id: 'product-2',
//     name: '草莓',
//     price: 100,
//     quantity: 2
//   }, 
// ]

// 2. AJAX 去抓取 API 菜單產品資料
axios.get('https://ac-w3-dom-pos.firebaseio.com/products.json')
  .then(function(response) {
    console.log(response);
    console.log(response.data);
    AllProductData = response.data
    displayProducts(AllProductData)
  })
  .catch(function(error) {
    console.log("有錯誤"+ error)
  })

// 3.撰寫渲染菜單卡片的函式
function displayProducts(products) {
  products.forEach(product => {
    menu.innerHTML += `
      <div class="col-3">
        <div class="card" >
          <img src=${product.imgUrl} class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">NT$${product.price}</p>
            <a id=${product.id} href="javascript:;" class="btn btn-success">加入購物車</a>
          </div>
        </div>
      </div>
    `
  })
}

// 4.加入購物車
menu.addEventListener('click', addToCart);
function addToCart(e) {
  // 找到觸發event的node元素，並得到其產品id
  console.log(e);
  const id = e.target.id
  // 在productData的資料裡，找到點擊的產品資訊 name, price
  const addedProduct = AllProductData.find(product => product.id === id)
  // console.log(addedProduct);
  const name = addedProduct.name
  const price = addedProduct.price
  
  // (重要)加入購物車變數cartItems 分：有按過、沒按過
  const targetCartItem = cartItems.find(item => item.id === id);
  // 有按過 換數量的值
  if (targetCartItem) {
      targetCartItem.quantity += 1
  } else {
    // 沒按過 加入新資料
    cartItems.push({
      id, // id: id
      name, // name: name
      price, // price: price
      quantity: 1
    })
  }

  console.log(cartItems);
  //<法一>，使用MAP
  // 畫面顯示購物車清單(重要，利用MAP會回傳值一個新陣列，但FOR_EACH不會，再利用join('')去除逗號與合併成一個字串)
  // cart.innerHTML = cartItems.map(item => `
  //   <li class="list-group-item">${item.name} X ${item.quantity} 小計：NT$${item.price * item.quantity}</li>
  // `).join('')


  //<法二> 使用forEach，但一開始要先清空，不然會出現一整包
  cart.innerHTML = '';
  cartItems.forEach((item) => {
    cart.innerHTML +=`
    <li class="list-group-item">${item.name} X ${item.quantity} 小計：NT$${item.price * item.quantity}</li>
    ` ;
  });
  
  // 計算總金額
  calculateTotal(price)
}

// 計算總金額
function calculateTotal(amount) {
  total += amount
  totalAmount.textContent = total
}

// 5.送出訂單
submitbutton.addEventListener('click',submit);
function submit() {
  alert(`已送出訂單_金額總共${total}元，謝謝惠顧`);
}

// 6.重置購物車
resetbutton.addEventListener('click',reset);
function reset() {
  total=0;
  cartItems = [];
  cart.innerHTML = `尚未選購商品`;
  calculateTotal(0);
  alert(`已清空，請重新輸入`);
}


