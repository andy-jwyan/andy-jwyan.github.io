---
permalink: /
title: "Parole, Humanities, Computing"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## About Me

I am an assistant professor ("Hundred Talents Program") and doctoral supervisor at the School of International Studies, Zhejiang University. My research centers on the quantitative study of human language, combining large-scale corpus methods with frameworks from **Quantitative Linguistics** and **Linguistic Typology**. Empirically, I focus on three interconnected areas: the cross-linguistic patterns of morphology and syntax, the dynamic development of language proficiency in second language learners, and the quantitative practices of **Digital Humanities**. My work has appeared in *Glottometrics*, *Journal of Quantitative Linguistics*, *Natural Language Engineering*, *Studia Linguistica*, *Linguistics Vanguard*, *Digital Scholarship in the Humanities*, and other international venues.

📧 yanjianwei@aliyun.com &nbsp;|&nbsp; 📍 Room East 5-201, Zijingang Campus, Zhejiang University

---

## Research Focus

- Quantitative Linguistics
- Linguistic Typology
- Foreign Language Development & Assessment
- Digital Humanities

---

## Academic Positions

| Period | Position | Institution |
|--------|----------|-------------|
| 2020 – present | Researcher, Hundred Talents Program; Doctoral Supervisor | School of International Studies, Zhejiang University |

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
