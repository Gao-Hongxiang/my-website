"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9257],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=u(a),c=n,N=s["".concat(o,".").concat(c)]||s[c]||m[c]||l;return a?r.createElement(N,i(i({ref:t},k),{},{components:a})):r.createElement(N,i({ref:t},k))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},3730:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={title:"3.V8\u5185\u5b58\u7ba1\u7406",last_update:{date:"01/06/2023",author:"\u9ad8\u7ea2\u7fd4"}},i=void 0,p={unversionedId:"\u8ba1\u7b97\u673a\u7f51\u7edc/v8\u5185\u5b58\u7ba1\u7406",id:"\u8ba1\u7b97\u673a\u7f51\u7edc/v8\u5185\u5b58\u7ba1\u7406",title:"3.V8\u5185\u5b58\u7ba1\u7406",description:"V8 \u4e5f\u4f1a\u7533\u8bf7\u5185\u5b58\uff0c\u7533\u8bf7\u7684\u5185\u5b58\u53c8\u4f1a\u5206\u4e3a\u5806\u5185\u5b58\u548c\u6808\u5185\u5b58",source:"@site/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/03-v8\u5185\u5b58\u7ba1\u7406.md",sourceDirName:"\u8ba1\u7b97\u673a\u7f51\u7edc",slug:"/\u8ba1\u7b97\u673a\u7f51\u7edc/v8\u5185\u5b58\u7ba1\u7406",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/v8\u5185\u5b58\u7ba1\u7406",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3.V8\u5185\u5b58\u7ba1\u7406",last_update:{date:"01/06/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"2. \u5b89\u5168\u95ee\u9898\uff1aCSRF \u548c XSS",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/\u7f51\u7edc\u5b89\u5168"},next:{title:"4. \u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236\u4ecb\u7ecd\u4e0e\u7f13\u5b58\u7b56\u7565\u5256\u6790",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/\u6d4f\u89c8\u5668\u7f13\u5b58\u673a\u5236\u4ecb\u7ecd\u4e0e\u7f13\u5b58\u7b56\u7565\u5256\u6790"}},o={},u=[{value:"1.1 \u6808",id:"11-\u6808",level:3},{value:"1.2 \u5806",id:"12-\u5806",level:3},{value:"1.2.1 \u5806\u7a7a\u95f4\u5206\u7c7b",id:"121-\u5806\u7a7a\u95f4\u5206\u7c7b",level:4},{value:"1.2.1.1 \u65b0\u751f\u4ee3(new space)",id:"1211-\u65b0\u751f\u4ee3new-space",level:5},{value:"1.2.1.2 \u8001\u751f\u4ee3(old space)",id:"1212-\u8001\u751f\u4ee3old-space",level:5},{value:"1.2.2 \u4ec0\u4e48\u662f\u5783\u573e",id:"122-\u4ec0\u4e48\u662f\u5783\u573e",level:4},{value:"1.2.3 \u65b0\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536",id:"123-\u65b0\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536",level:4},{value:"1.2.4 \u8001\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536",id:"124-\u8001\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536",level:4},{value:"1.2.4.1 Mark-Sweep(\u6807\u8bb0\u6e05\u9664)",id:"1241-mark-sweep\u6807\u8bb0\u6e05\u9664",level:5},{value:"1.2.4.2 Mark-Compact\uff08\u6807\u8bb0\u6574\u7406\uff09",id:"1242-mark-compact\u6807\u8bb0\u6574\u7406",level:5},{value:"1.2.5 \u4f18\u5316",id:"125-\u4f18\u5316",level:4},{value:"1.2.5.1 Parallel(\u5e76\u884c\u6267\u884c)",id:"1251-parallel\u5e76\u884c\u6267\u884c",level:5},{value:"1.2.5.2 \u589e\u91cf\u6807\u8bb0",id:"1252-\u589e\u91cf\u6807\u8bb0",level:5},{value:"1.2.5.3 Write-barrier(\u5199\u5c4f\u969c)",id:"1253-write-barrier\u5199\u5c4f\u969c",level:5},{value:"1.2.5.4 Lazy Sweeping(\u60f0\u6027\u6e05\u7406)",id:"1254-lazy-sweeping\u60f0\u6027\u6e05\u7406",level:5},{value:"1.2.5.5 concurrent(\u5e76\u53d1\u56de\u6536)",id:"1255-concurrent\u5e76\u53d1\u56de\u6536",level:5}],k={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"V8 \u4e5f\u4f1a\u7533\u8bf7\u5185\u5b58\uff0c\u7533\u8bf7\u7684\u5185\u5b58\u53c8\u4f1a\u5206\u4e3a",(0,n.kt)("strong",{parentName:"p"},"\u5806\u5185\u5b58\u548c\u6808\u5185\u5b58"))),(0,n.kt)("h3",{id:"11-\u6808"},"1.1 \u6808"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6808\u7528\u4e8e\u5b58\u653e JS \u4e2d\u7684",(0,n.kt)("strong",{parentName:"li"},"\u57fa\u672c\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u6307\u9488")),(0,n.kt)("li",{parentName:"ul"},"\u6808\u7684",(0,n.kt)("strong",{parentName:"li"},"\u7a7a\u95f4\u662f\u8fde\u7eed"),"\u7684\uff0c\u589e\u52a0\u5220\u9664\u53ea\u9700\u8981\u79fb\u52a8\u6307\u9488\uff0c\u64cd\u4f5c\u901f\u5ea6\u975e\u5e38\u5feb"),(0,n.kt)("li",{parentName:"ul"},"\u6808\u7684",(0,n.kt)("strong",{parentName:"li"},"\u7a7a\u95f4\u662f\u6709\u9650"),"\u7684\uff0c\u5f53\u6808\u6ee1\u4e86\uff0c\u5c31\u4f1a\u629b\u51fa\u4e00\u4e2a\u9519\u8bef"),(0,n.kt)("li",{parentName:"ul"},"\u6808\u4e00\u822c\u662f\u5728",(0,n.kt)("strong",{parentName:"li"},"\u6267\u884c\u51fd\u6570\u65f6\u521b\u5efa"),"\u7684\uff0c\u5728\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u6808\u5c31\u4f1a\u88ab\u9500\u6bc1")),(0,n.kt)("h3",{id:"12-\u5806"},"1.2 \u5806"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5806\u4e3b\u8981\u7528\u4e8e\u5b58\u50a8 JS \u4e2d\u7684",(0,n.kt)("strong",{parentName:"li"},"\u5f15\u7528\u7c7b\u578b"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.zhufengpeixun.com/dui_de_nei_cun_fen_pei_1639157736483.jpg",alt:"new_large_object_space"})),(0,n.kt)("h4",{id:"121-\u5806\u7a7a\u95f4\u5206\u7c7b"},"1.2.1 \u5806\u7a7a\u95f4\u5206\u7c7b"),(0,n.kt)("h5",{id:"1211-\u65b0\u751f\u4ee3new-space"},"1.2.1.1 \u65b0\u751f\u4ee3(new space)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\u5185\u5b58\u7528\u4e8e\u5b58\u653e\u4e00\u4e9b",(0,n.kt)("strong",{parentName:"li"},"\u751f\u547d\u5468\u671f\u6bd4\u8f83\u77ed\u7684\u5bf9\u8c61\u6570\u636e"))),(0,n.kt)("h5",{id:"1212-\u8001\u751f\u4ee3old-space"},"1.2.1.2 \u8001\u751f\u4ee3(old space)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8001\u751f\u4ee3\u5185\u5b58\u7528\u4e8e\u5b58\u653e\u4e00\u4e9b",(0,n.kt)("strong",{parentName:"li"},"\u751f\u547d\u5468\u671f\u6bd4\u8f83\u957f\u7684\u5bf9\u8c61\u6570\u636e")),(0,n.kt)("li",{parentName:"ul"},"\u5f53",(0,n.kt)("inlineCode",{parentName:"li"},"new space"),"\u7684\u5bf9\u8c61\u8fdb\u884c",(0,n.kt)("strong",{parentName:"li"},"\u4e24\u4e2a\u5468\u671f\u7684"),"\u5783\u573e\u56de\u6536\u540e\uff0c\u5982\u679c\u6570\u636e\u8fd8\u5b58\u5728",(0,n.kt)("inlineCode",{parentName:"li"},"new space"),"\u4e2d\uff0c\u5219\u5c06\u4ed6\u4eec\u5b58\u653e\u5230",(0,n.kt)("inlineCode",{parentName:"li"},"old space"),"\u4e2d"),(0,n.kt)("li",{parentName:"ul"},"Old Space \u4f7f",(0,n.kt)("strong",{parentName:"li"},"\u7528\u6807\u8bb0\u6e05\u9664"),"\u548c",(0,n.kt)("strong",{parentName:"li"},"\u6807\u8bb0\u6574\u7406"),"\u7684\u65b9\u5f0f\u8fdb\u884c\u5783\u573e\u56de\u6536")),(0,n.kt)("h4",{id:"122-\u4ec0\u4e48\u662f\u5783\u573e"},"1.2.2 \u4ec0\u4e48\u662f\u5783\u573e"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u7a0b\u5e8f\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u80af\u5b9a\u4f1a\u7528\u5230\u4e00\u4e9b\u6570\u636e\uff0c\u8fd9\u4e9b\u6570\u636e\u4f1a\u653e\u5728\u5806\u6808\u4e2d\uff0c\u4f46\u662f\u5728\u7a0b\u5e8f\u8fd0\u884c\u7ed3\u675f\u540e\uff0c\u8fd9\u4e9b\u6570\u636e\u5c31\u4e0d\u4f1a\u518d\u88ab\u4f7f\u7528\u4e86\uff0c\u90a3\u4e9b\u4e0d\u518d\u4f7f\u7528\u7684\u6570\u636e\u5c31\u662f\u5783\u573e")),(0,n.kt)("h4",{id:"123-\u65b0\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536"},"1.2.3 \u65b0\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\u5185\u5b58\u6709",(0,n.kt)("strong",{parentName:"li"},"\u4e24\u4e2a\u533a\u57df"),"\uff0c\u5206\u522b\u662f",(0,n.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\u533a\u57df(from) \u548c \u7a7a\u95f2\u533a\u57df(to)")),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\u5185\u5b58\u4f7f\u7528",(0,n.kt)("strong",{parentName:"li"},"Scavenger \u7b97\u6cd5"),"\u6765\u7ba1\u7406\u5185\u5b58,\u5783\u573e\u56de\u6536\u7684\u5165\u53e3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5e7f\u5ea6\u4f18\u5148\u904d\u5386")," From-Space \u4e2d\u7684\u5bf9\u8c61\uff0c\u4ece\u6839\u5bf9\u8c61\u51fa\u53d1\uff0c\u5e7f\u5ea6\u4f18\u5148\u904d\u5386\u6240\u6709\u80fd\u5230\u8fbe\u7684\u5bf9\u8c61,\u628a\u5b58\u6d3b\u7684\u5bf9\u8c61\u590d\u5236\u5230 To-Space"),(0,n.kt)("li",{parentName:"ul"},"\u904d\u5386\u5b8c\u6210\u540e\uff0c",(0,n.kt)("strong",{parentName:"li"},"\u6e05\u7a7a")," From-Space"),(0,n.kt)("li",{parentName:"ul"},"From-Space \u548c To-Space ",(0,n.kt)("strong",{parentName:"li"},"\u89d2\u8272\u4e92\u6362")))),(0,n.kt)("li",{parentName:"ul"},"\u590d\u5236\u540e\u7684\u5bf9\u8c61\u5728 To-Space \u4e2d\u5360\u7528\u7684",(0,n.kt)("strong",{parentName:"li"},"\u5185\u5b58\u7a7a\u95f4\u662f\u8fde\u7eed\u7684"),"\uff0c",(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u4f1a\u51fa\u73b0\u788e\u7247\u95ee\u9898")),(0,n.kt)("li",{parentName:"ul"},"\u8fd9\u79cd\u5783\u573e\u56de\u6536\u65b9\u5f0f",(0,n.kt)("strong",{parentName:"li"},"\u5feb\u901f"),"\u800c\u53c8",(0,n.kt)("strong",{parentName:"li"},"\u9ad8\u6548"),"\uff0c\u4f46\u662f",(0,n.kt)("strong",{parentName:"li"},"\u4f1a\u9020\u6210\u7a7a\u95f4\u6d6a\u8d39"),"\uff08\u6709 To-Space \u7a7a\u95f2\u533a\u57df\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u65b0\u751f\u4ee3\u7684 ",(0,n.kt)("strong",{parentName:"li"},"GC \u6bd4\u8f83\u9891\u7e41")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u65b0\u751f\u4ee3\u7684\u5bf9\u8c61\u8f6c\u79fb\u5230\u8001\u751f"),"\u4ee3\u79f0\u4e3a",(0,n.kt)("strong",{parentName:"li"},"\u664b\u5347 Promote"),",\u5224\u65ad\u664b\u5347\u7684\u60c5\u51b5\u6709\u4e24\u79cd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7ecf\u8fc7",(0,n.kt)("strong",{parentName:"li"},"\u4e00\u6b21 GC")," \u8fd8\u5b58\u6d3b\u7684\u5bf9\u8c61"),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u590d\u5236\u5230 To-Space \u65f6\uff0cTo-Space \u7684",(0,n.kt)("strong",{parentName:"li"},"\u7a7a\u95f4\u8fbe\u5230\u4e00\u5b9a\u7684\u9650\u5236"),"\uff08\u8d85\u8fc7 25%\uff09")))),(0,n.kt)("h4",{id:"124-\u8001\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536"},"1.2.4 \u8001\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"V8 \u5728\u8001\u751f\u4ee3\u4e2d\u7684\u5783\u573e\u56de\u6536\u7b56\u7565\u91c7\u7528",(0,n.kt)("strong",{parentName:"p"},"Mark-Sweep(\u6807\u8bb0\u6e05\u9664)\u548c Mark-Compact(\u6807\u8bb0\u6574\u7406)\u76f8\u7ed3\u5408"))),(0,n.kt)("h5",{id:"1241-mark-sweep\u6807\u8bb0\u6e05\u9664"},"1.2.4.1 Mark-Sweep(\u6807\u8bb0\u6e05\u9664)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u6e05\u9664\u5206\u4e3a",(0,n.kt)("strong",{parentName:"li"},"\u6807\u8bb0\u548c\u6e05\u9664\u4e24\u4e2a\u9636\u6bb5")),(0,n.kt)("li",{parentName:"ul"},"\u5728\u6807\u8bb0\u9636\u6bb5\u9700\u8981\u904d\u5386",(0,n.kt)("strong",{parentName:"li"},"(\u6df1\u5ea6\u4f18\u5148\u904d\u5386"),")\u5806\u4e2d\u7684\u6240\u6709\u5bf9\u8c61\uff0c\u5e76",(0,n.kt)("strong",{parentName:"li"},"\u6807\u8bb0"),"\u90a3\u4e9b",(0,n.kt)("strong",{parentName:"li"},"\u6d3b\u7740\u7684\u5bf9\u8c61"),"\uff0c\u7136\u540e\u8fdb\u5165\u6e05\u9664\u9636\u6bb5\u3002\u5728\u6e05\u9664\u9636\u6bb5\u603b\uff0c\u53ea",(0,n.kt)("strong",{parentName:"li"},"\u6e05\u9664\u6ca1\u6709\u88ab\u6807\u8bb0\u7684\u5bf9\u8c61")),(0,n.kt)("li",{parentName:"ul"},"V8 \u91c7\u53d6\u7684\u662f",(0,n.kt)("strong",{parentName:"li"},"\u9ed1\u8272\u548c\u767d\u8272\u6765\u6807\u8bb0\u6570\u636e"),"\uff0c\u5783\u573e\u6536\u96c6\u4e4b\u524d\uff0c\u4f1a\u628a\u6240\u6709\u7684\u6570\u636e\u8bbe\u7f6e\u4e3a",(0,n.kt)("strong",{parentName:"li"},"\u767d\u8272"),"\uff0c\u7528\u6765\u6807\u8bb0\u6240\u6709\u7684",(0,n.kt)("strong",{parentName:"li"},"\u5c1a\u672a\u6807\u8bb0\u7684\u5bf9\u8c61"),"\uff0c\u7136\u540e\u4f1a\u4ece GC \u6839\u51fa\u53d1\uff0c\u4ee5",(0,n.kt)("strong",{parentName:"li"},"\u6df1\u5ea6\u4f18\u5148\u7684\u65b9\u5f0f\u628a\u6240\u6709\u7684\u80fd\u8bbf\u95ee\u5230\u7684\u6570\u636e\u90fd\u6807\u8bb0\u4e3a\u9ed1\u8272"),"\uff0c\u904d\u5386\u7ed3\u675f\u540e\u9ed1\u8272\u7684\u5c31\u662f\u6d3b\u7684\u6570\u636e\uff0c\u767d\u8272\u7684\u5c31\u662f\u53ef\u4ee5\u6e05\u7406\u7684\u5783\u573e\u6570\u636e"),(0,n.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u6807\u8bb0\u6e05\u9664\u53ea\u6e05\u9664\u6b7b\u4ea1\u5bf9\u8c61\uff0c\u800c\u6b7b\u4ea1\u5bf9\u8c61\u5728\u8001\u751f\u4ee3\u4e2d\u5360\u7528\u7684\u6bd4\u4f8b\u5f88\u5c0f\uff0c\u6240\u4ee5",(0,n.kt)("strong",{parentName:"li"},"\u6548\u7387\u8f83\u9ad8")),(0,n.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u6e05\u9664\u6709\u4e00\u4e2a",(0,n.kt)("strong",{parentName:"li"},"\u95ee\u9898"),"\u5c31\u662f\u8fdb\u884c\u4e00\u6b21\u6807\u8bb0\u6e05\u695a\u540e",(0,n.kt)("strong",{parentName:"li"},"\uff0c\u5185\u5b58\u7a7a\u95f4\u5f80\u5f80\u662f\u4e0d\u8fde\u7eed"),"\u7684\uff0c\u4f1a\u51fa\u73b0\u5f88\u591a\u7684",(0,n.kt)("strong",{parentName:"li"},"\u5185\u5b58\u788e\u7247"),"\u3002\u5982\u679c\u540e\u7eed\u9700\u8981\u5206\u914d\u4e00\u4e2a\u9700\u8981\u5185\u5b58\u7a7a\u95f4\u8f83\u591a\u7684\u5bf9\u8c61\u65f6\uff0c\u5982\u679c\u6240\u6709\u7684\u5185\u5b58\u788e\u7247\u90fd\u4e0d\u591f\u7528\uff0c\u5c31\u4f1a\u51fa\u73b0\u5185\u5b58\u6ea2\u51fa\u7684\u95ee\u9898")),(0,n.kt)("h5",{id:"1242-mark-compact\u6807\u8bb0\u6574\u7406"},"1.2.4.2 Mark-Compact\uff08\u6807\u8bb0\u6574\u7406\uff09"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u6574\u7406\u6b63\u662f\u4e3a\u4e86",(0,n.kt)("strong",{parentName:"li"},"\u89e3\u51b3\u6807\u8bb0\u6e05\u9664\u6240\u5e26\u6765\u7684\u5185\u5b58\u788e\u7247\u7684\u95ee\u9898")),(0,n.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u6574\u7406\u5728\u6807\u8bb0\u6e05\u9664\u7684\u57fa\u7840\u8fdb\u884c\u4fee\u6539\uff0c\u5c06\u5176\u7684",(0,n.kt)("strong",{parentName:"li"},"\u6e05\u9664\u9636\u6bb5\u53d8\u4e3a\u7d27\u7f29\u6781\u7aef")),(0,n.kt)("li",{parentName:"ul"},"\u5728\u6574\u7406\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5c06\u6d3b\u7740\u7684\u5bf9\u8c61\u5411\u5185\u5b58\u533a\u7684\u4e00\u6bb5\u79fb\u52a8\uff0c\u79fb\u52a8\u5b8c\u6210\u540e\u76f4\u63a5\u6e05\u7406\u6389\u8fb9\u754c\u5916\u7684\u5185\u5b58"),(0,n.kt)("li",{parentName:"ul"},"\u7d27\u7f29\u8fc7\u7a0b\u6d89\u53ca\u5bf9\u8c61\u7684\u79fb\u52a8\uff0c\u6240\u4ee5",(0,n.kt)("strong",{parentName:"li"},"\u6548\u7387\u5e76\u4e0d\u662f\u592a\u597d\uff0c"),"\u4f46\u662f\u80fd\u4fdd\u8bc1\u4e0d\u4f1a\u751f\u6210\u5185\u5b58\u788e\u7247\uff0c",(0,n.kt)("strong",{parentName:"li"},"\u4e00\u822c 10 \u6b21\u6807\u8bb0\u6e05\u7406\u4f1a\u4f34\u968f\u4e00\u6b21\u6807\u8bb0\u6574\u7406"))),(0,n.kt)("h4",{id:"125-\u4f18\u5316"},"1.2.5 \u4f18\u5316"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u6267\u884c\u5783\u573e\u56de\u6536\u7b97\u6cd5\u671f\u95f4\uff0cJS \u811a\u672c\u9700\u8981\u6682\u505c\uff0c\u8fd9\u79cd\u53eb Stop the world(\u5168\u505c\u987f)"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u56de\u6536\u65f6\u95f4\u8fc7\u957f\uff0c\u4f1a\u5f15\u8d77\u5361\u987f"),(0,n.kt)("li",{parentName:"ul"},"\u6027\u80fd\u4f18\u5316",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u628a\u5927\u4efb\u52a1\u62c6\u5206\u5c0f\u4efb\u52a1\uff0c\u5206\u6b65\u6267\u884c\uff0c\u7c7b\u4f3c fiber"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u4e00\u4e9b\u4efb\u52a1\u653e\u5728\u540e\u53f0\u6267\u884c\uff0c\u4e0d\u5360\u7528\u4e3b\u7ebf\u7a0b")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"JavaScript\u6267\u884c \u5783\u573e\u6807\u8bb0\u3001\u5783\u573e\u6e05\u7406\u3001\u5783\u573e\u6574\u7406 JavaScript\u6267\u884c\n--------------                          ----------------\x3e\n")),(0,n.kt)("h5",{id:"1251-parallel\u5e76\u884c\u6267\u884c"},"1.2.5.1 Parallel(\u5e76\u884c\u6267\u884c)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u65b0\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536"),"\u91c7\u53d6\u5e76\u884c\u7b56\u7565\u63d0\u5347\u5783\u573e\u56de\u6536\u901f\u5ea6\uff0c\u5b83\u4f1a",(0,n.kt)("strong",{parentName:"li"},"\u5f00\u542f\u591a\u4e2a\u8f85\u52a9\u7ebf"),"\u7a0b\u6765\u6267\u884c\u65b0\u751f\u4ee3\u7684\u5783\u573e\u56de\u6536\u5de5\u4f5c")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"         -------\u8f85\u52a9\u7ebf\u7a0b-----\x3e\n         -------\u8f85\u52a9\u7ebf\u7a0b-----\x3e\n         -------\u8f85\u52a9\u7ebf\u7a0b-----\x3e\n---------                    ---------------------------\x3e\n")),(0,n.kt)("h5",{id:"1252-\u589e\u91cf\u6807\u8bb0"},"1.2.5.2 \u589e\u91cf\u6807\u8bb0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8001\u751f\u4ee3\u56e0\u4e3a\u5bf9\u8c61\u53c8\u5927\u53c8\u591a\uff0c\u6240\u4ee5\u5783\u573e\u56de\u6536\u7684\u65f6\u95f4\u66f4\u957f\uff0c\u91c7\u7528\u589e\u91cf\u6807\u8bb0\u7684\u65b9\u5f0f\u8fdb\u884c\u4f18\u5316"),(0,n.kt)("li",{parentName:"ul"},"\u589e\u91cf\u6807\u8bb0\u5c31\u662f\u628a\u6807\u8bb0",(0,n.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u5206\u6210\u591a\u4e2a\u9636\u6bb5"),"\uff0c\u6bcf\u4e2a\u9636\u6bb5\u90fd\u53ea\u6807\u8bb0\u4e00\u90e8\u5206\u5bf9\u8c61\uff0c\u548c\u4e3b\u7ebf\u7a0b\u7684\u6267\u884c\u7a7f\u63d2\u8fdb\u884c"),(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u4e86\u652f\u6301\u589e\u91cf\u6807\u8bb0\uff0cV8 \u5fc5\u987b\u53ef\u4ee5\u652f\u6301\u5783\u573e\u56de\u6536\u7684",(0,n.kt)("strong",{parentName:"li"},"\u6682\u505c\u548c\u6062\u590d"),"\uff0c\u6240\u4ee5\u91c7\u7528\u4e86",(0,n.kt)("inlineCode",{parentName:"li"},"\u9ed1\u767d\u7070"),"\u4e09\u8272\u6807\u8bb0\u6cd5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed1\u8272\u8868\u793a\u8fd9\u4e2a\u8282\u70b9\u88ab GC \u6839\u5f15\u7528\u5230\u4e86\uff0c\u800c\u4e14\u8be5\u8282\u70b9\u7684\u5b50\u8282\u70b9\u90fd\u5df2\u7ecf\u6807\u8bb0\u5b8c\u6210\u4e86"),(0,n.kt)("li",{parentName:"ul"},"\u7070\u8272\u8868\u793a\u8fd9\u4e2a\u8282\u70b9\u88ab GC \u6839\u5f15\u7528\u5230\u4e86\uff0c\u4f46\u5b50\u8282\u70b9\u8fd8\u6ca1\u88ab\u5783\u573e\u56de\u6536\u5668\u6807\u8bb0\u5904\u7406\uff0c\u4e5f\u8868\u660e\u76ee\u524d\u6b63\u5728\u5904\u7406\u8fd9\u4e2a\u8282\u70b9"),(0,n.kt)("li",{parentName:"ul"},"\u767d\u8272\u8868\u793a\u6b64\u8282\u70b9\u8fd8\u6ca1\u672a\u88ab\u5783\u573e\u56de\u6536\u5668\u53d1\u73b0\uff0c\u5982\u679c\u5728\u672c\u8f6e\u904d\u5386\u7ed3\u675f\u65f6\u8fd8\u662f\u767d\u8272\uff0c\u90a3\u4e48\u8fd9\u5757\u6570\u636e\u5c31\u4f1a\u88ab\u6536\u56de"))),(0,n.kt)("li",{parentName:"ul"},"\u5f15\u5165\u4e86\u7070\u8272\u6807\u8bb0\u540e\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7\u5224\u65ad\u6709\u6ca1\u6709\u7070\u8272\u8282\u70b9\u6765\u5224\u65ad\u6807\u8bb0\u662f\u5426\u5b8c\u6210\u4e86\uff0c\u5982\u679c\u6709\u7070\u8272\u8282\u70b9\uff0c\u4e0b\u6b21\u6062\u590d\u7684\u5e94\u8be5\u4ece\u7070\u8272\u8282\u70b9\u7ee7\u7eed\u6267\u884c")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"---------\u5f00\u59cb\u6807\u8bb0---\u589e\u91cf\u6807\u8bb0---\u589e\u91cf\u6807\u8bb0---\u6e05\u7406---\u6574\u7406-----------------\x3e\n")),(0,n.kt)("h5",{id:"1253-write-barrier\u5199\u5c4f\u969c"},"1.2.5.3 Write-barrier(\u5199\u5c4f\u969c)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f53\u9ed1\u8272\u6307\u5411\u767d\u8272\u8282\u70b9\u7684\u65f6\u5019\uff0c\u5c31\u4f1a\u89e6\u53d1\u5199\u5c4f\u969c\uff0c\u8fd9\u4e2a\u5199\u5c4f\u969c\u4f1a\u628a\u767d\u8272\u8282\u70b9\u8bbe\u7f6e\u4e3a\u7070\u8272")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'global.a = { name: "a" }\nglobal.a.b = { name: "b1" }\n//\u6267\u884c\u6807\u8bb0\u5de5\u4f5c\nglobal.a.b = { name: "b2" }\n//\u7ee7\u7eed\u6267\u884c\u6807\u8bb0\u5de5\u4f5c\n')),(0,n.kt)("h5",{id:"1254-lazy-sweeping\u60f0\u6027\u6e05\u7406"},"1.2.5.4 Lazy Sweeping(\u60f0\u6027\u6e05\u7406)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f53\u589e\u91cf\u6807\u8bb0\u5b8c\u6210\u540e\uff0c\u5982\u679c\u5185\u5b58\u591f\u7528\uff0c\u5148\u4e0d\u6e05\u7406\uff0c\u7b49 JS \u4ee3\u7801\u6267\u884c\u5b8c\u6162\u6162\u6e05\u7406")),(0,n.kt)("h5",{id:"1255-concurrent\u5e76\u53d1\u56de\u6536"},"1.2.5.5 concurrent(\u5e76\u53d1\u56de\u6536)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5176\u5b9e\u589e\u91cf\u6807\u8bb0\u548c\u60f0\u6027\u6e05\u7406\u5e76\u6ca1\u6709\u51cf\u5c11\u6682\u505c\u7684\u603b\u65f6\u95f4"),(0,n.kt)("li",{parentName:"ul"},"\u5e76\u53d1\u56de\u6536\u5c31\u662f\u4e3b\u7ebf\u7a0b\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\uff0c\u8f85\u52a9\u7ebf\u7a0b\u53ef\u4ee5\u5728\u540e\u53f0\u5b8c\u6210\u5783\u573e\u56de\u6536\u5de5\u4f5c"),(0,n.kt)("li",{parentName:"ul"},"\u6807\u8bb0\u64cd\u4f5c\u5168\u90fd\u7531\u8f85\u52a9\u7ebf\u7a0b\u5b8c\uff0c\u6e05\u7406\u64cd\u4f5c\u7531\u4e3b\u7ebf\u7a0b\u548c\u8f85\u52a9\u7ebf\u7a0b\u914d\u5408\u5b8c\u6210")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"         ----\u8f85\u52a9\u7ebf\u7a0b\u6807\u8bb0----\x3e      -----\u6e05\u7406\u6574\u7406----\x3e\n         ----\u8f85\u52a9\u7ebf\u7a0b\u6807\u8bb0----\x3e      -----\u6e05\u7406\u6574\u7406----\x3e\n         ----\u8f85\u52a9\u7ebf\u7a0b\u6807\u8bb0----\x3e      -----\u6e05\u7406\u6574\u7406----\x3e\n-----------------------------\u6267\u884cJS>-----\u6e05\u7406\u6574\u7406---\x3e---------------------------\x3e\n")))}m.isMDXComponent=!0}}]);