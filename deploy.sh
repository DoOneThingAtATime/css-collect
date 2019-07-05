yarn build
git checkout gh-pages
mv -f dist/* ./
git add .
git commit -m "update page"
git push
git checkout -