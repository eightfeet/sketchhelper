"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[1939,6883],{3595:function(n,i,e){e.d(i,{Z:function(){return c}});var o=e(1413),t=e(5987),r=e(7822),s=e(5825),l=e(7313),d=e(6417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(n){var i=n.segments,e=void 0===i?48:i,c=n.cross,u=void 0===c||c,h=n.color,p=void 0===h?"#000":h,x=(n.extendCone,n.extendArray),v=void 0===x?[]:x,f=n.lineWidth,g=void 0===f?1.5:f,y=n.innerRing,W=void 0===y||y,j=n.extendLine,w=void 0===j||j,b=n.split,m=(0,t.Z)(n,a),Z=(0,l.useCallback)((function(n){var i=n.points,e=n.cross,o=n.color,t=n.lineWidth,s=n.position,l=void 0===s?0:s;if(i.length%2===0||!e)return null;for(var a=i.slice(1),c=[],u=a.length/2,h=0;h<u;h++)if(!b||h%b===0){var p=a[h],x=a[h+u];c.push((0,d.jsx)(r.x,{color:o,lineWidth:t,position:[0,0,l],points:[[p.x,p.y,0],[x.x,x.y,0]]},h))}return c}),[b]),k=(0,l.useCallback)((function(n,i){return(new s.Path).absarc(0,0,n,0,2*Math.PI,!0).getSpacedPoints(i)}),[]),C=(0,l.useCallback)((function(){if(!(v instanceof Array))return null;var n=[];return v.forEach((function(i,o){var t,s=k(i.radius,e),l=v[o+1],a=l?k(l.radius,e):void 0;i.extend;var c,h,x,f,y=[];(null!==(t=i.innerRing)&&void 0!==t?t:W)&&y.push((0,d.jsx)(r.x,{rotation:[0,0,0],position:[0,0,i.extend],points:s,color:i.color||p,lineWidth:null!==(c=i.lineWidth)&&void 0!==c?c:g},"ring".concat(o)));(i.cross||u)&&y.push(Z({points:s,position:i.extend,cross:null!==(h=i.cross)&&void 0!==h?h:u,lineWidth:null!==(x=i.lineWidth)&&void 0!==x?x:g,color:null!==(f=i.color)&&void 0!==f?f:p}));if(a)for(var j=s.slice(1),m=a.slice(1),C=0;C<j.length;C++){var P,A,M=j[C],S=m[C];if(!b||C%b===0)if(w)y.push((0,d.jsx)(r.x,{color:p,lineWidth:null!==(P=i.lineWidth)&&void 0!==P?P:g,points:[[M.x,M.y,i.extend],[S.x,S.y,null!==(A=null===l||void 0===l?void 0:l.extend)&&void 0!==A?A:i.extend]]},"cross".concat(C,"_").concat(o)))}n.push((0,d.jsx)("group",{children:y}))})),n}),[p,u,v,w,k,W,g,Z,e,b]);return(0,d.jsx)("group",(0,o.Z)((0,o.Z)({},m),{},{children:(0,d.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:C()})}))}},6883:function(n,i,e){e.r(i);var o=e(1413),t=e(5987),r=e(7809),s=(e(7313),e(3595)),l=e(1569),d=e(6417),a=["visible","opacity","showEdige","shadow"];i.default=function(n){n.visible;var i=n.opacity,e=n.showEdige,c=n.shadow,u=(0,t.Z)(n,a),h=(0,r.L)("".concat("https://www.eightfeet.cn/model","/glb/platea.glb")).nodes;return console.log(h),(0,d.jsxs)("group",(0,o.Z)((0,o.Z)({},u),{},{children:[(0,d.jsx)("group",{position:[0,-.96,0],rotation:[(0,l.B0)(90),0,0],scale:1,children:(0,d.jsx)("mesh",{scale:1,receiveShadow:c,rotation:[0,0,0],position:[0,0,0],castShadow:c,geometry:h.Plate_1.geometry,dispose:null,children:(0,d.jsx)("meshStandardMaterial",{transparent:!0,opacity:i,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!e&&(0,d.jsx)("group",{position:[0,.03,0],children:(0,d.jsx)(s.Z,{color:"#000",split:6,lineWidth:1.5,rotation:[0,(0,l.B0)(7.5),0],extendArray:[{extend:-.96,radius:1.15},{extend:-.94,radius:1.18,lineWidth:3,cross:!1},{extend:-.83,radius:1.95,lineWidth:3,cross:!1},{extend:-.85,radius:1.97,cross:!1}]})})]}))}},1939:function(n,i,e){e.r(i);var o=e(6883);i.default=o.default}}]);