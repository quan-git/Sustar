## 协同开发流程

* 首先`fork`下项目到自己的github
* `git clone https://github.com/hsiaoshen/Sustar.git` 原项目地址到本地
* 此时 `origin` 指向原项目地址
* `git remote add branch https://github.com/gurenyigu/Sustar.git` 将自己`fork`的地址添加到项目中,名为`remote`
* 进行更新操作: `git fetch remote` / `git fetch origin`
* 创建分支并进行原项目克隆 `git checkout -b develop origin/develop`
* 更改分支晚于主分支 `git reset --hard origin/develop` ???

* 之后每次开发前执行 : `git fetch origin` 从原项目更新 `git rebase origin/develop` 将最后一次原项目更新到develop分支

* 现在我们进行一些更改操作

* `git commit -a -m '修改了....'` `git push remote develop`
