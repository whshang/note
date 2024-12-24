---
title: "Demographics Analysis with Python | Aman Kharwal"
source: "https://thecleverprogrammer.com/2024/07/15/demographics-analysis-with-python/"
author:
  - "[[Aman Kharwal]]"
published: 2024-07-15
created: 2024-12-24
description: "In this article, I'll take you through the task of Demographics Analysis with Python. Demographics Analysis with Python."
tags:
  - "clippings"
---
- 本文介绍了如何使用 Python 进行人口统计分析，包括数据加载、探索和可视化。
- 文章重点介绍了用户参与度指标，例如参与率、每次用户的会话次数和平均参与时间，以识别主要城市中的用户行为模式。
- 该文章还讨论了如何根据用户参与度、用户类型和地理位置对用户进行细分，并提出了一种根据这些细分市场分配广告预算的策略。
---
人口统计分析涉及根据年龄、性别、位置、收入、教育等因素检查人口的特征，等等。它帮助企业和组织了解他们的受众，定制营销策略，个性化客户体验，并做出明智的决策。所以，如果你想学习如何执行人口统计分析，这篇文章适合你。在本文中，我将带你完成使用Python进行人口统计分析的任务。

## 人口统计分析：概述

  
人口统计分析意味着根据年龄、性别、位置和兴趣等各种人口统计因素了解网站受众的构成。人口统计分析的预期结果包括详细了解访问者是谁、不同人口统计群体如何与网站互动以及哪些细分市场最有价值或代表性不足。

  
它帮助企业定制他们的内容、营销策略和用户体验，以更好地满足目标受众的需求和偏好，最终提高参与度和转化率。

  
要开始人口统计分析，我们需要一个包含用户人口统计数据的数据集。我找到了一个理想的数据集，我们可以用于这项任务。数据集中的一些关键列是：

- 城镇/城市：城镇或城市的名称。
- 国家：国家（所有参赛作品均来自印度）。
- 用户：用户总数。
- 新用户：新用户数量。
- 参与会话：参与会话总数。
- 参与率：参与率。
- 每个用户参与会话：每个用户参与会话的平均数量。
- 平均参与时间：用户参与的平均时间。
- 事件计数：事件总数。

  
您可以从这里下载数据集。

  
现在，让我们通过导入必要的Python库和数据集开始用户人口统计分析：

```
import pandas as pd
data = pd.read_csv("user-demographics.csv")
print(data.head())
```

```
   Town/City Country  Users  New users  Engaged sessions  Engagement rate  \  
0  Hyderabad   India  75090      71123             81835         0.560468     
1  Bengaluru   India  74325      72162             84798         0.536459     
2    Chennai   India  54031      51207             55398         0.576372     
3     Mumbai   India  48323      45147             43751         0.483714     
4       Pune   India  44515      41678             45887         0.531401     
  
   Engaged sessions per user  Average engagement time  Event count    
0                   1.089826               132.499694       758313    
1                   1.140908               138.728988       776356    
2                   1.025300               120.585664       511249    
3                   0.905387               103.302547       422074    
4                   1.030821               119.913759       420101
```

  
在继续之前，让我们看看数据的汇总统计：

```
              **Users     New users  Engaged sessions  Engagement rate  \  
count   5000.000000   5000.000000       5000.000000      5000.000000     
mean     258.603400    239.222400        244.537000         0.523479     
std     2188.601568   2066.505792       2296.886373         0.121147     
min       12.000000      5.000000          0.000000         0.000000     
25%       19.000000     17.000000         15.000000         0.450525     
50%       33.000000     29.000000         28.000000         0.525000     
75%       84.000000     77.000000         73.000000         0.600000     
max    75090.000000  72162.000000      84798.000000         1.000000     
  
       Engaged sessions per user  Average engagement time    Event count    
count                5000.000000              5000.000000    5000.000000    
mean                    0.853167               101.298684    2276.547400    
std                     0.406458               173.481918   21224.330334    
min                     0.000000                 0.000000      36.000000    
25%                     0.670073                47.175600     128.000000    
50%                     0.823529                77.371173     250.000000    
75%                     0.983146               119.423881     689.250000    
max                    13.294118              6895.550000  776356.000000
```


汇总统计数据的观察结果：

- 用户数量从12到75,090不等，平均值为258.60。它表明不同城市的用户数量存在很大差异。
- 新增用户从5人到72,162人不等，平均239.22人。与总用户类似，这显示出显着变化。
- 参与会话的范围从0到84,798，平均为244.54。零最小值表示某些条目没有参与会话。
- 参与率从0到1不等，平均为0.52。这表明总体上参与度适中。
- 每位用户参与会话的范围从0到13.29，平均值为0.85，显示用户参与会话的频率。
- 平均参与时长从0到6,895.55秒不等，平均值为101.30秒。最高值表明一些非常参与的用户。
- 事件数量从36到776,356不等，平均为2,276.55。这表明一些城市对总事件数量有很大贡献。

  
现在，让我们看看不同城镇/城市的用户地理分布，以了解哪些地区的用户数量最多：

```
import seaborn as sns
import matplotlib.pyplot as plt

top_cities = data.sort_values(by='Users', ascending=False).head(20)

plt.figure(figsize=(12, 8))
sns.barplot(y=top_cities['Town/City'], x=top_cities['Users'], palette='viridis')
plt.xlabel('Number of Users')
plt.ylabel('Town/City')
plt.title('Top 20 Cities by Number of Users')
plt.show()
```

![Demographics Analysis: Top 20 Cities by Number of Users](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/07/demographics-1.png?resize=1024%2C660&ssl=1)

  
海得拉巴、班加罗尔和钦奈是用户数最多的前三个城市，明显超过其他城市。用户数在前几个城市之后急剧下降，这表明用户集中在主要城市中心。

  
现在，让我们看看顶级城市的参与率：

```
plt.figure(figsize=(12, 8))
sns.barplot(y=top_cities['Town/City'], x=top_cities['Engagement rate'], palette='spring')
plt.xlabel('Engagement Rate')
plt.ylabel('Town/City')
plt.title('Engagement Rate in Top 20 Cities by Number of Users')
plt.show()
```

![Engagement Rate in Top 20 Cities by Number of Users](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/07/demographics-2.png?resize=1024%2C660&ssl=1)

  
主要调查结果表明，钦奈、海得拉巴和班加罗尔的参与率最高，这表明这些城市的用户更积极地与网站内容互动。

  
现在，让我们看看前20个城市的每位用户的平均参与会话数：

```
plt.figure(figsize=(12, 8))
sns.barplot(y=top_cities['Town/City'], x=top_cities['Engaged sessions per user'], palette='flare')
plt.xlabel('Engaged Sessions per User')
plt.ylabel('Town/City')
plt.title('Engaged Sessions per User in Top 20 Cities by Number of Users')
plt.show()
```

![Demographics Analysis: Engaged Sessions per User in Top 20 Cities by Number of Users](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/07/demographics-3.png?resize=1024%2C660&ssl=1)

  
主要调查结果表明，班加罗尔和海得拉巴的每位用户参与度最高，这表明这些城市的用户经常与网站互动。

  
现在，让我们看看前20个城市的平均参与时长：

```
plt.figure(figsize=(12, 8))
sns.barplot(y=top_cities['Town/City'], x=top_cities['Average engagement time'], palette='crest')
plt.xlabel('Average Engagement Time (seconds)')
plt.ylabel('Town/City')
plt.title('Average Engagement Time in Top 20 Cities by Number of Users')
plt.show()
```

![Average Engagement Time in Top 20 Cities by Number of Users](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/07/demographics-4.png?resize=1024%2C660&ssl=1)

  
主要发现包括伊斯坦布尔、斋浦尔和布巴内斯瓦尔的平均参与时间最高，这表明这些城市的用户在网站上花费的时间更多。

  
现在，让我们比较前20个城市的新用户与回头客：

```
top_cities['Returning users'] = top_cities['Users'] - top_cities['New users']

top_cities_melted = top_cities.melt(id_vars='Town/City', value_vars=['New users', 'Returning users'],
                                    var_name='User Type', value_name='Count')

plt.figure(figsize=(14, 10))
sns.barplot(y='Town/City', x='Count', hue='User Type', data=top_cities_melted, palette='viridis')
plt.xlabel('Number of Users')
plt.ylabel('Town/City')
plt.title('New Users vs Returning Users in Top 20 Cities by Number of Users')
plt.legend()
plt.show()
```

![Demographics Analysis: New Users vs Returning Users in Top 20 Cities by Number of Users](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/07/demographics-5-1.png?resize=1024%2C705&ssl=1)

  
数据显示，大多数城市的大部分用户都是新用户，其中海得拉巴、班加罗尔和钦奈的用户数量最多。这表明这些城市在吸引首次游客方面正在经历显著增长。相反，所有城市的回访用户比例都要小得多，这表明有一个改进用户保留策略的潜在领域。

  
现在，让我们来看看前20个城市的活动数量：

```
plt.figure(figsize=(12, 8))
sns.barplot(y=top_cities['Town/City'], x=top_cities['Event count'], palette='magma')
plt.xlabel('Event Count')
plt.ylabel('Town/City')
plt.title('Event Count in Top 20 Cities by Number of Users')
plt.show()
```

![Event Count in Top 20 Cities by Number of Users](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/07/demographics-6.png?resize=1024%2C655&ssl=1)

  
海得拉巴和班加罗尔以最高的事件数量明显领先，表明这些城市的用户互动水平很高。金奈和孟买也显示出大量的事件数量，显示出活跃的用户参与。图表下端的城市，如布巴内斯瓦尔、斋浦尔和伊斯坦布尔，事件数量相对较低，表明用户互动较少。

#### 按城市划分的用户细分以进行预算分配

  
人口统计分析的主要目的是为各种营销活动找到用户群，我们可以根据每个细分市场的参与类型来分配预算。在我们的数据集中，人口统计信息仅限于位置，所以让我们创建一个预算分配策略。

  
为了有效地细分用户以定位广告并最大化广告预算，我们需要确定提供最大参与和转化潜力的用户细分。给定数据集，我们可以根据以下标准对用户进行细分：

1. 用户活动：基于参与会话和平均参与时长的高与低活动。
2. 用户类型：新用户与回访用户。
3. 地理位置：用户数量高、中、低的城市。

  
让我们根据这个策略创建用户细分：

```
# high-Engagement Users
high_engagement_users = data[(data['Engaged sessions per user'] > data['Engaged sessions per user'].mean()) &
                             (data['Average engagement time'] > data['Average engagement time'].mean())]

# new Users
new_users = data[data['New users'] > (0.5 * data['Users'])]

# returning Users
returning_users = data[data['Users'] - data['New users'] > (0.5 * data['Users'])]

# categorize cities into high, medium, and low user count segments based on quantiles
user_quantiles = data['Users'].quantile([0.33, 0.67])
low_user_cities = data[data['Users'] <= user_quantiles[0.33]]
medium_user_cities = data[(data['Users'] > user_quantiles[0.33]) & (data['Users'] <= user_quantiles[0.67])]
high_user_cities = data[data['Users'] > user_quantiles[0.67]]

# summary of segments
segments_summary = {
    "High Engagement Users": len(high_engagement_users),
    "New Users": len(new_users),
    "Returning Users": len(returning_users),
    "Low User Cities": len(low_user_cities),
    "Medium User Cities": len(medium_user_cities),
    "High User Cities": len(high_user_cities)
}

segments_summary
```

```
{'High Engagement Users': 1383, 'New Users': 4975, 'Returning Users': 17, 'Low User Cities': 1687, 'Medium User Cities': 1676, 'High User Cities': 1637}
```

  
为了使用这些用户群有效分配预算，我们应该专注于通过针对特定群体来最大化回报的策略。以下是我们如何根据每个细分市场进行预算分配：

1. 高参与度用户：这些用户已经高度参与，这意味着他们很有可能转化或购买。我们可以将该细分市场的大部分预算用于保持和增强他们的参与度。我们可以为该细分市场提供个性化广告、忠诚度计划和独家优惠。
2. 新用户：这些用户代表着潜在的增长。有效的入职可以让他们成为定期参与的用户。我们可以投资于这一细分市场的欢迎活动、介绍性优惠和入职计划。重点应该是让他们的第一次体验积极，以推动留存。
3. 回流用户：回流用户数量虽少，但代表着忠诚度和一致性，我们可以提供留存策略，比如对这部分用户的个性化推荐和持续使用的奖励。
4. 低用户城市：这些城市有未开发的潜力。宣传活动可以增加用户群。我们可以将预算的一小部分分配给品牌宣传活动和介绍性优惠，以吸引来自这些城市的新用户。
5. 中等用户城市：这些城市表现出中等潜力，可以培育成为高用户城市。我们可以以定向广告的形式为这一细分市场分配更多预算，将其转化为高用户城市。
6. 高用户城市：这些城市已经拥有具有高参与潜力的庞大用户群。与高参与度用户类似，我们也可以将很大一部分预算用于这一细分市场，以保持和提高他们的参与度。

  
因此，这就是我们如何做出数据驱动的决策使用像人口统计分析预算分配这样的技术。

### 小结

  
因此，人口统计分析包括根据年龄、性别、位置、收入、教育等因素检查人口特征。它帮助企业和组织了解他们的受众，定制营销策略，个性化客户体验，并做出明智的决策。

  
我希望你喜欢这篇关于使用Python进行人口统计分析的文章。请随时在下面的评论部分提出有价值的问题。在Instagram上关注我以获取更多资源。