"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[3013],{3013:function(e,r,t){t.r(r);var n=t(7809),o=t(5298),a=t(2505),i=(t(7313),t(6417));r.default=function(e){var r=e.position,t=(e.opacity,e.showEdige),u=void 0!==t&&t,c=(0,n.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/venus.glb")).nodes;return console.log(c),(0,i.jsx)(o.M,{top:!0,scale:.0025,position:[0,-1,.5],children:(0,i.jsxs)("mesh",{receiveShadow:!0,rotation:[1.6,0,.3],position:r,castShadow:!0,geometry:c.Venus.geometry,dispose:null,children:[(0,i.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:0,metalness:0,envMapIntensity:.5}),!!u&&(0,i.jsx)(a.w,{threshold:1,color:"red"})]})})}},5298:function(e,r,t){t.d(r,{M:function(){return c}});var n=t(4925),o=t(7462),a=t(5825),i=t(7313),u=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=i.forwardRef((function(e,r){var t=e.children,c=e.disableX,s=e.disableY,l=e.disableZ,d=e.left,h=e.right,f=e.top,m=e.bottom,p=e.front,g=e.back,v=e.onCentered,b=e.precise,y=void 0===b||b,w=(0,n.Z)(e,u),x=i.useRef(null),E=i.useRef(null),k=i.useRef(null);return i.useLayoutEffect((function(){E.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(k.current,y),r=new a.Vector3,t=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,i=e.max.z-e.min.z;e.getCenter(r),e.getBoundingSphere(t);var u=f?o/2:m?-o/2:0,b=d?-n/2:h?n/2:0,w=p?i/2:g?-i/2:0;E.current.position.set(c?0:-r.x+b,s?0:-r.y+u,l?0:-r.z+w),"undefined"!==typeof v&&v({parent:x.current.parent,container:x.current,width:n,height:o,depth:i,boundingBox:e,boundingSphere:t,center:r,verticalAlignment:u,horizontalAlignment:b,depthAlignment:w})}),[t]),i.useImperativeHandle(r,(function(){return x.current}),[]),i.createElement("group",(0,o.Z)({ref:x},w),i.createElement("group",{ref:E},i.createElement("group",{ref:k},t)))}))},2505:function(e,r,t){t.d(r,{w:function(){return c}});var n=t(4925),o=t(7462),a=t(7313),i=t(5825),u=["userData","children","geometry","threshold","color"];function c(e){e.userData;var r=e.children,t=e.geometry,c=e.threshold,s=void 0===c?15:c,l=e.color,d=void 0===l?"black":l,h=(0,n.Z)(e,u),f=a.useRef(null);return a.useLayoutEffect((function(){var e=f.current.parent;if(e){var r=t||e.geometry;r===f.current.userData.currentGeom&&s===f.current.userData.currentThreshold||(f.current.userData.currentGeom=r,f.current.userData.currentThreshold=s,f.current.geometry=new i.EdgesGeometry(r,s))}})),a.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),r||a.createElement("lineBasicMaterial",{color:d}))}}}]);