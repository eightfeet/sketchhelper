"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[5738,3676],{3676:function(e,t,n){n.r(t);var r=n(1413),o=n(5987),i=n(7809),a=n(5298),s=(n(7313),n(1569)),l=n(6417),c=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,n=e.showEdige,u=e.shadow,d=(0,o.Z)(e,c),h=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/body/sculpture_bust_of_roza_loewenfeld.glb")).nodes;return console.log(h),(0,l.jsx)("group",(0,r.Z)((0,r.Z)({},d),{},{children:(0,l.jsxs)(a.M,{position:[0,1.72,.4],rotation:[(0,s.B0)(0),(0,s.B0)(-90),(0,s.B0)(-90)],children:[(0,l.jsx)("group",{position:[0,8,0],rotation:[(0,s.B0)(180),(0,s.B0)(-90),0],scale:.006,children:(0,l.jsx)("mesh",{scale:2,receiveShadow:u,rotation:[0,0,0],position:[0,0,0],castShadow:u,geometry:h.Object_3.geometry,dispose:null,children:(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!n&&null]})}))}},5738:function(e,t,n){n.r(t);var r=n(3676);t.default=r.default},5298:function(e,t,n){n.d(t,{M:function(){return l}});var r=n(5987),o=n(7462),i=n(5825),a=n(7313),s=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=a.forwardRef((function(e,t){var n=e.children,l=e.disableX,c=e.disableY,u=e.disableZ,d=e.left,h=e.right,p=e.top,f=e.bottom,g=e.front,m=e.back,b=e.onCentered,w=e.precise,v=void 0===w||w,x=(0,r.Z)(e,s),y=a.useRef(null),B=a.useRef(null),j=a.useRef(null);return a.useLayoutEffect((function(){B.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(j.current,v),t=new i.Vector3,n=new i.Sphere,r=e.max.x-e.min.x,o=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var s=p?o/2:f?-o/2:0,w=d?-r/2:h?r/2:0,x=g?a/2:m?-a/2:0;B.current.position.set(l?0:-t.x+w,c?0:-t.y+s,u?0:-t.z+x),"undefined"!==typeof b&&b({parent:y.current.parent,container:y.current,width:r,height:o,depth:a,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:s,horizontalAlignment:w,depthAlignment:x})}),[n]),a.useImperativeHandle(t,(function(){return y.current}),[]),a.createElement("group",(0,o.Z)({ref:y},x),a.createElement("group",{ref:B},a.createElement("group",{ref:j},n)))}))}}]);