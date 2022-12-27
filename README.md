# Coffee Shop Pos System
Coffee Shop Pos System practice

## 主要介紹
使用JavaScrip與外部API，建立起咖啡店的點餐系統，可以將餐點加入購物車，即時算出品項與價格。

## DEMO link
[https://tomy5566.github.io/coffeepos/](https://tomy5566.github.io/coffeepos/)

## 使用技術(待修正)
- HTML
- CSS: [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- JavaScript
- [Bootstrap](https://getbootstrap.com/)
- [AJAX Axios](https://github.com/axios/axios)


## JavaScript 使用技術介紹(待修正)

1. 使用MVC架構(Model(資料)、View(畫面)、Controller(控制) 三個區塊)。程式出問題時，就只需要去對應的區塊查看。
2. 定義程式狀態，判斷現在的流程(狀態)在哪裡，並將所有狀態命名在一組變數中，決定程式目前要執行什麼動作。
2. 使用[Bootstrap](https://getbootstrap.com/)建立版型，包含導覽列，資訊卡片，跳出資訊視窗，RWD設計與漢堡選單。
3. 建立動態電影陣列，並利用 [Element.innerHTML](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/innerHTML) 渲染卡片清單。
4. 利用 [includes](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)方法比對字串，與陣列的 [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 方法篩選條件，應用於搜尋功能中。
5. 利用 [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)保存篩選後的資料，將資料使用在其他同網域下的分頁。
6. 建立分頁選單[paginator](https://getbootstrap.com/docs/4.0/components/pagination/)，可自動態動產生分頁，利於瀏覽。
 

## 功能介紹(待修正)
- 將餐點資料藉由API引入，配合Bootstrap模板渲染到畫面上。
- 點選加入購物車，可將餐點加入下方購物車欄位中，並自動計算品項價錢。
- 送出餐點後會自動計算總價，並設置重製的按鈕。

## 介面展示
DEMO
![image](https://github.com/tomy5566/coffeepos/blob/main/coffeepos_demo.gif)


## 參考資料
ALPHA Camp 網路課程資源
