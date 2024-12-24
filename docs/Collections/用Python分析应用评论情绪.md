---
title: "App Reviews Sentiment Analysis using Python | Aman Kharwal"
source: "https://thecleverprogrammer.com/2023/12/04/app-reviews-sentiment-analysis-using-python/"
author:
  - "[[Aman Kharwal]]"
published: 2023-12-04
created: 2024-12-24
description: "In this article, I'll take you through the task of App Reviews Sentiment Analysis using Python. App Reviews Sentiment Analysis using Python."
tags:
  - "clippings"
---
- 本文介绍了如何使用Python进行应用评论的情绪分析。
- 它涵盖了数据收集、探索性数据分析、情绪标记以及结果的可视化。
- 文章使用TextBlob库进行情绪分析，并使用词云来识别每个情绪类别中的常见词。

---
应用评论情绪分析意味着评估和理解移动应用（app）的用户评论中表达的情绪。它涉及使用数据分析技术来确定这些评论中的情绪是积极的、消极的还是中性的。如果你想学习如何分析任何应用的评论的情绪，这篇文章适合你。在这篇文章中，我将带你完成使用Python进行应用评论情绪分析的任务。

##   
应用评论情绪分析：我们可以遵循的过程

  
应用评论情绪分析是应用程序开发人员和企业了解用户反馈、优先考虑功能更新和维护积极用户社区的宝贵工具。

  
以下是我们可以遵循的应用评论情感分析任务流程：

1. 第一步是收集应用评论数据集。
2. 然后，通过分析评论的长度及其评级等来执行EDA。
3. 然后，使用Textblob或NLTK等工具标记情绪数据。
4. 了解数据集中情绪（积极、消极、中性）的整体分布。
5. 探索情绪和给出的评级之间的关系。
6. 分析评论的文本，以确定不同情感类别中的共同主题或词语。

  
因此，该过程从收集应用评论数据集开始。我为这项任务找到了一个理想的数据集。您可以从这里下载数据集。

  
现在，让我们通过导入必要的Python库和数据集来开始应用评论情感分析的任务：

```
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load the dataset
linkedin_data = pd.read_csv("linkedin reviews.csv")

# Display the first few rows of the dataset
print(linkedin_data.head())
```

```
                                              Review  Rating  
0  Does absolutely nothing for a LinkedIn beginne...       1  
1                            Force close(galaxy tab)       1  
2  Slow and it tries to upload your contacts with...       1  
3  Add ability to customize the profile and move ...       4  
4  Good app, but it's a pain that it's not possib...       4
```

  
该数据集包含两列：评论和评级。评论列由文本评论组成，评级列包含相应的数字评级。

  
让我们看看专栏信息：

```
print(linkedin_data.info())
```

```
<class 'pandas.core.frame.DataFrame'>  
RangeIndex: 702 entries, 0 to 701  
Data columns (total 2 columns):  
 #   Column  Non-Null Count  Dtype   
---  ------  --------------  -----   
 0   Review  702 non-null    object  
 1   Rating  702 non-null    int64   
dtypes: int64(1), object(1)  
memory usage: 11.1+ KB  
None
```

####   
探索性数据分析

  
现在，让我们逐步探索这些数据。我们将从分析评级的分布开始。它将提供对评论整体情绪的洞察。然后，我们可以进一步探索，比如分析评论的长度，并可能从评论的文本中获得见解。

  
让我们从评级分布开始：

```
# Plotting the distribution of ratings
sns.set(style="whitegrid")
plt.figure(figsize=(9, 5))
sns.countplot(data=linkedin_data, x='Rating')
plt.title('Distribution of Ratings')
plt.xlabel('Rating')
plt.ylabel('Count')
plt.show()
```

![App Reviews Sentiment Analysis: Distribution of Ratings](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2023/12/App-reviews-sentiments-1.png?resize=783%2C479&ssl=1)

  
这是LinkedIn评论数据集的评分分布。如您所见，它清楚地显示了每个评级类别中有多少评论（从1到5）。

  
接下来，我们将分析评论的长度，因为这有时与反馈的情绪或细节相关。我们将首先计算每个评论的长度，然后可视化数据：

```
# Calculating the length of each review
linkedin_data['Review Length'] = linkedin_data['Review'].apply(len)

# Plotting the distribution of review lengths
plt.figure(figsize=(9, 6))
sns.histplot(linkedin_data['Review Length'], bins=50, kde=True)
plt.title('Distribution of Review Lengths')
plt.xlabel('Length of Review')
plt.ylabel('Count')
plt.show()
```

![App User Sentiment Analysis: Distribution of Review Lengths](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2023/12/App-reviews-sentiments-2.png?resize=783%2C556&ssl=1)

####   
在数据中添加情绪标签

  
现在，下一步是用情绪标记数据。我们可以使用Textblob来完成这项任务。TextBlob为给定的文本提供从-1（非常负）到1（非常正）的极性分数。我们可以使用此分数将每个评论的情绪分类为正面、中性或负面。您可以通过在终端或命令提示符中执行下面提到的pip命令来安装它：

- **pip安装text blob**

  
让我们继续使用TextBlob标记数据集进行情感分析：

```
from textblob import TextBlob

def textblob_sentiment_analysis(review):
    # Analyzing the sentiment of the review
    sentiment = TextBlob(review).sentiment
    # Classifying based on polarity
    if sentiment.polarity > 0.1:
        return 'Positive'
    elif sentiment.polarity < -0.1:
        return 'Negative'
    else:
        return 'Neutral'

# Applying TextBlob sentiment analysis to the reviews
linkedin_data['Sentiment'] = linkedin_data['Review'].apply(textblob_sentiment_analysis)

# Displaying the first few rows with the sentiment
print(linkedin_data.head())
```

```
                                              Review  Rating  Review Length  \  
0  Does absolutely nothing for a LinkedIn beginne...       1             80     
1                            Force close(galaxy tab)       1             23     
2  Slow and it tries to upload your contacts with...       1             61     
3  Add ability to customize the profile and move ...       4             90     
4  Good app, but it's a pain that it's not possib...       4            133     
  
  Sentiment    
0  Negative    
1   Neutral    
2  Negative    
3   Neutral    
4  Positive
```

  
该数据集现在包括每个评论的情绪标签，根据TextBlob计算的极性分数分类为正面、负面或中性。

####   
分析应用评论情绪

  
现在我们的数据集已标记，让我们执行应用评论情感分析。我们将首先分析整个数据集的情绪分布。它将让我们对评论中的一般情绪趋势有一个基本的了解：

```
# Analyzing the distribution of sentiments
sentiment_distribution = linkedin_data['Sentiment'].value_counts()

# Plotting the distribution of sentiments
plt.figure(figsize=(9, 5))
sns.barplot(x=sentiment_distribution.index, y=sentiment_distribution.values)
plt.title('Distribution of Sentiments')
plt.xlabel('Sentiment')
plt.ylabel('Count')
plt.show()
```

![App User Sentiment Analysis: Distribution of Sentiments](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2023/12/App-reviews-sentiments-3.png?resize=783%2C479&ssl=1)

  
因此，我们可以看到，虽然该应用程序的评分很低，但评论者仍然没有在该应用程序的评论中使用很多负面词。

  
接下来，我们将探讨情绪和评级之间的关系。这种分析可以帮助我们理解文本的情绪和数字评级之间是否存在相关性。对于这个任务，我们可以看到情绪是如何分布在不同的评级级别上的：

```
plt.figure(figsize=(10, 5))
sns.countplot(data=linkedin_data, x='Rating', hue='Sentiment')
plt.title('Sentiment Distribution Across Ratings')
plt.xlabel('Rating')
plt.ylabel('Count')
plt.legend(title='Sentiment')
plt.show()
```

![Sentiment Distribution Across Ratings](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2023/12/App-reviews-sentiments-4.png?resize=860%2C479&ssl=1)

  
现在，让我们执行文本分析以识别每个情感类别中的常用词或主题。它包括使用单词云检查正面、负面和中性评论中最常见的单词：

```
from wordcloud import WordCloud

# Function to generate word cloud for each sentiment
def generate_word_cloud(sentiment):
    text = ' '.join(review for review in linkedin_data[linkedin_data['Sentiment'] == sentiment]['Review'])
    wordcloud = WordCloud(width=800, height=400, background_color ='white').generate(text)
    plt.figure(figsize=(10, 5))
    plt.imshow(wordcloud, interpolation='bilinear')
    plt.title(f'Word Cloud for {sentiment} Reviews')
    plt.axis('off')
    plt.show()

# Generating word clouds for each sentiment
for sentiment in ['Positive', 'Negative', 'Neutral']:
    generate_word_cloud(sentiment)
```

![word cloud for positive reviews](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2023/12/App-reviews-sentiments-5.png?resize=790%2C427&ssl=1)

![word cloud for negative reviews](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2023/12/App-reviews-sentiments-6.png?resize=790%2C427&ssl=1)

![word cloud for neutral reviews](https://i0.wp.com/thecleverprogrammer.com/wp-content/uploads/2023/12/App-reviews-sentiments-7.png?resize=790%2C427&ssl=1)

  
因此，这就是使用Python执行评论情绪分析的方式。

###   小结

  
因此，应用评论情绪分析是应用程序开发人员和企业了解用户反馈、优先考虑功能更新和维护积极用户社区的宝贵工具。它涉及使用数据分析技术来确定这些评论中的情绪是积极的、消极的还是中性的。我希望你喜欢这篇关于使用Python进行应用评论情绪分析的文章。请随时在下面的评论部分提出有价值的问题。