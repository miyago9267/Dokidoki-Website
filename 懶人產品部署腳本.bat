@echo off
setlocal

:: 設置暫停點，便於追蹤每一步驟
set PAUSE_STEP=1

:: 檢查是否安裝了 Node.js 並且版本是 18.x
set "NODE_VERSION="
echo [STEP %PAUSE_STEP%]: 檢查 Node.js 版本...
set /a PAUSE_STEP+=1
for /f "tokens=*" %%i in ('node -v 2^>nul') do set "NODE_VERSION=%%i"

if defined NODE_VERSION (
    echo 已檢測到 Node.js，版本: %NODE_VERSION%
    if "%NODE_VERSION:~1,2%"=="18" (
        echo Node.js 18 已安裝，繼續下一步。
    ) else (
        echo 當前的 Node.js 版本不是 18，請手動更新為 18 版本。
        pause
        exit /b
    )
) else (
    echo 未安裝 Node.js，請先手動安裝 Node.js 18 版本後重新運行此腳本。
    pause
    exit /b
)

:: 檢查是否安裝了 Yarn
set "YARN_VERSION="
echo [STEP %PAUSE_STEP%]: 檢查 Yarn 是否安裝...
set /a PAUSE_STEP+=1

:: 使用 where 命令來檢查 Yarn 是否存在
where yarn >nul 2>&1
if %errorlevel% neq 0 (
    echo 未檢測到 Yarn，開始安裝 Yarn...
    npm install -g yarn
    if %errorlevel% neq 0 (
        echo Yarn 安裝失敗，請檢查問題。
        pause
        exit /b
    )
    echo Yarn 安裝成功。
) else (
    for /f "tokens=*" %%i in ('yarn -v') do set "YARN_VERSION=%%i"
    echo 已檢測到 Yarn，版本: %YARN_VERSION%
)

:: 執行 nuxt build
echo [STEP %PAUSE_STEP%]: 開始執行 nuxt build...
set /a PAUSE_STEP+=1
yarn build && yarn preview
if %errorlevel% neq 0 (
    echo 執行失敗，請檢查問題。
    pause
    exit /b
)

pause
