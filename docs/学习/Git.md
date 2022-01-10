---
id: git
title: Git
sidebar_label: Git
slug: /git
---

[TOC]

# Git

## 使用 Git 同步 fork 拉取远程仓库代码

1. 将需要同步的仓库关联到本地 upstream

```shell
git remote add upstream [repo url]
```

2. 查看状态

```shell
remote -v
```

3. 拉取 upstream 仓库下所有分支

```shell
git  fetch upstream
```

4. 将上游 upstream 远程代码 master 分支的代码同步到现在 master 分支

```shell
git checkout master
git merge upstream/master
```
