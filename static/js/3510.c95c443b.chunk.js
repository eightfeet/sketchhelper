"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[3510,4564],{4564:function(e,t,r){r.r(t);var n=r(7809),o=r(5298),a=r(2505),u=(r(7313),r(6417));t.default=function(e){var t=e.position,r=(e.opacity,e.showEdige),i=e.name,c=(0,n.L)("".concat("https://www.eightfeet.cn/model","/glb/kitchen.glb")).nodes,l={Bowl:[c.Bowl.geometry,[1.6,0,0]],ButterKnife:[c.ButterKnife.geometry,[1.6,0,0]],Cup:[c.Cup.geometry,[1.6,0,0]],CupHandle:[c.CupHandle.geometry,[1.6,0,0]],Fork:[c.Fork.geometry,[1.6,0,0]],Plate:[c.Plate.geometry,[1.6,0,0]],Pot:[c.Pot.geometry,[1.6,0,0]],Scoop:[c.Scoop.geometry,[1.6,0,0]],ScoopStuff:[c.ScoopStuff.geometry,[1.6,0,0]],Spatula:[c.Spatula.geometry,[1.6,0,0]],Spoon:[c.Spoon.geometry,[1.6,0,0]],FryingPan:[c.FryingPan.geometry,[1.6,0,0]]}[i];return(0,u.jsx)(o.M,{top:!0,scale:.25,position:[0,-1,0],children:(0,u.jsxs)("mesh",{receiveShadow:!0,rotation:l[1],position:t,castShadow:!0,geometry:l[0],dispose:null,children:[(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:1,roughness:.7,metalness:.25,envMapIntensity:.5}),!!r&&(0,u.jsx)(a.w,{threshold:5,color:"red"})]})})}},3510:function(e,t,r){r.r(t);var n=r(4564);t.default=n.default},5298:function(e,t,r){r.d(t,{M:function(){return c}});var n=r(5987),o=r(7462),a=r(5825),u=r(7313),i=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=u.forwardRef((function(e,t){var r=e.children,c=e.disableX,l=e.disableY,s=e.disableZ,d=e.left,f=e.right,m=e.top,p=e.bottom,h=e.front,g=e.back,y=e.onCentered,b=e.precise,v=void 0===b||b,w=(0,n.Z)(e,i),S=u.useRef(null),x=u.useRef(null),k=u.useRef(null);return u.useLayoutEffect((function(){x.current.matrixWorld.identity();var e=(new a.Box3).setFromObject(k.current,v),t=new a.Vector3,r=new a.Sphere,n=e.max.x-e.min.x,o=e.max.y-e.min.y,u=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(r);var i=m?o/2:p?-o/2:0,b=d?-n/2:f?n/2:0,w=h?u/2:g?-u/2:0;x.current.position.set(c?0:-t.x+b,l?0:-t.y+i,s?0:-t.z+w),"undefined"!==typeof y&&y({parent:S.current.parent,container:S.current,width:n,height:o,depth:u,boundingBox:e,boundingSphere:r,center:t,verticalAlignment:i,horizontalAlignment:b,depthAlignment:w})}),[r]),u.useImperativeHandle(t,(function(){return S.current}),[]),u.createElement("group",(0,o.Z)({ref:S},w),u.createElement("group",{ref:x},u.createElement("group",{ref:k},r)))}))},2505:function(e,t,r){r.d(t,{w:function(){return c}});var n=r(5987),o=r(7462),a=r(7313),u=r(5825),i=["userData","children","geometry","threshold","color"];function c(e){e.userData;var t=e.children,r=e.geometry,c=e.threshold,l=void 0===c?15:c,s=e.color,d=void 0===s?"black":s,f=(0,n.Z)(e,i),m=a.useRef(null);return a.useLayoutEffect((function(){var e=m.current.parent;if(e){var t=r||e.geometry;t===m.current.userData.currentGeom&&l===m.current.userData.currentThreshold||(m.current.userData.currentGeom=t,m.current.userData.currentThreshold=l,m.current.geometry=new u.EdgesGeometry(t,l))}})),a.createElement("lineSegments",(0,o.Z)({ref:m,raycast:function(){return null}},f),t||a.createElement("lineBasicMaterial",{color:d}))}}}]);