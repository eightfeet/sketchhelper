"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8034],{8034:function(e,t,r){r.r(t);var n=r(1413),o=r(5987),a=r(7809),i=r(5298),s=r(2505),c=(r(7313),r(1569)),l=r(6417),u=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,r=e.showEdige,d=e.shadow,h=(0,o.Z)(e,u),p=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/body/planar_head_oleg_toropygin.glb")),m=p.nodes;p.materials;return console.log(p),(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,l.jsx)(i.M,{position:[0,1.6,0],children:(0,l.jsxs)("group",{position:[0,0,0],rotation:[(0,c.B0)(180),(0,c.B0)(0),0],scale:.24,children:[(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:m.Object_2.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(s.w,{threshold:5})]}),(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:m.Object_3.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(s.w,{threshold:5})]})]})})}))}},5298:function(e,t,r){r.d(t,{M:function(){return c}});var n=r(5987),o=r(7462),a=r(5825),i=r(7313),s=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=i.forwardRef((function(e,t){var r=e.children,c=e.disableX,l=e.disableY,u=e.disableZ,d=e.left,h=e.right,p=e.top,m=e.bottom,f=e.front,g=e.back,y=e.onCentered,b=e.precise,w=void 0===b||b,v=(0,n.Z)(e,s),x=i.useRef(null),j=i.useRef(null),E=i.useRef(null);return i.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(E.current,w),t=new a.Vector3,r=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var s=p?o/2:m?-o/2:0,b=d?-n/2:h?n/2:0,v=f?i/2:g?-i/2:0;j.current.position.set(c?0:-t.x+b,l?0:-t.y+s,u?0:-t.z+v),"undefined"!==typeof y&&y({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:s,horizontalAlignment:b,depthAlignment:v})}),[r]),i.useImperativeHandle(t,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},v),i.createElement("group",{ref:j},i.createElement("group",{ref:E},r)))}))},2505:function(e,t,r){r.d(t,{w:function(){return c}});var n=r(5987),o=r(7462),a=r(7313),i=r(5825),s=["userData","children","geometry","threshold","color"];function c(e){e.userData;var t=e.children,r=e.geometry,c=e.threshold,l=void 0===c?15:c,u=e.color,d=void 0===u?"black":u,h=(0,n.Z)(e,s),p=a.useRef(null);return a.useLayoutEffect((function(){var e=p.current.parent;if(e){var t=r||e.geometry;t===p.current.userData.currentGeom&&l===p.current.userData.currentThreshold||(p.current.userData.currentGeom=t,p.current.userData.currentThreshold=l,p.current.geometry=new i.EdgesGeometry(t,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:p,raycast:function(){return null}},h),t||a.createElement("lineBasicMaterial",{color:d}))}}}]);