---
permalink: /
title: "Parole, Humanities, Computing"
author_profile: true
right_sidebar: true
redirect_from:
  - /about/
  - /about.html
---


## About Me 

I am an assistant professor at the School of International Studies, Zhejiang University. My research centers on the quantitative study of human language, combining large-scale corpus methods with frameworks from **Quantitative Linguistics** and **Linguistic Typology**. Empirically, I focus on three interconnected areas: the cross-linguistic patterns of morphology and syntax, the dynamic development of language proficiency in second language learners, and the quantitative practices of digital humanities. My work has appeared in *Вопросы Языкознания (Voprosy Jazykoznanija)*, *Zeitschrift für romanische Philologie*, *Linguistic Analysis*, *Glottometrics*, *Journal of Quantitative Linguistics*, *International Journal of Applied Linguistics*, *Digital Scholarship in the Humanities*, *Studia Linguistica*, *Linguistics Vanguard*, and other international venues. 

**Email**: <yanjianwei@aliyun.com> ; <jwyan@zju.edu.cn>

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

## Visitor Map

<script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=LNIUrJkXLOr42Zn-9w_jkjPK2QNi4QXVQfGGk3ju-0I&cl=ffffff&w=a"></script>
