echo Setting up Deploy
echo -----------------
npm run deploy

echo Running version control
echo -----------------------
git add .
echo enter commit message:
read commit
git commit -m "$commit"
git push -u origin master

echo +-------+
echo | Done. |
echo +-------+
