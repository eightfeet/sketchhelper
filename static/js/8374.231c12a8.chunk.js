"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8374,5911],{5911:function(e,r,t){t.r(r);var n=t(1413),o=t(5987),i=t(7809),a=t(5298),c=t(2505),u=(t(7313),t(1569)),l=t(6417),s=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,o.Z)(e,s),f=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/body/feet.glb")).nodes;return console.log(f),(0,l.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,l.jsx)(a.M,{position:[0,1.7,.4],rotation:[0,(0,u.B0)(0),0],children:(0,l.jsx)("group",{position:[0,8,0],rotation:[(0,u.B0)(0),(0,u.B0)(180),(0,u.B0)(0)],scale:.7,children:f.d0a1f1c16d9f4c3b841c15710eadd76cfbx.children[0].children[0].children.map((function(e,n){return(0,l.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:e.geometry,dispose:null,children:[(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,l.jsx)(c.w,{threshold:5})]},n)}))})})}))}},8374:function(e,r,t){t.r(r);var n=t(5911);r.default=n.default},5298:function(e,r,t){t.d(r,{M:function(){return u}});var n=t(5987),o=t(7462),i=t(5825),a=t(7313),c=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],u=a.forwardRef((function(e,r){var t=e.children,u=e.disableX,l=e.disableY,s=e.disableZ,d=e.left,h=e.right,f=e.top,m=e.bottom,p=e.front,g=e.back,b=e.onCentered,v=e.precise,y=void 0===v||v,w=(0,n.Z)(e,c),x=a.useRef(null),E=a.useRef(null),Z=a.useRef(null);return a.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(Z.current,y),r=new i.Vector3,t=new i.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var c=f?o/2:m?-o/2:0,v=d?-n/2:h?n/2:0,w=p?a/2:g?-a/2:0;E.current.position.set(u?0:-r.x+v,l?0:-r.y+c,s?0:-r.z+w),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:a,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:c,horizontalAlignment:v,depthAlignment:w})}),[t]),a.useImperativeHandle(r,(function(){return x.current}),[]),a.createElement("group",(0,o.Z)({ref:x},w),a.createElement("group",{ref:E},a.createElement("group",{ref:Z},t)))}))},2505:function(e,r,t){t.d(r,{w:function(){return u}});var n=t(5987),o=t(7462),i=t(7313),a=t(5825),c=["userData","children","geometry","threshold","color"];function u(e){e.userData;var r=e.children,t=e.geometry,u=e.threshold,l=void 0===u?15:u,s=e.color,d=void 0===s?"black":s,h=(0,n.Z)(e,c),f=i.useRef(null);return i.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&l===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=l,f.current.geometry=new a.EdgesGeometry(r,l))}})),i.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),r||i.createElement("lineBasicMaterial",{color:d}))}}}]);