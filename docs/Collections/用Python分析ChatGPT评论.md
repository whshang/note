---
title: "ChatGPT Reviews Analysis with Python | Aman Kharwal"
source: "https://thecleverprogrammer.com/2024/08/26/chatgpt-reviews-analysis-with-python/"
author:
- "[[Aman Kharwal]]"
published: 2024-08-26
created: 2024-12-24
description: "In this article, I'll take you through the task of ChatGPT reviews analysis with Python, which will help us understand analyzing reviews."
tags:
- "clippings"
---
- 本文介绍了如何使用 Python 分析 ChatGPT 的用户评论，以了解用户对该工具的看法。
- 通过情感分析，文章发现大多数用户对 ChatGPT 持积极态度，但也存在一些负面反馈。
- 文章还深入探讨了用户喜欢和不喜欢 ChatGPT 的方面，以及随着时间的推移用户情绪的变化。
---
分析评论是改善您的产品或服务的最佳数据驱动策略之一。它有助于了解人们对您的产品的看法，他们不喜欢它的地方，以及他们对它的期望。因此，如果您想了解如何分析评论以了解人们对您的产品的看法，本文适合您。在本文中，我将带您完成使用Python进行ChatGPT评论分析的任务，这将帮助我们了解如何分析评论以了解人们对ChatGPT的看法。


我用来分析ChatGPT评论的数据集由ChatGPT的用户评论组成，包括文本反馈、评分和评论日期。您可以从这里下载数据集。


让我们通过导入必要的Python库和数据集来开始这项任务：

```
import pandas as pd
import plotly.graph_objects as go
from sklearn.feature_extraction.text import CountVectorizer
from collections import Counter
import plotly.express as px
import plotly.io as pio
pio.templates.default = "plotly_white"

# load the dataset
df = pd.read_csv("chatgpt_reviews.csv")

df.head()
```

![data for chatgpt reviews analysis](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/08/image-7.png?resize=1024%2C232&ssl=1)


让我们看看数据集是否有空值：

![null values in the dataset](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/08/image-8.png?resize=260%2C310&ssl=1)


数据集在评论列中有一些空值。我将用空字符串替换所有空值，以便空值不会影响分析：

```
df['Review'] = df['Review'].astype(str).fillna('')
```


现在，为了进一步进行，我们将根据评论内容添加情感标签。我们将使用Python中的text blob库来执行此任务：

```
from textblob import TextBlob

# function to determine sentiment polarity
def get_sentiment(review):
sentiment = TextBlob(review).sentiment.polarity
if sentiment > 0:
return 'Positive'
elif sentiment < 0:
return 'Negative'
else:
return 'Neutral'

# apply sentiment analysis
df['Sentiment'] = df['Review'].apply(get_sentiment)

sentiment_distribution = df['Sentiment'].value_counts()
```


现在，让我们看看正面、中性和负面评论的分布：

```
fig = go.Figure(data=[go.Bar(
x=sentiment_distribution.index,
y=sentiment_distribution.values,
marker_color=['green', 'gray', 'red'],
)])

fig.update_layout(
title='Sentiment Distribution of ChatGPT Reviews',
xaxis_title='Sentiment',
yaxis_title='Number of Reviews',
width=800,
height=600
)

fig.show()
```

![Sentiment Distribution of ChatGPT Reviews](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/08/chatgpt-reviews-1.png?resize=800%2C600&ssl=1)


大多数评论是正面的，较小比例是中性或负面的。这表明大多数用户对ChatGPT有好感，尽管仍有大量中性和负面评论。

#### 分析用户喜欢ChatGPT


为了分析用户喜欢ChatGPT什么，我将专注于从带有积极情绪的评论中提取常见短语和关键字。这将有助于识别用户欣赏的重复主题或功能。


我将继续以下步骤：

1. 过滤有积极情绪的评论。
2. 从这些好评中提取和分析最常见的短语和关键词。

```
# filter reviews with positive sentiment
positive_reviews = df[df['Sentiment'] == 'Positive']['Review']

# use CountVectorizer to extract common phrases (n-grams)
vectorizer = CountVectorizer(ngram_range=(2, 3), stop_words='english', max_features=100)
X = vectorizer.fit_transform(positive_reviews)

# sum the counts of each phrase
phrase_counts = X.sum(axis=0)
phrases = vectorizer.get_feature_names_out()
phrase_freq = [(phrases[i], phrase_counts[0, i]) for i in range(len(phrases))]

# sort phrases by frequency
phrase_freq = sorted(phrase_freq, key=lambda x: x[1], reverse=True)

phrase_df = pd.DataFrame(phrase_freq, columns=['Phrase', 'Frequency'])

fig = px.bar(phrase_df,
 x='Frequency',
 y='Phrase',
 orientation='h',
 title='Top Common Phrases in Positive Reviews',
 labels={'Phrase': 'Phrase', 'Frequency': 'Frequency'},
 width=1000,
 height=600)

fig.update_layout(
xaxis_title='Frequency',
yaxis_title='Phrase',
yaxis={'categoryorder':'total ascending'}
)

fig.show()
```

![Top Common Phrases in Positive Reviews](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/08/chatgpt-reviews-2.png?resize=1000%2C600&ssl=1)


可视化强调用户欣赏ChatGPT是一个“伟大的应用程序”，“惊人的应用程序”、“人工智能应用程序”和“优秀的应用程序”等短语经常在好评中被提及。用户发现它“有用”、“用户友好”，对学生有帮助，许多人称赞它的人工智能功能。此外，该应用程序有效回答问题的能力及其免费版本也受到用户的重视。


这些观点表明，ChatGPT因其可用性、教育益处和人工智能功能而受到高度重视。

#### 分析用户不喜欢ChatGPT


同样，为了分析用户不喜欢ChatGPT什么，我将专注于从负面情绪的评论中提取常见短语和关键字。这将有助于识别用户不满意的反复出现的问题或功能。

我将继续：

1. 过滤带有负面情绪的评论。
2. 从这些负面评论中提取和分析最常见的短语和关键词。

```
# filter reviews with negative sentiment
negative_reviews = df[df['Sentiment'] == 'Negative']['Review']

# use CountVectorizer to extract common phrases (n-grams) for negative reviews
X_neg = vectorizer.fit_transform(negative_reviews)

# sum the counts of each phrase in negative reviews
phrase_counts_neg = X_neg.sum(axis=0)
phrases_neg = vectorizer.get_feature_names_out()
phrase_freq_neg = [(phrases_neg[i], phrase_counts_neg[0, i]) for i in range(len(phrases_neg))]

# sort phrases by frequency
phrase_freq_neg = sorted(phrase_freq_neg, key=lambda x: x[1], reverse=True)

phrase_neg_df = pd.DataFrame(phrase_freq_neg, columns=['Phrase', 'Frequency'])

fig = px.bar(phrase_neg_df,
 x='Frequency',
 y='Phrase',
 orientation='h',
 title='Top Common Phrases in Negative Reviews',
 labels={'Phrase': 'Phrase', 'Frequency': 'Frequency'},
 width=1000,
 height=600)

fig.update_layout(
xaxis_title='Frequency',
yaxis_title='Phrase',
yaxis={'categoryorder':'total ascending'}
)

fig.show()
```

![Top Common Phrases in Negative Reviews](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/08/chatgpt-reviews-3.png?resize=1000%2C600&ssl=1)


可视化显示，用户对ChatGPT的主要抱怨包括它被贴上“坏应用”或“无用应用”的标签，负面评论中经常提到“不起作用”、“发生错误”和“网络错误”等问题。用户还对不正确或误导性的答案、“错误消息”等技术问题以及难以使用“语音聊天”等特定功能表示沮丧。


这些问题表明用户对应用程序的可靠性、准确性和整体性能不满意。

#### ChatGPT用户面临的常见问题


为了分析人们在ChatGPT中面临的常见问题，我将关注负面评论中常见的短语和关键词。我将把这些短语分类到更广泛的问题领域，然后想象最常见的问题。让我们继续前进：

```
# grouping similar phrases into broader problem categories
problem_keywords = {
'Incorrect Answers': ['wrong answer', 'gives wrong', 'incorrect', 'inaccurate', 'wrong'],
'App Performance': ['slow', 'lag', 'crash', 'bug', 'freeze', 'loading', 'glitch', 'worst app', 'bad app', 'horrible', 'terrible'],
'User Interface': ['interface', 'UI', 'difficult to use', 'confusing', 'layout'],
'Features Missing/Not Working': ['feature missing', 'not working', 'missing', 'broken', 'not available'],
'Quality of Responses': ['bad response', 'useless', 'poor quality', 'irrelevant', 'nonsense']
}

# initialize a dictionary to count problems
problem_counts = {key: 0 for key in problem_keywords.keys()}

# count occurrences of problem-related phrases in negative reviews
for phrase, count in phrase_freq_neg:
for problem, keywords in problem_keywords.items():
if any(keyword in phrase for keyword in keywords):
problem_counts[problem] += count
break

problem_df = pd.DataFrame(list(problem_counts.items()), columns=['Problem', 'Frequency'])

fig = px.bar(problem_df,
 x='Frequency',
 y='Problem',
 orientation='h', 
 title='Common Problems Faced by Users in ChatGPT',
 labels={'Problem': 'Problem', 'Frequency': 'Frequency'},
 width=1000,
 height=600)

fig.update_layout(
plot_bgcolor='white',
paper_bgcolor='white', 
xaxis_title='Frequency',
yaxis_title='Problem',
yaxis={'categoryorder':'total ascending'}
)

fig.show()
```

![Common Problems Faced by Users in ChatGPT](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/08/chatgpt-reviews-4.png?resize=1000%2C600&ssl=1)


可视化显示，用户在ChatGPT中面临的最常见问题是收到“错误答案”，这是最常见的问题，差距很大。其他值得注意的问题包括“应用性能”，用户在应用功能上遇到问题，以及对“响应质量”的担忧。


这些发现表明了可以改进的领域，以提高ChatGPT的用户体验。

#### 
分析评论如何随时间变化


现在我们来分析一下评论的趋势，要分析评论随着时间的推移是如何变化的，我将：

1. 随着时间的推移，根据他们的情绪（积极、中立、消极）汇总评论。
2. 可视化每种情绪类型的成交量随时间的变化趋势。

```
# convert 'Review Date' to datetime format
df['Review Date'] = pd.to_datetime(df['Review Date'])

# aggregate sentiment counts by date
sentiment_over_time = df.groupby([df['Review Date'].dt.to_period('M'), 'Sentiment']).size().unstack(fill_value=0)

# convert the period back to datetime for plotting
sentiment_over_time.index = sentiment_over_time.index.to_timestamp()

fig = go.Figure()

fig.add_trace(go.Scatter(x=sentiment_over_time.index, y=sentiment_over_time['Positive'],
 mode='lines', name='Positive', line=dict(color='green')))
fig.add_trace(go.Scatter(x=sentiment_over_time.index, y=sentiment_over_time['Neutral'],
 mode='lines', name='Neutral', line=dict(color='gray')))
fig.add_trace(go.Scatter(x=sentiment_over_time.index, y=sentiment_over_time['Negative'],
 mode='lines', name='Negative', line=dict(color='red')))

fig.update_layout(
title='Sentiment Trends Over Time',
xaxis_title='Date',
yaxis_title='Number of Reviews',
plot_bgcolor='white',
paper_bgcolor='white',
legend_title_text='Sentiment',
xaxis=dict(showgrid=True, gridcolor='lightgray'), 
yaxis=dict(showgrid=True, gridcolor='lightgray')
)

fig.show()
```

![Sentiment Trends Over Time](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2024/08/chatgpt-reviews-5.png?resize=1024%2C465&ssl=1)


可视化显示，ChatGPT的好评（绿线）数量随着时间的推移普遍增加，在2024年3月左右开始明显上升，在2024年5月达到顶峰，然后在2024年7月略有下降。


中性评论（灰色线）也显示随着时间的推移逐渐增加，在2024年5月左右达到明显的峰值。


负面评价（红线）在整个期间保持相对稳定和低水平，这表明虽然随着时间的推移，越来越多的用户分享他们的体验，但总体情绪基本上是积极的，负面反馈的增加稳定但微乎其微。

#### 分析用户推广ChatGPT的频率


现在，为了完成ChatGPT评论分析的任务，我们将分析用户推广ChatGPT的频率。我们将在这里使用净推荐值的概念。净推荐值（NPS）是一个常用的指标，通过询问用户推荐产品或服务的可能性来衡量客户满意度和忠诚度。通常，NPS是根据对以下问题的回答来计算的：“你向朋友或同事推荐我们产品的可能性有多大？”从0到10。以下是NPS的计算方法：

- 发起人：提供9分或10分的受访者。
- 被动：提供7分或8分的受访者。
- 批评者：提供0到6分的受访者。

> **
> NPS=%发起人−%诋毁者**


鉴于可用数据，我假设给应用程序评分5星的用户是推广者，给它评分4星的用户是被动者，给它评分3星或以下的用户是诋毁者。让我们根据这个假设计算NPS：

```
# define the categories based on the ratings
df['NPS Category'] = df['Ratings'].apply(lambda x: 'Promoter' if x == 5 else ('Passive' if x == 4 else 'Detractor'))

# calculate the percentage of each category
nps_counts = df['NPS Category'].value_counts(normalize=True) * 100

# calculate NPS
nps_score = nps_counts.get('Promoter', 0) - nps_counts.get('Detractor', 0)

# display the NPS Score
nps_score
```

```
64.35313912172705
```


根据数据集提供的评分，ChatGPT的净推荐值约为64.35。这表明用户很有可能向他人推荐ChatGPT，因为分数超过50通常被认为是优秀的。

### 小结


所以，这就是如何分析产品或服务的评论。分析评论是改进产品或服务的最佳数据驱动策略之一。它有助于了解人们对你的产品的看法，他们不喜欢它的什么，以及他们对它的期望。我希望你喜欢这篇关于用Python分析ChatGPT评论的文章。请随时在下面的评论部分提出有价值的问题。你可以在Instagram上关注我以获取更多资源。