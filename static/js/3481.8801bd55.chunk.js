"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[3481,3621],{3595:function(e,n,i){i.d(n,{Z:function(){return c}});var t=i(1413),o=i(4925),r=i(7822),s=i(5825),d=i(7313),a=i(6417),l=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(e){var n=e.segments,i=void 0===n?48:n,c=e.cross,u=void 0===c||c,x=e.color,h=void 0===x?"#000":x,p=(e.extendCone,e.extendArray),g=void 0===p?[]:p,f=e.lineWidth,v=void 0===f?1.5:f,j=e.innerRing,m=void 0===j||j,y=e.extendLine,b=void 0===y||y,Z=e.split,w=(0,o.Z)(e,l),B=(0,d.useCallback)((function(e){var n=e.points,i=e.cross,t=e.color,o=e.lineWidth,s=e.position,d=void 0===s?0:s;if(n.length%2===0||!i)return null;for(var l=n.slice(1),c=[],u=l.length/2,x=0;x<u;x++)if(!Z||x%Z===0){var h=l[x],p=l[x+u];c.push((0,a.jsx)(r.x,{color:t,lineWidth:o,position:[0,0,d],points:[[h.x,h.y,0],[p.x,p.y,0]]},x))}return c}),[Z]),A=(0,d.useCallback)((function(e,n){return(new s.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),W=(0,d.useCallback)((function(){if(!(g instanceof Array))return null;var e=[],n=0;return g.forEach((function(t,o){var s,d=A(t.radius,i),l=g[o+1],c=l?A(l.radius,i):void 0;n+=t.extend,console.log(n);var x,p,f,j,y=[];(null!==(s=t.innerRing)&&void 0!==s?s:m)&&y.push((0,a.jsx)(r.x,{rotation:[0,0,0],position:[0,0,t.extend],points:d,color:t.color||h,lineWidth:null!==(x=t.lineWidth)&&void 0!==x?x:v},"ring".concat(o)));(t.cross||u)&&y.push(B({points:d,position:t.extend,cross:null!==(p=t.cross)&&void 0!==p?p:u,lineWidth:null!==(f=t.lineWidth)&&void 0!==f?f:v,color:null!==(j=t.color)&&void 0!==j?j:h}));if(c)for(var w=d.slice(1),W=c.slice(1),k=0;k<w.length;k++){var C,E,M=w[k],R=W[k];if(!Z||k%Z===0)if(b)y.push((0,a.jsx)(r.x,{color:h,lineWidth:null!==(C=t.lineWidth)&&void 0!==C?C:v,points:[[M.x,M.y,t.extend],[R.x,R.y,null!==(E=null===l||void 0===l?void 0:l.extend)&&void 0!==E?E:t.extend]]},"cross".concat(k,"_").concat(o)))}e.push((0,a.jsx)("group",{children:y}))})),e}),[h,u,g,b,A,m,v,B,i,Z]);return(0,a.jsx)("group",(0,t.Z)((0,t.Z)({},w),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:W()})}))}},4696:function(e,n,i){i.r(n);var t=i(1413),o=i(4925),r=i(7809),s=i(5298),d=i(6790),a=(i(7313),i(3595)),l=i(6399),c=i(1569),u=(i(3621),i(6417)),x=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible;var n=e.opacity,i=e.showEdige,h=e.shadow,p=(0,o.Z)(e,x),g=(0,r.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/bodyfemalemin.glb")).nodes;return console.log(g),(0,u.jsxs)("group",(0,t.Z)((0,t.Z)({},p),{},{children:[(0,u.jsx)(s.M,{position:[0,2.7,0],children:(0,u.jsx)("group",{position:[0,8,0],rotation:[(0,c.B)(0),(0,c.B)(-90),0],scale:.03,children:(0,u.jsx)("mesh",{receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:g["femalesculpt_02-2"].geometry,dispose:null,children:(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5})})})}),!!i&&(0,u.jsxs)("group",{rotation:[0,(0,c.B)(-5),0],position:[.6,-.75,0],children:[(0,u.jsx)(l.Z,{width:0,height:4,cross:[],extend:1.775}),(0,u.jsx)("mesh",{position:[-0,1.775,2],children:(0,u.jsx)(d.V,{children:(0,u.jsx)("div",{className:"femalebodytag",children:"1/4"})})}),(0,u.jsx)(l.Z,{width:0,height:4,cross:[],extend:3.55}),(0,u.jsx)("mesh",{position:[-0,3.55,2],children:(0,u.jsx)(d.V,{children:(0,u.jsx)("div",{className:"femalebodytag",children:"2/4"})})}),(0,u.jsx)(l.Z,{width:0,height:4,cross:[],extend:1.775*3}),(0,u.jsx)("mesh",{position:[-0,1.775*3,2],children:(0,u.jsx)(d.V,{children:(0,u.jsx)("div",{className:"femalebodytag",children:"3/4"})})}),(0,u.jsx)(l.Z,{width:0,height:4,cross:[],extend:7.1}),(0,u.jsx)("mesh",{position:[-0,7.1,2],children:(0,u.jsx)(d.V,{children:(0,u.jsx)("div",{className:"femalebodytag",children:"4/4"})})}),(0,u.jsx)(l.Z,{position:[-.1,3.5,0],rotation:[0,0,(0,c.B)(30)],width:.6,height:.9,extend:.75,cross:[],color:"#000",diagonalExtend:!1,axis:!1}),(0,u.jsx)(l.Z,{position:[-.6,4.6,0],rotation:[0,0,(0,c.B)(-15)],width:.7,height:1.1,extend:1.15,cross:[],color:"#000",diagonalExtend:!1,axis:!1}),(0,u.jsx)(l.Z,{position:[-.4,6.15,0],rotation:[0,0,(0,c.B)(-5)],width:.7,height:.6,extend:.9,cross:[],color:"#000",diagonalExtend:!1,axis:!1}),(0,u.jsxs)("group",{children:[(0,u.jsx)(a.Z,{position:[-.2,0,-.2],split:12,rotation:[(0,c.B)(-3),0,0],cross:!1,extendArray:[{radius:.12,extend:.3},{radius:.2,extend:1.8}]}),(0,u.jsx)(a.Z,{position:[-.15,0,-.15],split:12,rotation:[(0,c.B)(-4),0,(0,c.B)(3)],cross:!1,extendArray:[{radius:.2,extend:2.1},{radius:.3,extend:3.2}]})]}),(0,u.jsxs)("group",{children:[(0,u.jsx)(a.Z,{position:[-.12,0,.22],split:12,rotation:[(0,c.B)(3),0,0],cross:!1,extendArray:[{radius:.12,extend:.3},{radius:.2,extend:1.8}]}),(0,u.jsx)(a.Z,{position:[-.15,0,.17],split:12,rotation:[(0,c.B)(4),0,(0,c.B)(3)],cross:!1,extendArray:[{radius:.2,extend:2.1},{radius:.3,extend:3.2}]})]}),(0,u.jsxs)("group",{position:[0,3.7,1],children:[(0,u.jsx)(a.Z,{position:[-.34,0,.25],split:12,rotation:[(0,c.B)(-22),0,(0,c.B)(-5)],cross:!1,extendArray:[{radius:.15,extend:.9},{radius:.1,extend:0}]}),(0,u.jsx)(a.Z,{position:[-.34,0,.1],split:12,rotation:[(0,c.B)(-15),0,(0,c.B)(-5)],cross:!1,extendArray:[{radius:.15,extend:1.1},{radius:.2,extend:1.9}]})]}),(0,u.jsxs)("group",{position:[-.7,3.7,-1],children:[(0,u.jsx)(a.Z,{position:[.2,0,-.2],split:12,rotation:[(0,c.B)(22),0,(0,c.B)(-5)],cross:!1,extendArray:[{radius:.15,extend:.9},{radius:.1,extend:0}]}),(0,u.jsx)(a.Z,{position:[.25,0,-.02],split:12,rotation:[(0,c.B)(15),0,(0,c.B)(-5)],cross:!1,extendArray:[{radius:.15,extend:1.1},{radius:.2,extend:1.9}]})]})]})]}))}},1569:function(e,n,i){i.d(n,{B:function(){return t}});var t=function(e){return Math.PI/180*e}},5298:function(e,n,i){i.d(n,{M:function(){return a}});var t=i(4925),o=i(7462),r=i(5825),s=i(7313),d=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],a=s.forwardRef((function(e,n){var i=e.children,a=e.disableX,l=e.disableY,c=e.disableZ,u=e.left,x=e.right,h=e.top,p=e.bottom,g=e.front,f=e.back,v=e.onCentered,j=e.precise,m=void 0===j||j,y=(0,t.Z)(e,d),b=s.useRef(null),Z=s.useRef(null),w=s.useRef(null);return s.useLayoutEffect((function(){Z.current.matrixWorld.identity();var e=(new r.Box3).setFromObject(w.current,m),n=new r.Vector3,i=new r.Sphere,t=e.max.x-e.min.x,o=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(n),e.getBoundingSphere(i);var d=h?o/2:p?-o/2:0,j=u?-t/2:x?t/2:0,y=g?s/2:f?-s/2:0;Z.current.position.set(a?0:-n.x+j,l?0:-n.y+d,c?0:-n.z+y),"undefined"!==typeof v&&v({parent:b.current.parent,container:b.current,width:t,height:o,depth:s,boundingBox:e,boundingSphere:i,center:n,verticalAlignment:d,horizontalAlignment:j,depthAlignment:y})}),[i]),s.useImperativeHandle(n,(function(){return b.current}),[]),s.createElement("group",(0,o.Z)({ref:b},y),s.createElement("group",{ref:Z},s.createElement("group",{ref:w},i)))}))},3621:function(e,n,i){i.r(n),n.default={}}}]);