"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[60],{629:function(n,t,e){e.d(t,{HD:function(){return d},II:function(){return p},W2:function(){return u},zx:function(){return l}});var r,o,a,i,s=e(168),c=e(499),u=c.Z.form(r||(r=(0,s.Z)(["\n  margin-bottom: 30px;\n  margin-top: 5px;\n"]))),d=c.Z.label(o||(o=(0,s.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  font-weight: 500;\n  font-size: 20px;\n"]))),p=c.Z.input(a||(a=(0,s.Z)(["\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n  padding: 5px;\n  width: 350px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 15px;\n  :focus {\n    outline-color: blueviolet;\n  }\n"]))),l=c.Z.button(i||(i=(0,s.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 20px;\n  width: 170px;\n  height: 45px;\n  background-color: teal;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  opacity: 0.8;\n  transition: opacity 250ms var(--timingFn);\n  cursor: pointer;\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  text-transform: uppercase;\n  :hover {\n    background-color: #bc9428;\n  }\n"])))},87:function(n,t,e){e.d(t,{HC:function(){return l},HS:function(){return x},Xn:function(){return d},aV:function(){return p},ui:function(){return f}});var r,o,a,i,s,c=e(168),u=e(499),d=u.Z.div(r||(r=(0,c.Z)(["\n  /* position: relative; */\n"]))),p=u.Z.ul(o||(o=(0,c.Z)(["\n  margin-top: 30px;\n  font-weight: 500;\n  font-size: 18px;\n"]))),l=u.Z.li(a||(a=(0,c.Z)(["\n  display: flex;\n  justify-content: space-between;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 4px;\n  background-color: lightgray;\n  padding: 10px;\n  :not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),f=u.Z.button(i||(i=(0,c.Z)(["\n  /* width: 60px; */\n  height: auto;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n  padding: 0;\n  svg {\n    vertical-align: middle;\n    :hover {\n      fill: red;\n    }\n  }\n"]))),x=u.Z.button(s||(s=(0,c.Z)(["\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  border: none;\n  background-color: transparent;\n  margin-top: 10px;\n  margin-right: 10px;\n  cursor: pointer;\n  :hover {\n    color: orange;\n  }\n\n  svg {\n    vertical-align: middle;\n  }\n"])))},660:function(n,t,e){e.d(t,{$:function(){return s}});var r,o=e(168),a=e(499).Z.div(r||(r=(0,o.Z)(["\n  display: flex;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid orange;\n  border-radius: 50%;\n  width: 1em;\n  height: 1em;\n  animation: spin 2s linear infinite;\n  align-items: center;\n  text-align: center;\n  justify-content: center;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]))),i=e(184),s=function(){return(0,i.jsx)(a,{})}},60:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r=e(885),o=e(629),a=e(140),i=e(297),s=e(871),c=e(87),u=e(36),d=e(791),p=e(660),l=e(184);function f(){var n=(0,s.s0)(),t=(0,i.Tn)(),e=(0,r.Z)(t,2),f=e[0],x=e[1].isLoading,h=(0,i.wY)().data,m=(0,d.useState)(""),g=(0,r.Z)(m,2),b=g[0],Z=g[1],v=(0,d.useState)(""),y=(0,r.Z)(v,2),w=y[0],k=y[1],j=function(){Z(""),k("")},z=function(n){var t=n.target,e=t.name,r=t.value;switch(e){case"name":Z(r);break;case"phone":k(r);break;default:return}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c.HS,{type:"button",onClick:function(){return n("/")},children:(0,l.jsx)(u.wFh,{size:"2em"})}),(0,l.jsxs)(o.W2,{onSubmit:function(n){n.preventDefault();var t={name:b,phone:w};!function(n){return h.find((function(t){return t.name.toLowerCase()===n.toLowerCase()}))}(b)?!function(n){return h.find((function(t){return t.phone===n}))}(w)?!function(n,t){return""===n.trim()||""===t.trim()}(b,w)?(f(t),a.ZP.success("".concat(b," ").concat(w," added successfully!"))):a.ZP.error("\ud83d\ude31 Enter the contacts name and number phone!"):(0,a.ZP)("\ud83e\udd14 ".concat(w," is already in the contacts!")):(0,a.ZP)("\ud83e\udd14 ".concat(b," is already in the contacts!")),j()},children:[(0,l.jsxs)(o.HD,{children:["Name",(0,l.jsx)(o.II,{type:"text",name:"name",value:b,onChange:z,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)(o.HD,{children:["Number",(0,l.jsx)(o.II,{type:"tel",name:"phone",value:w,onChange:z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)(o.zx,{type:"submit",disabled:x,children:x?(0,l.jsx)(p.$,{}):"Add contact"})]})]})}function x(){return(0,l.jsx)(f,{})}}}]);
//# sourceMappingURL=60.42ee706b.chunk.js.map