"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[1390,1733,7384],{81733:function(e,t,n){n.r(t);var i=n(1413),r=n(45987),o=n(57809),s=n(85298),d=n(46790),a=(n(47313),n(46399)),l=n(81569),c=(n(67384),n(46417)),h=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,n=void 0===t?1:t,u=e.showEdige,f=e.shadow,p=(0,r.Z)(e,h),m=(0,o.L)("".concat("https://www.eightfeet.cn/model","/glb/body/skeleton_b.glb")).nodes;return(0,c.jsxs)("group",(0,i.Z)((0,i.Z)({},p),{},{children:[(0,c.jsx)(s.M,{position:[0,2.55,0],children:(0,c.jsx)("group",{position:[0,8,0],rotation:[(0,l.B0)(90),(0,l.B0)(0),0],scale:.174,children:(0,c.jsx)("mesh",{receiveShadow:f,rotation:[0,0,0],position:[0,0,0],castShadow:f,geometry:m.Fabricio_Works_Skeleton.geometry,dispose:null,children:(0,c.jsx)("meshStandardMaterial",{color:"#fff",transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5})})})}),!!u&&(0,c.jsxs)("group",{rotation:[0,(0,l.B0)(-85),0],position:[0,-.98,-.4],children:[(0,c.jsx)(a.Z,{width:0,height:4,cross:[],extend:1.775}),(0,c.jsx)("mesh",{position:[-0,1.775,2],children:(0,c.jsx)(d.V,{children:(0,c.jsx)("div",{className:"femalebodytag",children:"1/4"})})}),(0,c.jsx)(a.Z,{width:0,height:4,cross:[],extend:3.55}),(0,c.jsx)("mesh",{position:[-0,3.55,2],children:(0,c.jsx)(d.V,{children:(0,c.jsx)("div",{className:"femalebodytag",children:"2/4"})})}),(0,c.jsx)(a.Z,{width:0,height:4,cross:[],extend:1.775*3}),(0,c.jsx)("mesh",{position:[-0,1.775*3,2],children:(0,c.jsx)(d.V,{children:(0,c.jsx)("div",{className:"femalebodytag",children:"3/4"})})}),(0,c.jsx)(a.Z,{width:0,height:4,cross:[],extend:7.1}),(0,c.jsx)("mesh",{position:[-0,7.1,2],children:(0,c.jsx)(d.V,{children:(0,c.jsx)("div",{className:"femalebodytag",children:"4/4"})})})]})]}))}},41390:function(e,t,n){n.r(t);var i=n(81733);t.default=i.default},85298:function(e,t,n){n.d(t,{M:function(){return a}});var i=n(45987),r=n(87462),o=n(45825),s=n(47313),d=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],a=s.forwardRef((function(e,t){var n=e.children,a=e.disableX,l=e.disableY,c=e.disableZ,h=e.left,u=e.right,f=e.top,p=e.bottom,m=e.front,x=e.back,g=e.onCentered,b=e.precise,j=void 0===b||b,w=(0,i.Z)(e,d),v=s.useRef(null),y=s.useRef(null),Z=s.useRef(null);return s.useLayoutEffect((function(){y.current.matrixWorld.identity();var e=(new o.Box3).setFromObject(Z.current,j),t=new o.Vector3,n=new o.Sphere,i=e.max.x-e.min.x,r=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var d=f?r/2:p?-r/2:0,b=h?-i/2:u?i/2:0,w=m?s/2:x?-s/2:0;y.current.position.set(a?0:-t.x+b,l?0:-t.y+d,c?0:-t.z+w),"undefined"!==typeof g&&g({parent:v.current.parent,container:v.current,width:i,height:r,depth:s,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:d,horizontalAlignment:b,depthAlignment:w})}),[n]),s.useImperativeHandle(t,(function(){return v.current}),[]),s.createElement("group",(0,r.Z)({ref:v},w),s.createElement("group",{ref:y},s.createElement("group",{ref:Z},n)))}))},67384:function(e,t,n){n.r(t),t.default={}}}]);