<template>
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
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
                              
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
        <td>@fat</td>
          <td>@fat</td>
            <td>@fat</td>
    </tr>
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

}
</script>

<style>

</style>