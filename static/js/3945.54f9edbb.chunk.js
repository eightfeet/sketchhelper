"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[3945],{43945:function(e,t,n){n.r(t);var o=n(1413),r=n(45987),i=n(57809),s=n(85298),a=n(46790),h=(n(47313),n(46399)),l=n(81569),d=n(46417),c=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,n=e.showEdige,p=e.shadow,x=(0,r.Z)(e,c),u=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/body/head_planes_reference.glb")).nodes,f=1.3;return(0,d.jsxs)("group",(0,o.Z)((0,o.Z)({},x),{},{children:[(0,d.jsx)(s.M,{position:[0,2.5,.4],rotation:[0,(0,l.B0)(-90),0],children:(0,d.jsxs)("group",{position:[0,8,0],rotation:[(0,l.B0)(0),(0,l.B0)(90),0],scale:1,children:[(0,d.jsx)("mesh",{scale:2,receiveShadow:p,rotation:[0,0,0],position:[0,0,0],castShadow:p,geometry:u.PM3D_Sphere3D_6_PM3D_Sphere3D_6_0.geometry,dispose:null,children:(0,d.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})}),(0,d.jsx)("mesh",{scale:2,receiveShadow:p,rotation:[0,0,0],position:[0,0,0],castShadow:p,geometry:u.PM3D_Sphere3D_6_PM3D_Sphere3D_6_0_1.geometry,dispose:null,children:(0,d.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})}),(0,d.jsx)("mesh",{scale:2,receiveShadow:p,rotation:[0,0,0],position:[0,0,0],castShadow:p,geometry:u.PM3D_Sphere3D_6_PM3D_Sphere3D_6_0_2.geometry,dispose:null,children:(0,d.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})}),(0,d.jsx)("mesh",{scale:2,receiveShadow:p,rotation:[0,0,0],position:[0,0,0],castShadow:p,geometry:u.PM3D_Sphere3D_6_PM3D_Sphere3D_6_0_3.geometry,dispose:null,children:(0,d.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})})]})}),!!n&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("group",{position:[0,3.85,.3],rotation:[0,(0,l.B0)(0),(0,l.B0)(0)],children:[(0,d.jsx)(a.V,{position:[2.2,.7,0],children:(0,d.jsx)("span",{style:{fontSize:"1rem",color:"#f00"},children:"1/3"})}),(0,d.jsx)(a.V,{position:[2.2,-.7,0],children:(0,d.jsx)("span",{style:{fontSize:"1rem",color:"#f00"},children:"1/3"})}),(0,d.jsx)(a.V,{position:[2.2,-2,0],children:(0,d.jsx)("span",{style:{fontSize:"1rem",color:"#f00"},children:"1/3"})}),(0,d.jsx)(h.Z,{color:"#f00",cross:[],width:3,height:4,extend:f,axis:!1,position:[0,0,0]}),(0,d.jsx)(h.Z,{color:"#f00",cross:[],width:3,height:4,extend:f,axis:!1,position:[0,-1.3,0]}),(0,d.jsx)(h.Z,{color:"#f00",cross:[],width:3,height:4,extend:f,axis:!1,position:[0,-2.6,0]})]}),(0,d.jsxs)("group",{position:[0,3,3],rotation:[0,(0,l.B0)(0),(0,l.B0)(0)],children:[(0,d.jsx)(a.V,{position:[0,.5,0],children:(0,d.jsx)("span",{style:{fontSize:"1rem",color:"#0ff"},children:"1/5"})}),(0,d.jsx)(h.Z,{color:"#0ff",lineWidth:8,axis:!1,width:.7,height:0,extend:.65,crossExtend:!1,diagonalExtend:!1}),(0,d.jsx)(h.Z,{color:"#0ff",axis:!1,width:1.4,position:[1.05,0,0],height:0,extend:.65}),(0,d.jsx)(h.Z,{color:"#0ff",axis:!1,width:1.4,position:[-1.05,0,0],height:0,extend:.65})]})]})]}))}},85298:function(e,t,n){n.d(t,{M:function(){return h}});var o=n(45987),r=n(87462),i=n(45825),s=n(47313),a=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],h=s.forwardRef((function(e,t){var n=e.children,h=e.disableX,l=e.disableY,d=e.disableZ,c=e.left,p=e.right,x=e.top,u=e.bottom,f=e.front,g=e.back,m=e.onCentered,_=e.precise,j=void 0===_||_,y=(0,o.Z)(e,a),w=s.useRef(null),S=s.useRef(null),b=s.useRef(null);return s.useLayoutEffect((function(){S.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(b.current,j),t=new i.Vector3,n=new i.Sphere,o=e.max.x-e.min.x,r=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var a=x?r/2:u?-r/2:0,_=c?-o/2:p?o/2:0,y=f?s/2:g?-s/2:0;S.current.position.set(h?0:-t.x+_,l?0:-t.y+a,d?0:-t.z+y),"undefined"!==typeof m&&m({parent:w.current.parent,container:w.current,width:o,height:r,depth:s,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:a,horizontalAlignment:_,depthAlignment:y})}),[n]),s.useImperativeHandle(t,(function(){return w.current}),[]),s.createElement("group",(0,r.Z)({ref:w},y),s.createElement("group",{ref:S},s.createElement("group",{ref:b},n)))}))}}]);