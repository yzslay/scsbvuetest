<template>
  <div>
    什麼有更多人想喝飲料
    <button value="+" class="btn btn-primary" v-on:click="showUp">++</button>
    什麼奶茶的力量在消退了
    <button value="+" class="btn btn-danger">--</button>
    開始計算奶茶的戰鬥力吧
    <button value="" class="btn btn-info" v-on:click="calculate">計算</button>
  </div>
  <div class="container" v-if="show">
    <!-- 姓名: <input v-model="message" > -->
    <!-- {{inputList.name}} -->
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">姓名</span>
      <input
        v-model="inputList.name"
        type="text"
        class="form-control"
        placeholder="Name"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
      <span class="input-group-text" id="basic-addon1">飲料</span>
      <input
        v-model="inputList.drinks"
        type="text"
        class="form-control"
        placeholder="Drinks"
        aria-label="Drinks"
        aria-describedby="basic-addon1"
      />
      <span class="input-group-text" id="basic-addon1">價格</span>
      <input
        v-model="inputList.price"
        type="text"
        class="form-control"
        placeholder="Price"
        aria-label="Price"
        aria-describedby="basic-addon1"
      />
      <!-- {{inputList.name}},{{inputList.drink}},{{inputList.quanity}} -->
      <span class="input-group-text" id="basic-addon1">數量</span>
      <input
        v-model="inputList.quanity"
        type="text"
        class="form-control"
        placeholder="Quanity"
        aria-label="Quanity"
        aria-describedby="basic-addon1"
      />
      <button
        class="btn btn-outline-secondary"
        @click="addDrinkList();calculate()"
        type="button"
      >
        發射出去
      </button>
    </div>
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
          <th scope="col">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="drink in drinkList" :key="drink.index">
          <th scope="row">{{ drink.index }}</th>
          <td>{{ drink.name }}</td>
          <td>{{ drink.drinks }}</td>
          <td>{{ drink.price }}</td>
          <td>{{ drink.quanity }}</td>
          <td>{{ drink.price * drink.quanity }}</td>
          
          <td>{{ (((drink.price * drink.quanity)/totalDrinks)*totalAmount).toFixed(1) }}</td>
          <td><i class="bi bi-cart-x" @click="removeItem(drink.index)"></i></td>
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
          <input class="form-control" v-model="shippingFee" />
        </div>
        <div class="col-auto">
          <span id="passwordHelpInline" class="form-text">請輸入運費金額</span>
        </div>
        <div class="col-auto">
          <label class="form-label">折扣:</label>
        </div>
        <div class="col-auto">
          <input class="form-control" v-model="discount" />
        </div>
        <div class="col-auto">
          <span id="passwordHelpInline" class="form-text">請輸入折扣金額</span>
        </div>
      </div>
      <br />
      <div>
        <div class="row justify-content-start">
          <div class="col-4">總金額</div>
          <div class="col-4">{{totalAmount}}</div>
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

      drinkList: [
        {
          index: 0,
          name: "小明",
          drinks: "珍珠奶茶",
          price: "50",
          quanity: 1,
        },
      ],
      inputList: [
        {
          index: 0,
          name: "姓名",
          drinks: "飲料",
          price: 0,
          quanity: 0,
        },
      ],
      message: "moo",
      show: true,
      indexNumber: 1,
      shippingFee:30,
      discount:0,
      totalAmount:0,
      totalDrinks:0,
    };
  },
  methods: {
    showUp: function () {
      this.show = !this.show;
      console.log(this.show);
    },
    addDrinkList: function () {
      this.inputList.index = this.indexNumber;
      this.indexNumber = this.indexNumber +1;
      this.drinkList.push(this.inputList)
      this.inputList =  { index :0, name:'', drinks:'', price:0,quanity:0}
      console.log(this.inputList.index);
      console.log(this.drinkList);
    },
    removeItem: function (index) {
      console.log('moo');
      console.log(index);
      for (let i=0 ; i< this.drinkList.length ; i++ ) {
        console.log(this.drinkList[i].index)
        if (this.drinkList[i].index==index) {this.drinkList.splice(i,1)}        
      }
      for (let i=0 ; i< this.drinkList.length ; i++ ) {
        this.drinkList[i].index=i
      }
      this.indexNumber = this.drinkList.length
    },
    calculate: function(){
      this.totalDrinks =0;
      for (let i=0 ; i< this.drinkList.length ; i++ ) {
        console.log(this.drinkList[i].quanity*this.drinkList[i].price)
        console.log(this.totalDrinks)

        this.totalDrinks =  this.totalDrinks+ (this.drinkList[i].quanity*this.drinkList[i].price)

      }
      console.log(this.totalDrinks)
      this.totalAmount=this.shippingFee-this.discount+this.totalDrinks
    }
  }
};
</script>

<style>
</style>