"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[4649],{34649:function(e,t,n){n.r(t);var r=n(1413),i=n(45987),o=n(57809),a=n(85298),s=(n(47313),n(81569)),l=n(46417),c=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,n=(e.showEdige,e.shadow,(0,i.Z)(e,c)),u=(0,o.L)("".concat("https://www.eightfeet.cn/model","/glb/body/reilly_head_v1.glb")).nodes;return(0,l.jsx)("group",(0,r.Z)((0,r.Z)({},n),{},{children:(0,l.jsx)(a.M,{position:[0,1.35,.4],rotation:[0,(0,s.B0)(-90),0],children:(0,l.jsx)("group",{position:[0,8,0],rotation:[(0,s.B0)(-90),(0,s.B0)(90),(0,s.B0)(90)],scale:.12,children:[u.Asset3DLoadersceneRoot].map((function(e,n){return(0,l.jsx)("mesh",{scale:2,rotation:[0,0,0],position:[0,0,0],geometry:e.geometry,dispose:null,children:(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})},n)}))})})}))}},85298:function(e,t,n){n.d(t,{M:function(){return l}});var r=n(45987),i=n(87462),o=n(45825),a=n(47313),s=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=a.forwardRef((function(e,t){var n=e.children,l=e.disableX,c=e.disableY,u=e.disableZ,d=e.left,p=e.right,h=e.top,f=e.bottom,g=e.front,m=e.back,b=e.onCentered,w=e.precise,x=void 0===w||w,y=(0,r.Z)(e,s),v=a.useRef(null),B=a.useRef(null),Z=a.useRef(null);return a.useLayoutEffect((function(){B.current.matrixWorld.identity();var e=(new o.Box3).setFromObject(Z.current,x),t=new o.Vector3,n=new o.Sphere,r=e.max.x-e.min.x,i=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var s=h?i/2:f?-i/2:0,w=d?-r/2:p?r/2:0,y=g?a/2:m?-a/2:0;B.current.position.set(l?0:-t.x+w,c?0:-t.y+s,u?0:-t.z+y),"undefined"!==typeof b&&b({parent:v.current.parent,container:v.current,width:r,height:i,depth:a,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:s,horizontalAlignment:w,depthAlignment:y})}),[n]),a.useImperativeHandle(t,(function(){return v.current}),[]),a.createElement("group",(0,i.Z)({ref:v},y),a.createElement("group",{ref:B},a.createElement("group",{ref:Z},n)))}))}}]);