"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[4500,7832],{57832:function(e,r,t){t.r(r);var o=t(92505),n=t(45825),s=t(46399),a=t(46417);r.default=function(e){var r=e.position,t=e.opacity,i=e.showEdige,c=e.shadow;return(0,a.jsx)("group",{position:r,children:(0,a.jsxs)("group",{position:[0,-.14,0],children:[(0,a.jsxs)("mesh",{castShadow:c,receiveShadow:c,position:[0,0,0],rotation:[0,0,0],children:[(0,a.jsx)("icosahedronGeometry",{args:[1,0]}),(0,a.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,emissive:new n.Color(0)})]}),i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("mesh",{position:[0,0,0],rotation:[0,0,0],children:[(0,a.jsx)("icosahedronGeometry",{args:[1,0]}),(0,a.jsx)("meshStandardMaterial",{transparent:!0,opacity:0}),(0,a.jsx)(o.w,{})]}),(0,a.jsxs)("group",{rotation:[0,0,0],children:[(0,a.jsx)(s.Z,{cross:["diagonal"],width:1.05,height:1.7,rotation:[1.57,0,0],position:[0,0,0],extend:0,color:"red"}),(0,a.jsx)(s.Z,{cross:["diagonal"],width:1.7,height:1.05,rotation:[1.57,0,1.57],position:[0,0,0],extend:0,color:"red"})]}),(0,a.jsx)("group",{rotation:[0,1.57,1.57],children:(0,a.jsx)(s.Z,{cross:["diagonal"],width:1.7,height:1.05,rotation:[1.57,0,1.57],position:[0,0,0],extend:0,color:"red"})})]})]})})}},24500:function(e,r,t){t.r(r);var o=t(57832);r.default=o.default},92505:function(e,r,t){t.d(r,{w:function(){return c}});var o=t(45987),n=t(87462),s=t(47313),a=t(45825),i=["userData","children","geometry","threshold","color"];function c(e){e.userData;var r=e.children,t=e.geometry,c=e.threshold,u=void 0===c?15:c,d=e.color,h=void 0===d?"black":d,l=(0,o.Z)(e,i),g=s.useRef(null);return s.useLayoutEffect((function(){var e=g.current.parent;if(e){var r=t||e.geometry;r===g.current.userData.currentGeom&&u===g.current.userData.currentThreshold||(g.current.userData.currentGeom=r,g.current.userData.currentThreshold=u,g.current.geometry=new a.EdgesGeometry(r,u))}})),s.createElement("lineSegments",(0,n.Z)({ref:g,raycast:function(){return null}},l),r||s.createElement("lineBasicMaterial",{color:h}))}}}]);