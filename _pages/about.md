---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div id="bjclock" style="position:fixed; top:16px; right:16px; z-index:9999; background:#000; border-radius:50%; width:120px; height:120px; border:2px solid #2244cc;">
  <canvas id="roman-clock" width="120" height="120"></canvas>
</div>

<script>
(function(){
  var canvas=document.getElementById('roman-clock');
  var ctx=canvas.getContext('2d');
  var cx=60,cy=60,R=54;
  var roman=['XII','I','II','III','IV','V','VI','VII','VIII','IX','X','XI'];
  var offset=null;

  // 从 worldtimeapi.org 获取北京时间偏移
  fetch('https://worldtimeapi.org/api/timezone/Asia/Shanghai')
    .then(function(r){return r.json();})
    .then(function(d){
      var serverTime=new Date(d.datetime);
      offset=serverTime.getTime()-Date.now();
    })
    .catch(function(){
      // API失败时回退到UTC+8计算
      offset=0;
    });

  function getBeijing(){
    if(offset===null){
      var n=new Date();
      return new Date(n.getTime()+n.getTimezoneOffset()*60000+8*3600000);
    }
    return new Date(Date.now()+offset);
  }

  function draw(){
    var t=getBeijing();
    var h=t.getHours()%12,m=t.getMinutes(),s=t.getSeconds();
    ctx.clearRect(0,0,120,120);
    ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);
    ctx.fillStyle='#000';ctx.fill();
    for(var i=0;i<60;i++){
      var a=(i/60)*Math.PI*2-Math.PI/2,maj=i%5===0;
      ctx.beginPath();
      ctx.moveTo(cx+Math.cos(a)*(R-(maj?9:5)),cy+Math.sin(a)*(R-(maj?9:5)));
      ctx.lineTo(cx+Math.cos(a)*(R-1),cy+Math.sin(a)*(R-1));
      ctx.strokeStyle=maj?'#ccc':'rgba(180,180,180,0.35)';
      ctx.lineWidth=maj?1.5:0.8;ctx.stroke();
    }
    ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#fff';
    for(var j=0;j<12;j++){
      var ang=(j/12)*Math.PI*2-Math.PI/2;
      var lbl=roman[j],fs=(lbl==='XII'||lbl==='VIII')?5.5:lbl.length===3?6.5:8.5;
      ctx.font=fs+'px serif';
      ctx.fillText(lbl,cx+Math.cos(ang)*(R-14),cy+Math.sin(ang)*(R-14));
    }
    function hand(deg,len,w,col){
      ctx.save();ctx.translate(cx,cy);ctx.rotate((deg-90)*Math.PI/180);
      ctx.lineCap='round';ctx.strokeStyle=col;ctx.lineWidth=w;
      ctx.beginPath();ctx.moveTo(0,len*0.18);ctx.lineTo(0,-len);ctx.stroke();ctx.restore();
    }
    hand(h*30+m*0.5+s*(0.5/60),R*0.50,3,'#fff');
    hand(m*6+s*0.1,R*0.70,2,'#fff');
    hand(s*6,R*0.78,1.2,'#e03030');
    ctx.beginPath();ctx.arc(cx,cy,3,0,Math.PI*2);ctx.fillStyle='#e03030';ctx.fill();
    ctx.beginPath();ctx.arc(cx,cy,1.5,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();
  }
  draw();setInterval(draw,1000);
})();
</script>

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


## Academic Network

<div style="margin-top: 0.5rem; font-size: 15px; line-height: 2;">
<a href="https://faculty.fudan.edu.cn/lht">Haitao Liu 刘海涛</a> &nbsp;|&nbsp;
<a href="https://sites.google.com/view/yaqinwang/home">Yaqin Wang 王雅琴</a> &nbsp;|&nbsp;
<a href="https://www.yuyanxue.net/">Xinying Chen 陈芯莹</a> &nbsp;|&nbsp;
<a href="https://miroslavkubat.webnode.cz/">Miroslav Kubát</a> 
</div>
