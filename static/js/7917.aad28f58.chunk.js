"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[7917,7662],{83595:function(i,n,e){e.d(n,{Z:function(){return c}});var o=e(1413),t=e(45987),r=e(77822),s=e(45825),l=e(47313),d=e(46417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(i){var n=i.segments,e=void 0===n?48:n,c=i.cross,u=void 0===c||c,h=i.color,p=void 0===h?"#000":h,x=(i.extendCone,i.extendArray),v=void 0===x?[]:x,f=i.lineWidth,g=void 0===f?1.5:f,W=i.innerRing,y=void 0===W||W,j=i.extendLine,w=void 0===j||j,b=i.split,m=(0,t.Z)(i,a),Z=(0,l.useCallback)((function(i){var n=i.points,e=i.cross,o=i.color,t=i.lineWidth,s=i.position,l=void 0===s?0:s;if(n.length%2===0||!e)return null;for(var a=n.slice(1),c=[],u=a.length/2,h=0;h<u;h++)if(!b||h%b===0){var p=a[h],x=a[h+u];c.push((0,d.jsx)(r.x,{color:o,lineWidth:t,position:[0,0,l],points:[[p.x,p.y,0],[x.x,x.y,0]]},h))}return c}),[b]),k=(0,l.useCallback)((function(i,n){return(new s.Path).absarc(0,0,i,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),C=(0,l.useCallback)((function(){if(!(v instanceof Array))return null;var i=[];return v.forEach((function(n,o){var t,s=k(n.radius,e),l=v[o+1],a=l?k(l.radius,e):void 0;n.extend;var c,h,x,f,W=[];(null!==(t=n.innerRing)&&void 0!==t?t:y)&&W.push((0,d.jsx)(r.x,{rotation:[0,0,0],position:[0,0,n.extend],points:s,color:n.color||p,lineWidth:null!==(c=n.lineWidth)&&void 0!==c?c:g},"ring".concat(o)));(n.cross||u)&&W.push(Z({points:s,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:u,lineWidth:null!==(x=n.lineWidth)&&void 0!==x?x:g,color:null!==(f=n.color)&&void 0!==f?f:p}));if(a)for(var j=s.slice(1),m=a.slice(1),C=0;C<j.length;C++){var P,A,M=j[C],S=m[C];if(!b||C%b===0)if(w)W.push((0,d.jsx)(r.x,{color:p,lineWidth:null!==(P=n.lineWidth)&&void 0!==P?P:g,points:[[M.x,M.y,n.extend],[S.x,S.y,null!==(A=null===l||void 0===l?void 0:l.extend)&&void 0!==A?A:n.extend]]},"cross".concat(C,"_").concat(o)))}i.push((0,d.jsx)("group",{children:W}))})),i}),[p,u,v,w,k,y,g,Z,e,b]);return(0,d.jsx)("group",(0,o.Z)((0,o.Z)({},m),{},{children:(0,d.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:C()})}))}},37662:function(i,n,e){e.r(n);var o=e(1413),t=e(45987),r=e(57809),s=(e(47313),e(83595)),l=e(81569),d=e(46417),a=["visible","opacity","showEdige","shadow"];n.default=function(i){i.visible;var n=i.opacity,e=i.showEdige,c=i.shadow,u=(0,t.Z)(i,a),h=(0,r.L)("".concat("https://www.eightfeet.cn/model","/glb/platec.glb")).nodes;return(0,d.jsxs)("group",(0,o.Z)((0,o.Z)({},u),{},{children:[(0,d.jsx)("group",{position:[0,-.96,0],rotation:[(0,l.B0)(180),0,0],scale:1,children:(0,d.jsx)("mesh",{scale:1,receiveShadow:c,rotation:[0,0,0],position:[0,0,0],castShadow:c,geometry:h.Plate_3.geometry,dispose:null,children:(0,d.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!e&&(0,d.jsx)("group",{position:[0,.03,0],children:(0,d.jsx)(s.Z,{color:"#000",split:6,lineWidth:1.5,rotation:[0,(0,l.B0)(7.5),0],extendArray:[{extend:-.98,radius:1},{extend:-.94,radius:1,lineWidth:3,cross:!1},{extend:-.79,radius:1.09,lineWidth:3,cross:!1},{extend:.01,radius:1.55,lineWidth:3,cross:!1},{extend:.035,radius:1.53,lineWidth:3,cross:!1}]})})]}))}},87917:function(i,n,e){e.r(n);var o=e(37662);n.default=o.default}}]);