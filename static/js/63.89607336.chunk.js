"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[63,8813],{58813:function(e,t,r){r.r(t);var n=r(1413),o=r(45987),a=r(57809),i=r(85298),u=r(92505),c=(r(47313),r(81569)),l=r(46417),s=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,r=e.showEdige,d=e.shadow,h=(0,o.Z)(e,s),f=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/body/female_human_skeleton.glb")).nodes;return console.log(f),(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,l.jsx)(i.M,{position:[0,2.5,.4],rotation:[0,(0,c.B0)(0),0],children:(0,l.jsx)("group",{position:[0,8,0],rotation:[(0,c.B0)(-90),(0,c.B0)(0),(0,c.B0)(0)],scale:.22,children:f.female_skeleton_first_anatomy_studyOBJcleanergles.children.map((function(e,n){return(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:e.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,l.jsx)(u.w,{threshold:5})]},n)}))})})}))}},60063:function(e,t,r){r.r(t);var n=r(58813);t.default=n.default},85298:function(e,t,r){r.d(t,{M:function(){return c}});var n=r(45987),o=r(87462),a=r(45825),i=r(47313),u=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=i.forwardRef((function(e,t){var r=e.children,c=e.disableX,l=e.disableY,s=e.disableZ,d=e.left,h=e.right,f=e.top,m=e.bottom,p=e.front,g=e.back,y=e.onCentered,b=e.precise,v=void 0===b||b,w=(0,n.Z)(e,u),x=i.useRef(null),E=i.useRef(null),k=i.useRef(null);return i.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(k.current,v),t=new a.Vector3,r=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var u=f?o/2:m?-o/2:0,b=d?-n/2:h?n/2:0,w=p?i/2:g?-i/2:0;E.current.position.set(c?0:-t.x+b,l?0:-t.y+u,s?0:-t.z+w),"undefined"!==typeof y&&y({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:u,horizontalAlignment:b,depthAlignment:w})}),[r]),i.useImperativeHandle(t,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},w),i.createElement("group",{ref:E},i.createElement("group",{ref:k},r)))}))},92505:function(e,t,r){r.d(t,{w:function(){return c}});var n=r(45987),o=r(87462),a=r(47313),i=r(45825),u=["userData","children","geometry","threshold","color"];function c(e){e.userData;var t=e.children,r=e.geometry,c=e.threshold,l=void 0===c?15:c,s=e.color,d=void 0===s?"black":s,h=(0,n.Z)(e,u),f=a.useRef(null);return a.useLayoutEffect((function(){var e=f.current.parent;if(e){var t=r||e.geometry;t===f.current.userData.currentGeom&&l===f.current.userData.currentThreshold||(f.current.userData.currentGeom=t,f.current.userData.currentThreshold=l,f.current.geometry=new i.EdgesGeometry(t,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),t||a.createElement("lineBasicMaterial",{color:d}))}}}]);