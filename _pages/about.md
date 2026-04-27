---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## About Me

I am an assistant professor ("Hundred Talents Program") and doctoral supervisor at the School of International Studies, Zhejiang University. My research centers on the quantitative study of human language, combining large-scale corpus methods with frameworks from **Quantitative Linguistics** and **Linguistic Typology**. Empirically, I focus on three interconnected areas: the cross-linguistic patterns of morphology and syntax, the dynamic development of language proficiency in second language learners, and the quantitative practices of digital humanities. My work has appeared in *Вопросы Языкознания (Voprosy Jazykoznanija)*, *Zeitschrift für romanische Philologie*, *Linguistic Analysis*, *Glottometrics*, *Journal of Quantitative Linguistics*, *International Journal of Applied Linguistics*, *Digital Scholarship in the Humanities*, *Studia Linguistica*, *Linguistics Vanguard*, and other international venues.

**Email**: [yanjianwei@aliyun.com](mailto:yanjianwei@aliyun.com) &nbsp;|&nbsp; [jwyan@zju.edu.cn](mailto:jwyan@zju.edu.cn)

---

## Research Focus

- Quantitative Linguistics
- Linguistic Typology
- Second Language Development
- Digital Humanities

---


## Selected Publications

{% include base_path %}

{% assign sorted_pubs = site.publications | sort: 'date' | reverse %}
{% assign current_year = '' %}

{% for post in sorted_pubs %}
  {% assign post_year = post.date | date: '%Y' %}
  {% if post_year != current_year %}

### {{ post_year }}
  {% assign current_year = post_year %}
  {% endif %}
- {{ post.citation }}
{% endfor %} 


## Collaborators

<div style="margin-top: 0.5rem; font-size: 15px; line-height: 2;">
<a href="https://faculty.fudan.edu.cn/lht">Haitao Liu 刘海涛</a> &nbsp;|&nbsp;
<a href="https://sites.google.com/view/yaqinwang/home">Yaqin Wang 王雅琴</a>
</div>

## Visitor Map

<div style="text-align: center; margin: 1rem 0;">
<script type="text/javascript" id="clustrmaps" src="//clustrmaps.com/map_v2.js?d=aE0a4YPMnH5ParPus0UagRhaqTV8k8joGn8n8j-H9GM&cl=ffffff&w=a"></script>
</div>
