"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[3013],{3013:function(e,r,t){t.r(r);var n=t(7809),o=t(2505),a=(t(7313),t(1569)),s=t(6417);r.default=function(e){var r=e.position,t=(e.opacity,e.showEdige),c=void 0!==t&&t,u=(0,n.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/venus.glb")).nodes;return console.log(u),(0,s.jsx)("group",{rotation:[0,(0,a.B)(0),0],position:[0,-1,0],children:(0,s.jsxs)("mesh",{scale:.003,receiveShadow:!0,position:r,castShadow:!0,geometry:u.Venus.geometry,dispose:null,children:[(0,s.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:0,metalness:0,envMapIntensity:.5}),!!c&&(0,s.jsx)(o.w,{threshold:1,color:"red"})]})})}},1569:function(e,r,t){t.d(r,{B:function(){return n}});var n=function(e){return Math.PI/180*e}},2505:function(e,r,t){t.d(r,{w:function(){return u}});var n=t(4925),o=t(7462),a=t(7313),s=t(5825),c=["userData","children","geometry","threshold","color"];function u(e){e.userData;var r=e.children,t=e.geometry,u=e.threshold,i=void 0===u?15:u,l=e.color,h=void 0===l?"black":l,d=(0,n.Z)(e,c),f=a.useRef(null);return a.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&i===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=i,f.current.geometry=new s.EdgesGeometry(r,i))}})),a.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},d),r||a.createElement("lineBasicMaterial",{color:h}))}}}]);