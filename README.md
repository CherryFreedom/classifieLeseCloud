# classifieLese

what kind of _LeSe_ is this ?

## Features

- [ ] use hooks
- [ ] use MobX
- [ ] 文案
- [ ] 云函数功能
- [ ] UI 设计
- [ ] index 页面样式
- [ ] hot 热门搜索页面样式（包括 hot 入口）
- [ ] detail 详情页面垃圾详情样式
- [ ] classify 分类介绍页面样式

## Commitizen

When you commit with Commitizen, you'll be prompted to fill out any required commit fields at commit time.

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and - scripts (example scopes: Travis, Circle, BrowserStack, - SauceLabs)
- chore: Other changes that don't modify src or test - files
- revert: Reverts a previous commit

### Install

Using npm:

```bash
$ npm install -g commitizen
```

Using yarn:

```bash
$ yarn global add commitizen
```

### Use

If you want to submit all changes.

Using npm:

```bash
$ npm commit
```

Using yarn:

```bash
$ yarn commit
```

If you want to submit some changes, use `git cz` after `git add [file]`

```bash
git add [file] && git cz
```

## Changelog

Generate a changelog from git metadata.

### Installing

Using npm:

```bash
$ npm install -g conventional-changelog
```

Using yarn:

```bash
$ yarn global add conventional-changelog
```

**If `command not found` when you `yarn changelog`.**

Using npm:

```bash
$ npm install -g conventional-changelog-cli
```

Using yarn:

```bash
$ yarn global add conventional-changelog-cli
```

### Use

Using npm:

```bash
$ npm run changelog
```

Using yarn:

```bash
$ yarn changelog
```

## Reference

- [Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
- [微信 | 云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)
- [Taro 规范](https://taro-docs.jd.com/taro/docs/spec-for-taro.html)
- [Taro UI](https://taro-ui.jd.com/#/docs/introduction)
- [Taro Hooks](https://taro-docs.jd.com/taro/docs/hooks.html)
- [Taro MobX](https://taro-docs.jd.com/taro/docs/mobx.html)
