# Copyright (C) 2010-2013 Claudio Guarnieri.
# Copyright (C) 2014-2016 Cuckoo Foundation.
# This file is part of Cuckoo Sandbox - http://www.cuckoosandbox.org
# See the file 'docs/LICENSE' for copying permission.

import dashboard.views
import analysis.views

from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r"^$", dashboard.views.index),
    url(r'^admin/', admin.site.urls),
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r"^analysis/", include("analysis.urls")),
    url(r"^hunting/", include("hunting.urls")),
    url(r"^advanced_search/", include("advanced_search.urls")),
    url(r"^compare/", include("compare.urls")),
    url(r"^submit/", include("submission.urls")),
    url(r"^file/(?P<category>\w+)/(?P<object_id>\w+)/$", analysis.views.file),
    url(r"^tldr/(?P<object_id>\w+)/$", analysis.views.tldr),
    url(r"^misp/(?P<task_id>\w+)/$", analysis.views.misp),
    url(r"^full_memory/(?P<analysis_number>\w+)/$", analysis.views.full_memory_dump_file),
    url(r"^dashboard/", include("dashboard.urls"))
]