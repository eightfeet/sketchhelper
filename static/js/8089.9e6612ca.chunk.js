"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8089,7909],{7909:function(e,t,r){r.r(t);var n=r(1413),o=r(5987),a=r(7809),s=r(5298),i=r(2505),c=(r(7313),r(1569)),l=r(6417),u=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,r=e.showEdige,d=e.shadow,h=(0,o.Z)(e,u),m=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/body/head_planes.glb")),p=m.nodes;m.materials;return console.log(m),(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,l.jsx)(s.M,{position:[0,1.7,0],children:(0,l.jsxs)("group",{position:[0,0,0],rotation:[(0,c.B0)(-90),(0,c.B0)(0),(0,c.B0)(0)],scale:.8,children:[(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:p.Object_2.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(i.w,{threshold:5})]}),(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:p.Object_3.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(i.w,{threshold:5})]}),(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:p.Object_4.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(i.w,{threshold:5})]}),(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:p.Object_5.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(i.w,{threshold:5})]})]})})}))}},8089:function(e,t,r){r.r(t);var n=r(7909);t.default=n.default},5298:function(e,t,r){r.d(t,{M:function(){return c}});var n=r(5987),o=r(7462),a=r(5825),s=r(7313),i=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=s.forwardRef((function(e,t){var r=e.children,c=e.disableX,l=e.disableY,u=e.disableZ,d=e.left,h=e.right,m=e.top,p=e.bottom,f=e.front,g=e.back,y=e.onCentered,w=e.precise,v=void 0===w||w,b=(0,n.Z)(e,i),x=s.useRef(null),j=s.useRef(null),S=s.useRef(null);return s.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(S.current,v),t=new a.Vector3,r=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var i=m?o/2:p?-o/2:0,w=d?-n/2:h?n/2:0,b=f?s/2:g?-s/2:0;j.current.position.set(c?0:-t.x+w,l?0:-t.y+i,u?0:-t.z+b),"undefined"!==typeof y&&y({parent:x.current.parent,container:x.current,width:n,height:o,depth:s,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:i,horizontalAlignment:w,depthAlignment:b})}),[r]),s.useImperativeHandle(t,(function(){return x.current}),[]),s.createElement("group",(0,o.Z)({ref:x},b),s.createElement("group",{ref:j},s.createElement("group",{ref:S},r)))}))},2505:function(e,t,r){r.d(t,{w:function(){return c}});var n=r(5987),o=r(7462),a=r(7313),s=r(5825),i=["userData","children","geometry","threshold","color"];function c(e){e.userData;var t=e.children,r=e.geometry,c=e.threshold,l=void 0===c?15:c,u=e.color,d=void 0===u?"black":u,h=(0,n.Z)(e,i),m=a.useRef(null);return a.useLayoutEffect((function(){var e=m.current.parent;if(e){var t=r||e.geometry;t===m.current.userData.currentGeom&&l===m.current.userData.currentThreshold||(m.current.userData.currentGeom=t,m.current.userData.currentThreshold=l,m.current.geometry=new s.EdgesGeometry(t,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:m,raycast:function(){return null}},h),t||a.createElement("lineBasicMaterial",{color:d}))}}}]);