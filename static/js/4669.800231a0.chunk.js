"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[4669,7952],{7952:function(e,r,t){t.r(r);var n=t(1413),o=t(5987),a=t(7809),i=t(5298),u=t(2505),l=(t(7313),t(1569)),c=t(6417),s=["visible","opacity","showEdige","shadow"];r.default=function(e){e.visible;var r=e.opacity,t=e.showEdige,d=e.shadow,h=(0,o.Z)(e,s),f=(0,a.L)("".concat("https://www.eightfeet.cn/model","/glb/body/human_male_skull.glb")).nodes;return console.log(f),(0,c.jsx)("group",(0,n.Z)((0,n.Z)({},h),{},{children:(0,c.jsx)(i.M,{position:[0,1,.4],rotation:[0,(0,l.B0)(0),0],children:(0,c.jsx)("group",{position:[0,8,0],rotation:[(0,l.B0)(-90),(0,l.B0)(0),(0,l.B0)(0)],scale:.1,children:f.Merged_male_skullOBJcleanergles.children[0].children.map((function(e,n){return(0,c.jsxs)("mesh",{scale:2,receiveShadow:d,rotation:[0,0,0],position:[0,0,0],castShadow:d,geometry:e.geometry,dispose:null,children:[(0,c.jsx)("meshStandardMaterial",{transparent:!0,opacity:r,roughness:.7,metalness:.25,envMapIntensity:.5}),!!t&&(0,c.jsx)(u.w,{threshold:5})]},n)}))})})}))}},4669:function(e,r,t){t.r(r);var n=t(7952);r.default=n.default},5298:function(e,r,t){t.d(r,{M:function(){return l}});var n=t(5987),o=t(7462),a=t(5825),i=t(7313),u=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=i.forwardRef((function(e,r){var t=e.children,l=e.disableX,c=e.disableY,s=e.disableZ,d=e.left,h=e.right,f=e.top,m=e.bottom,p=e.front,g=e.back,b=e.onCentered,v=e.precise,y=void 0===v||v,w=(0,n.Z)(e,u),x=i.useRef(null),E=i.useRef(null),k=i.useRef(null);return i.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(k.current,y),r=new a.Vector3,t=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var u=f?o/2:m?-o/2:0,v=d?-n/2:h?n/2:0,w=p?i/2:g?-i/2:0;E.current.position.set(l?0:-r.x+v,c?0:-r.y+u,s?0:-r.z+w),"undefined"!==typeof b&&b({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:u,horizontalAlignment:v,depthAlignment:w})}),[t]),i.useImperativeHandle(r,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},w),i.createElement("group",{ref:E},i.createElement("group",{ref:k},t)))}))},2505:function(e,r,t){t.d(r,{w:function(){return l}});var n=t(5987),o=t(7462),a=t(7313),i=t(5825),u=["userData","children","geometry","threshold","color"];function l(e){e.userData;var r=e.children,t=e.geometry,l=e.threshold,c=void 0===l?15:l,s=e.color,d=void 0===s?"black":s,h=(0,n.Z)(e,u),f=a.useRef(null);return a.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&c===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=c,f.current.geometry=new i.EdgesGeometry(r,c))}})),a.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),r||a.createElement("lineBasicMaterial",{color:d}))}}}]);