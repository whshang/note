# 【笔记方法分享】conor 的写作工作流 | 块引用的作用 - 链滴

|前言|
| ------|

本帖是我根据 roam research 创始人 Conor White-Sullivan 的这条推特 [https://twitter.com/Conaw/status/1240104928661475328](https://ld246.com/forward?goto=https%3A%2F%2Ftwitter.com%2FConaw%2Fstatus%2F1240104928661475328) 进行翻译整理而得的图文教程，使用平台为 roam research，整套工作流可以在思源中复刻，只是部分操作没有 roam research 那么流畅。

注：部分思源用户可能没有接触过 roam research，可能会对下面描述的部分内容有困惑，我简单说明一下 roam research 中部分和思源设计不同的地方：

conor 这套工作流的核心要点就一句话：**查看相关文档的正文与反链，通过 alt+drag 复制块引用到写作正文**

|概述|
| ------|

​![](https://b3logfile.com/file/2021/10/image-d891ad14.png?imageView2/2/interlace/1/format/webp)​

conor 录制了一个视频 demo 展现了一套写作工作流，在这套工作流中：

1. 通过 draft 的反向链接收集 note
2. 使用块引用将上面的 note 复制到 draft 文档里
3. 重述：修改内容的同时，保留去往原始文本的块引用链接

​![](https://b3logfile.com/file/2021/10/image-268d8fbc.png?imageView2/2/interlace/1/format/webp)​

整个 demo 的核心步骤为：

1. 收集与 Draft 1 相关的 note：在 daily note 或其他文档中，遇到与 Draft 1 相关的 note，写上[[Draft 1]]，从而链接到 Draft 1 文档，这样，在 Draft 1 文档的反向链接中可以看到所有收集到的与 Draft 1 相关的 note。
2. 使用块引用复用 note：通过 alt+drag 或使用((。
3. 如果你觉得原来的 note 写得不够好，想要重写 note，可以写上修改后的 note，然后在最后加上去往原始文本的块引用链接 `[*](块id)`​。
4. 查看第一版 draft 中的每一个块的右上角是否有 `1`​(或更高的数字)，有 `1`​ 代表这个块被引用过 1 次了，没有 `1`​ 代表没有引用过，从而判断哪些块被引用过哪些块没有被引用过，从而能确保自己没有遗漏草稿内容

注：上面的 draft、draft1 其实可以替换成任何具体主题

详细演示

---

### 1. 收集与 Draft 1 相关的 note

这个过程可以在 daily note 中，也可以在其他文档中

​![](https://b3logfile.com/file/2021/10/image-244bc2f5.png?imageView2/2/interlace/1/format/webp)​

该步骤可以概括为：写文章草稿，并链接到 Draft 1 文档

链接到 Draft 1 文档有两种表现形式：

* 父结点为[[Draft 1]]，子列表中写具体内容，即图中的第一个[[Draft 1]]
* 在一个列表项中同时写具体内容与[[Draft 1]]，即图中的第二个[[Draft 1]]

文章草稿的具体内容可以是：

* 自己写
* 从其他文档复制块引用

### 2. 在 Draft 1 文档中通过块引用复用 note

​![](https://b3logfile.com/file/2021/10/image-caa3e66c.png?imageView2/2/interlace/1/format/webp)​

在 Draft 1 文档的反向链接中便可以看到我们在 daily note 中收集的草稿

​![](https://b3logfile.com/file/2021/10/temp90-19a284f5.gif)​

通过 alt+drag 复制块引用到 Draft 1 文档中

### 3. 重述笔记

可能会觉得原来的草稿写得不够好，想要重写，但是我们又希望保留原始文本，毕竟有时候修改了好几版，最后可能发现还是第一版最好。

因此，conor 的方法是：写上修改后的内容，然后在最后加上去往原始文本的块引用链接 `[*](块id)`​：

​![](https://b3logfile.com/file/2021/10/image-f75e0aeb.png?imageView2/2/interlace/1/format/webp)​

个人看法：conor 的方法是把块引用的锚文本设置为*附在修改后的文本内容后面，其实也可以把修改后的文本内容直接作为块引用的锚文本，大部分情况下实现效果是类似的，即下面这种：

​![](https://b3logfile.com/file/2021/10/image-c1f5e24c.png?imageView2/2/interlace/1/format/webp)​

### 4. 判断草稿中的内容是否都被引用过了

​![](https://b3logfile.com/file/2021/10/image-6e55add8.png?imageView2/2/interlace/1/format/webp)​

右侧标记的 `1`​ 意味着被引用过 1 次，这个块的内容都被引用过了，因此 conor 对这个块标记为#placed

​![](https://b3logfile.com/file/2021/10/image-24686b7a.png?imageView2/2/interlace/1/format/webp)​

roam research 的反链面板中有筛选功能，通过过滤掉带有 `placed`​ 的内容，剩下的都是没有被 `placed`​ 的

​![](https://b3logfile.com/file/2021/10/image-48fa295f.png?imageView2/2/interlace/1/format/webp)​

最后，可以把 Draft 1 文档再链接到 Draft 2 文档，Draft 2 文档中可以再重复上面的操作。

​![](https://b3logfile.com/file/2021/10/image-617a919f.png?imageView2/2/interlace/1/format/webp)​

|更多|
| ------|

上面的 draft 可以替换成任何具体的主题，conor 在这条 Twitter 下也推荐了 nateliason 录制的 demo，`https://www.youtube.com/watch?v=RvWic15iXjk`​，核心还是在展现块引用的作用：

​![](https://b3logfile.com/file/2021/10/image-3920c7ca.png?imageView2/2/interlace/1/format/webp)​

这个 demo 的核心步骤为：**通过正向链接、反向链接找到与写作主题相关的文档，查看这些文档的正文与反链，通过 alt+drag 复制块引用到写作正文**

​![](https://b3logfile.com/file/2021/10/temp91-c1a34298.gif)​

在 [【共同探讨】移动块 / 反链 / 快速无压记录 / 标签](https://ld246.com/article/1628672942107) 这个帖子中，哈桑大佬也提出了一套工作流，给了大家很大启发，大家对那套工作流应该也都比较熟悉，为了便于大家理解，我把两个工作流做一个简单对比，conor 的这套工作流与哈桑大佬提出的工作流的主要区别在于：

* 在 daily note 中记录时，除了父结点写块引用，子列表写具体内容的形式外，还可以是在一个列表项中同时写具体内容与与块引用
* 哈桑大佬是直接 drag 反链面板中的内容（相当于剪切 + 粘贴），conor 是 alt+drag 反链面板中的内容（相当于复制块引用 + 粘贴），使用块引用的好处个人认为在于

  * 保留被引用内容的上下文，可以通过块引用进入原文档，查看当时记录这部分内容时的上下文。
  * 保留原文档的上下文，如果反链中的内容是某一文章的一部分，那么直接移动肯定不太合适，这会严重破坏原文章的结构，如果是 daily note 中的内容，影响会小一些，但也会造成一定程度的 daily note 上下文的缺失
  * 保留原始文本，可以在不破坏原始文本的基础上，修改内容

思源笔记与该工作流

---

目前思源笔记也能实践该工作流，但在部分功能上和 roam research 相比不够顺畅，主要为：

* 复制块引用的步骤要繁琐一些，roam research 中只需 alt+drag 就可以复制并粘贴块引用，思源中需要复制块引用后粘贴
* 缺少反链面板的筛选功能，目前可以用 sql 搜索替代

大家可以共同探讨该工作流，进一步可以从工作流的角度为思源笔记的功能提出改进建议
