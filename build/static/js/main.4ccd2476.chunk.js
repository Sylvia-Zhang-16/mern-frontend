(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],Array(22).concat([function(e,t,n){},,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c,a=n(1),i=n.n(a),r=n(12),s=n.n(r),o=(n(32),n(4)),l=n(9),u=n(3),d=n(8),j=n(2),O=(n(33),n(34),n(35),n(0)),b=function(e){return Object(O.jsx)("div",{className:"avatar ".concat(e.className),style:e.style,children:Object(O.jsx)("img",{src:e.image,alt:e.alt,style:{width:e.width,height:e.width}})})},p=(n(37),function(e){return Object(O.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}),v=function(e){return Object(O.jsx)("li",{className:"user-item",children:Object(O.jsx)(p,{className:"user-item__content users-page",children:Object(O.jsxs)(l.b,{to:"/".concat(e.id,"/activities"),children:[Object(O.jsx)("div",{className:"user-item__image",children:Object(O.jsx)(b,{image:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ASSET_URL+"/".concat(e.image),alt:e.name})}),Object(O.jsxs)("div",{className:"user-item__info",children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("h3",{children:[e.count," ",1===e.count?"Event":"Events"]})]})]})})})},h=function(e){return 0===e.items.length?Object(O.jsx)("div",{className:"center",children:Object(O.jsx)(p,{children:Object(O.jsx)("h2",{children:"No users found."})})}):Object(O.jsx)("ul",{className:"users-list",children:e.items.map((function(e){return Object(O.jsx)(v,{id:e.id,image:e.image,name:e.name,count:e.activities.length},e.id)}))})},x=n(6),m=n(58),f=(n(43),function(e){return s.a.createPortal(Object(O.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),_=(n(44),function(e){var t=Object(O.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(O.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(O.jsx)("h2",{children:e.header})}),Object(O.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(O.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(O.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return s.a.createPortal(t,document.getElementById("modal-hook"))}),E=function(e){return Object(O.jsxs)(i.a.Fragment,{children:[e.show&&Object(O.jsx)(f,{onClick:e.onCancel}),Object(O.jsx)(m.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(O.jsx)(_,Object(x.a)({},e))})]})},S=(n(45),function(e){return e.href?Object(O.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?Object(O.jsx)(l.b,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):Object(O.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}),T=function(e){return Object(O.jsx)(E,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:Object(O.jsx)(S,{onClick:e.onClear,children:"Okay"}),children:Object(O.jsx)("p",{children:e.error})})},g=(n(46),function(e){return Object(O.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(O.jsx)("div",{className:"lds-dual-ring"})})}),C=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),r=Object(j.a)(i,2),s=r[0],o=r[1],l=Object(a.useRef)([]),O=Object(a.useCallback)(function(){var e=Object(d.a)(Object(u.a)().mark((function e(t){var n,a,i,r,s,d,j=arguments;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.length>1&&void 0!==j[1]?j[1]:"GET",a=j.length>2&&void 0!==j[2]?j[2]:null,i=j.length>3&&void 0!==j[3]?j[3]:{},c(!0),r=new AbortController,l.current.push(r),e.prev=6,e.next=9,fetch(t,{method:n,body:a,headers:i,signal:r.signal});case 9:return s=e.sent,e.next=12,s.json();case 12:if(d=e.sent,l.current=l.current.filter((function(e){return e!==r})),s.ok){e.next=16;break}throw new Error(d.message);case 16:return c(!1),e.abrupt("return",d);case 20:throw e.prev=20,e.t0=e.catch(6),o(e.t0.message),c(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(a.useEffect)((function(){return function(){l.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:n,error:s,sendRequest:O,clearError:function(){o(null)}}},N=function(){var e=C(),t=e.isLoading,n=e.error,c=e.sendRequest,i=e.clearError,r=Object(a.useState)(),s=Object(j.a)(r,2),o=s[0],l=s[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL+"/users");case 3:t=e.sent,l(t.users),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{error:n,onClear:i}),t&&Object(O.jsx)("div",{className:"center",children:Object(O.jsx)(g,{})}),!t&&o&&Object(O.jsx)(h,{items:o})]})},R=n(25),A=(n(22),n(24)),P="REQUIRE",D="MINLENGTH",I="MAXLENGTH",y="EMAIL",w=function(){return{type:P}},k=function(e){return{type:D,val:e}},L=function(e,t){var n,c=!0,a=Object(A.a)(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;i.type===P&&(c=c&&e.trim().length>0),i.type===D&&(c=c&&e.trim().length>=i.val),i.type===I&&(c=c&&e.trim().length<=i.val),"MIN"===i.type&&(c=c&&+e>=i.val),"MAX"===i.type&&(c=c&&+e<=i.val),i.type===y&&(c=c&&/^\S+@\S+\.\S+$/.test(e))}}catch(r){a.e(r)}finally{a.f()}return c},V=(n(47),function(e,t){switch(t.type){case"CHANGE":return Object(x.a)(Object(x.a)({},e),{},{value:t.val,isValid:L(t.val,t.validators)});case"TOUCH":return Object(x.a)(Object(x.a)({},e),{},{isTouched:!0});default:return e}}),H=function(e){var t=Object(a.useReducer)(V,{value:e.initialValue||"",isValid:e.initialValid||!1,isTouched:!1}),n=Object(j.a)(t,2),c=n[0],i=n[1],r=e.id,s=e.onInput,o=c.value,l=c.isValid;Object(a.useEffect)((function(){s(r,o,l)}),[r,o,l,s]);var u=function(t){i({type:"CHANGE",val:t.target.value,validators:e.validators})},d=function(){i({type:"TOUCH"})},b="input"===e.element?Object(O.jsx)("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:u,onBlur:d,value:c.value}):Object(O.jsx)("textarea",{id:e.id,rows:e.rows||3,onChange:u,onBlur:d,value:c.value});return Object(O.jsxs)("div",{className:"form-control ".concat(!c.isValid&&c.isTouched&&"form-control--invalid"),children:[Object(O.jsx)("label",{htmlFor:e.id,children:e.label}),b,!c.isValid&&c.isTouched&&Object(O.jsx)("p",{children:e.errorText})]})},U=(n(48),function(e){var t=Object(a.useState)(),n=Object(j.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(),s=Object(j.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(!1),d=Object(j.a)(u,2),b=d[0],p=d[1],v=Object(a.useRef)();Object(a.useEffect)((function(){if(c){var e=new FileReader;e.onload=function(){l(e.result)},e.readAsDataURL(c)}}),[c]);return Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("input",{id:e.id,ref:v,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var n,c=b;t.target.files&&1===t.target.files.length?(n=t.target.files[0],i(n),p(!0),c=!0):(p(!1),c=!1),e.onInput(e.id,n,c)}}),Object(O.jsxs)("div",{className:"image-upload ".concat(e.center&&"center"),children:[Object(O.jsxs)("div",{className:"image-upload__preview",children:[o&&Object(O.jsx)("img",{src:o,alt:"Preview"}),!o&&Object(O.jsx)("p",{children:"Please pick an image."})]}),Object(O.jsx)(S,{type:"button",onClick:function(){v.current.click()},children:"PICK IMAGE"})]}),!b&&Object(O.jsx)("p",{children:e.errorText})]})}),K=n(17),F=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var c in e.inputs)e.inputs[c]&&(n=c===t.inputId?n&&t.isValid:n&&e.inputs[c].isValid);return Object(x.a)(Object(x.a)({},e),{},{inputs:Object(x.a)(Object(x.a)({},e.inputs),{},Object(K.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},W=function(e,t){var n=Object(a.useReducer)(F,{inputs:e,isValid:t}),c=Object(j.a)(n,2),i=c[0],r=c[1];return[i,Object(a.useCallback)((function(e,t,n){r({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(a.useCallback)((function(e,t){r({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]},B=Object(a.createContext)({isLoggedIn:!1,userId:null,token:null,login:function(){},logout:function(){}}),M=function(){var e=C(),t=e.isLoading,n=e.error,c=e.sendRequest,i=e.clearError,r=Object(a.useContext)(B),s=W({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:null,isValid:!1}},!1),o=Object(j.a)(s,2),l=o[0],b=o[1],p=Object(R.useHistory)(),v=function(){var e=Object(d.a)(Object(u.a)().mark((function e(t){var n;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,(n=new FormData).append("title",l.inputs.title.value),n.append("description",l.inputs.description.value),n.append("address",l.inputs.address.value),n.append("image",l.inputs.image.value),e.next=9,c(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL+"/activities","POST",n,{Authorization:"Bearer "+r.token});case 9:p.push("/"),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(1);case 14:case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{error:n,onClear:i}),Object(O.jsxs)("form",{className:"place-form",onSubmit:v,children:[t&&Object(O.jsx)(g,{asOverlay:!0}),Object(O.jsx)(H,{id:"title",element:"input",type:"text",label:"Title",validators:[w()],errorText:"Please enter a valid title.",onInput:b}),Object(O.jsx)(H,{id:"description",element:"textarea",label:"Description",validators:[k(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:b}),Object(O.jsx)(H,{id:"address",element:"input",label:"Address",validators:[w()],errorText:"Please enter a valid address.",onInput:b}),Object(O.jsx)(U,{center:!0,id:"image",onInput:b,errorText:"Please provide an image."}),Object(O.jsx)(S,{type:"submit",onClick:function(){console.log(r.userId)},disabled:!l.isValid,children:"ADD ACTIVITY"})]})]})},G=(n(49),function(e){return Object(O.jsx)("header",{className:"main-header",children:e.children})}),z=(n(50),function(e){var t=Object(a.useContext)(B);return Object(O.jsxs)("ul",{className:"nav-links",children:[Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/",exact:!0,children:"ALL USERS"})}),t.isLoggedIn&&Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/".concat(t.userId,"/activities"),children:"MY EVENTS"})}),t.isLoggedIn&&Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/activities/new",children:"NEW EVENT"})}),!t.isLoggedIn&&Object(O.jsx)("li",{children:Object(O.jsx)(l.c,{to:"/auth",children:"AUTHENTICATE"})}),t.isLoggedIn&&Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:t.logout,children:"LOGOUT"})})]})}),q=(n(51),function(e){var t=Object(O.jsx)(m.a,{in:e.show,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(O.jsx)("aside",{className:"side-drawer",onClick:e.onClick,children:e.children})});return s.a.createPortal(t,document.getElementById("drawer-hook"))}),J=(n(52),function(e){var t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],i=n[1],r=function(){i(!1)};return Object(O.jsxs)(O.Fragment,{children:[c&&Object(O.jsx)(f,{onClick:r}),Object(O.jsx)(q,{show:c,onClick:r,children:Object(O.jsx)("nav",{className:"main-navigation__drawer-nav",children:Object(O.jsx)(z,{})})}),Object(O.jsxs)(G,{children:[Object(O.jsxs)("button",{className:"main-navigation__main-btn",onClick:function(){i(!0)},children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]}),Object(O.jsx)("h1",{className:"main-navigation__title",children:Object(O.jsx)(l.b,{to:"/",children:"Your Event Management"})}),Object(O.jsx)("nav",{className:"main-navigation__header-nav",children:Object(O.jsx)(z,{})})]})]})}),Y=(n(53),n(54),function(e){var t=Object(a.useRef)(),n=e.center,c=e.zoom;return Object(a.useEffect)((function(){var e=new window.google.maps.Map(t.current,{center:n,zoom:c});new window.google.maps.Marker({position:n,map:e})}),[n,c]),Object(O.jsx)("div",{ref:t,className:"map ".concat(e.className),style:e.style})}),X=function(e){var t=Object(a.useContext)(B),n=C(),c=n.isLoading,r=n.error,s=n.sendRequest,o=n.clearError,l=Object(a.useState)(!1),b=Object(j.a)(l,2),v=b[0],h=b[1],x=Object(a.useState)(!1),m=Object(j.a)(x,2),f=m[0],_=m[1],N=function(){return h(!1)},R=function(){_(!1)},A=function(){var n=Object(d.a)(Object(u.a)().mark((function n(){return Object(u.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(!1),n.prev=1,n.next=4,s(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL+"/activities/".concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 4:e.onDelete(e.id),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{error:r,onClear:o}),Object(O.jsx)(E,{show:v,onCancel:N,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:Object(O.jsx)(S,{onClick:N,children:"CLOSE"}),children:Object(O.jsx)("div",{className:"map-container",children:Object(O.jsx)(Y,{center:e.coordinates,zoom:16})})}),Object(O.jsx)(E,{show:f,onCancel:R,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:Object(O.jsxs)(i.a.Fragment,{children:[Object(O.jsx)(S,{inverse:!0,onClick:R,children:"CANCEL"}),Object(O.jsx)(S,{danger:!0,onClick:A,children:"DELETE"})]}),children:Object(O.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),Object(O.jsx)("li",{className:"place-item",children:Object(O.jsxs)(p,{className:"place-item__content",children:[c&&Object(O.jsx)(g,{asOverlay:!0}),Object(O.jsx)("div",{className:"place-item__image",children:Object(O.jsx)("img",{src:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ASSET_URL+"/".concat(e.image),alt:e.title})}),Object(O.jsxs)("div",{className:"place-item__info",children:[Object(O.jsx)("h2",{children:e.title}),Object(O.jsx)("h3",{children:e.address}),Object(O.jsx)("p",{children:e.description})]}),Object(O.jsxs)("div",{className:"place-item__actions",children:[Object(O.jsx)(S,{inverse:!0,onClick:function(){return h(!0)},children:"VIEW ON MAP"}),t.userId===e.creatorId&&Object(O.jsx)(S,{to:"/activities/".concat(e.id),children:"EDIT"}),t.userId===e.creatorId&&Object(O.jsx)(S,{danger:!0,onClick:function(){_(!0)},children:"DELETE"})]})]})})]})},Q=(n(55),function(e){return 0===e.items.length?Object(O.jsx)("div",{className:"place-list center",children:Object(O.jsxs)(p,{children:[Object(O.jsx)("h2",{children:"No activities found. Maybe create one?"}),Object(O.jsx)(S,{to:"/activities/new",children:"Add activity"})]})}):Object(O.jsx)("ul",{className:"place-list",children:e.items.map((function(t){return Object(O.jsx)(X,{id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeleteActivity},t.id)}))})}),$=function(){var e=C(),t=e.isLoading,n=e.error,c=e.sendRequest,i=e.clearError,r=Object(a.useState)(),s=Object(j.a)(r,2),l=s[0],b=s[1],p=Object(o.useParams)().userId;Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL+"/activities/user/".concat(p));case 3:t=e.sent,b(t.activities),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c,p]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{error:n,onClear:i}),t&&Object(O.jsx)("div",{className:"center",children:Object(O.jsx)(g,{})}),!t&&l&&Object(O.jsx)(Q,{items:l,onDeletedActivity:function(e){b((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})},Z=function(){var e=Object(a.useContext)(B),t=Object(o.useHistory)(),n=C(),c=n.isLoading,i=n.error,r=n.sendRequest,s=n.clearError,l=Object(a.useState)(),b=Object(j.a)(l,2),v=b[0],h=b[1],x=Object(o.useParams)().activityId,m=W({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),f=Object(j.a)(m,3),_=f[0],E=f[1],N=f[2];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(Object(u.a)().mark((function e(){var t;return Object(u.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL+"/activities/".concat(x));case 3:t=e.sent,h(t.activity),N({title:{value:t.activity.title,isValid:!0},description:{value:t.activity.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[r,x,N]);var R=function(){var n=Object(d.a)(Object(u.a)().mark((function n(c){return Object(u.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,n.next=4,r(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL+"/activities/".concat(x),"PATCH",JSON.stringify({title:_.inputs.title.value,description:_.inputs.description.value}),{"Content-Type":"application/json",Authorization:"Bearer "+e.token});case 4:t.push("/"+e.userId+"/activities"),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}();return v?c?Object(O.jsx)("div",{className:"center",children:Object(O.jsx)(g,{})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{error:i,onClear:s}),!c&&v&&Object(O.jsxs)("form",{className:"place-form",onSubmit:R,children:[Object(O.jsx)(H,{id:"title",element:"input",type:"text",label:"Title",validators:[w()],errorText:"Please enter a valid title.",onInput:E,initialValue:v.title,initialValid:!0}),Object(O.jsx)(H,{id:"description",element:"textarea",label:"Description",validators:[k(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:E,initialValue:v.description,initialValid:!0}),Object(O.jsx)(S,{type:"submit",disabled:!_.isValid,children:"UPDATE EVENT"})]}),";"]}):Object(O.jsx)("div",{className:"center",children:Object(O.jsx)(p,{children:Object(O.jsx)("h2",{children:"Could not find event!"})})})},ee=(n(56),function(){var e=Object(a.useContext)(B),t=Object(a.useState)(!0),n=Object(j.a)(t,2),c=n[0],i=n[1],r=C(),s=r.isLoading,o=r.error,l=r.sendRequest,b=r.clearError,v=W({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),h=Object(j.a)(v,3),m=h[0],f=h[1],_=h[2],E=function(){var t=Object(d.a)(Object(u.a)().mark((function t(n){var a,i,r;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!c){t.next=13;break}return t.prev=2,t.next=5,l(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL+"/users/login","POST",JSON.stringify({email:m.inputs.email.value,password:m.inputs.password.value}),{"Content-Type":"application/json"});case 5:a=t.sent,e.login(a.userId,a.token),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(2);case 11:t.next=27;break;case 13:return t.prev=13,(i=new FormData).append("email",m.inputs.email.value),i.append("name",m.inputs.name.value),i.append("password",m.inputs.password.value),i.append("image",m.inputs.image.value),t.next=21,l(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL+"/users/signup","POST",i);case 21:r=t.sent,e.login(r.userId,r.token),t.next=27;break;case 25:t.prev=25,t.t1=t.catch(13);case 27:case"end":return t.stop()}}),t,null,[[2,9],[13,25]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{error:o,onClear:b}),Object(O.jsxs)(p,{className:"authentication",children:[s&&Object(O.jsx)(g,{asOverlay:!0}),Object(O.jsx)("h2",{children:"Login Required"}),Object(O.jsx)("hr",{}),Object(O.jsxs)("form",{onSubmit:E,children:[!c&&Object(O.jsx)(H,{element:"input",id:"name",type:"text",label:"Your Name",validators:[w()],errorText:"Please enter a name.",onInput:f}),Object(O.jsx)(H,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:y}],errorText:"Please enter a valid email address.",onInput:f}),Object(O.jsx)(H,{element:"input",id:"password",type:"password",label:"Password",validators:[k(6)],errorText:"Please enter a valid password, at least 6 characters.",onInput:f}),!c&&Object(O.jsx)(U,{center:!0,id:"image",onInput:f,errorText:"Please provide an image."}),Object(O.jsx)(S,{type:"submit",disabled:!m.isValid,children:c?"LOGIN":"SIGNUP"})]}),Object(O.jsxs)(S,{inverse:!0,onClick:function(){c?_(Object(x.a)(Object(x.a)({},m.inputs),{},{name:{value:"",isValid:!1},image:{value:null,isValid:!1}}),!1):_(Object(x.a)(Object(x.a)({},m.inputs),{},{name:void 0,image:void 0}),m.inputs.email.isValid&&m.inputs.password.isValid),i((function(e){return!e}))},children:["SWITCH TO ",c?"SIGNUP":"LOGIN"]})]})]})}),te=function(){var e,t=function(){var e=Object(a.useState)(null),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)({}),s=Object(j.a)(r,2),o=s[0],l=s[1],u=Object(a.useState)(),d=Object(j.a)(u,2),O=d[0],b=d[1],p=(Object(a.useContext)(B),Object(a.useCallback)((function(e,t,n){i(t),l(e);var c=n||new Date((new Date).getTime()+36e5);b(c),localStorage.setItem("userData",JSON.stringify({userId:e,token:t,expiration:c.toISOString()}))}),[])),v=Object(a.useCallback)((function(){i(null),l(null),localStorage.removeItem("userData"),b(null)}),[]);return Object(a.useEffect)((function(){if(n&&O){var e=O.getTime()-(new Date).getTime();c=setTimeout(v,e)}else clearTimeout(c)}),[n,v,O]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&new Date(e.expiration)>new Date&&p(e.userId,e.token,new Date(e.expiration))}),[p]),{token:n,login:p,logout:v,userId:o}}(),n=t.token,i=t.login,r=t.logout,s=t.userId;return e=n?Object(O.jsxs)(o.Switch,{children:[Object(O.jsx)(o.Route,{path:"/",exact:!0,children:Object(O.jsx)(N,{})}),Object(O.jsx)(o.Route,{path:"/:userId/activities",exact:!0,children:Object(O.jsx)($,{})}),Object(O.jsx)(o.Route,{path:"/activities/new",exact:!0,children:Object(O.jsx)(M,{})}),Object(O.jsx)(o.Route,{path:"/activities/:activityId",children:Object(O.jsx)(Z,{})}),Object(O.jsx)(o.Redirect,{to:"/"})]}):Object(O.jsxs)(o.Switch,{children:[Object(O.jsx)(o.Route,{path:"/",exact:!0,children:Object(O.jsx)(N,{})}),Object(O.jsx)(o.Route,{path:"/:userId/activities",exact:!0,children:Object(O.jsx)($,{})}),Object(O.jsx)(o.Route,{path:"/auth",children:Object(O.jsx)(ee,{})}),Object(O.jsx)(o.Redirect,{to:"/auth"})]}),Object(O.jsx)(B.Provider,{value:{isLoggedIn:!!n,token:n,userId:s,login:i,logout:r},children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(J,{}),Object(O.jsx)("main",{children:e})]})})},ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(te,{})}),document.getElementById("root")),ne()}]),[[57,1,2]]]);
//# sourceMappingURL=main.4ccd2476.chunk.js.map