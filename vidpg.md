---
title: vidpg
tags: english
layout: vidpg
pagination: 
  data: spreadsheet
  size: 1
  alias: artist_en
permalink: "artists-en/{{ artist_en.artist_name | slugify }}/"
order: {{ artist_en.order }}
---

   <h1 style="margin-top: 0px; margin-bottom: 5px"><strong>{{ artist_en.artist_name }}</strong></h1>
        <h2 style="margin-top: 0px;"><i>{{ artist_en.recording_date }}</i></h2>
        <br>
        <h4 class="textbox"> {{ artist_en.description_eng }} </h4>
        <br>
        <h3><strong>Transcript</strong></h3>
        <h4 class="textbox">{{ artist_en.transcript_eng }}</h4>