(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={Container:"Filter_Container__reLkS",FilterInput:"Filter_FilterInput__n6O4N",FilterHeader:"Filter_FilterHeader__25KuN"}},16:function(t,e,n){t.exports={Container:"ContactForm_Container__1If1P",InputName:"ContactForm_InputName__3upLn",Notification:"ContactForm_Notification__QhX9H"}},17:function(t,e,n){t.exports={Container:"ContactList_Container__2y4u7",Contact:"ContactList_Contact__tjKfg"}},27:function(t,e,n){t.exports={Container:"App_Container__3_n88"}},33:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n(25),s=n.n(c),o=(n(33),n(13)),i=n(6),l=n(7),u=n(9),h=n(8),j=n(16),b=n.n(j),d=n(26),f=n.n(d),p=(n(42),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:"",alert:!1},t.handleContact=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(o.a)({},a,r))},t.addContact=function(e){if(e.preventDefault(),!t.checkContact()){var n={id:f.a.generate(),name:t.state.name,number:t.state.number};t.props.contacts.unshift(n),t.props.refreshState(t.props.contacts),t.clearInput()}},t.checkContact=function(){if(0!=t.props.contacts.length)return t.props.contacts.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()}))?(t.setState({alert:!0}),!0):void 0},t.clearInput=function(){t.setState({name:"",number:""})},t.alertState=function(){t.setState({alert:!1})},t.alert=!1,t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.name;return Object(a.jsxs)("div",{className:b.a.Container,children:[Object(a.jsxs)("form",{children:[Object(a.jsxs)("label",{children:["Name ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:this.state.name,name:"name",onChange:this.handleContact})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{children:["Number ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:this.state.number,name:"number",onChange:this.handleContact})]})]}),Object(a.jsx)("button",{type:"button",onClick:this.addContact,children:"Add contact"}),this.state.alert&&Object(a.jsxs)("div",{className:b.a.Notification,children:[Object(a.jsxs)("h2",{children:[t," is already in contacts"]}),Object(a.jsx)("h3",{children:"Please check name and try again"}),Object(a.jsx)("button",{type:"button",onClick:this.alertState,children:"Close Notification"})]})]})}}]),n}(r.Component));p.defaultProps={addContact:""};var C=n(17),O=n.n(C),m=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).deleteContact=function(e){var n=t.props.contacts.filter((function(t){return t.id!=e}));t.props.refreshState(n)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(a.jsx)("div",{className:O.a.Container,children:Object(a.jsx)("ul",{children:this.props.contacts.map((function(e){return Object(a.jsxs)("li",{className:O.a.Contact,children:[Object(a.jsxs)("span",{children:[e.name," : ",e.number]}),Object(a.jsx)("button",{type:"button",onClick:function(){return t.deleteContact(e.id)},children:"Delete"})]},e.id)}))})})}}]),n}(r.Component),v=n(14),x=n.n(v);function _(t){var e=t.value,n=t.filter;return Object(a.jsx)("div",{className:x.a.Container,children:Object(a.jsxs)("label",{children:[Object(a.jsxs)("span",{className:x.a.FilterHeader,children:[" ","Find contacts by Name"]}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:e,onChange:n,className:x.a.FilterInput})]})})}var y=n(27),N=n.n(y),g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t.refreshContactsList=function(e){t.setState({contacts:e})},t.handleContact=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(o.a)({},a,r))},t.contactFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(a.jsxs)("div",{className:N.a.Container,children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(p,{addContact:this.addContact,contacts:this.state.contacts,refreshState:this.refreshContactsList}),Object(a.jsx)("h1",{children:"Contacts"}),Object(a.jsx)(_,{value:this.state.filter,filter:this.contactFilter}),Object(a.jsx)(m,{contacts:e,refreshState:this.refreshContactsList})]})}}]),n}(r.Component);s.a.render(Object(a.jsx)(g,{}),document.querySelector("#root"));console.log([{0:1},{6:1},{9:5},{4:7},{7:8}])}},[[76,1,2]]]);
//# sourceMappingURL=main.d6cecab6.chunk.js.map