(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),o=n.n(r),i=n(4),s=n(5),d=n(6),b=n(8),l=n(7),u=n(0),j=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:t}),n]})},h=function(e){var t=e.feedback,n=e.onLeaveFeedback;return Object(u.jsx)("button",{type:"button","data-feedback":t,onClick:n,children:t})},v=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(u.jsx)(h,{feedback:e,onLeaveFeedback:n})}))},O=function(e){var t=e.message;return Object(u.jsx)("p",{children:t})},f=function(e){var t=e.good,n=e.bad,a=e.neutral,c=e.total,r=e.positivePercantage;return Object(u.jsxs)(u.Fragment,{children:[c>0&&Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good: ",t]}),Object(u.jsxs)("li",{children:["Neutral: ",a]}),Object(u.jsxs)("li",{children:["Bad: ",n]}),Object(u.jsxs)("li",{children:["Total: ",c]}),Object(u.jsxs)("li",{children:["Positive Percentage: ",r]})]}),0===c&&Object(u.jsx)(O,{message:"No Feedback given"})]})},g=(n(14),["good","neutral","bad"]),k=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleFeedback=function(t){var n=t.target.dataset.feedback;e.setState((function(e){return Object(i.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositivePercantage=function(){var t=e.state.good,n=e.countTotalFeedback();return n?Math.round(t/n*100):0},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),r=this.countPositivePercantage();return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{title:"Please leave feedback",children:Object(u.jsx)(v,{options:g,onLeaveFeedback:this.handleFeedback})}),Object(u.jsx)(j,{title:"Statistics",children:Object(u.jsx)(f,{good:t,neutral:n,bad:a,total:c,positivePercantage:r})})]})}}]),n}(a.Component);o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.11b63f1f.chunk.js.map