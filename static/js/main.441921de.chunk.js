(this.webpackJsonptemaoppgave04=this.webpackJsonptemaoppgave04||[]).push([[0],{1:function(e,t,a){},11:function(e,t,a){e.exports=a(26)},16:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=(a(16),a(6),a(3)),i=(a(25),a(1),function(){return r.a.createElement("div",{className:"pages space"},r.a.createElement("h2",null,"VOTED BEST HAIR SALON IN ARMADILLO"),r.a.createElement("p",null,"Our award-winning salon (or saloon as we call it) is a full-service salon committed to giving guests the best salon experiens in the wild west. We serve whiskey and beer while you're here."),r.a.createElement("p",null,"Hitch your horses right outside! We have a stable boy who will take care of your horse free of charge. "),r.a.createElement("p",null,"Sadly, we cannot take care of your cows, they are to many for us to handle."))}),m=a(2),s={description:"Employers of Tina's Beauty Saloon",source:"Catharina S\xf8rum's head",persons:[{number:1,name:"Tina",position:["Owner","Creative Leader","Hair Stylist","Make-up Artist"],picture:"./img/tina.png"},{number:2,name:"Christine",position:["Reseptionist"],picture:"./img/christine.png"},{number:3,name:"Robert",position:["Hair Stylist","Make-up Artist","Extentions"],picture:"./img/robert.png"},{number:4,name:"Christian",position:["Hair Stylist","Barber","Bartender"],picture:"./img/christian.png"}]},u=function(e){return r.a.createElement("div",{className:"employee"},r.a.createElement("img",{src:e.picture,alt:"The employee of Tinas beauty saloon"}),r.a.createElement("h3",null,e.name),r.a.createElement("br",null),r.a.createElement("p",null,e.position[0]),r.a.createElement("br",null),r.a.createElement("p",null,e.position[1]),r.a.createElement("br",null),r.a.createElement("p",null,e.position[2]),r.a.createElement("br",null),r.a.createElement("p",null,e.position[3]),r.a.createElement("br",null))},p=function(){var e=Object(n.useState)(s.persons),t=Object(m.a)(e,1)[0];return r.a.createElement("div",{className:"pages"},r.a.createElement("h2",null,"About Our Saloon"),r.a.createElement("p",null,"This is our saloon."),r.a.createElement("div",{className:"employees"},t.map((function(e,t){return r.a.createElement(u,{name:e.name,key:t,picture:e.picture,position:e.position})}))))},E=a(10),h=function(){var e=Object(n.useRef)(),t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)({customerName:"",customerPhone:"",customerTreatments:[]}),i=Object(m.a)(c,2),s=i[0],u=i[1],p=function(e){o([].concat(Object(E.a)(l),[e.target.text]))};return r.a.createElement("div",{className:"pages"},r.a.createElement("h2",null,"Bookings"),r.a.createElement("div",{className:"bookings"},r.a.createElement("form",{ref:e},r.a.createElement("p",null,"Customer name: "),r.a.createElement("input",{type:"text",className:"inpCustomer",placeholder:"Type your name, or the name of the customer"}),r.a.createElement("p",null,"Customer phone number")," ",r.a.createElement("input",{type:"text",className:"inpNumber",placeholder:"Type your phonenumber, so we can contact you if its necesarry"}),r.a.createElement("p",null,"Choose treatments: "),r.a.createElement("p",{className:"smallText"},"Hold down the Ctrl (windows) / Command (Mac) button to select multiple options."),r.a.createElement("select",{className:"selectTreatment",size:"7",multiple:!0},r.a.createElement("option",{onClick:p,value:"hc-long"},"Haircut, long hair"),r.a.createElement("option",{onClick:p,value:"hc-short"},"Haircut, short hair"),r.a.createElement("option",{onClick:p,value:"hc-barber"},"Haircut, barber"),r.a.createElement("option",{onClick:p,value:"color-foils"},"Coloring, foils"),r.a.createElement("option",{onClick:p,value:"color-perm"},"Coloring, permanent"),r.a.createElement("option",{onClick:p,value:"basic-style"},"Basic styling"),r.a.createElement("option",{onClick:p,value:"lux-style"},"Luxury Styling")),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault();var a={customerName:e.current[0].value,customerPhone:e.current[1].value,customerTreatments:l};u(a)}},"Place your order")),r.a.createElement("article",null,r.a.createElement("h3",null,"Your order"),r.a.createElement("p",{className:"yourOrder smallText"},r.a.createElement("b",null,s.customerName)),r.a.createElement("p",{className:"yourOrder smallText"},r.a.createElement("i",null,s.customerPhone)),r.a.createElement("ul",null,Array.from(s.customerTreatments).map((function(e){return r.a.createElement("li",{className:"yourOrder smallText"},e)}))))))},b=function(){var e=["+1-602-555-0162","post@tinasaloon.com","1374 Boone Crockett Lane, Armadillo"];return r.a.createElement("div",{className:"pages"},r.a.createElement("h2",null,"Contact"),r.a.createElement("div",{className:"contact space"},r.a.createElement("p",null,r.a.createElement("b",null,"Phone number:")," ",e[0]),r.a.createElement("p",null,r.a.createElement("b",null,"Mail adress:")," ",e[1]),r.a.createElement("p",null,r.a.createElement("b",null,"Address:")," ",e[2])))},d={description:"Services we provide",list:[{treatment:"Haircut, long hair",price:"$15"},{treatment:"Haircut, short hair",price:"$12"},{treatment:"Haircut, barber",price:"$10"},{treatment:"Coloring, foils",price:"$30 and up"},{treatment:"Coloring, permanent",price:"$29 and up"},{treatment:"Basic styling",price:"$13"},{treatment:"Luxury styling",price:"$40 and up"}]},v=function(e){return r.a.createElement("div",{className:"treatment"},r.a.createElement("p",null,e.treatment),r.a.createElement("p",null,e.price))},g=function(){var e=Object(n.useState)(d.list),t=Object(m.a)(e,1)[0];return r.a.createElement("div",{className:"pages"},r.a.createElement("h2",null,"Services"),r.a.createElement("p",null,"We can offer these services."),r.a.createElement("div",{className:"treatments"},t.map((function(e,t){return r.a.createElement(v,{treatment:e.treatment,price:e.price})}))))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Tina's Beauty Saloon"),r.a.createElement("nav",null,r.a.createElement(c.a,{to:"/"},"Home"),r.a.createElement(c.a,{to:"services"},"Services"),r.a.createElement(c.a,{to:"about"},"About Our Saloon"),r.a.createElement(c.a,{to:"bookings"},"Bookings"),r.a.createElement(c.a,{to:"contact"},"Contact"))),r.a.createElement("main",null,r.a.createElement(c.b,null,r.a.createElement(i,{path:"/"}),r.a.createElement(g,{path:"services"}),r.a.createElement(p,{path:"about"}),r.a.createElement(h,{path:"bookings"}),r.a.createElement(b,{path:"contact"}))))},f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.441921de.chunk.js.map