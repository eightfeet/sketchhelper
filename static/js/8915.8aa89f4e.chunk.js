"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8915,7063],{3595:function(e,n,i){i.d(n,{Z:function(){return c}});var t=i(1413),o=i(5987),r=i(7822),s=i(5825),d=i(7313),a=i(6417),l=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(e){var n=e.segments,i=void 0===n?48:n,c=e.cross,x=void 0===c||c,u=e.color,h=void 0===u?"#000":u,p=(e.extendCone,e.extendArray),g=void 0===p?[]:p,f=e.lineWidth,v=void 0===f?1.5:f,j=e.innerRing,m=void 0===j||j,y=e.extendLine,b=void 0===y||y,Z=e.split,w=(0,o.Z)(e,l),B=(0,d.useCallback)((function(e){var n=e.points,i=e.cross,t=e.color,o=e.lineWidth,s=e.position,d=void 0===s?0:s;if(n.length%2===0||!i)return null;for(var l=n.slice(1),c=[],x=l.length/2,u=0;u<x;u++)if(!Z||u%Z===0){var h=l[u],p=l[u+x];c.push((0,a.jsx)(r.x,{color:t,lineWidth:o,position:[0,0,d],points:[[h.x,h.y,0],[p.x,p.y,0]]},u))}return c}),[Z]),A=(0,d.useCallback)((function(e,n){return(new s.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),W=(0,d.useCallback)((function(){if(!(g instanceof Array))return null;var e=[];return g.forEach((function(n,t){var o,s=A(n.radius,i),d=g[t+1],l=d?A(d.radius,i):void 0;n.extend;var c,u,p,f,j=[];(null!==(o=n.innerRing)&&void 0!==o?o:m)&&j.push((0,a.jsx)(r.x,{rotation:[0,0,0],position:[0,0,n.extend],points:s,color:n.color||h,lineWidth:null!==(c=n.lineWidth)&&void 0!==c?c:v},"ring".concat(t)));(n.cross||x)&&j.push(B({points:s,position:n.extend,cross:null!==(u=n.cross)&&void 0!==u?u:x,lineWidth:null!==(p=n.lineWidth)&&void 0!==p?p:v,color:null!==(f=n.color)&&void 0!==f?f:h}));if(l)for(var y=s.slice(1),w=l.slice(1),W=0;W<y.length;W++){var C,E,k=y[W],R=w[W];if(!Z||W%Z===0)if(b)j.push((0,a.jsx)(r.x,{color:h,lineWidth:null!==(C=n.lineWidth)&&void 0!==C?C:v,points:[[k.x,k.y,n.extend],[R.x,R.y,null!==(E=null===d||void 0===d?void 0:d.extend)&&void 0!==E?E:n.extend]]},"cross".concat(W,"_").concat(t)))}e.push((0,a.jsx)("group",{children:j}))})),e}),[h,x,g,b,A,m,v,B,i,Z]);return(0,a.jsx)("group",(0,t.Z)((0,t.Z)({},w),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:W()})}))}},8915:function(e,n,i){i.r(n);var t=i(1413),o=i(5987),r=i(7809),s=i(5298),d=i(6790),a=(i(7313),i(3595)),l=i(6399),c=i(1569),x=(i(7063),i(6417)),u=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible;var n=e.opacity,i=e.showEdige,h=e.shadow,p=(0,o.Z)(e,u),g=(0,r.L)("".concat("https://www.eightfeet.cn/model","/glb/body/bodyfemalemin.glb")).nodes;return console.log(g),(0,x.jsxs)("group",(0,t.Z)((0,t.Z)({},p),{},{children:[(0,x.jsx)(s.M,{position:[0,2.7,0],rotation:[0,(0,c.B0)(90),0],children:(0,x.jsx)("group",{position:[0,8,0],rotation:[(0,c.B0)(0),(0,c.B0)(-90),0],scale:.03,children:(0,x.jsx)("mesh",{receiveShadow:h,rotation:[0,0,0],position:[0,0,0],castShadow:h,geometry:g["femalesculpt_02-2"].geometry,dispose:null,children:(0,x.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5})})})}),!!i&&(0,x.jsxs)("group",{rotation:[0,(0,c.B0)(90),0],position:[-0,-.75,-.6],children:[(0,x.jsx)(l.Z,{width:0,height:4,cross:[],extend:1.775}),(0,x.jsx)("mesh",{position:[-0,1.775,2],children:(0,x.jsx)(d.V,{children:(0,x.jsx)("div",{className:"femalebodytag",children:"1/4"})})}),(0,x.jsx)(l.Z,{width:0,height:4,cross:[],extend:3.55}),(0,x.jsx)("mesh",{position:[-0,3.55,2],children:(0,x.jsx)(d.V,{children:(0,x.jsx)("div",{className:"femalebodytag",children:"2/4"})})}),(0,x.jsx)(l.Z,{width:0,height:4,cross:[],extend:1.775*3}),(0,x.jsx)("mesh",{position:[-0,1.775*3,2],children:(0,x.jsx)(d.V,{children:(0,x.jsx)("div",{className:"femalebodytag",children:"3/4"})})}),(0,x.jsx)(l.Z,{width:0,height:4,cross:[],extend:7.1}),(0,x.jsx)("mesh",{position:[-0,7.1,2],children:(0,x.jsx)(d.V,{children:(0,x.jsx)("div",{className:"femalebodytag",children:"4/4"})})}),(0,x.jsx)(l.Z,{position:[-.1,3.5,0],rotation:[0,0,(0,c.B0)(30)],width:.6,height:.9,extend:.75,cross:[],color:"#000",diagonalExtend:!1,axis:!1}),(0,x.jsx)(l.Z,{position:[-.6,4.6,0],rotation:[0,0,(0,c.B0)(-15)],width:.7,height:1.1,extend:1.15,cross:[],color:"#000",diagonalExtend:!1,axis:!1}),(0,x.jsx)(l.Z,{position:[-.4,6.15,0],rotation:[0,0,(0,c.B0)(-5)],width:.7,height:.6,extend:.9,cross:[],color:"#000",diagonalExtend:!1,axis:!1}),(0,x.jsxs)("group",{children:[(0,x.jsx)(a.Z,{position:[-.2,0,-.2],split:12,rotation:[(0,c.B0)(-3),0,0],cross:!1,extendArray:[{radius:.12,extend:.3},{radius:.2,extend:1.8}]}),(0,x.jsx)(a.Z,{position:[-.15,0,-.15],split:12,rotation:[(0,c.B0)(-4),0,(0,c.B0)(3)],cross:!1,extendArray:[{radius:.2,extend:2.1},{radius:.3,extend:3.2}]})]}),(0,x.jsxs)("group",{children:[(0,x.jsx)(a.Z,{position:[-.12,0,.22],split:12,rotation:[(0,c.B0)(3),0,0],cross:!1,extendArray:[{radius:.12,extend:.3},{radius:.2,extend:1.8}]}),(0,x.jsx)(a.Z,{position:[-.15,0,.17],split:12,rotation:[(0,c.B0)(4),0,(0,c.B0)(3)],cross:!1,extendArray:[{radius:.2,extend:2.1},{radius:.3,extend:3.2}]})]}),(0,x.jsxs)("group",{position:[0,3.7,1],children:[(0,x.jsx)(a.Z,{position:[-.34,0,.25],split:12,rotation:[(0,c.B0)(-22),0,(0,c.B0)(-5)],cross:!1,extendArray:[{radius:.15,extend:.9},{radius:.1,extend:0}]}),(0,x.jsx)(a.Z,{position:[-.34,0,.1],split:12,rotation:[(0,c.B0)(-15),0,(0,c.B0)(-5)],cross:!1,extendArray:[{radius:.15,extend:1.1},{radius:.2,extend:1.9}]})]}),(0,x.jsxs)("group",{position:[-.7,3.7,-1],children:[(0,x.jsx)(a.Z,{position:[.2,0,-.2],split:12,rotation:[(0,c.B0)(22),0,(0,c.B0)(-5)],cross:!1,extendArray:[{radius:.15,extend:.9},{radius:.1,extend:0}]}),(0,x.jsx)(a.Z,{position:[.25,0,-.02],split:12,rotation:[(0,c.B0)(15),0,(0,c.B0)(-5)],cross:!1,extendArray:[{radius:.15,extend:1.1},{radius:.2,extend:1.9}]})]})]})]}))}},5298:function(e,n,i){i.d(n,{M:function(){return a}});var t=i(5987),o=i(7462),r=i(5825),s=i(7313),d=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],a=s.forwardRef((function(e,n){var i=e.children,a=e.disableX,l=e.disableY,c=e.disableZ,x=e.left,u=e.right,h=e.top,p=e.bottom,g=e.front,f=e.back,v=e.onCentered,j=e.precise,m=void 0===j||j,y=(0,t.Z)(e,d),b=s.useRef(null),Z=s.useRef(null),w=s.useRef(null);return s.useLayoutEffect((function(){Z.current.matrixWorld.identity();var e=(new r.Box3).setFromObject(w.current,m),n=new r.Vector3,i=new r.Sphere,t=e.max.x-e.min.x,o=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(n),e.getBoundingSphere(i);var d=h?o/2:p?-o/2:0,j=x?-t/2:u?t/2:0,y=g?s/2:f?-s/2:0;Z.current.position.set(a?0:-n.x+j,l?0:-n.y+d,c?0:-n.z+y),"undefined"!==typeof v&&v({parent:b.current.parent,container:b.current,width:t,height:o,depth:s,boundingBox:e,boundingSphere:i,center:n,verticalAlignment:d,horizontalAlignment:j,depthAlignment:y})}),[i]),s.useImperativeHandle(n,(function(){return b.current}),[]),s.createElement("group",(0,o.Z)({ref:b},y),s.createElement("group",{ref:Z},s.createElement("group",{ref:w},i)))}))},7063:function(e,n,i){i.r(n),n.default={}}}]);