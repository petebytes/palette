(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{234:function(e,a,n){__NEXT_REGISTER_PAGE("/material-ui",function(){return e.exports=n(235),{page:e.exports.default}})},235:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(21),o=n.n(r),i=(n(54),n(22));a.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement("meta",{name:"Description",content:"Non-material colors for Material UI"}),l.a.createElement("title",null,"Non-material colors for Material UI")),l.a.createElement(i.a,{libraryName:"Material UI",libraryColor:"#2196f3",initialState:{hues:[{name:"red",value:2},{name:"orange",value:30},{name:"yellow",value:54},{name:"green",value:145},{name:"teal",value:174},{name:"blue",value:207},{name:"indigo",value:231},{name:"purple",value:264},{name:"pink",value:340}],lightnesses:["900","800","700","600","500","400","300","200","100"].map(function(e,a,n){var t=Math.round(29+50/n.length*a);return{name:e,value:t,domain:[t-17,t+17]}}),saturation:71},exportTypes:[{name:"JS",toString:function(e){var a=e.hues,n=(e.lightnesses,e.saturation,e.hsl);return"\nvar colors = {\n".concat(a.map(function(e){return"  ".concat(e.name,": '").concat(n(e.name,"500"),"'")}).join(",\n"),"\n}\n\nimport { createMuiTheme } from '@material-ui/core/styles';\n\nconst theme = createMuiTheme({\npalette: {\n    primary: {\n    // light: will be calculated from palette.primary.main,\n    main: colors.red,\n    // dark: will be calculated from palette.primary.main,\n    // contrastText: will be calculated to contrast with palette.primary.main\n    },\n    secondary: {\n        main: colors.blue,\n    },\n    // error: will use the default color\n},\n});")}}],columnClass:"col-lg-1 col-md-3 col-6 p-1"}))}}},[[234,1,0]]]);