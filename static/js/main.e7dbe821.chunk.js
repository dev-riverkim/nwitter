(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n.n(c),r=n(47),s=n.n(r),i=n(11),u=n(37),o=n(14),j=n(0),l=n.n(j),b=n(1),d=n(48),O=n(25),p=n(18),f=n(29),m=(Object(d.a)({apiKey:"AIzaSyCjbPHjyeKZLNIYDJ-4Z72um7CWsDFpric",authDomain:"nwitter-ce300.firebaseapp.com",projectId:"nwitter-ce300",storageBucket:"nwitter-ce300.appspot.com",messagingSenderId:"227718109023",appId:"1:227718109023:web:01854a4dc5d56e791048ea"}),Object(O.d)()),x=Object(p.e)(),h=Object(f.c)(),v=n(6),y=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],j=Object(c.useState)(!0),d=Object(i.a)(j,2),p=d[0],f=d[1],x=Object(c.useState)(""),h=Object(i.a)(x,2),y=h[0],g=h[1],w=function(e){var t=e.target,n=t.name,c=t.value;"email"===n?a(c):"password"===n&&o(c)},N=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,Object(O.c)(m,n,u);case 5:e.sent,e.next=11;break;case 8:return e.next=10,Object(O.e)(m,n,u);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:N,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w,className:"authInput"}),Object(v.jsx)("input",{type:"submit",value:p?"Create Account":"Log In",className:"authInput authSubmit"}),y&&Object(v.jsx)("span",{className:"authError",children:y})]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},g=n(28),w=n(41),N=function(){var e=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?c=new O.b:"github"===n&&(c=new O.a),e.next=4,Object(O.f)(m,c);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)("div",{style:{display:"flex",justifyContent:"center",color:"#112D4E",fontSize:38,marginBottom:50},children:"NWIEETER"}),Object(v.jsx)(y,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(g.a,{icon:w.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(v.jsx)(g.a,{icon:w.a})]})]})]})},C=n(49),k=n(35),S=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],u=r[1],o=Object(c.useState)(t.text),j=Object(i.a)(o,2),d=j[0],O=j[1],m=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,Object(p.c)(Object(p.d)(x,"nweets/".concat(t.id)));case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,Object(f.a)(Object(f.d)(h,t.attachmentUrl));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){return u((function(e){return!e}))},w=function(){var e=Object(b.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log(t.id,d),e.next=4,Object(p.i)(Object(p.d)(x,"nweets/".concat(t.id)),{text:d});case 4:u(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:w,className:"container nweetEdit",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;O(t)},value:d,required:!0,placeholder:"Edit yout nweet",autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(v.jsx)("button",{onClick:y,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl}),n&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:m,children:Object(v.jsx)(g.a,{icon:k.d})}),Object(v.jsx)("span",{onClick:y,children:Object(v.jsx)(g.a,{icon:k.a})})]})]})})},I=n(72),B=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(""),o=Object(i.a)(u,2),j=o[0],d=o[1],O=function(){var e=Object(b.a)(l.a.mark((function e(n){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),n.preventDefault(),""!==r){e.next=4;break}return e.abrupt("return");case 4:if(c="",""===j){e.next=13;break}return a=Object(f.d)(h,"".concat(t.uid,"/").concat(Object(I.a)())),e.next=9,Object(f.e)(a,j,"data_url");case 9:return e.sent,e.next=12,Object(f.b)(a);case 12:c=e.sent;case 13:return e.next=15,Object(p.a)(Object(p.b)(x,"nweets"),{text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:c});case 15:s(""),d("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:O,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){e.preventDefault();var t=e.target.value;s(t)},type:"text",placeholder:"".concat(t.displayName,"\ub2d8\uc758 \uc774\uc57c\uae30\ub97c \uae30\ub2e4\ub9ac\uace0 \uc788\uc5b4\uc694"),maxLength:120}),Object(v.jsx)("input",{className:"factoryInput__arrow",type:"submit",value:"\u2192"})]}),Object(v.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(g.a,{icon:k.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;d(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:j,style:{backgroundImage:j}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return d("")},children:[Object(v.jsx)("span",{children:"Removes"}),Object(v.jsx)(g.a,{icon:k.c})]})]})]})},D=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=Object(p.h)(Object(p.b)(x,"nweets"),Object(p.g)("createdAt","desc")),t=Object(p.f)(e,(function(e){var t=e.docs.map((function(e){return Object(C.a)({id:e.id},e.data())}));s(t)}));return function(){t()}}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(B,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30,width:800},children:r.map((function(e){return Object(v.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},U=function(e){var t=e.userObj,n=e.refreshUser,a=Object(o.f)(),r=Object(c.useState)(t.displayName),s=Object(i.a)(r,2),u=s[0],j=s[1],d=function(){var e=Object(b.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,Object(O.g)(m.currentUser,{displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:d,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},value:u,type:"text",placeholder:"Display name",autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),a.push("/")},children:"Log Out"})]})},_=n(52),E=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",flexDirection:"column",marginTop:50,textAlign:"center"},children:[Object(v.jsxs)("li",{children:[Object(v.jsx)(u.b,{to:"/",style:{display:"flex",justifyContent:"center",color:"#112D4E",fontSize:38,marginBottom:20},children:"NWITTER"}),Object(v.jsx)("p",{style:{display:"flex",justifyContent:"center",color:"#112D4E",marginBottom:30},children:"\ud558\ub8e8\uc758 \uc0dd\uac01\uc744 \uacf5\uc720\ud574 \ubcf4\uc138\uc694"})]}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",style:{display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(v.jsx)(g.a,{icon:_.a,color:"#3f72af",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10,color:"#3f72af"},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},F=function(e){var t=e.isLoggedIn,n=e.userObj,c=e.refreshUser;return Object(v.jsxs)(u.a,{children:[t&&Object(v.jsx)(E,{userObj:n}),Object(v.jsx)(o.c,{children:Object(v.jsx)(v.Fragment,{children:t?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(D,{userObj:n})}),Object(v.jsx)(o.a,{exact:!0,path:"/profile",children:Object(v.jsx)(U,{refreshUser:c,userObj:n})})]}):Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(N,{})})})})]})};var A=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){e?(null===e.displayName&&Object(O.g)(u,{displayName:"User"}),o({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})):o(!1),a(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(F,{refreshUser:function(){var e=m.currentUser;o({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"initializing..."})};n(69);s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(A,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.e7dbe821.chunk.js.map