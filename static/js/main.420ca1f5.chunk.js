(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{18:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),r=c(19),a=c.n(r),i=c(21),h=c(8),o=c(11),l=c(13),d=c(12),j=(c(18),function e(t,c){Object(h.a)(this,e),this.searchDate=new Date,this.searchTerm=t,this.searchSortBy=c}),b=c.p+"static/media/logo_react.44461cfe.png",u="search",p="history",O="search_by_date",x="search",y=c(1),m=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(h.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=null;return t=this.props.isLoading?Object(y.jsx)("div",{children:"Fetching API results ..."}):this.props.content&&this.props.content.length?this.props.content.map((function(t,c){return"search"===e.props.pageRoute?function(e,t){var c="".concat(e.points," point").concat(1===e.points?"":"s"),s="".concat(e.num_comments," comment").concat(1===e.num_comments?"":"s");return Object(y.jsxs)("a",{href:"https://news.ycombinator.com/item?id=".concat(e.objectID),children:[Object(y.jsxs)("div",{children:[t+1,"."]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"result-head",children:e.title}),Object(y.jsx)("div",{className:"result-desc",children:"".concat(c," | ").concat(s)})]})]})}(t,c):function(e,t){var c=e.searchDate.toLocaleString(),s=e.searchSortBy===x?"relevance":"date";return Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:[t+1,"."]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{className:"result-head",children:e.searchTerm}),Object(y.jsx)("div",{className:"result-desc",children:"".concat(c," | Sorted by ").concat(s)})]})]})}(t,c)})):Object(y.jsxs)("div",{children:["No ",this.props.pageRoute," results!"]}),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{id:"search-bar",children:[Object(y.jsx)("label",{children:"Search"}),Object(y.jsx)("input",{disabled:this.props.isReadOnly,onChange:this.props.onSearchTermChange,onKeyDown:this.props.onSearchKeyDown}),Object(y.jsx)("button",{disabled:this.props.isReadOnly,onClick:this.props.onSearchClick,children:"\u2192"}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{defaultChecked:"true",disabled:this.props.isReadOnly,onChange:this.props.onSearchSortByChange,type:"checkbox"}),"Sort by relevance"]})]}),Object(y.jsx)("div",{id:"search-results",children:t})]})}}]),c}(s.Component),g=c(10),S=c(2),v=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(h.a)(this,c);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!1,searchHistory:[],searchResults:[],searchSortBy:x,searchTerm:""},e.handleKeyDown=function(t){"Enter"===t.key&&e.handleSearch()},e.handleSearch=function(){if(!e.state.searchTerm||!e.state.searchTerm.trim())e.setState({searchResults:[]});else{e.setState({isLoading:!0,searchHistory:[].concat(Object(i.a)(e.state.searchHistory),[new j(e.state.searchTerm,e.state.searchSortBy)])});var t="https://hn.algolia.com/api/v1/".concat(e.state.searchSortBy,"?tags=story&query=").concat(e.state.searchTerm);fetch(t).then((function(e){return e.json()})).then((function(t){console.log(t.hits),e.setState({isLoading:!1,searchResults:t.hits})})).catch((function(e){console.error("Error:",e)}))}},e.handleSearchSortByChange=function(t){e.setState({searchSortBy:t.target.checked?x:O})},e.handleSearchTermChange=function(t){e.setState({searchTerm:t.target.value})},e}return Object(o.a)(c,[{key:"render",value:function(){return Object(y.jsx)(g.a,{basename:"/hacker-news",children:Object(y.jsxs)("div",{id:"content",children:[Object(y.jsxs)("nav",{children:[Object(y.jsx)("img",{src:b}),Object(y.jsxs)("span",{children:[Object(y.jsx)("strong",{children:"Hacker News"})," Search App"]}),Object(y.jsxs)("ul",{children:["[",Object(y.jsx)("li",{children:Object(y.jsx)(g.b,{to:"/search",children:"search"})}),"|",Object(y.jsx)("li",{children:Object(y.jsx)(g.b,{to:"/history",children:"history"})}),"]"]}),Object(y.jsxs)("div",{children:[Object(y.jsx)("strong",{children:"Made by:"}),Object(y.jsx)("a",{href:"https://www.linkedin.com/in/auwilliams/",children:"Austin Williams"})]})]}),Object(y.jsxs)(S.d,{children:[Object(y.jsx)(S.b,{path:"/search",children:Object(y.jsx)(m,{content:this.state.searchResults,isLoading:this.state.isLoading,isReadOnly:!1,onSearchClick:this.handleSearch,onSearchKeyDown:this.handleKeyDown,onSearchSortByChange:this.handleSearchSortByChange,onSearchTermChange:this.handleSearchTermChange,pageRoute:u})}),Object(y.jsx)(S.b,{path:"/history",children:Object(y.jsx)(m,{content:this.state.searchHistory,isReadOnly:!0,pageRoute:p})}),Object(y.jsx)(S.a,{from:"/",to:"/search"})]})]})})}}]),c}(s.Component);c(35);a.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(v,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.420ca1f5.chunk.js.map