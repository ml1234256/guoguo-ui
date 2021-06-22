#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
rm -rf dist &&
yarn build &&

# cd 到构建输出的目录下 
cd dist &&

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init &&
git add -A &&
git commit -m 'update' &&

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git branch -M main  &&
# git remote add origin git@gitee.com:xie-chuyi/pot-ui-website-1.git &&
git remote add origin git@github.com:ml1234256/pot-money-react-website-1.git
git push -f -u origin main &&

cd -