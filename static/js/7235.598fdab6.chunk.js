"use strict";(self.webpackChunkthree_d=self.webpackChunkthree_d||[]).push([[7235],{3595:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(1413),o=r(5987),i=r(7822),l=r(5825),s=r(7313),a=r(6417),c=["segments","cross","color","extendCone","extendArray","lineWidth","innerRing","extendLine","split"],u=function(e){var n=e.segments,r=void 0===n?48:n,u=e.cross,d=void 0===u||u,h=e.color,p=void 0===h?"#000":h,f=(e.extendCone,e.extendArray),g=void 0===f?[]:f,v=e.lineWidth,x=void 0===v?1.5:v,m=e.innerRing,y=void 0===m||m,b=e.extendLine,w=void 0===b||b,j=e.split,Z=(0,o.Z)(e,c),E=(0,s.useCallback)((function(e){var n=e.points,r=e.cross,t=e.color,o=e.lineWidth,l=e.position,s=void 0===l?0:l;if(n.length%2===0||!r)return null;for(var c=n.slice(1),u=[],d=c.length/2,h=0;h<d;h++)if(!j||h%j===0){var p=c[h],f=c[h+d];u.push((0,a.jsx)(i.x,{color:t,lineWidth:o,position:[0,0,s],points:[[p.x,p.y,0],[f.x,f.y,0]]},h))}return u}),[j]),k=(0,s.useCallback)((function(e,n){return(new l.Path).absarc(0,0,e,0,2*Math.PI,!0).getSpacedPoints(n)}),[]),B=(0,s.useCallback)((function(){if(!(g instanceof Array))return null;var e=[];return g.forEach((function(n,t){var o,l=k(n.radius,r),s=g[t+1],c=s?k(s.radius,r):void 0;n.extend;var u,h,f,v,m=[];(null!==(o=n.innerRing)&&void 0!==o?o:y)&&m.push((0,a.jsx)(i.x,{rotation:[0,0,0],position:[0,0,n.extend],points:l,color:n.color||p,lineWidth:null!==(u=n.lineWidth)&&void 0!==u?u:x},"ring".concat(t)));(n.cross||d)&&m.push(E({points:l,position:n.extend,cross:null!==(h=n.cross)&&void 0!==h?h:d,lineWidth:null!==(f=n.lineWidth)&&void 0!==f?f:x,color:null!==(v=n.color)&&void 0!==v?v:p}));if(c)for(var b=l.slice(1),Z=c.slice(1),B=0;B<b.length;B++){var W,C,_=b[B],R=Z[B];if(!j||B%j===0)if(w)m.push((0,a.jsx)(i.x,{color:p,lineWidth:null!==(W=n.lineWidth)&&void 0!==W?W:x,points:[[_.x,_.y,n.extend],[R.x,R.y,null!==(C=null===s||void 0===s?void 0:s.extend)&&void 0!==C?C:n.extend]]},"cross".concat(B,"_").concat(t)))}e.push((0,a.jsx)("group",{children:m}))})),e}),[p,d,g,w,k,y,x,E,r,j]);return(0,a.jsx)("group",(0,t.Z)((0,t.Z)({},Z),{},{children:(0,a.jsx)("group",{rotation:[Math.PI/180*-90,0,0],position:[0,0,0],children:B()})}))}},7235:function(e,n,r){r.r(n);var t=r(1413),o=r(5987),i=r(7809),l=r(5298),s=r(2505),a=(r(7313),r(3595)),c=r(1569),u=r(6417),d=["visible","opacity","showEdige","shadow"];n.default=function(e){e.visible,e.opacity;var n=e.showEdige,r=e.shadow,h=(0,o.Z)(e,d),p=(0,i.L)("".concat("https://www.eightfeet.cn/sketchhelper","/glb/body/male_facial_muscles_ecorche.glb")),f=p.nodes,g=p.materials;return console.log(f,g),(0,u.jsxs)("group",(0,t.Z)((0,t.Z)({},h),{},{children:[(0,u.jsx)(l.M,{position:[0,2.2,.4],rotation:[0,(0,c.B0)(0),0],children:(0,u.jsx)("group",{position:[0,0,0],rotation:[(0,c.B0)(-90),(0,c.B0)(0),0],scale:.18,children:f["Male_Facial-muscles_EcorcheOBJcleanermaterialmergergles"].children.map((function(e,t){return(0,u.jsx)("mesh",{scale:1,receiveShadow:r,rotation:[0,0,0],position:[0,0,0],castShadow:r,geometry:e.geometry,dispose:null,material:g.material_0,children:!!n&&(0,u.jsx)(s.w,{threshold:5})},t)}))})}),!!n&&(0,u.jsx)("group",{rotation:[0,(0,c.B0)(0),0],position:[0,2,0],children:(0,u.jsx)(a.Z,{split:6,rotation:[(0,c.B0)(37.5),0,(0,c.B0)(90)],position:[1.3,1.25,.6],extendArray:[{radius:1.2,extend:0},{radius:1.2,extend:2.6}]})})]}))}},5298:function(e,n,r){r.d(n,{M:function(){return a}});var t=r(5987),o=r(7462),i=r(5825),l=r(7313),s=["children","disableX","disableY","disableZ","left","right","top","bottom","front","back","onCentered","precise"],a=l.forwardRef((function(e,n){var r=e.children,a=e.disableX,c=e.disableY,u=e.disableZ,d=e.left,h=e.right,p=e.top,f=e.bottom,g=e.front,v=e.back,x=e.onCentered,m=e.precise,y=void 0===m||m,b=(0,t.Z)(e,s),w=l.useRef(null),j=l.useRef(null),Z=l.useRef(null);return l.useLayoutEffect((function(){j.current.matrixWorld.identity();var e=(new i.Box3).setFromObject(Z.current,y),n=new i.Vector3,r=new i.Sphere,t=e.max.x-e.min.x,o=e.max.y-e.min.y,l=e.max.z-e.min.z;e.getCenter(n),e.getBoundingSphere(r);var s=p?o/2:f?-o/2:0,m=d?-t/2:h?t/2:0,b=g?l/2:v?-l/2:0;j.current.position.set(a?0:-n.x+m,c?0:-n.y+s,u?0:-n.z+b),"undefined"!==typeof x&&x({parent:w.current.parent,container:w.current,width:t,height:o,depth:l,boundingBox:e,boundingSphere:r,center:n,verticalAlignment:s,horizontalAlignment:m,depthAlignment:b})}),[r]),l.useImperativeHandle(n,(function(){return w.current}),[]),l.createElement("group",(0,o.Z)({ref:w},b),l.createElement("group",{ref:j},l.createElement("group",{ref:Z},r)))}))},2505:function(e,n,r){r.d(n,{w:function(){return a}});var t=r(5987),o=r(7462),i=r(7313),l=r(5825),s=["userData","children","geometry","threshold","color"];function a(e){e.userData;var n=e.children,r=e.geometry,a=e.threshold,c=void 0===a?15:a,u=e.color,d=void 0===u?"black":u,h=(0,t.Z)(e,s),p=i.useRef(null);return i.useLayoutEffect((function(){var e=p.current.parent;if(e){var n=r||e.geometry;n===p.current.userData.currentGeom&&c===p.current.userData.currentThreshold||(p.current.userData.currentGeom=n,p.current.userData.currentThreshold=c,p.current.geometry=new l.EdgesGeometry(n,c))}})),i.createElement("lineSegments",(0,o.Z)({ref:p,raycast:function(){return null}},h),n||i.createElement("lineBasicMaterial",{color:d}))}}}]);