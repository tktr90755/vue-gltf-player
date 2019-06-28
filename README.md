# vue-gltf-player
Three.jsでglTF読み込みを試したファイル
Cinema4D R19でなくてもBlenterを使えばglTF書き出しできる。

[DEMO](https://tktr90755.github.io/vue-gltf-player/)  

## Install
```
npm install git+https://github.com/tktr90755/vue-gltf-player.git
```

## Usage
■ 手順
(1)なんでもいいので3Dモデルを用意する
(2)Cinema4DとかBlenderでOBJにしてmixamoにインポート
(3)アニメーション付ける
(4)fbxダウンロード
(5)でfbxのバージョンfbx2013に変更する
(6)もう一度Blenterで読み込む
(7)glTFに変換
(8)Three.jsで使う

■ ハマりどころ
・glTF ExporterをBlenderにインストールする時、Zipファイルのままファイル指定しないとインストールできない。

■ 参考文献

[BlenderでFBX形式をglTF形式に変換してThree.jsでアニメーションさせる （1/2） | RYO620](https://ryo620.org/2018/02/to-gltf-from-fbx-by-blender/)

[CINEMA4Dでいろいろ試してみた｜ソニックジャム｜note](https://note.mu/sonicjam/n/nee6f5967f067)

[mixamo](https://www.mixamo.com/#/?page=1&type=Character)

[FBX Converter](http://web.archive.org/web/20170926144107/http://usa.autodesk.com/adsk/servlet/pc/item?siteID=123112&id=22694909)

[mixamo](https://www.mixamo.com/#/?page=1&type=Character)
---
## Vue CLI npm script

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```