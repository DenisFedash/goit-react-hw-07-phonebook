"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[429,2],{629:function(n,t,e){e.d(t,{HD:function(){return l},II:function(){return d},W2:function(){return c},zx:function(){return p}});var r,o,i,a,u=e(168),s=e(499),c=s.Z.form(r||(r=(0,u.Z)(["\n  margin-bottom: 30px;\n  margin-top: 5px;\n"]))),l=s.Z.label(o||(o=(0,u.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  font-weight: 500;\n  font-size: 20px;\n"]))),d=s.Z.input(i||(i=(0,u.Z)(["\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 5px;\n  width: 350px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n  :focus {\n    outline-color: blueviolet;\n  }\n"]))),p=s.Z.button(a||(a=(0,u.Z)(["\n  padding: 10px 20px;\n  background-color: teal;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  opacity: 0.8;\n  transition: opacity 250ms var(--timingFn);\n  cursor: pointer;\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  text-transform: uppercase;\n  :hover {\n    background-color: #bc9428;\n  }\n"])))},87:function(n,t,e){e.d(t,{HC:function(){return p},HS:function(){return f},Xn:function(){return l},aV:function(){return d},ui:function(){return x}});var r,o,i,a,u,s=e(168),c=e(499),l=c.Z.div(r||(r=(0,s.Z)(["\n  /* position: relative; */\n"]))),d=c.Z.ul(o||(o=(0,s.Z)(["\n  margin-top: 30px;\n  font-weight: 500;\n  font-size: 18px;\n"]))),p=c.Z.li(i||(i=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 4px;\n  background-color: lightgray;\n  padding: 10px;\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),x=c.Z.button(a||(a=(0,s.Z)(["\n  width: 60px;\n  height: auto;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  svg {\n    vertical-align: middle;\n    :hover {\n      fill: red;\n    }\n  }\n"]))),f=c.Z.button(u||(u=(0,s.Z)(["\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  background-color: transparent;\n  margin-top: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n  :hover {\n    color: orange;\n  }\n\n  svg {\n    vertical-align: middle;\n  }\n"])))},429:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r=e(885),o=e(87),i=e(297),a=e(791),u=e(629),s=e(184),c=function(n){var t=n.value,e=n.onChange;return(0,s.jsxs)(u.HD,{children:["Find contact by name",(0,s.jsx)(u.II,{type:"text",value:t,onChange:function(n){e(n.currentTarget.value)}})]})},l=e(871),d=e(126),p=e(140),x=e(425),f=function(n){var t=n.items,e=(0,i.Nt)(),a=(0,r.Z)(e,2),u=a[0],c=a[1].isLoading;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("p",{children:[t.name,": ",t.phone]}),(0,s.jsx)(o.ui,{type:"button",onClick:function(){u(t.id),p.ZP.success("The ".concat(t.name," has been removed from your list."))},disabled:c,children:(0,s.jsx)(x.AWu,{size:"1.3em"})})]})},g=e(854),h=e(2),b=function(){var n=(0,i.wY)(),t=n.data,e=n.isFetching,u=n.error,p=(0,a.useState)(""),x=(0,r.Z)(p,2),b=x[0],m=x[1],v=(0,l.s0)(),Z=(0,a.useMemo)((function(){var n;return null!==(n=null===t||void 0===t?void 0:t.filter((function(n){return n.name.toLowerCase().includes(b.toLowerCase())})))&&void 0!==n?n:[]}),[b,t]);return(0,s.jsxs)(o.Xn,{children:[(0,s.jsx)(o.HS,{type:"button",onClick:function(){return v("/create")},children:(0,s.jsx)(d.RYR,{size:"1.5em"})}),(0,s.jsx)(c,{value:b,onChange:m}),(0,s.jsxs)(o.aV,{children:[e&&(0,s.jsx)(g.a,{}),u&&(0,s.jsx)(h.default,{data:u.data,status:u.status}),t&&Z.map((function(n){return(0,s.jsx)(o.HC,{children:(0,s.jsx)(f,{id:n.id,items:n})},n.id)}))]})]})};function m(){var n=(0,i.wY)().data;return(0,s.jsx)(s.Fragment,{children:n&&0!==n.lenght?(0,s.jsx)(b,{}):(0,s.jsx)("p",{children:"Your phonebook is empty. Please add contact."})})}},2:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r,o,i=e(55),a=e(168),u=e(499),s=e(504),c=u.Z.h1(r||(r=(0,a.Z)(["\n  font-size: 20px;\n  display: flex;\n  justify-content: center;\n\n  font-weight: bold;\n  color: black;\n  letter-spacing: 2px;\n  padding-top: 35px;\n  padding-bottom: 4px;\n"]))),l=(0,u.Z)(s.rU)(o||(o=(0,a.Z)(["\n  margin-left: 10px;\n"]))),d=e(184);function p(){return(0,d.jsx)(i.k,{children:(0,d.jsxs)(c,{children:["404 Page not found! Please follow to"," ",(0,d.jsx)(l,{to:"/",children:"Home Page"})]})})}}}]);
//# sourceMappingURL=429.67cb3d9d.chunk.js.map