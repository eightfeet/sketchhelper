"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[806,6087],{86087:function(e,t,n){n.r(t);var r=n(1413),s=n(45987),a=n(57809),o=n(85298),i=n(92505),l=(n(47313),n(81569)),c=n(46417),d=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,n=e.showEdige,h=e.shadow,u=(0,s.Z)(e,d),m=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/body/skeleton_head.glb")).nodes;return console.log(m),(0,c.jsx)("group",(0,r.Z)((0,r.Z)({},u),{},{children:(0,c.jsx)(o.M,{position:[0,.8,.4],rotation:[(0,l.B0)(0),(0,l.B0)(90),(0,l.B0)(90)],children:(0,c.jsxs)("group",{position:[0,8,0],rotation:[(0,l.B0)(180),(0,l.B0)(-90),0],scale:.8,children:[(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_1"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_2"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_3"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_4"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_5"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_6"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_7"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_8"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]})]})})}))}},90806:function(e,t,n){n.r(t);var r=n(86087);t.default=r.default},85298:function(e,t,n){n.d(t,{M:function(){return l}});var r=n(45987),s=n(87462),a=n(45825),o=n(47313),i=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=o.forwardRef((function(e,t){var n=e.children,l=e.disableX,c=e.disableY,d=e.disableZ,h=e.left,u=e.right,m=e.top,p=e.bottom,g=e.front,y=e.back,f=e.onCentered,w=e.precise,x=void 0===w||w,S=(0,r.Z)(e,i),v=o.useRef(null),j=o.useRef(null),b=o.useRef(null);return o.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(b.current,x),t=new a.Vector3,n=new a.Sphere,r=e.max.x-e.min.x,s=e.max.y-e.min.y,o=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var i=m?s/2:p?-s/2:0,w=h?-r/2:u?r/2:0,S=g?o/2:y?-o/2:0;j.current.position.set(l?0:-t.x+w,c?0:-t.y+i,d?0:-t.z+S),"undefined"!==typeof f&&f({parent:v.current.parent,container:v.current,width:r,height:s,depth:o,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:i,horizontalAlignment:w,depthAlignment:S})}),[n]),o.useImperativeHandle(t,(function(){return v.current}),[]),o.createElement("group",(0,s.Z)({ref:v},S),o.createElement("group",{ref:j},o.createElement("group",{ref:b},n)))}))},92505:function(e,t,n){n.d(t,{w:function(){return l}});var r=n(45987),s=n(87462),a=n(47313),o=n(45825),i=["userData","children","geometry","threshold","color"];function l(e){e.userData;var t=e.children,n=e.geometry,l=e.threshold,c=void 0===l?15:l,d=e.color,h=void 0===d?"black":d,u=(0,r.Z)(e,i),m=a.useRef(null);return a.useLayoutEffect((function(){var e=m.current.parent;if(e){var t=n||e.geometry;t===m.current.userData.currentGeom&&c===m.current.userData.currentThreshold||(m.current.userData.currentGeom=t,m.current.userData.currentThreshold=c,m.current.geometry=new o.EdgesGeometry(t,c))}})),a.createElement("lineSegments",(0,s.Z)({ref:m,raycast:function(){return null}},u),t||a.createElement("lineBasicMaterial",{color:h}))}}}]);