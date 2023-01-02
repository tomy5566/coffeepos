# 咖啡店點餐系統 Pos System Readme
Coffee Shop Pos System practice

## 主要介紹
使用JavaScrip與外部API，建立起咖啡店的點餐系統，可以將餐點加入購物車，即時算出品項與價格。

## DEMO link
[https://tomy5566.github.io/coffeepos/](https://tomy5566.github.io/coffeepos/)

## 使用技術
- HTML
- CSS: [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)
- JavaScript
- [Bootstrap](https://getbootstrap.com/)
- [AJAX Axios](https://github.com/axios/axios)


## JavaScript 使用技術介紹

1. 使用[AJAX Axios](https://github.com/axios/axios)取得菜單資料。
2. 使用[Bootstrap](https://getbootstrap.com/)建立版型，利用 [Element.innerHTML](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/innerHTML) 與[Template literals ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)渲染卡片清單建立起商品資訊卡片與後續購物車。
3. 利用 [Array.push](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/push)去設計購物車的存入物件。利用[Array.find](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)分辨產品是否有被加入過。利用[Array.forEach](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)去建立購物車漆單和後續計算金額的功能。


## 功能介紹
- 將餐點資料藉由API引入，配合Bootstrap模板渲染到畫面上。
- 點選加入購物車，可將餐點加入下方購物車欄位中，並自動計算品項價錢。
- 送出餐點後會自動計算總價，並設置重製的按鈕。

## 介面展示

![image](https://github.com/tomy5566/coffeepos/blob/main/coffeepos_demo.gif)


## 參考資料
ALPHA Camp 網路課程資源
