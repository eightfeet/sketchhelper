"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[6871,469],{3595:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(1413),r=t(5987),o=t(7822),s=t(5825),d=t(7313),l=t(6417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(e){var n=e.segments,t=void 0===n?48:n,c=e.cross,u=void 0===c||c,p=e.color,x=void 0===p?"#000":p,h=(e.extendCone,e.extendArray),f=void 0===h?[]:h,v=e.lineWidth,g=void 0===v?1.5:v,m=e.innerRing,b=void 0===m||m,j=e.extendLine,y=void 0===j||j,w=e.split,W=(0,r.Z)(e,a),C=(0,d.useCallback)((function(e){var n=e.points,t=e.cross,i=e.color,r=e.lineWidth,s=e.position,d=void 0===s?0:s;if(n.length%2===0||!t)return null;for(var a=n.slice(1),c=[],u=a.length/2,p=0;p<u;p++)if(!w||p%w===0){var x=a[p],h=a[p+u];c.push((0,l.jsx)(o.x,{color:i,lineWidth:r,position:[0,0,d],points:[[x.x,x.y,0],[h.x,h.y,0]]},p))}return c}),[w]),Z=(0,d.useCallback)((function(e,n){return(new s.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),k=(0,d.useCallback)((function(){if(!(f instanceof Array))return null;var e=[];return f.forEach((function(n,i){var r,s=Z(n.radius,t),d=f[i+1],a=d?Z(d.radius,t):void 0;n.extend;var c,p,h,v,m=[];(null!==(r=n.innerRing)&&void 0!==r?r:b)&&m.push((0,l.jsx)(o.x,{rotation:[0,0,0],position:[0,0,n.extend],points:s,color:n.color||x,lineWidth:null!==(c=n.lineWidth)&&void 0!==c?c:g},"ring".concat(i)));(n.cross||u)&&m.push(C({points:s,position:n.extend,cross:null!==(p=n.cross)&&void 0!==p?p:u,lineWidth:null!==(h=n.lineWidth)&&void 0!==h?h:g,color:null!==(v=n.color)&&void 0!==v?v:x}));if(a)for(var j=s.slice(1),W=a.slice(1),k=0;k<j.length;k++){var A,B,L=j[k],R=W[k];if(!w||k%w===0)if(y)m.push((0,l.jsx)(o.x,{color:x,lineWidth:null!==(A=n.lineWidth)&&void 0!==A?A:g,points:[[L.x,L.y,n.extend],[R.x,R.y,null!==(B=null===d||void 0===d?void 0:d.extend)&&void 0!==B?B:n.extend]]},"cross".concat(k,"_").concat(i)))}e.push((0,l.jsx)("group",{children:m}))})),e}),[x,u,f,y,Z,b,g,C,t,w]);return(0,l.jsx)("group",(0,i.Z)((0,i.Z)({},W),{},{children:(0,l.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:k()})}))}},469:function(e,n,t){t.r(n);var i=t(7809),r=t(5298),o=(t(7313),t(5825)),s=t(1569),d=t(3595),l=t(6417);n.default=function(e){var n=e.position,t=e.opacity,a=e.shadow,c=e.showEdige,u=void 0!==c&&c,p=(0,i.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/apple.glb")).nodes;return(0,l.jsxs)("group",{children:[(0,l.jsx)(r.M,{top:!0,scale:20,position:[0,-1,0],children:(0,l.jsx)("mesh",{receiveShadow:a,rotation:[0,0,0],position:n,castShadow:a,geometry:p.appleobj.geometry,dispose:null,children:(0,l.jsx)("meshStandardMaterial",{transparent:!0,opacity:t,roughness:.7,metalness:.25,emissive:new o.Color(0),envMapIntensity:.5})})}),!!u&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("group",{children:(0,l.jsx)(d.Z,{position:[-.015,.5,.205],rotation:[.3,0,-.1],split:10,extendLine:!0,extendArray:[{extend:0,radius:.04,cross:!1},{extend:.1,radius:.03,cross:!1},{extend:.2,radius:.026,cross:!1},{extend:.3,radius:.026,cross:!1}]})}),(0,l.jsx)("group",{position:[.044,.88,.32],rotation:[(0,s.B0)(8),0,(0,s.B0)(-22)],children:(0,l.jsx)("group",{position:[0,-.4,0],children:(0,l.jsx)(d.Z,{position:[0,0,0],rotation:[0,0,0],split:10,extendLine:!0,extendArray:[{extend:.36,radius:.032,cross:!1},{extend:.5,radius:.04,cross:!1}]})})}),(0,l.jsx)("group",{position:[0,.56,.22],rotation:[(0,s.B0)(17),0,(0,s.B0)(-2)],children:(0,l.jsx)("group",{position:[0,-.4,0],children:(0,l.jsx)(d.Z,{position:[0,0,0],rotation:[0,0,0],split:6,extendLine:!0,lineWidth:3,extendArray:[{extend:.36,radius:.032,cross:!1},{extend:.5,radius:.2,cross:!1},{extend:.6,radius:.4,cross:!1},{extend:.52,radius:.67,cross:!1},{extend:.3,radius:.9,cross:!1},{extend:-.05,radius:1,cross:!1}]})})})]})]})}},6871:function(e,n,t){t.r(n);var i=t(469);n.default=i.default},5298:function(e,n,t){t.d(n,{M:function(){return l}});var i=t(5987),r=t(7462),o=t(5825),s=t(7313),d=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=s.forwardRef((function(e,n){var t=e.children,l=e.disableX,a=e.disableY,c=e.disableZ,u=e.left,p=e.right,x=e.top,h=e.bottom,f=e.front,v=e.back,g=e.onCentered,m=e.precise,b=void 0===m||m,j=(0,i.Z)(e,d),y=s.useRef(null),w=s.useRef(null),W=s.useRef(null);return s.useLayoutEffect((function(){w.current.matrixWorld.identity();var e=(new o.Box3).setFromObject(W.current,b),n=new o.Vector3,t=new o.Sphere,i=e.max.x-e.min.x,r=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(n),e.getBoundingSphere(t);var d=x?r/2:h?-r/2:0,m=u?-i/2:p?i/2:0,j=f?s/2:v?-s/2:0;w.current.position.set(l?0:-n.x+m,a?0:-n.y+d,c?0:-n.z+j),"undefined"!==typeof g&&g({parent:y.current.parent,container:y.current,width:i,height:r,depth:s,boundingBox:e,boundingSphere:t,center:n,verticalAlignment:d,horizontalAlignment:m,depthAlignment:j})}),[t]),s.useImperativeHandle(n,(function(){return y.current}),[]),s.createElement("group",(0,r.Z)({ref:y},j),s.createElement("group",{ref:w},s.createElement("group",{ref:W},t)))}))}}]);