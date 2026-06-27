---
title: "Yan's Lab"
permalink: /lab/
layout: single
author_profile: false
right_sidebar: false
classes: wide
---

<div class="lab-section">

## Lab Members

<div class="lab-member">
  <img src="{{ '/images/lab/member-placeholder-1.jpg' | relative_url }}" alt="Member photo" class="lab-member__photo">
  <div class="lab-member__bio">
    <p><strong>[Member Name] / [中文姓名]</strong> is a PhD student at the Department of Linguistics, Zhejiang University. [He/She] joined the lab in [Year] under the supervision of Professor Jianwei Yan. [His/Her] research interests focus on [research area 1] and [research area 2].</p>
    <p><a href="#">ResearchGate</a> &middot; <a href="#">Google Scholar</a> &middot; <a href="#">CV</a></p>
  </div>
</div>

<div class="lab-member">
  <img src="{{ '/images/lab/member-placeholder-2.jpg' | relative_url }}" alt="Member photo" class="lab-member__photo">
  <div class="lab-member__bio">
    <p><strong>[Member Name] / [中文姓名]</strong> is a master's student at the Department of Linguistics, Zhejiang University. [He/She] joined the lab in [Year] under the supervision of Professor Jianwei Yan. [His/Her] research interests include [research area 1] and [research area 2].</p>
    <p><a href="#">ResearchGate</a> &middot; <a href="#">Google Scholar</a></p>
  </div>
</div>

</div>

<div class="lab-section">

## Lab Alumni

<div class="lab-member">
  <img src="{{ '/images/lab/alumni-placeholder-1.jpg' | relative_url }}" alt="Alumni photo" class="lab-member__photo">
  <div class="lab-member__bio">
    <p><strong>[Alumni Name] / [中文姓名]</strong> completed [his/her] [PhD/Master's] degree at the Department of Linguistics, Zhejiang University in [Year], under the supervision of Professor Jianwei Yan. [He/She] is now [current position/affiliation].</p>
  </div>
</div>

<div class="lab-member">
  <img src="{{ '/images/lab/alumni-placeholder-2.jpg' | relative_url }}" alt="Alumni photo" class="lab-member__photo">
  <div class="lab-member__bio">
    <p><strong>[Alumni Name] / [中文姓名]</strong> completed [his/her] [PhD/Master's] degree at the Department of Linguistics, Zhejiang University in [Year], under the supervision of Professor Jianwei Yan. [He/She] is now [current position/affiliation].</p>
  </div>
</div>

</div>

<style>
  .lab-section {
    margin-bottom: 2.5em;
  }
  .lab-member {
    display: flex;
    gap: 1.5em;
    align-items: flex-start;
    margin-bottom: 2em;
  }
  .lab-member__photo {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .lab-member__bio p {
    margin: 0 0 0.6em;
    line-height: 1.7;
  }
  @media (max-width: 600px) {
    .lab-member {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  }
</style>
