## classifieLese

what kind of *LeSe* is this ?

### Commitizen

- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动

#### Install

```bash
## use npm
npm install -g commitizen
## use yarn
yarn global add commitizen
```

#### Use

```bash
## use git cz after git add .
git add . && git cz
## add script commit in package.json.
## use  npm
npm commit
## use yarn
yarn commit
```

### Changelog

#### Install

```bash
## use npm
npm install -g conventional-changelog
## use yarn
yarn global add conventional-changelog
```

`command not found` when you `yarn changelog`.

```bash
## use npm
npm install -g conventional-changelog-cli
## use yarn
yarn global add conventional-changelog-cli
```

#### Use

```bash
## use npm
npm run changelog
## use yarn
yarn changelog
```

## Reference

- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [微信 | 云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [Taro 规范](https://taro-docs.jd.com/taro/docs/spec-for-taro.html)