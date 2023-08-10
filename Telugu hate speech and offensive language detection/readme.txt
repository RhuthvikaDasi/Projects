The prevalence of hate speech and offensive language in 
online platforms has raised concerns about maintaining safe and inclusive digital spaces. 
focuses on developing a system to detect such harmful content. 
The dataset used includes features like word count, indicators of hate speech and offensive language, tweet characteristics, and class labels. Machine learning algorithms, including SVMand naive bayes are employed for classification. Evaluation metrics such as precision, recall, F1-score, and accuracy are used to assess the system's performance.
The goal is to create an effective automated detection system that promotes positive interactions and safeguards online communities.

Dataset Details:
The dataset consists of 1500 tweets with the following features:
->   count: number of users who coded each tweet (min is 3).
->	hate_speech: number of users who judged the tweet to be hate speech.
->	offensive_language: number of users who judged the tweet to be offensive language.
->	neither: number of users who judged the tweet to be neither hate speech nor offensive.
->	class: 0-hate speech, 1-offensive language, 2-neither.
->	tweet: raw tweet text.
