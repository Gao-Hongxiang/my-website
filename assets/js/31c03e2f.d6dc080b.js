"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8539],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=d(n),u=s,x=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?i.createElement(x,o(o({ref:t},c),{},{components:n})):i.createElement(x,o({ref:t},c))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(7462),s=(n(7294),n(3905));const r={title:"1. react \u865a\u62df\u5217\u8868\u4e4b FixedSizeList \u5c01\u88c5",last_update:{date:"01/06/2023",author:"\u9ad8\u7ea2\u7fd4"}},o=void 0,a={unversionedId:"react\u7ec4\u4ef6\u5c01\u88c5/FixedSizeList",id:"react\u7ec4\u4ef6\u5c01\u88c5/FixedSizeList",title:"1. react \u865a\u62df\u5217\u8868\u4e4b FixedSizeList \u5c01\u88c5",description:"1. \u957f\u5217\u8868\u6e32\u67d3",source:"@site/interview/react\u7ec4\u4ef6\u5c01\u88c5/01-FixedSizeList.md",sourceDirName:"react\u7ec4\u4ef6\u5c01\u88c5",slug:"/react\u7ec4\u4ef6\u5c01\u88c5/FixedSizeList",permalink:"/website/interview/react\u7ec4\u4ef6\u5c01\u88c5/FixedSizeList",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1. react \u865a\u62df\u5217\u8868\u4e4b FixedSizeList \u5c01\u88c5",last_update:{date:"01/06/2023",author:"\u9ad8\u7ea2\u7fd4"}},sidebar:"tutorialSidebar",previous:{title:"react\u7ec4\u4ef6",permalink:"/website/interview/category/react\u7ec4\u4ef6"}},l={},d=[{value:"1. \u957f\u5217\u8868\u6e32\u67d3",id:"1-\u957f\u5217\u8868\u6e32\u67d3",level:2},{value:"2.\u957f\u5217\u8868\u7ec4\u4ef6",id:"2\u957f\u5217\u8868\u7ec4\u4ef6",level:2},{value:"3. \u56fa\u5b9a\u9ad8\u5ea6\u5217\u8868\u5b9e\u6218",id:"3-\u56fa\u5b9a\u9ad8\u5ea6\u5217\u8868\u5b9e\u6218",level:2},{value:"3.1 srcindex.js",id:"31-srcindexjs",level:3},{value:"3.2 fixed-size-list.js",id:"32-fixed-size-listjs",level:3},{value:"3.3 fixed-size-list.css",id:"33-fixed-size-listcss",level:3},{value:"4.<code>FixedSizeList</code>\u5b9e\u73b0",id:"4fixedsizelist\u5b9e\u73b0",level:2},{value:"4. 1 \u5168\u90e8\u6e32\u67d3",id:"4-1-\u5168\u90e8\u6e32\u67d3",level:3},{value:"4.1 .1fixed-size-list.js",id:"41-1fixed-size-listjs",level:4},{value:"4.1.2 react-windowindex.js",id:"412-react-windowindexjs",level:4},{value:"4.1.3 FixedSizeList.js",id:"413-fixedsizelistjs",level:4},{value:"4.1.4 createListComponent.js",id:"414-createlistcomponentjs",level:4},{value:"4.2. \u6e32\u67d3\u9996\u5c4f",id:"42-\u6e32\u67d3\u9996\u5c4f",level:2},{value:"4.2.1 FixedSizeList.js",id:"421-fixedsizelistjs",level:3},{value:"4.2.2 createListComponent.js",id:"422-createlistcomponentjs",level:3},{value:"4.3. \u76d1\u542c\u6eda\u52a8",id:"43-\u76d1\u542c\u6eda\u52a8",level:2},{value:"4.3.1 createListComponent.js",id:"431-createlistcomponentjs",level:3},{value:"4.4. overscan (\u589e\u52a0\u7f13\u5b58\u533a\u57df)",id:"44-overscan-\u589e\u52a0\u7f13\u5b58\u533a\u57df",level:2},{value:"4.4.1 createListComponent.js",id:"441-createlistcomponentjs",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"1-\u957f\u5217\u8868\u6e32\u67d3"},"1. \u957f\u5217\u8868\u6e32\u67d3"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u6d77\u91cf\u6570\u636e\u5728\u6d4f\u89c8\u5668\u91cc\u4e00\u6b21\u6027\u6e32\u67d3\u4f1a\u6709\u4ee5\u4e0b\u95ee\u9898",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u8ba1\u7b97\u65f6\u95f4\u8fc7\u957f\uff0c\u7528\u6237\u9700\u8981\u957f\u65f6\u95f4\u7b49\u5f85\uff0c\u4f53\u9a8c\u5dee"),(0,s.kt)("li",{parentName:"ul"},"CPU \u5904\u7406\u65f6\u95f4\u8fc7\u957f\uff0c\u6ed1\u52a8\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u5361\u987f"),(0,s.kt)("li",{parentName:"ul"},"GPU \u8d1f\u8f7d\u8fc7\u9ad8\uff0c\u6e32\u67d3\u4e0d\u8fc7\u6765\u4f1a\u51fa\u73b0\u95ea\u52a8"),(0,s.kt)("li",{parentName:"ul"},"\u5185\u5b58\u5360\u7528\u8fc7\u591a\uff0c\u4e25\u91cd\u4f1a\u5f15\u8d77\u6d4f\u89c8\u5668\u5361\u6b7b\u548c\u5d29\u6e83"))),(0,s.kt)("li",{parentName:"ul"},"\u4f18\u5316\u65b9\u6cd5",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u4e0b\u62c9\u5e95\u90e8\u52a0\u8f7d\u66f4\u591a\u5b9e\u73b0\u61d2\u52a0\u8f7d\uff0c\u6b64\u65b9\u6cd5\u968f\u7740\u5185\u5bb9\u8d8a\u6765\u8d8a\u591a\uff0c\u4f1a\u5f15\u8d77\u5927\u91cf\u7684\u91cd\u6392\u548c\u91cd\u7ed8\uff0c\u4f9d\u8d56\u53ef\u80fd\u4f1a\u5361\u987f"),(0,s.kt)("li",{parentName:"ul"},"\u865a\u62df\u5217\u8868 \u5176\u5b9e\u6211\u4eec\u7684\u5c4f\u5e55\u53ef\u89c6\u533a\u57df\u662f\u6709\u9650\u7684\uff0c\u80fd\u770b\u5230\u7684\u6570\u636e\u4e5f\u662f\u6709\u9650\u7684,\u6240\u4ee5\u53ef\u4ee5\u5728\u7528\u6237\u6eda\u52a8\u65f6\uff0c\u53ea\u6e32\u67d3\u53ef\u89c6\u533a\u57df\u5185\u7684\u5185\u5bb9\u5373\u53ef,\u4e0d\u53ef\u89c1\u533a\u57df\u7528\u7a7a\u767d\u5360\u4f4d\u586b\u5145, \u8fd9\u6837\u7684\u8bdd\u9875\u9762\u4e2d\u7684 DOM \u5143\u7d20\u5c11\uff0cCPU\u3001GPU \u548c\u5185\u5b58\u8d1f\u8f7d\u5c0f")))),(0,s.kt)("h2",{id:"2\u957f\u5217\u8868\u7ec4\u4ef6"},"2.\u957f\u5217\u8868\u7ec4\u4ef6"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-virtualized"},"react-virtualized")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/bvaughn/react-window"},"react-window")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://react-window.vercel.app/#/examples/list/fixed-size"},"react-window.vercel.app"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"npm i react-window --save\n")),(0,s.kt)("h2",{id:"3-\u56fa\u5b9a\u9ad8\u5ea6\u5217\u8868\u5b9e\u6218"},"3. \u56fa\u5b9a\u9ad8\u5ea6\u5217\u8868\u5b9e\u6218"),(0,s.kt)("h3",{id:"31-srcindexjs"},"3.1 src\\index.js"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"src\\index.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react"\nimport ReactDOM from "react-dom/client"\nimport FixedSizeList from "./fixed-size-list"\nconst root = ReactDOM.createRoot(document.getElementById("root"))\nroot.render(<FixedSizeList />)\n')),(0,s.kt)("h3",{id:"32-fixed-size-listjs"},"3.2 fixed-size-list.js"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"src\\fixed-size-list.js")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import { FixedSizeList } from "react-window"\nimport "./fixed-size-list.css"\nconst Row = ({ index, style }) => (\n  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>\n    Row{index}\n  </div>\n)\nfunction App() {\n  return (\n    <FixedSizeList\n      className="List"\n      height={200}\n      width={200}\n      itemSize={50}\n      itemCount={1000}\n    >\n      {Row}\n    </FixedSizeList>\n  )\n}\nexport default App\n')),(0,s.kt)("h3",{id:"33-fixed-size-listcss"},"3.3 fixed-size-list.css"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"src\\fixed-size-list.css")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},".List {\n  border: 1px solid gray;\n}\n\n.ListItemEven,\n.ListItemOdd {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ListItemOdd {\n  background-color: lightcoral;\n}\n.ListItemEven {\n  background-color: lightblue;\n}\n")),(0,s.kt)("h2",{id:"4fixedsizelist\u5b9e\u73b0"},"4.",(0,s.kt)("inlineCode",{parentName:"h2"},"FixedSizeList"),"\u5b9e\u73b0"),(0,s.kt)("h3",{id:"4-1-\u5168\u90e8\u6e32\u67d3"},"4. 1 \u5168\u90e8\u6e32\u67d3"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u9996\u5148\u5b9e\u73b0\u4f20\u5165\u7684\u6570\u636e\u9875\u9762\u5168\u90e8\u6e32\u67d3")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://static.zhufengpeixun.com/reactwindowfixed_1651225094542.jpg",alt:"\u539f\u7406"})),(0,s.kt)("h4",{id:"41-1fixed-size-listjs"},"4.1 .1fixed-size-list.js"),(0,s.kt)("p",null,"src\\fixed-size-list.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'import { FixedSizeList } from "./react-window"\nimport "./fixed-size-list.css"\nconst Row = ({ index, style }) => (\n  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>\n    Row{index}\n  </div>\n)\nfunction App() {\n  return (\n    <FixedSizeList\n      className="List"\n      height={200}\n      width={200}\n      itemSize={50}\n      itemCount={1000}\n    >\n      {Row}\n    </FixedSizeList>\n  )\n}\nexport default App\n')),(0,s.kt)("h4",{id:"412-react-windowindexjs"},"4.1.2 react-window\\index.js"),(0,s.kt)("p",null,"src\\react-window\\index.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'export { default as FixedSizeList } from "./FixedSizeList"\n')),(0,s.kt)("h4",{id:"413-fixedsizelistjs"},"4.1.3 FixedSizeList.js"),(0,s.kt)("p",null,"src\\react-window\\FixedSizeList.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import createListComponent from "./createListComponent"\nconst FixedSizeList = createListComponent({\n  getItemSize: ({ itemSize }) => itemSize, //\u6bcf\u4e2a\u6761\u76ee\u7684\u9ad8\u5ea6\n  getEstimatedTotalSize: ({ itemSize, itemCount }) => itemSize * itemCount, //\u83b7\u53d6\u9884\u8ba1\u7684\u603b\u9ad8\u5ea6\n  getItemOffset: ({ itemSize }, index) => itemSize * index, //\u83b7\u53d6\u6bcf\u4e2a\u6761\u76ee\u7684\u504f\u79fb\u91cf\n})\nexport default FixedSizeList\n')),(0,s.kt)("h4",{id:"414-createlistcomponentjs"},"4.1.4 createListComponent.js"),(0,s.kt)("p",null,"src\\react-window\\createListComponent.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react"\nexport default function createListComponent({\n  getEstimatedTotalSize, //\u83b7\u53d6\u9884\u8ba1\u7684\u603b\u9ad8\u5ea6\n  getItemSize, //\u6bcf\u4e2a\u6761\u76ee\u7684\u9ad8\u5ea6\n  getItemOffset, //\u83b7\u53d6\u6bcf\u4e2a\u6761\u76ee\u7684\u504f\u79fb\u91cf\n}) {\n  return class extends React.Component {\n    render() {\n      const { width, height, itemCount, children: ComponentType } = this.props\n      const containerStyle = {\n        position: "relative",\n        width,\n        height,\n        overflow: "auto",\n        willChange: "transform",\n      }\n      const contentStyle = {\n        height: getEstimatedTotalSize(this.props),\n        width: "100%",\n      }\n      const items = []\n      if (itemCount > 0) {\n        for (let index = 0; index < itemCount; index++) {\n          items.push(\n            <ComponentType\n              key={index}\n              index={index}\n              style={this._getItemStyle(index)}\n            />\n          )\n        }\n      }\n      return (\n        <div style={containerStyle}>\n          <div style={contentStyle}>{items}</div>\n        </div>\n      )\n    }\n    //\u83b7\u53d6\u6bcf\u4e2aitem\u7684\u6837\u5f0f\n    _getItemStyle = (index) => {\n      const style = {\n        position: "absolute",\n        width: "100%",\n        height: getItemSize(this.props),\n        top: getItemOffset(this.props, index),\n      }\n      return style\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"42-\u6e32\u67d3\u9996\u5c4f"},"4.2. \u6e32\u67d3\u9996\u5c4f"),(0,s.kt)("h3",{id:"421-fixedsizelistjs"},"4.2.1 FixedSizeList.js"),(0,s.kt)("p",null,"src\\react-window\\FixedSizeList.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"import createListComponent from './createListComponent';\nconst FixedSizeList = createListComponent({\n    getItemSize: ({ itemSize }) => itemSize,//\u6bcf\u4e2a\u6761\u76ee\u7684\u9ad8\u5ea6\n    getEstimatedTotalSize: ({ itemSize, itemCount }) => itemSize * itemCount, //\u83b7\u53d6\u9884\u8ba1\u7684\u603b\u9ad8\u5ea6\n    getItemOffset: ({ itemSize }, index) => itemSize * index, //\u83b7\u53d6\u6bcf\u4e2a\u6761\u76ee\u7684\u504f\u79fb\u91cf\n+   getStartIndexForOffset: ({ itemSize }, offset) => Math.floor(offset / itemSize),//\u83b7\u53d6\u8d77\u59cb\u7d22\u5f15\n+   getStopIndexForStartIndex: ({ height, itemSize }, startIndex) => {//\u83b7\u53d6\u7ed3\u675f\u7d22\u5f15\n+       const numVisibleItems = Math.ceil(height / itemSize);\n+       return startIndex + numVisibleItems - 1;\n    }\n});\nexport default FixedSizeList;\n")),(0,s.kt)("h3",{id:"422-createlistcomponentjs"},"4.2.2 createListComponent.js"),(0,s.kt)("p",null,"src\\react-window\\createListComponent.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nexport default function createListComponent({\n    getEstimatedTotalSize,//\u83b7\u53d6\u9884\u8ba1\u7684\u603b\u9ad8\u5ea6\n    getItemSize,//\u6bcf\u4e2a\u6761\u76ee\u7684\u9ad8\u5ea6\n    getItemOffset,//\u83b7\u53d6\u6bcf\u4e2a\u6761\u76ee\u7684\u504f\u79fb\u91cf\n+   getStartIndexForOffset,\n+   getStopIndexForStartIndex\n}) {\n    return class extends React.Component {\n+       state = { scrollOffset: 0 }\n        render() {\n            const { width, height, itemCount, children: ComponentType } = this.props;\n            const containerStyle = { position: 'relative', width, height, overflow: 'auto', willChange: 'transform' };\n            const contentStyle = { height: getEstimatedTotalSize(this.props), width: '100%' };\n            const items = [];\n            if (itemCount > 0) {\n+               const [startIndex, stopIndex] = this._getRangeToRender();\n+               for (let index = startIndex; index <= stopIndex; index++) {\n                    items.push(\n                        <ComponentType key={index} index={index} style={this._getItemStyle(index)} />\n                    );\n                }\n            }\n            return (\n                <div style={containerStyle}>\n                    <div style={contentStyle}>\n                        {items}\n                    </div>\n                </div>\n            )\n        }\n        _getItemStyle = (index) => {\n            const style = {\n                position: 'absolute',\n                width: '100%',\n                height: getItemSize(this.props),\n                top: getItemOffset(this.props, index)\n            };\n            return style;\n        }\n+       _getRangeToRender = () => {\n+           const { scrollOffset } = this.state;\n+           const startIndex = getStartIndexForOffset(this.props, scrollOffset);\n+           const stopIndex = getStopIndexForStartIndex(this.props, startIndex);\n+           return [startIndex, stopIndex];\n+       }\n    }\n}\n")),(0,s.kt)("h2",{id:"43-\u76d1\u542c\u6eda\u52a8"},"4.3. \u76d1\u542c\u6eda\u52a8"),(0,s.kt)("h3",{id:"431-createlistcomponentjs"},"4.3.1 createListComponent.js"),(0,s.kt)("p",null,"src\\react-window\\createListComponent.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nexport default function createListComponent({\n    getEstimatedTotalSize,//\u83b7\u53d6\u9884\u8ba1\u7684\u603b\u9ad8\u5ea6\n    getItemSize,//\u6bcf\u4e2a\u6761\u76ee\u7684\u9ad8\u5ea6\n    getItemOffset,//\u83b7\u53d6\u6bcf\u4e2a\u6761\u76ee\u7684\u504f\u79fb\u91cf\n    getStartIndexForOffset,\n    getStopIndexForStartIndex\n}) {\n    return class extends React.Component {\n        state = { scrollOffset: 0 }\n        render() {\n            const { width, height, itemCount, children: ComponentType } = this.props;\n            const containerStyle = { position: 'relative', width, height, overflow: 'auto', willChange: 'transform' };\n            const contentStyle = { height: getEstimatedTotalSize(this.props), width: '100%' };\n            const items = [];\n            if (itemCount > 0) {\n                const [startIndex, stopIndex] = this._getRangeToRender();\n                for (let index = startIndex; index <= stopIndex; index++) {\n                    items.push(\n                        <ComponentType key={index} index={index} style={this._getItemStyle(index)} />\n                    );\n                }\n            }\n            return (\n+               <div style={containerStyle} onScroll={this.onScroll}>\n                    <div style={contentStyle}>\n                        {items}\n                    </div>\n                </div>\n            )\n        }\n+       onScroll = event => {\n+           const { scrollTop } = event.currentTarget;\n+           this.setState({ scrollOffset: scrollTop });\n+       }\n        _getItemStyle = (index) => {\n            const style = {\n                position: 'absolute',\n                width: '100%',\n                height: getItemSize(this.props),\n                top: getItemOffset(this.props, index)\n            };\n            return style;\n        }\n        _getRangeToRender = () => {\n            const { scrollOffset } = this.state;\n            const startIndex = getStartIndexForOffset(this.props, scrollOffset);\n            const stopIndex = getStopIndexForStartIndex(this.props, startIndex);\n            return [startIndex, stopIndex]\n        }\n    }\n}\n")),(0,s.kt)("h2",{id:"44-overscan-\u589e\u52a0\u7f13\u5b58\u533a\u57df"},"4.4. overscan (\u589e\u52a0\u7f13\u5b58\u533a\u57df)"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u8fc7\u626b\u63cf\u5b9e\u8d28\u4e0a\u662f\u5207\u65ad\u56fe\u7247\u7684\u8fb9\u7f18\uff0c\u4ee5\u786e\u4fdd\u6240\u6709\u91cd\u8981\u7684\u4e1c\u897f\u663e\u793a\u5728\u5c4f\u5e55\u4e0a ",(0,s.kt)("img",{parentName:"li",src:"https://static.zhufengpeixun.com/Overscan_1651392914894.png",alt:"img"}))),(0,s.kt)("h3",{id:"441-createlistcomponentjs"},"4.4.1 createListComponent.js"),(0,s.kt)("p",null,"src\\react-window\\createListComponent.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nexport default function createListComponent({\n    getEstimatedTotalSize,//\u83b7\u53d6\u9884\u8ba1\u7684\u603b\u9ad8\u5ea6\n    getItemSize,//\u6bcf\u4e2a\u6761\u76ee\u7684\u9ad8\u5ea6\n    getItemOffset,//\u83b7\u53d6\u6bcf\u4e2a\u6761\u76ee\u7684\u504f\u79fb\u91cf\n    getStartIndexForOffset,\n    getStopIndexForStartIndex\n}) {\n    return class extends React.Component {\n+       static defaultProps = {\n+           overscanCount: 2\n+       }\n        state = { scrollOffset: 0 }\n        render() {\n            const { width, height, itemCount, children: ComponentType } = this.props;\n            const containerStyle = { position: 'relative', width, height, overflow: 'auto', willChange: 'transform' };\n            const contentStyle = { height: getEstimatedTotalSize(this.props), width: '100%' };\n            const items = [];\n            if (itemCount > 0) {\n                const [startIndex, stopIndex] = this._getRangeToRender();\n                for (let index = startIndex; index <= stopIndex; index++) {\n                    items.push(\n                        <ComponentType key={index} index={index} style={this._getItemStyle(index)} />\n                    );\n                }\n            }\n            return (\n                <div style={containerStyle} onScroll={this.onScroll}>\n                    <div style={contentStyle}>\n                        {items}\n                    </div>\n                </div>\n            )\n        }\n        onScroll = event => {\n            const { scrollTop } = event.currentTarget;\n            this.setState({ scrollOffset: scrollTop });\n        }\n        _getItemStyle = (index) => {\n            const style = {\n                position: 'absolute',\n                width: '100%',\n                height: getItemSize(this.props),\n                top: getItemOffset(this.props, index)\n            };\n            return style;\n        }\n        _getRangeToRender = () => {\n            const { scrollOffset } = this.state;\n+           const { itemCount, overscanCount } = this.props;\n            const startIndex = getStartIndexForOffset(this.props, scrollOffset);\n            const stopIndex = getStopIndexForStartIndex(this.props, startIndex);\n            return [\n+               Math.max(0, startIndex - overscanCount),\n+               Math.max(0, Math.min(itemCount - 1, stopIndex + overscanCount)),\n                startIndex, stopIndex]\n        }\n    }\n}\n")))}p.isMDXComponent=!0}}]);