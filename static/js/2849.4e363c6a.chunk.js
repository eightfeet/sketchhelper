"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[2849],{3595:function(n,i,e){e.d(i,{Z:function(){return c}});var o=e(1413),t=e(4925),r=e(7822),s=e(5825),d=e(7313),l=e(6417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(n){var i=n.segments,e=void 0===i?48:i,c=n.cross,u=void 0===c||c,h=n.color,x=void 0===h?"#000":h,g=(n.extendCone,n.extendArray),p=void 0===g?[]:g,v=n.lineWidth,f=void 0===v?1.5:v,y=n.innerRing,R=void 0===y||y,j=n.extendLine,w=void 0===j||j,W=n.split,b=(0,t.Z)(n,a),Z=(0,d.useCallback)((function(n){var i=n.points,e=n.cross,o=n.color,t=n.lineWidth,s=n.position,d=void 0===s?0:s;if(i.length%2===0||!e)return null;for(var a=i.slice(1),c=[],u=a.length/2,h=0;h<u;h++)if(!W||h%W===0){var x=a[h],g=a[h+u];c.push((0,l.jsx)(r.x,{color:o,lineWidth:t,position:[0,0,d],points:[[x.x,x.y,0],[g.x,g.y,0]]},h))}return c}),[W]),k=(0,d.useCallback)((function(n,i){return(new s.Path).absarc(0,0,n,0,2*Math.PI,!0).getSpacedPoints(i)}),[]),m=(0,d.useCallback)((function(){if(!(p instanceof Array))return null;var n=[],i=0;return p.forEach((function(o,t){var s,d=k(o.radius,e),a=p[t+1],c=a?k(a.radius,e):void 0;i+=o.extend,console.log(i);var h,g,v,y,j=[];(null!==(s=o.innerRing)&&void 0!==s?s:R)&&j.push((0,l.jsx)(r.x,{rotation:[0,0,0],position:[0,0,o.extend],points:d,color:o.color||x,lineWidth:null!==(h=o.lineWidth)&&void 0!==h?h:f},"ring".concat(t)));(o.cross||u)&&j.push(Z({points:d,position:o.extend,cross:null!==(g=o.cross)&&void 0!==g?g:u,lineWidth:null!==(v=o.lineWidth)&&void 0!==v?v:f,color:null!==(y=o.color)&&void 0!==y?y:x}));if(c)for(var b=d.slice(1),m=c.slice(1),C=0;C<b.length;C++){var M,P,A=b[C],E=m[C];if(!W||C%W===0)if(w)j.push((0,l.jsx)(r.x,{color:x,lineWidth:null!==(M=o.lineWidth)&&void 0!==M?M:f,points:[[A.x,A.y,o.extend],[E.x,E.y,null!==(P=null===a||void 0===a?void 0:a.extend)&&void 0!==P?P:o.extend]]},"cross".concat(C,"_").concat(t)))}n.push((0,l.jsx)("group",{children:j}))})),n}),[x,u,p,w,k,R,f,Z,e,W]);return(0,l.jsx)("group",(0,o.Z)((0,o.Z)({},b),{},{children:(0,l.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:m()})}))}},2849:function(n,i,e){e.r(i);var o=e(1413),t=e(4925),r=e(7809),s=(e(7313),e(3595)),d=e(6399),l=e(1569),a=e(6417),c=["visible","opacity","showEdige","shadow"];i.default=function(n){n.visible;var i=n.opacity,e=n.showEdige,u=n.shadow,h=(0,t.Z)(n,c),x=(0,r.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/egg.glb")).nodes;return console.log(x),(0,a.jsxs)("group",(0,o.Z)((0,o.Z)({},h),{},{children:[(0,a.jsx)("group",{position:[0,-.48,0],rotation:[Math.PI/180*-90,0,0],scale:.25,children:(0,a.jsx)("mesh",{scale:2,receiveShadow:u,rotation:[0,0,0],position:[0,0,0],castShadow:u,geometry:x.An_Egg.geometry,dispose:null,children:(0,a.jsx)("meshStandardMaterial",{transparent:!0,opacity:i,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!e&&(0,a.jsxs)("group",{scale:1.25,position:[0,.265,0],children:[(0,a.jsx)(d.Z,{color:"#fff",position:[0,-.98,0],width:.81,height:.81,extend:1.07,diagonalExtend:!1}),(0,a.jsx)(s.Z,{cross:!1,position:[0,.05,0],rotation:[0,(0,l.B)(8),0],split:6,lineWidth:2,extendArray:[{radius:.05,extend:.04,innerRing:!1,cross:!0},{radius:.12,extend:.008,innerRing:!1},{radius:.235,extend:-.1},{radius:.31,extend:-.2,innerRing:!1},{radius:.35,extend:-.3},{radius:.38,extend:-.4,innerRing:!1},{radius:.4,extend:-.5,innerRing:!1},{radius:.4,extend:-.6,innerRing:!1},{radius:.39,extend:-.7},{radius:.36,extend:-.8,innerRing:!1},{radius:.3,extend:-.9,innerRing:!1},{radius:.22,extend:-.98,innerRing:!1},{radius:.1,extend:-1.04,innerRing:!1},{radius:0,extend:-1.05,innerRing:!1,cross:!0}]})]})]}))}},1569:function(n,i,e){e.d(i,{B:function(){return o}});var o=function(n){return Math.PI/180*n}}}]);