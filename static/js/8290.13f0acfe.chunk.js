"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[8290],{3595:function(e,n,i){i.d(n,{Z:function(){return c}});var t=i(1413),r=i(5987),o=i(7822),s=i(5825),d=i(7313),l=i(6417),a=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],c=function(e){var n=e.segments,i=void 0===n?48:n,c=e.cross,u=void 0===c||c,h=e.color,p=void 0===h?"#000":h,x=(e.extendCone,e.extendArray),f=void 0===x?[]:x,g=e.lineWidth,v=void 0===g?1.5:g,m=e.innerRing,b=void 0===m||m,W=e.extendLine,y=void 0===W||W,j=e.split,w=(0,r.Z)(e,a),Z=(0,d.useCallback)((function(e){var n=e.points,i=e.cross,t=e.color,r=e.lineWidth,s=e.position,d=void 0===s?0:s;if(n.length%2===0||!i)return null;for(var a=n.slice(1),c=[],u=a.length/2,h=0;h<u;h++)if(!j||h%j===0){var p=a[h],x=a[h+u];c.push((0,l.jsx)(o.x,{color:t,lineWidth:r,position:[0,0,d],points:[[p.x,p.y,0],[x.x,x.y,0]]},h))}return c}),[j]),C=(0,d.useCallback)((function(e,n){return(new s.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),k=(0,d.useCallback)((function(){if(!(f instanceof Array))return null;var e=[];return f.forEach((function(n,t){var r,s=C(n.radius,i),d=f[t+1],a=d?C(d.radius,i):void 0;n.extend;var c,h,x,g,m=[];(null!==(r=n.innerRing)&&void 0!==r?r:b)&&m.push((0,l.jsx)(o.x,{rotation:[0,0,0],position:[0,0,n.extend],points:s,color:n.color||p,lineWidth:null!==(c=n.lineWidth)&&void 0!==c?c:v},"ring".concat(t)));(n.cross||u)&&m.push(Z({points:s,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:u,lineWidth:null!==(x=n.lineWidth)&&void 0!==x?x:v,color:null!==(g=n.color)&&void 0!==g?g:p}));if(a)for(var W=s.slice(1),w=a.slice(1),k=0;k<W.length;k++){var E,A,M=W[k],R=w[k];if(!j||k%j===0)if(y)m.push((0,l.jsx)(o.x,{color:p,lineWidth:null!==(E=n.lineWidth)&&void 0!==E?E:v,points:[[M.x,M.y,n.extend],[R.x,R.y,null!==(A=null===d||void 0===d?void 0:d.extend)&&void 0!==A?A:n.extend]]},"cross".concat(k,"_").concat(t)))}e.push((0,l.jsx)("group",{children:m}))})),e}),[p,u,f,y,C,b,v,Z,i,j]);return(0,l.jsx)("group",(0,t.Z)((0,t.Z)({},w),{},{children:(0,l.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:k()})}))}},8290:function(e,n,i){i.r(n);var t=i(1413),r=i(5987),o=i(7809),s=i(5298),d=(i(7313),i(3595)),l=i(6399),a=i(6659),c=i(1569),u=i(6417),h=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible;var n=e.opacity,i=e.showEdige,p=e.shadow,x=(0,r.Z)(e,h),f=(0,o.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/jarB.glb")).nodes;return console.log(f),(0,u.jsxs)("group",(0,t.Z)((0,t.Z)({},x),{},{children:[(0,u.jsx)(s.M,{position:[0,1.15,0],children:(0,u.jsx)("group",{position:[0,0,0],rotation:[Math.PI/180*-90,0,0],scale:10,children:(0,u.jsx)("mesh",{scale:2,receiveShadow:p,rotation:[0,0,0],position:[0,0,0],castShadow:p,geometry:f.Jarb.geometry,dispose:null,children:(0,u.jsx)("meshStandardMaterial",{transparent:!0,opacity:n,roughness:.7,metalness:.25,envMapIntensity:.5})})})}),!!i&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.Z,{split:6,rotation:[0,(0,c.B0)(-4.5),0],extendArray:[{extend:2.98,radius:1.6,lineWidth:2},{extend:2.85,radius:1.61,lineWidth:2.5,cross:!1},{extend:2.85,radius:1.74,lineWidth:2,cross:!1},{extend:2.75,radius:1.74,lineWidth:3.5,cross:!1},{extend:2.6,radius:1.62,lineWidth:2,cross:!1},{extend:2.3,radius:1.81,lineWidth:3.5,cross:!1},{extend:1.8,radius:2,lineWidth:1,cross:!1},{extend:.9,radius:1.96,lineWidth:2,cross:!1},{extend:.1,radius:1.76,lineWidth:2,cross:!1},{extend:-.95,radius:1.4,lineWidth:2,cross:!1}]}),(0,u.jsx)(a.Z,{color:"#000",squareColor:"#eee",radius:2,position:[0,1.4,0],rotation:[0,-.2,0]}),(0,u.jsx)(a.Z,{color:"#000",squareColor:"#eee",radius:1.38,position:[0,-.94,0],rotation:[0,-.2,0]}),(0,u.jsx)(l.Z,{lineWidth:1.5,color:"#000",diagonalExtend:!1,cross:[],width:.45,height:.15,extend:.258,position:[0,3,0]}),(0,u.jsx)(l.Z,{width:0,height:0,extend:6,position:[0,-1.5,0]})]})]}))}},5298:function(e,n,i){i.d(n,{M:function(){return l}});var t=i(5987),r=i(7462),o=i(5825),s=i(7313),d=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],l=s.forwardRef((function(e,n){var i=e.children,l=e.disableX,a=e.disableY,c=e.disableZ,u=e.left,h=e.right,p=e.top,x=e.bottom,f=e.front,g=e.back,v=e.onCentered,m=e.precise,b=void 0===m||m,W=(0,t.Z)(e,d),y=s.useRef(null),j=s.useRef(null),w=s.useRef(null);return s.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new o.Box3).setFromObject(w.current,b),n=new o.Vector3,i=new o.Sphere,t=e.max.x-e.min.x,r=e.max.y-e.min.y,s=e.max.z-e.min.z;e.getCenter(n),e.getBoundingSphere(i);var d=p?r/2:x?-r/2:0,m=u?-t/2:h?t/2:0,W=f?s/2:g?-s/2:0;j.current.position.set(l?0:-n.x+m,a?0:-n.y+d,c?0:-n.z+W),"undefined"!==typeof v&&v({parent:y.current.parent,container:y.current,width:t,height:r,depth:s,boundingBox:e,boundingSphere:i,center:n,verticalAlignment:d,horizontalAlignment:m,depthAlignment:W})}),[i]),s.useImperativeHandle(n,(function(){return y.current}),[]),s.createElement("group",(0,r.Z)({ref:y},W),s.createElement("group",{ref:j},s.createElement("group",{ref:w},i)))}))}}]);