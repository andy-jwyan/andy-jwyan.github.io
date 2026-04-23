var addressPoints = [
  [
    "The Trade-off Relation Between Morphological and Syntactic Complexity in Romance Languages<br />The International Workshop on Corpus and Computational Linguistics, University of Ostrava; Czech Republic",
    49.7439047,
    15.3381061
  ],
  [
    "Discourse Markers' Role in Syntactic Complexity of Sentence Structure: A Distance-Driven Quantitative Case Study Based on Ted Talks<br />QUALICO 2023 (12th International Quantitative Linguistics Conference), University of Lausanne; Lausanne, Switzerland",
    46.5218269,
    6.6327025
  ],
  [
    "\u8ba1\u91cf\u8bed\u8a00\u5b66\u4e0e\u7ffb\u8bd1\u7814\u7a76<br />\"\u6c42\u662f\"\u8bd1\u5b66\u8bb2\u5ea7\u7cfb\u5217\uff08\u7b2c\u4e00\u671f\uff09\uff0c\u6d59\u6c5f\u5927\u5b66; Hangzhou, China",
    30.2489634,
    120.2052342
  ],
  [
    "\u8bdd\u5fc3\u58f0\uff0c\u540c\u6210\u957f\u2014\u2014\u79d1\u7814\u5206\u4eab<br />\"\u515a\u5efa+\"\u7cfb\u5217\u6d3b\u52a8\u66a8\"\u683c\u7269\u81f4\u77e5\"\u7cfb\u5217\u6d3b\u52a8\u7b2c\u4e8c\u573a\"\u4f18\u79c0\u9752\u5e74\u6559\u5e08\u6210\u957f\u5bf9\u8bdd\"\u5206\u4eab\u4f1a\uff0c\u6d59\u6c5f\u5927\u5b66; Hangzhou, China",
    30.2489634,
    120.2052342
  ],
  [
    "\u6570\u636e\u9a71\u52a8\u7684\u8bed\u8a00\u7c7b\u578b\u7814\u7a76\u2014\u2014\u57fa\u4e8e\u901a\u7528\u4f9d\u5b58\u6811\u5e93\u7684\u8bed\u5e8f\u5171\u6027\u63a2\u7d22<br />\"\u6570\u636e\u9a71\u52a8\u7684\u8bed\u8a00\u6559\u80b2\u4e0e\u6587\u5316\u4f20\u64ad\u7814\u7a76\"\u9752\u5e74\u5b66\u8005\u8bba\u575b\u66a8\u7b2c\u4e94\u5c4a\u8ba1\u91cf\u8bed\u8a00\u5b66\u5b66\u672f\u7814\u8ba8\u4f1a\uff0c\u534e\u4fa8\u5927\u5b66&\u5317\u4eac\u8bed\u8a00\u5927\u5b66; Online",
    43.5904719,
    3.8595132
  ],
  [
    "\u8bed\u8a00\u5b66\u4e0e\u6570\u636e\u79d1\u5b66<br />\u6d59\u6c5f\u8d22\u7ecf\u5927\u5b66; Hangzhou, China",
    30.2489634,
    120.2052342
  ],
  [
    "\u57fa\u4e8e\u6807\u6ce8\u6811\u5e93\u7684\u8de8\u8bed\u8a00\u5f62\u6001\u4e0e\u8bed\u5e8f\u5173\u7cfb\u7814\u7a76<br />\"\u8bed\u5e8f\u7c7b\u578b\u5b66\u65b0\u8fdb\u5c55\"\u7814\u8ba8\u4f1a\uff0c\u6d59\u6c5f\u5927\u5b66\u6587\u5b66\u9662\u6587\u5b66\u89c2\u901a\u5b66\u793e; Hangzhou, China",
    30.2489634,
    120.2052342
  ],
  [
    "\u4f18\u52bf\u8bed\u5e8f\u4e0e\u8bed\u5e8f\u7c7b\u578b\uff1a\u57fa\u4e8e\u6807\u6ce8\u6811\u5e93\u7684\u91cf\u5316\u7814\u7a76<br />\u7b2c\u4e03\u5c4a\u5e7f\u5916\u5e94\u7528\u8bed\u8a00\u5b66\u8bba\u575b\u56fd\u9645\u7814\u8ba8\u4f1a\"\u8bed\u8a00\u8ba1\u91cf\u7814\u7a76\"\u5de5\u4f5c\u574a\u66a8\u7b2c\u516d\u5c4a\u8ba1\u91cf\u8bed\u8a00\u5b66\u5b66\u672f\u7814\u8ba8\u4f1a\uff0c\u5e7f\u4e1c\u5916\u8bed\u5916\u8d38\u5927\u5b66&\u5317\u4eac\u8bed\u8a00\u5927\u5b66; Guangzhou, China",
    23.1288454,
    113.2590064
  ],
  [
    "\u57fa\u4e8e\u5927\u89c4\u6a21\u6811\u5e93\u7684\u8ba1\u91cf\u8bed\u5e8f\u7c7b\u578b\u5b66\u7814\u7a76<br />\u7eaa\u5ff5\u738b\u5fb7\u6625\u5148\u751f\u901d\u4e16\u5341\u5468\u5e74\u66a8\u5f53\u4ee3\u8bed\u8a00\u5b66\u65b0\u89c6\u91ce\u56fd\u9645\u7814\u8ba8\u4f1a\uff0c\u4e0a\u6d77\u5916\u56fd\u8bed\u5927\u5b66; Shanghai, China",
    31.2312707,
    121.4700152
  ],
  [
    "\u65af\u62c9\u592b\u8bed\u65cf\u8bed\u8a00\u5f62\u6001\u4e0e\u8bed\u5e8f\u7684\u52a8\u6001\u53d8\u5316\u4e0e\u542f\u793a<br />\"\u6570\u5b57\u4eba\u6587\u89c6\u57df\u4e0b\u7684\u8bed\u8a00\u6587\u5b66\u7814\u7a76\"\u9752\u5e74\u5b66\u8005\u8bba\u575b\u66a8\u7b2c\u56db\u5c4a\u8ba1\u91cf\u8bed\u8a00\u5b66\u5b66\u672f\u7814\u8ba8\u4f1a\uff0c\u5317\u65b9\u6c11\u65cf\u5927\u5b66; Yinchuan, China",
    38.4871699,
    106.2266569
  ],
  [
    "A Corpus-Based Study on the Diachronic Changes of Morphological Richness and Word Order Freedom in Romance Languages<br />The 15th International Corpus Linguistics Conference CILC2024, Universidad de Las Palmas de Gran Canaria; Spain",
    39.3260685,
    -4.8379791
  ],
  [
    "The complexity trade-off between morphological richness and word order freedom in Romance languages: A quantitative analysis<br />\u8bed\u8a00\u8ba1\u91cf\u4e0e\u6570\u5b57\u4eba\u6587\u66a8\u7b2c\u4e03\u5c4a\u8ba1\u91cf\u8bed\u8a00\u5b66\u5b66\u672f\u7814\u8ba8\u4f1a\uff0c\u5357\u4eac\u5e08\u8303\u5927\u5b66&\u5357\u4eac\u519c\u4e1a\u5927\u5b66&\u5317\u4eac\u8bed\u8a00\u5927\u5b66; Nanjing, China",
    32.0438284,
    118.7788631
  ],
  [
    "A Power-Law Analysis of Word Length and Frequency in Classical, Modern, and AI Chinese: The Structural Economy of Chinese Language<br />The International Workshop on Corpus and Computational Linguistics, University of Ostrava; Czech Republic",
    49.7439047,
    15.3381061
  ],
  [
    "Which Annotation Scheme Is More Expedient to Measure Syntactic Difficulty and Cognitive Demand?<br />Syntaxfest (Quasy: The Workshop on Quantitative Syntax), Universit\u00e9 Sorbonne Nouvelle Paris 3; Paris, France",
    48.8534951,
    2.3483915
  ]
];