"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[2849],{3595:function(n,i,e){e.d(i,{Z:function(){return c}});var o=e(1413),t=e(5987),r=e(7822),s=e(5825),d=e(7313),l=e(6417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(n){var i=n.segments,e=void 0===i?48:i,c=n.cross,u=void 0===c||c,h=n.color,x=void 0===h?"#000":h,g=(n.extendCone,n.extendArray),p=void 0===g?[]:g,v=n.lineWidth,f=void 0===v?1.5:v,y=n.innerRing,R=void 0===y||y,j=n.extendLine,w=void 0===j||j,W=n.split,b=(0,t.Z)(n,a),Z=(0,d.useCallback)((function(n){var i=n.points,e=n.cross,o=n.color,t=n.lineWidth,s=n.position,d=void 0===s?0:s;if(i.length%2===0||!e)return null;for(var a=i.slice(1),c=[],u=a.length/2,h=0;h<u;h++)if(!W||h%W===0){var x=a[h],g=a[h+u];c.push((0,l.jsx)(r.x,{color:o,lineWidth:t,position:[0,0,d],points:[[x.x,x.y,0],[g.x,g.y,0]]},h))}return c}),[W]),k=(0,d.useCallback)((function(n,i){return(new s.Path).absarc(0,0,n,0,2*Math.PI,!0).getSpacedPoints(i)}),[]),m=(0,d.useCallback)((function(){if(!(p instanceof Array))return null;var n=[];return p.forEach((function(i,o){var t,s=k(i.radius,e),d=p[o+1],a=d?k(d.radius,e):void 0;i.extend;var c,h,g,v,y=[];(null!==(t=i.innerRing)&&void 0!==t?t:R)&&y.push((0,l.jsx)(r.x,{rotation:[0,0,0],position:[0,0,i.extend],points:s,color:i.color||x,lineWidth:null!==(c=i.lineWidth)&&void 0!==c?c:f},"ring".concat(o)));(i.cross||u)&&y.push(Z({points:s,position:i.extend,cross:null!==(h=i.cross)&&void 0!==h?h:u,lineWidth:null!==(g=i.lineWidth)&&void 0!==g?g:f,color:null!==(v=i.color)&&void 0!==v?v:x}));if(a)for(var j=s.slice(1),b=a.slice(1),m=0;m<j.length;m++){var C,A,E=j[m],M=b[m];if(!W||m%W===0)if(w)y.push((0,l.jsx)(r.x,{color:x,lineWidth:null!==(C=i.lineWidth)&&void 0!==C?C:f,points:[[E.x,E.y,i.extend],[M.x,M.y,null!==(A=null===d||void 0===d?void 0:d.extend)&&void 0!==A?A:i.extend]]},"cross".concat(m,"_").concat(o)))}n.push((0,l.jsx)("group",{children:y}))})),n}),[x,u,p,w,k,R,f,Z,e,W]);return(0,l.jsx)("group",(0,o.Z)((0,o.Z)({},b),{},{children:(0,l.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:m()})}))}},2849:function(n,i,e){e.r(i);var o=e(1413),t=e(5987),r=e(7809),s=(e(7313),e(3595)),d=e(6399),l=e(1569),a=e(6417),c=["visible","opacity","showEdige","shadow"];i.default=function(n){n.visible;var i=n.opacity,e=n.showEdige,u=n.shadow,h=(0,t.Z)(n,c),x=(0,r.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/egg.glb")).nodes;return console.log(x),(0,a.jsxs)("group",(0,o.Z)((0,o.Z)({},h),{},{children:[(0,a.jsx)("group",{position:[0,-.48,0],rotation:[Math.PI/180*-90,0,0],scale:.25,children:(0,a.jsx)("mesh",{scale:2,receiveShadow:u,rotation:[0,0,0],position:[0,0,0],castShadow:u,geometry:x.An_Egg.geometry,dispose:null,children:(0,a.jsx)("meshStandardMaterial",{transparent:!0,opacity:i,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!e&&(0,a.jsxs)("group",{scale:1.25,position:[0,.265,0],children:[(0,a.jsx)(d.Z,{color:"#fff",position:[0,-.98,0],width:.81,height:.81,extend:1.07,diagonalExtend:!1}),(0,a.jsx)(s.Z,{cross:!1,position:[0,.05,0],rotation:[0,(0,l.B0)(8),0],split:6,lineWidth:2,extendArray:[{radius:.05,extend:.04,innerRing:!1,cross:!0},{radius:.12,extend:.008,innerRing:!1},{radius:.235,extend:-.1},{radius:.31,extend:-.2,innerRing:!1},{radius:.35,extend:-.3},{radius:.38,extend:-.4,innerRing:!1},{radius:.4,extend:-.5,innerRing:!1},{radius:.4,extend:-.6,innerRing:!1},{radius:.39,extend:-.7},{radius:.36,extend:-.8,innerRing:!1},{radius:.3,extend:-.9,innerRing:!1},{radius:.22,extend:-.98,innerRing:!1},{radius:.1,extend:-1.04,innerRing:!1},{radius:0,extend:-1.05,innerRing:!1,cross:!0}]})]})]}))}}}]);