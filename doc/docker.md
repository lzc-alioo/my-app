# 定制Dockerfile
/Users/mac/work/docker/react/Dockerfile
```
FROM node

RUN npm config set registry https://registry.npm.taobao.org --global
RUN npm config set disturl https://npm.taobao.org/dist --global
RUN yarn config set registry https://registry.npm.taobao.org

RUN mkdir /runtime
WORKDIR /runtime

RUN npm install --save-dev gulp gulp-uglify;
RUN npm install --save-dev del;
RUN npm install --save-dev vinyl-source-stream;
RUN npm install --save-dev browserify;
RUN npm install --save-dev reactify;
RUN npm install --save-dev react react-dom;
RUN npm install --save-dev babelify babel-preset-react;
RUN npm install -g browserify

RUN npm install -g create-react-app

#RUN npx create-react-app my-app
#RUN cd my-app && npm start

RUN alias ll='ls -al'
RUN alias pss='ps aux --sort=%cpu |grep java |grep -v "grep java"'
RUN alias grep='grep --color=auto '

RUN echo "alias ll='ls -al'" >> ~/.bashrc
RUN echo "alias grep='grep --color=auto '" >> ~/.bashrc

```

# 基于Dockerfile制作镜像
docker build -t lzcreact:v1 /Users/mac/work/docker/react/

# 创建并启动容器
docker container stop lzcreactv1
docker container rm lzcreactv1
docker run -itd --name lzcreactv1 -p 3000:3000  -v /Users/mac/work:/root/work  lzcreact:v1
docker exec -it lzcreactv1 bash

ln -s /root/work/gitstudy/my-app2/ /runtime/my-app2