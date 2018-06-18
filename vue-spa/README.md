# vue-parcel
## 1. what
1. parcelによってmodule管理を丸投げして環境構築するぜ！
2. 今回の例ではローダーとしてbabelを経由しているのでトランスパイルもおまかせ！
### 構造
* public/のhtmlでsrcにあるファイルを集束させてくれ！
* distにまるっと吐き出されるぞ！ファイル名は気にしないでくれ！
### 前提
* nodeが入っていること（npm叩ける？）
* yarn入ってるよね？
## 2. first
* 依存データ（パッケージ）のインストール
> cd vue-parcel

> yarn
## 3. second
* parcelの確認
> parcel 
* エラーについては[公式](https://parceljs.org/getting_started.html)を見てくれよな！
## 4. third
* npm経由でparcel実行の確認
> npm start

## デフォルトで入る子供達
[vue.js](https://jp.vuejs.org/index.html)

[vuex](https://router.vuejs.org/en/)

[vue-router](https://vuex.vuejs.org/en/)

[sass](https://sass-lang.com/)

[axios](https://github.com/axios/axios)

[babel](https://babeljs.io/)
