"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[456],{2456:function(n,e,t){t.r(e),t.d(e,{default:function(){return V}});var r,o,i,a,s,c,d,l,p=t(6382),x=t(5705),u=t(6727),f=t(168),h=t(7686),m=(0,h.Z)(x.l0)(r||(r=(0,f.Z)(["\n    display: flex;\n    flex-flow: column wrap;\n    gap: 25px;\n    font-size: 22px;\n    ","\n"])),""),b=h.Z.label(o||(o=(0,f.Z)(["\n    font-weight: 500;"]))),g=(0,h.Z)(x.gN)(i||(i=(0,f.Z)(["\n        box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 6px 12px;\n    gap: 4px;\n    width: 100%;\n    height: 32px;\n    background: #455A64;\n    border: none;\n    color: #fff;\n    outline-with: 1.75;\n    outline-color: #455A64;\n\n    outline-style: solid;\n    border-radius: 4px;\n    &:hover,\n    &:focus,\n    &:focus-visible {\n        outline-color: #FED36A;\n        border: none;\n    }\n"]))),w=h.Z.button(a||(a=(0,f.Z)(["\n    padding: 5px 20px;\n    color: black;\n    width: 200px;\n    height: 48px;\n    border-radius: 12px;\n    background-color: #fed36a;\n    cursor: pointer;\n    font-size: 24px;\n    outline: none;\n    border: 1px solid;\n    &:hover {\n    background-color: white;\n    border: none;\n    -webkit-box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);\n    -moz-box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);\n    box-shadow: inset 10px 10px 56px -8px rgba(69,90,100,0.55);\n    }\n"]))),Z=(0,h.Z)(x.Bc)(s||(s=(0,f.Z)(["\n    color: red;\n    font-size: 20px;\n    text-align: center;\n"]))),j=t(9434),v=t(694),y=function(n){return n.contacts.items},k=function(n){return n.contacts.isLoading},z=function(n){var e=y(n),t=function(n){return n.contacts.filter}(n);return t?e.filter((function(n){return n.name.toLowerCase().includes(t)})):e},C=t(3329),A=u.Ry().shape({name:u.Z_().required(),number:u.Z_().required()}),F={name:"",number:""},L=(0,p.x0)(),_=(0,p.x0)(),q=function(){var n=(0,j.I0)(),e=(0,j.v9)(y);return(0,C.jsx)(x.J9,{initialValues:F,onSubmit:function(t,r){var o=r.resetForm,i=t.name.trim();if(e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()})))return alert("".concat(i," is already in contacts")),void o();var a=t.number,s={id:(0,p.x0)(),name:i,number:a};n((0,v.uK)(s)),o()},validationSchema:A,children:(0,C.jsxs)(m,{autoComplete:"off",children:[(0,C.jsx)(b,{htmlFor:L,children:"Name"}),(0,C.jsx)(g,{id:L,type:"text",name:"name",pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,C.jsx)(Z,{name:"name",component:"div"}),(0,C.jsx)(b,{htmlFor:_,children:(0,C.jsx)("span",{children:"Number"})}),(0,C.jsx)(g,{id:_,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,C.jsx)(Z,{name:"number",component:"div"}),(0,C.jsx)(w,{type:"submit",children:"Add contact"})]})})},I=h.Z.ul(c||(c=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 10px;\n    padding: 0;\n    list-style: none;\n    font-size: 22px;\n    width: 550px;\n    align-items: stretch;\n"]))),J=h.Z.li(d||(d=(0,f.Z)(["\n    display: flex;\n    margin-top: 25px;\n    gap: 40px;\n    align-items: center;\n    font-size: 22px;\n    justify-content: space-between;\n"]))),N=h.Z.button(l||(l=(0,f.Z)(["\n    border-radius: 12px;\n    width: 150px;\n    text-transform: capitalize;\n    align-items: center;\n    justify-content: center;\n    padding: 5px 20px;\n    color: #333340;\n    border: 1px solid;\n    width: 155px;\n    color: white;\n    height: 48px;\n    background-color: #bb2d3b;\n    cursor: pointer;\n    font-size: 22px;\n    outline: none;\n    &:hover {\n    background-color: #dc3545;\n    border: none;\n    box-shadow: 10px 10px 25px 0px rgba(187,45,59,1);\n    }\n"])));var E,B,D,K=function(){var n=(0,j.I0)(),e=(0,j.v9)(z);return(0,C.jsx)(I,{children:e.map((function(e,t){var r=e.id,o=e.name,i=e.number;return(0,C.jsxs)(J,{children:[(0,C.jsxs)("span",{children:[t+1,". ",o,": ",i," "]}),(0,C.jsx)(N,{onClick:function(){return function(e){n((0,v.GK)(e))}(r)},children:"delete"})]},r)}))})},P=t(4302),S=h.Z.div(E||(E=(0,f.Z)(["\n    display: flex;\n    flex-flow: column wrap;\n    gap: 25px;\n    font-size: 22px;\n    max-width: 450px;\n"]))),U=h.Z.label(B||(B=(0,f.Z)(["\n    font-weight: 500;\n"]))),G=h.Z.input(D||(D=(0,f.Z)(["\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 6px 12px;\n    gap: 4px;\n    width: 100%;\n    height: 32px;\n    background: #455A64;\n    border: none;\n    color: #fff;\n    outline-with: 1.75;\n    outline-color: #455A64;\n\n    outline-style: solid;\n    border-radius: 4px;\n    &:hover,\n    &:focus,\n    &:focus-visible {\n        outline-color: #FED36A;\n        border: none;\n    }\n"])));var M=function(){var n=(0,j.I0)();return(0,C.jsxs)(S,{children:[(0,C.jsx)(U,{htmlFor:"filter",children:"Find contacts by name:"}),(0,C.jsx)(G,{id:"filter",type:"text",name:"filter",onChange:function(e){n((0,P.T)(e.target.value.toLowerCase().trim()))}})]})},R=t(7805),T=t(2791);function V(){var n=(0,j.I0)(),e=(0,j.v9)(k);return(0,T.useEffect)((function(){n((0,v.yF)())}),[n]),(0,C.jsxs)(R.FJ,{children:[(0,C.jsx)(R.C6,{children:"Phonebook"}),(0,C.jsx)(q,{}),e&&(0,C.jsx)("p",{children:"Loading..."}),(0,C.jsx)(R.bU,{children:"Contacts"}),(0,C.jsx)(M,{}),(0,C.jsx)(K,{})]})}},7805:function(n,e,t){t.d(e,{C6:function(){return d},FJ:function(){return c},bU:function(){return l}});var r,o,i,a=t(168),s=t(7686),c=s.Z.div(r||(r=(0,a.Z)(["\n    padding: 0 20px;\n    weight: 100%;\n        margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n    align-items: center;\n"]))),d=s.Z.h1(o||(o=(0,a.Z)(["\n    margin-bottom: 20px;\n    text-transform: uppercase\n"]))),l=s.Z.h2(i||(i=(0,a.Z)(["\n    margin-top: 20px;\n    margin-bottom: 20px;\n"])))}}]);
//# sourceMappingURL=456.0b707819.chunk.js.map