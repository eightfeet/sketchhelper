"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[6800,6783],{3595:function(n,i,e){e.d(i,{Z:function(){return c}});var o=e(1413),t=e(5987),r=e(7822),s=e(5825),d=e(7313),l=e(6417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(n){var i=n.segments,e=void 0===i?48:i,c=n.cross,u=void 0===c||c,h=n.color,x=void 0===h?"#000":h,p=(n.extendCone,n.extendArray),v=void 0===p?[]:p,f=n.lineWidth,g=void 0===f?1.5:f,j=n.innerRing,y=void 0===j||j,W=n.extendLine,w=void 0===W||W,k=n.split,C=(0,t.Z)(n,a),b=(0,d.useCallback)((function(n){var i=n.points,e=n.cross,o=n.color,t=n.lineWidth,s=n.position,d=void 0===s?0:s;if(i.length%2===0||!e)return null;for(var a=i.slice(1),c=[],u=a.length/2,h=0;h<u;h++)if(!k||h%k===0){var x=a[h],p=a[h+u];c.push((0,l.jsx)(r.x,{color:o,lineWidth:t,position:[0,0,d],points:[[x.x,x.y,0],[p.x,p.y,0]]},h))}return c}),[k]),m=(0,d.useCallback)((function(n,i){return(new s.Path).absarc(0,0,n,0,2*Math.PI,!0).getSpacedPoints(i)}),[]),Z=(0,d.useCallback)((function(){if(!(v instanceof Array))return null;var n=[];return v.forEach((function(i,o){var t,s=m(i.radius,e),d=v[o+1],a=d?m(d.radius,e):void 0;i.extend;var c,h,p,f,j=[];(null!==(t=i.innerRing)&&void 0!==t?t:y)&&j.push((0,l.jsx)(r.x,{rotation:[0,0,0],position:[0,0,i.extend],points:s,color:i.color||x,lineWidth:null!==(c=i.lineWidth)&&void 0!==c?c:g},"ring".concat(o)));(i.cross||u)&&j.push(b({points:s,position:i.extend,cross:null!==(h=i.cross)&&void 0!==h?h:u,lineWidth:null!==(p=i.lineWidth)&&void 0!==p?p:g,color:null!==(f=i.color)&&void 0!==f?f:x}));if(a)for(var W=s.slice(1),C=a.slice(1),Z=0;Z<W.length;Z++){var A,P,S=W[Z],M=C[Z];if(!k||Z%k===0)if(w)j.push((0,l.jsx)(r.x,{color:x,lineWidth:null!==(A=i.lineWidth)&&void 0!==A?A:g,points:[[S.x,S.y,i.extend],[M.x,M.y,null!==(P=null===d||void 0===d?void 0:d.extend)&&void 0!==P?P:i.extend]]},"cross".concat(Z,"_").concat(o)))}n.push((0,l.jsx)("group",{children:j}))})),n}),[x,u,v,w,m,y,g,b,e,k]);return(0,l.jsx)("group",(0,o.Z)((0,o.Z)({},C),{},{children:(0,l.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:Z()})}))}},6783:function(n,i,e){e.r(i);e(7313);var o=e(3595),t=e(6399),r=e(1569),s=e(6417);i.default=function(n){var i=n.position,e=n.opacity,d=n.showEdige,l=n.shadow;return(0,s.jsxs)("group",{position:[0,.98,0],children:[(0,s.jsxs)("mesh",{castShadow:l,receiveShadow:l,position:i,children:[(0,s.jsx)("cylinderGeometry",{args:[1,1,4,100]}),(0,s.jsx)("meshStandardMaterial",{transparent:!0,opacity:e,metalness:.1})]}),d&&(0,s.jsxs)("group",{children:[(0,s.jsx)(o.Z,{cross:!1,rotation:[0,(0,r.B0)(7.45),0],split:6,position:[0,-3,0],lineWidth:2,extendArray:[{extend:1,radius:1.01},{extend:3,radius:1.01,cross:!0},{extend:5.02,radius:1.01}]}),(0,s.jsx)(t.Z,{color:"#000",lineWidth:.5,width:2,height:2,position:[0,-2,0],extend:4})]})]})}},6800:function(n,i,e){e.r(i);var o=e(6783);i.default=o.default}}]);