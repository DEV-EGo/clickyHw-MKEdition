(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,name:"Kitana",image:"../assets/images/kitana.jpg"},{id:2,name:"predator",image:"../assets/images/predator.jpg"},{id:3,name:"raiden",image:"../assets/images/raiden.jpeg"},{id:4,name:"scorpion",image:"../assets/images/scorpion.jpeg"},{id:5,name:"subzero",image:"../assets/images/subzero.jpeg"},{id:6,name:"barak",image:"../assets/images/baraka.jpeg"},{id:7,name:"assasin",image:"../assets/images/hatguy.jpg"},{id:8,name:"kitana",image:"../assets/images/kitana.jpg"},{id:9,name:"Poison",image:"../assets/images/poison.jpeg"},{id:10,name:"goro",image:"../assets/images/goro.jpeg"},{id:11,name:"blade",image:"../assets/images/hatguy.jpg"},{id:12,name:"jason",image:"../assets/images/jason.png"},{id:13,name:"tremor",image:"../assets/images/tremor.jpeg"},{id:14,name:"ultimate",image:"../assets/images/ultimate.png"}]},function(e,a,t){e.exports=t(20)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(8),r=t.n(s),c=t(1),o=t(2),m=t(4),l=t(3),g=t(5),d=t(6);t(16);var u=function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.handleClick(e.id)}},i.a.createElement("img",{src:e.image,alt:e.name}))},h=t(9);t(17);var p=function(e){return i.a.createElement("nav",{className:"navbar"},i.a.createElement("h2",null,"Round 1"),i.a.createElement("h2",null,"".concat(e.primaryHeadingText," ").concat(e.primaryHeadingValue)),i.a.createElement("h2",null,"".concat(e.secondaryHeadingText," ").concat(e.secondaryHeadingValue)))};t(18);var j=function(){return i.a.createElement("div",{className:"jumbotron jumbotron-fluid"},i.a.createElement("h1",null,"Finish Him !"),i.a.createElement("h2",null,"How to play:"),i.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once. Try to get all 12 without losing!"))},f=(t(19),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(i)))).state={score:0,highScore:0,Data:h,clickedList:[]},t.handleClick=function(e){var a=t.state,n=a.score,i=a.clickedList,s=a.Data,r=a.highScore;if(t.RadomizeCards(s),i.includes(e)){var c=Math.max(n,r);t.resetGame(c)}else{var o=n+1;t.setState({score:n+1,clickedList:[].concat(Object(d.a)(i),[e])}),o===s.length&&t.resetGame(o)}},t.resetGame=function(e){t.setState({score:0,clickedList:[],highScore:e})},t.RadomizeCards=function(e){for(var a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[n],e[n]=i}t.setState({cardData:Object(d.a)(e)})},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.Data;this.RadomizeCards(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(p,{primaryHeadingText:"Score:",primaryHeadingValue:this.state.score,secondaryHeadingText:"High Score:",secondaryHeadingValue:this.state.highScore}),i.a.createElement(j,null),i.a.createElement("div",{class:"cards"},this.state.Data.map(function(a){return i.a.createElement(u,{name:a.name,image:a.image,key:a.id,id:a.id,handleClick:e.handleClick})})))}}]),a}(n.Component)),b=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement(f,null)}}]),a}(n.Component);r.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.e195cc01.chunk.js.map