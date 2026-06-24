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

## Clock

<div style="float: right; clear: right; margin: -280px 0 1rem 2rem; text-align: center;">
  <canvas id="clock" width="150" height="150" style="border-radius:50%;"></canvas>
  <p id="dig" style="font-size:13px; margin:6px 0 2px; font-weight:500; font-variant-numeric: tabular-nums;"></p>
  <p style="font-size:11px; color:#888; margin:0;">UTC+8 · Hangzhou</p>
</div>

<script>
(function(){
  var cv=document.getElementById('clock'),ctx=cv.getContext('2d'),dg=document.getElementById('dig');
  function draw(){
    var now=new Date(),h=now.getUTCHours()+8,m=now.getMinutes(),s=now.getSeconds();
    ctx.clearRect(0,0,150,150);
    ctx.beginPath();ctx.arc(75,75,73,0,Math.PI*2);ctx.fillStyle='#f8f8f6';ctx.fill();
    ctx.strokeStyle='#ccc';ctx.lineWidth=2;ctx.stroke();
    for(var i=0;i<60;i++){var a=(i/60)*Math.PI*2-Math.PI/2,maj=i%5===0,r1=maj?61:68;
      ctx.beginPath();ctx.moveTo(75+Math.cos(a)*r1,75+Math.sin(a)*r1);
      ctx.lineTo(75+Math.cos(a)*70,75+Math.sin(a)*70);
      ctx.strokeStyle=maj?'#333':'#bbb';ctx.lineWidth=maj?2:1;ctx.stroke();}
    [12,1,2,3,4,5,6,7,8,9,10,11].forEach(function(n,i){
      var a=(i/12)*Math.PI*2-Math.PI/2;
      ctx.fillStyle='#333';ctx.font='10px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillText(n,75+Math.cos(a)*54,75+Math.sin(a)*54);});
    function hand(ang,len,w,c){ctx.beginPath();ctx.moveTo(75,75);
      ctx.lineTo(75+Math.cos(ang)*len,75+Math.sin(ang)*len);
      ctx.strokeStyle=c;ctx.lineWidth=w;ctx.lineCap='round';ctx.stroke();}
    hand(((h%12+m/60)/12)*Math.PI*2-Math.PI/2,38,4,'#222');
    hand(((m+s/60)/60)*Math.PI*2-Math.PI/2,55,2.5,'#444');
    hand((s/60)*Math.PI*2-Math.PI/2,60,1.5,'#c0392b');
    ctx.beginPath();ctx.arc(75,75,4,0,Math.PI*2);ctx.fillStyle='#c0392b';ctx.fill();
    ctx.beginPath();ctx.arc(75,75,2,0,Math.PI*2);ctx.fillStyle='#222';ctx.fill();
    var hh=String(h%24).padStart(2,'0'),mm=String(m).padStart(2,'0'),ss=String(s).padStart(2,'0');
    dg.textContent=hh+':'+mm+':'+ss;
  }
  draw();setInterval(draw,1000);
})();
</script>

## Academic Network

<div style="margin-top: 0.5rem; font-size: 15px; line-height: 2;">
<a href="https://faculty.fudan.edu.cn/lht">Haitao Liu 刘海涛</a> &nbsp;|&nbsp;
<a href="https://sites.google.com/view/yaqinwang/home">Yaqin Wang 王雅琴</a> &nbsp;|&nbsp;
<a href="https://www.yuyanxue.net/">Xinying Chen 陈芯莹</a> &nbsp;|&nbsp;
<a href="https://miroslavkubat.webnode.cz/">Miroslav Kubát</a> 
</div>
