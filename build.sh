
myserver_dev="192.168.1.109:80"
myserver_prod="192.168.1.108:80"

sed -i "s/$myserver_dev/$myserver_prod/g" src/*.js

yarn build


sed -i "s/$myserver_prod/$myserver_dev/g" src/*.js


path_work=/runtime/work

rm -rf $path_work/gitstudy/homeserver/src/main/resources/static/*

cp -r build/* $path_work/gitstudy/homeserver/src/main/resources/static/


