"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8521,5848],{5848:function(e,r,t){t.r(r);var o=t(1413),n=t(5987),s=t(7809),a=t(2505),i=(t(7313),t(6659)),c=t(1569),u=t(6417),l=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,n.Z)(e,l),f=(0,s.L)("".concat("https://www.eightfeet.cn/model","/glb/eye-v1.glb")).nodes;return console.log(f),(0,u.jsxs)("group",(0,o.Z)((0,o.Z)({},h),{},{children:[(0,u.jsx)("group",{position:[0,8,0],rotation:[(0,c.B0)(180),(0,c.B0)(-90),0],scale:6.25,children:(0,u.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:f.Object_2.geometry,dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),(0,u.jsx)(a.w,{threshold:5})]})}),!!t&&(0,u.jsxs)("group",{rotation:[0,(0,c.B0)(-5),0],children:[(0,u.jsx)(i.Z,{lineWidth:2.5,color:"#000",radius:12.55,position:[0,9.6,0],isSquare:!1}),(0,u.jsx)(i.Z,{lineWidth:2.5,color:"#000",radius:12.55,position:[0,9.6,0],rotation:[(0,c.B0)(90),0,0],isSquare:!1}),(0,u.jsx)(i.Z,{lineWidth:2.5,color:"#000",radius:12.55,position:[0,9.6,0],rotation:[0,0,(0,c.B0)(90)],isSquare:!1})]})]}))}},8521:function(e,r,t){t.r(r);var o=t(5848);r.default=o.default},2505:function(e,r,t){t.d(r,{w:function(){return c}});var o=t(5987),n=t(7462),s=t(7313),a=t(5825),i=["userData","children","geometry","threshold","color"];function c(e){e.userData;var r=e.children,t=e.geometry,c=e.threshold,u=void 0===c?15:c,l=e.color,d=void 0===l?"black":l,h=(0,o.Z)(e,i),f=s.useRef(null);return s.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&u===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=u,f.current.geometry=new a.EdgesGeometry(r,u))}})),s.createElement("lineSegments",(0,n.Z)({ref:f,raycast:function(){return null}},h),r||s.createElement("lineBasicMaterial",{color:d}))}}}]);