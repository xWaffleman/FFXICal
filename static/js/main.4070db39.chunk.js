(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:"1",name:"Colada"}]},function(e){e.exports=[{id:"1",name:"Brutal Earring"}]},function(e){e.exports=[{id:"1",name:"Prolix Ring",baseStats:{HP:"0",MP:"20"}}]},,,function(e){e.exports=[{id:"1",name:"Molybdosis",baseStats:{HP:"0",AGI:"25"}}]},function(e){e.exports=[{id:"1",name:"Ginsen",baseStats:{}}]},function(e){e.exports=[{id:"1",name:"Adhemar Bonnet",baseStats:{HP:"41",MP:"0",STR:"19",DEX:"21",VIT:"15",AGI:"19",INT:"14",MND:"14",CHR:"14"},meleeStats:{ATT:"26",TA:"3",CritHit:"5",SubBlow:"7"}},{id:"2",name:"Adhemar Bonnet +1",baseStats:{HP:"41",MP:"0",STR:"19",DEX:"21",VIT:"15",AGI:"19",INT:"14",MND:"14",CHR:"14"}}]},function(e){e.exports=[{id:"1",name:"Mizukage-No-Kubikazari",baseStats:{HP:"0",INT:"4",MND:"4"}}]},function(e){e.exports=[{id:"1",name:"Adhemar Jacket",baseStats:{HP:"63",STR:"26",DEX:"33",VIT:"23",AGI:"29",INT:"20",MND:"20",CHR:"20"},meleeStats:{ATT:"25",ACC:"25",TA:"3",DualW:"5"}},{id:"2",name:"Adhemar Jacket +1",baseStats:{HP:"63",STR:"26",DEX:"33",VIT:"23",AGI:"29",INT:"20",MND:"20",CHR:"20"},meleeStats:{ATT:"35",ACC:"35",TA:"4",DualW:"6"}},{id:"3",name:"Amalric Doublet",baseStats:{HP:"45",MP:"73",STR:"16",DEX:"19",VIT:"16",AGI:"16",INT:"38",MND:"30",CHR:"29"},magicStats:{MAB:"23",MACC:"23",MCritDmg:"8"}}]},function(e){e.exports=[{id:"1",name:"Adhemar Wristbands",baseStats:{HP:"22",MP:"0",STR:"15",DEX:"43",VIT:"29",AGI:"7",INT:"12",MND:"30",CHR:"17"},meleeStats:{ACC:"22",TA:"2",StoreTP:"6"}}]},function(e){e.exports=[{id:"1",name:"Dragon Tank",baseStats:{}}]},function(e){e.exports=[{id:"1",name:"Windbuffet Belt",baseStats:{}},{id:"2",name:"Kentarch Belt",baseStats:{}}]},function(e){e.exports=[{id:"1",name:"Adhemar Kecks",baseStats:{HP:"41",MP:"0",STR:"32",DEX:"0",VIT:"15",AGI:"30",INT:"28",MND:"16",CHR:"8"},meleeStats:{ACC:"24",StoreTP:"7"}},{id:"2",name:"Adhemar Kecks +1",baseStats:{HP:"41",MP:"0",STR:"32",DEX:"0",VIT:"15",AGI:"30",INT:"28",MND:"16",CHR:"8"}},{id:"3",name:"Amalric Slops",baseStats:{HP:"34",MP:"100",STR:"19",DEX:"0",VIT:"6",AGI:"14",INT:"40",MND:"25",CHR:"19"}}]},function(e){e.exports=[{id:"1",name:"Adhemar Gamashes",baseStats:{HP:"11",MP:"0",STR:"15",DEX:"23",VIT:"8",AGI:"42",INT:"0",MND:"11",CHR:"25"},meleeStats:{ATT:"24",CritHit:"3"}}]},function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(10),r=a.n(s),o=(a(27),a(1)),m=a(2),c=a(4),l=a(3),u=a(5),p=(a(29),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).type="",a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){"sub"===this.props.type?this.type="main":"lring"===this.props.type||"rring"===this.props.type?this.type="ring":"lear"===this.props.type||"rear"===this.props.type?this.type="ear":this.type=this.props.type}},{key:"render",value:function(){return i.a.createElement("div",{className:"imageCont"},i.a.createElement("div",{className:"ffxiEquipPicture",style:{fontSize:"10px"}},i.a.createElement("img",{style:{display:this.props.itemOn?"block":"none"},src:"/img/"+this.type+"/"+this.props.imageUrl,alt:"Item display"})))}}]),t}(n.Component)),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).inputItem=i.a.createRef(),a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"text-center",style:{marginTop:"3px",marginBottom:"3px"}},i.a.createElement("select",{ref:this.inputItem,className:"ffxiInput",onChange:this.props.equipItem},this.props.itemData.map(function(e){return i.a.createElement("option",{key:e,value:e},e)})))}}]),t}(n.Component),h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).equipItem=function(e){var t={itemName:e.target.value,imageUrl:"https://github.com/xWaffleman/FFXICal/tree/gh-pages"+e.target.value.replace(/ /g,"_")+"_icon.png",itemEquipped:!0};a.setState(t,function(){var e=this.state.itemName;this.props.update(this.props.type,this.props.data.find(function(t){if(t.name===e)return t}))})},a.state={imageUrl:"",itemName:"None",itemEquipped:!1},a.itemNames=[],a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){for(var e=0;e<this.props.data.length;e++)this.itemNames[e]=this.props.data[e].name;this.itemNames.sort()}},{key:"componentDidMount",value:function(){var e={target:{value:this.itemNames[0]}};this.equipItem(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"col-lg-3 ffxiEquipBox"},i.a.createElement(p,{imageUrl:this.state.imageUrl,type:this.props.type,itemOn:this.state.itemEquipped}),i.a.createElement("div",{className:"text-center"},i.a.createElement("span",null,this.state.itemName)),i.a.createElement(d,{itemData:this.itemNames,equipItem:this.equipItem}))}}]),t}(n.Component),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"col-lg-4 col-md-4 col-sm-6 col-xs-12 text-center statsPanel"},i.a.createElement("div",null,i.a.createElement("span",{style:{fontWeight:"bold"}},this.props.title)),i.a.createElement("div",{className:"row"},Object.keys(this.props.stats).map(function(e){return i.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12",key:e},i.a.createElement("span",null,e,": ",this.props.stats[e]))},this)))}}]),t}(n.Component),f=function(){function e(){Object(o.a)(this,e)}return Object(m.a)(e,[{key:"addBaseStats",value:function(e,t){var a={HP:0,MP:0,STR:0,DEX:0,AGI:0,INT:0,MND:0,CHR:0,VIT:0};return a=this.combineAttributes(e,t,a)}},{key:"addMeleeStats",value:function(e,t){var a={ATT:0,ACC:0,DA:0,TA:0,QA:0,CritHit:0,CritDmg:0,StoreTP:0,DualW:0,SubBlow:0};return a=this.combineAttributes(e,t,a)}},{key:"addMagicStats",value:function(e,t){var a={MAB:0,MACC:0,MDMG:0,BurstI:0,BurstII:0,MCritHit:0,MCritDmg:0,FastCast:0,ConsMP:0};return a=this.combineAttributes(e,t,a)}},{key:"combineAttributes",value:function(e,t,a){for(var n=a,i=0;i<e.length;i++)if("undefined"!==typeof e[i]&&t in e[i])for(var s in e[i][t])n[s]+=isNaN(Number.parseInt(e[i][t][s]))?0:Number.parseInt(e[i][t][s]);for(var s in n)0===n[s]&&delete n[s];return n}}]),e}(),v=a(6),I=a(11),S=a(12),E=a(13),y=a(14),g=a(7),N=a(15),T=a(16),A=a(8),C=a(17),M=a(18),D=a(19),k=a(20),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).updateItem=function(e,t){a[e]=t;var n=a.buildNewTotal();a.setState(n,function(){})},a.buildNewTotal=function(){var e={},t=new f,n=[a.main,a.sub,a.range,a.ammo,a.head,a.neck,a.lear,a.rear,a.body,a.hands,a.lring,a.rring,a.back,a.waist,a.legs,a.feet];return e.baseStats=t.addBaseStats(n,"baseStats"),e.meleeStats=t.addMeleeStats(n,"meleeStats"),e.magicStats=t.addMagicStats(n,"magicStats"),e},a.state={baseStats:{},meleeStats:{},magicStats:{}},a.main=void 0,a.sub=void 0,a.range=void 0,a.ammo=void 0,a.head=void 0,a.neck=void 0,a.lear=void 0,a.rear=void 0,a.body=void 0,a.hands=void 0,a.lring=void 0,a.rring=void 0,a.back=void 0,a.waist=void 0,a.legs=void 0,a.feet=void 0,a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid EquipmentListHolder"},i.a.createElement("div",{className:"EquipmentList container-fluid",style:{width:"60%"}},i.a.createElement("div",{className:"row equipRows"},i.a.createElement(h,{data:v,type:"main",update:this.updateItem}),i.a.createElement(h,{data:v,type:"sub",update:this.updateItem}),i.a.createElement(h,{data:I,type:"range",update:this.updateItem}),i.a.createElement(h,{data:S,type:"ammo",update:this.updateItem})),i.a.createElement("div",{className:"row"},i.a.createElement(h,{data:E,type:"head",update:this.updateItem}),i.a.createElement(h,{data:y,type:"neck",update:this.updateItem}),i.a.createElement(h,{data:g,type:"lear",update:this.updateItem}),i.a.createElement(h,{data:g,type:"rear",update:this.updateItem})),i.a.createElement("div",{className:"row"},i.a.createElement(h,{data:N,type:"body",update:this.updateItem}),i.a.createElement(h,{data:T,type:"hands",update:this.updateItem}),i.a.createElement(h,{data:A,type:"lring",update:this.updateItem}),i.a.createElement(h,{data:A,type:"rring",update:this.updateItem})),i.a.createElement("div",{className:"row"},i.a.createElement(h,{data:C,type:"back",update:this.updateItem}),i.a.createElement(h,{data:M,type:"waist",update:this.updateItem}),i.a.createElement(h,{data:D,type:"legs",update:this.updateItem}),i.a.createElement(h,{data:k,type:"feet",update:this.updateItem}))),i.a.createElement("div",{className:"row"},i.a.createElement(b,{title:"Base Stats",stats:this.state.baseStats}),i.a.createElement(b,{title:"Melee Stats",stats:this.state.meleeStats}),i.a.createElement(b,{title:"Magic Stats",stats:this.state.magicStats})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,2,1]]]);
//# sourceMappingURL=main.4070db39.chunk.js.map