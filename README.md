# 定制Dockerfile
/Users/alioo/work/docker/react/Dockerfile
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

#RUN create-react-app my-app
#RUN cd my-app && npm start

RUN alias ll='ls -al'
RUN alias pss='ps aux --sort=%cpu |grep java |grep -v "grep java"'
RUN alias grep='grep --color=auto '

RUN echo "alias ll='ls -al'" >> ~/.bashrc
RUN echo "alias grep='grep --color=auto '" >> ~/.bashrc

```


# 启动
```
docker container start lzcreactv1
docker exec -it lzcreactv1 bash
```


# this函数绑定
## 方法1，先用变量that接一下，let that = this; （传统做法）
## 方法2，() =>是jsx语法，可以直接拿到外层的对象this（匿名函数 + ()=>）
```
    componentDidMount() {
        let that = this;
        setInterval(function () {
            that.setState({
                date: new Date()
            })
        }, 1000);
    }
    
    // componentDidMount() {
    //     this.timerID = setInterval(
    //         () => this.setState({date: new Date()}),
    //         1000
    //     );
    // }
    
```
## 方法3，跟方法2类似，使用的是() => 语法，不过方法2里面是匿名函数，这里是非匿名函数（非匿名函数 + ()=>）
```
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
```
## 方法4，对匿名函数进行绑定 (匿名函数 + 绑定)
```
  componentDidMount() {
    this.timer = setInterval(function () {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
        opacity: opacity
      });
    }.bind(this), 100);
  }
  
```

## 方法5，在构造函数里先绑定一下this.handleClick = this.handleClick.bind(this); （非匿名函数 + 绑定）
```
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
```

# todo
## 分环境配置文件
20211002更新：已完成，见配置文件 /Users/alioo/work/gitstudy/my-app/.env.development，/Users/alioo/work/gitstudy/my-app/.env.production，
值得注意的是变量命名需要以REACT_APP_开头

## 图表问题
20211002更新：已完成

## url同步更新
当打开第2个tab时，刷新页面时仍回到第2个tab页面
参考资料：
使用JavaScript修改浏览器URL地址栏的实现代码 https://www.jb51.net/article/42240.htm
```javascript
var stateObject = {};
var title = "Wow Title";
var newUrl = "/my/awesome/url";
history.pushState(stateObject,title,newUrl);
```
使用react-router实现单页面应用路由 https://www.jianshu.com/p/d4c42e5a5dfc

```
npm install --save react-router-dom

```




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
