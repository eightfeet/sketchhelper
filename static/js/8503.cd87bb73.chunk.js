"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8503,7174],{7174:function(e,r,t){t.r(r);var a=t(9439),s=t(6459),o=t(7809),n=t(2505),c=t(7203),i=t(6486),l=t(5819),h=t(7313),u=t(6417),d=function(e){var r=e.opacity,t=e.edgeColor,a=e.showEdige,s=(0,h.useRef)(),c=(0,o.L)("/glb/scene-draco.glb"),l=c.nodes;c.materials;return(0,i.z)((function(){s.current&&(s.current.rotation.y+=.001)})),(0,u.jsx)("group",{ref:s,scale:.002,position:[0,-18,0],dispose:null,children:(0,u.jsxs)("group",{rotation:[-Math.PI/2,0,0],children:[(0,u.jsxs)("group",{position:[-202253.52,-310688.86,0],children:[(0,u.jsxs)("mesh",{geometry:l.mesh_0.geometry,receiveShadow:!0,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:r}),a?(0,u.jsx)(n.w,{threshold:70,color:t}):null]}),(0,u.jsxs)("mesh",{geometry:l.mesh_1.geometry,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:r}),a?(0,u.jsx)(n.w,{threshold:70,color:t}):null]}),(0,u.jsxs)("mesh",{geometry:l.mesh_2.geometry,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:r}),a?(0,u.jsx)(n.w,{threshold:70,color:t}):null]})]}),(0,u.jsxs)("mesh",{scale:2e3,receiveShadow:!0,rotation:[-Math.PI/2,0,0],children:[(0,u.jsx)("planeGeometry",{}),(0,u.jsx)("shadowMaterial",{transparent:!0,opacity:r})]})]})})};r.default=function(e){(0,s.Z)(e);var r=(0,h.useState)(!1),t=(0,a.Z)(r,2),o=t[0];t[1];return(0,u.jsxs)(l.Xz,{linear:!0,shadows:!0,raycaster:{params:{Line:{threshold:.15}}},camera:{position:[-100,20,200],fov:400},children:[(0,u.jsx)("color",{attach:"background",args:["#fff"]}),(0,u.jsx)("ambientLight",{intensity:.3}),(0,u.jsx)("directionalLight",{castShadow:!0,position:[2.5,8,5],intensity:1,"shadow-mapSize":[1024,1024],children:(0,u.jsx)("orthographicCamera",{attach:"shadow-camera",args:[-5,5,5,-5,1,100]})}),(0,u.jsxs)("mesh",{scale:20,receiveShadow:!0,rotation:[-Math.PI/2,0,0],children:[(0,u.jsx)("planeGeometry",{}),(0,u.jsx)("shadowMaterial",{transparent:!0,opacity:.5})]}),(0,u.jsx)(d,{opacity:.9,edgeColor:"black",showEdige:!0}),(0,u.jsx)(c.z,{makeDefault:!0,autoRotate:o})]})}},8503:function(e,r,t){t.r(r);var a=t(7174);r.default=a.default},2505:function(e,r,t){t.d(r,{w:function(){return i}});var a=t(4925),s=t(7462),o=t(7313),n=t(5825),c=["userData","children","geometry","threshold","color"];function i(e){e.userData;var r=e.children,t=e.geometry,i=e.threshold,l=void 0===i?15:i,h=e.color,u=void 0===h?"black":h,d=(0,a.Z)(e,c),m=o.useRef(null);return o.useLayoutEffect((function(){var e=m.current.parent;if(e){var r=t||e.geometry;r===m.current.userData.currentGeom&&l===m.current.userData.currentThreshold||(m.current.userData.currentGeom=r,m.current.userData.currentThreshold=l,m.current.geometry=new n.EdgesGeometry(r,l))}})),o.createElement("lineSegments",(0,s.Z)({ref:m,raycast:function(){return null}},d),r||o.createElement("lineBasicMaterial",{color:u}))}}}]);