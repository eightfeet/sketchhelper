"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[9465],{89465:function(e,t,r){r.r(t);var n=r(1413),o=r(45987),i=r(57809),s=r(85298),a=r(92505),l=(r(47313),r(46399)),c=r(56659),u=r(46417),d=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,r=e.showEdige,h=e.shadow,p=(0,o.Z)(e,d),m=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/jarA.glb")).nodes;return(0,u.jsxs)("group",(0,n.Z)((0,n.Z)({},p),{},{children:[(0,u.jsx)(s.M,{position:[0,2.1,0],children:(0,u.jsxs)("group",{rotation:[Math.PI/180*-180,0,0],scale:10,children:[(0,u.jsx)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,1.5,0],castShadow:h,geometry:m.oba.geometry,dispose:null,children:(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})}),(0,u.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,1.5,0],castShadow:h,geometry:m.obb.geometry,dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,u.jsx)(a.w,{threshold:38})]}),(0,u.jsx)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,1.5,0],castShadow:h,geometry:m.obc.geometry,dispose:null,children:(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})}),(0,u.jsx)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,1.5,0],castShadow:h,geometry:m.obd.geometry,dispose:null,children:(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})})]})}),!!r&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{isSquare:!1,radius:1.85,lineWidth:2.5,color:"#111",position:[0,5.2,0]}),(0,u.jsx)(c.Z,{isSquare:!1,radius:1.94,lineWidth:2.5,color:"#111",position:[0,5.2,0]}),(0,u.jsx)(c.Z,{radius:1.86,lineWidth:2.5,color:"#111",position:[0,4.18,0],squareColor:"#eee"}),(0,u.jsx)(c.Z,{isSquare:!1,radius:1.86,lineWidth:2.5,color:"#111",position:[0,5,0]}),(0,u.jsx)(c.Z,{isSquare:!1,radius:1.73,lineWidth:2.5,color:"#111",position:[0,4.82,0]}),(0,u.jsx)(c.Z,{isSquare:!1,radius:2.2,lineWidth:2.5,color:"#111",position:[0,4,0]}),(0,u.jsx)(c.Z,{radius:2,position:[0,-.95,0],lineWidth:2.5,squareColor:"#eee",color:"#111"}),(0,u.jsx)(c.Z,{radius:2.8,position:[0,3.4,0],lineWidth:2.5,squareColor:"#eee",color:"#111"}),(0,u.jsx)(l.Z,{width:0,height:0,position:[0,-.95,0],extend:6.2})]})]}))}},85298:function(e,t,r){r.d(t,{M:function(){return l}});var n=r(45987),o=r(87462),i=r(45825),s=r(47313),a=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=s.forwardRef((function(e,t){var r=e.children,l=e.disableX,c=e.disableY,u=e.disableZ,d=e.left,h=e.right,p=e.top,m=e.bottom,g=e.front,f=e.back,x=e.onCentered,y=e.precise,w=void 0===y||y,b=(0,n.Z)(e,a),v=s.useRef(null),j=s.useRef(null),S=s.useRef(null);return s.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(S.current,w),t=new i.Vector3,r=new i.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var a=p?o/2:m?-o/2:0,y=d?-n/2:h?n/2:0,b=g?s/2:f?-s/2:0;j.current.position.set(l?0:-t.x+y,c?0:-t.y+a,u?0:-t.z+b),"undefined"!==typeof x&&x({parent:v.current.parent,container:v.current,width:n,height:o,depth:s,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:a,horizontalAlignment:y,depthAlignment:b})}),[r]),s.useImperativeHandle(t,(function(){return v.current}),[]),s.createElement("group",(0,o.Z)({ref:v},b),s.createElement("group",{ref:j},s.createElement("group",{ref:S},r)))}))},92505:function(e,t,r){r.d(t,{w:function(){return l}});var n=r(45987),o=r(87462),i=r(47313),s=r(45825),a=["userData","children","geometry","threshold","color"];function l(e){e.userData;var t=e.children,r=e.geometry,l=e.threshold,c=void 0===l?15:l,u=e.color,d=void 0===u?"black":u,h=(0,n.Z)(e,a),p=i.useRef(null);return i.useLayoutEffect((function(){var e=p.current.parent;if(e){var t=r||e.geometry;t===p.current.userData.currentGeom&&c===p.current.userData.currentThreshold||(p.current.userData.currentGeom=t,p.current.userData.currentThreshold=c,p.current.geometry=new s.EdgesGeometry(t,c))}})),i.createElement("lineSegments",(0,o.Z)({ref:p,raycast:function(){return null}},h),t||i.createElement("lineBasicMaterial",{color:d}))}}}]);