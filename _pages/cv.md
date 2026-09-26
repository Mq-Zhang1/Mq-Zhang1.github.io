---
layout: academic
permalink: /cv/
title: Curriculum Vitae
page_kind: cv
author_profile: false
redirect_from:
  - /resume
---
<header class="page-heading"><h1>Curriculum Vitae</h1><p>{{ site.data.research.name }} · {{ site.data.research.role }}</p><a class="download-link" href="{{ site.data.research.cv | relative_url }}" download>Download CV <span>PDF ↗</span></a></header>
<section class="section" aria-labelledby="education-title"><h2 class="section-title" id="education-title">Education</h2><div class="experience-list">{% for item in site.data.research.education %}<article class="experience-row"><div class="experience-heading"><h3>{{ item.name }}</h3><span class="date">{{ item.date }}</span></div><p>{{ item.degree }}</p><p class="role">{{ item.detail }}</p></article>{% endfor %}</div></section>
<section class="section" aria-labelledby="cv-experience-title"><h2 class="section-title" id="cv-experience-title">Experience</h2>{% include academic-experience.html %}</section>
<section class="section"><div class="section-heading"><h2>Publications</h2><a href="{{ '/publications/' | relative_url }}">View all publications ↗</a></div><p>Full publication details are available in the <a href="{{ site.data.research.cv | relative_url }}">PDF CV</a>.</p></section>
{% include academic-service.html %}
