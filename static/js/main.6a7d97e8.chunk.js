(this.webpackJsonplinef=this.webpackJsonplinef||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(2),s=n(6),i=n(5),o=n(4),u=n(3),c=n.n(u),h=n(10),l=n.n(h),d=(n(9),n(7)),f=n(0),v=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(f.jsx)("svg",{height:2*this.props.y,width:2*this.props.x,children:Object(f.jsx)("circle",{cx:this.props.x,cy:this.props.y,r:this.props.r,stroke:"#555555",strokeWidth:"1",fill:this.props.color})})}}]),n}(c.a.PureComponent),b=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).onClick=a.onClick.bind(Object(s.a)(a)),a}return Object(a.a)(n,[{key:"onClick",value:function(){this.props.onClick(this.props.identifier)}},{key:"render",value:function(){var e;null!=this.props.item&&(e=Object(f.jsx)(v,{x:"22",y:"22",color:this.props.item.color,r:"p"===this.props.item.type?15:5}));var t=this.props.isActivated?"square square-active":"square";return Object(f.jsx)("div",{className:t,onClick:this.onClick,children:e})}}]),n}(c.a.PureComponent),p=function(){function e(t,n,a){Object(r.a)(this,e),this.f={reachable_index:[t],reachable_from:[t],newly_added:[t]},this.b={reachable_index:[n],reachable_from:[n],newly_added:[n]},this.func_getNeighbors=a}return Object(a.a)(e,[{key:"traceBackRoute",value:function(e,t){for(var n=[],r=e.reachable_index.indexOf(t);0!==r;){var a=e.reachable_from[r];n.push(e.reachable_from[a]),r=a}return n}},{key:"findCommonIndex",value:function(){var e,t=Object(d.a)(this.f.reachable_index);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(this.b.reachable_index.includes(n))return n}}catch(r){t.e(r)}finally{t.f()}return-1}},{key:"constructRouteFromCommonIndex",value:function(e){var t=this.traceBackRoute(this.f,e);return t.reverse(),t.push(e),t.concat(this.traceBackRoute(this.b,e)),t}},{key:"tryConstructRouteFromCommonIndex",value:function(){var e=this.findCommonIndex();return e>=0?this.constructRouteFromCommonIndex(e):[]}},{key:"scanNextLevelF",value:function(){this.scanNextLevel(this.f)}},{key:"scanNextLevelB",value:function(){this.scanNextLevel(this.b)}},{key:"scanNextLevel",value:function(e){var t,n=[],r=Object(d.a)(e.newly_added);try{for(r.s();!(t=r.n()).done;){var a=t.value,s=e.reachable_index.indexOf(a),i=this.func_getNeighbors(a);i=i.filter((function(t){return!e.reachable_index.includes(t)}));var o,u=Object(d.a)(i);try{for(u.s();!(o=u.n()).done;){var c=o.value;e.reachable_index.push(c),e.reachable_from.push(s)}}catch(h){u.e(h)}finally{u.f()}n=n.concat(i)}}catch(h){r.e(h)}finally{r.f()}return e.newly_added=n,e}},{key:"findRoute",value:function(){for(var e=!1,t=[];!e;){if(this.scanNextLevelF(),0===this.f.newly_added.length){e=!1;break}if((t=this.tryConstructRouteFromCommonIndex())&&t.length>0){e=!0;break}if(this.scanNextLevelB(),0===this.b.newly_added.length){e=!1;break}if((t=this.tryConstructRouteFromCommonIndex())&&t.length>0){e=!0;break}}return{found:e,route:t}}}]),e}(),m=function(){function e(t,n){Object(r.a)(this,e),this.type=t,this.color=n}return Object(a.a)(e,[{key:"isPresentItem",value:function(){return"p"===this.type}},{key:"isFutureItem",value:function(){return"f"===this.type}},{key:"isFree",value:function(){return"p"!==this.type}}],[{key:"copy",value:function(t){return new e(t.type,t.color)}},{key:"isIdentical",value:function(e,t){return null===e&&null===t||null!==e&&null!==t&&(e.type===t.type&&e.color===t.color)}}]),e}();function y(e,t,n,r){for(var a=[],s=t.reduce((function(e,t,a){return null===t&&n(a)&&!r.includes(a)&&e.push(a),e}),[]),i=0;i<e;i++){var o=Math.floor(Math.random()*s.length);a.push(s.splice(o,1)[0])}return a}function j(e,t,n){var r=n.w,a=n.h,s=[];return t.forEach((function(t){s=s.concat(function(e,t,n){var r=n.w,a=n.h,s=Math.floor(t/a)*r,i={start:s,end:s+r};return k(e,t,1,{forward_bound:i.end,backward_bound:i.start})}(e,t,{w:r,h:a})).concat(function(e,t,n){var r=n.w;n.h;return k(e,t,r,{forward_bound:e.length,backward_bound:0})}(e,t,{w:r,h:a})).concat(function(e,t,n){var r=n.w,a=(n.h,[]);return a=(a=a.concat(k(e,t,r+1,{forward_bound:e.length,backward_bound:0}))).concat(k(e,t,r-1,{forward_bound:e.length,backward_bound:0}))}(e,t,{w:r,h:a}))})),s}function k(e,t,n,r){for(var a=r.forward_bound,s=r.backward_bound,i=[],o=[],u=t+n;u<a&&m.isIdentical(e[u],e[t]);u+=n)o.push(u);for(var c=[],h=t-n;h>=s&&m.isIdentical(e[h],e[t]);h-=n)c.push(h);return c.length+o.length+1>=5&&(i=[t].concat(o,c)),i}var O=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).w=parseInt(a.props.w),a.h=parseInt(a.props.h),a.colors=["#FF9494","#FFD08B","#E2E68C","#A8F0D4","#9DE2FE","#C5B8F0","#FBD8FF"],a.noRandomF=3,a.state={squares:a.initArray(),selected:null},a.onSquareSelected=a.onSquareSelected.bind(Object(s.a)(a)),a.isSquareFree=a.isSquareFree.bind(Object(s.a)(a)),a.validNeighborIndex=a.validNeighborIndex.bind(Object(s.a)(a)),a}return Object(a.a)(n,[{key:"randomColor",value:function(){return this.colors[Math.floor(Math.random()*this.colors.length)]}},{key:"newPresentItem",value:function(e){return new m("p",e||this.randomColor())}},{key:"newFutureItem",value:function(){return new m("f",this.randomColor())}},{key:"initArray",value:function(){for(var e=Array(this.w*this.h).fill(null),t=this.noRandomF,n=y(5+t,e,(function(){return!0}),[]),r=0;r<5;r++)e[n.pop()]=this.newPresentItem();for(var a=0;a<t;a++)e[n.pop()]=this.newFutureItem();return e}},{key:"indexOfCurrentFutureItems",value:function(){var e,t=[],n=this.state.squares;for(e=0;e<n.length;e++)n[e]&&n[e].isFutureItem()&&t.push(e);return t}},{key:"lineWrapOfIndex",value:function(e){var t=Math.floor(e/this.h)*this.w;return{start:t,end:t+this.w}}},{key:"validNeighborIndex",value:function(e){var t=this,n=e-this.w,r=e-1,a=e+1,s=e+this.w,i=[],o=this.lineWrapOfIndex(e);return n>=0&&i.push(n),r>=o.start&&i.push(r),a<o.end&&i.push(a),s<this.w*this.h&&i.push(s),i.filter((function(e){return t.isSquareFree(e)}))}},{key:"isSquareFree",value:function(e){return null===this.state.squares[e]||this.state.squares[e].isFree()}},{key:"movable",value:function(e,t){var n=new p(e,t,this.validNeighborIndex).findRoute();return{found:n.found,route:n.route}}},{key:"updateState_moveFrom",value:function(e){this.setState({selected:e})}},{key:"updateState_moveItemTo",value:function(e){var t=this,n=null,r=this.indexOfCurrentFutureItems(),a=[e],s=this.state.squares.slice();if(s[e]&&s[e].isFutureItem()){var i=(n=y(this.noRandomF+1,s,this.isSquareFree,[e,this.state.selected])).pop();s[i]=this.newPresentItem(s[e].color),a.push(i),r.splice(r.indexOf(e),1)}else n=y(this.noRandomF,s,this.isSquareFree,[e,this.state.selected]);r.forEach((function(e){s[e]=t.newPresentItem(s[e].color),a.push(e)}));for(var o=0;o<this.noRandomF;o++)s[n.pop()]=this.newFutureItem();s[e]=m.copy(s[this.state.selected]),s[this.state.selected]=null;var u,c=j(s,a,{w:this.w,h:this.h}),h=Object(d.a)(c);try{for(h.s();!(u=h.n()).done;){var l=u.value;s[l]=null}}catch(f){h.e(f)}finally{h.f()}this.setState({squares:s,selected:null}),c.length>0&&this.props.score_incr(c.length)}},{key:"onSquareSelected",value:function(e){this.state.squares[e]&&this.state.squares[e].isPresentItem()?this.updateState_moveFrom(e):null!=this.state.selected&&this.movable(this.state.selected,e).found&&this.updateState_moveItemTo(e)}},{key:"renderSquare",value:function(e){return Object(f.jsx)(b,{item:this.state.squares[e],identifier:e,onClick:this.onSquareSelected,isActivated:this.state.selected===e},e)}},{key:"renderRows",value:function(){for(var e=[],t=0;t<this.state.squares.length;t++)e.push(this.renderSquare(t));return e}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"game-board",children:this.renderRows()})}}]),n}(c.a.PureComponent),x=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(f.jsx)("span",{children:this.props.score})}}]),n}(c.a.Component),w=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={score:0},a.increaseScore=a.increaseScore.bind(Object(s.a)(a)),a}return Object(a.a)(n,[{key:"increaseScore",value:function(e){this.setState({score:this.state.score+e})}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"game",children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"score-board",children:[Object(f.jsx)("span",{children:"Score: "}),Object(f.jsx)(x,{score:this.state.score})]}),Object(f.jsx)(O,{w:"9",h:"9",score_incr:this.increaseScore})]})})}}]),n}(c.a.PureComponent);l.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))},9:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.6a7d97e8.chunk.js.map