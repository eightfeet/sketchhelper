"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[6087],{6087:function(e,t,n){n.r(t);var r=n(1413),s=n(5987),o=n(7809),a=n(5298),i=n(2505),l=(n(7313),n(1569)),c=n(6417),d=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,n=e.showEdige,h=e.shadow,u=(0,s.Z)(e,d),m=(0,o.L)("".concat("https://www.eightfeet.cn/model","/glb/body/skeleton_head.glb")).nodes;return console.log(m),(0,c.jsx)("group",(0,r.Z)((0,r.Z)({},u),{},{children:(0,c.jsx)(a.M,{position:[0,.8,.4],rotation:[(0,l.B0)(0),(0,l.B0)(90),(0,l.B0)(90)],children:(0,c.jsxs)("group",{position:[0,8,0],rotation:[(0,l.B0)(180),(0,l.B0)(-90),0],scale:.8,children:[(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_1"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_2"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_3"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_4"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_5"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_6"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_7"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]}),(0,c.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:m["2_Scene_8"].geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!n&&(0,c.jsx)(i.w,{threshold:5})]})]})})}))}},5298:function(e,t,n){n.d(t,{M:function(){return l}});var r=n(5987),s=n(7462),o=n(5825),a=n(7313),i=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=a.forwardRef((function(e,t){var n=e.children,l=e.disableX,c=e.disableY,d=e.disableZ,h=e.left,u=e.right,m=e.top,p=e.bottom,g=e.front,y=e.back,w=e.onCentered,f=e.precise,x=void 0===f||f,S=(0,r.Z)(e,i),v=a.useRef(null),j=a.useRef(null),b=a.useRef(null);return a.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new o.Box3).setFromObject(b.current,x),t=new o.Vector3,n=new o.Sphere,r=e.max.x-e.min.x,s=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var i=m?s/2:p?-s/2:0,f=h?-r/2:u?r/2:0,S=g?a/2:y?-a/2:0;j.current.position.set(l?0:-t.x+f,c?0:-t.y+i,d?0:-t.z+S),"undefined"!==typeof w&&w({parent:v.current.parent,container:v.current,width:r,height:s,depth:a,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:i,horizontalAlignment:f,depthAlignment:S})}),[n]),a.useImperativeHandle(t,(function(){return v.current}),[]),a.createElement("group",(0,s.Z)({ref:v},S),a.createElement("group",{ref:j},a.createElement("group",{ref:b},n)))}))},2505:function(e,t,n){n.d(t,{w:function(){return l}});var r=n(5987),s=n(7462),o=n(7313),a=n(5825),i=["userData","children","geometry","threshold","color"];function l(e){e.userData;var t=e.children,n=e.geometry,l=e.threshold,c=void 0===l?15:l,d=e.color,h=void 0===d?"black":d,u=(0,r.Z)(e,i),m=o.useRef(null);return o.useLayoutEffect((function(){var e=m.current.parent;if(e){var t=n||e.geometry;t===m.current.userData.currentGeom&&c===m.current.userData.currentThreshold||(m.current.userData.currentGeom=t,m.current.userData.currentThreshold=c,m.current.geometry=new a.EdgesGeometry(t,c))}})),o.createElement("lineSegments",(0,s.Z)({ref:m,raycast:function(){return null}},u),t||o.createElement("lineBasicMaterial",{color:h}))}}}]);