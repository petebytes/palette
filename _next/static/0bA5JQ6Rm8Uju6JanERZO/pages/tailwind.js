(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(e,a,n){__NEXT_REGISTER_PAGE("/tailwind",function(){return e.exports=n(237),{page:e.exports.default}})},237:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(21),i=n.n(r),o=(n(54),n(22));a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement("meta",{name:"Description",content:"Make a tailwind color palette in an intuitive way"}),l.a.createElement("title",null,"Make a tailwind color palette")),l.a.createElement(o.a,{libraryName:"Tailwind",libraryColor:"#42a6b2",initialState:{hues:[{name:"red",value:2},{name:"orange",value:30},{name:"yellow",value:54},{name:"green",value:145},{name:"teal",value:174},{name:"blue",value:207},{name:"indigo",value:231},{name:"purple",value:264},{name:"pink",value:340}],lightnesses:["darkest","darker","dark","base","light","lighter","lightest"].map(function(e,a,n){var t=Math.round(25+75/n.length*a);return{name:e,value:t,domain:[t-17,t+17]}}),saturation:71},exportTypes:[{name:"JS",toString:function(e){var a=e.hues,n=e.lightnesses,t=(e.saturation,e.hsl);return"var colors = {\n".concat(a.map(function(e){return n.map(function(a){return"  '".concat(e.name,"-").concat(a.name,"': '").concat(t(e.name,a.name),"'")}).join(",\n")}).join(",\n"),"\n}")}}],columnClass:"col-lg-1 col-md-3 col-6 p-1"}))}}},[[236,1,0]]]);