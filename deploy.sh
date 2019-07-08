#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

git init
git config user.email 'guakun@outlook.com'
git config user.name 'DoOneThingAtATime'
git add -A
git commit -m 'update page'

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/DoOneThingAtATime/css-collect.git master:gh-pages

cd -