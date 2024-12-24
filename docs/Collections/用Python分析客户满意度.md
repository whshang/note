---
title: "Customer Satisfaction Analysis with Python | Aman Kharwal"
source: "https://thecleverprogrammer.com/2024/07/29/customer-satisfaction-analysis-with-python/"
author:
- "[[Aman Kharwal]]"
published: 2024-07-29
created: 2024-12-24
description: "In this article, I'll take you through the task of Customer Satisfaction Analysis with Python. Customer Satisfaction Analysis with Python."
tags:
- "clippings"
---
- 本文介绍了如何使用Python进行客户满意度分析，包括数据收集、分析和解释。
- 分析包括客户人口统计信息、购买行为和满意度评级，以识别趋势和改进领域。
- 结果显示，客户满意度较低，需要显著改进，尤其是在客户服务方面。
---
客户满意度分析是收集、分析和解释客户对公司产品、服务和整体体验的满意度数据的过程。如果你想学习如何分析客户对企业的满意度，以及如何根据满意度水平做出进一步的决策，这篇文章适合你。在这篇文章中，我将带你完成使用Python进行客户满意度分析的任务。

## 客户满意度分析：概述


客户满意度分析包括通过调查、反馈表、评级和评论收集、分析和解释客户体验和感知数据。通过识别满意和不满意的关键驱动因素，企业可以做出明智的决策来改善产品、服务和客户互动。


它有助于留住客户，提高忠诚度和宣传，推动销售增长，并获得竞争优势，最终提高整体业务绩效和客户体验。


要开始执行客户满意度分析任务，我们需要一个基于客户满意度和反馈的数据集。我为这项任务找到了一个理想的数据集，其中包含以下功能：

- CustomerID：每个客户的唯一标识符。
- 年龄：客户的年龄。
- 性别：客户的性别（男/女）。
- PurchaseAmount：客户花费的总金额。
- 购买频率：客户购买的数量。
- ProductQualityRating：客户对产品质量的评价（1-5）。
- DeliveryTimeRating：客户对交货时间的评分（1-5）。
- CustomerServiceRating：客户服务的客户评级（1-5）。
- WebsiteEaseOfUseRating：客户对网站易用性的评价（1-5）。
- 退货率：客户退回产品的比例。
- Discount tUsage：客户使用的折扣金额。
- LoyaltyProgramMember：客户是否是忠诚度计划成员（是/否）。


您可以从这里下载数据集。


现在，让我们通过导入必要的Python库和数据集开始客户满意度分析任务：

```
import pandas as pd

data = pd.read_csv("/content/E-commerce_NPA_Dataset.csv")

print(data.head())
```

```
 CustomerIDAgeGenderPurchaseAmountPurchaseFrequency\
0 1 38Female749.097626 24 
1 2 30Male735.224916 18 
2 3 55Male 1145.520305 22 
3 4 39Female925.460535 14 
4 5 51Male108.3599169 

 ProductQualityRatingDeliveryTimeRatingCustomerServiceRating\
0 2 13 
1 5 44 
2 3 54 
3 4 32 
4 3 32 

 WebsiteEaseOfUseRatingReturnRateDiscountUsage LoyaltyProgramMember
0 50.12 135.392573 No
1 50.37 193.450663Yes
2 10.10 147.246263Yes
3 40.3856.362894Yes
4 50.42 338.731055 No
```


让我们看看数据的汇总统计：

```
 CustomerID AgePurchaseAmountPurchaseFrequency\
count500.000000500.000000500.000000 500.000000 
mean 250.500000 44.170000 1065.05073114.308000 
std144.481833 14.813777583.199658 8.151197 
min1.000000 18.000000 51.799790 1.000000 
25%125.750000 32.000000535.083407 7.000000 
50%250.500000 44.000000 1100.88406514.000000 
75%375.250000 58.000000 1584.34812422.000000 
max500.000000 69.000000 1999.65596829.000000 

 ProductQualityRatingDeliveryTimeRatingCustomerServiceRating\
count 500.00000500.000000 500.0000 
mean2.934003.008000 3.0780 
std 1.410541.372481 1.4156 
min 1.000001.000000 1.0000 
25% 2.000002.000000 2.0000 
50% 3.000003.000000 3.0000 
75% 4.000004.000000 4.0000 
max 5.000005.000000 5.0000 

 WebsiteEaseOfUseRatingReturnRateDiscountUsage
count500.000000500.000000 500.000000
mean 3.0820000.252280 251.181010
std1.4153740.149674 141.531993
min1.0000000.000000 0.772696
25%2.0000000.110000 133.672231
50%3.0000000.260000 251.940355
75%4.0000000.380000 371.692341
max5.0000000.500000 499.813315
```


汇总统计数据提供了对数字数据的中心趋势、分散和范围的见解。以下是一些关键观察：

- 年龄：客户平均年龄在44岁左右，从18岁到69岁不等。
- 购买金额：平均购买金额为1065美元，显著的均方差表明支出的可变性。
- 购买频率：客户平均购买约14次，有些人最多购买29次。
- 评级：产品质量、交货时间、客户服务和网站易用性的平均评级在3左右，表明中等满意度水平。这些评级从1（差）到5（优）不等。
- 退货率：平均退货率为25%，部分客户退货率高达50%。
- 折扣使用：平均折扣使用在251美元左右，可变性高。


现在，让我们可视化这些变量的分布：

```
import matplotlib.pyplot as plt

numeric_cols = ['Age', 'PurchaseAmount', 'PurchaseFrequency', 'ProductQualityRating', 'DeliveryTimeRating', 'CustomerServiceRating', 'WebsiteEaseOfUseRating', 'ReturnRate', 'DiscountUsage']

plt.figure(figsize=(15, 20))

for i, col in enumerate(numeric_cols, 1):
plt.subplot(5, 2, i)
plt.hist(data[col], bins=20, edgecolor='k', alpha=0.7)
plt.title(f'Distribution of {col}')
plt.xlabel(col)
plt.ylabel('Frequency')

plt.tight_layout()
plt.show()
```

![customer satisfaction analysis: data distribution](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/07/customer-satisfaction-1.png?resize=766%2C1024&ssl=1)


直方图揭示了对客户人口统计和满意度指标的几个见解：

- 年龄分布相对均匀，30、60岁略有高峰；
- 购买金额是右倾斜的，表明大多数客户花费不到1000美元；
- 购买频率各不相同，在10次和20次购买左右有明显的高峰；
- 对产品质量、交货时间、客户服务和网站易用性的满意度评分分布广泛，大多数评分都集中在中间值附近；
- 收益率各不相同，峰值在0.1和0.4左右；
- 并且折扣使用均匀分布，没有显着趋势。


这些发现表明，客户体验和行为是多样化的，不同服务方面的满意度不同。


现在，让我们根据人口统计和行为因素对客户进行细分，并分析他们的满意度评级。我们将根据年龄、性别和忠诚度计划会员资格创建细分。首先，让我们分析不同年龄组和性别的满意度评级：

```
# create age groups
bins = [18, 30, 40, 50, 60, 70]
labels = ['18-29', '30-39', '40-49', '50-59', '60-69']
data['AgeGroup'] = pd.cut(data['Age'], bins=bins, labels=labels, right=False)

# select only the numeric columns for calculation
numeric_columns = ['ProductQualityRating', 'DeliveryTimeRating', 'CustomerServiceRating', 'WebsiteEaseOfUseRating']

# calculate mean ratings by age group and gender
mean_ratings_age_gender = data.groupby(['AgeGroup', 'Gender'])[numeric_columns].mean()

# reset the index to display the dataframe
mean_ratings_age_gender.reset_index(inplace=True)
print(mean_ratings_age_gender)
```

```
AgeGroupGenderProductQualityRatingDeliveryTimeRating\
018-29Female3.0526323.210526 
118-29Male2.9333333.000000 
230-39Female2.9298252.859649 
330-39Male3.0800002.820000 
440-49Female3.0909092.890909 
540-49Male2.8571433.166667 
650-59Female2.9459462.945946 
750-59Male2.8333332.895833 
860-69Female2.9000003.300000 
960-69Male2.6734692.938776 

 CustomerServiceRatingWebsiteEaseOfUseRating
0 3.1754392.912281
1 3.3333333.355556
2 2.9122813.070175
3 2.9800002.880000
4 3.0363643.109091
5 3.1428573.142857
6 3.0270273.162162
7 3.3125003.062500
8 3.0666672.950000
9 2.8367353.285714
```


数据显示了不同服务方面按年龄组和性别划分的平均满意度。以下是一些见解：

1. 年轻客户（18-29岁）通常对产品质量的评价略高。
2. 40-49岁年龄组的女性得分最高，60-69岁年龄组的男性得分最低。
3. 不同年龄组的分娩时间满意度相对一致，差异很小。
4. 分娩时间满意度最高的是60-69岁的女性，而最低的是30-39岁的男性。
5. 客户服务评级相当一致，在年轻男性中略有高峰（18-29岁）。
6. 60-69岁年龄组的男性客户服务率最低。


接下来，让我们分析忠诚度计划会员对客户满意度的影响：

```
# select only the numeric columns for calculation
numeric_columns = ['ProductQualityRating', 'DeliveryTimeRating', 'CustomerServiceRating', 'WebsiteEaseOfUseRating', 'ReturnRate', 'DiscountUsage']

# calculate mean ratings by loyalty program membership
mean_ratings_loyalty = data.groupby('LoyaltyProgramMember')[numeric_columns].mean()

# reset the index to display the dataframe
mean_ratings_loyalty.reset_index(inplace=True)
print(mean_ratings_loyalty)
```

```
LoyaltyProgramMemberProductQualityRatingDeliveryTimeRating\0 No2.9205022.916318 1Yes2.9463603.091954CustomerServiceRatingWebsiteEaseOfUseRatingReturnRateDiscountUsage0 2.9874483.1087870.251883 241.4267101 3.1609203.0574710.252644 260.113108
```


数据显示了忠诚度计划成员与非成员的平均满意度、退货率和折扣使用情况。以下是见解：

- 产品质量评级：忠诚度计划成员对产品质量的评级比非成员（2.92）略高（2.95）。
- 交付时间评级：忠诚度计划成员对交付时间（3.09）比非成员（2.92）更满意。
- 客户服务评分：会员对客户服务的评分（3.16）高于非会员（2.99）。
- 网站易用性评分：非会员对网站的评分（3.11）略高于会员（3.06）。
- 回报率：会员（0.25）和非会员（0.25）的回报率几乎相同。
- 折扣使用：与非会员（241美元）相比，会员使用的折扣略多（260美元）。

#### 净推荐值


现在，让我们计算净推荐值。NPS是一个衡量客户忠诚度和满意度的指标，通过询问客户向他人推荐公司产品或服务的可能性，从0到10。受访者分为三类：

1. 发起人（9-10）
2. 被动（7-8）
3. 诋毁者（0-6）


NPS的计算方法是从推广者的百分比中减去诋毁者的百分比。更高的NPS表示更多的客户忠诚度和积极的口碑，这对业务增长至关重要。


为了计算NPS，我们将使用客户服务评级作为整体满意度的代理。以下是如何计算NPS：

```
# define NPS categories based on customer service rating
data['NPS_Category'] = pd.cut(data['CustomerServiceRating'], bins=[0, 6, 8, 10], labels=['Detractors', 'Passives', 'Promoters'], right=False)

# calculate NPS
nps_counts = data['NPS_Category'].value_counts(normalize=True) * 100
nps_score = nps_counts['Promoters'] - nps_counts['Detractors']

nps_counts
```

```
NPS_CategoryDetractors100.0Passives0.0Promoters 0.0Name: proportion, dtype: float64
```
```
-100.0
```


NPS计算显示：

- 诋毁者：100%的客户属于诋毁者类别。
- 被动：0%
- 推广者：0%


这导致NPS得分为-100，这表明客户满意度极低。这个分数是一个关键指标，表明客户服务需要显著改进，才能将诋毁者转变为推动者。

#### 低满意度归因分析


现在，我们将通过识别在特定领域（如产品质量、交货时间、客户服务和网站易用性）导致低评级的关键因素，对客户不满意进行根本原因分析。我们将分析提供低评级的客户的特征，并寻找可以帮助我们理解不满意根源的模式。


我们可以通过识别低评级客户并分析这些客户的特征来执行低评级的根本原因分析。我们将创建产品质量、交货时间、客户服务和网站易用性评级低（1或2）的数据子集：

```
# define low rating threshold
low_rating_threshold = 2

# create subsets for low ratings in different aspects
low_product_quality = data[data['ProductQualityRating'] <= low_rating_threshold]
low_delivery_time = data[data['DeliveryTimeRating'] <= low_rating_threshold]
low_customer_service = data[data['CustomerServiceRating'] <= low_rating_threshold]
low_website_ease_of_use = data[data['WebsiteEaseOfUseRating'] <= low_rating_threshold]

# plot the characteristics for each low rating subset
plt.figure(figsize=(20, 15))

# age distribution for low ratings
plt.subplot(2, 2, 1)
plt.hist([low_product_quality['Age'], low_delivery_time['Age'], low_customer_service['Age'], low_website_ease_of_use['Age']], bins=10, label=['Product Quality', 'Delivery Time', 'Customer Service', 'Website Ease of Use'])
plt.title('Age Distribution for Low Ratings')
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.legend()

# purchase amount distribution for low ratings
plt.subplot(2, 2, 2)
plt.hist([low_product_quality['PurchaseAmount'], low_delivery_time['PurchaseAmount'], low_customer_service['PurchaseAmount'], low_website_ease_of_use['PurchaseAmount']], bins=10, label=['Product Quality', 'Delivery Time', 'Customer Service', 'Website Ease of Use'])
plt.title('Purchase Amount Distribution for Low Ratings')
plt.xlabel('Purchase Amount')
plt.ylabel('Frequency')
plt.legend()

# purchase frequency distribution for low ratings
plt.subplot(2, 2, 3)
plt.hist([low_product_quality['PurchaseFrequency'], low_delivery_time['PurchaseFrequency'], low_customer_service['PurchaseFrequency'], low_website_ease_of_use['PurchaseFrequency']], bins=10, label=['Product Quality', 'Delivery Time', 'Customer Service', 'Website Ease of Use'])
plt.title('Purchase Frequency Distribution for Low Ratings')
plt.xlabel('Purchase Frequency')
plt.ylabel('Frequency')
plt.legend()

# return rate distribution for low ratings
plt.subplot(2, 2, 4)
plt.hist([low_product_quality['ReturnRate'], low_delivery_time['ReturnRate'], low_customer_service['ReturnRate'], low_website_ease_of_use['ReturnRate']], bins=10, label=['Product Quality', 'Delivery Time', 'Customer Service', 'Website Ease of Use'])
plt.title('Return Rate Distribution for Low Ratings')
plt.xlabel('Return Rate')
plt.ylabel('Frequency')
plt.legend()

plt.tight_layout()
plt.show()
```

![root cause analysis](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/07/root-cause-analysis.png?resize=1024%2C767&ssl=1)


直方图表明了对客户满意度不同方面的低评级进行根本原因分析的几个关键见解。给予低评级的客户跨越了广泛的年龄范围，在30-40岁和50-60岁左右有显著的峰值，这表明了与年龄相关的不满趋势。购买量和频率分布揭示了低评级不仅限于低支出者或不经常购买者；即使是高支出者和经常购买者也表达了不满，这表明了服务质量问题。退货率分布显示，较高的退货率与低评级相关，特别是在产品质量和网站易用性方面，这表明了对产品和网站体验的不满。

### 小结


因此，这就是我们如何使用Python执行客户满意度分析。客户满意度分析是收集、分析和解释有关客户对公司产品、服务和整体体验的满意度的数据的过程。


我希望你喜欢这篇关于使用Python进行客户满意度分析的文章。请随时在下面的评论部分提出有价值的问题。您可以在Instagram上关注我以获取更多资源。