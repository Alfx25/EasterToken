_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"R/x+":function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/easteregg",function(){return e("acBv")}])},acBv:function(t,a,e){"use strict";e.r(a),e.d(a,"default",(function(){return d}));var l=e("o0o1"),n=e.n(l),o=e("HaE+"),c=e("MT1m"),i=e.n(c),s=e("jwT6"),r=e("GPKm"),u=e("/19t"),m=e("OZ/i"),b=e.n(m),W=i.a.createElement;function d(){var t=Object(u.b)(),a=t.authenticate,e=t.isAuthenticated,l=t.isAuthenticating,c=t.user,i=t.logout,m=Object(u.c)();function d(){return(d=Object(o.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return t.next=3,a({signingMessage:"Log in using Moralis"}).then((function(t){console.log("logged in user:",t)})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){return(p=Object(o.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:console.log("logged out");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=Object(o.a)(n.a.mark((function t(){var a,e,l,o,i,s,r,u,W;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.get("ethAddress"),e={chain:"bsc",address:a},t.next=4,m.account.getTokenBalances(e);case 4:for(l=t.sent,o=0;o<l.length;o++)"0x657fa236edbe902557e0b825162c8937418dc876"===l[o].token_address&&(i=l[o].balance,s=l[o].decimals,r=new b.a(i),u=new b.a(s),W=new b.a("10").pow(u),r.div(W));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return W(r.a,{innerPageHeader:!0,HeaderButton:W((function(){return W("div",{className:"header-btns  header-btns  ms-auto d-none d-xs-inline-flex"})}),null)},W("button",{onClick:function(){return d.apply(this,arguments)}},"Moralis Metamask Login"),W("button",{onClick:function(){return p.apply(this,arguments)},disabled:l},"Logout"),W("button",{onClick:function(){return N.apply(this,arguments)}},"Check your balance"),W("div",{className:"thank-you-page"},W("div",{className:"container"},W("div",{className:"row justify-content-center"},W("div",{className:"col-xl-5 col-lg-6 col-md-8 col-sm-10"},W("div",{className:"thankyou-content text-center"},W("img",{className:"w-100",src:"data:image/png;base64,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",alt:"404"}),W("h2",{id:"qui"}," "),W("p",null,"Ups! It seems like the page you are looking for is not available! Please try again with another page or go back to home.")))))),W(s.a,null))}},jwT6:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));var l=e("wx14"),n=e("MT1m"),o=e.n(n),c=e("dntC"),i=o.a.createElement;function s(t){Object(l.a)({},t);return i(o.a.Fragment,null,i("footer",{className:"footer-area"},i("div",{className:"container"},i("div",{className:"row footer-quick-link-area justify-content-lg-center"},i("div",{className:"col-lg-3 col-md-4 col-sm-6"},i("div",{className:"footer-area-list-item"},i("h4",null,"THEME PAGES"),i("ul",{className:"list-unstyled"},i("li",null,i(c.a,{to:"/"},"Home Pages")),i("li",null,i(c.a,{to:"/"},"Pricing")),i("li",null,i(c.a,{to:"/"},"Contact Us")),i("li",null,i(c.a,{to:"/"},"Team")),i("li",null,i(c.a,{to:"/"},"About Us"))))),i("div",{className:"col-lg-3 col-md-4 col-sm-6"},i("div",{className:"footer-area-list-item"},i("h4",null,"COMPANY BIO"),i("ul",{className:"list-unstyled"},i("li",null,i(c.a,{to:"/"},"Blog")),i("li",null,i(c.a,{to:"/"},"Help Center")),i("li",null,i(c.a,{to:"/"},"Sales Tools Catalog")),i("li",null,i(c.a,{to:"/"},"Academy")),i("li",null,i(c.a,{to:"/"},"Support"))))),i("div",{className:"col-xl-3 col-lg-2 col-md-4 col-sm-6"},i("div",{className:"footer-area-list-item"},i("h4",null,"PARTNERSHIP"),i("ul",{className:"list-unstyled"},i("li",null,i(c.a,{to:"/"},"Partners")),i("li",null,i(c.a,{to:"/"},"Peseller Program")),i("li",null,i(c.a,{to:"/"},"AI Labs"))))),i("div",{className:"col-xl-3 col-lg-4 col-md-6 col-sm-6"},i("div",{className:"footer-area-list-item get-in-touch-area"},i("h4",null,"get in touch"),i("p",null,"Contact us any time for getting support."),i("h3",null,"contact@grayic.com"),i("ul",{className:"list-unstyled"},i("li",null,i(c.a,{to:"/"},i("i",{className:"fab fa-facebook-f"}))),i("li",null,i(c.a,{to:"/"},i("i",{className:"fab fa-twitter"}))),i("li",null,i(c.a,{to:"/"},i("i",{className:"fab fa-instagram"}))))))))))}}},[["R/x+",0,2,6,1,4,3,7]]]);