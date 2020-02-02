git reset --hard;\
        git fetch --all;\
        git checkout -f master;\
        git reset --hard;\
        git fetch --all;\
        git pull origin master;\
        git branch --set-upstream-to=origin/master master
git pull;\

echo "pulled"
