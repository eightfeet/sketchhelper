"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8955],{58955:function(e,t,n){n.r(t);var r=n(1413),o=n(45987),i=n(57809),a=n(85298),s=(n(47313),n(81569)),c=n(46417),d=["visible","opacity","showEdige","shadow"];t.default=function(e){e.visible;var t=e.opacity,n=(e.showEdige,e.shadow),l=(0,o.Z)(e,d),u=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/body/bodymale.glb")).nodes;return console.log(u),(0,c.jsx)("group",(0,r.Z)((0,r.Z)({},l),{},{children:(0,c.jsx)(a.M,{position:[0,2.7,0],children:(0,c.jsxs)("group",{position:[0,8,0],rotation:[(0,s.B0)(0),(0,s.B0)(0),0],scale:.03,children:[(0,c.jsx)("mesh",{receiveShadow:n,rotation:[0,0,0],position:[0,0,0],castShadow:n,geometry:u.Body_Decimated.geometry,dispose:null,children:(0,c.jsx)("meshStandardMaterial",{color:"#fff",transparent:!0,opacity:t,roughness:.7,metalness:.25,envMapIntensity:.5})}),(0,c.jsx)("mesh",{receiveShadow:n,rotation:[0,0,0],position:[0,0,0],castShadow:n,geometry:u.Ecorche_Decimated.geometry,dispose:null,children:(0,c.jsx)("meshStandardMaterial",{color:"#eee",roughness:.7,metalness:.25,envMapIntensity:.5})})]})})}))}},85298:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(45987),o=n(87462),i=n(45825),a=n(47313),s=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=a.forwardRef((function(e,t){var n=e.children,c=e.disableX,d=e.disableY,l=e.disableZ,u=e.left,h=e.right,p=e.top,m=e.bottom,f=e.front,g=e.back,b=e.onCentered,w=e.precise,y=void 0===w||w,x=(0,r.Z)(e,s),v=a.useRef(null),S=a.useRef(null),j=a.useRef(null);return a.useLayoutEffect((function(){S.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(j.current,y),t=new i.Vector3,n=new i.Sphere,r=e.max.x-e.min.x,o=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var s=p?o/2:m?-o/2:0,w=u?-r/2:h?r/2:0,x=f?a/2:g?-a/2:0;S.current.position.set(c?0:-t.x+w,d?0:-t.y+s,l?0:-t.z+x),"undefined"!==typeof b&&b({parent:v.current.parent,container:v.current,width:r,height:o,depth:a,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:s,horizontalAlignment:w,depthAlignment:x})}),[n]),a.useImperativeHandle(t,(function(){return v.current}),[]),a.createElement("group",(0,o.Z)({ref:v},x),a.createElement("group",{ref:S},a.createElement("group",{ref:j},n)))}))}}]);