"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[5981],{5981:function(e,r,t){t.r(r);var n=t(1413),o=t(5987),a=t(7809),i=t(5298),s=t(2505),c=(t(7313),t(1569)),l=t(6417),u=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,o.Z)(e,u),m=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/loomis_head.glb")),f=m.nodes,p=m.materials;return console.log(m),(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,l.jsx)(i.M,{position:[0,1,0],children:(0,l.jsxs)("group",{position:[0,0,0],rotation:[(0,c.B0)(-90),(0,c.B0)(0),0],scale:.2,children:[(0,l.jsx)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,-2.6],castShadow:d,geometry:f.Plane001_0.geometry,dispose:null,material:p["Material.002"],children:!!t&&(0,l.jsx)(s.w,{threshold:5})}),(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:f.Sphere_0.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,l.jsx)(s.w,{threshold:5})]})]})})}))}},5298:function(e,r,t){t.d(r,{M:function(){return c}});var n=t(5987),o=t(7462),a=t(5825),i=t(7313),s=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=i.forwardRef((function(e,r){var t=e.children,c=e.disableX,l=e.disableY,u=e.disableZ,d=e.left,h=e.right,m=e.top,f=e.bottom,p=e.front,g=e.back,w=e.onCentered,y=e.precise,b=void 0===y||y,v=(0,n.Z)(e,s),x=i.useRef(null),E=i.useRef(null),S=i.useRef(null);return i.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(S.current,b),r=new a.Vector3,t=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var s=m?o/2:f?-o/2:0,y=d?-n/2:h?n/2:0,v=p?i/2:g?-i/2:0;E.current.position.set(c?0:-r.x+y,l?0:-r.y+s,u?0:-r.z+v),"undefined"!==typeof w&&w({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:s,horizontalAlignment:y,depthAlignment:v})}),[t]),i.useImperativeHandle(r,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},v),i.createElement("group",{ref:E},i.createElement("group",{ref:S},t)))}))},2505:function(e,r,t){t.d(r,{w:function(){return c}});var n=t(5987),o=t(7462),a=t(7313),i=t(5825),s=["userData","children","geometry","threshold","color"];function c(e){e.userData;var r=e.children,t=e.geometry,c=e.threshold,l=void 0===c?15:c,u=e.color,d=void 0===u?"black":u,h=(0,n.Z)(e,s),m=a.useRef(null);return a.useLayoutEffect((function(){var e=m.current.parent;if(e){var r=t||e.geometry;r===m.current.userData.currentGeom&&l===m.current.userData.currentThreshold||(m.current.userData.currentGeom=r,m.current.userData.currentThreshold=l,m.current.geometry=new i.EdgesGeometry(r,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:m,raycast:function(){return null}},h),r||a.createElement("lineBasicMaterial",{color:d}))}}}]);