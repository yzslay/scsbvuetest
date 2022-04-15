<template>
  <div>
      什麼有更多人想喝飲料  
  <button value="+" class="btn btn-primary">++</button>
      什麼奶茶的力量在消退了
  <button value="+" class="btn btn-danger">--</button>
      開始計算奶茶的戰鬥力吧
  <button value="" class="btn btn-info">計算</button>
   </div>
  <div class="container"> 
  
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">姓名</th>
      <th scope="col">飲料</th>
      <th scope="col">價錢</th>
      <th scope="col">數量</th>
      <th scope="col">總價</th>
      <th scope="col">應付金額</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="drink in drinkList" :key="drink.index">
      <th scope="row">{{drink.index}}</th>
      <td>{{drink.name}}</td>
      <td>{{drink.drinks}}</td>
      <td>{{drink.price}}</td>
      <td>{{drink.quanity}}</td>
      <td>{{drink.price*drink.quanity}}</td>
      <td></td>
                            
    </tr>
    <!-- <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
        <td>@fat</td>
          <td>@fat</td>
            <td>@fat</td>
    </tr> -->
  </tbody>
</table>
<form>
    <div class="row g-4 align-items-center">
        <div class="col-auto">
        <label class="form-label">運費:</label>
        </div>
        <div class="col-auto">
        <input class="form-control" >
        </div>
        <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">請輸入運費金額</span>
        </div>
        <div class="col-auto">
        <label class="form-label">折扣:</label>
        </div>
        <div class="col-auto">
        <input class="form-control" >
        </div>
        <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">請輸入折扣金額</span>
        </div>
    </div>
    <br>
    <div>
        <div class="row justify-content-start">
        <div class="col-4">
        總金額
        </div>
        <div class="col-4">
        One of two columns
        </div>
        </div>
    </div>
</form>
</div>
<br />
</template>

<script>
export default {
    data() { 
        return {
        drinkList: [{ 
        index:0,
        name: '小明', 
        drinks: '珍珠奶茶', 
        price: '50', 
        quanity: 1,
        }],
}
},
}

</script>

<style>

</style>