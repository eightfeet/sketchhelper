"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[41,9426],{3595:function(n,i,e){e.d(i,{Z:function(){return u}});var t=e(1413),o=e(5987),r=e(7822),s=e(5825),d=e(7313),a=e(6417),l=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],u=function(n){var i=n.segments,e=void 0===i?48:i,u=n.cross,x=void 0===u||u,c=n.color,h=void 0===c?"#000":c,p=(n.extendCone,n.extendArray),v=void 0===p?[]:p,f=n.lineWidth,g=void 0===f?1.5:f,j=n.innerRing,W=void 0===j||j,m=n.extendLine,w=void 0===m||m,y=n.split,Z=(0,o.Z)(n,l),C=(0,d.useCallback)((function(n){var i=n.points,e=n.cross,t=n.color,o=n.lineWidth,s=n.position,d=void 0===s?0:s;if(i.length%2===0||!e)return null;for(var l=i.slice(1),u=[],x=l.length/2,c=0;c<x;c++)if(!y||c%y===0){var h=l[c],p=l[c+x];u.push((0,a.jsx)(r.x,{color:t,lineWidth:o,position:[0,0,d],points:[[h.x,h.y,0],[p.x,p.y,0]]},c))}return u}),[y]),R=(0,d.useCallback)((function(n,i){return(new s.Path).absarc(0,0,n,0,2*Math.PI,!0).getSpacedPoints(i)}),[]),b=(0,d.useCallback)((function(){if(!(v instanceof Array))return null;var n=[],i=0;return v.forEach((function(t,o){var s,d=R(t.radius,e),l=v[o+1],u=l?R(l.radius,e):void 0;i+=t.extend,console.log(i);var c,p,f,j,m=[];(null!==(s=t.innerRing)&&void 0!==s?s:W)&&m.push((0,a.jsx)(r.x,{rotation:[0,0,0],position:[0,0,t.extend],points:d,color:t.color||h,lineWidth:null!==(c=t.lineWidth)&&void 0!==c?c:g},"ring".concat(o)));(t.cross||x)&&m.push(C({points:d,position:t.extend,cross:null!==(p=t.cross)&&void 0!==p?p:x,lineWidth:null!==(f=t.lineWidth)&&void 0!==f?f:g,color:null!==(j=t.color)&&void 0!==j?j:h}));if(u)for(var Z=d.slice(1),b=u.slice(1),k=0;k<Z.length;k++){var I,P,S=Z[k],M=b[k];if(!y||k%y===0)if(w)m.push((0,a.jsx)(r.x,{color:h,lineWidth:null!==(I=t.lineWidth)&&void 0!==I?I:g,points:[[S.x,S.y,t.extend],[M.x,M.y,null!==(P=null===l||void 0===l?void 0:l.extend)&&void 0!==P?P:t.extend]]},"cross".concat(k,"_").concat(o)))}n.push((0,a.jsx)("group",{children:m}))})),n}),[h,x,v,w,R,W,g,C,e,y]);return(0,a.jsx)("group",(0,t.Z)((0,t.Z)({},Z),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:b()})}))}},9426:function(n,i,e){e.r(i),e.d(i,{default:function(){return h}});e(7313);var t=e(5825),o=e(3595),r=e(6399),s=e(1569),d=e(1413),a=e(5987),l=e(7822),u=e(6417),x=["hideInner","innerRotation","radius","innerRadius","segments","color","lineWidth"],c=function(n){var i=n.hideInner,e=n.innerRotation,o=n.radius,r=void 0===o?1:o,s=n.innerRadius,c=n.segments,h=void 0===c?60:c,p=n.color,v=void 0===p?"#ff0":p,f=n.lineWidth,g=void 0===f?1.5:f,j=(0,a.Z)(n,x);return(0,u.jsxs)("group",(0,d.Z)((0,d.Z)({},j),{},{children:[!0===i?null:(0,u.jsx)(l.x,{rotation:e||[0,0,.785],points:(new t.Path).absarc(0,0,s||r,0,2*Math.PI,!0).getSpacedPoints(h),color:v,lineWidth:g}),(0,u.jsx)(l.x,{points:[[-1*r,0,0],[1*r,0,0]],color:v,lineWidth:g}),(0,u.jsx)(l.x,{points:[[-1*r,1*r,0],[1*r,1*r,0]],color:v,lineWidth:g}),(0,u.jsx)(l.x,{points:[[-1*r,-1*r,0],[1*r,-1*r,0]],color:v,lineWidth:g}),(0,u.jsx)(l.x,{points:[[0,-1*r,0],[0,1*r,0]],color:v,lineWidth:g}),(0,u.jsx)(l.x,{points:[[1*r,-1*r,0],[1*r,1*r,0]],color:v,lineWidth:g}),(0,u.jsx)(l.x,{points:[[-1*r,-1*r,0],[-1*r,1*r,0]],color:v,lineWidth:g}),(0,u.jsx)(l.x,{points:[[1*r,-1*r,0],[-1*r,1*r,0]],color:v,lineWidth:g}),(0,u.jsx)(l.x,{points:[[1*r,1*r,0],[-1*r,-1*r,0]],color:v,lineWidth:g})]}))},h=function(n){var i=n.position,e=n.opacity,d=n.showEdige,a=n.shadow;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("mesh",{castShadow:a,receiveShadow:a,position:i,children:[(0,u.jsx)("sphereGeometry",{args:[1,48,48]}),(0,u.jsx)("meshStandardMaterial",{roughness:.7,metalness:.25,transparent:!0,opacity:e,emissive:new t.Color(0),envMapIntensity:.5})]}),d&&(0,u.jsxs)("mesh",{castShadow:a,receiveShadow:a,position:i,children:[(0,u.jsx)(c,{lineWidth:.5,segments:80,radius:1,rotation:[0,0,0],color:"#555",hideInner:!0}),(0,u.jsx)(c,{lineWidth:.5,segments:80,radius:1,rotation:[-1.57,0,0],color:"#000"}),(0,u.jsx)(o.Z,{rotation:[0,(0,s.B0)(7),0],split:12,innerRing:!1,cross:!1,extendArray:[{extend:1,radius:0},{extend:.98,radius:.2},{extend:.95,radius:.32},{extend:.94,radius:.35},{extend:.9,radius:.448},{extend:.8,radius:.61},{extend:.7,radius:.72},{extend:.6,radius:.805},{extend:.5,radius:.87},{extend:.4,radius:.92},{extend:.3,radius:.96},{extend:.2,radius:.985},{extend:.1,radius:1},{extend:0,radius:1},{extend:-.1,radius:1},{extend:-.2,radius:.985},{extend:-.3,radius:.96},{extend:-.4,radius:.92},{extend:-.5,radius:.87},{extend:-.6,radius:.805},{extend:-.7,radius:.72},{extend:-.8,radius:.61},{extend:-.9,radius:.448},{extend:-.94,radius:.35},{extend:-.95,radius:.32},{extend:-.98,radius:.2},{extend:-1,radius:0}]}),(0,u.jsx)(r.Z,{position:[0,-1,0],color:"#000",lineWidth:.5,width:2,height:2,extend:2})]})]})}},41:function(n,i,e){e.r(i);var t=e(9426);i.default=t.default}}]);