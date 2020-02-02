git reset --hard;\
        git fetch --all;\
        git checkout -f master;\
        git reset --hard;\
        git fetch --all;\
        git pull origin master;\
git pull;\
git checkout -b jen-dev;\
git checkout master;\
git branch -D jen-dev;\
git merge master;\

echo "pulled"
