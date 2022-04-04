
#myserver_dev="192.168.16.233:8081"
#myserver_prod="192.168.16.198:8081"
#
#sed -i "s/$myserver_dev/$myserver_prod/g" src/*.js

yarn build


#sed -i "s/$myserver_prod/$myserver_dev/g" src/*.js

echo "编译完成，编译目录最新文件结构如下"
ls -al build/

path_work=/runtime/work
path_target=$path_work/gitstudy/homeserver/src/main/resources/static

rm -rf $path_target/*
echo "清空目标目录，检测清除后的目录内容"
ls -al $path_target

cp -r build/* $path_target


