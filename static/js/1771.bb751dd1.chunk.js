"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[1771,92],{92:function(e,t,r){r.r(t);var n=r(1413),o=r(5987),a=r(7809),s=r(5298),i=r(2505),l=(r(7313),r(1569)),c=r(6417),u=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,r=e.showEdige,d=e.shadow,h=(0,o.Z)(e,u),m=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/body/planar_skull.glb")),p=m.nodes;m.materials;return console.log(m),(0,c.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,c.jsx)(s.M,{position:[0,1.52,0],children:(0,c.jsxs)("group",{position:[0,0,0],rotation:[(0,l.B0)(-90),(0,l.B0)(0),(0,l.B0)(180)],scale:.08,children:[(0,c.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:p.Object_2.geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:p.Object_3.geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:p.Object_4.geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:p.Object_5.geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,c.jsx)(i.w,{threshold:5})]})]})})}))}},1771:function(e,t,r){r.r(t);var n=r(92);t.default=n.default},5298:function(e,t,r){r.d(t,{M:function(){return l}});var n=r(5987),o=r(7462),a=r(5825),s=r(7313),i=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=s.forwardRef((function(e,t){var r=e.children,l=e.disableX,c=e.disableY,u=e.disableZ,d=e.left,h=e.right,m=e.top,p=e.bottom,f=e.front,g=e.back,y=e.onCentered,w=e.precise,v=void 0===w||w,b=(0,n.Z)(e,i),x=s.useRef(null),j=s.useRef(null),S=s.useRef(null);return s.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(S.current,v),t=new a.Vector3,r=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var i=m?o/2:p?-o/2:0,w=d?-n/2:h?n/2:0,b=f?s/2:g?-s/2:0;j.current.position.set(l?0:-t.x+w,c?0:-t.y+i,u?0:-t.z+b),"undefined"!==typeof y&&y({parent:x.current.parent,container:x.current,width:n,height:o,depth:s,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:i,horizontalAlignment:w,depthAlignment:b})}),[r]),s.useImperativeHandle(t,(function(){return x.current}),[]),s.createElement("group",(0,o.Z)({ref:x},b),s.createElement("group",{ref:j},s.createElement("group",{ref:S},r)))}))},2505:function(e,t,r){r.d(t,{w:function(){return l}});var n=r(5987),o=r(7462),a=r(7313),s=r(5825),i=["userData","children","geometry","threshold","color"];function l(e){e.userData;var t=e.children,r=e.geometry,l=e.threshold,c=void 0===l?15:l,u=e.color,d=void 0===u?"black":u,h=(0,n.Z)(e,i),m=a.useRef(null);return a.useLayoutEffect((function(){var e=m.current.parent;if(e){var t=r||e.geometry;t===m.current.userData.currentGeom&&c===m.current.userData.currentThreshold||(m.current.userData.currentGeom=t,m.current.userData.currentThreshold=c,m.current.geometry=new s.EdgesGeometry(t,c))}})),a.createElement("lineSegments",(0,o.Z)({ref:m,raycast:function(){return null}},h),t||a.createElement("lineBasicMaterial",{color:d}))}}}]);