(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{15:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(16),r=c.n(n),i=c(19),h=c(9),o=c(17),l=c(21),d=c(20),j=(c(15),c.p+"static/media/github-brands.e2f07326.svg"),b=function e(t,c){Object(h.a)(this,e),this.searchDate=new Date,this.searchTerm=t,this.searchSortBy=c},u=c.p+"static/media/info-circle-solid.92d3ccd5.svg",m="search",O="history",x="search_by_date",g="search",f=c(0);function y(e){var t=e.content,c=e.isLoading,s=e.isReadOnly,a=e.onSearchClick,n=e.onSearchKeyDown,r=e.onSearchSortByChange,i=e.onSearchTermChange,h=e.pageRoute;return Object(f.jsxs)("div",{className:"content",children:[Object(f.jsxs)("div",{id:"search-bar",children:[Object(f.jsx)("label",{children:"Search"}),Object(f.jsx)("input",{disabled:s,onChange:i,onKeyDown:n}),Object(f.jsx)("button",{disabled:s,onClick:a,children:"\u2192"}),Object(f.jsxs)("label",{children:[Object(f.jsx)("input",{defaultChecked:"true",disabled:s,onChange:r,type:"checkbox"}),"Sort by relevance"]})]}),Object(f.jsx)("div",{id:"search-results",children:c?Object(f.jsx)("div",{children:"Fetching API results ..."}):t&&t.length?t.map((function(e,t){return h===m?function(e,t){var c="".concat(e.points," point").concat(1===e.points?"":"s"),s="".concat(e.num_comments," comment").concat(1===e.num_comments?"":"s");return Object(f.jsxs)("a",{href:"https://news.ycombinator.com/item?id=".concat(e.objectID),children:[Object(f.jsxs)("div",{children:[t+1,"."]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"result-head",children:e.title}),Object(f.jsx)("div",{className:"result-desc",children:"".concat(c," | ").concat(s)})]})]},e.objectID)}(e,t):function(e,t){var c=e.searchDate.toLocaleString(),s=e.searchSortBy===g?"relevance":"date";return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[t+1,"."]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"result-head",children:e.searchTerm}),Object(f.jsx)("div",{className:"result-desc",children:"".concat(c," | Sorted by ").concat(s)})]})]},e.searchDate.getTime())}(e,t)})):Object(f.jsxs)("div",{children:["No ",h," results!"]})})]})}var p=c.p+"static/media/times-circle-solid.13560fb8.svg",S=c(10),v=c(2),w=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(h.a)(this,c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!1,searchHistory:[],searchResults:[],searchSortBy:g,searchTerm:"",showInfo:!0},e.handleKeyDown=function(t){"Enter"===t.key&&e.handleSearch()},e.handleSearch=function(){if(!e.state.searchTerm||!e.state.searchTerm.trim())e.setState({searchResults:[]});else{e.setState({isLoading:!0,searchHistory:[].concat(Object(i.a)(e.state.searchHistory),[new b(e.state.searchTerm,e.state.searchSortBy)])});var t="https://hn.algolia.com/api/v1/".concat(e.state.searchSortBy,"?tags=story&query=").concat(e.state.searchTerm);fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,searchResults:t.hits})})).catch((function(t){console.error("Error:",t),e.setState({isLoading:!1,searchResults:[]})}))}},e.handleSearchSortByChange=function(t){e.setState({searchSortBy:t.target.checked?g:x})},e.handleSearchTermChange=function(t){e.setState({searchTerm:t.target.value})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(f.jsxs)(S.a,{children:[this.state.showInfo&&Object(f.jsxs)("div",{className:"panel",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsx)("img",{src:u,alt:"Info circle icon"}),Object(f.jsx)("strong",{children:"Information"}),Object(f.jsx)("button",{onClick:function(){return e.setState({showInfo:!1})},children:Object(f.jsx)("img",{src:p,alt:"Close icon",className:"close"})})]}),Object(f.jsxs)("div",{className:"content",children:["Hello! \ud83d\udc4b This web app is a small demo built with React JS and the ",Object(f.jsx)("a",{href:"https://hn.algolia.com/api",children:"Hacker News Algolia API"}),". All code was written by me with styles inspired by the actual website. I'm not affiliated with Hacker News, nor did I use any of their source code. This project is available on ",Object(f.jsx)("a",{href:"https://github.com/au-williams/hacker-news",children:"GitHub"})," along with its requirements. SVG icons are free to use with attribution to the free ",Object(f.jsx)("a",{href:"https://fontawesome.com/license",children:"FontAwesome license"}),". Thanks!"]})]}),Object(f.jsxs)("div",{className:"panel",children:[Object(f.jsxs)("nav",{className:"header",children:[Object(f.jsx)("a",{href:"https://github.com/au-williams/hacker-news",children:Object(f.jsx)("img",{src:j,alt:"GitHub icon"})}),Object(f.jsx)("strong",{children:"Hacker News "}),Object(f.jsx)("span",{children:"Search Demo"}),Object(f.jsxs)("ul",{children:["[",Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/search",children:"search"})}),"|",Object(f.jsx)("li",{children:Object(f.jsx)(S.b,{to:"/history",children:"history"})}),"]"]}),Object(f.jsxs)("span",{children:[Object(f.jsx)("strong",{children:"Made by: "}),Object(f.jsx)("a",{href:"https://www.linkedin.com/in/auwilliams/",children:"Austin Williams"})]})]}),Object(f.jsxs)(v.d,{children:[Object(f.jsx)(v.b,{path:"/search",children:Object(f.jsx)(y,{content:this.state.searchResults,isLoading:this.state.isLoading,isReadOnly:!1,onSearchClick:this.handleSearch,onSearchKeyDown:this.handleKeyDown,onSearchSortByChange:this.handleSearchSortByChange,onSearchTermChange:this.handleSearchTermChange,pageRoute:m})}),Object(f.jsx)(v.b,{path:"/history",children:Object(f.jsx)(y,{content:this.state.searchHistory,isReadOnly:!0,pageRoute:O})}),Object(f.jsx)(v.a,{from:"/",to:"/search"})]})]})]})}}]),c}(s.Component);c(35);r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3da117e8.chunk.js.map