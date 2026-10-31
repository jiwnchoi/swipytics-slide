---
marp: true
theme: swipytics
paginate: true
transition: fade 0.25s
size: 16:9
title: Swipytics
footer: 'Swipytics: Leveraging the Short-form Video Stream Metaphor in Exploratory Data Analysis'
---

<!-- _class: title -->

<div class="logo-strip">
<img class="logo-vis" src="assets/vis2026logo.svg" alt="IEEE VIS">
</div>

# <span class="title-highlight">Swipytics:</span> Leveraging the Short-form Video Stream<br>Metaphor in Exploratory Data Analysis

<div class="author-row">
<div class="author"><span class="presenter">Jiwon Choi</span><img src="assets/matchgroup.svg" alt="Match Group AI"></div>
<div class="author"><span>Sehi L'Yi</span><img src="assets/hkust-long.svg" alt="HKUST"></div>
<div class="author"><span>Seojin Kim</span><img src="assets/ncstate-brick-2x2.svg" alt="North Carolina State University"></div>
<div class="author"><span>Jaemin Jo</span><img src="assets/skkusig.svg" alt="Sungkyunkwan University"></div>
</div>

---

<!-- _class: tool-examples -->

![VANAS visual analytics interface](assets/tool1.png) ![Waltzboard visual analytics interface](assets/tool2.png)

<!--
Do you remember the first time you used a visual analytics tool?

You had a dataset in front of you—but before you could explore it, you had to figure out the interface.

Which attributes should you choose? How do you create a chart? And once you have one, what should you explore next?
-->

---

<!-- _class: tool-examples overwhelmed -->

![VANAS visual analytics interface](assets/tool1.png) ![Waltzboard visual analytics interface](assets/tool2.png)

🤯

<!--
For beginners, getting started with data exploration can feel overwhelming.

But what if they could start exploring without first having to learn a complex interface?

What if they could use an interaction they already know?
-->

---

<img src="assets/fig-teaser.png" alt="Swipytics interface showing the Charts, Search, and Likes tabs" style="display: block; max-width: 100%; max-height: 500px; margin: auto; object-fit: contain;">

<!--
We propose Swipytics, a data exploration tool designed to help people learn quickly by building on knowledge they already have.

It draws on the familiar interactions of short-form video platforms, allowing users to explore data by swiping through visualizations.
-->

---

<!-- _class: metaphor -->

<div class="metaphor-comparison">
  <div class="metaphor-side">
    <video class="tiktok-video" src="assets/tiktok-trimmed.mp4" poster="assets/tiktok-poster.jpg" autoplay muted loop playsinline aria-label="TikTok feed scrolling"></video>
    <div class="platform-icons"><img src="assets/icons/tiktok-mark.png" alt="TikTok"><img src="assets/icons/youtube-mark.svg" alt="YouTube"><img src="assets/icons/instagram-official.svg" alt="Instagram Reels"></div>
  </div>
  <div class="metaphor-transfer" aria-label="Knowledge transfer"><div class="metaphor-takeaway">Transfer Knowledge with the <strong>Same Metaphor</strong></div></div>
  <div class="metaphor-side">
    <video class="swipytics-video" src="assets/swipytics-trimmed.mp4" poster="assets/swipytics-poster.jpg" autoplay muted loop playsinline aria-label="Swipytics chart exploration"></video>
    <div class="metaphor-brand">Swipytics</div>
  </div>
</div>


<!--
Swiping and liking are things many people already know from short-form video platforms like TikTok, YouTube, and Instagram Reels.

Swipytics brings this familiar experience into data exploration. Instead of swiping through videos, users swipe through charts.

By using the same metaphor, Swipytics helps users transfer what they already know to a new context.
-->

---

<!-- _class: views overview -->
<!-- _transition: fade 0.25s -->

<div class="views-layout">
  <div class="view-item view-charts"><img class="morph-charts" src="assets/view-charts.png" alt="Charts view"><span>Charts</span></div>
  <div class="view-item view-search"><img class="morph-search" src="assets/view-search.png" alt="Search view"><span>Search</span></div>
  <div class="view-item view-likes"><img src="assets/view-likes.png" alt="Likes view"><span>Likes</span></div>
</div>

<!--
Let’s take a closer look at Swipytics.

Swipytics has three views: Charts, Search, and Likes.

Let’s start with the Charts view.
-->

---

<!-- _class: dr-slide dr-one -->

# <span class="dr-number">DR 1</span> Minimal &amp; Familiar Interactions
<div class="dr-content">
  <div class="dr-pair"><div class="dr-pair-images"><img src="assets/instabrowse-private.png" alt="Instagram Reels browsing"><img class="morph-charts" src="assets/view-charts.png" alt="Swipytics Charts view"></div><div>Swipe &amp; like</div></div>
  <div class="dr-pair"><div class="dr-pair-images"><img src="assets/instasearch.png" alt="Instagram search"><img class="morph-search" src="assets/view-search.png" alt="Swipytics Search view"></div><div>Search by tags</div></div>
</div>

<!--
First, we use minimal and familiar interactions.

In the Charts view, users can swipe to see the next chart and like the ones they find interesting.

In the Search view, users can choose attributes using tags, inspired by hashtag-based search.
-->

---

<!-- _class: dr-slide dr-two -->

# <span class="dr-number">DR 2</span> Simple Charts, at Your Own Pace
<div class="dr-content"><video class="dr-video dr-tiktok-video" src="assets/tiktok-trimmed.mp4" poster="assets/tiktok-poster.jpg" autoplay muted loop playsinline aria-label="TikTok feed scrolling"></video><video class="dr-video dr-swipytics-video" src="assets/swipytics-trimmed.mp4" poster="assets/swipytics-poster.jpg" autoplay muted loop playsinline aria-label="Swipytics chart exploration"></video></div>

<!--
Second, we show simple visualizations at a pace users can control.

In the Charts view, users explore one visualization at a time. They can spend as much time as they need on each chart before moving on.
-->

---

<!-- _class: dr-slide dr-three -->

# <span class="dr-number">DR 3</span> Linear Exploration with History
<div class="dr-content">
  <div class="history-detail"><img src="assets/history-indicator.png" alt="Enlarged chart history indicator"><div>History</div></div>
  <div class="dr-screen dr-charts"><img src="assets/view-charts.png" alt="Charts view and history indicator"><div>Charts</div></div>
  <div class="dr-screen dr-likes"><img src="assets/view-likes.png" alt="Likes view with saved charts"><div>Revisit likes</div></div>
</div>

<!--
Third, we make the exploration sequence linear.

Users move through a sequence of charts, with the history indicator showing their position. The Likes view lets users return to charts they found interesting, so they can revisit what they discovered.
-->

---

<!-- _class: attribute-selection -->

# Chart Recommendation

<div class="recommendation-layout">
  <div class="attribute-criteria">
    <div><strong>Relevance</strong><p>Favors attributes from recent charts.</p></div>
    <div><strong>Preference</strong><p>Favors attributes from liked charts.</p></div>
    <div><strong>Simplicity</strong><p>Favors fewer attributes.</p></div>
    <div><strong>Freshness</strong><p>Favors novelty, allowing revisits later.</p></div>
  </div>
  <div class="recommendation-step"><img src="assets/recommendation-connector.svg" alt="Four criteria combined into a weighted score"><span>Weighted score<br>and chart mapping</span></div>
  <div class="recommended-chart"><img src="assets/recommendation-chart.svg" alt="Illustrative bar chart of counts by origin"></div>
</div>

<!--
Swipytics scores candidate attribute combinations using four weighted criteria.
Relevance favors attributes from recent charts; preference considers liked charts.
Simplicity favors simpler combinations, and freshness balances unseen combinations with revisiting earlier ones.
The highest-scoring combination is then mapped to a suitable chart.
-->

---

<!-- _class: evaluation-slide -->

# Evaluation

<div class="study-overview">
  <div class="study-sections">
    <div><h2>Research Goal</h2><ul><li>Examine <strong>self-learning</strong> and <strong>exploration</strong> with Swipytics.</li></ul></div>
    <div><h2>Study Design</h2><ul><li><strong>14 university students</strong> without visual analysis training</li><li>Self-learning with a <strong>brief tutorial sheet</strong></li><li><strong>15-minute</strong> exploration session on participants’ smartphones (11 distinct iOS/Android devices)</li></ul></div>
  </div>
  <div class="tutorial-sheet"><img src="assets/tutorial-sheet.png" alt="Tutorial sheet explaining Charts, Search, and Likes"><span>Self-learning tutorial sheet</span></div>
</div>

<!--
We conducted an observational study with fourteen university students using their own smartphones.
Participants first learned with the Cars dataset and a brief tutorial sheet, without verbal instruction.
They then explored the Movies dataset without specific tasks; we collected interaction logs, questionnaires, and interviews.
-->

---

<!-- _class: evaluation-slide -->

# Findings

<div class="findings-content">
  <div class="survey-results"><p>High proficiency and confidence after <strong>101 seconds</strong> of self-learning</p><div class="survey-pair"><div><h2>Proficiency</h2><img src="assets/proficiency-plot.svg" alt="Proficiency ratings after self-study and exploration"></div><div><h2>Confidence</h2><img src="assets/confidence-plot.svg" alt="Confidence ratings after self-study and exploration"></div></div><div class="survey-legend"><span>Strongly disagree</span><i></i><i></i><i></i><i></i><i></i><span>Strongly agree</span></div><span>Questionnaire responses · 5-point scale · n = 14</span></div>
</div>

<!--
Self-learning took 101.07 seconds on average. Immediately afterward, participants rated their proficiency and confidence highly on a five-point scale. After exploration, proficiency rose slightly while confidence remained unchanged. These are self-reported ratings, not a comparison against a baseline.
-->

---

<!-- _class: evaluation-slide -->

# Findings: Usability

<div class="survey-results survey-usability"><p>High usability, with a SUS score of <strong>83.75</strong></p><p class="usability-takeaway">Helpful, interpretable charts and easy smartphone use.</p><img src="assets/usability-plot.svg" alt="Responses about chart helpfulness, chart interpretability, and smartphone usability"><div class="survey-legend"><span>Strongly disagree</span><i></i><i></i><i></i><i></i><i></i><span>Strongly agree</span></div><span>Questionnaire responses · 5-point scale · n = 14</span></div>

<!-- Participants rated recommendation helpfulness, chart interpretability, and smartphone usability after exploration. Counts are from the appendix questionnaire figure. -->

---

<!-- _class: evaluation-slide sequence-focus focus-p1 -->

# Findings: Exploration Patterns

<div class="sequence-stage"><div class="sequence-figure"><img class="sequence-overview" src="assets/fig-charts-sequence.png" alt="Exploration sequences for 14 participants"><div class="sequence-highlight" style="left: 48px; top: 7px; width: 515px; height: 53px;"></div><div class="sequence-box"></div></div><div class="sequence-zoom"><div class="sequence-crop"><img src="assets/fig-charts-sequence.png" alt="Enlarged sequence for participant P1"></div></div></div>
<p class="sequence-finding"><strong>Swiping</strong> supported discovery; <strong>Search</strong> enabled targeted follow-up.</p>

<!-- P1 began with Charts and subsequently used Search alongside swiping. -->

---

<!-- _class: evaluation-slide sequence-focus focus-p10 -->

# Findings: Exploration Patterns

<div class="sequence-stage"><div class="sequence-figure"><img class="sequence-overview" src="assets/fig-charts-sequence.png" alt="Exploration sequences for 14 participants"><div class="sequence-highlight" style="left: 48px; top: 155px; width: 730px; height: 22px;"></div><div class="sequence-highlight" style="left: 48px; top: 204px; width: 920px; height: 22px;"></div><div class="sequence-highlight" style="left: 48px; top: 229px; width: 180px; height: 22px;"></div><div class="sequence-box"></div></div><div class="sequence-zoom"><div class="sequence-crop"><img src="assets/fig-charts-sequence.png" alt="Enlarged sequence for participant P10"></div></div></div>
<p class="sequence-finding">Participants followed <strong>different exploration patterns</strong>.</p>

<!-- P10 predominantly used Search, showing that exploration patterns varied. -->

---

<!-- _class: evaluation-slide sequence-focus focus-p4 -->

# Findings: Exploration Patterns

<div class="sequence-stage"><div class="sequence-figure"><img class="sequence-overview" src="assets/fig-charts-sequence.png" alt="Exploration sequences for 14 participants"><div class="sequence-highlight" style="left: 48px; top: 7px; width: 280px; height: 344px;"></div><div class="sequence-box"></div></div><div class="sequence-zoom"><div class="sequence-crop"><img src="assets/fig-charts-sequence.png" alt="Enlarged sequence for participant P4"></div></div></div>
<p class="sequence-finding">A gradual shift to complex charts suggests <strong>paced exploration</strong>.</p>

<!-- The paper reports that participants progressed from simpler to more complex charts; P4 used only the Charts tab. -->

---

<!-- _class: evaluation-slide -->

# Discussion

<div class="discussion-sections">
  <div><h2>Learning <em>Independently</em></h2><p>“I could work independently... without needing someone to explain things to me.”</p></div>
  <div><h2>Familiar <em>Interactions</em></h2><p>Swiping and using Likes felt “similar to what I do in Instagram Reels.”</p></div>
  <div><h2>Requests for <em>Control</em></h2><p>A participant wanted to configure axes manually to better examine correlations.</p></div>
</div>

<!--
A participant appreciated being able to learn independently. Another compared swiping the carousel and using Likes to Instagram Reels. A participant wanted manual axis configuration to examine correlations more closely. Participants also found comparisons between non-adjacent charts challenging.
-->

---

<!-- _class: evaluation-slide -->

# Limitations

<div class="discussion-sections limitations-content">
  <div><h2>Comparative <em>Evaluation</em></h2><p>The study did not compare Swipytics with a baseline system.</p></div>
  <div><h2>Dataset <em>Familiarity</em></h2><p>Exploration of unfamiliar datasets requires further study.</p></div>
</div>

<!--
We did not conduct a comparative evaluation against a baseline system.
The study used a familiar dataset; how the approach works for unfamiliar domains remains an open question.
-->

---

<!-- _class: conclusion-slide -->

# Conclusion

<div class="conclusion-content">
  <p>We bring the <strong>short-form video stream metaphor</strong> to exploratory data analysis.</p>
  <p><em>Swipytics</em> makes exploration <strong>simple, familiar, and self-paced</strong> through swiping, search, and likes.</p>
  <p>Participants reported <strong>high proficiency and confidence</strong> after a brief self-learning period.</p>
  <div class="conclusion-bottom"><div class="conclusion-profile"><img class="conclusion-portrait" src="assets/jiwnchoi.png" alt="Jiwon Choi"><div class="conclusion-contact"><strong>Jiwon Choi</strong><span class="social-line">https://jiwnchoi.me</span><span class="social-line">@jiwnchoi.me <img src="assets/icons/social-bluesky.svg" alt="Bluesky"></span><span class="social-line">@jiwnchoi <img src="assets/icons/social-x.svg" alt="X"><img src="assets/icons/social-instagram.svg" alt="Instagram"><img src="assets/icons/social-linkedin.svg" alt="LinkedIn"><img src="assets/icons/social-github.svg" alt="GitHub"></span></div></div><div class="conclusion-qr"><span>Swipytics on GitHub</span><img src="assets/swipytics-qr.svg" alt="QR code linking to Swipytics on GitHub"></div></div>
</div>

<!--
Swipytics brings the familiar short-form video stream metaphor to exploratory data analysis. It combines swiping, search, and likes to support simple, self-paced exploration. Participants reported high proficiency and confidence after a brief period of self-learning. Thank you.
-->
