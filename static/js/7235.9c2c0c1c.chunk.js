"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[7235],{3595:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(1413),o=r(5987),i=r(7822),l=r(5825),a=r(7313),s=r(6417),c=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],u=function(e){var n=e.segments,r=void 0===n?48:n,u=e.cross,d=void 0===u||u,h=e.color,f=void 0===h?"#000":h,p=(e.extendCone,e.extendArray),g=void 0===p?[]:p,v=e.lineWidth,x=void 0===v?1.5:v,m=e.innerRing,y=void 0===m||m,b=e.extendLine,w=void 0===b||b,j=e.split,Z=(0,o.Z)(e,c),E=(0,a.useCallback)((function(e){var n=e.points,r=e.cross,t=e.color,o=e.lineWidth,l=e.position,a=void 0===l?0:l;if(n.length%2===0||!r)return null;for(var c=n.slice(1),u=[],d=c.length/2,h=0;h<d;h++)if(!j||h%j===0){var f=c[h],p=c[h+d];u.push((0,s.jsx)(i.x,{color:t,lineWidth:o,position:[0,0,a],points:[[f.x,f.y,0],[p.x,p.y,0]]},h))}return u}),[j]),B=(0,a.useCallback)((function(e,n){return(new l.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),W=(0,a.useCallback)((function(){if(!(g instanceof Array))return null;var e=[];return g.forEach((function(n,t){var o,l=B(n.radius,r),a=g[t+1],c=a?B(a.radius,r):void 0;n.extend;var u,h,p,v,m=[];(null!==(o=n.innerRing)&&void 0!==o?o:y)&&m.push((0,s.jsx)(i.x,{rotation:[0,0,0],position:[0,0,n.extend],points:l,color:n.color||f,lineWidth:null!==(u=n.lineWidth)&&void 0!==u?u:x},"ring".concat(t)));(n.cross||d)&&m.push(E({points:l,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:d,lineWidth:null!==(p=n.lineWidth)&&void 0!==p?p:x,color:null!==(v=n.color)&&void 0!==v?v:f}));if(c)for(var b=l.slice(1),Z=c.slice(1),W=0;W<b.length;W++){var k,C,_=b[W],R=Z[W];if(!j||W%j===0)if(w)m.push((0,s.jsx)(i.x,{color:f,lineWidth:null!==(k=n.lineWidth)&&void 0!==k?k:x,points:[[_.x,_.y,n.extend],[R.x,R.y,null!==(C=null===a||void 0===a?void 0:a.extend)&&void 0!==C?C:n.extend]]},"cross".concat(W,"_").concat(t)))}e.push((0,s.jsx)("group",{children:m}))})),e}),[f,d,g,w,B,y,x,E,r,j]);return(0,s.jsx)("group",(0,t.Z)((0,t.Z)({},Z),{},{children:(0,s.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:W()})}))}},7235:function(e,n,r){r.r(n);var t=r(1413),o=r(5987),i=r(7809),l=r(5298),a=r(2505),s=(r(7313),r(3595)),c=r(1569),u=r(6417),d=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible,e.opacity;var n=e.showEdige,r=e.shadow,h=(0,o.Z)(e,d),f=(0,i.L)("".concat("https://www.eightfeet.cn/model","/glb/body/male_facial_muscles_ecorche.glb")),p=f.nodes,g=f.materials;return console.log(p,g),(0,u.jsxs)("group",(0,t.Z)((0,t.Z)({},h),{},{children:[(0,u.jsx)(l.M,{position:[0,2.2,.4],rotation:[0,(0,c.B0)(0),0],children:(0,u.jsx)("group",{position:[0,0,0],rotation:[(0,c.B0)(-90),(0,c.B0)(0),0],scale:.18,children:p["Male_Facial-muscles_EcorcheOBJcleanermaterialmergergles"].children.map((function(e,t){return(0,u.jsx)("mesh",{scale:1,receiveShadow:r,rotation:[0,0,0],position:[0,0,0],castShadow:r,geometry:e.geometry,dispose:null,material:g.material_0,children:!!n&&(0,u.jsx)(a.w,{threshold:5})},t)}))})}),!!n&&(0,u.jsx)("group",{rotation:[0,(0,c.B0)(0),0],position:[0,2,0],children:(0,u.jsx)(s.Z,{split:6,rotation:[(0,c.B0)(37.5),0,(0,c.B0)(90)],position:[1.3,1.25,.6],extendArray:[{radius:1.2,extend:0},{radius:1.2,extend:2.6}]})})]}))}},5298:function(e,n,r){r.d(n,{M:function(){return s}});var t=r(5987),o=r(7462),i=r(5825),l=r(7313),a=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],s=l.forwardRef((function(e,n){var r=e.children,s=e.disableX,c=e.disableY,u=e.disableZ,d=e.left,h=e.right,f=e.top,p=e.bottom,g=e.front,v=e.back,x=e.onCentered,m=e.precise,y=void 0===m||m,b=(0,t.Z)(e,a),w=l.useRef(null),j=l.useRef(null),Z=l.useRef(null);return l.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(Z.current,y),n=new i.Vector3,r=new i.Sphere,t=e.max.x-e.min.x,o=e.max.y-e.min.y,l=e.max.z-e.min.z;e.getCenter(n),e.getBoundingSphere(r);var a=f?o/2:p?-o/2:0,m=d?-t/2:h?t/2:0,b=g?l/2:v?-l/2:0;j.current.position.set(s?0:-n.x+m,c?0:-n.y+a,u?0:-n.z+b),"undefined"!==typeof x&&x({parent:w.current.parent,container:w.current,width:t,height:o,depth:l,boundingBox:e,boundingSphere:r,center:n,verticalAlignment:a,horizontalAlignment:m,depthAlignment:b})}),[r]),l.useImperativeHandle(n,(function(){return w.current}),[]),l.createElement("group",(0,o.Z)({ref:w},b),l.createElement("group",{ref:j},l.createElement("group",{ref:Z},r)))}))},2505:function(e,n,r){r.d(n,{w:function(){return s}});var t=r(5987),o=r(7462),i=r(7313),l=r(5825),a=["userData","children","geometry","threshold","color"];function s(e){e.userData;var n=e.children,r=e.geometry,s=e.threshold,c=void 0===s?15:s,u=e.color,d=void 0===u?"black":u,h=(0,t.Z)(e,a),f=i.useRef(null);return i.useLayoutEffect((function(){var e=f.current.parent;if(e){var n=r||e.geometry;n===f.current.userData.currentGeom&&c===f.current.userData.currentThreshold||(f.current.userData.currentGeom=n,f.current.userData.currentThreshold=c,f.current.geometry=new l.EdgesGeometry(n,c))}})),i.createElement("lineSegments",(0,o.Z)({ref:f,raycast:function(){return null}},h),n||i.createElement("lineBasicMaterial",{color:d}))}}}]);