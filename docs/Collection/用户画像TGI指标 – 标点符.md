# 用户画像TGI指标 – 标点符

---

* [https://www.biaodianfu.com/tgi.html](https://www.biaodianfu.com/tgi.html)
* 数据, 术→技巧
* 2022-08-12 17:35:40

---

[数据](https://www.biaodianfu.com/category/practice/data-science), [术→技巧](https://www.biaodianfu.com/category/practice)

** 钱魏Way** · 2021-10-26** · 15 次浏览**

* [什么是TGI](#%E4%BB%80%E4%B9%88%E6%98%AFTGI "什么是TGI")
* [TGI的使用](#TGI%E7%9A%84%E4%BD%BF%E7%94%A8 "TGI的使用")
* [TGI实战](#TGI%E5%AE%9E%E6%88%98 "TGI实战")
* [相关文章:](#%E7%9B%B8%E5%85%B3%E6%96%87%E7%AB%A0 "相关文章:")

## 什么是TGI

对于TGI指数，百科是这样解释的——TGI指数，全称Target Group Index，可以反映目标群体在特定研究范围内强势或者弱势。

![](tgi-20220812173540-v5wxcm5.jpg)​

TGI指数计算公式 = 目标群体中具有某一特征的群体所占比例 / 总体中具有相同特征的群体所占比例 * 标准数100

举个例子，假设一家外语学校里面有家烧烤店，每天晚上男生和女生顾客都是50%，你觉得男生还是女生更倾向于光顾这个烧烤店呢？既然男女既然都一半，那显然是说男女同等倾向于光顾这家店。如果你是这么想的，那就错了。因为还有一个隐含的概率你没有问，就是这个学校里男生和女生的比例是多少呢。我们通过调查了解到男生和女生的比例分别是20%和80%。有了这个比例，我们就可以算TGI了。

* 烧烤店男生TGI=50%/20%*100=250
* 烧烤店女生TGI=50%/80%*100=60

你看，虽然光顾的顾客中男女比例一样。但是我们算TGI的话，会发现男生的TGI远远大于女生的TGI，从这个意义上讲，男生光顾这家门店的倾向性远大于女生。

## TGI的使用

我们为什么要看TGI？TGI可以帮我们找准目标顾客。像上面烧烤店的案例，通过计算TGI，我们很明显得知道男性顾客才是最喜欢我们门店的顾客，而女性用户并不喜欢我们这家店，这是最基本的现状。那基于这个现状，你接下来要做的到底是巩固喜欢这个门店的男性顾客群，还是开拓并不太喜欢这个门店的女性顾客群？这就是价值观问题了。找准了目标顾客之后，我们就可以针对目标顾客做更多的宣传推广。如果目标顾客是不清晰的话，那我们做宣传可能会漫无目的，结果就是吃力不讨好。

TGI指数表明不同特征用户关注的差异情况：

* TGI指数 = 100 表示平均水平，
* TGI指数 > 100，代表该类特征对目标群体的影响要大于平均水平，或者该类群体对某类问题的关注程度高于平均水平
* TGI指数 < 100，代表该类特征对目标群体的影响要小于平均水平，或者该类群体对某类问题的关注程度低于平均水平

**如何理解目标人群和基准人群？**

目标人群是我们选择用来进行下钻数据分析的人群，画像数据都是基于此人群进行分析。百分比和TGI均指的是目标人群的某标签值的百分比和TGI。基准人群是应用于TGI指数计算的对比人群，默认的大盘人群的全量人群。

**典型特征中的特征人群是如何定义的？**

采用有层级结构的树形图。越上层的维度越显著区分人群。示例：

![](tgi-demo-20220812173540-t0xxf33.png)​

## TGI实战

需求：公司要推出一款客单比较高的产品，打算在一些城市打样，需要确定哪些城市适合打样。

数据集：客户购买商品的订单数据，具体包括买家ID、省份、城市、下单日期、购买数量、实付金额，一共28832条数据。

**df = pd.** read_excel **(** 'tgi-dataset.xlsx' **)**

import pandas as pd

df = pd.read_excel('tgi-dataset.xlsx')  
df.head()

```
import pandas as pd

df = pd.read_excel('tgi-dataset.xlsx')
df.head()
```

![](tgi-1-20220812173540-igzgchv.png)​

数据初步处理：计算每个用户的客单价

**df_price = df**[[ **'城市'** ,  **'买家ID'** ,  **'实付金额'** ,  **'购买数量'** ]] **.** groupby **([** '城市' **, **​ **])**​ ****'买家ID'**** .**agg**( **'sum'** ) **.** reset_index **()**

**df_price**[ **'客单价'** ]** = df_price **[** '实付金额' **]** /df_price **[** '购买数量'**]

df_price = df[['城市', '买家ID', '实付金额', '购买数量']].groupby(['城市', '买家ID']).agg('sum').reset_index()  
df_price['客单价'] = df_price['实付金额']/df_price['购买数量']  
df_price.head()

```
df_price = df[['城市', '买家ID', '实付金额', '购买数量']].groupby(['城市', '买家ID']).agg('sum').reset_index()
df_price['客单价'] = df_price['实付金额']/df_price['购买数量']
df_price.head()
```

![](tgi-2-20220812173540-ai9zi53.png)​

**方案一：计算每个城市的平均客单价，取平均客单价最高的城市进行打样**

**df_price_city = df_price**[[ **'城市'** , **'客单价'** , **'买家ID'** ]] **.** groupby **([** '城市' **])** .**agg**({ **'客单价'** : **'mean'** ,  **'买家ID'** : **'count'** }) **.** reset_index **()** .**rename**(**columns=** { **'买家ID'** : **'买家数量'** })

**df_price_city.** sort_values **(** '客单价' **,ascending=** False **)** .**head**()

df_price_city = df_price[['城市','客单价','买家ID']].groupby(['城市']).agg({'客单价':'mean', '买家ID':'count'}).reset_index().rename(columns={'买家ID':'买家数量'})  
df_price_city.sort_values('客单价',ascending=False).head()

```
df_price_city = df_price[['城市','客单价','买家ID']].groupby(['城市']).agg({'客单价':'mean', '买家ID':'count'}).reset_index().rename(columns={'买家ID':'买家数量'})
df_price_city.sort_values('客单价',ascending=False).head()
```

![](tgi-3-20220812173540-91wivyk.png)​

客单价高的买家数量较少，需要再将买家数量较少的城市过滤：

**df_price_city.** loc **[** df_price_city **[** '买家数量' **]**   **&gt;**  df_price_city **[** '买家数量' **]** .**mean**() **,:** ] **.** head **()**

df_price_city.loc[df_price_city['买家数量'] > df_price_city['买家数量'].mean(),:].head()

```
df_price_city.loc[df_price_city['买家数量'] > df_price_city['买家数量'].mean(),:].head()
```

![](tgi-4-20220812173540-l4nvt5s.png)​

**方案二：统计每个城市大于一定阈值的会员量，取会员量最高的城市**

先查看下客单价分布：

**df_price**[ **'客单价'** ] **.** hist **(** bins=**16**)

df_price['客单价'].hist(bins=16)

```
df_price['客单价'].hist(bins=16)
```

![](tgi-bins-20220812173540-eryf7op.png)​

假设阈值为50，则：

**df_price_high = df_price**[**df_price**[ **'客单价'** ]> **=threshold**][[ **'城市'** , **'买家ID'** ]] **.** groupby **([** '城市' **])** .**agg**( **'count'** ) **.** reset_index **()** .**reset_index**() **.** rename **(** columns= **{** '买家ID' **:** '买家数量' **})**

**df_price_high.** sort_values **(** '买家数量' **,ascending=** False **)** .**head**()

threshold = 50  
df_price_high = df_price[df_price['客单价']>=threshold][['城市','买家ID']].groupby(['城市']).agg('count').reset_index().reset_index().rename(columns={'买家ID':'买家数量'})  
df_price_high.sort_values('买家数量',ascending=False).head()

```
threshold = 50
df_price_high = df_price[df_price['客单价']>=threshold][['城市','买家ID']].groupby(['城市']).agg('count').reset_index().reset_index().rename(columns={'买家ID':'买家数量'})
df_price_high.sort_values('买家数量',ascending=False).head()
```

![](tgi-5-20220812173540-09576lc.png)​

**方案三：引入tgi，根据tgi的高低选择打样城市**

判断是否为高客单价买家：

**df_price**[ **'高客单'** ]** = df_price **[** '客单价' **]** .**apply**(**lambda x: **1** **if** x  **&gt;** =threshold **else** **0**  **)**

**df_price**[ **'低客单'** ]** = df_price **[** '客单价' **]** .**apply**(**lambda x: **1** **if** x  **&lt;**  threshold **else** **0**  **)**

df_price['高客单'] = df_price['客单价'].apply(lambda x: 1 if x >=threshold else 0 )  
df_price['低客单'] = df_price['客单价'].apply(lambda x: 1 if x < threshold else 0 )  
df_price.head()

```
df_price['高客单'] = df_price['客单价'].apply(lambda x: 1 if x >=threshold else 0 )
df_price['低客单'] = df_price['客单价'].apply(lambda x: 1 if x < threshold else 0 )
df_price.head()
```

![](tgi-6-20220812173540-31yp1is.png)​

对数据进行汇总处理：

**df_summary = df_price**[[ **'城市'** , **'高客单'** , **'低客单'** ]] **.** groupby **([** '城市' **])** .**agg**( **'sum'** ) **.** reset_index **()**

**df_summary**[ **'总人数'** ]** = df_summary **[** '高客单' **]**  + df_summary **[** '低客单'**]

**df_summary**[ **'高客单占比'** ]** = df_summary **[** '高客单' **]**  / df_summary **[** '总人数' **]**  **

df_summary = df_price[['城市','高客单','低客单']].groupby(['城市']).agg('sum').reset_index()  
df_summary['总人数'] = df_summary['高客单'] + df_summary['低客单']  
df_summary['高客单占比'] = df_summary['高客单'] / df_summary['总人数']  
df_summary.head()

```
df_summary = df_price[['城市','高客单','低客单']].groupby(['城市']).agg('sum').reset_index()
df_summary['总人数'] = df_summary['高客单'] + df_summary['低客单']
df_summary['高客单占比'] = df_summary['高客单'] / df_summary['总人数'] 
df_summary.head()
```

![](tgi-7-20220812173540-kzf66ln.png)​

计算总体高客单人数占比：

**total_percentage = df_summary**[ **'高客单'** ] **.** sum **()**  / df_summary **[** '总人数' **]** .**sum**()

total_percentage = df_summary['高客单'].sum() / df_summary['总人数'].sum()  
total_percentage

```
total_percentage = df_summary['高客单'].sum() / df_summary['总人数'].sum()
total_percentage
```

计算每个城市高客单TGI指数：

**df_summary**[ **'高客单TGI指数'** ]** = df_summary **[** '高客单占比' **]**  / total_percentage ***** **100

**df_summary = df_summary.** sort_values **(** '高客单TGI指数' **,ascending = **​ **)**​****False****

df_summary['高客单TGI指数'] = df_summary['高客单占比'] / total_percentage * 100  
df_summary = df_summary.sort_values('高客单TGI指数',ascending = False)  
df_summary.head()

```
df_summary['高客单TGI指数'] = df_summary['高客单占比'] / total_percentage * 100
df_summary = df_summary.sort_values('高客单TGI指数',ascending = False)
df_summary.head()
```

![](tgi-8-20220812173540-zkv6j06.png)​

筛选出人数大于平均值的人数，再计算更合理的TGI指数：

**df_summary.** loc **[** df_summary **[** '总人数' **]**   **&gt;**  df_summary **[** '总人数' **]** .**mean**() **,:** ] **.** head **()**

df_summary.loc[df_summary['总人数'] > df_summary['总人数'].mean(),:].head()

```
df_summary.loc[df_summary['总人数'] > df_summary['总人数'].mean(),:].head()
```

![](tgi-9-20220812173540-jr85rva.png)​
