(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(t,e,a){},200:function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"b",function(){return o}),a.d(e,"a",function(){return s});var n=a(0),r=n.default.observable({});function i(t,e){return n.default.set(r,t,e)}function o(t){return r[t]}function s(t,e){var a=e.matched[0],n=a?a.components.default:{};if(t.stringified&&n.__file)return console.error("An error occurred while executing "+"page-query for ".concat(n.__file,"\n\n")+"Error: ".concat(t.stringified));console.error(t.message)}},201:function(t,e,a){"use strict";var n=a(0),r=a(200),i=a(78),o=n.default.config.optionMergeStrategies;e.a=function(t){var e=t.options,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.__pageQuery)e.__pageQuery=n;else{e.__pageQuery=n,e.computed=o.computed({$page:function(){return Object(r.b)(this.$route.path)}},e.computed);var s=function(t){e[t]=o[t]([u(e)],e[t])},u=function(){return function(t,n,o){a.e(40).then(a.bind(null,207)).then(function(a){a.default(t,e.__pageQuery).then(function(e){404===e.code?o({name:i.b,params:{0:t.path}}):o()}).catch(function(e){e.code===i.a||404===e.code?(console.error(e),o({name:i.b,params:{0:t.path}})):Object(r.a)(e,t)})})}};s("beforeRouteEnter"),s("beforeRouteUpdate")}}},202:function(t,e,a){"use strict";var n=a(199);a.n(n).a},203:function(t,e,a){},208:function(t,e,a){"use strict";var n={props:{tags:Array},methods:{created:function(){console.log(tags)}}},r=(a(202),a(10)),i=Object(r.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},t._l(t.tags,function(e){return a("a",{key:e.id,staticClass:"tag",attrs:{href:"/tag/"+e.title}},[t._v(t._s(e.title))])}),0)},[],!1,null,"05932715",null);e.a=i.exports},209:function(t,e,a){"use strict";var n=a(5),r=a(119)(1);n(n.P+n.F*!a(120)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},210:function(t,e,a){"use strict";var n=a(203);a.n(n).a},249:function(t,e,a){"use strict";a.r(e);var n=a(208),r=a(79),i=(a(83),a(21)),o=(a(209),a(121),{functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,n=e.data,o=a.info,s=a.showLinks,u=a.showNavigation,c=a.ariaLabel,l=function(t){var e=t.currentPage,a=void 0===e?1:e,n=t.totalPages,r=void 0===n?1:n,i=Math.ceil(5),o=a-i,s=a+i;r<=10?(o=0,s=r):a<=i?(o=0,s=10):a+i>=r&&(o=r-10,s=r);for(var u=[],c=o+1;c<=s;c++)u.push(c);return{current:a,total:r,start:o,end:s,pages:u}}(o),f=l.current,p=l.total,d=l.pages,g=l.start,v=l.end,b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;e===f&&(i=a.ariaCurrentLabel);var o={page:e};return a.activeLinkClass&&(o.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(o.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:a.linkClass,props:o,attrs:{"aria-label":i.replace("%n",e),"aria-current":f===e}},[n])},h=s?d.map(function(t){return b(t,t,a.ariaLinkLabel)}):[];if(u){var L=a.firstLabel,y=a.prevLabel,m=a.nextLabel,_=a.lastLabel,C=a.ariaFirstLabel,k=a.ariaPrevLabel,S=a.ariaNextLabel,P=a.ariaLastLabel;f>1&&h.unshift(b(f-1,y,k)),g>0&&h.unshift(b(1,L,C)),f<p&&h.push(b(f+1,m,S)),v<p&&h.push(b(p,_,P))}return h.length<2?null:t("nav",Object(i.a)({},n,{attrs:{role:"navigation","aria-label":c}}),h)}});a(82),a(25);var s={metaInfo:{title:"THE MEME DEPOT",meta:[{name:"author",content:"the meme depot"},{name:"description",content:"Funny memes"}]},components:{Pager:o,Tags:n.a}},u=(a(210),a(10)),c=a(201),l=function(t){Object(c.a)(t,void 0)},f=Object(u.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",[e("div",{staticClass:"cards"},this._l(this.$page.posts.edges,function(t){return e("div",{key:t.id,staticClass:"card"},[e("g-link",{attrs:{to:t.node.path}},[e("div",{staticClass:"card-thumb"},[e("g-image",{attrs:{src:t.node.cover}})],1)])],1)}),0),e("Pager",{staticClass:"paginate",attrs:{info:this.$page.posts.pageInfo}})],1)},[],!1,null,"db0c7cb4",null);"function"==typeof l&&l(f);e.default=f.exports}}]);