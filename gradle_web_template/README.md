# Introduction
### 项目介绍
本项目是ng2-admin工程在spring4下的重构，目的在于熟练运用ng2-admin框架
### 相关链接
* [angular2 ](https://angular.cn/)
* [ng2-admin](https://github.com/akveo/ng2-admin)

### 使用说明
1. 项目使用spring4，配置方式方式使用java配置
2. gradle版本 3.3
3. 静态文件存储在src/main/static/**
4. 首次加载项目，windows运行`gradle build`， Linux 运行`./gradlew build`，等待几分钟后，可以正常运行
5. 项目运行，windows加载命令`gradle appRun`, Linux 运行`./gradlew appRun`
6. ng2-admin开发: 在src/main/angular 目录下运行 `npm run develop`, 即可开发过程中动态更新到服务器
7. 修改后页面不刷新的解决方法: 以chrome浏览器为例, F12进入控制台, 在控制台中F1进入设置菜单, 将Network项下将Disable cache (while DevTools is open) 打钩, 不允许缓存即可