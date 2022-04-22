# scsbvue

首先要先安裝Node.js
[安裝位置](https://nodejs.org/en/)

安裝完後安裝Vue cli
npm install -g @vue/cli
更新cli 
npm update -g @vue/cli


## 或直接npm install

接著使用指令
vue create 專案名稱

來建立專案環境  [參考網址](https://book.vue.tw/CH3/3-1-vue-cli-introduction.html)
開始建立後選: Manually select features
勾選套件 Babel, Router, Vuex, CSS Pre-processors, Linter

- Babel
- Router
- Vuex
- CSS Pre-processors (後面選Sass/SCSS)

下載安裝完成後執行
npm run serve

** 根據npm install以package.json的依賴檔安裝

在vue.config.js裡可以設定伺服器設定，更改Port 到3000
```
  devServer: {
      port: 3000
    }
```
npm run serve 開啟伺服器
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
