"use strict";(self.webpackChunkpassword_generator=self.webpackChunkpassword_generator||[]).push([[199],{199:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(791),i=t(434),a=t(674),o=t(366),s=t(462);var l=t(721),c=t(545);function d(e,n){var t=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=function(e){return n&&(0,r.isValidElement)(e)?n(e):e}(e)})),t}function u(e,n,t){return null!=t[n]?t[n]:e.props[n]}function p(e,n,t){var i=d(e.children),a=function(e,n){function t(t){return t in n?n[t]:e[t]}e=e||{},n=n||{};var r,i=Object.create(null),a=[];for(var o in e)o in n?a.length&&(i[o]=a,a=[]):a.push(o);var s={};for(var l in n){if(i[l])for(r=0;r<i[l].length;r++){var c=i[l][r];s[i[l][r]]=t(c)}s[l]=t(l)}for(r=0;r<a.length;r++)s[a[r]]=t(a[r]);return s}(n,i);return Object.keys(a).forEach((function(o){var s=a[o];if((0,r.isValidElement)(s)){var l=o in n,c=o in i,d=n[o],p=(0,r.isValidElement)(d)&&!d.props.in;!c||l&&!p?c||!l||p?c&&l&&(0,r.isValidElement)(d)&&(a[o]=(0,r.cloneElement)(s,{onExited:t.bind(null,s),in:d.props.in,exit:u(s,"exit",e),enter:u(s,"enter",e)})):a[o]=(0,r.cloneElement)(s,{in:!1}):a[o]=(0,r.cloneElement)(s,{onExited:t.bind(null,s),in:!0,exit:u(s,"exit",e),enter:u(s,"enter",e)})}})),a}var h=Object.values||function(e){return Object.keys(e).map((function(n){return e[n]}))},f=function(e){function n(n,t){var r,i=(r=e.call(this,n,t)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,l.Z)(n,e);var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(e,n){var t,i,a=n.children,o=n.handleExited;return{children:n.firstRender?(t=e,i=o,d(t.children,(function(e){return(0,r.cloneElement)(e,{onExited:i.bind(null,e),in:!0,appear:u(e,"appear",t),enter:u(e,"enter",t),exit:u(e,"exit",t)})}))):p(e,a,o),firstRender:!1}},t.handleExited=function(e,n){var t=d(this.props.children);e.key in t||(e.props.onExited&&e.props.onExited(n),this.mounted&&this.setState((function(n){var t=(0,s.Z)({},n.children);return delete t[e.key],{children:t}})))},t.render=function(){var e=this.props,n=e.component,t=e.childFactory,i=(0,o.Z)(e,["component","childFactory"]),a=this.state.contextValue,s=h(this.state.children).map(t);return delete i.appear,delete i.enter,delete i.exit,null===n?r.createElement(c.Z.Provider,{value:a},s):r.createElement(c.Z.Provider,{value:a},r.createElement(n,i,s))},n}(r.Component);f.propTypes={},f.defaultProps={component:"div",childFactory:function(e){return e}};var m=f,v=t(504);var x=t.p+"static/media/view.fd11c9cadb7764f5e1e5398827eaa55f.svg";var E=t.p+"static/media/not-view.7eb2dc1ce774417b7383a6971358c1b9.svg",_=t(506),b=t(184),w=function(){var e=(0,i.v9)((function(e){return e.notes})).notes,n=(0,i.I0)(),t=e.map((function(e){var t=e.id,r=e.name,i=e.password,o=e.showPassword;return(0,b.jsx)(a.Z,{timeout:500,classNames:"item",children:(0,b.jsxs)("li",{className:"notes__item",children:[(0,b.jsx)("h2",{className:"notes__tittle",children:r}),(0,b.jsx)("h3",{className:"notes__password",children:o?i:"***********"}),(0,b.jsx)("img",{src:o?x:E,alt:"View password",className:"notes__show-password",onClick:function(){return function(e){n({type:_.a.SHOW_PASSWORD,payload:e})}(t)}}),(0,b.jsx)("span",{className:"notes__data",children:(new Date).toISOString().slice(0,10)}),(0,b.jsx)("button",{className:"notes__delete",onClick:function(){return function(e){n({type:_.a.DELETE_NOTE,payload:e})}(t)}})]},t)},t)}));return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("main",{className:"notes",children:[(0,b.jsx)(v.rU,{to:"/",className:"notes__become-to-generator",children:"Back to generator"}),e.length?null:(0,b.jsx)("div",{className:"notes__default-message",children:"Your passwords will be stored here"}),(0,b.jsx)(m,{className:"notes__list",children:t}),(0,b.jsx)("button",{className:"notes__add-button",onClick:function(){n({type:_.a.TOGGLE_SHOWMODAL,payload:!0})},children:"+"})]})})}}}]);
//# sourceMappingURL=199.fbe412ce.chunk.js.map