"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[6384,7071],{27071:function(e,r,t){t.r(r);var n=t(1413),o=t(45987),i=t(57809),a=t(85298),s=t(92505),u=(t(47313),t(56659)),c=t(81569),l=t(46417),d=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,h=e.shadow,f=(0,o.Z)(e,d),p=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/body/head_of_david.glb")).nodes;return console.log(p),(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},f),{},{children:(0,l.jsxs)(a.M,{position:[0,1.01,.4],rotation:[0,(0,c.B0)(0),0],children:[(0,l.jsx)("group",{position:[0,8,0],rotation:[(0,c.B0)(180),(0,c.B0)(-90),0],scale:.01,children:(0,l.jsxs)("mesh",{scale:2,receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:p.Object_2.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,l.jsx)(s.w,{threshold:5})]})}),!!t&&(0,l.jsxs)("group",{rotation:[0,(0,c.B0)(-5),0],children:[(0,l.jsx)(u.Z,{lineWidth:2.5,color:"#000",radius:1,position:[0,8.13,0],isSquare:!1}),(0,l.jsx)(u.Z,{lineWidth:2.5,color:"#000",radius:1,position:[0,8.13,0],rotation:[(0,c.B0)(90),0,0],isSquare:!1}),(0,l.jsx)(u.Z,{lineWidth:2.5,color:"#000",radius:1,position:[0,8.13,0],rotation:[0,0,(0,c.B0)(90)],isSquare:!1})]})]})}))}},85286:function(e,r,t){t.r(r);var n=t(27071);r.default=n.default},85298:function(e,r,t){t.d(r,{M:function(){return u}});var n=t(45987),o=t(87462),i=t(45825),a=t(47313),s=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],u=a.forwardRef((function(e,r){var t=e.children,u=e.disableX,c=e.disableY,l=e.disableZ,d=e.left,h=e.right,f=e.top,p=e.bottom,m=e.front,g=e.back,b=e.onCentered,v=e.precise,y=void 0===v||v,w=(0,n.Z)(e,s),x=a.useRef(null),j=a.useRef(null),Z=a.useRef(null);return a.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(Z.current,y),r=new i.Vector3,t=new i.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var s=f?o/2:p?-o/2:0,v=d?-n/2:h?n/2:0,w=m?a/2:g?-a/2:0;j.current.position.set(u?0:-r.x+v,c?0:-r.y+s,l?0:-r.z+w),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:a,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:s,horizontalAlignment:v,depthAlignment:w})}),[t]),a.useImperativeHandle(r,(function(){return x.current}),[]),a.createElement("group",(0,o.Z)({ref:x},w),a.createElement("group",{ref:j},a.createElement("group",{ref:Z},t)))}))},92505:function(e,r,t){t.d(r,{w:function(){return u}});var n=t(45987),o=t(87462),i=t(47313),a=t(45825),s=["userData","children","geometry","threshold","color"];function u(e){e.userData;var r=e.children,t=e.geometry,u=e.threshold,c=void 0===u?15:u,l=e.color,d=void 0===l?"black":l,h=(0,n.Z)(e,s),f=i.useRef(null);return i.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&c===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=c,f.current.geometry=new a.EdgesGeometry(r,c))}})),i.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),r||i.createElement("lineBasicMaterial",{color:d}))}}}]);