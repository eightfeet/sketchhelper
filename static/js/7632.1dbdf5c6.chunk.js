"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[7632,5541],{35541:function(e,r,t){t.r(r);var n=t(1413),o=t(45987),a=t(57809),i=t(85298),c=t(92505),u=(t(47313),t(81569)),l=t(46417),s=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,o.Z)(e,s),f=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/body/feet_skeleton.glb")).nodes;return console.log(f),(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,l.jsx)(i.M,{position:[0,-.1,.4],rotation:[0,(0,u.B0)(0),0],children:(0,l.jsx)("group",{position:[0,8,0],rotation:[(0,u.B0)(90),(0,u.B0)(180),(0,u.B0)(-90)],scale:.4,children:f.feet_skeletonobjcleanermaterialmergergles.children.map((function(e,n){return(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:e.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,l.jsx)(c.w,{threshold:5})]},n)}))})})}))}},67632:function(e,r,t){t.r(r);var n=t(35541);r.default=n.default},85298:function(e,r,t){t.d(r,{M:function(){return u}});var n=t(45987),o=t(87462),a=t(45825),i=t(47313),c=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],u=i.forwardRef((function(e,r){var t=e.children,u=e.disableX,l=e.disableY,s=e.disableZ,d=e.left,h=e.right,f=e.top,m=e.bottom,p=e.front,g=e.back,b=e.onCentered,v=e.precise,y=void 0===v||v,w=(0,n.Z)(e,c),x=i.useRef(null),E=i.useRef(null),k=i.useRef(null);return i.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(k.current,y),r=new a.Vector3,t=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var c=f?o/2:m?-o/2:0,v=d?-n/2:h?n/2:0,w=p?i/2:g?-i/2:0;E.current.position.set(u?0:-r.x+v,l?0:-r.y+c,s?0:-r.z+w),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:c,horizontalAlignment:v,depthAlignment:w})}),[t]),i.useImperativeHandle(r,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},w),i.createElement("group",{ref:E},i.createElement("group",{ref:k},t)))}))},92505:function(e,r,t){t.d(r,{w:function(){return u}});var n=t(45987),o=t(87462),a=t(47313),i=t(45825),c=["userData","children","geometry","threshold","color"];function u(e){e.userData;var r=e.children,t=e.geometry,u=e.threshold,l=void 0===u?15:u,s=e.color,d=void 0===s?"black":s,h=(0,n.Z)(e,c),f=a.useRef(null);return a.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&l===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=l,f.current.geometry=new i.EdgesGeometry(r,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),r||a.createElement("lineBasicMaterial",{color:d}))}}}]);