"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,N=s["".concat(l,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(N,o(o({ref:t},u),{},{components:r})):n.createElement(N,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4371:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"7. \u8bf4\u8bf4\u4f60\u5bf9 DNS \u534f\u8bae\u7684\u7406\u89e3",last_update:{date:"12/26/2022",author:"\u9ad8\u7ea2\u7fd4"}},o=void 0,p={unversionedId:"\u8ba1\u7b97\u673a\u7f51\u7edc/DNS",id:"\u8ba1\u7b97\u673a\u7f51\u7edc/DNS",title:"7. \u8bf4\u8bf4\u4f60\u5bf9 DNS \u534f\u8bae\u7684\u7406\u89e3",description:"DNS \u662f Domain Name System \u7684\u7f29\u5199\uff0c DNS \u670d\u52a1\u5668\u8fdb\u2f8f\u57df\u540d\u548c\u4e0e\u4e4b\u5bf9\u5e94\u7684 IP \u5730\u5740\u8f6c\u6362\u7684\u670d\u52a1\u5668",source:"@site/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/07-DNS.md",sourceDirName:"\u8ba1\u7b97\u673a\u7f51\u7edc",slug:"/\u8ba1\u7b97\u673a\u7f51\u7edc/DNS",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/DNS",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"7. \u8bf4\u8bf4\u4f60\u5bf9 DNS \u534f\u8bae\u7684\u7406\u89e3",last_update:{date:"12/26/2022",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"6. \u8bf4\u8bf4\u4f60\u5bf9\u201c\u4e09\u6b21\u63e1\u624b\u201d\u3001\u201c\u56db\u6b21\u6325\u624b\u201d\u7684\u7406\u89e3",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/\u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b copy"},next:{title:"8. https \u7684\u8be6\u7ec6\u63e1\u624b\u8fc7\u7a0b",permalink:"/website/interview/\u8ba1\u7b97\u673a\u7f51\u7edc/https\u63e1\u624b"}},l={},c=[],u={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"DNS \u662f Domain Name System \u7684\u7f29\u5199\uff0c DNS \u670d\u52a1\u5668\u8fdb\u2f8f",(0,a.kt)("strong",{parentName:"p"},"\u57df\u540d\u548c"),"\u4e0e\u4e4b\u5bf9\u5e94\u7684 ",(0,a.kt)("strong",{parentName:"p"},"IP \u5730\u5740\u8f6c\u6362"),"\u7684\u670d\u52a1\u5668"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9876\u7ea7\u57df\u540d .com \u3001")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2f06\u7ea7\u57df\u540d .com.cn \u3001 \u4e09\u7ea7\u57df\u540d ww.baidu.com.cn , \u6709\u591a\u5c11\u4e2a\u70b9\u5c31\u662f\u2f0f\u7ea7\u57df\u540d"))),(0,a.kt)("p",null,"\u8bbf\u95ee\u8fc7\u7a0b\uff1a\u6211\u4eec\u8bbf\u95ee ww.baidu.com.cn"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u64cd\u4f5c\u7cfb\u7edf\u2fa5\u4f1a\u5bf9 DNS \u89e3\u6790\u7ed3\u679c\u505a\u7f13\u5b58\uff0c\u5982\u679c\u7f13\u5b58\u4e2d\u6709\u76f4\u63a5\u8fd4\u56de IP \u5730\u5740\u67e5\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},"C:\\WINDOWS\\system32\\drivers\\etc\\hosts")," \u5982\u679c\u6709\u76f4\u63a5\u8fd4\u56de IP \u5730\u5740")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u901a\u8fc7 ",(0,a.kt)("strong",{parentName:"p"},"DNS")," ",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668"),"\u67e5\u627e\u79bb\u2f83\u2f30\u6700\u8fd1\u7684\u6839\u670d\u52a1\u5668\uff0c\u901a\u8fc7\u6839\u670d\u52a1\u5668\u627e\u5230 .cn \u670d\u52a1\u5668\uff0c\u5c06 ip \u8fd4\u56de\u7ed9 DNS \u670d\u52a1\u5668")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DNS \u670d\u52a1\u5668\u4f1a\u7ee7\u7eed\u50cf\u6b64 ip \u53d1\u9001\u8bf7\u6c42\uff0c\u53bb\u67e5\u627e\u5bf9\u5e94 .cn \u4e0b .com \u5bf9\u5e94\u7684 ip ...")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6\u6700\u7ec8\u7684 ip \u5730\u5740\u3002\u7f13\u5b58\u5230 DNS \u670d\u52a1\u5668\u4e0a"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/ghx9908/image-hosting/master/img/20221226190219.png",alt:null})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"DNS \u670d\u52a1\u5668\u4f1a\u5bf9 ip \u53ca \u57df\u540d \u8fdb\u2f8f\u7f13\u5b58")))}m.isMDXComponent=!0}}]);