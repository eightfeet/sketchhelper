"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[175],{8175:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(7809),o=n(5298),i=n(2505),a=(n(7313),n(6417)),s=function(e){var t=e.shadow,n=e.position,s=e.opacity,c=e.showEdige,l=e.name,u=(0,r.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/Fruits.glb")).nodes;console.log(u);var d={Apricot:[u.Apricot.geometry,[1.6,0,0]],Banana:[u.Banana.geometry,[1.6,0,0],1.5],Apple:[u.appleobj.geometry,[1.6,0,0]],Pear:[u.pear.geometry,[1.6,0,0]]}[l];return(0,a.jsx)(o.M,{top:!0,scale:d[2]||.25,position:[0,-1,0],children:(0,a.jsxs)("mesh",{receiveShadow:t,rotation:d[1],position:n,castShadow:t,geometry:d[0],dispose:null,children:[(0,a.jsx)("meshStandardMaterial",{transparent:!0,opacity:s,roughness:.7,metalness:.25,envMapIntensity:.5}),!!c&&(0,a.jsx)(i.w,{threshold:1,color:"#000"})]})})}},5298:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(4925),o=n(7462),i=n(5825),a=n(7313),s=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],c=a.forwardRef((function(e,t){var n=e.children,c=e.disableX,l=e.disableY,u=e.disableZ,d=e.left,p=e.right,h=e.top,f=e.bottom,m=e.front,g=e.back,b=e.onCentered,w=e.precise,y=void 0===w||w,x=(0,r.Z)(e,s),v=a.useRef(null),k=a.useRef(null),j=a.useRef(null);return a.useLayoutEffect((function(){k.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(j.current,y),t=new i.Vector3,n=new i.Sphere,r=e.max.x-e.min.x,o=e.max.y-e.min.y,a=e.max.z-e.min.z;e.getCenter(t),e.getBoundingSphere(n);var s=h?o/2:f?-o/2:0,w=d?-r/2:p?r/2:0,x=m?a/2:g?-a/2:0;k.current.position.set(c?0:-t.x+w,l?0:-t.y+s,u?0:-t.z+x),"undefined"!==typeof b&&b({parent:v.current.parent,container:v.current,width:r,height:o,depth:a,boundingBox:e,boundingSphere:n,center:t,verticalAlignment:s,horizontalAlignment:w,depthAlignment:x})}),[n]),a.useImperativeHandle(t,(function(){return v.current}),[]),a.createElement("group",(0,o.Z)({ref:v},x),a.createElement("group",{ref:k},a.createElement("group",{ref:j},n)))}))}}]);