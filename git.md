**add remote repository**
git remote add origin https://github.com/baremetals/arttest-api.git

git status
git add . (- to add all files in the folder, or use individual file or folder names)
git commit -m "title"

git push -u origin master
git pull origin master

**check previous commits**
git log --oneline

**Undoing Commits**
git checkout (id) [look at a certain commit
git checkout master retuns back to master branch - use name of your main branch]
git revert (id) [go back deletes commits]
git reset (id) [--hard optional to nt save current codee in directory. very dangerous could destroy your repo.]

