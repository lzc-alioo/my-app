
#myserver_dev="192.168.16.233:8081"
#myserver_prod="192.168.16.198:8081"
#
#sed -i "s/$myserver_dev/$myserver_prod/g" src/*.js

yarn build


#sed -i "s/$myserver_prod/$myserver_dev/g" src/*.js


path_work=/runtime/work

rm -rf $path_work/gitstudy/homeserver/src/main/resources/static/*

cp -r build/* $path_work/gitstudy/homeserver/src/main/resources/static/


