---
marp: true
theme: swipytics
paginate: true
transition: fade 0.25s
size: 16:9
title: Swipytics
footer: Swipytics · Short-form Video Stream Metaphor for EDA
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

<div></div>

<!--
Do you remember the first time you used a visual analytics tool?

You had a dataset in front of you—but before you could explore it, you had to figure out the interface.

Which attributes should you choose? How do you create a chart? And once you have one, what should you explore next?
-->

---

<div></div>

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
    <div class="platform-icons"><img src="assets/icons/tiktok-mark.png" alt="TikTok"><img src="assets/icons/youtube-mark.svg" alt="YouTube"><img src="assets/icons/instagram-official.svg" alt="Instagram Reels"></div>
    <div class="metaphor-phone video-phone"><div class="video-scene"><div class="video-sun"></div><div class="video-hill"></div><div class="video-play">▶</div></div><div class="phone-caption">Swipe through videos</div></div>
    <div class="metaphor-label">A familiar interaction</div>
  </div>
  <div class="metaphor-transfer" aria-label="Knowledge transfer"></div>
  <div class="metaphor-side">
    <div class="metaphor-brand">Swipytics</div>
    <div class="metaphor-phone chart-phone"><div class="chart-screen"></div><div class="phone-caption">Swipe through charts</div></div>
    <div class="metaphor-label">A new context</div>
  </div>
</div>

<div class="metaphor-takeaway">Transfer what users already know to data exploration.</div>

<!--
Swiping and liking are things many people already know from short-form video platforms like TikTok, YouTube, and Instagram Reels.

Swipytics brings this familiar experience into data exploration. Instead of swiping through videos, users swipe through charts.

By using the same metaphor, Swipytics helps users transfer what they already know to a new context.
-->
