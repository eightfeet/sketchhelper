"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[3449],{3449:function(e,t,n){n.r(t);var r=n(7809),o=n(5298),i=(n(7313),n(6904)),s=n(6399),a=n(6417);t.default=function(e){var t=e.position,n=e.opacity,d=e.showEdige,c=e.name,l=void 0===c?"shapeb":c,h=e.shadow,p=(0,r.L)("".concat("https://www.eightfeet.cn/model","/glb/shape.glb")).nodes,u={shapea:[p.shapea.geometry,[0,0,0],.5],shapeb:[p.shapeb.geometry,[1.23,.72,.5],.5],shapec:[p.shapec.geometry,[1.58,0,.8]],shaped:[p.shaped.geometry,[0,0,0],.5]}[l];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.M,{top:!0,scale:u[2]||.25,position:[0,-1,0],children:(0,a.jsx)("mesh",{receiveShadow:h,rotation:u[1],position:t,castShadow:h,geometry:u[0],dispose:null,children:(0,a.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5})})}),!!d&&(0,a.jsx)(a.Fragment,{children:"shapea"===l&&(0,a.jsxs)("group",{scale:.5,position:[0,-.09,0],children:[(0,a.jsx)(i.Z,{radius:2.35,extendRadius:1.215,rotation:[0,.526,0],segments:6,position:[0,-1.8,0],color:"red",cross:!0,extend:2.1,lineWidth:2}),(0,a.jsx)(i.Z,{radius:2.35,extendRadius:0,rotation:[0,.526,0],segments:6,position:[0,-1.8,0],color:"red",extendCone:!0,cross:!0,extend:4.35,lineWidth:2}),(0,a.jsx)(s.Z,{color:"gray",cross:["diagonal"],diagonalExtend:!1,extend:4.35,width:4.1,height:4.7,position:[0,-1.8,0]})]})})]})}},5298:function(e,t,n){n.d(t,{M:function(){return d}});var r=n(5987),o=n(7462),i=n(5825),s=n(7313),a=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],d=s.forwardRef((function(e,t){var n=e.children,d=e.disableX,c=e.disableY,l=e.disableZ,h=e.left,p=e.right,u=e.top,g=e.bottom,m=e.front,f=e.back,x=e.onCentered,b=e.precise,w=void 0===b||b,y=(0,r.Z)(e,a),v=s.useRef(null),j=s.useRef(null),Z=s.useRef(null);return s.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(Z.current,w),t=new i.Vector3,n=new i.Sphere,r=e.max.x-e.min.x,o=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var a=u?o/2:g?-o/2:0,b=h?-r/2:p?r/2:0,y=m?s/2:f?-s/2:0;j.current.position.set(d?0:-t.x+b,c?0:-t.y+a,l?0:-t.z+y),"undefined"!==typeof x&&x({parent:v.current.parent,container:v.current,width:r,height:o,depth:s,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:a,horizontalAlignment:b,depthAlignment:y})}),[n]),s.useImperativeHandle(t,(function(){return v.current}),[]),s.createElement("group",(0,o.Z)({ref:v},y),s.createElement("group",{ref:j},s.createElement("group",{ref:Z},n)))}))}}]);