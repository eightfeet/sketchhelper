"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[9229],{79229:function(e,r,t){t.r(r);var n=t(1413),o=t(45987),i=t(57809),a=t(85298),c=t(92505),s=(t(47313),t(81569)),u=t(46417),l=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,o.Z)(e,l),m=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/body/limb_comparision.glb")).nodes;return console.log(m),(0,u.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,u.jsx)(a.M,{position:[0,1,.4],rotation:[0,(0,s.B0)(0),0],children:(0,u.jsx)("group",{position:[0,8,0],rotation:[(0,s.B0)(-90),(0,s.B0)(0),(0,s.B0)(-45)],scale:.185,children:m.limb_comparisionOBJcleanermaterialmergergles.children.map((function(e,n){return(0,u.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:e.geometry,dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,u.jsx)(c.w,{threshold:5})]},n)}))})})}))}},85298:function(e,r,t){t.d(r,{M:function(){return s}});var n=t(45987),o=t(87462),i=t(45825),a=t(47313),c=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],s=a.forwardRef((function(e,r){var t=e.children,s=e.disableX,u=e.disableY,l=e.disableZ,d=e.left,h=e.right,m=e.top,f=e.bottom,p=e.front,g=e.back,b=e.onCentered,y=e.precise,v=void 0===y||y,w=(0,n.Z)(e,c),x=a.useRef(null),E=a.useRef(null),B=a.useRef(null);return a.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(B.current,v),r=new i.Vector3,t=new i.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var c=m?o/2:f?-o/2:0,y=d?-n/2:h?n/2:0,w=p?a/2:g?-a/2:0;E.current.position.set(s?0:-r.x+y,u?0:-r.y+c,l?0:-r.z+w),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:a,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:c,horizontalAlignment:y,depthAlignment:w})}),[t]),a.useImperativeHandle(r,(function(){return x.current}),[]),a.createElement("group",(0,o.Z)({ref:x},w),a.createElement("group",{ref:E},a.createElement("group",{ref:B},t)))}))},92505:function(e,r,t){t.d(r,{w:function(){return s}});var n=t(45987),o=t(87462),i=t(47313),a=t(45825),c=["userData","children","geometry","threshold","color"];function s(e){e.userData;var r=e.children,t=e.geometry,s=e.threshold,u=void 0===s?15:s,l=e.color,d=void 0===l?"black":l,h=(0,n.Z)(e,c),m=i.useRef(null);return i.useLayoutEffect((function(){var e=m.current.parent;if(e){var r=t||e.geometry;r===m.current.userData.currentGeom&&u===m.current.userData.currentThreshold||(m.current.userData.currentGeom=r,m.current.userData.currentThreshold=u,m.current.geometry=new a.EdgesGeometry(r,u))}})),i.createElement("lineSegments",(0,o.Z)({ref:m,raycast:function(){return null}},h),r||i.createElement("lineBasicMaterial",{color:d}))}}}]);