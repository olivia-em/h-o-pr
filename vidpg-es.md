---
title: vidpg-es
tags: spanish
layout: vidpg-es
pagination: 
  data: spreadsheet
  size: 1
  alias: artist_es
permalink: "artists-es/{{ artist_es.artist_name | slugify }}/"
order: {{ artist_es.order }}
---


 <h1 style="margin-top: 0px; margin-bottom: 5px"><strong>{{ artist_es.artist_name }}</strong></h1>
        <h2 style="margin-top: 0px;"><i>{{ artist_es.recording_date }}</i></h2>
        <br>
        <h4 class="textbox"> {{ artist_es.description_sp }} </h4>
        <br>
        <!-- <h3><strong>Transcript</strong></h3>
        <h4 class="textbox">{{ artist_es.transcript_sp }}</h4> -->
       