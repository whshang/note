# (1 封私信  5 条消息) 怎样快速掌握 VLookup？

---

* [https://www.zhihu.com/question/34419318/answer/2517920291?utm_source=com.tencent.wework&amp;utm_medium=social&amp;utm_oi=26684786999296](https://www.zhihu.com/question/34419318/answer/2517920291?utm_source=com.tencent.wework&utm_medium=social&utm_oi=26684786999296)
* 全文干货，总共 3000 字，看完还不会？我给你找零！但是我相信看完一定能让你彻底搞明白这个函数！毫不夸…
* 2022-07-26 17:58:49

---

**全文干货，总共 3000 字** ，看完还不会？

我给你找零！

但是我相信看完一定能让你 **彻底搞明白这个函数** ！

毫不夸张地说，99%天天和Excel打交道的人，他们所掌握的Excel知识量如同买了最新款旗舰手机，性能开发不到20%，放在Excel也是如此， 很多人并没有掌握Excel大部分功能。

这不是危言耸听，这是我这几年[数据分析](https://link.zhihu.com/?target=https%3A//www.afenxi.com/data-analysis%2522%2520%255Co%2520%2522%25E6%259C%2589%25E5%2585%25B3%25E6%2595%25B0%25E6%258D%25AE%25E5%2588%2586%25E6%259E%2590%25E7%259A%2584%25E6%2596%2587%25E7%25AB%25A0)培训中观察的结果。大部分的Excel使用者，每天在用较为稚嫩的知识处理着各种复杂的数据分析问题，分析要有效率只是一种传说。

想要掌握 VLOOKUP，最起码你要经历以下几个段位。

 **一段** ：会简单的[vlookup](https://link.zhihu.com/?target=https%3A//www.afenxi.com/topic/vlookup%2522%2520%255Co%2520%2522vlookup%2522%2520%255Ct%2520%2522_blank)函数的使用  
 **二段** ：会vlookup+column函数的嵌套使用  
 **三段** ：会vlookup+[match](https://link.zhihu.com/?target=https%3A//www.afenxi.com/topic/match)函数的嵌套使用  
 **四段** ：会vlookup的模糊匹配使用  
 **五段** ：会vlookup+offset+match的高阶嵌套使用

很多表哥表妹常说这些函数都会，但是组合在一起就不会了。确实，函数的嵌套是最难的，不光难在技术，最关键是逻辑，很多时候是我们自己想不到这样取巧的使用而自己打败了自己。

别慌，今天我给大家分享下这个函数的用法，分享给你办公室的每个表哥表姐表弟表妹们，让他们都学会。

对于初学者，我的建议是跟着老师学习， **最好是同时有长期教课经验和牛逼工作经验的老师，保证他确实是一个实战数据分析大佬，又确实能教会别人** ，两者缺一，要不然就是把你教成书呆子，要不就是大肚茶壶倒饺子——有货说不出。

我个人推荐知乎的一个课程，主讲老师是前IBM数据分析大佬猴子，课程是结合国内互联网一线大厂的案例（如下图），从基础讲起，用案例讲知识点，带练以Excel为代表的数据分析工具，你还可以顺便学习包括power BI，SQL等，传授数据分析常用十大分析方法，通过大厂的实际数据案例实操，让大家扎扎实实学会Excel，对小白来说是很友好的选择。

![](v2-ad3d995816ed0dc223de6d00cef5694c_720w-20220726175849-8g8zxt4.jpg)

谦虚的说，这样你们的办公效率至少会提高一倍吧。

vlookup是一个纵向查找函数（从左往右查），官方的语法规则是这样的：VLOOKUP(lookup_value,table_array,col_index_num,range_lookup)。翻译成中文就是：查找（一个值，这个值所在的区间，它位于第几列，精准匹配还是模糊匹配）

![](v2-279788de9ef01644922931a743013c2b_720w-20220726175849-mfwmpog.jpg)

图1

 **lookup_value** ：可以是一个值、日期或文本等。如你查询上图中的“城市”

 **table_array** ：查询值所处的区域，对于上图就是A1:H11这个范围，强烈推荐区域改成A:H这种写法，好处是当添加新数据源时不用更改公式。

 **col_index_num** ：返回的数据处于第几列，比如要查“完成率”这个值就是4，查“销售数量”就是6。

 **range_lookup** ：0为精准匹配，就是查询对象必须长得一模一样，少根汗毛都不行。一般情况都要求精准匹配，如果这个值省略这是模糊匹配（见vlookup四段的用法）

**举例说明：**

公式=VLOOKUP(“上海”,A:H,5,0)

查找“上海”所在的第五列数据，要求精准匹配。这个公式生成的结果是718。

 **注** ：“上海”可以是查询值所处的单元格，如果“上海”在K2单元格，则公式可以改成：

公式=VLOOKUP(K2,A:H,5,0)

K2中如果是“成都”，结果则是659，如果是“[雄安](https://www.zhihu.com/search?q=%E9%9B%84%E5%AE%89&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2517920291%7D)”，结果则是668。

Vlookup是非常好的数据查找函数，很方便的把处于不同地方的数据匹配到指定的地方，其中关键点就是数据查询的区域，这个区域可以是不同的区域，不同的工作簿，不同的工作表。

**拓展知识点：**

Vlookup家族还有Hlookup，Lookup。

## **二、Vlookup+Column**

当我们需要用Vlookup匹配多列数据的时候，往往需要手动去更改公式中的第3个值（就是col_index_num），但是匹配对象太多的情况下，手动修改其实是非常没有效率并且非常苦逼的一件事，这个时候column函数可以解放你们。

相信大部分会vlookup的人，现在还是傻傻的手动在改这个参数，说的就是你。

COLUMN(reference)

返回reference所在单元格所处的列号，如果A1就是1（第1列），B25就是2（第2列），H2就是8（第8列），这三个公式分别为COLUMN(A1)，COLUMN(B25)，COLUMN(H2)。如果reference为空则返回当前[单元格](https://www.zhihu.com/search?q=%E5%8D%95%E5%85%83%E6%A0%BC&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2517920291%7D)的列号。

![](v2-0cb61210f7f73eaaf5cfc692a23314a1_720w-20220726175849-r2ifm2m.jpg)

图2

上图就是在L2单元格写好公式后直接往后拉这个公式就可以直接匹配出其它6个值，不用手动将第3个参数分别改成3,4,5……，因为第三个值自动复制成COLUMN(C1)，COLUMN(D1)，COLUMN(E1)……

高效不？就是这么简单，[小函数](https://www.zhihu.com/search?q=%E5%B0%8F%E5%87%BD%E6%95%B0&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2517920291%7D)有大用途。

**拓展知识点：**

与column（reference）函数对应的是row（reference），row 函数返回某单元格的行数。

## **三、Vlookup+match**

Vlookup和match函数组合是V函数的标准用法，与column函数一样的功效，match函数的作用也是用来改变第三个参数值。

MATCH(lookup_value, lookup_array, match_type)

M函数是返回指定数值在指定数组区域中的位置，生成的是位置而不是V函数中位置所处的值，这是二者的区别。match_type如果是0则为精准匹配，省略则为模糊匹配，一般都是用0进行精准匹配。

例如我们使用上面图1中的数据源，公司如下：

公司=MATCH(“完成率”,B1:H1,0)

返回值为3，因为“完成率”这个指标是在B1:H1这个区域的第3个值，如果查询“进店顾客数”则返回7。所以M函数可以用来查询指定对象所处的位置，和V函数组合威力巨大，基本上可以两个查询值的无死角匹配。

![](v2-11f9b1c5f60d22727cf2246465f00c79_720w-20220726175849-vjao9xx.jpg)

图3

图3中嵌套公式写在了V2单元格，U2和V1单元格是可以修改“城市”和“查询指标”的地方，V2单元格将生成对应的查询值，修改U2和V1的值即可以查到对应的数据。

V+M函数组合是非常灵活的查询函数，是E界必备之效率嵌套用法。

## **四、Vlookup的模糊匹配**

从技术层面来讲，这个V函数的用法大概处于二段水平，但是从数据分析业务场景来说，我更愿意把它放在四段，因为这种应用解决了好几个业务场景的实际使用。

比如将商品价格分成低中高三段，将员工年龄分成青年、中年、老年等，将员工工龄分成4段等等场景。

如下图，通过每个商品的价格，自动匹配出来它处于的”价格段”和”价格描述”两个字段，有了这两个字段后，再用[数据透视表](https://www.zhihu.com/search?q=%E6%95%B0%E6%8D%AE%E9%80%8F%E8%A7%86%E8%A1%A8&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2517920291%7D)做分析就so easy了。

![](v2-2b4d29ecd9002ef87a5062340174ec2b_720w-20220726175849-8tfcgoi.jpg)

图4

要实现这样的功能，首先需要建立一个自定义的分段标准，没有标准鬼才知道你应该归位到哪儿。知识点来了：

![](v2-0606690b2c21daf837993fc95fc09c69_720w-20220726175849-uylbaqn.jpg)

图5

这里的价格节点可以自定义修改，修改后在图4的对应位置就可以自动生成对应的价格段。自定义的知识点其实比较简单，真正的知识点是图4、图5的数据该如何关联在一起？

![](v2-51733efcacdff667317a81131c9cc94a_720w-20220726175849-akh9odo.jpg)

图6

单元格C2和D2中的公式就是答案，它利用了vlookup函数的模糊匹配功能，你可以看到公式中第四个参数是缺失的。默认属于模糊匹配，如果你要写的话，第四个参数应该是 1。

也就是=VLOOKUP(B2,$H$2:$J$5,3,1)

这就是 VLOOKUP 的四个阶段的用法，希望能帮助到你，让你快速掌握这个函数！

各位还可以通过报名下面这个知乎的数据分析训练营，进一步学习数据分析和 Excel，尤其是对于新手来说，这个课程通俗易懂。

为期 3 天的课程就可以学习到之前很长时间没有搞懂的数据分析和 Excel 使用知识，老师亲自教学，效果就是不一般啊！

我是从事[数据分析师](https://www.zhihu.com/search?q=%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E5%B8%88&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2517920291%7D)行业长达 3 年的个人练习生透视哥，点击一波关注，你就能和我一起透视了哦！
