"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[5983],{83595:function(e,n,i){i.d(n,{Z:function(){return u}});var r=i(1413),t=i(45987),o=i(77822),s=i(45825),d=i(47313),a=i(46417),l=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],u=function(e){var n=e.segments,i=void 0===n?48:n,u=e.cross,c=void 0===u||u,h=e.color,x=void 0===h?"#000":h,g=(e.extendCone,e.extendArray),p=void 0===g?[]:g,v=e.lineWidth,f=void 0===v?1.5:v,y=e.innerRing,m=void 0===y||y,w=e.extendLine,j=void 0===w||w,R=e.split,Z=(0,t.Z)(e,l),b=(0,d.useCallback)((function(e){var n=e.points,i=e.cross,r=e.color,t=e.lineWidth,s=e.position,d=void 0===s?0:s;if(n.length%2===0||!i)return null;for(var l=n.slice(1),u=[],c=l.length/2,h=0;h<c;h++)if(!R||h%R===0){var x=l[h],g=l[h+c];u.push((0,a.jsx)(o.x,{color:r,lineWidth:t,position:[0,0,d],points:[[x.x,x.y,0],[g.x,g.y,0]]},h))}return u}),[R]),W=(0,d.useCallback)((function(e,n){return(new s.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),k=(0,d.useCallback)((function(){if(!(p instanceof Array))return null;var e=[];return p.forEach((function(n,r){var t,s=W(n.radius,i),d=p[r+1],l=d?W(d.radius,i):void 0;n.extend;var u,h,g,v,y=[];(null!==(t=n.innerRing)&&void 0!==t?t:m)&&y.push((0,a.jsx)(o.x,{rotation:[0,0,0],position:[0,0,n.extend],points:s,color:n.color||x,lineWidth:null!==(u=n.lineWidth)&&void 0!==u?u:f},"ring".concat(r)));(n.cross||c)&&y.push(b({points:s,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:c,lineWidth:null!==(g=n.lineWidth)&&void 0!==g?g:f,color:null!==(v=n.color)&&void 0!==v?v:x}));if(l)for(var w=s.slice(1),Z=l.slice(1),k=0;k<w.length;k++){var C,E,D=w[k],M=Z[k];if(!R||k%R===0)if(j)y.push((0,a.jsx)(o.x,{color:x,lineWidth:null!==(C=n.lineWidth)&&void 0!==C?C:f,points:[[D.x,D.y,n.extend],[M.x,M.y,null!==(E=null===d||void 0===d?void 0:d.extend)&&void 0!==E?E:n.extend]]},"cross".concat(k,"_").concat(r)))}e.push((0,a.jsx)("group",{children:y}))})),e}),[x,c,p,j,W,m,f,b,i,R]);return(0,a.jsx)("group",(0,r.Z)((0,r.Z)({},Z),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:k()})}))}},25983:function(e,n,i){i.r(n);var r=i(1413),t=i(45987),o=i(57809),s=i(92505),d=(i(47313),i(83595)),a=i(46399),l=i(81569),u=i(46417),c=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible;var n=e.opacity,i=e.showEdige,h=e.shadow,x=(0,t.Z)(e,c),g=(0,o.L)("".concat("https://www.eightfeet.cn/model","/glb/pear.glb")).nodes;return console.log(g),(0,u.jsxs)("group",(0,r.Z)((0,r.Z)({},x),{},{children:[(0,u.jsx)("group",{position:[0,-.98,0],rotation:[Math.PI/180*90,0,0],scale:.025,children:(0,u.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:g.pear_.geometry,dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5}),(0,u.jsx)(s.w,{threshold:4})]})}),!!i&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{rotation:[0,(0,l.B0)(15),0],cross:!1,split:6,lineWidth:2,extendArray:[{extend:-.97,radius:1.11},{extend:-.95,radius:1.18},{extend:-.9,radius:1.19},{extend:-.75,radius:1.21},{extend:-.2,radius:1.52,innerRing:!1},{extend:.5,radius:1.77},{extend:.8,radius:1.8,innerRing:!1},{extend:1.05,radius:1.78,cross:!1},{extend:1.2,radius:1.72,innerRing:!1},{extend:1.4,radius:1.55},{extend:1.68,radius:1.15,innerRing:!1},{extend:1.9,radius:.7},{extend:2.2,radius:.63,innerRing:!1},{extend:2.3,radius:.615,innerRing:!1},{extend:2.5,radius:.6,innerRing:!1},{extend:3,radius:.62,innerRing:!1},{extend:3.2,radius:.69,innerRing:!1},{extend:3.2,radius:.72},{extend:3.3,radius:.88},{extend:3.58,radius:1.025},{extend:3.61,radius:1},{extend:3.61,radius:.94}]}),(0,u.jsx)(a.Z,{color:"#fff",width:2.35,height:2.35,position:[0,-.97,0],rotation:[0,(0,l.B0)(8.5),0]}),(0,u.jsx)(a.Z,{color:"#fff",width:2,height:2,position:[0,3.62,0],rotation:[0,(0,l.B0)(8.5),0]}),(0,u.jsx)(a.Z,{width:0,height:0,extend:5,position:[0,-1,0]})]})]}))}},92505:function(e,n,i){i.d(n,{w:function(){return a}});var r=i(45987),t=i(87462),o=i(47313),s=i(45825),d=["userData","children","geometry","threshold","color"];function a(e){e.userData;var n=e.children,i=e.geometry,a=e.threshold,l=void 0===a?15:a,u=e.color,c=void 0===u?"black":u,h=(0,r.Z)(e,d),x=o.useRef(null);return o.useLayoutEffect((function(){var e=x.current.parent;if(e){var n=i||e.geometry;n===x.current.userData.currentGeom&&l===x.current.userData.currentThreshold||(x.current.userData.currentGeom=n,x.current.userData.currentThreshold=l,x.current.geometry=new s.EdgesGeometry(n,l))}})),o.createElement("lineSegments",(0,t.Z)({ref:x,raycast:function(){return null}},h),n||o.createElement("lineBasicMaterial",{color:c}))}}}]);