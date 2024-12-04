# Dokidoki 心動不已告白日記網頁

## 簡介

委託

## 使用說明

### 安裝

1. 安裝node.js 18以上版本
2. 安裝yarn或npm(`npm install -g yarn@latest`)
3. `yarn install` or `npm install`

### 開發測試環境

```bash=
yarn dev
```

即可於localhost:3000看到網站

### 輸出

```bash=
yarn build
```

系統會輸出`Dokidoki-Website`，緊接著會自動打包壓縮成`Dokidoki.zip`
將`Dokidoki-Website`資料夾內容放到伺服器上，運行`node server/index.mjs`即可
或者可選用輸出後直接使用`yarn preview`運行預覽

### 預覽

```bash=
yarn preview
```

## Windows懶人包

1. 使用`install.exe`自動安裝一次性node.js並安裝自動yarn
2. 使用`dev.exe`自動部署環境並開啟測試網站
3. 使用`preview.exe`自動部署環境並產生正式站資料夾，以及開啟預覽網站
