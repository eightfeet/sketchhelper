"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[6786],{86786:function(e,r,t){t.r(r);var n=t(1413),o=t(45987),a=t(57809),i=t(85298),c=t(92505),s=(t(47313),t(81569)),u=t(46417),l=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,o.Z)(e,l),m=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/body/male_body_base_mesh_highpoly.glb")).nodes;return console.log(m),(0,u.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,u.jsx)(i.M,{position:[0,2.05,.4],rotation:[0,(0,s.B0)(0),0],children:(0,u.jsx)("group",{position:[0,8,0],rotation:[(0,s.B0)(-90),(0,s.B0)(0),0],scale:.42,children:m.main1objcleanermaterialmergergles.children.map((function(e,n){return(0,u.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:e.geometry,dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,u.jsx)(c.w,{threshold:5})]},n)}))})})}))}},85298:function(e,r,t){t.d(r,{M:function(){return s}});var n=t(45987),o=t(87462),a=t(45825),i=t(47313),c=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],s=i.forwardRef((function(e,r){var t=e.children,s=e.disableX,u=e.disableY,l=e.disableZ,d=e.left,h=e.right,m=e.top,f=e.bottom,p=e.front,g=e.back,b=e.onCentered,y=e.precise,v=void 0===y||y,w=(0,n.Z)(e,c),x=i.useRef(null),E=i.useRef(null),Z=i.useRef(null);return i.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(Z.current,v),r=new a.Vector3,t=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var c=m?o/2:f?-o/2:0,y=d?-n/2:h?n/2:0,w=p?i/2:g?-i/2:0;E.current.position.set(s?0:-r.x+y,u?0:-r.y+c,l?0:-r.z+w),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:c,horizontalAlignment:y,depthAlignment:w})}),[t]),i.useImperativeHandle(r,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},w),i.createElement("group",{ref:E},i.createElement("group",{ref:Z},t)))}))},92505:function(e,r,t){t.d(r,{w:function(){return s}});var n=t(45987),o=t(87462),a=t(47313),i=t(45825),c=["userData","children","geometry","threshold","color"];function s(e){e.userData;var r=e.children,t=e.geometry,s=e.threshold,u=void 0===s?15:s,l=e.color,d=void 0===l?"black":l,h=(0,n.Z)(e,c),m=a.useRef(null);return a.useLayoutEffect((function(){var e=m.current.parent;if(e){var r=t||e.geometry;r===m.current.userData.currentGeom&&u===m.current.userData.currentThreshold||(m.current.userData.currentGeom=r,m.current.userData.currentThreshold=u,m.current.geometry=new i.EdgesGeometry(r,u))}})),a.createElement("lineSegments",(0,o.Z)({ref:m,raycast:function(){return null}},h),r||a.createElement("lineBasicMaterial",{color:d}))}}}]);