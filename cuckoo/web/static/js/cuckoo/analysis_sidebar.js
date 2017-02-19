"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),AnalysisSidebar=function(){function e(t){_classCallCheck(this,e),this.$=t,this.searchInput=this.$.find('input[name="sidebar_search"]'),this.open=!1,this.locked=!1,this.search_active=!1,window.localStorage.getItem("cuckoo-sidebar-locked")?"true"==window.localStorage.getItem("cuckoo-sidebar-locked")?this.lock():null:window.localStorage.setItem("cuckoo-sidebar-locked","false"),this.activateListeners(),this.scrollHandler()}return _createClass(e,[{key:"activateListeners",value:function(){var e=this;this.$.bind("mouseenter",function(t){e.onMouseEnter(t)}).bind("mouseleave",function(t){e.onMouseOut(t)}),$(document).on("scroll",function(t){return t.preventDefault(),e.scrollHandler(t)}),this.$.find("[href^=sidebar]").bind("click",function(t){t.preventDefault();var n=$(this).attr("href").split(":")[1];switch(n){case"toggle-lock":e.toggleLock()}}),this.searchInput.bind("keyup",function(t){e.searchHandler(t,$(this).val())})}},{key:"onMouseEnter",value:function(e){this.open=!0,this.$.addClass("open")}},{key:"onMouseOut",value:function(e){this.search_active||(this.open=!1,this.$.removeClass("open"))}},{key:"scrollHandler",value:function(e){var t=$(window).scrollTop();this.$.find(".cuckoo-nav").css("transform","translate3d(0,"+t+"px,0)")}},{key:"lock",value:function(){this.locked=!0,this.$.addClass("locked"),window.localStorage.setItem("cuckoo-sidebar-locked",!0)}},{key:"unlock",value:function(){this.locked=!1,this.$.removeClass("locked"),window.localStorage.setItem("cuckoo-sidebar-locked",!1)}},{key:"toggleLock",value:function(){this.locked?this.unlock():this.lock()}},{key:"searchHandler",value:function(e,t){t.length>0?this.search_active=!0:this.search_active=!1}}]),e}();$(function(){var e;$("#analysis-nav").length&&(e=new AnalysisSidebar($("#analysis-nav")))});
//# sourceMappingURL=analysis_sidebar.js.map
