"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[1607],{3595:function(i,e,n){n.d(e,{Z:function(){return c}});var o=n(1413),t=n(5987),s=n(7822),r=n(5825),d=n(7313),l=n(6417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(i){var e=i.segments,n=void 0===e?48:e,c=i.cross,u=void 0===c||c,h=i.color,p=void 0===h?"#000":h,x=(i.extendCone,i.extendArray),v=void 0===x?[]:x,g=i.lineWidth,f=void 0===g?1.5:g,W=i.innerRing,y=void 0===W||W,j=i.extendLine,w=void 0===j||j,b=i.split,k=(0,t.Z)(i,a),Z=(0,d.useCallback)((function(i){var e=i.points,n=i.cross,o=i.color,t=i.lineWidth,r=i.position,d=void 0===r?0:r;if(e.length%2===0||!n)return null;for(var a=e.slice(1),c=[],u=a.length/2,h=0;h<u;h++)if(!b||h%b===0){var p=a[h],x=a[h+u];c.push((0,l.jsx)(s.x,{color:o,lineWidth:t,position:[0,0,d],points:[[p.x,p.y,0],[x.x,x.y,0]]},h))}return c}),[b]),m=(0,d.useCallback)((function(i,e){return(new r.Path).absarc(0,0,i,0,2*Math.PI,!0).getSpacedPoints(e)}),[]),C=(0,d.useCallback)((function(){if(!(v instanceof Array))return null;var i=[];return v.forEach((function(e,o){var t,r=m(e.radius,n),d=v[o+1],a=d?m(d.radius,n):void 0;e.extend;var c,h,x,g,W=[];(null!==(t=e.innerRing)&&void 0!==t?t:y)&&W.push((0,l.jsx)(s.x,{rotation:[0,0,0],position:[0,0,e.extend],points:r,color:e.color||p,lineWidth:null!==(c=e.lineWidth)&&void 0!==c?c:f},"ring".concat(o)));(e.cross||u)&&W.push(Z({points:r,position:e.extend,cross:null!==(h=e.cross)&&void 0!==h?h:u,lineWidth:null!==(x=e.lineWidth)&&void 0!==x?x:f,color:null!==(g=e.color)&&void 0!==g?g:p}));if(a)for(var j=r.slice(1),k=a.slice(1),C=0;C<j.length;C++){var P,A,M=j[C],S=k[C];if(!b||C%b===0)if(w)W.push((0,l.jsx)(s.x,{color:p,lineWidth:null!==(P=e.lineWidth)&&void 0!==P?P:f,points:[[M.x,M.y,e.extend],[S.x,S.y,null!==(A=null===d||void 0===d?void 0:d.extend)&&void 0!==A?A:e.extend]]},"cross".concat(C,"_").concat(o)))}i.push((0,l.jsx)("group",{children:W}))})),i}),[p,u,v,w,m,y,f,Z,n,b]);return(0,l.jsx)("group",(0,o.Z)((0,o.Z)({},k),{},{children:(0,l.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:C()})}))}},1607:function(i,e,n){n.r(e);var o=n(1413),t=n(5987),s=n(7809),r=(n(7313),n(3595)),d=n(1569),l=n(6417),a=["visible","opacity","showEdige","shadow"];e.default=function(i){i.visible;var e=i.opacity,n=i.showEdige,c=i.shadow,u=(0,t.Z)(i,a),h=(0,s.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/plateb.glb")).nodes;return console.log(h),(0,l.jsxs)("group",(0,o.Z)((0,o.Z)({},u),{},{children:[(0,l.jsx)("group",{position:[0,-.96,0],rotation:[(0,d.B0)(180),0,0],scale:1,children:(0,l.jsx)("mesh",{scale:1,receiveShadow:c,rotation:[0,0,0],position:[0,0,0],castShadow:c,geometry:h.Plate_2.geometry,dispose:null,children:(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:e,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!n&&(0,l.jsx)("group",{position:[0,.03,0],children:(0,l.jsx)(r.Z,{color:"#000",split:6,lineWidth:1.5,rotation:[0,(0,d.B0)(7.5),0],extendArray:[{extend:-.98,radius:1},{extend:-.94,radius:1.05,lineWidth:3,cross:!1},{extend:-.79,radius:1.45,lineWidth:3,cross:!1},{extend:-.5,radius:1.82,lineWidth:3,cross:!1},{extend:-.1,radius:2.06,lineWidth:3,cross:!1},{extend:.4,radius:2.145,lineWidth:3,cross:!1},{extend:.7,radius:2.145,lineWidth:3,cross:!1},{extend:.7,radius:2.065,lineWidth:3,cross:!1}]})})]}))}}}]);