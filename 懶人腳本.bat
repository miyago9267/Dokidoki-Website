@echo off

:: 確認管理員權限
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo 此腳本需要管理員權限，請以管理員身份重新執行。
    pause
    exit /b
)

:: 檢查是否安裝了 Node.js 並且版本是 18.x
set "NODE_VERSION="
for /f "tokens=*" %%i in ('node -v 2^>nul') do set "NODE_VERSION=%%i"

if defined NODE_VERSION (
    echo 已檢測到 Node.js，版本: %NODE_VERSION%
    if "%NODE_VERSION:~1,2%"=="18" (
        echo Node.js 18 已安裝，跳過安裝步驟。
    ) else (
        echo 當前的 Node.js 版本不是 18，請手動更新為 18 版本。
        pause
        exit /b
    )
) else (
    echo 未安裝 Node.js，開始下載和安裝 Node.js 18...
    curl -o nodejs.msi https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi
    msiexec /i nodejs.msi /quiet /norestart
    del nodejs.msi

    :: 確認安裝是否成功
    node -v >nul 2>&1
    if %errorlevel% neq 0 (
        echo Node.js 安裝失敗，請檢查問題。
        pause
        exit /b
    )
    echo Node.js 18 安裝成功。
)

:: 檢查是否安裝了 Yarn
yarn -v >nul 2>&1
if %errorlevel% neq 0 (
    echo 未檢測到 Yarn，開始安裝 Yarn...
    npm install -g yarn
    if %errorlevel% neq 0 (
        echo Yarn 安裝失敗，請檢查問題。
        pause
        exit /b
    )
    echo Yarn 安裝成功，版本: %yarn%
) else (
    for /f "tokens=*" %%i in ('yarn -v') do set "YARN_VERSION=%%i"
    echo 已檢測到 Yarn，版本: %YARN_VERSION%
)

:: 確保在 Nuxt 項目目錄下執行
if not exist "nuxt.config.js" (
    echo nuxt.config.js 未找到，請確認此腳本在 Nuxt 項目根目錄下執行。
    pause
    exit /b
)

:: 執行 nuxt build
echo 開始執行 nuxt build...
yarn build
if %errorlevel% neq 0 (
    echo nuxt build 執行失敗，請檢查問題。
    pause
    exit /b
)

echo nuxt build 完成。

:: 執行 nuxt preview
echo 啟動 nuxt preview...
yarn preview
if %errorlevel% neq 0 (
    echo nuxt preview 啟動失敗，請檢查問題。
    pause
    exit /b
)

pause