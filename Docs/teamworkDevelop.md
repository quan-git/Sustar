## 协同开发流程

* 首先`fork`下项目到自己的github
* `git clone https://github.com/hsiaoshen/Sustar.git` 原项目地址到本地
* 此时 `origin` 指向原项目地址
* `git remote add branch https://github.com/gurenyigu/Sustar.git` 将自己`fork`的地址添加到项目中,名为`branch`
* 创建分支并切换 `git checkout -b develop`
* 查看两次hash值及所在分支 `git branch -av`

* 这时我们对这个自己的新分支进行开发操作

* 之后每次开发前执行 : `git checkout master`  `git pull origin` `git merge develop` 分支切换 更新 分支合并
* `git commit -a -m '修改了....'` `git push branch develop`

* 到github Pull requests
