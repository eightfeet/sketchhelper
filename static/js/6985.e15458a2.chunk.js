"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[6985,1030],{83595:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),o=t(45987),i=t(77822),s=t(45825),l=t(47313),a=t(46417),c=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],u=function(e){var n=e.segments,t=void 0===n?48:n,u=e.cross,d=void 0===u||u,h=e.color,p=void 0===h?"#000":h,f=(e.extendCone,e.extendArray),v=void 0===f?[]:f,g=e.lineWidth,x=void 0===g?1.5:g,m=e.innerRing,y=void 0===m||m,b=e.extendLine,w=void 0===b||b,j=e.split,Z=(0,o.Z)(e,c),E=(0,l.useCallback)((function(e){var n=e.points,t=e.cross,r=e.color,o=e.lineWidth,s=e.position,l=void 0===s?0:s;if(n.length%2===0||!t)return null;for(var c=n.slice(1),u=[],d=c.length/2,h=0;h<d;h++)if(!j||h%j===0){var p=c[h],f=c[h+d];u.push((0,a.jsx)(i.x,{color:r,lineWidth:o,position:[0,0,l],points:[[p.x,p.y,0],[f.x,f.y,0]]},h))}return u}),[j]),W=(0,l.useCallback)((function(e,n){return(new s.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),k=(0,l.useCallback)((function(){if(!(v instanceof Array))return null;var e=[];return v.forEach((function(n,r){var o,s=W(n.radius,t),l=v[r+1],c=l?W(l.radius,t):void 0;n.extend;var u,h,f,g,m=[];(null!==(o=n.innerRing)&&void 0!==o?o:y)&&m.push((0,a.jsx)(i.x,{rotation:[0,0,0],position:[0,0,n.extend],points:s,color:n.color||p,lineWidth:null!==(u=n.lineWidth)&&void 0!==u?u:x},"ring".concat(r)));(n.cross||d)&&m.push(E({points:s,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:d,lineWidth:null!==(f=n.lineWidth)&&void 0!==f?f:x,color:null!==(g=n.color)&&void 0!==g?g:p}));if(c)for(var b=s.slice(1),Z=c.slice(1),k=0;k<b.length;k++){var B,C,M=b[k],S=Z[k];if(!j||k%j===0)if(w)m.push((0,a.jsx)(i.x,{color:p,lineWidth:null!==(B=n.lineWidth)&&void 0!==B?B:x,points:[[M.x,M.y,n.extend],[S.x,S.y,null!==(C=null===l||void 0===l?void 0:l.extend)&&void 0!==C?C:n.extend]]},"cross".concat(k,"_").concat(r)))}e.push((0,a.jsx)("group",{children:m}))})),e}),[p,d,v,w,W,y,x,E,t,j]);return(0,a.jsx)("group",(0,r.Z)((0,r.Z)({},Z),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:k()})}))}},11030:function(e,n,t){t.r(n);var r=t(1413),o=t(45987),i=t(57809),s=t(85298),l=t(92505),a=(t(47313),t(83595)),c=t(81569),u=t(46417),d=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible;var n=e.opacity,t=e.showEdige,h=e.shadow,p=(0,o.Z)(e,d),f=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/body/male_head_3.glb")).nodes;return(0,u.jsxs)("group",(0,r.Z)((0,r.Z)({},p),{},{children:[(0,u.jsx)(s.M,{position:[0,2.2,.4],rotation:[0,(0,c.B0)(0),0],children:(0,u.jsx)("group",{position:[0,0,0],rotation:[(0,c.B0)(0),(0,c.B0)(0),0],scale:1.5,children:(0,u.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:f.Merged_PM3D_Sphere3D1.children[0].geometry,dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,u.jsx)(l.w,{threshold:5})]})})}),!!t&&(0,u.jsx)("group",{rotation:[0,(0,c.B0)(0),0],position:[0,2,0],children:(0,u.jsx)(a.Z,{split:6,rotation:[(0,c.B0)(37.5),0,(0,c.B0)(90)],position:[1.3,1.25,.6],extendArray:[{radius:1.2,extend:0},{radius:1.2,extend:2.6}]})})]}))}},86985:function(e,n,t){t.r(n);var r=t(11030);n.default=r.default},85298:function(e,n,t){t.d(n,{M:function(){return a}});var r=t(45987),o=t(87462),i=t(45825),s=t(47313),l=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],a=s.forwardRef((function(e,n){var t=e.children,a=e.disableX,c=e.disableY,u=e.disableZ,d=e.left,h=e.right,p=e.top,f=e.bottom,v=e.front,g=e.back,x=e.onCentered,m=e.precise,y=void 0===m||m,b=(0,r.Z)(e,l),w=s.useRef(null),j=s.useRef(null),Z=s.useRef(null);return s.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(Z.current,y),n=new i.Vector3,t=new i.Sphere,r=e.max.x-e.min.x,o=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(n),e.getBoundingSphere(t);var l=p?o/2:f?-o/2:0,m=d?-r/2:h?r/2:0,b=v?s/2:g?-s/2:0;j.current.position.set(a?0:-n.x+m,c?0:-n.y+l,u?0:-n.z+b),"undefined"!==typeof x&&x({parent:w.current.parent,container:w.current,width:r,height:o,depth:s,boundingBox:e,boundingSphere:t,center:n,verticalAlignment:l,horizontalAlignment:m,depthAlignment:b})}),[t]),s.useImperativeHandle(n,(function(){return w.current}),[]),s.createElement("group",(0,o.Z)({ref:w},b),s.createElement("group",{ref:j},s.createElement("group",{ref:Z},t)))}))},92505:function(e,n,t){t.d(n,{w:function(){return a}});var r=t(45987),o=t(87462),i=t(47313),s=t(45825),l=["userData","children","geometry","threshold","color"];function a(e){e.userData;var n=e.children,t=e.geometry,a=e.threshold,c=void 0===a?15:a,u=e.color,d=void 0===u?"black":u,h=(0,r.Z)(e,l),p=i.useRef(null);return i.useLayoutEffect((function(){var e=p.current.parent;if(e){var n=t||e.geometry;n===p.current.userData.currentGeom&&c===p.current.userData.currentThreshold||(p.current.userData.currentGeom=n,p.current.userData.currentThreshold=c,p.current.geometry=new s.EdgesGeometry(n,c))}})),i.createElement("lineSegments",(0,o.Z)({ref:p,raycast:function(){return null}},h),n||i.createElement("lineBasicMaterial",{color:d}))}}}]);