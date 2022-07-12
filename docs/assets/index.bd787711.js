const tp=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}};tp();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="142",xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ep=0,Ya=1,np=2,xc=1,bc=2,dr=3,gr=0,Xe=1,Rn=2,ip=1,Dn=0,Oi=1,$a=2,Ka=3,Za=4,rp=5,Ni=100,sp=101,op=102,Ja=103,Qa=104,ap=200,lp=201,cp=202,up=203,wc=204,yc=205,hp=206,dp=207,pp=208,fp=209,mp=210,gp=0,vp=1,_p=2,So=3,xp=4,bp=5,wp=6,yp=7,Mc=0,Mp=1,Sp=2,pn=0,Ep=1,Cp=2,Tp=3,Pp=4,Ap=5,Sc=300,zi=301,Bi=302,Eo=303,Co=304,as=306,To=1e3,qe=1001,Po=1002,ye=1003,tl=1004,el=1005,ke=1006,Lp=1007,ls=1008,ei=1009,Dp=1010,Rp=1011,Ec=1012,Ip=1013,Kn=1014,Zn=1015,vr=1016,Fp=1017,Np=1018,Ui=1020,kp=1021,Vp=1022,Je=1023,Op=1024,Up=1025,Qn=1026,Gi=1027,zp=1028,Bp=1029,Gp=1030,Hp=1031,Wp=1033,Gs=33776,Hs=33777,Ws=33778,js=33779,nl=35840,il=35841,rl=35842,sl=35843,jp=36196,ol=37492,al=37496,ll=37808,cl=37809,ul=37810,hl=37811,dl=37812,pl=37813,fl=37814,ml=37815,gl=37816,vl=37817,_l=37818,xl=37819,bl=37820,wl=37821,yl=36492,ni=3e3,Qt=3001,qp=3200,Xp=3201,Cc=0,Yp=1,hn="srgb",Jn="srgb-linear",qs=7680,$p=519,Ml=35044,Sl="300 es",Ao=1035;class oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const o=this._listeners[t];if(o!==void 0){const a=o.indexOf(e);a!==-1&&o.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const o=i.slice(0);for(let a=0,h=o.length;a<h;a++)o[a].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xs=Math.PI/180,El=180/Math.PI;function yr(){const u=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pe[u&255]+pe[u>>8&255]+pe[u>>16&255]+pe[u>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[i&255]+pe[i>>8&255]+pe[i>>16&255]+pe[i>>24&255]).toLowerCase()}function Me(u,t,e){return Math.max(t,Math.min(e,u))}function Kp(u,t){return(u%t+t)%t}function Ys(u,t,e){return(1-e)*u+e*t}function Cl(u){return(u&u-1)===0&&u!==0}function Lo(u){return Math.pow(2,Math.floor(Math.log(u)/Math.LN2))}class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6],this.y=o[1]*e+o[4]*i+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),o=Math.sin(e),a=this.x-t.x,h=this.y-t.y;return this.x=a*i-h*o+t.x,this.y=a*o+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,o,a,h,c,p,d){const f=this.elements;return f[0]=t,f[1]=o,f[2]=c,f[3]=e,f[4]=a,f[5]=p,f[6]=i,f[7]=h,f[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,h=i[0],c=i[3],p=i[6],d=i[1],f=i[4],m=i[7],v=i[2],b=i[5],w=i[8],x=o[0],g=o[3],y=o[6],P=o[1],A=o[4],R=o[7],T=o[2],N=o[5],O=o[8];return a[0]=h*x+c*P+p*T,a[3]=h*g+c*A+p*N,a[6]=h*y+c*R+p*O,a[1]=d*x+f*P+m*T,a[4]=d*g+f*A+m*N,a[7]=d*y+f*R+m*O,a[2]=v*x+b*P+w*T,a[5]=v*g+b*A+w*N,a[8]=v*y+b*R+w*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],c=t[5],p=t[6],d=t[7],f=t[8];return e*h*f-e*c*d-i*a*f+i*c*p+o*a*d-o*h*p}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],c=t[5],p=t[6],d=t[7],f=t[8],m=f*h-c*d,v=c*p-f*a,b=d*a-h*p,w=e*m+i*v+o*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/w;return t[0]=m*x,t[1]=(o*d-f*i)*x,t[2]=(c*i-o*h)*x,t[3]=v*x,t[4]=(f*e-o*p)*x,t[5]=(o*a-c*e)*x,t[6]=b*x,t[7]=(i*p-d*e)*x,t[8]=(h*e-i*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,o,a,h,c){const p=Math.cos(a),d=Math.sin(a);return this.set(i*p,i*d,-i*(p*h+d*c)+h+t,-o*d,o*p,-o*(-d*h+p*c)+c+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),o=this.elements,a=o[0],h=o[3],c=o[6],p=o[1],d=o[4],f=o[7];return o[0]=e*a+i*p,o[3]=e*h+i*d,o[6]=e*c+i*f,o[1]=-i*a+e*p,o[4]=-i*h+e*d,o[7]=-i*c+e*f,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<9;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Tc(u){for(let t=u.length-1;t>=0;--t)if(u[t]>65535)return!0;return!1}function _r(u){return document.createElementNS("http://www.w3.org/1999/xhtml",u)}function ti(u){return u<.04045?u*.0773993808:Math.pow(u*.9478672986+.0521327014,2.4)}function ss(u){return u<.0031308?u*12.92:1.055*Math.pow(u,.41666)-.055}const $s={[hn]:{[Jn]:ti},[Jn]:{[hn]:ss}},Ge={legacyMode:!0,get workingColorSpace(){return Jn},set workingColorSpace(u){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(u,t,e){if(this.legacyMode||t===e||!t||!e)return u;if($s[t]&&$s[t][e]!==void 0){const i=$s[t][e];return u.r=i(u.r),u.g=i(u.g),u.b=i(u.b),u}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(u,t){return this.convert(u,this.workingColorSpace,t)},toWorkingColorSpace:function(u,t){return this.convert(u,t,this.workingColorSpace)}},Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},le={r:0,g:0,b:0},He={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Ks(u,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?u+(t-u)*6*e:e<1/2?t:e<2/3?u+(t-u)*6*(2/3-e):u}function Ur(u,t){return t.r=u.r,t.g=u.g,t.b=u.b,t}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ge.toWorkingColorSpace(this,e),this}setRGB(t,e,i,o=Jn){return this.r=t,this.g=e,this.b=i,Ge.toWorkingColorSpace(this,o),this}setHSL(t,e,i,o=Jn){if(t=Kp(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,h=2*i-a;this.r=Ks(h,a,t+1/3),this.g=Ks(h,a,t),this.b=Ks(h,a,t-1/3)}return Ge.toWorkingColorSpace(this,o),this}setStyle(t,e=hn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let a;const h=o[1],c=o[2];switch(h){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Ge.toWorkingColorSpace(this,e),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Ge.toWorkingColorSpace(this,e),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c)){const p=parseFloat(a[1])/360,d=parseInt(a[2],10)/100,f=parseInt(a[3],10)/100;return i(a[4]),this.setHSL(p,d,f,e)}break}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=o[1],h=a.length;if(h===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Ge.toWorkingColorSpace(this,e),this;if(h===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Ge.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=hn){const i=Pc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return Ge.fromWorkingColorSpace(Ur(this,le),t),Me(le.r*255,0,255)<<16^Me(le.g*255,0,255)<<8^Me(le.b*255,0,255)<<0}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jn){Ge.fromWorkingColorSpace(Ur(this,le),e);const i=le.r,o=le.g,a=le.b,h=Math.max(i,o,a),c=Math.min(i,o,a);let p,d;const f=(c+h)/2;if(c===h)p=0,d=0;else{const m=h-c;switch(d=f<=.5?m/(h+c):m/(2-h-c),h){case i:p=(o-a)/m+(o<a?6:0);break;case o:p=(a-i)/m+2;break;case a:p=(i-o)/m+4;break}p/=6}return t.h=p,t.s=d,t.l=f,t}getRGB(t,e=Jn){return Ge.fromWorkingColorSpace(Ur(this,le),e),t.r=le.r,t.g=le.g,t.b=le.b,t}getStyle(t=hn){return Ge.fromWorkingColorSpace(Ur(this,le),t),t!==hn?`color(${t} ${le.r} ${le.g} ${le.b})`:`rgb(${le.r*255|0},${le.g*255|0},${le.b*255|0})`}offsetHSL(t,e,i){return this.getHSL(He),He.h+=t,He.s+=e,He.l+=i,this.setHSL(He.h,He.s,He.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(He),t.getHSL(Or);const i=Ys(He.h,Or.h,e),o=Ys(He.s,Or.s,e),a=Ys(He.l,Or.l,e);return this.setHSL(i,o,a),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Wt.NAMES=Pc;let wi;class Ac{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{wi===void 0&&(wi=_r("canvas")),wi.width=t.width,wi.height=t.height;const i=wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=_r("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const o=i.getImageData(0,0,t.width,t.height),a=o.data;for(let h=0;h<a.length;h++)a[h]=ti(a[h]/255)*255;return i.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ti(e[i]/255)*255):e[i]=ti(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Lc{constructor(t=null){this.isSource=!0,this.uuid=yr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let h=0,c=o.length;h<c;h++)o[h].isDataTexture?a.push(Zs(o[h].image)):a.push(Zs(o[h]))}else a=Zs(o);i.url=a}return e||(t.images[this.uuid]=i),i}}function Zs(u){return typeof HTMLImageElement!="undefined"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&u instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&u instanceof ImageBitmap?Ac.getDataURL(u):u.data?{data:Array.from(u.data),width:u.width,height:u.height,type:u.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zp=0;class Ue extends oi{constructor(t=Ue.DEFAULT_IMAGE,e=Ue.DEFAULT_MAPPING,i=qe,o=qe,a=ke,h=ls,c=Je,p=ei,d=1,f=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=yr(),this.name="",this.source=new Lc(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=h,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=p,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case To:t.x=t.x-Math.floor(t.x);break;case qe:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case To:t.y=t.y-Math.floor(t.y);break;case qe:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=Sc;class ce{constructor(t=0,e=0,i=0,o=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,o){return this.x=t,this.y=e,this.z=i,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*o+h[12]*a,this.y=h[1]*e+h[5]*i+h[9]*o+h[13]*a,this.z=h[2]*e+h[6]*i+h[10]*o+h[14]*a,this.w=h[3]*e+h[7]*i+h[11]*o+h[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,o,a;const p=t.elements,d=p[0],f=p[4],m=p[8],v=p[1],b=p[5],w=p[9],x=p[2],g=p[6],y=p[10];if(Math.abs(f-v)<.01&&Math.abs(m-x)<.01&&Math.abs(w-g)<.01){if(Math.abs(f+v)<.1&&Math.abs(m+x)<.1&&Math.abs(w+g)<.1&&Math.abs(d+b+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(d+1)/2,R=(b+1)/2,T=(y+1)/2,N=(f+v)/4,O=(m+x)/4,S=(w+g)/4;return A>R&&A>T?A<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(A),o=N/i,a=O/i):R>T?R<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),i=N/o,a=S/o):T<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(T),i=O/a,o=S/a),this.set(i,o,a,e),this}let P=Math.sqrt((g-w)*(g-w)+(m-x)*(m-x)+(v-f)*(v-f));return Math.abs(P)<.001&&(P=1),this.x=(g-w)/P,this.y=(m-x)/P,this.z=(v-f)/P,this.w=Math.acos((d+b+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ii extends oi{constructor(t,e,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const o={width:t,height:e,depth:1};this.texture=new Ue(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ke,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dc extends Ue{constructor(t=null,e=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=ye,this.minFilter=ye,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jp extends Ue{constructor(t=null,e=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:o},this.magFilter=ye,this.minFilter=ye,this.wrapR=qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ri{constructor(t=0,e=0,i=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=o}static slerp(t,e,i,o){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(t,e,o)}static slerpFlat(t,e,i,o,a,h,c){let p=i[o+0],d=i[o+1],f=i[o+2],m=i[o+3];const v=a[h+0],b=a[h+1],w=a[h+2],x=a[h+3];if(c===0){t[e+0]=p,t[e+1]=d,t[e+2]=f,t[e+3]=m;return}if(c===1){t[e+0]=v,t[e+1]=b,t[e+2]=w,t[e+3]=x;return}if(m!==x||p!==v||d!==b||f!==w){let g=1-c;const y=p*v+d*b+f*w+m*x,P=y>=0?1:-1,A=1-y*y;if(A>Number.EPSILON){const T=Math.sqrt(A),N=Math.atan2(T,y*P);g=Math.sin(g*N)/T,c=Math.sin(c*N)/T}const R=c*P;if(p=p*g+v*R,d=d*g+b*R,f=f*g+w*R,m=m*g+x*R,g===1-c){const T=1/Math.sqrt(p*p+d*d+f*f+m*m);p*=T,d*=T,f*=T,m*=T}}t[e]=p,t[e+1]=d,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,o,a,h){const c=i[o],p=i[o+1],d=i[o+2],f=i[o+3],m=a[h],v=a[h+1],b=a[h+2],w=a[h+3];return t[e]=c*w+f*m+p*b-d*v,t[e+1]=p*w+f*v+d*m-c*b,t[e+2]=d*w+f*b+c*v-p*m,t[e+3]=f*w-c*m-p*v-d*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,o){return this._x=t,this._y=e,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=t._x,o=t._y,a=t._z,h=t._order,c=Math.cos,p=Math.sin,d=c(i/2),f=c(o/2),m=c(a/2),v=p(i/2),b=p(o/2),w=p(a/2);switch(h){case"XYZ":this._x=v*f*m+d*b*w,this._y=d*b*m-v*f*w,this._z=d*f*w+v*b*m,this._w=d*f*m-v*b*w;break;case"YXZ":this._x=v*f*m+d*b*w,this._y=d*b*m-v*f*w,this._z=d*f*w-v*b*m,this._w=d*f*m+v*b*w;break;case"ZXY":this._x=v*f*m-d*b*w,this._y=d*b*m+v*f*w,this._z=d*f*w+v*b*m,this._w=d*f*m-v*b*w;break;case"ZYX":this._x=v*f*m-d*b*w,this._y=d*b*m+v*f*w,this._z=d*f*w-v*b*m,this._w=d*f*m+v*b*w;break;case"YZX":this._x=v*f*m+d*b*w,this._y=d*b*m+v*f*w,this._z=d*f*w-v*b*m,this._w=d*f*m-v*b*w;break;case"XZY":this._x=v*f*m-d*b*w,this._y=d*b*m-v*f*w,this._z=d*f*w+v*b*m,this._w=d*f*m+v*b*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,o=Math.sin(i);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],o=e[4],a=e[8],h=e[1],c=e[5],p=e[9],d=e[2],f=e[6],m=e[10],v=i+c+m;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(f-p)*b,this._y=(a-d)*b,this._z=(h-o)*b}else if(i>c&&i>m){const b=2*Math.sqrt(1+i-c-m);this._w=(f-p)/b,this._x=.25*b,this._y=(o+h)/b,this._z=(a+d)/b}else if(c>m){const b=2*Math.sqrt(1+c-i-m);this._w=(a-d)/b,this._x=(o+h)/b,this._y=.25*b,this._z=(p+f)/b}else{const b=2*Math.sqrt(1+m-i-c);this._w=(h-o)/b,this._x=(a+d)/b,this._y=(p+f)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const o=Math.min(1,e/i);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,o=t._y,a=t._z,h=t._w,c=e._x,p=e._y,d=e._z,f=e._w;return this._x=i*f+h*c+o*d-a*p,this._y=o*f+h*p+a*c-i*d,this._z=a*f+h*d+i*p-o*c,this._w=h*f-i*c-o*p-a*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,o=this._y,a=this._z,h=this._w;let c=h*t._w+i*t._x+o*t._y+a*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=h,this._x=i,this._y=o,this._z=a,this;const p=1-c*c;if(p<=Number.EPSILON){const b=1-e;return this._w=b*h+e*this._w,this._x=b*i+e*this._x,this._y=b*o+e*this._y,this._z=b*a+e*this._z,this.normalize(),this._onChangeCallback(),this}const d=Math.sqrt(p),f=Math.atan2(d,c),m=Math.sin((1-e)*f)/d,v=Math.sin(e*f)/d;return this._w=h*m+this._w*v,this._x=i*m+this._x*v,this._y=o*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),o=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(o),i*Math.sin(a),i*Math.cos(a),e*Math.sin(o))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Tl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*o,this.y=a[1]*e+a[4]*i+a[7]*o,this.z=a[2]*e+a[5]*i+a[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,o=this.z,a=t.elements,h=1/(a[3]*e+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*o+a[12])*h,this.y=(a[1]*e+a[5]*i+a[9]*o+a[13])*h,this.z=(a[2]*e+a[6]*i+a[10]*o+a[14])*h,this}applyQuaternion(t){const e=this.x,i=this.y,o=this.z,a=t.x,h=t.y,c=t.z,p=t.w,d=p*e+h*o-c*i,f=p*i+c*e-a*o,m=p*o+a*i-h*e,v=-a*e-h*i-c*o;return this.x=d*p+v*-a+f*-c-m*-h,this.y=f*p+v*-h+m*-a-d*-c,this.z=m*p+v*-c+d*-h-f*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,o=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*o,this.y=a[1]*e+a[5]*i+a[9]*o,this.z=a[2]*e+a[6]*i+a[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,o=t.y,a=t.z,h=e.x,c=e.y,p=e.z;return this.x=o*p-a*c,this.y=a*h-i*p,this.z=i*c-o*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Js.copy(this).projectOnVector(t),this.sub(Js)}reflect(t){return this.sub(Js.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,o=this.z-t.z;return e*e+i*i+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const o=Math.sin(e)*t;return this.x=o*Math.sin(i),this.y=Math.cos(e)*t,this.z=o*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Js=new k,Tl=new ri;class Mr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,o=1/0,a=-1/0,h=-1/0,c=-1/0;for(let p=0,d=t.length;p<d;p+=3){const f=t[p],m=t[p+1],v=t[p+2];f<e&&(e=f),m<i&&(i=m),v<o&&(o=v),f>a&&(a=f),m>h&&(h=m),v>c&&(c=v)}return this.min.set(e,i,o),this.max.set(a,h,c),this}setFromBufferAttribute(t){let e=1/0,i=1/0,o=1/0,a=-1/0,h=-1/0,c=-1/0;for(let p=0,d=t.count;p<d;p++){const f=t.getX(p),m=t.getY(p),v=t.getZ(p);f<e&&(e=f),m<i&&(i=m),v<o&&(o=v),f>a&&(a=f),m>h&&(h=m),v>c&&(c=v)}return this.min.set(e,i,o),this.max.set(a,h,c),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let h=0,c=a.count;h<c;h++)Hn.fromBufferAttribute(a,h).applyMatrix4(t.matrixWorld),this.expandByPoint(Hn)}else i.boundingBox===null&&i.computeBoundingBox(),Qs.copy(i.boundingBox),Qs.applyMatrix4(t.matrixWorld),this.union(Qs);const o=t.children;for(let a=0,h=o.length;a<h;a++)this.expandByObject(o[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Hn),Hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(lr),zr.subVectors(this.max,lr),yi.subVectors(t.a,lr),Mi.subVectors(t.b,lr),Si.subVectors(t.c,lr),Sn.subVectors(Mi,yi),En.subVectors(Si,Mi),Wn.subVectors(yi,Si);let e=[0,-Sn.z,Sn.y,0,-En.z,En.y,0,-Wn.z,Wn.y,Sn.z,0,-Sn.x,En.z,0,-En.x,Wn.z,0,-Wn.x,-Sn.y,Sn.x,0,-En.y,En.x,0,-Wn.y,Wn.x,0];return!to(e,yi,Mi,Si,zr)||(e=[1,0,0,0,1,0,0,0,1],!to(e,yi,Mi,Si,zr))?!1:(Br.crossVectors(Sn,En),e=[Br.x,Br.y,Br.z],to(e,yi,Mi,Si,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Hn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Hn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new k,new k,new k,new k,new k,new k,new k,new k],Hn=new k,Qs=new Mr,yi=new k,Mi=new k,Si=new k,Sn=new k,En=new k,Wn=new k,lr=new k,zr=new k,Br=new k,jn=new k;function to(u,t,e,i,o){for(let a=0,h=u.length-3;a<=h;a+=3){jn.fromArray(u,a);const c=o.x*Math.abs(jn.x)+o.y*Math.abs(jn.y)+o.z*Math.abs(jn.z),p=t.dot(jn),d=e.dot(jn),f=i.dot(jn);if(Math.max(-Math.max(p,d,f),Math.min(p,d,f))>c)return!1}return!0}const Qp=new Mr,Pl=new k,Gr=new k,eo=new k;class cs{constructor(t=new k,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Qp.setFromPoints(t).getCenter(i);let o=0;for(let a=0,h=t.length;a<h;a++)o=Math.max(o,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){eo.subVectors(t,this.center);const e=eo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),o=(i-this.radius)*.5;this.center.add(eo.multiplyScalar(o/i)),this.radius+=o}return this}union(t){return this.center.equals(t.center)===!0?Gr.set(0,0,1).multiplyScalar(t.radius):Gr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Pl.copy(t.center).add(Gr)),this.expandByPoint(Pl.copy(t.center).sub(Gr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new k,no=new k,Hr=new k,Cn=new k,io=new k,Wr=new k,ro=new k;class Rc{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.direction).multiplyScalar(e).add(this.origin),an.distanceToSquared(t))}distanceSqToSegment(t,e,i,o){no.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(no);const a=t.distanceTo(e)*.5,h=-this.direction.dot(Hr),c=Cn.dot(this.direction),p=-Cn.dot(Hr),d=Cn.lengthSq(),f=Math.abs(1-h*h);let m,v,b,w;if(f>0)if(m=h*p-c,v=h*c-p,w=a*f,m>=0)if(v>=-w)if(v<=w){const x=1/f;m*=x,v*=x,b=m*(m+h*v+2*c)+v*(h*m+v+2*p)+d}else v=a,m=Math.max(0,-(h*v+c)),b=-m*m+v*(v+2*p)+d;else v=-a,m=Math.max(0,-(h*v+c)),b=-m*m+v*(v+2*p)+d;else v<=-w?(m=Math.max(0,-(-h*a+c)),v=m>0?-a:Math.min(Math.max(-a,-p),a),b=-m*m+v*(v+2*p)+d):v<=w?(m=0,v=Math.min(Math.max(-a,-p),a),b=v*(v+2*p)+d):(m=Math.max(0,-(h*a+c)),v=m>0?a:Math.min(Math.max(-a,-p),a),b=-m*m+v*(v+2*p)+d);else v=h>0?-a:a,m=Math.max(0,-(h*v+c)),b=-m*m+v*(v+2*p)+d;return i&&i.copy(this.direction).multiplyScalar(m).add(this.origin),o&&o.copy(Hr).multiplyScalar(v).add(no),b}intersectSphere(t,e){an.subVectors(t.center,this.origin);const i=an.dot(this.direction),o=an.dot(an)-i*i,a=t.radius*t.radius;if(o>a)return null;const h=Math.sqrt(a-o),c=i-h,p=i+h;return c<0&&p<0?null:c<0?this.at(p,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,o,a,h,c,p;const d=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,v=this.origin;return d>=0?(i=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(i=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),f>=0?(a=(t.min.y-v.y)*f,h=(t.max.y-v.y)*f):(a=(t.max.y-v.y)*f,h=(t.min.y-v.y)*f),i>h||a>o||((a>i||i!==i)&&(i=a),(h<o||o!==o)&&(o=h),m>=0?(c=(t.min.z-v.z)*m,p=(t.max.z-v.z)*m):(c=(t.max.z-v.z)*m,p=(t.min.z-v.z)*m),i>p||c>o)||((c>i||i!==i)&&(i=c),(p<o||o!==o)&&(o=p),o<0)?null:this.at(i>=0?i:o,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,i,o,a){io.subVectors(e,t),Wr.subVectors(i,t),ro.crossVectors(io,Wr);let h=this.direction.dot(ro),c;if(h>0){if(o)return null;c=1}else if(h<0)c=-1,h=-h;else return null;Cn.subVectors(this.origin,t);const p=c*this.direction.dot(Wr.crossVectors(Cn,Wr));if(p<0)return null;const d=c*this.direction.dot(io.cross(Cn));if(d<0||p+d>h)return null;const f=-c*Cn.dot(ro);return f<0?null:this.at(f/h,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,o,a,h,c,p,d,f,m,v,b,w,x,g){const y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=o,y[1]=a,y[5]=h,y[9]=c,y[13]=p,y[2]=d,y[6]=f,y[10]=m,y[14]=v,y[3]=b,y[7]=w,y[11]=x,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,o=1/Ei.setFromMatrixColumn(t,0).length(),a=1/Ei.setFromMatrixColumn(t,1).length(),h=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=i[0]*o,e[1]=i[1]*o,e[2]=i[2]*o,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,i=t.x,o=t.y,a=t.z,h=Math.cos(i),c=Math.sin(i),p=Math.cos(o),d=Math.sin(o),f=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const v=h*f,b=h*m,w=c*f,x=c*m;e[0]=p*f,e[4]=-p*m,e[8]=d,e[1]=b+w*d,e[5]=v-x*d,e[9]=-c*p,e[2]=x-v*d,e[6]=w+b*d,e[10]=h*p}else if(t.order==="YXZ"){const v=p*f,b=p*m,w=d*f,x=d*m;e[0]=v+x*c,e[4]=w*c-b,e[8]=h*d,e[1]=h*m,e[5]=h*f,e[9]=-c,e[2]=b*c-w,e[6]=x+v*c,e[10]=h*p}else if(t.order==="ZXY"){const v=p*f,b=p*m,w=d*f,x=d*m;e[0]=v-x*c,e[4]=-h*m,e[8]=w+b*c,e[1]=b+w*c,e[5]=h*f,e[9]=x-v*c,e[2]=-h*d,e[6]=c,e[10]=h*p}else if(t.order==="ZYX"){const v=h*f,b=h*m,w=c*f,x=c*m;e[0]=p*f,e[4]=w*d-b,e[8]=v*d+x,e[1]=p*m,e[5]=x*d+v,e[9]=b*d-w,e[2]=-d,e[6]=c*p,e[10]=h*p}else if(t.order==="YZX"){const v=h*p,b=h*d,w=c*p,x=c*d;e[0]=p*f,e[4]=x-v*m,e[8]=w*m+b,e[1]=m,e[5]=h*f,e[9]=-c*f,e[2]=-d*f,e[6]=b*m+w,e[10]=v-x*m}else if(t.order==="XZY"){const v=h*p,b=h*d,w=c*p,x=c*d;e[0]=p*f,e[4]=-m,e[8]=d*f,e[1]=v*m+x,e[5]=h*f,e[9]=b*m-w,e[2]=w*m-b,e[6]=c*f,e[10]=x*m+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tf,t,ef)}lookAt(t,e,i){const o=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),Tn.crossVectors(i,Te),Tn.lengthSq()===0&&(Math.abs(i.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),Tn.crossVectors(i,Te)),Tn.normalize(),jr.crossVectors(Te,Tn),o[0]=Tn.x,o[4]=jr.x,o[8]=Te.x,o[1]=Tn.y,o[5]=jr.y,o[9]=Te.y,o[2]=Tn.z,o[6]=jr.z,o[10]=Te.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,o=e.elements,a=this.elements,h=i[0],c=i[4],p=i[8],d=i[12],f=i[1],m=i[5],v=i[9],b=i[13],w=i[2],x=i[6],g=i[10],y=i[14],P=i[3],A=i[7],R=i[11],T=i[15],N=o[0],O=o[4],S=o[8],I=o[12],G=o[1],H=o[5],pt=o[9],ot=o[13],z=o[2],Q=o[6],j=o[10],B=o[14],tt=o[3],X=o[7],Z=o[11],nt=o[15];return a[0]=h*N+c*G+p*z+d*tt,a[4]=h*O+c*H+p*Q+d*X,a[8]=h*S+c*pt+p*j+d*Z,a[12]=h*I+c*ot+p*B+d*nt,a[1]=f*N+m*G+v*z+b*tt,a[5]=f*O+m*H+v*Q+b*X,a[9]=f*S+m*pt+v*j+b*Z,a[13]=f*I+m*ot+v*B+b*nt,a[2]=w*N+x*G+g*z+y*tt,a[6]=w*O+x*H+g*Q+y*X,a[10]=w*S+x*pt+g*j+y*Z,a[14]=w*I+x*ot+g*B+y*nt,a[3]=P*N+A*G+R*z+T*tt,a[7]=P*O+A*H+R*Q+T*X,a[11]=P*S+A*pt+R*j+T*Z,a[15]=P*I+A*ot+R*B+T*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],o=t[8],a=t[12],h=t[1],c=t[5],p=t[9],d=t[13],f=t[2],m=t[6],v=t[10],b=t[14],w=t[3],x=t[7],g=t[11],y=t[15];return w*(+a*p*m-o*d*m-a*c*v+i*d*v+o*c*b-i*p*b)+x*(+e*p*b-e*d*v+a*h*v-o*h*b+o*d*f-a*p*f)+g*(+e*d*m-e*c*b-a*h*m+i*h*b+a*c*f-i*d*f)+y*(-o*c*f-e*p*m+e*c*v+o*h*m-i*h*v+i*p*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],o=t[2],a=t[3],h=t[4],c=t[5],p=t[6],d=t[7],f=t[8],m=t[9],v=t[10],b=t[11],w=t[12],x=t[13],g=t[14],y=t[15],P=m*g*d-x*v*d+x*p*b-c*g*b-m*p*y+c*v*y,A=w*v*d-f*g*d-w*p*b+h*g*b+f*p*y-h*v*y,R=f*x*d-w*m*d+w*c*b-h*x*b-f*c*y+h*m*y,T=w*m*p-f*x*p-w*c*v+h*x*v+f*c*g-h*m*g,N=e*P+i*A+o*R+a*T;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/N;return t[0]=P*O,t[1]=(x*v*a-m*g*a-x*o*b+i*g*b+m*o*y-i*v*y)*O,t[2]=(c*g*a-x*p*a+x*o*d-i*g*d-c*o*y+i*p*y)*O,t[3]=(m*p*a-c*v*a-m*o*d+i*v*d+c*o*b-i*p*b)*O,t[4]=A*O,t[5]=(f*g*a-w*v*a+w*o*b-e*g*b-f*o*y+e*v*y)*O,t[6]=(w*p*a-h*g*a-w*o*d+e*g*d+h*o*y-e*p*y)*O,t[7]=(h*v*a-f*p*a+f*o*d-e*v*d-h*o*b+e*p*b)*O,t[8]=R*O,t[9]=(w*m*a-f*x*a-w*i*b+e*x*b+f*i*y-e*m*y)*O,t[10]=(h*x*a-w*c*a+w*i*d-e*x*d-h*i*y+e*c*y)*O,t[11]=(f*c*a-h*m*a-f*i*d+e*m*d+h*i*b-e*c*b)*O,t[12]=T*O,t[13]=(f*x*o-w*m*o+w*i*v-e*x*v-f*i*g+e*m*g)*O,t[14]=(w*c*o-h*x*o-w*i*p+e*x*p+h*i*g-e*c*g)*O,t[15]=(h*m*o-f*c*o+f*i*p-e*m*p-h*i*v+e*c*v)*O,this}scale(t){const e=this.elements,i=t.x,o=t.y,a=t.z;return e[0]*=i,e[4]*=o,e[8]*=a,e[1]*=i,e[5]*=o,e[9]*=a,e[2]*=i,e[6]*=o,e[10]*=a,e[3]*=i,e[7]*=o,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,o))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),o=Math.sin(e),a=1-i,h=t.x,c=t.y,p=t.z,d=a*h,f=a*c;return this.set(d*h+i,d*c-o*p,d*p+o*c,0,d*c+o*p,f*c+i,f*p-o*h,0,d*p-o*c,f*p+o*h,a*p*p+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,o,a,h){return this.set(1,i,a,0,t,1,h,0,e,o,1,0,0,0,0,1),this}compose(t,e,i){const o=this.elements,a=e._x,h=e._y,c=e._z,p=e._w,d=a+a,f=h+h,m=c+c,v=a*d,b=a*f,w=a*m,x=h*f,g=h*m,y=c*m,P=p*d,A=p*f,R=p*m,T=i.x,N=i.y,O=i.z;return o[0]=(1-(x+y))*T,o[1]=(b+R)*T,o[2]=(w-A)*T,o[3]=0,o[4]=(b-R)*N,o[5]=(1-(v+y))*N,o[6]=(g+P)*N,o[7]=0,o[8]=(w+A)*O,o[9]=(g-P)*O,o[10]=(1-(v+x))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,i){const o=this.elements;let a=Ei.set(o[0],o[1],o[2]).length();const h=Ei.set(o[4],o[5],o[6]).length(),c=Ei.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),t.x=o[12],t.y=o[13],t.z=o[14],We.copy(this);const d=1/a,f=1/h,m=1/c;return We.elements[0]*=d,We.elements[1]*=d,We.elements[2]*=d,We.elements[4]*=f,We.elements[5]*=f,We.elements[6]*=f,We.elements[8]*=m,We.elements[9]*=m,We.elements[10]*=m,e.setFromRotationMatrix(We),i.x=a,i.y=h,i.z=c,this}makePerspective(t,e,i,o,a,h){h===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const c=this.elements,p=2*a/(e-t),d=2*a/(i-o),f=(e+t)/(e-t),m=(i+o)/(i-o),v=-(h+a)/(h-a),b=-2*h*a/(h-a);return c[0]=p,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,o,a,h){const c=this.elements,p=1/(e-t),d=1/(i-o),f=1/(h-a),m=(e+t)*p,v=(i+o)*d,b=(h+a)*f;return c[0]=2*p,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-v,c[2]=0,c[6]=0,c[10]=-2*f,c[14]=-b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let o=0;o<16;o++)if(e[o]!==i[o])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ei=new k,We=new ie,tf=new k(0,0,0),ef=new k(1,1,1),Tn=new k,jr=new k,Te=new k,Al=new ie,Ll=new ri;class Sr{constructor(t=0,e=0,i=0,o=Sr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,o=this._order){return this._x=t,this._y=e,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const o=t.elements,a=o[0],h=o[4],c=o[8],p=o[1],d=o[5],f=o[9],m=o[2],v=o[6],b=o[10];switch(e){case"XYZ":this._y=Math.asin(Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,b),this._z=Math.atan2(-h,a)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(c,b),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,b),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-f,d),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(c,b));break;case"XZY":this._z=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-f,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ll.setFromEuler(this),this.setFromQuaternion(Ll,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Sr.DefaultOrder="XYZ";Sr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nf=0;const Dl=new k,Ci=new ri,ln=new ie,qr=new k,cr=new k,rf=new k,sf=new ri,Rl=new k(1,0,0),Il=new k(0,1,0),Fl=new k(0,0,1),of={type:"added"},Nl={type:"removed"};class _e extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DefaultUp.clone();const t=new k,e=new Sr,i=new ri,o=new k(1,1,1);function a(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ie},normalMatrix:{value:new Oe}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=_e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Rl,t)}rotateY(t){return this.rotateOnAxis(Il,t)}rotateZ(t){return this.rotateOnAxis(Fl,t)}translateOnAxis(t,e){return Dl.copy(t).applyQuaternion(this.quaternion),this.position.add(Dl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rl,t)}translateY(t){return this.translateOnAxis(Il,t)}translateZ(t){return this.translateOnAxis(Fl,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?qr.copy(t):qr.set(t,e,i);const o=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(cr,qr,this.up):ln.lookAt(qr,cr,this.up),this.quaternion.setFromRotationMatrix(ln),o&&(ln.extractRotation(o.matrixWorld),Ci.setFromRotationMatrix(ln),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(of)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Nl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,o=this.children.length;i<o;i++){const h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,t,rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,sf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,o=e.length;i<o;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const o=this.children;for(let a=0,h=o.length;a<h;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function a(c,p){return c[p.uuid]===void 0&&(c[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const p=c.shapes;if(Array.isArray(p))for(let d=0,f=p.length;d<f;d++){const m=p[d];a(t.shapes,m)}else a(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let p=0,d=this.material.length;p<d;p++)c.push(a(t.materials,this.material[p]));o.material=c}else o.material=a(t.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const p=this.animations[c];o.animations.push(a(t.animations,p))}}if(e){const c=h(t.geometries),p=h(t.materials),d=h(t.textures),f=h(t.images),m=h(t.shapes),v=h(t.skeletons),b=h(t.animations),w=h(t.nodes);c.length>0&&(i.geometries=c),p.length>0&&(i.materials=p),d.length>0&&(i.textures=d),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),b.length>0&&(i.animations=b),w.length>0&&(i.nodes=w)}return i.object=o,i;function h(c){const p=[];for(const d in c){const f=c[d];delete f.metadata,p.push(f)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const o=t.children[i];this.add(o.clone())}return this}}_e.DefaultUp=new k(0,1,0);_e.DefaultMatrixAutoUpdate=!0;const je=new k,cn=new k,so=new k,un=new k,Ti=new k,Pi=new k,kl=new k,oo=new k,ao=new k,lo=new k;class dn{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,o){o.subVectors(i,e),je.subVectors(t,e),o.cross(je);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(t,e,i,o,a){je.subVectors(o,e),cn.subVectors(i,e),so.subVectors(t,e);const h=je.dot(je),c=je.dot(cn),p=je.dot(so),d=cn.dot(cn),f=cn.dot(so),m=h*d-c*c;if(m===0)return a.set(-2,-1,-1);const v=1/m,b=(d*p-c*f)*v,w=(h*f-c*p)*v;return a.set(1-b-w,w,b)}static containsPoint(t,e,i,o){return this.getBarycoord(t,e,i,o,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(t,e,i,o,a,h,c,p){return this.getBarycoord(t,e,i,o,un),p.set(0,0),p.addScaledVector(a,un.x),p.addScaledVector(h,un.y),p.addScaledVector(c,un.z),p}static isFrontFacing(t,e,i,o){return je.subVectors(i,e),cn.subVectors(t,e),je.cross(cn).dot(o)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,o){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,i,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),je.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,o,a){return dn.getUV(t,this.a,this.b,this.c,e,i,o,a)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,o=this.b,a=this.c;let h,c;Ti.subVectors(o,i),Pi.subVectors(a,i),oo.subVectors(t,i);const p=Ti.dot(oo),d=Pi.dot(oo);if(p<=0&&d<=0)return e.copy(i);ao.subVectors(t,o);const f=Ti.dot(ao),m=Pi.dot(ao);if(f>=0&&m<=f)return e.copy(o);const v=p*m-f*d;if(v<=0&&p>=0&&f<=0)return h=p/(p-f),e.copy(i).addScaledVector(Ti,h);lo.subVectors(t,a);const b=Ti.dot(lo),w=Pi.dot(lo);if(w>=0&&b<=w)return e.copy(a);const x=b*d-p*w;if(x<=0&&d>=0&&w<=0)return c=d/(d-w),e.copy(i).addScaledVector(Pi,c);const g=f*w-b*m;if(g<=0&&m-f>=0&&b-w>=0)return kl.subVectors(a,o),c=(m-f)/(m-f+(b-w)),e.copy(o).addScaledVector(kl,c);const y=1/(g+x+v);return h=x*y,c=v*y,e.copy(i).addScaledVector(Ti,h).addScaledVector(Pi,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let af=0;class ji extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=yr(),this.name="",this.type="Material",this.blending=Oi,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wc,this.blendDst=yc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===ip;continue}const o=this[e];if(o===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function o(a){const h=[];for(const c in a){const p=a[c];delete p.metadata,h.push(p)}return h}if(e){const a=o(t.textures),h=o(t.images);a.length>0&&(i.textures=a),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const o=e.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class No extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ne=new k,Xr=new Lt;class Se{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=Ml,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[t+o]=e.array[i+o];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let i=0;for(let o=0,a=t.length;o<a;o++){let h=t[o];h===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",o),h=new Wt),e[i++]=h.r,e[i++]=h.g,e[i++]=h.b}return this}copyVector2sArray(t){const e=this.array;let i=0;for(let o=0,a=t.length;o<a;o++){let h=t[o];h===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",o),h=new Lt),e[i++]=h.x,e[i++]=h.y}return this}copyVector3sArray(t){const e=this.array;let i=0;for(let o=0,a=t.length;o<a;o++){let h=t[o];h===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",o),h=new k),e[i++]=h.x,e[i++]=h.y,e[i++]=h.z}return this}copyVector4sArray(t){const e=this.array;let i=0;for(let o=0,a=t.length;o<a;o++){let h=t[o];h===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",o),h=new ce),e[i++]=h.x,e[i++]=h.y,e[i++]=h.z,e[i++]=h.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Xr.fromBufferAttribute(this,e),Xr.applyMatrix3(t),this.setXY(e,Xr.x,Xr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ne.fromBufferAttribute(this,e),ne.applyMatrix3(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ne.fromBufferAttribute(this,e),ne.applyMatrix4(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ne.fromBufferAttribute(this,e),ne.applyNormalMatrix(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ne.fromBufferAttribute(this,e),ne.transformDirection(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,o){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this}setXYZW(t,e,i,o,a){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=o,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ml&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Fc extends Se{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Nc extends Se{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ee extends Se{constructor(t,e,i){super(new Float32Array(t),e,i)}}let lf=0;const Ne=new ie,co=new _e,Ai=new k,Pe=new Mr,ur=new Mr,he=new k;class ze extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tc(t)?Nc:Fc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Oe().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ne.makeRotationFromQuaternion(t),this.applyMatrix4(Ne),this}rotateX(t){return Ne.makeRotationX(t),this.applyMatrix4(Ne),this}rotateY(t){return Ne.makeRotationY(t),this.applyMatrix4(Ne),this}rotateZ(t){return Ne.makeRotationZ(t),this.applyMatrix4(Ne),this}translate(t,e,i){return Ne.makeTranslation(t,e,i),this.applyMatrix4(Ne),this}scale(t,e,i){return Ne.makeScale(t,e,i),this.applyMatrix4(Ne),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=[];for(let i=0,o=t.length;i<o;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Ee(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,o=e.length;i<o;i++){const a=e[i];Pe.setFromBufferAttribute(a),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let a=0,h=e.length;a<h;a++){const c=e[a];ur.setFromBufferAttribute(c),this.morphTargetsRelative?(he.addVectors(Pe.min,ur.min),Pe.expandByPoint(he),he.addVectors(Pe.max,ur.max),Pe.expandByPoint(he)):(Pe.expandByPoint(ur.min),Pe.expandByPoint(ur.max))}Pe.getCenter(i);let o=0;for(let a=0,h=t.count;a<h;a++)he.fromBufferAttribute(t,a),o=Math.max(o,i.distanceToSquared(he));if(e)for(let a=0,h=e.length;a<h;a++){const c=e[a],p=this.morphTargetsRelative;for(let d=0,f=c.count;d<f;d++)he.fromBufferAttribute(c,d),p&&(Ai.fromBufferAttribute(t,d),he.add(Ai)),o=Math.max(o,i.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,o=e.position.array,a=e.normal.array,h=e.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*c),4));const p=this.getAttribute("tangent").array,d=[],f=[];for(let G=0;G<c;G++)d[G]=new k,f[G]=new k;const m=new k,v=new k,b=new k,w=new Lt,x=new Lt,g=new Lt,y=new k,P=new k;function A(G,H,pt){m.fromArray(o,G*3),v.fromArray(o,H*3),b.fromArray(o,pt*3),w.fromArray(h,G*2),x.fromArray(h,H*2),g.fromArray(h,pt*2),v.sub(m),b.sub(m),x.sub(w),g.sub(w);const ot=1/(x.x*g.y-g.x*x.y);!isFinite(ot)||(y.copy(v).multiplyScalar(g.y).addScaledVector(b,-x.y).multiplyScalar(ot),P.copy(b).multiplyScalar(x.x).addScaledVector(v,-g.x).multiplyScalar(ot),d[G].add(y),d[H].add(y),d[pt].add(y),f[G].add(P),f[H].add(P),f[pt].add(P))}let R=this.groups;R.length===0&&(R=[{start:0,count:i.length}]);for(let G=0,H=R.length;G<H;++G){const pt=R[G],ot=pt.start,z=pt.count;for(let Q=ot,j=ot+z;Q<j;Q+=3)A(i[Q+0],i[Q+1],i[Q+2])}const T=new k,N=new k,O=new k,S=new k;function I(G){O.fromArray(a,G*3),S.copy(O);const H=d[G];T.copy(H),T.sub(O.multiplyScalar(O.dot(H))).normalize(),N.crossVectors(S,H);const ot=N.dot(f[G])<0?-1:1;p[G*4]=T.x,p[G*4+1]=T.y,p[G*4+2]=T.z,p[G*4+3]=ot}for(let G=0,H=R.length;G<H;++G){const pt=R[G],ot=pt.start,z=pt.count;for(let Q=ot,j=ot+z;Q<j;Q+=3)I(i[Q+0]),I(i[Q+1]),I(i[Q+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,b=i.count;v<b;v++)i.setXYZ(v,0,0,0);const o=new k,a=new k,h=new k,c=new k,p=new k,d=new k,f=new k,m=new k;if(t)for(let v=0,b=t.count;v<b;v+=3){const w=t.getX(v+0),x=t.getX(v+1),g=t.getX(v+2);o.fromBufferAttribute(e,w),a.fromBufferAttribute(e,x),h.fromBufferAttribute(e,g),f.subVectors(h,a),m.subVectors(o,a),f.cross(m),c.fromBufferAttribute(i,w),p.fromBufferAttribute(i,x),d.fromBufferAttribute(i,g),c.add(f),p.add(f),d.add(f),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(x,p.x,p.y,p.z),i.setXYZ(g,d.x,d.y,d.z)}else for(let v=0,b=e.count;v<b;v+=3)o.fromBufferAttribute(e,v+0),a.fromBufferAttribute(e,v+1),h.fromBufferAttribute(e,v+2),f.subVectors(h,a),m.subVectors(o,a),f.cross(m),i.setXYZ(v+0,f.x,f.y,f.z),i.setXYZ(v+1,f.x,f.y,f.z),i.setXYZ(v+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const o in i){if(t.attributes[o]===void 0)continue;const h=i[o].array,c=t.attributes[o],p=c.array,d=c.itemSize*e,f=Math.min(p.length,h.length-d);for(let m=0,v=d;m<f;m++,v++)h[v]=p[m]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(c,p){const d=c.array,f=c.itemSize,m=c.normalized,v=new d.constructor(p.length*f);let b=0,w=0;for(let x=0,g=p.length;x<g;x++){c.isInterleavedBufferAttribute?b=p[x]*c.data.stride+c.offset:b=p[x]*f;for(let y=0;y<f;y++)v[w++]=d[b++]}return new Se(v,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,i=this.index.array,o=this.attributes;for(const c in o){const p=o[c],d=t(p,i);e.setAttribute(c,d)}const a=this.morphAttributes;for(const c in a){const p=[],d=a[c];for(let f=0,m=d.length;f<m;f++){const v=d[f],b=t(v,i);p.push(b)}e.morphAttributes[c]=p}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let c=0,p=h.length;c<p;c++){const d=h[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const p in i){const d=i[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let a=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],f=[];for(let m=0,v=d.length;m<v;m++){const b=d[m];f.push(b.toJSON(t.data))}f.length>0&&(o[p]=f,a=!0)}a&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const o=t.attributes;for(const d in o){const f=o[d];this.setAttribute(d,f.clone(e))}const a=t.morphAttributes;for(const d in a){const f=[],m=a[d];for(let v=0,b=m.length;v<b;v++)f.push(m[v].clone(e));this.morphAttributes[d]=f}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,f=h.length;d<f;d++){const m=h[d];this.addGroup(m.start,m.count,m.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new ie,Li=new Rc,uo=new cs,Pn=new k,An=new k,Ln=new k,ho=new k,po=new k,fo=new k,Yr=new k,$r=new k,Kr=new k,Zr=new Lt,Jr=new Lt,Qr=new Lt,mo=new k,ts=new k;class Ae extends _e{constructor(t=new ze,e=new No){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=o.length;a<h;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}raycast(t,e){const i=this.geometry,o=this.material,a=this.matrixWorld;if(o===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(a),t.ray.intersectsSphere(uo)===!1)||(Vl.copy(a).invert(),Li.copy(t.ray).applyMatrix4(Vl),i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1))return;let h;const c=i.index,p=i.attributes.position,d=i.morphAttributes.position,f=i.morphTargetsRelative,m=i.attributes.uv,v=i.attributes.uv2,b=i.groups,w=i.drawRange;if(c!==null)if(Array.isArray(o))for(let x=0,g=b.length;x<g;x++){const y=b[x],P=o[y.materialIndex],A=Math.max(y.start,w.start),R=Math.min(c.count,Math.min(y.start+y.count,w.start+w.count));for(let T=A,N=R;T<N;T+=3){const O=c.getX(T),S=c.getX(T+1),I=c.getX(T+2);h=es(this,P,t,Li,p,d,f,m,v,O,S,I),h&&(h.faceIndex=Math.floor(T/3),h.face.materialIndex=y.materialIndex,e.push(h))}}else{const x=Math.max(0,w.start),g=Math.min(c.count,w.start+w.count);for(let y=x,P=g;y<P;y+=3){const A=c.getX(y),R=c.getX(y+1),T=c.getX(y+2);h=es(this,o,t,Li,p,d,f,m,v,A,R,T),h&&(h.faceIndex=Math.floor(y/3),e.push(h))}}else if(p!==void 0)if(Array.isArray(o))for(let x=0,g=b.length;x<g;x++){const y=b[x],P=o[y.materialIndex],A=Math.max(y.start,w.start),R=Math.min(p.count,Math.min(y.start+y.count,w.start+w.count));for(let T=A,N=R;T<N;T+=3){const O=T,S=T+1,I=T+2;h=es(this,P,t,Li,p,d,f,m,v,O,S,I),h&&(h.faceIndex=Math.floor(T/3),h.face.materialIndex=y.materialIndex,e.push(h))}}else{const x=Math.max(0,w.start),g=Math.min(p.count,w.start+w.count);for(let y=x,P=g;y<P;y+=3){const A=y,R=y+1,T=y+2;h=es(this,o,t,Li,p,d,f,m,v,A,R,T),h&&(h.faceIndex=Math.floor(y/3),e.push(h))}}}}function cf(u,t,e,i,o,a,h,c){let p;if(t.side===Xe?p=i.intersectTriangle(h,a,o,!0,c):p=i.intersectTriangle(o,a,h,t.side!==Rn,c),p===null)return null;ts.copy(c),ts.applyMatrix4(u.matrixWorld);const d=e.ray.origin.distanceTo(ts);return d<e.near||d>e.far?null:{distance:d,point:ts.clone(),object:u}}function es(u,t,e,i,o,a,h,c,p,d,f,m){Pn.fromBufferAttribute(o,d),An.fromBufferAttribute(o,f),Ln.fromBufferAttribute(o,m);const v=u.morphTargetInfluences;if(a&&v){Yr.set(0,0,0),$r.set(0,0,0),Kr.set(0,0,0);for(let w=0,x=a.length;w<x;w++){const g=v[w],y=a[w];g!==0&&(ho.fromBufferAttribute(y,d),po.fromBufferAttribute(y,f),fo.fromBufferAttribute(y,m),h?(Yr.addScaledVector(ho,g),$r.addScaledVector(po,g),Kr.addScaledVector(fo,g)):(Yr.addScaledVector(ho.sub(Pn),g),$r.addScaledVector(po.sub(An),g),Kr.addScaledVector(fo.sub(Ln),g)))}Pn.add(Yr),An.add($r),Ln.add(Kr)}u.isSkinnedMesh&&(u.boneTransform(d,Pn),u.boneTransform(f,An),u.boneTransform(m,Ln));const b=cf(u,t,e,i,Pn,An,Ln,mo);if(b){c&&(Zr.fromBufferAttribute(c,d),Jr.fromBufferAttribute(c,f),Qr.fromBufferAttribute(c,m),b.uv=dn.getUV(mo,Pn,An,Ln,Zr,Jr,Qr,new Lt)),p&&(Zr.fromBufferAttribute(p,d),Jr.fromBufferAttribute(p,f),Qr.fromBufferAttribute(p,m),b.uv2=dn.getUV(mo,Pn,An,Ln,Zr,Jr,Qr,new Lt));const w={a:d,b:f,c:m,normal:new k,materialIndex:0};dn.getNormal(Pn,An,Ln,w.normal),b.face=w}return b}class Er extends ze{constructor(t=1,e=1,i=1,o=1,a=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:o,heightSegments:a,depthSegments:h};const c=this;o=Math.floor(o),a=Math.floor(a),h=Math.floor(h);const p=[],d=[],f=[],m=[];let v=0,b=0;w("z","y","x",-1,-1,i,e,t,h,a,0),w("z","y","x",1,-1,i,e,-t,h,a,1),w("x","z","y",1,1,t,i,e,o,h,2),w("x","z","y",1,-1,t,i,-e,o,h,3),w("x","y","z",1,-1,t,e,i,o,a,4),w("x","y","z",-1,-1,t,e,-i,o,a,5),this.setIndex(p),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(f,3)),this.setAttribute("uv",new Ee(m,2));function w(x,g,y,P,A,R,T,N,O,S,I){const G=R/O,H=T/S,pt=R/2,ot=T/2,z=N/2,Q=O+1,j=S+1;let B=0,tt=0;const X=new k;for(let Z=0;Z<j;Z++){const nt=Z*H-ot;for(let rt=0;rt<Q;rt++){const J=rt*G-pt;X[x]=J*P,X[g]=nt*A,X[y]=z,d.push(X.x,X.y,X.z),X[x]=0,X[g]=0,X[y]=N>0?1:-1,f.push(X.x,X.y,X.z),m.push(rt/O),m.push(1-Z/S),B+=1}}for(let Z=0;Z<S;Z++)for(let nt=0;nt<O;nt++){const rt=v+nt+Q*Z,J=v+nt+Q*(Z+1),ft=v+(nt+1)+Q*(Z+1),xt=v+(nt+1)+Q*Z;p.push(rt,J,xt),p.push(J,ft,xt),tt+=6}c.addGroup(b,tt,I),b+=tt,v+=B}}static fromJSON(t){return new Er(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hi(u){const t={};for(const e in u){t[e]={};for(const i in u[e]){const o=u[e][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?t[e][i]=o.clone():Array.isArray(o)?t[e][i]=o.slice():t[e][i]=o}}return t}function fe(u){const t={};for(let e=0;e<u.length;e++){const i=Hi(u[e]);for(const o in i)t[o]=i[o]}return t}const uf={clone:Hi,merge:fe};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=hf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?e.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[o]={type:"m4",value:h.toArray()}:e.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class kc extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends kc{constructor(t=50,e=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=El*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return El*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,o,a,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*e,o=this.aspect*i,a=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,d=h.fullHeight;a+=h.offsetX*o/p,e-=h.offsetY*i/d,o*=h.width/p,i*=h.height/d}const c=this.filmOffset;c!==0&&(a+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Di=90,Ri=1;class pf extends _e{constructor(t,e,i){if(super(),this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const o=new Ve(Di,Ri,t,e);o.layers=this.layers,o.up.set(0,-1,0),o.lookAt(new k(1,0,0)),this.add(o);const a=new Ve(Di,Ri,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new k(-1,0,0)),this.add(a);const h=new Ve(Di,Ri,t,e);h.layers=this.layers,h.up.set(0,0,1),h.lookAt(new k(0,1,0)),this.add(h);const c=new Ve(Di,Ri,t,e);c.layers=this.layers,c.up.set(0,0,-1),c.lookAt(new k(0,-1,0)),this.add(c);const p=new Ve(Di,Ri,t,e);p.layers=this.layers,p.up.set(0,-1,0),p.lookAt(new k(0,0,1)),this.add(p);const d=new Ve(Di,Ri,t,e);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new k(0,0,-1)),this.add(d)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[o,a,h,c,p,d]=this.children,f=t.getRenderTarget(),m=t.toneMapping,v=t.xr.enabled;t.toneMapping=pn,t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,o),t.setRenderTarget(i,1),t.render(e,a),t.setRenderTarget(i,2),t.render(e,h),t.setRenderTarget(i,3),t.render(e,c),t.setRenderTarget(i,4),t.render(e,p),i.texture.generateMipmaps=b,t.setRenderTarget(i,5),t.render(e,d),t.setRenderTarget(f),t.toneMapping=m,t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Vc extends Ue{constructor(t,e,i,o,a,h,c,p,d,f){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,i,o,a,h,c,p,d,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ff extends ii{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},o=[i,i,i,i,i,i];this.texture=new Vc(o,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Er(5,5,5),a=new si({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xe,blending:Dn});a.uniforms.tEquirect.value=e;const h=new Ae(o,a),c=e.minFilter;return e.minFilter===ls&&(e.minFilter=ke),new pf(1,10,this).update(t,h),e.minFilter=c,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,o){const a=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,o);t.setRenderTarget(a)}}const go=new k,mf=new k,gf=new Oe;class Xn{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,o){return this.normal.set(t,e,i),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const o=go.subVectors(i,e).cross(mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(go),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:e.copy(i).multiplyScalar(a).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||gf.getNormalMatrix(t),o=this.coplanarPoint(go).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ii=new cs,ns=new k;class ko{constructor(t=new Xn,e=new Xn,i=new Xn,o=new Xn,a=new Xn,h=new Xn){this.planes=[t,e,i,o,a,h]}set(t,e,i,o,a,h){const c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(h),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,o=i[0],a=i[1],h=i[2],c=i[3],p=i[4],d=i[5],f=i[6],m=i[7],v=i[8],b=i[9],w=i[10],x=i[11],g=i[12],y=i[13],P=i[14],A=i[15];return e[0].setComponents(c-o,m-p,x-v,A-g).normalize(),e[1].setComponents(c+o,m+p,x+v,A+g).normalize(),e[2].setComponents(c+a,m+d,x+b,A+y).normalize(),e[3].setComponents(c-a,m-d,x-b,A-y).normalize(),e[4].setComponents(c-h,m-f,x-w,A-P).normalize(),e[5].setComponents(c+h,m+f,x+w,A+P).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSprite(t){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){const e=this.planes,i=t.center,o=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const o=e[i];if(ns.x=o.normal.x>0?t.max.x:t.min.x,ns.y=o.normal.y>0?t.max.y:t.min.y,ns.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let u=null,t=!1,e=null,i=null;function o(a,h){e(a,h),i=u.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(i=u.requestAnimationFrame(o),t=!0)},stop:function(){u.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){u=a}}}function vf(u,t){const e=t.isWebGL2,i=new WeakMap;function o(d,f){const m=d.array,v=d.usage,b=u.createBuffer();u.bindBuffer(f,b),u.bufferData(f,m,v),d.onUploadCallback();let w;if(m instanceof Float32Array)w=5126;else if(m instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(m instanceof Int16Array)w=5122;else if(m instanceof Uint32Array)w=5125;else if(m instanceof Int32Array)w=5124;else if(m instanceof Int8Array)w=5120;else if(m instanceof Uint8Array)w=5121;else if(m instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:b,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version}}function a(d,f,m){const v=f.array,b=f.updateRange;u.bindBuffer(m,d),b.count===-1?u.bufferSubData(m,0,v):(e?u.bufferSubData(m,b.offset*v.BYTES_PER_ELEMENT,v,b.offset,b.count):u.bufferSubData(m,b.offset*v.BYTES_PER_ELEMENT,v.subarray(b.offset,b.offset+b.count)),b.count=-1)}function h(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=i.get(d);f&&(u.deleteBuffer(f.buffer),i.delete(d))}function p(d,f){if(d.isGLBufferAttribute){const v=i.get(d);(!v||v.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=i.get(d);m===void 0?i.set(d,o(d,f)):m.version<d.version&&(a(m.buffer,d,f),m.version=d.version)}return{get:h,remove:c,update:p}}class qi extends ze{constructor(t=1,e=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:o};const a=t/2,h=e/2,c=Math.floor(i),p=Math.floor(o),d=c+1,f=p+1,m=t/c,v=e/p,b=[],w=[],x=[],g=[];for(let y=0;y<f;y++){const P=y*v-h;for(let A=0;A<d;A++){const R=A*m-a;w.push(R,-P,0),x.push(0,0,1),g.push(A/c),g.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<c;P++){const A=P+d*y,R=P+d*(y+1),T=P+1+d*(y+1),N=P+1+d*y;b.push(A,R,N),b.push(R,T,N)}this.setIndex(b),this.setAttribute("position",new Ee(w,3)),this.setAttribute("normal",new Ee(x,3)),this.setAttribute("uv",new Ee(g,2))}static fromJSON(t){return new qi(t.width,t.height,t.widthSegments,t.heightSegments)}}var _f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf="vec3 transformed = vec3( position );",Ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Tf=`#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Of=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,em=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,nm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,im=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,sm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,om=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,hm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,dm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pm=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,gm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_m=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Dm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$m=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Km=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,ag=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,lg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,cg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ug=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,hg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,pg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_g=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xg=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,wg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ag=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ig=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Og=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ug=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ot={alphamap_fragment:_f,alphamap_pars_fragment:xf,alphatest_fragment:bf,alphatest_pars_fragment:wf,aomap_fragment:yf,aomap_pars_fragment:Mf,begin_vertex:Sf,beginnormal_vertex:Ef,bsdfs:Cf,iridescence_fragment:Tf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:Rf,color_fragment:If,color_pars_fragment:Ff,color_pars_vertex:Nf,color_vertex:kf,common:Vf,cube_uv_reflection_fragment:Of,defaultnormal_vertex:Uf,displacementmap_pars_vertex:zf,displacementmap_vertex:Bf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,encodings_fragment:Wf,encodings_pars_fragment:jf,envmap_fragment:qf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:Yf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:om,envmap_vertex:Kf,fog_vertex:Zf,fog_pars_vertex:Jf,fog_fragment:Qf,fog_pars_fragment:tm,gradientmap_pars_fragment:em,lightmap_fragment:nm,lightmap_pars_fragment:im,lights_lambert_vertex:rm,lights_pars_begin:sm,lights_toon_fragment:am,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:um,lights_physical_fragment:hm,lights_physical_pars_fragment:dm,lights_fragment_begin:pm,lights_fragment_maps:fm,lights_fragment_end:mm,logdepthbuf_fragment:gm,logdepthbuf_pars_fragment:vm,logdepthbuf_pars_vertex:_m,logdepthbuf_vertex:xm,map_fragment:bm,map_pars_fragment:wm,map_particle_fragment:ym,map_particle_pars_fragment:Mm,metalnessmap_fragment:Sm,metalnessmap_pars_fragment:Em,morphcolor_vertex:Cm,morphnormal_vertex:Tm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Am,normal_fragment_begin:Lm,normal_fragment_maps:Dm,normal_pars_fragment:Rm,normal_pars_vertex:Im,normal_vertex:Fm,normalmap_pars_fragment:Nm,clearcoat_normal_fragment_begin:km,clearcoat_normal_fragment_maps:Vm,clearcoat_pars_fragment:Om,iridescence_pars_fragment:Um,output_fragment:zm,packing:Bm,premultiplied_alpha_fragment:Gm,project_vertex:Hm,dithering_fragment:Wm,dithering_pars_fragment:jm,roughnessmap_fragment:qm,roughnessmap_pars_fragment:Xm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:$m,shadowmap_vertex:Km,shadowmask_pars_fragment:Zm,skinbase_vertex:Jm,skinning_pars_vertex:Qm,skinning_vertex:tg,skinnormal_vertex:eg,specularmap_fragment:ng,specularmap_pars_fragment:ig,tonemapping_fragment:rg,tonemapping_pars_fragment:sg,transmission_fragment:og,transmission_pars_fragment:ag,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:ug,uv2_pars_fragment:hg,uv2_pars_vertex:dg,uv2_vertex:pg,worldpos_vertex:fg,background_vert:mg,background_frag:gg,cube_vert:vg,cube_frag:_g,depth_vert:xg,depth_frag:bg,distanceRGBA_vert:wg,distanceRGBA_frag:yg,equirect_vert:Mg,equirect_frag:Sg,linedashed_vert:Eg,linedashed_frag:Cg,meshbasic_vert:Tg,meshbasic_frag:Pg,meshlambert_vert:Ag,meshlambert_frag:Lg,meshmatcap_vert:Dg,meshmatcap_frag:Rg,meshnormal_vert:Ig,meshnormal_frag:Fg,meshphong_vert:Ng,meshphong_frag:kg,meshphysical_vert:Vg,meshphysical_frag:Og,meshtoon_vert:Ug,meshtoon_frag:zg,points_vert:Bg,points_frag:Gg,shadow_vert:Hg,shadow_frag:Wg,sprite_vert:jg,sprite_frag:qg},vt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Oe},uv2Transform:{value:new Oe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Oe}}},Ke={basic:{uniforms:fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:fe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:fe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:fe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:fe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:fe([vt.points,vt.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:fe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:fe([vt.common,vt.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:fe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:fe([vt.sprite,vt.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},cube:{uniforms:fe([vt.envmap,{opacity:{value:1}}]),vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:fe([vt.common,vt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:fe([vt.lights,vt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ke.physical={uniforms:fe([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};function Xg(u,t,e,i,o,a){const h=new Wt(0);let c=o===!0?0:1,p,d,f=null,m=0,v=null;function b(x,g){let y=!1,P=g.isScene===!0?g.background:null;P&&P.isTexture&&(P=t.get(P));const A=u.xr,R=A.getSession&&A.getSession();R&&R.environmentBlendMode==="additive"&&(P=null),P===null?w(h,c):P&&P.isColor&&(w(P,1),y=!0),(u.autoClear||y)&&u.clear(u.autoClearColor,u.autoClearDepth,u.autoClearStencil),P&&(P.isCubeTexture||P.mapping===as)?(d===void 0&&(d=new Ae(new Er(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Hi(Ke.cube.uniforms),vertexShader:Ke.cube.vertexShader,fragmentShader:Ke.cube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(T,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,(f!==P||m!==P.version||v!==u.toneMapping)&&(d.material.needsUpdate=!0,f=P,m=P.version,v=u.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Ae(new qi(2,2),new si({name:"BackgroundMaterial",uniforms:Hi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(p)),p.material.uniforms.t2D.value=P,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||m!==P.version||v!==u.toneMapping)&&(p.material.needsUpdate=!0,f=P,m=P.version,v=u.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function w(x,g){e.buffers.color.setClear(x.r,x.g,x.b,g,a)}return{getClearColor:function(){return h},setClearColor:function(x,g=1){h.set(x),c=g,w(h,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,w(h,c)},render:b}}function Yg(u,t,e,i){const o=u.getParameter(34921),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),h=i.isWebGL2||a!==null,c={},p=g(null);let d=p,f=!1;function m(z,Q,j,B,tt){let X=!1;if(h){const Z=x(B,j,Q);d!==Z&&(d=Z,b(d.object)),X=y(z,B,j,tt),X&&P(z,B,j,tt)}else{const Z=Q.wireframe===!0;(d.geometry!==B.id||d.program!==j.id||d.wireframe!==Z)&&(d.geometry=B.id,d.program=j.id,d.wireframe=Z,X=!0)}tt!==null&&e.update(tt,34963),(X||f)&&(f=!1,S(z,Q,j,B),tt!==null&&u.bindBuffer(34963,e.get(tt).buffer))}function v(){return i.isWebGL2?u.createVertexArray():a.createVertexArrayOES()}function b(z){return i.isWebGL2?u.bindVertexArray(z):a.bindVertexArrayOES(z)}function w(z){return i.isWebGL2?u.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function x(z,Q,j){const B=j.wireframe===!0;let tt=c[z.id];tt===void 0&&(tt={},c[z.id]=tt);let X=tt[Q.id];X===void 0&&(X={},tt[Q.id]=X);let Z=X[B];return Z===void 0&&(Z=g(v()),X[B]=Z),Z}function g(z){const Q=[],j=[],B=[];for(let tt=0;tt<o;tt++)Q[tt]=0,j[tt]=0,B[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:j,attributeDivisors:B,object:z,attributes:{},index:null}}function y(z,Q,j,B){const tt=d.attributes,X=Q.attributes;let Z=0;const nt=j.getAttributes();for(const rt in nt)if(nt[rt].location>=0){const ft=tt[rt];let xt=X[rt];if(xt===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(xt=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(xt=z.instanceColor)),ft===void 0||ft.attribute!==xt||xt&&ft.data!==xt.data)return!0;Z++}return d.attributesNum!==Z||d.index!==B}function P(z,Q,j,B){const tt={},X=Q.attributes;let Z=0;const nt=j.getAttributes();for(const rt in nt)if(nt[rt].location>=0){let ft=X[rt];ft===void 0&&(rt==="instanceMatrix"&&z.instanceMatrix&&(ft=z.instanceMatrix),rt==="instanceColor"&&z.instanceColor&&(ft=z.instanceColor));const xt={};xt.attribute=ft,ft&&ft.data&&(xt.data=ft.data),tt[rt]=xt,Z++}d.attributes=tt,d.attributesNum=Z,d.index=B}function A(){const z=d.newAttributes;for(let Q=0,j=z.length;Q<j;Q++)z[Q]=0}function R(z){T(z,0)}function T(z,Q){const j=d.newAttributes,B=d.enabledAttributes,tt=d.attributeDivisors;j[z]=1,B[z]===0&&(u.enableVertexAttribArray(z),B[z]=1),tt[z]!==Q&&((i.isWebGL2?u:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,Q),tt[z]=Q)}function N(){const z=d.newAttributes,Q=d.enabledAttributes;for(let j=0,B=Q.length;j<B;j++)Q[j]!==z[j]&&(u.disableVertexAttribArray(j),Q[j]=0)}function O(z,Q,j,B,tt,X){i.isWebGL2===!0&&(j===5124||j===5125)?u.vertexAttribIPointer(z,Q,j,tt,X):u.vertexAttribPointer(z,Q,j,B,tt,X)}function S(z,Q,j,B){if(i.isWebGL2===!1&&(z.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;A();const tt=B.attributes,X=j.getAttributes(),Z=Q.defaultAttributeValues;for(const nt in X){const rt=X[nt];if(rt.location>=0){let J=tt[nt];if(J===void 0&&(nt==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),nt==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),J!==void 0){const ft=J.normalized,xt=J.itemSize,$=e.get(J);if($===void 0)continue;const Zt=$.buffer,Rt=$.type,St=$.bytesPerElement;if(J.isInterleavedBufferAttribute){const mt=J.data,Ut=mt.stride,Nt=J.offset;if(mt.isInstancedInterleavedBuffer){for(let yt=0;yt<rt.locationSize;yt++)T(rt.location+yt,mt.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let yt=0;yt<rt.locationSize;yt++)R(rt.location+yt);u.bindBuffer(34962,Zt);for(let yt=0;yt<rt.locationSize;yt++)O(rt.location+yt,xt/rt.locationSize,Rt,ft,Ut*St,(Nt+xt/rt.locationSize*yt)*St)}else{if(J.isInstancedBufferAttribute){for(let mt=0;mt<rt.locationSize;mt++)T(rt.location+mt,J.meshPerAttribute);z.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let mt=0;mt<rt.locationSize;mt++)R(rt.location+mt);u.bindBuffer(34962,Zt);for(let mt=0;mt<rt.locationSize;mt++)O(rt.location+mt,xt/rt.locationSize,Rt,ft,xt*St,xt/rt.locationSize*mt*St)}}else if(Z!==void 0){const ft=Z[nt];if(ft!==void 0)switch(ft.length){case 2:u.vertexAttrib2fv(rt.location,ft);break;case 3:u.vertexAttrib3fv(rt.location,ft);break;case 4:u.vertexAttrib4fv(rt.location,ft);break;default:u.vertexAttrib1fv(rt.location,ft)}}}}N()}function I(){pt();for(const z in c){const Q=c[z];for(const j in Q){const B=Q[j];for(const tt in B)w(B[tt].object),delete B[tt];delete Q[j]}delete c[z]}}function G(z){if(c[z.id]===void 0)return;const Q=c[z.id];for(const j in Q){const B=Q[j];for(const tt in B)w(B[tt].object),delete B[tt];delete Q[j]}delete c[z.id]}function H(z){for(const Q in c){const j=c[Q];if(j[z.id]===void 0)continue;const B=j[z.id];for(const tt in B)w(B[tt].object),delete B[tt];delete j[z.id]}}function pt(){ot(),f=!0,d!==p&&(d=p,b(d.object))}function ot(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:m,reset:pt,resetDefaultState:ot,dispose:I,releaseStatesOfGeometry:G,releaseStatesOfProgram:H,initAttributes:A,enableAttribute:R,disableUnusedAttributes:N}}function $g(u,t,e,i){const o=i.isWebGL2;let a;function h(d){a=d}function c(d,f){u.drawArrays(a,d,f),e.update(f,a,1)}function p(d,f,m){if(m===0)return;let v,b;if(o)v=u,b="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[b](a,d,f,m),e.update(f,a,m)}this.setMode=h,this.render=c,this.renderInstances=p}function Kg(u,t,e){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");i=u.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(O){if(O==="highp"){if(u.getShaderPrecisionFormat(35633,36338).precision>0&&u.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&u.getShaderPrecisionFormat(35633,36337).precision>0&&u.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext!="undefined"&&u instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&u instanceof WebGL2ComputeRenderingContext;let c=e.precision!==void 0?e.precision:"highp";const p=a(c);p!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const d=h||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,m=u.getParameter(34930),v=u.getParameter(35660),b=u.getParameter(3379),w=u.getParameter(34076),x=u.getParameter(34921),g=u.getParameter(36347),y=u.getParameter(36348),P=u.getParameter(36349),A=v>0,R=h||t.has("OES_texture_float"),T=A&&R,N=h?u.getParameter(36183):0;return{isWebGL2:h,drawBuffers:d,getMaxAnisotropy:o,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:w,maxAttributes:x,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:P,vertexTextures:A,floatFragmentTextures:R,floatVertexTextures:T,maxSamples:N}}function Zg(u){const t=this;let e=null,i=0,o=!1,a=!1;const h=new Xn,c=new Oe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v,b){const w=m.length!==0||v||i!==0||o;return o=v,e=f(m,b,0),i=m.length,w},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1,d()},this.setState=function(m,v,b){const w=m.clippingPlanes,x=m.clipIntersection,g=m.clipShadows,y=u.get(m);if(!o||w===null||w.length===0||a&&!g)a?f(null):d();else{const P=a?0:i,A=P*4;let R=y.clippingState||null;p.value=R,R=f(w,v,A,b);for(let T=0;T!==A;++T)R[T]=e[T];y.clippingState=R,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=P}};function d(){p.value!==e&&(p.value=e,p.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(m,v,b,w){const x=m!==null?m.length:0;let g=null;if(x!==0){if(g=p.value,w!==!0||g===null){const y=b+x*4,P=v.matrixWorldInverse;c.getNormalMatrix(P),(g===null||g.length<y)&&(g=new Float32Array(y));for(let A=0,R=b;A!==x;++A,R+=4)h.copy(m[A]).applyMatrix4(P,c),h.normal.toArray(g,R),g[R+3]=h.constant}p.value=g,p.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Jg(u){let t=new WeakMap;function e(h,c){return c===Eo?h.mapping=zi:c===Co&&(h.mapping=Bi),h}function i(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const c=h.mapping;if(c===Eo||c===Co)if(t.has(h)){const p=t.get(h).texture;return e(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const d=new ff(p.height/2);return d.fromEquirectangularTexture(u,h),t.set(h,d),h.addEventListener("dispose",o),e(d.texture,h.mapping)}else return null}}return h}function o(h){const c=h.target;c.removeEventListener("dispose",o);const p=t.get(c);p!==void 0&&(t.delete(c),p.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Uc extends kc{constructor(t=-1,e=1,i=1,o=-1,a=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=o,this.near=a,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,o,a,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-t,h=i+t,c=o+e,p=o-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,h=a+d*this.view.width,c-=f*this.view.offsetY,p=c-f*this.view.height}this.projectionMatrix.makeOrthographic(a,h,c,p,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Vi=4,Ol=[.125,.215,.35,.446,.526,.582],$n=20,vo=new Uc,Ul=new Wt;let _o=null;const Yn=(1+Math.sqrt(5))/2,Fi=1/Yn,zl=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Yn,Fi),new k(0,Yn,-Fi),new k(Fi,0,Yn),new k(-Fi,0,Yn),new k(Yn,Fi,0),new k(-Yn,Fi,0)];class Bl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,o=100){_o=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,o,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_o),t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_o=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:vr,format:Je,encoding:ni,depthBuffer:!1},o=Gl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(a)),this._blurMaterial=tv(a,t,e)}return o}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,vo)}_sceneToCubeUV(t,e,i,o){const c=new Ve(90,1,e,i),p=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,v=f.toneMapping;f.getClearColor(Ul),f.toneMapping=pn,f.autoClear=!1;const b=new No({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),w=new Ae(new Er,b);let x=!1;const g=t.background;g?g.isColor&&(b.color.copy(g),t.background=null,x=!0):(b.color.copy(Ul),x=!0);for(let y=0;y<6;y++){const P=y%3;P===0?(c.up.set(0,p[y],0),c.lookAt(d[y],0,0)):P===1?(c.up.set(0,0,p[y]),c.lookAt(0,d[y],0)):(c.up.set(0,p[y],0),c.lookAt(0,0,d[y]));const A=this._cubeSize;is(o,P*A,y>2?A:0,A,A),f.setRenderTarget(o),x&&f.render(w,c),f.render(t,c)}w.geometry.dispose(),w.material.dispose(),f.toneMapping=v,f.autoClear=m,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,o=t.mapping===zi||t.mapping===Bi;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const a=o?this._cubemapMaterial:this._equirectMaterial,h=new Ae(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=t;const p=this._cubeSize;is(e,0,0,3*p,2*p),i.setRenderTarget(e),i.render(h,vo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),h=zl[(o-1)%zl.length];this._blur(t,o-1,o,a,h)}e.autoClear=i}_blur(t,e,i,o,a){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,o,"latitudinal",a),this._halfBlur(h,t,i,i,o,"longitudinal",a)}_halfBlur(t,e,i,o,a,h,c){const p=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new Ae(this._lodPlanes[o],d),v=d.uniforms,b=this._sizeLods[i]-1,w=isFinite(a)?Math.PI/(2*b):2*Math.PI/(2*$n-1),x=a/w,g=isFinite(a)?1+Math.floor(f*x):$n;g>$n&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${$n}`);const y=[];let P=0;for(let O=0;O<$n;++O){const S=O/x,I=Math.exp(-S*S/2);y.push(I),O===0?P+=I:O<g&&(P+=2*I)}for(let O=0;O<y.length;O++)y[O]=y[O]/P;v.envMap.value=t.texture,v.samples.value=g,v.weights.value=y,v.latitudinal.value=h==="latitudinal",c&&(v.poleAxis.value=c);const{_lodMax:A}=this;v.dTheta.value=w,v.mipInt.value=A-i;const R=this._sizeLods[o],T=3*R*(o>A-Vi?o-A+Vi:0),N=4*(this._cubeSize-R);is(e,T,N,3*R,2*R),p.setRenderTarget(e),p.render(m,vo)}}function Qg(u){const t=[],e=[],i=[];let o=u;const a=u-Vi+1+Ol.length;for(let h=0;h<a;h++){const c=Math.pow(2,o);e.push(c);let p=1/c;h>u-Vi?p=Ol[h-u+Vi-1]:h===0&&(p=0),i.push(p);const d=1/(c-2),f=-d,m=1+d,v=[f,f,m,f,m,m,f,f,m,m,f,m],b=6,w=6,x=3,g=2,y=1,P=new Float32Array(x*w*b),A=new Float32Array(g*w*b),R=new Float32Array(y*w*b);for(let N=0;N<b;N++){const O=N%3*2/3-1,S=N>2?0:-1,I=[O,S,0,O+2/3,S,0,O+2/3,S+1,0,O,S,0,O+2/3,S+1,0,O,S+1,0];P.set(I,x*w*N),A.set(v,g*w*N);const G=[N,N,N,N,N,N];R.set(G,y*w*N)}const T=new ze;T.setAttribute("position",new Se(P,x)),T.setAttribute("uv",new Se(A,g)),T.setAttribute("faceIndex",new Se(R,y)),t.push(T),o>Vi&&o--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Gl(u,t,e){const i=new ii(u,t,e);return i.texture.mapping=as,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(u,t,e,i,o){u.viewport.set(t,e,i,o),u.scissor.set(t,e,i,o)}function tv(u,t,e){const i=new Float32Array($n),o=new k(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${u}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Hl(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Wl(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Vo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ev(u){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){const p=c.mapping,d=p===Eo||p===Co,f=p===zi||p===Bi;if(d||f)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let m=t.get(c);return e===null&&(e=new Bl(u)),m=d?e.fromEquirectangular(c,m):e.fromCubemap(c,m),t.set(c,m),m.texture}else{if(t.has(c))return t.get(c).texture;{const m=c.image;if(d&&m&&m.height>0||f&&m&&o(m)){e===null&&(e=new Bl(u));const v=d?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,v),c.addEventListener("dispose",a),v.texture}else return null}}}return c}function o(c){let p=0;const d=6;for(let f=0;f<d;f++)c[f]!==void 0&&p++;return p===d}function a(c){const p=c.target;p.removeEventListener("dispose",a);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function nv(u){const t={};function e(i){if(t[i]!==void 0)return t[i];let o;switch(i){case"WEBGL_depth_texture":o=u.getExtension("WEBGL_depth_texture")||u.getExtension("MOZ_WEBGL_depth_texture")||u.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=u.getExtension("EXT_texture_filter_anisotropic")||u.getExtension("MOZ_EXT_texture_filter_anisotropic")||u.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=u.getExtension("WEBGL_compressed_texture_s3tc")||u.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=u.getExtension("WEBGL_compressed_texture_pvrtc")||u.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=u.getExtension(i)}return t[i]=o,o}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const o=e(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function iv(u,t,e,i){const o={},a=new WeakMap;function h(m){const v=m.target;v.index!==null&&t.remove(v.index);for(const w in v.attributes)t.remove(v.attributes[w]);v.removeEventListener("dispose",h),delete o[v.id];const b=a.get(v);b&&(t.remove(b),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function c(m,v){return o[v.id]===!0||(v.addEventListener("dispose",h),o[v.id]=!0,e.memory.geometries++),v}function p(m){const v=m.attributes;for(const w in v)t.update(v[w],34962);const b=m.morphAttributes;for(const w in b){const x=b[w];for(let g=0,y=x.length;g<y;g++)t.update(x[g],34962)}}function d(m){const v=[],b=m.index,w=m.attributes.position;let x=0;if(b!==null){const P=b.array;x=b.version;for(let A=0,R=P.length;A<R;A+=3){const T=P[A+0],N=P[A+1],O=P[A+2];v.push(T,N,N,O,O,T)}}else{const P=w.array;x=w.version;for(let A=0,R=P.length/3-1;A<R;A+=3){const T=A+0,N=A+1,O=A+2;v.push(T,N,N,O,O,T)}}const g=new(Tc(v)?Nc:Fc)(v,1);g.version=x;const y=a.get(m);y&&t.remove(y),a.set(m,g)}function f(m){const v=a.get(m);if(v){const b=m.index;b!==null&&v.version<b.version&&d(m)}else d(m);return a.get(m)}return{get:c,update:p,getWireframeAttribute:f}}function rv(u,t,e,i){const o=i.isWebGL2;let a;function h(v){a=v}let c,p;function d(v){c=v.type,p=v.bytesPerElement}function f(v,b){u.drawElements(a,b,c,v*p),e.update(b,a,1)}function m(v,b,w){if(w===0)return;let x,g;if(o)x=u,g="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](a,b,c,v*p,w),e.update(b,a,w)}this.setMode=h,this.setIndex=d,this.render=f,this.renderInstances=m}function sv(u){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,h,c){switch(e.calls++,h){case 4:e.triangles+=c*(a/3);break;case 1:e.lines+=c*(a/2);break;case 3:e.lines+=c*(a-1);break;case 2:e.lines+=c*a;break;case 0:e.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function o(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:i}}function ov(u,t){return u[0]-t[0]}function av(u,t){return Math.abs(t[1])-Math.abs(u[1])}function xo(u,t){let e=1;const i=t.isInterleavedBufferAttribute?t.data.array:t.array;i instanceof Int8Array?e=127:i instanceof Uint8Array?e=255:i instanceof Uint16Array?e=65535:i instanceof Int16Array?e=32767:i instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),u.divideScalar(e)}function lv(u,t,e){const i={},o=new Float32Array(8),a=new WeakMap,h=new ce,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function p(d,f,m,v){const b=d.morphTargetInfluences;if(t.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=x!==void 0?x.length:0;let y=a.get(f);if(y===void 0||y.count!==g){let j=function(){z.dispose(),a.delete(f),f.removeEventListener("dispose",j)};var w=j;y!==void 0&&y.texture.dispose();const R=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,N=f.morphAttributes.color!==void 0,O=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let G=0;R===!0&&(G=1),T===!0&&(G=2),N===!0&&(G=3);let H=f.attributes.position.count*G,pt=1;H>t.maxTextureSize&&(pt=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const ot=new Float32Array(H*pt*4*g),z=new Dc(ot,H,pt,g);z.type=Zn,z.needsUpdate=!0;const Q=G*4;for(let B=0;B<g;B++){const tt=O[B],X=S[B],Z=I[B],nt=H*pt*4*B;for(let rt=0;rt<tt.count;rt++){const J=rt*Q;R===!0&&(h.fromBufferAttribute(tt,rt),tt.normalized===!0&&xo(h,tt),ot[nt+J+0]=h.x,ot[nt+J+1]=h.y,ot[nt+J+2]=h.z,ot[nt+J+3]=0),T===!0&&(h.fromBufferAttribute(X,rt),X.normalized===!0&&xo(h,X),ot[nt+J+4]=h.x,ot[nt+J+5]=h.y,ot[nt+J+6]=h.z,ot[nt+J+7]=0),N===!0&&(h.fromBufferAttribute(Z,rt),Z.normalized===!0&&xo(h,Z),ot[nt+J+8]=h.x,ot[nt+J+9]=h.y,ot[nt+J+10]=h.z,ot[nt+J+11]=Z.itemSize===4?h.w:1)}}y={count:g,texture:z,size:new Lt(H,pt)},a.set(f,y),f.addEventListener("dispose",j)}let P=0;for(let R=0;R<b.length;R++)P+=b[R];const A=f.morphTargetsRelative?1:1-P;v.getUniforms().setValue(u,"morphTargetBaseInfluence",A),v.getUniforms().setValue(u,"morphTargetInfluences",b),v.getUniforms().setValue(u,"morphTargetsTexture",y.texture,e),v.getUniforms().setValue(u,"morphTargetsTextureSize",y.size)}else{const x=b===void 0?0:b.length;let g=i[f.id];if(g===void 0||g.length!==x){g=[];for(let T=0;T<x;T++)g[T]=[T,0];i[f.id]=g}for(let T=0;T<x;T++){const N=g[T];N[0]=T,N[1]=b[T]}g.sort(av);for(let T=0;T<8;T++)T<x&&g[T][1]?(c[T][0]=g[T][0],c[T][1]=g[T][1]):(c[T][0]=Number.MAX_SAFE_INTEGER,c[T][1]=0);c.sort(ov);const y=f.morphAttributes.position,P=f.morphAttributes.normal;let A=0;for(let T=0;T<8;T++){const N=c[T],O=N[0],S=N[1];O!==Number.MAX_SAFE_INTEGER&&S?(y&&f.getAttribute("morphTarget"+T)!==y[O]&&f.setAttribute("morphTarget"+T,y[O]),P&&f.getAttribute("morphNormal"+T)!==P[O]&&f.setAttribute("morphNormal"+T,P[O]),o[T]=S,A+=S):(y&&f.hasAttribute("morphTarget"+T)===!0&&f.deleteAttribute("morphTarget"+T),P&&f.hasAttribute("morphNormal"+T)===!0&&f.deleteAttribute("morphNormal"+T),o[T]=0)}const R=f.morphTargetsRelative?1:1-A;v.getUniforms().setValue(u,"morphTargetBaseInfluence",R),v.getUniforms().setValue(u,"morphTargetInfluences",o)}}return{update:p}}function cv(u,t,e,i){let o=new WeakMap;function a(p){const d=i.render.frame,f=p.geometry,m=t.get(p,f);return o.get(m)!==d&&(t.update(m),o.set(m,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",c)===!1&&p.addEventListener("dispose",c),e.update(p.instanceMatrix,34962),p.instanceColor!==null&&e.update(p.instanceColor,34962)),m}function h(){o=new WeakMap}function c(p){const d=p.target;d.removeEventListener("dispose",c),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:h}}const zc=new Ue,Bc=new Dc,Gc=new Jp,Hc=new Vc,jl=[],ql=[],Xl=new Float32Array(16),Yl=new Float32Array(9),$l=new Float32Array(4);function Xi(u,t,e){const i=u[0];if(i<=0||i>0)return u;const o=t*e;let a=jl[o];if(a===void 0&&(a=new Float32Array(o),jl[o]=a),t!==0){i.toArray(a,0);for(let h=1,c=0;h!==t;++h)c+=e,u[h].toArray(a,c)}return a}function xe(u,t){if(u.length!==t.length)return!1;for(let e=0,i=u.length;e<i;e++)if(u[e]!==t[e])return!1;return!0}function be(u,t){for(let e=0,i=t.length;e<i;e++)u[e]=t[e]}function us(u,t){let e=ql[t];e===void 0&&(e=new Int32Array(t),ql[t]=e);for(let i=0;i!==t;++i)e[i]=u.allocateTextureUnit();return e}function uv(u,t){const e=this.cache;e[0]!==t&&(u.uniform1f(this.addr,t),e[0]=t)}function hv(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(u.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;u.uniform2fv(this.addr,t),be(e,t)}}function dv(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(u.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(u.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;u.uniform3fv(this.addr,t),be(e,t)}}function pv(u,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(u.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;u.uniform4fv(this.addr,t),be(e,t)}}function fv(u,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;u.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(xe(e,i))return;$l.set(i),u.uniformMatrix2fv(this.addr,!1,$l),be(e,i)}}function mv(u,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;u.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(xe(e,i))return;Yl.set(i),u.uniformMatrix3fv(this.addr,!1,Yl),be(e,i)}}function gv(u,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;u.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(xe(e,i))return;Xl.set(i),u.uniformMatrix4fv(this.addr,!1,Xl),be(e,i)}}function vv(u,t){const e=this.cache;e[0]!==t&&(u.uniform1i(this.addr,t),e[0]=t)}function _v(u,t){const e=this.cache;xe(e,t)||(u.uniform2iv(this.addr,t),be(e,t))}function xv(u,t){const e=this.cache;xe(e,t)||(u.uniform3iv(this.addr,t),be(e,t))}function bv(u,t){const e=this.cache;xe(e,t)||(u.uniform4iv(this.addr,t),be(e,t))}function wv(u,t){const e=this.cache;e[0]!==t&&(u.uniform1ui(this.addr,t),e[0]=t)}function yv(u,t){const e=this.cache;xe(e,t)||(u.uniform2uiv(this.addr,t),be(e,t))}function Mv(u,t){const e=this.cache;xe(e,t)||(u.uniform3uiv(this.addr,t),be(e,t))}function Sv(u,t){const e=this.cache;xe(e,t)||(u.uniform4uiv(this.addr,t),be(e,t))}function Ev(u,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(u.uniform1i(this.addr,o),i[0]=o),e.setTexture2D(t||zc,o)}function Cv(u,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(u.uniform1i(this.addr,o),i[0]=o),e.setTexture3D(t||Gc,o)}function Tv(u,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(u.uniform1i(this.addr,o),i[0]=o),e.setTextureCube(t||Hc,o)}function Pv(u,t,e){const i=this.cache,o=e.allocateTextureUnit();i[0]!==o&&(u.uniform1i(this.addr,o),i[0]=o),e.setTexture2DArray(t||Bc,o)}function Av(u){switch(u){case 5126:return uv;case 35664:return hv;case 35665:return dv;case 35666:return pv;case 35674:return fv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return _v;case 35668:case 35672:return xv;case 35669:case 35673:return bv;case 5125:return wv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Lv(u,t){u.uniform1fv(this.addr,t)}function Dv(u,t){const e=Xi(t,this.size,2);u.uniform2fv(this.addr,e)}function Rv(u,t){const e=Xi(t,this.size,3);u.uniform3fv(this.addr,e)}function Iv(u,t){const e=Xi(t,this.size,4);u.uniform4fv(this.addr,e)}function Fv(u,t){const e=Xi(t,this.size,4);u.uniformMatrix2fv(this.addr,!1,e)}function Nv(u,t){const e=Xi(t,this.size,9);u.uniformMatrix3fv(this.addr,!1,e)}function kv(u,t){const e=Xi(t,this.size,16);u.uniformMatrix4fv(this.addr,!1,e)}function Vv(u,t){u.uniform1iv(this.addr,t)}function Ov(u,t){u.uniform2iv(this.addr,t)}function Uv(u,t){u.uniform3iv(this.addr,t)}function zv(u,t){u.uniform4iv(this.addr,t)}function Bv(u,t){u.uniform1uiv(this.addr,t)}function Gv(u,t){u.uniform2uiv(this.addr,t)}function Hv(u,t){u.uniform3uiv(this.addr,t)}function Wv(u,t){u.uniform4uiv(this.addr,t)}function jv(u,t,e){const i=t.length,o=us(e,i);u.uniform1iv(this.addr,o);for(let a=0;a!==i;++a)e.setTexture2D(t[a]||zc,o[a])}function qv(u,t,e){const i=t.length,o=us(e,i);u.uniform1iv(this.addr,o);for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Gc,o[a])}function Xv(u,t,e){const i=t.length,o=us(e,i);u.uniform1iv(this.addr,o);for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Hc,o[a])}function Yv(u,t,e){const i=t.length,o=us(e,i);u.uniform1iv(this.addr,o);for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Bc,o[a])}function $v(u){switch(u){case 5126:return Lv;case 35664:return Dv;case 35665:return Rv;case 35666:return Iv;case 35674:return Fv;case 35675:return Nv;case 35676:return kv;case 5124:case 35670:return Vv;case 35667:case 35671:return Ov;case 35668:case 35672:return Uv;case 35669:case 35673:return zv;case 5125:return Bv;case 36294:return Gv;case 36295:return Hv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return jv;case 35679:case 36299:case 36307:return qv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return Yv}}class Kv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Av(e.type)}}class Zv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=$v(e.type)}}class Jv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const o=this.seq;for(let a=0,h=o.length;a!==h;++a){const c=o[a];c.setValue(t,e[c.id],i)}}}const bo=/(\w+)(\])?(\[|\.)?/g;function Kl(u,t){u.seq.push(t),u.map[t.id]=t}function Qv(u,t,e){const i=u.name,o=i.length;for(bo.lastIndex=0;;){const a=bo.exec(i),h=bo.lastIndex;let c=a[1];const p=a[2]==="]",d=a[3];if(p&&(c=c|0),d===void 0||d==="["&&h+2===o){Kl(e,d===void 0?new Kv(c,u,t):new Zv(c,u,t));break}else{let m=e.map[c];m===void 0&&(m=new Jv(c),Kl(e,m)),e=m}}}class os{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),h=t.getUniformLocation(e,a.name);Qv(a,h,this)}}setValue(t,e,i,o){const a=this.map[e];a!==void 0&&a.setValue(t,i,o)}setOptional(t,e,i){const o=e[i];o!==void 0&&this.setValue(t,i,o)}static upload(t,e,i,o){for(let a=0,h=e.length;a!==h;++a){const c=e[a],p=i[c.id];p.needsUpdate!==!1&&c.setValue(t,p.value,o)}}static seqWithValue(t,e){const i=[];for(let o=0,a=t.length;o!==a;++o){const h=t[o];h.id in e&&i.push(h)}return i}}function Zl(u,t,e){const i=u.createShader(t);return u.shaderSource(i,e),u.compileShader(i),i}let t_=0;function e_(u,t){const e=u.split(`
`),i=[],o=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let h=o;h<a;h++){const c=h+1;i.push(`${c===t?">":" "} ${c}: ${e[h]}`)}return i.join(`
`)}function n_(u){switch(u){case ni:return["Linear","( value )"];case Qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}}function Jl(u,t,e){const i=u.getShaderParameter(t,35713),o=u.getShaderInfoLog(t).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const h=parseInt(a[1]);return e.toUpperCase()+`

`+o+`

`+e_(u.getShaderSource(t),h)}else return o}function i_(u,t){const e=n_(t);return"vec4 "+u+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function r_(u,t){let e;switch(t){case Ep:e="Linear";break;case Cp:e="Reinhard";break;case Tp:e="OptimizedCineon";break;case Pp:e="ACESFilmic";break;case Ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+u+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function s_(u){return[u.extensionDerivatives||!!u.envMapCubeUVHeight||u.bumpMap||u.tangentSpaceNormalMap||u.clearcoatNormalMap||u.flatShading||u.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(u.extensionFragDepth||u.logarithmicDepthBuffer)&&u.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",u.extensionDrawBuffers&&u.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(u.extensionShaderTextureLOD||u.envMap||u.transmission)&&u.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function o_(u){const t=[];for(const e in u){const i=u[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function a_(u,t){const e={},i=u.getProgramParameter(t,35721);for(let o=0;o<i;o++){const a=u.getActiveAttrib(t,o),h=a.name;let c=1;a.type===35674&&(c=2),a.type===35675&&(c=3),a.type===35676&&(c=4),e[h]={type:a.type,location:u.getAttribLocation(t,h),locationSize:c}}return e}function pr(u){return u!==""}function Ql(u,t){return u.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tc(u,t){return u.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(u){return u.replace(l_,c_)}function c_(u,t){const e=Ot[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Do(e)}const u_=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(u){return u.replace(h_,Wc).replace(u_,d_)}function d_(u,t,e,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Wc(u,t,e,i)}function Wc(u,t,e,i){let o="";for(let a=parseInt(t);a<parseInt(e);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function nc(u){let t="precision "+u.precision+` float;
precision `+u.precision+" int;";return u.precision==="highp"?t+=`
#define HIGH_PRECISION`:u.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:u.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function p_(u){let t="SHADOWMAP_TYPE_BASIC";return u.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF":u.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF_SOFT":u.shadowMapType===dr&&(t="SHADOWMAP_TYPE_VSM"),t}function f_(u){let t="ENVMAP_TYPE_CUBE";if(u.envMap)switch(u.envMapMode){case zi:case Bi:t="ENVMAP_TYPE_CUBE";break;case as:t="ENVMAP_TYPE_CUBE_UV";break}return t}function m_(u){let t="ENVMAP_MODE_REFLECTION";if(u.envMap)switch(u.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function g_(u){let t="ENVMAP_BLENDING_NONE";if(u.envMap)switch(u.combine){case Mc:t="ENVMAP_BLENDING_MULTIPLY";break;case Mp:t="ENVMAP_BLENDING_MIX";break;case Sp:t="ENVMAP_BLENDING_ADD";break}return t}function v_(u){const t=u.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function __(u,t,e,i){const o=u.getContext(),a=e.defines;let h=e.vertexShader,c=e.fragmentShader;const p=p_(e),d=f_(e),f=m_(e),m=g_(e),v=v_(e),b=e.isWebGL2?"":s_(e),w=o_(a),x=o.createProgram();let g,y,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[w].filter(pr).join(`
`),g.length>0&&(g+=`
`),y=[b,w].filter(pr).join(`
`),y.length>0&&(y+=`
`)):(g=[nc(e),"#define SHADER_NAME "+e.shaderName,w,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),y=[b,nc(e),"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+p:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==pn?r_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.encodings_pars_fragment,i_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),h=Do(h),h=Ql(h,e),h=tc(h,e),c=Do(c),c=Ql(c,e),c=tc(c,e),h=ec(h),c=ec(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const A=P+g+h,R=P+y+c,T=Zl(o,35633,A),N=Zl(o,35632,R);if(o.attachShader(x,T),o.attachShader(x,N),e.index0AttributeName!==void 0?o.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(x,0,"position"),o.linkProgram(x),u.debug.checkShaderErrors){const I=o.getProgramInfoLog(x).trim(),G=o.getShaderInfoLog(T).trim(),H=o.getShaderInfoLog(N).trim();let pt=!0,ot=!0;if(o.getProgramParameter(x,35714)===!1){pt=!1;const z=Jl(o,T,"vertex"),Q=Jl(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(x,35715)+`

Program Info Log: `+I+`
`+z+`
`+Q)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(G===""||H==="")&&(ot=!1);ot&&(this.diagnostics={runnable:pt,programLog:I,vertexShader:{log:G,prefix:g},fragmentShader:{log:H,prefix:y}})}o.deleteShader(T),o.deleteShader(N);let O;this.getUniforms=function(){return O===void 0&&(O=new os(o,x)),O};let S;return this.getAttributes=function(){return S===void 0&&(S=a_(o,x)),S},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(x),this.program=void 0},this.name=e.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=N,this}let x_=0;class b_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,o=this._getShaderStage(e),a=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(a)===!1&&(h.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const i=new w_(t);e.set(t,i)}return e.get(t)}}class w_{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}}function y_(u,t,e,i,o,a,h){const c=new Ic,p=new b_,d=[],f=o.isWebGL2,m=o.logarithmicDepthBuffer,v=o.vertexTextures;let b=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S,I,G,H,pt){const ot=H.fog,z=pt.geometry,Q=S.isMeshStandardMaterial?H.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||Q),B=!!j&&j.mapping===as?j.image.height:null,tt=w[S.type];S.precision!==null&&(b=o.getMaxPrecision(S.precision),b!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",b,"instead."));const X=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Z=X!==void 0?X.length:0;let nt=0;z.morphAttributes.position!==void 0&&(nt=1),z.morphAttributes.normal!==void 0&&(nt=2),z.morphAttributes.color!==void 0&&(nt=3);let rt,J,ft,xt;if(tt){const Ut=Ke[tt];rt=Ut.vertexShader,J=Ut.fragmentShader}else rt=S.vertexShader,J=S.fragmentShader,p.update(S),ft=p.getVertexShaderID(S),xt=p.getFragmentShaderID(S);const $=u.getRenderTarget(),Zt=S.alphaTest>0,Rt=S.clearcoat>0,St=S.iridescence>0;return{isWebGL2:f,shaderID:tt,shaderName:S.type,vertexShader:rt,fragmentShader:J,defines:S.defines,customVertexShaderID:ft,customFragmentShaderID:xt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:b,instancing:pt.isInstancedMesh===!0,instancingColor:pt.isInstancedMesh===!0&&pt.instanceColor!==null,supportsVertexTextures:v,outputEncoding:$===null?u.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:ni,map:!!S.map,matcap:!!S.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:B,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Yp,tangentSpaceNormalMap:S.normalMapType===Cc,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Qt,clearcoat:Rt,clearcoatMap:Rt&&!!S.clearcoatMap,clearcoatRoughnessMap:Rt&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:Rt&&!!S.clearcoatNormalMap,iridescence:St,iridescenceMap:St&&!!S.iridescenceMap,iridescenceThicknessMap:St&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Oi,alphaMap:!!S.alphaMap,alphaTest:Zt,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!z.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!ot,useFog:S.fog===!0,fogExp2:ot&&ot.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:m,skinning:pt.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:nt,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:S.dithering,shadowMapEnabled:u.shadowMap.enabled&&G.length>0,shadowMapType:u.shadowMap.type,toneMapping:S.toneMapped?u.toneMapping:pn,physicallyCorrectLights:u.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Rn,flipSided:S.side===Xe,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function g(S){const I=[];if(S.shaderID?I.push(S.shaderID):(I.push(S.customVertexShaderID),I.push(S.customFragmentShaderID)),S.defines!==void 0)for(const G in S.defines)I.push(G),I.push(S.defines[G]);return S.isRawShaderMaterial===!1&&(y(I,S),P(I,S),I.push(u.outputEncoding)),I.push(S.customProgramCacheKey),I.join()}function y(S,I){S.push(I.precision),S.push(I.outputEncoding),S.push(I.envMapMode),S.push(I.envMapCubeUVHeight),S.push(I.combine),S.push(I.vertexUvs),S.push(I.fogExp2),S.push(I.sizeAttenuation),S.push(I.morphTargetsCount),S.push(I.morphAttributeCount),S.push(I.numDirLights),S.push(I.numPointLights),S.push(I.numSpotLights),S.push(I.numHemiLights),S.push(I.numRectAreaLights),S.push(I.numDirLightShadows),S.push(I.numPointLightShadows),S.push(I.numSpotLightShadows),S.push(I.shadowMapType),S.push(I.toneMapping),S.push(I.numClippingPlanes),S.push(I.numClipIntersection),S.push(I.depthPacking)}function P(S,I){c.disableAll(),I.isWebGL2&&c.enable(0),I.supportsVertexTextures&&c.enable(1),I.instancing&&c.enable(2),I.instancingColor&&c.enable(3),I.map&&c.enable(4),I.matcap&&c.enable(5),I.envMap&&c.enable(6),I.lightMap&&c.enable(7),I.aoMap&&c.enable(8),I.emissiveMap&&c.enable(9),I.bumpMap&&c.enable(10),I.normalMap&&c.enable(11),I.objectSpaceNormalMap&&c.enable(12),I.tangentSpaceNormalMap&&c.enable(13),I.clearcoat&&c.enable(14),I.clearcoatMap&&c.enable(15),I.clearcoatRoughnessMap&&c.enable(16),I.clearcoatNormalMap&&c.enable(17),I.iridescence&&c.enable(18),I.iridescenceMap&&c.enable(19),I.iridescenceThicknessMap&&c.enable(20),I.displacementMap&&c.enable(21),I.specularMap&&c.enable(22),I.roughnessMap&&c.enable(23),I.metalnessMap&&c.enable(24),I.gradientMap&&c.enable(25),I.alphaMap&&c.enable(26),I.alphaTest&&c.enable(27),I.vertexColors&&c.enable(28),I.vertexAlphas&&c.enable(29),I.vertexUvs&&c.enable(30),I.vertexTangents&&c.enable(31),I.uvsVertexOnly&&c.enable(32),I.fog&&c.enable(33),S.push(c.mask),c.disableAll(),I.useFog&&c.enable(0),I.flatShading&&c.enable(1),I.logarithmicDepthBuffer&&c.enable(2),I.skinning&&c.enable(3),I.morphTargets&&c.enable(4),I.morphNormals&&c.enable(5),I.morphColors&&c.enable(6),I.premultipliedAlpha&&c.enable(7),I.shadowMapEnabled&&c.enable(8),I.physicallyCorrectLights&&c.enable(9),I.doubleSided&&c.enable(10),I.flipSided&&c.enable(11),I.useDepthPacking&&c.enable(12),I.dithering&&c.enable(13),I.specularIntensityMap&&c.enable(14),I.specularColorMap&&c.enable(15),I.transmission&&c.enable(16),I.transmissionMap&&c.enable(17),I.thicknessMap&&c.enable(18),I.sheen&&c.enable(19),I.sheenColorMap&&c.enable(20),I.sheenRoughnessMap&&c.enable(21),I.decodeVideoTexture&&c.enable(22),I.opaque&&c.enable(23),S.push(c.mask)}function A(S){const I=w[S.type];let G;if(I){const H=Ke[I];G=uf.clone(H.uniforms)}else G=S.uniforms;return G}function R(S,I){let G;for(let H=0,pt=d.length;H<pt;H++){const ot=d[H];if(ot.cacheKey===I){G=ot,++G.usedTimes;break}}return G===void 0&&(G=new __(u,I,S,a),d.push(G)),G}function T(S){if(--S.usedTimes===0){const I=d.indexOf(S);d[I]=d[d.length-1],d.pop(),S.destroy()}}function N(S){p.remove(S)}function O(){p.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:A,acquireProgram:R,releaseProgram:T,releaseShaderCache:N,programs:d,dispose:O}}function M_(){let u=new WeakMap;function t(a){let h=u.get(a);return h===void 0&&(h={},u.set(a,h)),h}function e(a){u.delete(a)}function i(a,h,c){u.get(a)[h]=c}function o(){u=new WeakMap}return{get:t,remove:e,update:i,dispose:o}}function S_(u,t){return u.groupOrder!==t.groupOrder?u.groupOrder-t.groupOrder:u.renderOrder!==t.renderOrder?u.renderOrder-t.renderOrder:u.material.id!==t.material.id?u.material.id-t.material.id:u.z!==t.z?u.z-t.z:u.id-t.id}function ic(u,t){return u.groupOrder!==t.groupOrder?u.groupOrder-t.groupOrder:u.renderOrder!==t.renderOrder?u.renderOrder-t.renderOrder:u.z!==t.z?t.z-u.z:u.id-t.id}function rc(){const u=[];let t=0;const e=[],i=[],o=[];function a(){t=0,e.length=0,i.length=0,o.length=0}function h(m,v,b,w,x,g){let y=u[t];return y===void 0?(y={id:m.id,object:m,geometry:v,material:b,groupOrder:w,renderOrder:m.renderOrder,z:x,group:g},u[t]=y):(y.id=m.id,y.object=m,y.geometry=v,y.material=b,y.groupOrder=w,y.renderOrder=m.renderOrder,y.z=x,y.group=g),t++,y}function c(m,v,b,w,x,g){const y=h(m,v,b,w,x,g);b.transmission>0?i.push(y):b.transparent===!0?o.push(y):e.push(y)}function p(m,v,b,w,x,g){const y=h(m,v,b,w,x,g);b.transmission>0?i.unshift(y):b.transparent===!0?o.unshift(y):e.unshift(y)}function d(m,v){e.length>1&&e.sort(m||S_),i.length>1&&i.sort(v||ic),o.length>1&&o.sort(v||ic)}function f(){for(let m=t,v=u.length;m<v;m++){const b=u[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:i,transparent:o,init:a,push:c,unshift:p,finish:f,sort:d}}function E_(){let u=new WeakMap;function t(i,o){let a;return u.has(i)===!1?(a=new rc,u.set(i,[a])):o>=u.get(i).length?(a=new rc,u.get(i).push(a)):a=u.get(i)[o],a}function e(){u=new WeakMap}return{get:t,dispose:e}}function C_(){const u={};return{get:function(t){if(u[t.id]!==void 0)return u[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Wt};break;case"SpotLight":e={position:new k,direction:new k,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new k,halfWidth:new k,halfHeight:new k};break}return u[t.id]=e,e}}}function T_(){const u={};return{get:function(t){if(u[t.id]!==void 0)return u[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return u[t.id]=e,e}}}let P_=0;function A_(u,t){return(t.castShadow?1:0)-(u.castShadow?1:0)}function L_(u,t){const e=new C_,i=T_(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let f=0;f<9;f++)o.probe.push(new k);const a=new k,h=new ie,c=new ie;function p(f,m){let v=0,b=0,w=0;for(let I=0;I<9;I++)o.probe[I].set(0,0,0);let x=0,g=0,y=0,P=0,A=0,R=0,T=0,N=0;f.sort(A_);const O=m!==!0?Math.PI:1;for(let I=0,G=f.length;I<G;I++){const H=f[I],pt=H.color,ot=H.intensity,z=H.distance,Q=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=pt.r*ot*O,b+=pt.g*ot*O,w+=pt.b*ot*O;else if(H.isLightProbe)for(let j=0;j<9;j++)o.probe[j].addScaledVector(H.sh.coefficients[j],ot);else if(H.isDirectionalLight){const j=e.get(H);if(j.color.copy(H.color).multiplyScalar(H.intensity*O),H.castShadow){const B=H.shadow,tt=i.get(H);tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,o.directionalShadow[x]=tt,o.directionalShadowMap[x]=Q,o.directionalShadowMatrix[x]=H.shadow.matrix,R++}o.directional[x]=j,x++}else if(H.isSpotLight){const j=e.get(H);if(j.position.setFromMatrixPosition(H.matrixWorld),j.color.copy(pt).multiplyScalar(ot*O),j.distance=z,j.coneCos=Math.cos(H.angle),j.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),j.decay=H.decay,H.castShadow){const B=H.shadow,tt=i.get(H);tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,o.spotShadow[y]=tt,o.spotShadowMap[y]=Q,o.spotShadowMatrix[y]=H.shadow.matrix,N++}o.spot[y]=j,y++}else if(H.isRectAreaLight){const j=e.get(H);j.color.copy(pt).multiplyScalar(ot),j.halfWidth.set(H.width*.5,0,0),j.halfHeight.set(0,H.height*.5,0),o.rectArea[P]=j,P++}else if(H.isPointLight){const j=e.get(H);if(j.color.copy(H.color).multiplyScalar(H.intensity*O),j.distance=H.distance,j.decay=H.decay,H.castShadow){const B=H.shadow,tt=i.get(H);tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,tt.shadowCameraNear=B.camera.near,tt.shadowCameraFar=B.camera.far,o.pointShadow[g]=tt,o.pointShadowMap[g]=Q,o.pointShadowMatrix[g]=H.shadow.matrix,T++}o.point[g]=j,g++}else if(H.isHemisphereLight){const j=e.get(H);j.skyColor.copy(H.color).multiplyScalar(ot*O),j.groundColor.copy(H.groundColor).multiplyScalar(ot*O),o.hemi[A]=j,A++}}P>0&&(t.isWebGL2||u.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=vt.LTC_FLOAT_1,o.rectAreaLTC2=vt.LTC_FLOAT_2):u.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=vt.LTC_HALF_1,o.rectAreaLTC2=vt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=v,o.ambient[1]=b,o.ambient[2]=w;const S=o.hash;(S.directionalLength!==x||S.pointLength!==g||S.spotLength!==y||S.rectAreaLength!==P||S.hemiLength!==A||S.numDirectionalShadows!==R||S.numPointShadows!==T||S.numSpotShadows!==N)&&(o.directional.length=x,o.spot.length=y,o.rectArea.length=P,o.point.length=g,o.hemi.length=A,o.directionalShadow.length=R,o.directionalShadowMap.length=R,o.pointShadow.length=T,o.pointShadowMap.length=T,o.spotShadow.length=N,o.spotShadowMap.length=N,o.directionalShadowMatrix.length=R,o.pointShadowMatrix.length=T,o.spotShadowMatrix.length=N,S.directionalLength=x,S.pointLength=g,S.spotLength=y,S.rectAreaLength=P,S.hemiLength=A,S.numDirectionalShadows=R,S.numPointShadows=T,S.numSpotShadows=N,o.version=P_++)}function d(f,m){let v=0,b=0,w=0,x=0,g=0;const y=m.matrixWorldInverse;for(let P=0,A=f.length;P<A;P++){const R=f[P];if(R.isDirectionalLight){const T=o.directional[v];T.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(y),v++}else if(R.isSpotLight){const T=o.spot[w];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),T.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(y),w++}else if(R.isRectAreaLight){const T=o.rectArea[x];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),c.identity(),h.copy(R.matrixWorld),h.premultiply(y),c.extractRotation(h),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),x++}else if(R.isPointLight){const T=o.point[b];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(y),b++}else if(R.isHemisphereLight){const T=o.hemi[g];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(y),g++}}}return{setup:p,setupView:d,state:o}}function sc(u,t){const e=new L_(u,t),i=[],o=[];function a(){i.length=0,o.length=0}function h(m){i.push(m)}function c(m){o.push(m)}function p(m){e.setup(i,m)}function d(m){e.setupView(i,m)}return{init:a,state:{lightsArray:i,shadowsArray:o,lights:e},setupLights:p,setupLightsView:d,pushLight:h,pushShadow:c}}function D_(u,t){let e=new WeakMap;function i(a,h=0){let c;return e.has(a)===!1?(c=new sc(u,t),e.set(a,[c])):h>=e.get(a).length?(c=new sc(u,t),e.get(a).push(c)):c=e.get(a)[h],c}function o(){e=new WeakMap}return{get:i,dispose:o}}class R_ extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class I_ extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new k,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k_(u,t,e){let i=new ko;const o=new Lt,a=new Lt,h=new ce,c=new R_({depthPacking:Xp}),p=new I_,d={},f=e.maxTextureSize,m={0:Xe,1:gr,2:Rn},v=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:F_,fragmentShader:N_}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const w=new ze;w.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ae(w,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc,this.render=function(R,T,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const O=u.getRenderTarget(),S=u.getActiveCubeFace(),I=u.getActiveMipmapLevel(),G=u.state;G.setBlending(Dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);for(let H=0,pt=R.length;H<pt;H++){const ot=R[H],z=ot.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ot,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;o.copy(z.mapSize);const Q=z.getFrameExtents();if(o.multiply(Q),a.copy(z.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(a.x=Math.floor(f/Q.x),o.x=a.x*Q.x,z.mapSize.x=a.x),o.y>f&&(a.y=Math.floor(f/Q.y),o.y=a.y*Q.y,z.mapSize.y=a.y)),z.map===null){const B=this.type!==dr?{minFilter:ye,magFilter:ye}:{};z.map=new ii(o.x,o.y,B),z.map.texture.name=ot.name+".shadowMap",z.camera.updateProjectionMatrix()}u.setRenderTarget(z.map),u.clear();const j=z.getViewportCount();for(let B=0;B<j;B++){const tt=z.getViewport(B);h.set(a.x*tt.x,a.y*tt.y,a.x*tt.z,a.y*tt.w),G.viewport(h),z.updateMatrices(ot,B),i=z.getFrustum(),A(T,N,z.camera,ot,this.type)}z.isPointLightShadow!==!0&&this.type===dr&&y(z,N),z.needsUpdate=!1}g.needsUpdate=!1,u.setRenderTarget(O,S,I)};function y(R,T){const N=t.update(x);v.defines.VSM_SAMPLES!==R.blurSamples&&(v.defines.VSM_SAMPLES=R.blurSamples,b.defines.VSM_SAMPLES=R.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ii(o.x,o.y)),v.uniforms.shadow_pass.value=R.map.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,u.setRenderTarget(R.mapPass),u.clear(),u.renderBufferDirect(T,null,N,v,x,null),b.uniforms.shadow_pass.value=R.mapPass.texture,b.uniforms.resolution.value=R.mapSize,b.uniforms.radius.value=R.radius,u.setRenderTarget(R.map),u.clear(),u.renderBufferDirect(T,null,N,b,x,null)}function P(R,T,N,O,S,I){let G=null;const H=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0?G=H:G=N.isPointLight===!0?p:c,u.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0){const pt=G.uuid,ot=T.uuid;let z=d[pt];z===void 0&&(z={},d[pt]=z);let Q=z[ot];Q===void 0&&(Q=G.clone(),z[ot]=Q),G=Q}return G.visible=T.visible,G.wireframe=T.wireframe,I===dr?G.side=T.shadowSide!==null?T.shadowSide:T.side:G.side=T.shadowSide!==null?T.shadowSide:m[T.side],G.alphaMap=T.alphaMap,G.alphaTest=T.alphaTest,G.clipShadows=T.clipShadows,G.clippingPlanes=T.clippingPlanes,G.clipIntersection=T.clipIntersection,G.displacementMap=T.displacementMap,G.displacementScale=T.displacementScale,G.displacementBias=T.displacementBias,G.wireframeLinewidth=T.wireframeLinewidth,G.linewidth=T.linewidth,N.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(G.referencePosition.setFromMatrixPosition(N.matrixWorld),G.nearDistance=O,G.farDistance=S),G}function A(R,T,N,O,S){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===dr)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const H=t.update(R),pt=R.material;if(Array.isArray(pt)){const ot=H.groups;for(let z=0,Q=ot.length;z<Q;z++){const j=ot[z],B=pt[j.materialIndex];if(B&&B.visible){const tt=P(R,B,O,N.near,N.far,S);u.renderBufferDirect(N,null,H,tt,R,j)}}}else if(pt.visible){const ot=P(R,pt,O,N.near,N.far,S);u.renderBufferDirect(N,null,H,ot,R,null)}}const G=R.children;for(let H=0,pt=G.length;H<pt;H++)A(G[H],T,N,O,S)}}function V_(u,t,e){const i=e.isWebGL2;function o(){let F=!1;const lt=new ce;let at=null;const Mt=new ce(0,0,0,0);return{setMask:function(_t){at!==_t&&!F&&(u.colorMask(_t,_t,_t,_t),at=_t)},setLocked:function(_t){F=_t},setClear:function(_t,bt,dt,Ct,Ht){Ht===!0&&(_t*=Ct,bt*=Ct,dt*=Ct),lt.set(_t,bt,dt,Ct),Mt.equals(lt)===!1&&(u.clearColor(_t,bt,dt,Ct),Mt.copy(lt))},reset:function(){F=!1,at=null,Mt.set(-1,0,0,0)}}}function a(){let F=!1,lt=null,at=null,Mt=null;return{setTest:function(_t){_t?xt(2929):$(2929)},setMask:function(_t){lt!==_t&&!F&&(u.depthMask(_t),lt=_t)},setFunc:function(_t){if(at!==_t){if(_t)switch(_t){case gp:u.depthFunc(512);break;case vp:u.depthFunc(519);break;case _p:u.depthFunc(513);break;case So:u.depthFunc(515);break;case xp:u.depthFunc(514);break;case bp:u.depthFunc(518);break;case wp:u.depthFunc(516);break;case yp:u.depthFunc(517);break;default:u.depthFunc(515)}else u.depthFunc(515);at=_t}},setLocked:function(_t){F=_t},setClear:function(_t){Mt!==_t&&(u.clearDepth(_t),Mt=_t)},reset:function(){F=!1,lt=null,at=null,Mt=null}}}function h(){let F=!1,lt=null,at=null,Mt=null,_t=null,bt=null,dt=null,Ct=null,Ht=null;return{setTest:function(Ft){F||(Ft?xt(2960):$(2960))},setMask:function(Ft){lt!==Ft&&!F&&(u.stencilMask(Ft),lt=Ft)},setFunc:function(Ft,se,oe){(at!==Ft||Mt!==se||_t!==oe)&&(u.stencilFunc(Ft,se,oe),at=Ft,Mt=se,_t=oe)},setOp:function(Ft,se,oe){(bt!==Ft||dt!==se||Ct!==oe)&&(u.stencilOp(Ft,se,oe),bt=Ft,dt=se,Ct=oe)},setLocked:function(Ft){F=Ft},setClear:function(Ft){Ht!==Ft&&(u.clearStencil(Ft),Ht=Ft)},reset:function(){F=!1,lt=null,at=null,Mt=null,_t=null,bt=null,dt=null,Ct=null,Ht=null}}}const c=new o,p=new a,d=new h;let f={},m={},v=new WeakMap,b=[],w=null,x=!1,g=null,y=null,P=null,A=null,R=null,T=null,N=null,O=!1,S=null,I=null,G=null,H=null,pt=null;const ot=u.getParameter(35661);let z=!1,Q=0;const j=u.getParameter(7938);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=Q>=2);let B=null,tt={};const X=u.getParameter(3088),Z=u.getParameter(2978),nt=new ce().fromArray(X),rt=new ce().fromArray(Z);function J(F,lt,at){const Mt=new Uint8Array(4),_t=u.createTexture();u.bindTexture(F,_t),u.texParameteri(F,10241,9728),u.texParameteri(F,10240,9728);for(let bt=0;bt<at;bt++)u.texImage2D(lt+bt,0,6408,1,1,0,6408,5121,Mt);return _t}const ft={};ft[3553]=J(3553,3553,1),ft[34067]=J(34067,34069,6),c.setClear(0,0,0,1),p.setClear(1),d.setClear(0),xt(2929),p.setFunc(So),te(!1),ee(Ya),xt(2884),Nt(Dn);function xt(F){f[F]!==!0&&(u.enable(F),f[F]=!0)}function $(F){f[F]!==!1&&(u.disable(F),f[F]=!1)}function Zt(F,lt){return m[F]!==lt?(u.bindFramebuffer(F,lt),m[F]=lt,i&&(F===36009&&(m[36160]=lt),F===36160&&(m[36009]=lt)),!0):!1}function Rt(F,lt){let at=b,Mt=!1;if(F)if(at=v.get(lt),at===void 0&&(at=[],v.set(lt,at)),F.isWebGLMultipleRenderTargets){const _t=F.texture;if(at.length!==_t.length||at[0]!==36064){for(let bt=0,dt=_t.length;bt<dt;bt++)at[bt]=36064+bt;at.length=_t.length,Mt=!0}}else at[0]!==36064&&(at[0]=36064,Mt=!0);else at[0]!==1029&&(at[0]=1029,Mt=!0);Mt&&(e.isWebGL2?u.drawBuffers(at):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(at))}function St(F){return w!==F?(u.useProgram(F),w=F,!0):!1}const mt={[Ni]:32774,[sp]:32778,[op]:32779};if(i)mt[Ja]=32775,mt[Qa]=32776;else{const F=t.get("EXT_blend_minmax");F!==null&&(mt[Ja]=F.MIN_EXT,mt[Qa]=F.MAX_EXT)}const Ut={[ap]:0,[lp]:1,[cp]:768,[wc]:770,[mp]:776,[pp]:774,[hp]:772,[up]:769,[yc]:771,[fp]:775,[dp]:773};function Nt(F,lt,at,Mt,_t,bt,dt,Ct){if(F===Dn){x===!0&&($(3042),x=!1);return}if(x===!1&&(xt(3042),x=!0),F!==rp){if(F!==g||Ct!==O){if((y!==Ni||R!==Ni)&&(u.blendEquation(32774),y=Ni,R=Ni),Ct)switch(F){case Oi:u.blendFuncSeparate(1,771,1,771);break;case $a:u.blendFunc(1,1);break;case Ka:u.blendFuncSeparate(0,769,0,1);break;case Za:u.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Oi:u.blendFuncSeparate(770,771,1,771);break;case $a:u.blendFunc(770,1);break;case Ka:u.blendFuncSeparate(0,769,0,1);break;case Za:u.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}P=null,A=null,T=null,N=null,g=F,O=Ct}return}_t=_t||lt,bt=bt||at,dt=dt||Mt,(lt!==y||_t!==R)&&(u.blendEquationSeparate(mt[lt],mt[_t]),y=lt,R=_t),(at!==P||Mt!==A||bt!==T||dt!==N)&&(u.blendFuncSeparate(Ut[at],Ut[Mt],Ut[bt],Ut[dt]),P=at,A=Mt,T=bt,N=dt),g=F,O=null}function yt(F,lt){F.side===Rn?$(2884):xt(2884);let at=F.side===Xe;lt&&(at=!at),te(at),F.blending===Oi&&F.transparent===!1?Nt(Dn):Nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),p.setFunc(F.depthFunc),p.setTest(F.depthTest),p.setMask(F.depthWrite),c.setMask(F.colorWrite);const Mt=F.stencilWrite;d.setTest(Mt),Mt&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),me(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?xt(32926):$(32926)}function te(F){S!==F&&(F?u.frontFace(2304):u.frontFace(2305),S=F)}function ee(F){F!==ep?(xt(2884),F!==I&&(F===Ya?u.cullFace(1029):F===np?u.cullFace(1028):u.cullFace(1032))):$(2884),I=F}function re(F){F!==G&&(z&&u.lineWidth(F),G=F)}function me(F,lt,at){F?(xt(32823),(H!==lt||pt!==at)&&(u.polygonOffset(lt,at),H=lt,pt=at)):$(32823)}function Yt(F){F?xt(3089):$(3089)}function jt(F){F===void 0&&(F=33984+ot-1),B!==F&&(u.activeTexture(F),B=F)}function ge(F,lt){B===null&&jt();let at=tt[B];at===void 0&&(at={type:void 0,texture:void 0},tt[B]=at),(at.type!==F||at.texture!==lt)&&(u.bindTexture(F,lt||ft[F]),at.type=F,at.texture=lt)}function ve(){const F=tt[B];F!==void 0&&F.type!==void 0&&(u.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function L(){try{u.compressedTexImage2D.apply(u,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function M(){try{u.texSubImage2D.apply(u,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{u.texSubImage3D.apply(u,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{u.compressedTexSubImage2D.apply(u,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ut(){try{u.texStorage2D.apply(u,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{u.texStorage3D.apply(u,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{u.texImage2D.apply(u,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function E(){try{u.texImage3D.apply(u,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(F){nt.equals(F)===!1&&(u.scissor(F.x,F.y,F.z,F.w),nt.copy(F))}function ct(F){rt.equals(F)===!1&&(u.viewport(F.x,F.y,F.z,F.w),rt.copy(F))}function ht(){u.disable(3042),u.disable(2884),u.disable(2929),u.disable(32823),u.disable(3089),u.disable(2960),u.disable(32926),u.blendEquation(32774),u.blendFunc(1,0),u.blendFuncSeparate(1,0,1,0),u.colorMask(!0,!0,!0,!0),u.clearColor(0,0,0,0),u.depthMask(!0),u.depthFunc(513),u.clearDepth(1),u.stencilMask(4294967295),u.stencilFunc(519,0,4294967295),u.stencilOp(7680,7680,7680),u.clearStencil(0),u.cullFace(1029),u.frontFace(2305),u.polygonOffset(0,0),u.activeTexture(33984),u.bindFramebuffer(36160,null),i===!0&&(u.bindFramebuffer(36009,null),u.bindFramebuffer(36008,null)),u.useProgram(null),u.lineWidth(1),u.scissor(0,0,u.canvas.width,u.canvas.height),u.viewport(0,0,u.canvas.width,u.canvas.height),f={},B=null,tt={},m={},v=new WeakMap,b=[],w=null,x=!1,g=null,y=null,P=null,A=null,R=null,T=null,N=null,O=!1,S=null,I=null,G=null,H=null,pt=null,nt.set(0,0,u.canvas.width,u.canvas.height),rt.set(0,0,u.canvas.width,u.canvas.height),c.reset(),p.reset(),d.reset()}return{buffers:{color:c,depth:p,stencil:d},enable:xt,disable:$,bindFramebuffer:Zt,drawBuffers:Rt,useProgram:St,setBlending:Nt,setMaterial:yt,setFlipSided:te,setCullFace:ee,setLineWidth:re,setPolygonOffset:me,setScissorTest:Yt,activeTexture:jt,bindTexture:ge,unbindTexture:ve,compressedTexImage2D:L,texImage2D:Et,texImage3D:E,texStorage2D:ut,texStorage3D:gt,texSubImage2D:M,texSubImage3D:Y,compressedTexSubImage2D:st,scissor:et,viewport:ct,reset:ht}}function O_(u,t,e,i,o,a,h){const c=o.isWebGL2,p=o.maxTextures,d=o.maxCubemapSize,f=o.maxTextureSize,m=o.maxSamples,v=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,b=/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function P(L,M){return y?new OffscreenCanvas(L,M):_r("canvas")}function A(L,M,Y,st){let ut=1;if((L.width>st||L.height>st)&&(ut=st/Math.max(L.width,L.height)),ut<1||M===!0)if(typeof HTMLImageElement!="undefined"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&L instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&L instanceof ImageBitmap){const gt=M?Lo:Math.floor,Et=gt(ut*L.width),E=gt(ut*L.height);x===void 0&&(x=P(Et,E));const et=Y?P(Et,E):x;return et.width=Et,et.height=E,et.getContext("2d").drawImage(L,0,0,Et,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Et+"x"+E+")."),et}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function R(L){return Cl(L.width)&&Cl(L.height)}function T(L){return c?!1:L.wrapS!==qe||L.wrapT!==qe||L.minFilter!==ye&&L.minFilter!==ke}function N(L,M){return L.generateMipmaps&&M&&L.minFilter!==ye&&L.minFilter!==ke}function O(L){u.generateMipmap(L)}function S(L,M,Y,st,ut=!1){if(c===!1)return M;if(L!==null){if(u[L]!==void 0)return u[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=M;return M===6403&&(Y===5126&&(gt=33326),Y===5131&&(gt=33325),Y===5121&&(gt=33321)),M===33319&&(Y===5126&&(gt=33328),Y===5131&&(gt=33327),Y===5121&&(gt=33323)),M===6408&&(Y===5126&&(gt=34836),Y===5131&&(gt=34842),Y===5121&&(gt=st===Qt&&ut===!1?35907:32856),Y===32819&&(gt=32854),Y===32820&&(gt=32855)),(gt===33325||gt===33326||gt===33327||gt===33328||gt===34842||gt===34836)&&t.get("EXT_color_buffer_float"),gt}function I(L,M,Y){return N(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==ye&&L.minFilter!==ke?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function G(L){return L===ye||L===tl||L===el?9728:9729}function H(L){const M=L.target;M.removeEventListener("dispose",H),ot(M),M.isVideoTexture&&w.delete(M)}function pt(L){const M=L.target;M.removeEventListener("dispose",pt),Q(M)}function ot(L){const M=i.get(L);if(M.__webglInit===void 0)return;const Y=L.source,st=g.get(Y);if(st){const ut=st[M.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&z(L),Object.keys(st).length===0&&g.delete(Y)}i.remove(L)}function z(L){const M=i.get(L);u.deleteTexture(M.__webglTexture);const Y=L.source,st=g.get(Y);delete st[M.__cacheKey],h.memory.textures--}function Q(L){const M=L.texture,Y=i.get(L),st=i.get(M);if(st.__webglTexture!==void 0&&(u.deleteTexture(st.__webglTexture),h.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++)u.deleteFramebuffer(Y.__webglFramebuffer[ut]),Y.__webglDepthbuffer&&u.deleteRenderbuffer(Y.__webglDepthbuffer[ut]);else{if(u.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&u.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&u.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ut=0;ut<Y.__webglColorRenderbuffer.length;ut++)Y.__webglColorRenderbuffer[ut]&&u.deleteRenderbuffer(Y.__webglColorRenderbuffer[ut]);Y.__webglDepthRenderbuffer&&u.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ut=0,gt=M.length;ut<gt;ut++){const Et=i.get(M[ut]);Et.__webglTexture&&(u.deleteTexture(Et.__webglTexture),h.memory.textures--),i.remove(M[ut])}i.remove(M),i.remove(L)}let j=0;function B(){j=0}function tt(){const L=j;return L>=p&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+p),j+=1,L}function X(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.encoding),M.join()}function Z(L,M){const Y=i.get(L);if(L.isVideoTexture&&ge(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const st=L.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(Y,L,M);return}}e.activeTexture(33984+M),e.bindTexture(3553,Y.__webglTexture)}function nt(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){Rt(Y,L,M);return}e.activeTexture(33984+M),e.bindTexture(35866,Y.__webglTexture)}function rt(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){Rt(Y,L,M);return}e.activeTexture(33984+M),e.bindTexture(32879,Y.__webglTexture)}function J(L,M){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){St(Y,L,M);return}e.activeTexture(33984+M),e.bindTexture(34067,Y.__webglTexture)}const ft={[To]:10497,[qe]:33071,[Po]:33648},xt={[ye]:9728,[tl]:9984,[el]:9986,[ke]:9729,[Lp]:9985,[ls]:9987};function $(L,M,Y){if(Y?(u.texParameteri(L,10242,ft[M.wrapS]),u.texParameteri(L,10243,ft[M.wrapT]),(L===32879||L===35866)&&u.texParameteri(L,32882,ft[M.wrapR]),u.texParameteri(L,10240,xt[M.magFilter]),u.texParameteri(L,10241,xt[M.minFilter])):(u.texParameteri(L,10242,33071),u.texParameteri(L,10243,33071),(L===32879||L===35866)&&u.texParameteri(L,32882,33071),(M.wrapS!==qe||M.wrapT!==qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),u.texParameteri(L,10240,G(M.magFilter)),u.texParameteri(L,10241,G(M.minFilter)),M.minFilter!==ye&&M.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(M.type===Zn&&t.has("OES_texture_float_linear")===!1||c===!1&&M.type===vr&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(u.texParameterf(L,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Zt(L,M){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",H));const st=M.source;let ut=g.get(st);ut===void 0&&(ut={},g.set(st,ut));const gt=X(M);if(gt!==L.__cacheKey){ut[gt]===void 0&&(ut[gt]={texture:u.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),ut[gt].usedTimes++;const Et=ut[L.__cacheKey];Et!==void 0&&(ut[L.__cacheKey].usedTimes--,Et.usedTimes===0&&z(M)),L.__cacheKey=gt,L.__webglTexture=ut[gt].texture}return Y}function Rt(L,M,Y){let st=3553;M.isDataArrayTexture&&(st=35866),M.isData3DTexture&&(st=32879);const ut=Zt(L,M),gt=M.source;if(e.activeTexture(33984+Y),e.bindTexture(st,L.__webglTexture),gt.version!==gt.__currentVersion||ut===!0){u.pixelStorei(37440,M.flipY),u.pixelStorei(37441,M.premultiplyAlpha),u.pixelStorei(3317,M.unpackAlignment),u.pixelStorei(37443,0);const Et=T(M)&&R(M.image)===!1;let E=A(M.image,Et,!1,f);E=ve(M,E);const et=R(E)||c,ct=a.convert(M.format,M.encoding);let ht=a.convert(M.type),F=S(M.internalFormat,ct,ht,M.encoding,M.isVideoTexture);$(st,M,et);let lt;const at=M.mipmaps,Mt=c&&M.isVideoTexture!==!0,_t=gt.__currentVersion===void 0||ut===!0,bt=I(M,E,et);if(M.isDepthTexture)F=6402,c?M.type===Zn?F=36012:M.type===Kn?F=33190:M.type===Ui?F=35056:F=33189:M.type===Zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Qn&&F===6402&&M.type!==Ec&&M.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Kn,ht=a.convert(M.type)),M.format===Gi&&F===6402&&(F=34041,M.type!==Ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ui,ht=a.convert(M.type))),_t&&(Mt?e.texStorage2D(3553,1,F,E.width,E.height):e.texImage2D(3553,0,F,E.width,E.height,0,ct,ht,null));else if(M.isDataTexture)if(at.length>0&&et){Mt&&_t&&e.texStorage2D(3553,bt,F,at[0].width,at[0].height);for(let dt=0,Ct=at.length;dt<Ct;dt++)lt=at[dt],Mt?e.texSubImage2D(3553,dt,0,0,lt.width,lt.height,ct,ht,lt.data):e.texImage2D(3553,dt,F,lt.width,lt.height,0,ct,ht,lt.data);M.generateMipmaps=!1}else Mt?(_t&&e.texStorage2D(3553,bt,F,E.width,E.height),e.texSubImage2D(3553,0,0,0,E.width,E.height,ct,ht,E.data)):e.texImage2D(3553,0,F,E.width,E.height,0,ct,ht,E.data);else if(M.isCompressedTexture){Mt&&_t&&e.texStorage2D(3553,bt,F,at[0].width,at[0].height);for(let dt=0,Ct=at.length;dt<Ct;dt++)lt=at[dt],M.format!==Je?ct!==null?Mt?e.compressedTexSubImage2D(3553,dt,0,0,lt.width,lt.height,ct,lt.data):e.compressedTexImage2D(3553,dt,F,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Mt?e.texSubImage2D(3553,dt,0,0,lt.width,lt.height,ct,ht,lt.data):e.texImage2D(3553,dt,F,lt.width,lt.height,0,ct,ht,lt.data)}else if(M.isDataArrayTexture)Mt?(_t&&e.texStorage3D(35866,bt,F,E.width,E.height,E.depth),e.texSubImage3D(35866,0,0,0,0,E.width,E.height,E.depth,ct,ht,E.data)):e.texImage3D(35866,0,F,E.width,E.height,E.depth,0,ct,ht,E.data);else if(M.isData3DTexture)Mt?(_t&&e.texStorage3D(32879,bt,F,E.width,E.height,E.depth),e.texSubImage3D(32879,0,0,0,0,E.width,E.height,E.depth,ct,ht,E.data)):e.texImage3D(32879,0,F,E.width,E.height,E.depth,0,ct,ht,E.data);else if(M.isFramebufferTexture){if(_t)if(Mt)e.texStorage2D(3553,bt,F,E.width,E.height);else{let dt=E.width,Ct=E.height;for(let Ht=0;Ht<bt;Ht++)e.texImage2D(3553,Ht,F,dt,Ct,0,ct,ht,null),dt>>=1,Ct>>=1}}else if(at.length>0&&et){Mt&&_t&&e.texStorage2D(3553,bt,F,at[0].width,at[0].height);for(let dt=0,Ct=at.length;dt<Ct;dt++)lt=at[dt],Mt?e.texSubImage2D(3553,dt,0,0,ct,ht,lt):e.texImage2D(3553,dt,F,ct,ht,lt);M.generateMipmaps=!1}else Mt?(_t&&e.texStorage2D(3553,bt,F,E.width,E.height),e.texSubImage2D(3553,0,0,0,ct,ht,E)):e.texImage2D(3553,0,F,ct,ht,E);N(M,et)&&O(st),gt.__currentVersion=gt.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function St(L,M,Y){if(M.image.length!==6)return;const st=Zt(L,M),ut=M.source;if(e.activeTexture(33984+Y),e.bindTexture(34067,L.__webglTexture),ut.version!==ut.__currentVersion||st===!0){u.pixelStorei(37440,M.flipY),u.pixelStorei(37441,M.premultiplyAlpha),u.pixelStorei(3317,M.unpackAlignment),u.pixelStorei(37443,0);const gt=M.isCompressedTexture||M.image[0].isCompressedTexture,Et=M.image[0]&&M.image[0].isDataTexture,E=[];for(let dt=0;dt<6;dt++)!gt&&!Et?E[dt]=A(M.image[dt],!1,!0,d):E[dt]=Et?M.image[dt].image:M.image[dt],E[dt]=ve(M,E[dt]);const et=E[0],ct=R(et)||c,ht=a.convert(M.format,M.encoding),F=a.convert(M.type),lt=S(M.internalFormat,ht,F,M.encoding),at=c&&M.isVideoTexture!==!0,Mt=ut.__currentVersion===void 0||st===!0;let _t=I(M,et,ct);$(34067,M,ct);let bt;if(gt){at&&Mt&&e.texStorage2D(34067,_t,lt,et.width,et.height);for(let dt=0;dt<6;dt++){bt=E[dt].mipmaps;for(let Ct=0;Ct<bt.length;Ct++){const Ht=bt[Ct];M.format!==Je?ht!==null?at?e.compressedTexSubImage2D(34069+dt,Ct,0,0,Ht.width,Ht.height,ht,Ht.data):e.compressedTexImage2D(34069+dt,Ct,lt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?e.texSubImage2D(34069+dt,Ct,0,0,Ht.width,Ht.height,ht,F,Ht.data):e.texImage2D(34069+dt,Ct,lt,Ht.width,Ht.height,0,ht,F,Ht.data)}}}else{bt=M.mipmaps,at&&Mt&&(bt.length>0&&_t++,e.texStorage2D(34067,_t,lt,E[0].width,E[0].height));for(let dt=0;dt<6;dt++)if(Et){at?e.texSubImage2D(34069+dt,0,0,0,E[dt].width,E[dt].height,ht,F,E[dt].data):e.texImage2D(34069+dt,0,lt,E[dt].width,E[dt].height,0,ht,F,E[dt].data);for(let Ct=0;Ct<bt.length;Ct++){const Ft=bt[Ct].image[dt].image;at?e.texSubImage2D(34069+dt,Ct+1,0,0,Ft.width,Ft.height,ht,F,Ft.data):e.texImage2D(34069+dt,Ct+1,lt,Ft.width,Ft.height,0,ht,F,Ft.data)}}else{at?e.texSubImage2D(34069+dt,0,0,0,ht,F,E[dt]):e.texImage2D(34069+dt,0,lt,ht,F,E[dt]);for(let Ct=0;Ct<bt.length;Ct++){const Ht=bt[Ct];at?e.texSubImage2D(34069+dt,Ct+1,0,0,ht,F,Ht.image[dt]):e.texImage2D(34069+dt,Ct+1,lt,ht,F,Ht.image[dt])}}}N(M,ct)&&O(34067),ut.__currentVersion=ut.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function mt(L,M,Y,st,ut){const gt=a.convert(Y.format,Y.encoding),Et=a.convert(Y.type),E=S(Y.internalFormat,gt,Et,Y.encoding);i.get(M).__hasExternalTextures||(ut===32879||ut===35866?e.texImage3D(ut,0,E,M.width,M.height,M.depth,0,gt,Et,null):e.texImage2D(ut,0,E,M.width,M.height,0,gt,Et,null)),e.bindFramebuffer(36160,L),jt(M)?v.framebufferTexture2DMultisampleEXT(36160,st,ut,i.get(Y).__webglTexture,0,Yt(M)):u.framebufferTexture2D(36160,st,ut,i.get(Y).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ut(L,M,Y){if(u.bindRenderbuffer(36161,L),M.depthBuffer&&!M.stencilBuffer){let st=33189;if(Y||jt(M)){const ut=M.depthTexture;ut&&ut.isDepthTexture&&(ut.type===Zn?st=36012:ut.type===Kn&&(st=33190));const gt=Yt(M);jt(M)?v.renderbufferStorageMultisampleEXT(36161,gt,st,M.width,M.height):u.renderbufferStorageMultisample(36161,gt,st,M.width,M.height)}else u.renderbufferStorage(36161,st,M.width,M.height);u.framebufferRenderbuffer(36160,36096,36161,L)}else if(M.depthBuffer&&M.stencilBuffer){const st=Yt(M);Y&&jt(M)===!1?u.renderbufferStorageMultisample(36161,st,35056,M.width,M.height):jt(M)?v.renderbufferStorageMultisampleEXT(36161,st,35056,M.width,M.height):u.renderbufferStorage(36161,34041,M.width,M.height),u.framebufferRenderbuffer(36160,33306,36161,L)}else{const st=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ut=0;ut<st.length;ut++){const gt=st[ut],Et=a.convert(gt.format,gt.encoding),E=a.convert(gt.type),et=S(gt.internalFormat,Et,E,gt.encoding),ct=Yt(M);Y&&jt(M)===!1?u.renderbufferStorageMultisample(36161,ct,et,M.width,M.height):jt(M)?v.renderbufferStorageMultisampleEXT(36161,ct,et,M.width,M.height):u.renderbufferStorage(36161,et,M.width,M.height)}}u.bindRenderbuffer(36161,null)}function Nt(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const st=i.get(M.depthTexture).__webglTexture,ut=Yt(M);if(M.depthTexture.format===Qn)jt(M)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,st,0,ut):u.framebufferTexture2D(36160,36096,3553,st,0);else if(M.depthTexture.format===Gi)jt(M)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,st,0,ut):u.framebufferTexture2D(36160,33306,3553,st,0);else throw new Error("Unknown depthTexture format")}function yt(L){const M=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Nt(M.__webglFramebuffer,L)}else if(Y){M.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(36160,M.__webglFramebuffer[st]),M.__webglDepthbuffer[st]=u.createRenderbuffer(),Ut(M.__webglDepthbuffer[st],L,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=u.createRenderbuffer(),Ut(M.__webglDepthbuffer,L,!1);e.bindFramebuffer(36160,null)}function te(L,M,Y){const st=i.get(L);M!==void 0&&mt(st.__webglFramebuffer,L,L.texture,36064,3553),Y!==void 0&&yt(L)}function ee(L){const M=L.texture,Y=i.get(L),st=i.get(M);L.addEventListener("dispose",pt),L.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=u.createTexture()),st.__version=M.version,h.memory.textures++);const ut=L.isWebGLCubeRenderTarget===!0,gt=L.isWebGLMultipleRenderTargets===!0,Et=R(L)||c;if(ut){Y.__webglFramebuffer=[];for(let E=0;E<6;E++)Y.__webglFramebuffer[E]=u.createFramebuffer()}else{if(Y.__webglFramebuffer=u.createFramebuffer(),gt)if(o.drawBuffers){const E=L.texture;for(let et=0,ct=E.length;et<ct;et++){const ht=i.get(E[et]);ht.__webglTexture===void 0&&(ht.__webglTexture=u.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&jt(L)===!1){const E=gt?M:[M];Y.__webglMultisampledFramebuffer=u.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let et=0;et<E.length;et++){const ct=E[et];Y.__webglColorRenderbuffer[et]=u.createRenderbuffer(),u.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[et]);const ht=a.convert(ct.format,ct.encoding),F=a.convert(ct.type),lt=S(ct.internalFormat,ht,F,ct.encoding),at=Yt(L);u.renderbufferStorageMultisample(36161,at,lt,L.width,L.height),u.framebufferRenderbuffer(36160,36064+et,36161,Y.__webglColorRenderbuffer[et])}u.bindRenderbuffer(36161,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=u.createRenderbuffer(),Ut(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(36160,null)}}if(ut){e.bindTexture(34067,st.__webglTexture),$(34067,M,Et);for(let E=0;E<6;E++)mt(Y.__webglFramebuffer[E],L,M,36064,34069+E);N(M,Et)&&O(34067),e.unbindTexture()}else if(gt){const E=L.texture;for(let et=0,ct=E.length;et<ct;et++){const ht=E[et],F=i.get(ht);e.bindTexture(3553,F.__webglTexture),$(3553,ht,Et),mt(Y.__webglFramebuffer,L,ht,36064+et,3553),N(ht,Et)&&O(3553)}e.unbindTexture()}else{let E=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?E=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(E,st.__webglTexture),$(E,M,Et),mt(Y.__webglFramebuffer,L,M,36064,E),N(M,Et)&&O(E),e.unbindTexture()}L.depthBuffer&&yt(L)}function re(L){const M=R(L)||c,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let st=0,ut=Y.length;st<ut;st++){const gt=Y[st];if(N(gt,M)){const Et=L.isWebGLCubeRenderTarget?34067:3553,E=i.get(gt).__webglTexture;e.bindTexture(Et,E),O(Et),e.unbindTexture()}}}function me(L){if(c&&L.samples>0&&jt(L)===!1){const M=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,st=L.height;let ut=16384;const gt=[],Et=L.stencilBuffer?33306:36096,E=i.get(L),et=L.isWebGLMultipleRenderTargets===!0;if(et)for(let ct=0;ct<M.length;ct++)e.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+ct,36161,null),e.bindFramebuffer(36160,E.__webglFramebuffer),u.framebufferTexture2D(36009,36064+ct,3553,null,0);e.bindFramebuffer(36008,E.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,E.__webglFramebuffer);for(let ct=0;ct<M.length;ct++){gt.push(36064+ct),L.depthBuffer&&gt.push(Et);const ht=E.__ignoreDepthValues!==void 0?E.__ignoreDepthValues:!1;if(ht===!1&&(L.depthBuffer&&(ut|=256),L.stencilBuffer&&(ut|=1024)),et&&u.framebufferRenderbuffer(36008,36064,36161,E.__webglColorRenderbuffer[ct]),ht===!0&&(u.invalidateFramebuffer(36008,[Et]),u.invalidateFramebuffer(36009,[Et])),et){const F=i.get(M[ct]).__webglTexture;u.framebufferTexture2D(36009,36064,3553,F,0)}u.blitFramebuffer(0,0,Y,st,0,0,Y,st,ut,9728),b&&u.invalidateFramebuffer(36008,gt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),et)for(let ct=0;ct<M.length;ct++){e.bindFramebuffer(36160,E.__webglMultisampledFramebuffer),u.framebufferRenderbuffer(36160,36064+ct,36161,E.__webglColorRenderbuffer[ct]);const ht=i.get(M[ct]).__webglTexture;e.bindFramebuffer(36160,E.__webglFramebuffer),u.framebufferTexture2D(36009,36064+ct,3553,ht,0)}e.bindFramebuffer(36009,E.__webglMultisampledFramebuffer)}}function Yt(L){return Math.min(m,L.samples)}function jt(L){const M=i.get(L);return c&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ge(L){const M=h.render.frame;w.get(L)!==M&&(w.set(L,M),L.update())}function ve(L,M){const Y=L.encoding,st=L.format,ut=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Ao||Y!==ni&&(Y===Qt?c===!1?t.has("EXT_sRGB")===!0&&st===Je?(L.format=Ao,L.minFilter=ke,L.generateMipmaps=!1):M=Ac.sRGBToLinear(M):(st!==Je||ut!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),M}this.allocateTextureUnit=tt,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=nt,this.setTexture3D=rt,this.setTextureCube=J,this.rebindTextures=te,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=jt}function U_(u,t,e){const i=e.isWebGL2;function o(a,h=null){let c;if(a===ei)return 5121;if(a===Fp)return 32819;if(a===Np)return 32820;if(a===Dp)return 5120;if(a===Rp)return 5122;if(a===Ec)return 5123;if(a===Ip)return 5124;if(a===Kn)return 5125;if(a===Zn)return 5126;if(a===vr)return i?5131:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===kp)return 6406;if(a===Je)return 6408;if(a===Op)return 6409;if(a===Up)return 6410;if(a===Qn)return 6402;if(a===Gi)return 34041;if(a===zp)return 6403;if(a===Vp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===Ao)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Bp)return 36244;if(a===Gp)return 33319;if(a===Hp)return 33320;if(a===Wp)return 36249;if(a===Gs||a===Hs||a===Ws||a===js)if(h===Qt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Gs)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Hs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ws)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===js)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Gs)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Hs)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ws)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===js)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===nl||a===il||a===rl||a===sl)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===nl)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===il)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===rl)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===sl)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===jp)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ol||a===al)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(a===ol)return h===Qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===al)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===ll||a===cl||a===ul||a===hl||a===dl||a===pl||a===fl||a===ml||a===gl||a===vl||a===_l||a===xl||a===bl||a===wl)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(a===ll)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===cl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ul)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===hl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===dl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===pl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===fl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ml)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===gl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===vl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_l)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===xl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===bl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===wl)return h===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===yl)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(a===yl)return h===Qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Ui?i?34042:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):u[a]!==void 0?u[a]:null}return{convert:o}}class z_ extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class fr extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B_={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let o=null,a=null,h=null;const c=this._targetRay,p=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i);if(d.joints[x.jointName]===void 0){const P=new fr;P.matrixAutoUpdate=!1,P.visible=!1,d.joints[x.jointName]=P,d.add(P)}const y=d.joints[x.jointName];g!==null&&(y.matrix.fromArray(g.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=g.radius),y.visible=g!==null}const f=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],v=f.position.distanceTo(m.position),b=.02,w=.005;d.inputState.pinching&&v>b+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=b-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));c!==null&&(o=e.getPose(t.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(B_)))}return c!==null&&(c.visible=o!==null),p!==null&&(p.visible=a!==null),d!==null&&(d.visible=h!==null),this}}class G_ extends Ue{constructor(t,e,i,o,a,h,c,p,d,f){if(f=f!==void 0?f:Qn,f!==Qn&&f!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Qn&&(i=Kn),i===void 0&&f===Gi&&(i=Ui),super(null,o,a,h,c,p,f,i,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:ye,this.minFilter=p!==void 0?p:ye,this.flipY=!1,this.generateMipmaps=!1}}class H_ extends oi{constructor(t,e){super();const i=this;let o=null,a=1,h=null,c="local-floor",p=null,d=null,f=null,m=null,v=null,b=null;const w=e.getContextAttributes();let x=null,g=null;const y=[],P=[],A=new Ve;A.layers.enable(1),A.viewport=new ce;const R=new Ve;R.layers.enable(2),R.viewport=new ce;const T=[A,R],N=new z_;N.layers.enable(1),N.layers.enable(2);let O=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Z=y[X];return Z===void 0&&(Z=new wo,y[X]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(X){let Z=y[X];return Z===void 0&&(Z=new wo,y[X]=Z),Z.getGripSpace()},this.getHand=function(X){let Z=y[X];return Z===void 0&&(Z=new wo,y[X]=Z),Z.getHandSpace()};function I(X){const Z=P.indexOf(X.inputSource);if(Z===-1)return;const nt=y[Z];nt!==void 0&&nt.dispatchEvent({type:X.type,data:X.inputSource})}function G(){o.removeEventListener("select",I),o.removeEventListener("selectstart",I),o.removeEventListener("selectend",I),o.removeEventListener("squeeze",I),o.removeEventListener("squeezestart",I),o.removeEventListener("squeezeend",I),o.removeEventListener("end",G),o.removeEventListener("inputsourceschange",H);for(let X=0;X<y.length;X++){const Z=P[X];Z!==null&&(P[X]=null,y[X].disconnect(Z))}O=null,S=null,t.setRenderTarget(x),v=null,m=null,f=null,o=null,g=null,tt.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){c=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(x=t.getRenderTarget(),o.addEventListener("select",I),o.addEventListener("selectstart",I),o.addEventListener("selectend",I),o.addEventListener("squeeze",I),o.addEventListener("squeezestart",I),o.addEventListener("squeezeend",I),o.addEventListener("end",G),o.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await e.makeXRCompatible(),o.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Z={antialias:o.renderState.layers===void 0?w.antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(o,e,Z),o.updateRenderState({baseLayer:v}),g=new ii(v.framebufferWidth,v.framebufferHeight,{format:Je,type:ei,encoding:t.outputEncoding})}else{let Z=null,nt=null,rt=null;w.depth&&(rt=w.stencil?35056:33190,Z=w.stencil?Gi:Qn,nt=w.stencil?Ui:Kn);const J={colorFormat:32856,depthFormat:rt,scaleFactor:a};f=new XRWebGLBinding(o,e),m=f.createProjectionLayer(J),o.updateRenderState({layers:[m]}),g=new ii(m.textureWidth,m.textureHeight,{format:Je,type:ei,depthTexture:new G_(m.textureWidth,m.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:w.stencil,encoding:t.outputEncoding,samples:w.antialias?4:0});const ft=t.properties.get(g);ft.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),p=null,h=await o.requestReferenceSpace(c),tt.setContext(o),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function H(X){for(let Z=0;Z<X.removed.length;Z++){const nt=X.removed[Z],rt=P.indexOf(nt);rt>=0&&(P[rt]=null,y[rt].dispatchEvent({type:"disconnected",data:nt}))}for(let Z=0;Z<X.added.length;Z++){const nt=X.added[Z];let rt=P.indexOf(nt);if(rt===-1){for(let ft=0;ft<y.length;ft++)if(ft>=P.length){P.push(nt),rt=ft;break}else if(P[ft]===null){P[ft]=nt,rt=ft;break}if(rt===-1)break}const J=y[rt];J&&J.dispatchEvent({type:"connected",data:nt})}}const pt=new k,ot=new k;function z(X,Z,nt){pt.setFromMatrixPosition(Z.matrixWorld),ot.setFromMatrixPosition(nt.matrixWorld);const rt=pt.distanceTo(ot),J=Z.projectionMatrix.elements,ft=nt.projectionMatrix.elements,xt=J[14]/(J[10]-1),$=J[14]/(J[10]+1),Zt=(J[9]+1)/J[5],Rt=(J[9]-1)/J[5],St=(J[8]-1)/J[0],mt=(ft[8]+1)/ft[0],Ut=xt*St,Nt=xt*mt,yt=rt/(-St+mt),te=yt*-St;Z.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(te),X.translateZ(yt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const ee=xt+yt,re=$+yt,me=Ut-te,Yt=Nt+(rt-te),jt=Zt*$/re*ee,ge=Rt*$/re*ee;X.projectionMatrix.makePerspective(me,Yt,jt,ge,ee,re)}function Q(X,Z){Z===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Z.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;N.near=R.near=A.near=X.near,N.far=R.far=A.far=X.far,(O!==N.near||S!==N.far)&&(o.updateRenderState({depthNear:N.near,depthFar:N.far}),O=N.near,S=N.far);const Z=X.parent,nt=N.cameras;Q(N,Z);for(let J=0;J<nt.length;J++)Q(nt[J],Z);N.matrixWorld.decompose(N.position,N.quaternion,N.scale),X.position.copy(N.position),X.quaternion.copy(N.quaternion),X.scale.copy(N.scale),X.matrix.copy(N.matrix),X.matrixWorld.copy(N.matrixWorld);const rt=X.children;for(let J=0,ft=rt.length;J<ft;J++)rt[J].updateMatrixWorld(!0);nt.length===2?z(N,A,R):N.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return N},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(v!==null)return v.fixedFoveation},this.setFoveation=function(X){m!==null&&(m.fixedFoveation=X),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=X)};let j=null;function B(X,Z){if(d=Z.getViewerPose(p||h),b=Z,d!==null){const nt=d.views;v!==null&&(t.setRenderTargetFramebuffer(g,v.framebuffer),t.setRenderTarget(g));let rt=!1;nt.length!==N.cameras.length&&(N.cameras.length=0,rt=!0);for(let J=0;J<nt.length;J++){const ft=nt[J];let xt=null;if(v!==null)xt=v.getViewport(ft);else{const Zt=f.getViewSubImage(m,ft);xt=Zt.viewport,J===0&&(t.setRenderTargetTextures(g,Zt.colorTexture,m.ignoreDepthValues?void 0:Zt.depthStencilTexture),t.setRenderTarget(g))}let $=T[J];$===void 0&&($=new Ve,$.layers.enable(J),$.viewport=new ce,T[J]=$),$.matrix.fromArray(ft.transform.matrix),$.projectionMatrix.fromArray(ft.projectionMatrix),$.viewport.set(xt.x,xt.y,xt.width,xt.height),J===0&&N.matrix.copy($.matrix),rt===!0&&N.cameras.push($)}}for(let nt=0;nt<y.length;nt++){const rt=P[nt],J=y[nt];rt!==null&&J!==void 0&&J.update(rt,Z,p||h)}j&&j(X,Z),b=null}const tt=new Oc;tt.setAnimationLoop(B),this.setAnimationLoop=function(X){j=X},this.dispose=function(){}}}function W_(u,t){function e(x,g){x.fogColor.value.copy(g.color),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,y,P,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(x,g):g.isMeshToonMaterial?(o(x,g),f(x,g)):g.isMeshPhongMaterial?(o(x,g),d(x,g)):g.isMeshStandardMaterial?(o(x,g),m(x,g),g.isMeshPhysicalMaterial&&v(x,g,A)):g.isMeshMatcapMaterial?(o(x,g),b(x,g)):g.isMeshDepthMaterial?o(x,g):g.isMeshDistanceMaterial?(o(x,g),w(x,g)):g.isMeshNormalMaterial?o(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&h(x,g)):g.isPointsMaterial?c(x,g,y,P):g.isSpriteMaterial?p(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.bumpMap&&(x.bumpMap.value=g.bumpMap,x.bumpScale.value=g.bumpScale,g.side===Xe&&(x.bumpScale.value*=-1)),g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap),g.normalMap&&(x.normalMap.value=g.normalMap,x.normalScale.value.copy(g.normalScale),g.side===Xe&&x.normalScale.value.negate()),g.specularMap&&(x.specularMap.value=g.specularMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const y=t.get(g).envMap;if(y&&(x.envMap.value=y,x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const R=u.physicallyCorrectLights!==!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*R}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity);let P;g.map?P=g.map:g.specularMap?P=g.specularMap:g.displacementMap?P=g.displacementMap:g.normalMap?P=g.normalMap:g.bumpMap?P=g.bumpMap:g.roughnessMap?P=g.roughnessMap:g.metalnessMap?P=g.metalnessMap:g.alphaMap?P=g.alphaMap:g.emissiveMap?P=g.emissiveMap:g.clearcoatMap?P=g.clearcoatMap:g.clearcoatNormalMap?P=g.clearcoatNormalMap:g.clearcoatRoughnessMap?P=g.clearcoatRoughnessMap:g.iridescenceMap?P=g.iridescenceMap:g.iridescenceThicknessMap?P=g.iridescenceThicknessMap:g.specularIntensityMap?P=g.specularIntensityMap:g.specularColorMap?P=g.specularColorMap:g.transmissionMap?P=g.transmissionMap:g.thicknessMap?P=g.thicknessMap:g.sheenColorMap?P=g.sheenColorMap:g.sheenRoughnessMap&&(P=g.sheenRoughnessMap),P!==void 0&&(P.isWebGLRenderTarget&&(P=P.texture),P.matrixAutoUpdate===!0&&P.updateMatrix(),x.uvTransform.value.copy(P.matrix));let A;g.aoMap?A=g.aoMap:g.lightMap&&(A=g.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),x.uv2Transform.value.copy(A.matrix))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity}function h(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,y,P){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*y,x.scale.value=P*.5,g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let A;g.map?A=g.map:g.alphaMap&&(A=g.alphaMap),A!==void 0&&(A.matrixAutoUpdate===!0&&A.updateMatrix(),x.uvTransform.value.copy(A.matrix))}function p(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let y;g.map?y=g.map:g.alphaMap&&(y=g.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),x.uvTransform.value.copy(y.matrix))}function d(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.roughness.value=g.roughness,x.metalness.value=g.metalness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap),t.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function v(x,g,y){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),x.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===Xe&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap)}function b(x,g){g.matcap&&(x.matcap.value=g.matcap)}function w(x,g){x.referencePosition.value.copy(g.referencePosition),x.nearDistance.value=g.nearDistance,x.farDistance.value=g.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function j_(){const u=_r("canvas");return u.style.display="block",u}function jc(u={}){this.isWebGLRenderer=!0;const t=u.canvas!==void 0?u.canvas:j_(),e=u.context!==void 0?u.context:null,i=u.depth!==void 0?u.depth:!0,o=u.stencil!==void 0?u.stencil:!0,a=u.antialias!==void 0?u.antialias:!1,h=u.premultipliedAlpha!==void 0?u.premultipliedAlpha:!0,c=u.preserveDrawingBuffer!==void 0?u.preserveDrawingBuffer:!1,p=u.powerPreference!==void 0?u.powerPreference:"default",d=u.failIfMajorPerformanceCaveat!==void 0?u.failIfMajorPerformanceCaveat:!1;let f;e!==null?f=e.getContextAttributes().alpha:f=u.alpha!==void 0?u.alpha:!1;let m=null,v=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ni,this.physicallyCorrectLights=!1,this.toneMapping=pn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const x=this;let g=!1,y=0,P=0,A=null,R=-1,T=null;const N=new ce,O=new ce;let S=null,I=t.width,G=t.height,H=1,pt=null,ot=null;const z=new ce(0,0,I,G),Q=new ce(0,0,I,G);let j=!1;const B=new ko;let tt=!1,X=!1,Z=null;const nt=new ie,rt=new Lt,J=new k,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xt(){return A===null?H:1}let $=e;function Zt(C,U){for(let q=0;q<C.length;q++){const W=C[q],K=t.getContext(W,U);if(K!==null)return K}return null}try{const C={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fo}`),t.addEventListener("webglcontextlost",F,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",at,!1),$===null){const U=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&U.shift(),$=Zt(U,C),$===null)throw Zt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Rt,St,mt,Ut,Nt,yt,te,ee,re,me,Yt,jt,ge,ve,L,M,Y,st,ut,gt,Et,E,et;function ct(){Rt=new nv($),St=new Kg($,Rt,u),Rt.init(St),E=new U_($,Rt,St),mt=new V_($,Rt,St),Ut=new sv,Nt=new M_,yt=new O_($,Rt,mt,Nt,St,E,Ut),te=new Jg(x),ee=new ev(x),re=new vf($,St),et=new Yg($,Rt,re,St),me=new iv($,re,Ut,et),Yt=new cv($,me,re,Ut),ut=new lv($,St,yt),M=new Zg(Nt),jt=new y_(x,te,ee,Rt,St,et,M),ge=new W_(x,Nt),ve=new E_,L=new D_(Rt,St),st=new Xg(x,te,mt,Yt,f,h),Y=new k_(x,Yt,St),gt=new $g($,Rt,Ut,St),Et=new rv($,Rt,Ut,St),Ut.programs=jt.programs,x.capabilities=St,x.extensions=Rt,x.properties=Nt,x.renderLists=ve,x.shadowMap=Y,x.state=mt,x.info=Ut}ct();const ht=new H_(x,$);this.xr=ht,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(C){C!==void 0&&(H=C,this.setSize(I,G,!1))},this.getSize=function(C){return C.set(I,G)},this.setSize=function(C,U,q){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,G=U,t.width=Math.floor(C*H),t.height=Math.floor(U*H),q!==!1&&(t.style.width=C+"px",t.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(I*H,G*H).floor()},this.setDrawingBufferSize=function(C,U,q){I=C,G=U,H=q,t.width=Math.floor(C*q),t.height=Math.floor(U*q),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,U,q,W){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,U,q,W),mt.viewport(N.copy(z).multiplyScalar(H).floor())},this.getScissor=function(C){return C.copy(Q)},this.setScissor=function(C,U,q,W){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,U,q,W),mt.scissor(O.copy(Q).multiplyScalar(H).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){mt.setScissorTest(j=C)},this.setOpaqueSort=function(C){pt=C},this.setTransparentSort=function(C){ot=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(C=!0,U=!0,q=!0){let W=0;C&&(W|=16384),U&&(W|=256),q&&(W|=1024),$.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",F,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",at,!1),ve.dispose(),L.dispose(),Nt.dispose(),te.dispose(),ee.dispose(),Yt.dispose(),et.dispose(),jt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ht),ht.removeEventListener("sessionend",Ft),Z&&(Z.dispose(),Z=null),se.stop()};function F(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const C=Ut.autoReset,U=Y.enabled,q=Y.autoUpdate,W=Y.needsUpdate,K=Y.type;ct(),Ut.autoReset=C,Y.enabled=U,Y.autoUpdate=q,Y.needsUpdate=W,Y.type=K}function at(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Mt(C){const U=C.target;U.removeEventListener("dispose",Mt),_t(U)}function _t(C){bt(C),Nt.remove(C)}function bt(C){const U=Nt.get(C).programs;U!==void 0&&(U.forEach(function(q){jt.releaseProgram(q)}),C.isShaderMaterial&&jt.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,q,W,K,Tt){U===null&&(U=ft);const At=K.isMesh&&K.matrixWorld.determinant()<0,Dt=ps(C,U,q,W,K);mt.setMaterial(W,At);let It=q.index;const zt=q.attributes.position;if(It===null){if(zt===void 0||zt.count===0)return}else if(It.count===0)return;let Bt=1;W.wireframe===!0&&(It=me.getWireframeAttribute(q),Bt=2),et.setup(K,W,Dt,q,It);let Gt,$t=gt;It!==null&&(Gt=re.get(It),$t=Et,$t.setIndex(Gt));const Ye=It!==null?It.count:zt.count,fn=q.drawRange.start*Bt,mn=q.drawRange.count*Bt,Ce=Tt!==null?Tt.start*Bt:0,kt=Tt!==null?Tt.count*Bt:1/0,Le=Math.max(fn,Ce),Jt=Math.min(Ye,fn+mn,Ce+kt)-1,De=Math.max(0,Jt-Le+1);if(De!==0){if(K.isMesh)W.wireframe===!0?(mt.setLineWidth(W.wireframeLinewidth*xt()),$t.setMode(1)):$t.setMode(4);else if(K.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),mt.setLineWidth(Be*xt()),K.isLineSegments?$t.setMode(1):K.isLineLoop?$t.setMode(2):$t.setMode(3)}else K.isPoints?$t.setMode(0):K.isSprite&&$t.setMode(4);if(K.isInstancedMesh)$t.renderInstances(Le,De,K.count);else if(q.isInstancedBufferGeometry){const Be=Math.min(q.instanceCount,q._maxInstanceCount);$t.renderInstances(Le,De,Be)}else $t.render(Le,De)}},this.compile=function(C,U){v=L.get(C),v.init(),w.push(v),C.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(v.pushLight(q),q.castShadow&&v.pushShadow(q))}),v.setupLights(x.physicallyCorrectLights),C.traverse(function(q){const W=q.material;if(W)if(Array.isArray(W))for(let K=0;K<W.length;K++){const Tt=W[K];kn(Tt,C,q)}else kn(W,C,q)}),w.pop(),v=null};let dt=null;function Ct(C){dt&&dt(C)}function Ht(){se.stop()}function Ft(){se.start()}const se=new Oc;se.setAnimationLoop(Ct),typeof self!="undefined"&&se.setContext(self),this.setAnimationLoop=function(C){dt=C,ht.setAnimationLoop(C),C===null?se.stop():se.start()},ht.addEventListener("sessionstart",Ht),ht.addEventListener("sessionend",Ft),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;C.autoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(U),U=ht.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,U,A),v=L.get(C,w.length),v.init(),w.push(v),nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),B.setFromProjectionMatrix(nt),X=this.localClippingEnabled,tt=M.init(this.clippingPlanes,X,U),m=ve.get(C,b.length),m.init(),b.push(m),oe(C,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pt,ot),tt===!0&&M.beginShadows();const q=v.state.shadowsArray;if(Y.render(q,C,U),tt===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(m,C),v.setupLights(x.physicallyCorrectLights),U.isArrayCamera){const W=U.cameras;for(let K=0,Tt=W.length;K<Tt;K++){const At=W[K];Pr(m,C,At,At.viewport)}}else Pr(m,C,U);A!==null&&(yt.updateMultisampleRenderTarget(A),yt.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,U),et.resetDefaultState(),R=-1,T=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function oe(C,U,q,W){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||B.intersectsSprite(C)){W&&J.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nt);const At=Yt.update(C),Dt=C.material;Dt.visible&&m.push(C,At,Dt,q,J.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Ut.render.frame&&(C.skeleton.update(),C.skeleton.frame=Ut.render.frame),!C.frustumCulled||B.intersectsObject(C))){W&&J.setFromMatrixPosition(C.matrixWorld).applyMatrix4(nt);const At=Yt.update(C),Dt=C.material;if(Array.isArray(Dt)){const It=At.groups;for(let zt=0,Bt=It.length;zt<Bt;zt++){const Gt=It[zt],$t=Dt[Gt.materialIndex];$t&&$t.visible&&m.push(C,At,$t,q,J.z,Gt)}}else Dt.visible&&m.push(C,At,Dt,q,J.z,null)}}const Tt=C.children;for(let At=0,Dt=Tt.length;At<Dt;At++)oe(Tt[At],U,q,W)}function Pr(C,U,q,W){const K=C.opaque,Tt=C.transmissive,At=C.transparent;v.setupLightsView(q),Tt.length>0&&Fn(K,U,q),W&&mt.viewport(N.copy(W)),K.length>0&&Nn(K,U,q),Tt.length>0&&Nn(Tt,U,q),At.length>0&&Nn(At,U,q),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Fn(C,U,q){const W=St.isWebGL2;Z===null&&(Z=new ii(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?vr:ei,minFilter:ls,samples:W&&a===!0?4:0})),x.getDrawingBufferSize(rt),W?Z.setSize(rt.x,rt.y):Z.setSize(Lo(rt.x),Lo(rt.y));const K=x.getRenderTarget();x.setRenderTarget(Z),x.clear();const Tt=x.toneMapping;x.toneMapping=pn,Nn(C,U,q),x.toneMapping=Tt,yt.updateMultisampleRenderTarget(Z),yt.updateRenderTargetMipmap(Z),x.setRenderTarget(K)}function Nn(C,U,q){const W=U.isScene===!0?U.overrideMaterial:null;for(let K=0,Tt=C.length;K<Tt;K++){const At=C[K],Dt=At.object,It=At.geometry,zt=W===null?At.material:W,Bt=At.group;Dt.layers.test(q.layers)&&li(Dt,U,q,It,zt,Bt)}}function li(C,U,q,W,K,Tt){C.onBeforeRender(x,U,q,W,K,Tt),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(x,U,q,W,C,Tt),K.transparent===!0&&K.side===Rn?(K.side=Xe,K.needsUpdate=!0,x.renderBufferDirect(q,U,W,K,C,Tt),K.side=gr,K.needsUpdate=!0,x.renderBufferDirect(q,U,W,K,C,Tt),K.side=Rn):x.renderBufferDirect(q,U,W,K,C,Tt),C.onAfterRender(x,U,q,W,K,Tt)}function kn(C,U,q){U.isScene!==!0&&(U=ft);const W=Nt.get(C),K=v.state.lights,Tt=v.state.shadowsArray,At=K.state.version,Dt=jt.getParameters(C,K.state,Tt,U,q),It=jt.getProgramCacheKey(Dt);let zt=W.programs;W.environment=C.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(C.isMeshStandardMaterial?ee:te).get(C.envMap||W.environment),zt===void 0&&(C.addEventListener("dispose",Mt),zt=new Map,W.programs=zt);let Bt=zt.get(It);if(Bt!==void 0){if(W.currentProgram===Bt&&W.lightsStateVersion===At)return ci(C,Dt),Bt}else Dt.uniforms=jt.getUniforms(C),C.onBuild(q,Dt,x),C.onBeforeCompile(Dt,x),Bt=jt.acquireProgram(Dt,It),zt.set(It,Bt),W.uniforms=Dt.uniforms;const Gt=W.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=M.uniform),ci(C,Dt),W.needsLights=ms(C),W.lightsStateVersion=At,W.needsLights&&(Gt.ambientLightColor.value=K.state.ambient,Gt.lightProbe.value=K.state.probe,Gt.directionalLights.value=K.state.directional,Gt.directionalLightShadows.value=K.state.directionalShadow,Gt.spotLights.value=K.state.spot,Gt.spotLightShadows.value=K.state.spotShadow,Gt.rectAreaLights.value=K.state.rectArea,Gt.ltc_1.value=K.state.rectAreaLTC1,Gt.ltc_2.value=K.state.rectAreaLTC2,Gt.pointLights.value=K.state.point,Gt.pointLightShadows.value=K.state.pointShadow,Gt.hemisphereLights.value=K.state.hemi,Gt.directionalShadowMap.value=K.state.directionalShadowMap,Gt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Gt.spotShadowMap.value=K.state.spotShadowMap,Gt.spotShadowMatrix.value=K.state.spotShadowMatrix,Gt.pointShadowMap.value=K.state.pointShadowMap,Gt.pointShadowMatrix.value=K.state.pointShadowMatrix);const $t=Bt.getUniforms(),Ye=os.seqWithValue($t.seq,Gt);return W.currentProgram=Bt,W.uniformsList=Ye,Bt}function ci(C,U){const q=Nt.get(C);q.outputEncoding=U.outputEncoding,q.instancing=U.instancing,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function ps(C,U,q,W,K){U.isScene!==!0&&(U=ft),yt.resetTextureUnits();const Tt=U.fog,At=W.isMeshStandardMaterial?U.environment:null,Dt=A===null?x.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:ni,It=(W.isMeshStandardMaterial?ee:te).get(W.envMap||At),zt=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Bt=!!W.normalMap&&!!q.attributes.tangent,Gt=!!q.morphAttributes.position,$t=!!q.morphAttributes.normal,Ye=!!q.morphAttributes.color,fn=W.toneMapped?x.toneMapping:pn,mn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ce=mn!==void 0?mn.length:0,kt=Nt.get(W),Le=v.state.lights;if(tt===!0&&(X===!0||C!==T)){const Re=C===T&&W.id===R;M.setState(W,C,Re)}let Jt=!1;W.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Le.state.version||kt.outputEncoding!==Dt||K.isInstancedMesh&&kt.instancing===!1||!K.isInstancedMesh&&kt.instancing===!0||K.isSkinnedMesh&&kt.skinning===!1||!K.isSkinnedMesh&&kt.skinning===!0||kt.envMap!==It||W.fog===!0&&kt.fog!==Tt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==M.numPlanes||kt.numIntersection!==M.numIntersection)||kt.vertexAlphas!==zt||kt.vertexTangents!==Bt||kt.morphTargets!==Gt||kt.morphNormals!==$t||kt.morphColors!==Ye||kt.toneMapping!==fn||St.isWebGL2===!0&&kt.morphTargetsCount!==Ce)&&(Jt=!0):(Jt=!0,kt.__version=W.version);let De=kt.currentProgram;Jt===!0&&(De=kn(W,U,K));let Be=!1,gn=!1,ui=!1;const ue=De.getUniforms(),Vn=kt.uniforms;if(mt.useProgram(De.program)&&(Be=!0,gn=!0,ui=!0),W.id!==R&&(R=W.id,gn=!0),Be||T!==C){if(ue.setValue($,"projectionMatrix",C.projectionMatrix),St.logarithmicDepthBuffer&&ue.setValue($,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),T!==C&&(T=C,gn=!0,ui=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Re=ue.map.cameraPosition;Re!==void 0&&Re.setValue($,J.setFromMatrixPosition(C.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue($,"isOrthographic",C.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||K.isSkinnedMesh)&&ue.setValue($,"viewMatrix",C.matrixWorldInverse)}if(K.isSkinnedMesh){ue.setOptional($,K,"bindMatrix"),ue.setOptional($,K,"bindMatrixInverse");const Re=K.skeleton;Re&&(St.floatVertexTextures?(Re.boneTexture===null&&Re.computeBoneTexture(),ue.setValue($,"boneTexture",Re.boneTexture,yt),ue.setValue($,"boneTextureSize",Re.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vn=q.morphAttributes;return(vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0&&St.isWebGL2===!0)&&ut.update(K,q,W,De),(gn||kt.receiveShadow!==K.receiveShadow)&&(kt.receiveShadow=K.receiveShadow,ue.setValue($,"receiveShadow",K.receiveShadow)),gn&&(ue.setValue($,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&fs(Vn,ui),Tt&&W.fog===!0&&ge.refreshFogUniforms(Vn,Tt),ge.refreshMaterialUniforms(Vn,W,H,G,Z),os.upload($,kt.uniformsList,Vn,yt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(os.upload($,kt.uniformsList,Vn,yt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue($,"center",K.center),ue.setValue($,"modelViewMatrix",K.modelViewMatrix),ue.setValue($,"normalMatrix",K.normalMatrix),ue.setValue($,"modelMatrix",K.matrixWorld),De}function fs(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function ms(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,U,q){Nt.get(C.texture).__webglTexture=U,Nt.get(C.depthTexture).__webglTexture=q;const W=Nt.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,U){const q=Nt.get(C);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,q=0){A=C,y=U,P=q;let W=!0;if(C){const It=Nt.get(C);It.__useDefaultFramebuffer!==void 0?(mt.bindFramebuffer(36160,null),W=!1):It.__webglFramebuffer===void 0?yt.setupRenderTarget(C):It.__hasExternalTextures&&yt.rebindTextures(C,Nt.get(C.texture).__webglTexture,Nt.get(C.depthTexture).__webglTexture)}let K=null,Tt=!1,At=!1;if(C){const It=C.texture;(It.isData3DTexture||It.isDataArrayTexture)&&(At=!0);const zt=Nt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(K=zt[U],Tt=!0):St.isWebGL2&&C.samples>0&&yt.useMultisampledRTT(C)===!1?K=Nt.get(C).__webglMultisampledFramebuffer:K=zt,N.copy(C.viewport),O.copy(C.scissor),S=C.scissorTest}else N.copy(z).multiplyScalar(H).floor(),O.copy(Q).multiplyScalar(H).floor(),S=j;if(mt.bindFramebuffer(36160,K)&&St.drawBuffers&&W&&mt.drawBuffers(C,K),mt.viewport(N),mt.scissor(O),mt.setScissorTest(S),Tt){const It=Nt.get(C.texture);$.framebufferTexture2D(36160,36064,34069+U,It.__webglTexture,q)}else if(At){const It=Nt.get(C.texture),zt=U||0;$.framebufferTextureLayer(36160,36064,It.__webglTexture,q||0,zt)}R=-1},this.readRenderTargetPixels=function(C,U,q,W,K,Tt,At){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Nt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&At!==void 0&&(Dt=Dt[At]),Dt){mt.bindFramebuffer(36160,Dt);try{const It=C.texture,zt=It.format,Bt=It.type;if(zt!==Je&&E.convert(zt)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Bt===vr&&(Rt.has("EXT_color_buffer_half_float")||St.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(Bt!==ei&&E.convert(Bt)!==$.getParameter(35738)&&!(Bt===Zn&&(St.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-W&&q>=0&&q<=C.height-K&&$.readPixels(U,q,W,K,E.convert(zt),E.convert(Bt),Tt)}finally{const It=A!==null?Nt.get(A).__webglFramebuffer:null;mt.bindFramebuffer(36160,It)}}},this.copyFramebufferToTexture=function(C,U,q=0){const W=Math.pow(2,-q),K=Math.floor(U.image.width*W),Tt=Math.floor(U.image.height*W);yt.setTexture2D(U,0),$.copyTexSubImage2D(3553,q,0,0,C.x,C.y,K,Tt),mt.unbindTexture()},this.copyTextureToTexture=function(C,U,q,W=0){const K=U.image.width,Tt=U.image.height,At=E.convert(q.format),Dt=E.convert(q.type);yt.setTexture2D(q,0),$.pixelStorei(37440,q.flipY),$.pixelStorei(37441,q.premultiplyAlpha),$.pixelStorei(3317,q.unpackAlignment),U.isDataTexture?$.texSubImage2D(3553,W,C.x,C.y,K,Tt,At,Dt,U.image.data):U.isCompressedTexture?$.compressedTexSubImage2D(3553,W,C.x,C.y,U.mipmaps[0].width,U.mipmaps[0].height,At,U.mipmaps[0].data):$.texSubImage2D(3553,W,C.x,C.y,At,Dt,U.image),W===0&&q.generateMipmaps&&$.generateMipmap(3553),mt.unbindTexture()},this.copyTextureToTexture3D=function(C,U,q,W,K=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Tt=C.max.x-C.min.x+1,At=C.max.y-C.min.y+1,Dt=C.max.z-C.min.z+1,It=E.convert(W.format),zt=E.convert(W.type);let Bt;if(W.isData3DTexture)yt.setTexture3D(W,0),Bt=32879;else if(W.isDataArrayTexture)yt.setTexture2DArray(W,0),Bt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,W.flipY),$.pixelStorei(37441,W.premultiplyAlpha),$.pixelStorei(3317,W.unpackAlignment);const Gt=$.getParameter(3314),$t=$.getParameter(32878),Ye=$.getParameter(3316),fn=$.getParameter(3315),mn=$.getParameter(32877),Ce=q.isCompressedTexture?q.mipmaps[0]:q.image;$.pixelStorei(3314,Ce.width),$.pixelStorei(32878,Ce.height),$.pixelStorei(3316,C.min.x),$.pixelStorei(3315,C.min.y),$.pixelStorei(32877,C.min.z),q.isDataTexture||q.isData3DTexture?$.texSubImage3D(Bt,K,U.x,U.y,U.z,Tt,At,Dt,It,zt,Ce.data):q.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Bt,K,U.x,U.y,U.z,Tt,At,Dt,It,Ce.data)):$.texSubImage3D(Bt,K,U.x,U.y,U.z,Tt,At,Dt,It,zt,Ce),$.pixelStorei(3314,Gt),$.pixelStorei(32878,$t),$.pixelStorei(3316,Ye),$.pixelStorei(3315,fn),$.pixelStorei(32877,mn),K===0&&W.generateMipmaps&&$.generateMipmap(Bt),mt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?yt.setTextureCube(C,0):C.isData3DTexture?yt.setTexture3D(C,0):C.isDataArrayTexture?yt.setTexture2DArray(C,0):yt.setTexture2D(C,0),mt.unbindTexture()},this.resetState=function(){y=0,P=0,A=null,mt.reset(),et.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class q_ extends jc{}q_.prototype.isWebGL1Renderer=!0;class Oo{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=i}clone(){return new Oo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class X_ extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}class Uo extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oc=new k,ac=new k,lc=new ie,yo=new Rc,rs=new cs;class qc extends _e{constructor(t=new ze,e=new Uo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let o=1,a=e.count;o<a;o++)oc.fromBufferAttribute(e,o-1),ac.fromBufferAttribute(e,o),i[o]=i[o-1],i[o]+=oc.distanceTo(ac);t.setAttribute("lineDistance",new Ee(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,o=this.matrixWorld,a=t.params.Line.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rs.copy(i.boundingSphere),rs.applyMatrix4(o),rs.radius+=a,t.ray.intersectsSphere(rs)===!1)return;lc.copy(o).invert(),yo.copy(t.ray).applyMatrix4(lc);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),p=c*c,d=new k,f=new k,m=new k,v=new k,b=this.isLineSegments?2:1,w=i.index,g=i.attributes.position;if(w!==null){const y=Math.max(0,h.start),P=Math.min(w.count,h.start+h.count);for(let A=y,R=P-1;A<R;A+=b){const T=w.getX(A),N=w.getX(A+1);if(d.fromBufferAttribute(g,T),f.fromBufferAttribute(g,N),yo.distanceSqToSegment(d,f,v,m)>p)continue;v.applyMatrix4(this.matrixWorld);const S=t.ray.origin.distanceTo(v);S<t.near||S>t.far||e.push({distance:S,point:m.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,h.start),P=Math.min(g.count,h.start+h.count);for(let A=y,R=P-1;A<R;A+=b){if(d.fromBufferAttribute(g,A),f.fromBufferAttribute(g,A+1),yo.distanceSqToSegment(d,f,v,m)>p)continue;v.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(v);N<t.near||N>t.far||e.push({distance:N,point:m.clone().applyMatrix4(this.matrixWorld),index:A,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const o=e[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=o.length;a<h;a++){const c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}const cc=new k,uc=new k;class Y_ extends qc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let o=0,a=e.count;o<a;o+=2)cc.fromBufferAttribute(e,o),uc.fromBufferAttribute(e,o+1),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+cc.distanceTo(uc);t.setAttribute("lineDistance",new Ee(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zo extends ze{constructor(t=[],e=[],i=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:o};const a=[],h=[];c(o),d(i),f(),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(a.slice(),3)),this.setAttribute("uv",new Ee(h,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function c(P){const A=new k,R=new k,T=new k;for(let N=0;N<e.length;N+=3)b(e[N+0],A),b(e[N+1],R),b(e[N+2],T),p(A,R,T,P)}function p(P,A,R,T){const N=T+1,O=[];for(let S=0;S<=N;S++){O[S]=[];const I=P.clone().lerp(R,S/N),G=A.clone().lerp(R,S/N),H=N-S;for(let pt=0;pt<=H;pt++)pt===0&&S===N?O[S][pt]=I:O[S][pt]=I.clone().lerp(G,pt/H)}for(let S=0;S<N;S++)for(let I=0;I<2*(N-S)-1;I++){const G=Math.floor(I/2);I%2===0?(v(O[S][G+1]),v(O[S+1][G]),v(O[S][G])):(v(O[S][G+1]),v(O[S+1][G+1]),v(O[S+1][G]))}}function d(P){const A=new k;for(let R=0;R<a.length;R+=3)A.x=a[R+0],A.y=a[R+1],A.z=a[R+2],A.normalize().multiplyScalar(P),a[R+0]=A.x,a[R+1]=A.y,a[R+2]=A.z}function f(){const P=new k;for(let A=0;A<a.length;A+=3){P.x=a[A+0],P.y=a[A+1],P.z=a[A+2];const R=g(P)/2/Math.PI+.5,T=y(P)/Math.PI+.5;h.push(R,1-T)}w(),m()}function m(){for(let P=0;P<h.length;P+=6){const A=h[P+0],R=h[P+2],T=h[P+4],N=Math.max(A,R,T),O=Math.min(A,R,T);N>.9&&O<.1&&(A<.2&&(h[P+0]+=1),R<.2&&(h[P+2]+=1),T<.2&&(h[P+4]+=1))}}function v(P){a.push(P.x,P.y,P.z)}function b(P,A){const R=P*3;A.x=t[R+0],A.y=t[R+1],A.z=t[R+2]}function w(){const P=new k,A=new k,R=new k,T=new k,N=new Lt,O=new Lt,S=new Lt;for(let I=0,G=0;I<a.length;I+=9,G+=6){P.set(a[I+0],a[I+1],a[I+2]),A.set(a[I+3],a[I+4],a[I+5]),R.set(a[I+6],a[I+7],a[I+8]),N.set(h[G+0],h[G+1]),O.set(h[G+2],h[G+3]),S.set(h[G+4],h[G+5]),T.copy(P).add(A).add(R).divideScalar(3);const H=g(T);x(N,G+0,P,H),x(O,G+2,A,H),x(S,G+4,R,H)}}function x(P,A,R,T){T<0&&P.x===1&&(h[A]=P.x-1),R.x===0&&R.z===0&&(h[A]=T/2/Math.PI+.5)}function g(P){return Math.atan2(P.z,-P.x)}function y(P){return Math.atan2(-P.y,Math.sqrt(P.x*P.x+P.z*P.z))}}static fromJSON(t){return new zo(t.vertices,t.indices,t.radius,t.details)}}class Bo extends zo{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,o=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Bo(t.radius,t.detail)}}class hs extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const hc={enabled:!1,files:{},add:function(u,t){this.enabled!==!1&&(this.files[u]=t)},get:function(u){if(this.enabled!==!1)return this.files[u]},remove:function(u){delete this.files[u]},clear:function(){this.files={}}};class $_{constructor(t,e,i){const o=this;let a=!1,h=0,c=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){c++,a===!1&&o.onStart!==void 0&&o.onStart(f,h,c),a=!0},this.itemEnd=function(f){h++,o.onProgress!==void 0&&o.onProgress(f,h,c),h===c&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(f){o.onError!==void 0&&o.onError(f)},this.resolveURL=function(f){return p?p(f):f},this.setURLModifier=function(f){return p=f,this},this.addHandler=function(f,m){return d.push(f,m),this},this.removeHandler=function(f){const m=d.indexOf(f);return m!==-1&&d.splice(m,2),this},this.getHandler=function(f){for(let m=0,v=d.length;m<v;m+=2){const b=d[m],w=d[m+1];if(b.global&&(b.lastIndex=0),b.test(f))return w}return null}}}const K_=new $_;class Xc{constructor(t){this.manager=t!==void 0?t:K_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(o,a){i.load(t,o,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Z_ extends Xc{constructor(t){super(t)}load(t,e,i,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,h=hc.get(t);if(h!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(h),a.manager.itemEnd(t)},0),h;const c=_r("img");function p(){f(),hc.add(t,this),e&&e(this),a.manager.itemEnd(t)}function d(m){f(),o&&o(m),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){c.removeEventListener("load",p,!1),c.removeEventListener("error",d,!1)}return c.addEventListener("load",p,!1),c.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(t),c.src=t,c}}class J_ extends Xc{constructor(t){super(t)}load(t,e,i,o){const a=new Ue,h=new Z_(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(c){a.image=c,a.needsUpdate=!0,e!==void 0&&e(a)},i,o),a}}class Yc extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const dc=new ie,pc=new k,fc=new k;class Q_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(e.projectionMatrix),i.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class t0 extends Q_{constructor(){super(new Uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e0 extends Yc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DefaultUp),this.updateMatrix(),this.target=new _e,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class n0 extends Yc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class mc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class i0 extends Y_{constructor(t=10,e=10,i=4473924,o=8947848){i=new Wt(i),o=new Wt(o);const a=e/2,h=t/e,c=t/2,p=[],d=[];for(let v=0,b=0,w=-c;v<=e;v++,w+=h){p.push(-c,0,w,c,0,w),p.push(w,0,-c,w,0,c);const x=v===a?i:o;x.toArray(d,b),b+=3,x.toArray(d,b),b+=3,x.toArray(d,b),b+=3,x.toArray(d,b),b+=3}const f=new ze;f.setAttribute("position",new Ee(p,3)),f.setAttribute("color",new Ee(d,3));const m=new Uo({vertexColors:!0,toneMapped:!1});super(f,m),this.type="GridHelper"}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);const gc={type:"change"},Mo={type:"start"},vc={type:"end"};class r0 extends oi{constructor(t,e){super(),e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",ve),this._domElementKeyEvents=E},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(gc),i.update(),a=o.NONE},this.update=function(){const E=new k,et=new ri().setFromUnitVectors(t.up,new k(0,1,0)),ct=et.clone().invert(),ht=new k,F=new ri,lt=2*Math.PI;return function(){const Mt=i.object.position;E.copy(Mt).sub(i.target),E.applyQuaternion(et),c.setFromVector3(E),i.autoRotate&&a===o.NONE&&I(O()),i.enableDamping?(c.theta+=p.theta*i.dampingFactor,c.phi+=p.phi*i.dampingFactor):(c.theta+=p.theta,c.phi+=p.phi);let _t=i.minAzimuthAngle,bt=i.maxAzimuthAngle;return isFinite(_t)&&isFinite(bt)&&(_t<-Math.PI?_t+=lt:_t>Math.PI&&(_t-=lt),bt<-Math.PI?bt+=lt:bt>Math.PI&&(bt-=lt),_t<=bt?c.theta=Math.max(_t,Math.min(bt,c.theta)):c.theta=c.theta>(_t+bt)/2?Math.max(_t,c.theta):Math.min(bt,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=d,c.radius=Math.max(i.minDistance,Math.min(i.maxDistance,c.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),E.setFromSpherical(c),E.applyQuaternion(ct),Mt.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(p.theta*=1-i.dampingFactor,p.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(p.set(0,0,0),f.set(0,0,0)),d=1,m||ht.distanceToSquared(i.object.position)>h||8*(1-F.dot(i.object.quaternion))>h?(i.dispatchEvent(gc),ht.copy(i.object.position),F.copy(i.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Y),i.domElement.removeEventListener("pointerdown",te),i.domElement.removeEventListener("pointercancel",me),i.domElement.removeEventListener("wheel",ge),i.domElement.removeEventListener("pointermove",ee),i.domElement.removeEventListener("pointerup",re),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ve)};const i=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const h=1e-6,c=new mc,p=new mc;let d=1;const f=new k;let m=!1;const v=new Lt,b=new Lt,w=new Lt,x=new Lt,g=new Lt,y=new Lt,P=new Lt,A=new Lt,R=new Lt,T=[],N={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function I(E){p.theta-=E}function G(E){p.phi-=E}const H=function(){const E=new k;return function(ct,ht){E.setFromMatrixColumn(ht,0),E.multiplyScalar(-ct),f.add(E)}}(),pt=function(){const E=new k;return function(ct,ht){i.screenSpacePanning===!0?E.setFromMatrixColumn(ht,1):(E.setFromMatrixColumn(ht,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(ct),f.add(E)}}(),ot=function(){const E=new k;return function(ct,ht){const F=i.domElement;if(i.object.isPerspectiveCamera){const lt=i.object.position;E.copy(lt).sub(i.target);let at=E.length();at*=Math.tan(i.object.fov/2*Math.PI/180),H(2*ct*at/F.clientHeight,i.object.matrix),pt(2*ht*at/F.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(ct*(i.object.right-i.object.left)/i.object.zoom/F.clientWidth,i.object.matrix),pt(ht*(i.object.top-i.object.bottom)/i.object.zoom/F.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(E){i.object.isPerspectiveCamera?d/=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*E)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Q(E){i.object.isPerspectiveCamera?d*=E:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/E)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(E){v.set(E.clientX,E.clientY)}function B(E){P.set(E.clientX,E.clientY)}function tt(E){x.set(E.clientX,E.clientY)}function X(E){b.set(E.clientX,E.clientY),w.subVectors(b,v).multiplyScalar(i.rotateSpeed);const et=i.domElement;I(2*Math.PI*w.x/et.clientHeight),G(2*Math.PI*w.y/et.clientHeight),v.copy(b),i.update()}function Z(E){A.set(E.clientX,E.clientY),R.subVectors(A,P),R.y>0?z(S()):R.y<0&&Q(S()),P.copy(A),i.update()}function nt(E){g.set(E.clientX,E.clientY),y.subVectors(g,x).multiplyScalar(i.panSpeed),ot(y.x,y.y),x.copy(g),i.update()}function rt(E){E.deltaY<0?Q(S()):E.deltaY>0&&z(S()),i.update()}function J(E){let et=!1;switch(E.code){case i.keys.UP:ot(0,i.keyPanSpeed),et=!0;break;case i.keys.BOTTOM:ot(0,-i.keyPanSpeed),et=!0;break;case i.keys.LEFT:ot(i.keyPanSpeed,0),et=!0;break;case i.keys.RIGHT:ot(-i.keyPanSpeed,0),et=!0;break}et&&(E.preventDefault(),i.update())}function ft(){if(T.length===1)v.set(T[0].pageX,T[0].pageY);else{const E=.5*(T[0].pageX+T[1].pageX),et=.5*(T[0].pageY+T[1].pageY);v.set(E,et)}}function xt(){if(T.length===1)x.set(T[0].pageX,T[0].pageY);else{const E=.5*(T[0].pageX+T[1].pageX),et=.5*(T[0].pageY+T[1].pageY);x.set(E,et)}}function $(){const E=T[0].pageX-T[1].pageX,et=T[0].pageY-T[1].pageY,ct=Math.sqrt(E*E+et*et);P.set(0,ct)}function Zt(){i.enableZoom&&$(),i.enablePan&&xt()}function Rt(){i.enableZoom&&$(),i.enableRotate&&ft()}function St(E){if(T.length==1)b.set(E.pageX,E.pageY);else{const ct=Et(E),ht=.5*(E.pageX+ct.x),F=.5*(E.pageY+ct.y);b.set(ht,F)}w.subVectors(b,v).multiplyScalar(i.rotateSpeed);const et=i.domElement;I(2*Math.PI*w.x/et.clientHeight),G(2*Math.PI*w.y/et.clientHeight),v.copy(b)}function mt(E){if(T.length===1)g.set(E.pageX,E.pageY);else{const et=Et(E),ct=.5*(E.pageX+et.x),ht=.5*(E.pageY+et.y);g.set(ct,ht)}y.subVectors(g,x).multiplyScalar(i.panSpeed),ot(y.x,y.y),x.copy(g)}function Ut(E){const et=Et(E),ct=E.pageX-et.x,ht=E.pageY-et.y,F=Math.sqrt(ct*ct+ht*ht);A.set(0,F),R.set(0,Math.pow(A.y/P.y,i.zoomSpeed)),z(R.y),P.copy(A)}function Nt(E){i.enableZoom&&Ut(E),i.enablePan&&mt(E)}function yt(E){i.enableZoom&&Ut(E),i.enableRotate&&St(E)}function te(E){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",ee),i.domElement.addEventListener("pointerup",re)),st(E),E.pointerType==="touch"?L(E):Yt(E))}function ee(E){i.enabled!==!1&&(E.pointerType==="touch"?M(E):jt(E))}function re(E){ut(E),T.length===0&&(i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",ee),i.domElement.removeEventListener("pointerup",re)),i.dispatchEvent(vc),a=o.NONE}function me(E){ut(E)}function Yt(E){let et;switch(E.button){case 0:et=i.mouseButtons.LEFT;break;case 1:et=i.mouseButtons.MIDDLE;break;case 2:et=i.mouseButtons.RIGHT;break;default:et=-1}switch(et){case xi.DOLLY:if(i.enableZoom===!1)return;B(E),a=o.DOLLY;break;case xi.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;tt(E),a=o.PAN}else{if(i.enableRotate===!1)return;j(E),a=o.ROTATE}break;case xi.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;j(E),a=o.ROTATE}else{if(i.enablePan===!1)return;tt(E),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Mo)}function jt(E){if(i.enabled!==!1)switch(a){case o.ROTATE:if(i.enableRotate===!1)return;X(E);break;case o.DOLLY:if(i.enableZoom===!1)return;Z(E);break;case o.PAN:if(i.enablePan===!1)return;nt(E);break}}function ge(E){i.enabled===!1||i.enableZoom===!1||a!==o.NONE||(E.preventDefault(),i.dispatchEvent(Mo),rt(E),i.dispatchEvent(vc))}function ve(E){i.enabled===!1||i.enablePan===!1||J(E)}function L(E){switch(gt(E),T.length){case 1:switch(i.touches.ONE){case bi.ROTATE:if(i.enableRotate===!1)return;ft(),a=o.TOUCH_ROTATE;break;case bi.PAN:if(i.enablePan===!1)return;xt(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(i.touches.TWO){case bi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Zt(),a=o.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Rt(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&i.dispatchEvent(Mo)}function M(E){switch(gt(E),a){case o.TOUCH_ROTATE:if(i.enableRotate===!1)return;St(E),i.update();break;case o.TOUCH_PAN:if(i.enablePan===!1)return;mt(E),i.update();break;case o.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Nt(E),i.update();break;case o.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;yt(E),i.update();break;default:a=o.NONE}}function Y(E){i.enabled!==!1&&E.preventDefault()}function st(E){T.push(E)}function ut(E){delete N[E.pointerId];for(let et=0;et<T.length;et++)if(T[et].pointerId==E.pointerId){T.splice(et,1);return}}function gt(E){let et=N[E.pointerId];et===void 0&&(et=new Lt,N[E.pointerId]=et),et.set(E.pageX,E.pageY)}function Et(E){const et=E.pointerId===T[0].pointerId?T[1]:T[0];return N[et.pointerId]}i.domElement.addEventListener("contextmenu",Y),i.domElement.addEventListener("pointerdown",te),i.domElement.addEventListener("pointercancel",me),i.domElement.addEventListener("wheel",ge,{passive:!1}),this.update()}}var mr=function(){var u=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(f){f.preventDefault(),i(++u%t.children.length)},!1);function e(f){return t.appendChild(f.dom),f}function i(f){for(var m=0;m<t.children.length;m++)t.children[m].style.display=m===f?"block":"none";u=f}var o=(performance||Date).now(),a=o,h=0,c=e(new mr.Panel("FPS","#0ff","#002")),p=e(new mr.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=e(new mr.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:t,addPanel:e,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){h++;var f=(performance||Date).now();if(p.update(f-o,200),f>=a+1e3&&(c.update(h*1e3/(f-a),100),a=f,h=0,d)){var m=performance.memory;d.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return f},update:function(){o=this.end()},domElement:t,setMode:i}};mr.Panel=function(u,t,e){var i=1/0,o=0,a=Math.round,h=a(window.devicePixelRatio||1),c=80*h,p=48*h,d=3*h,f=2*h,m=3*h,v=15*h,b=74*h,w=30*h,x=document.createElement("canvas");x.width=c,x.height=p,x.style.cssText="width:80px;height:48px";var g=x.getContext("2d");return g.font="bold "+9*h+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=e,g.fillRect(0,0,c,p),g.fillStyle=t,g.fillText(u,d,f),g.fillRect(m,v,b,w),g.fillStyle=e,g.globalAlpha=.9,g.fillRect(m,v,b,w),{dom:x,update:function(y,P){i=Math.min(i,y),o=Math.max(o,y),g.fillStyle=e,g.globalAlpha=1,g.fillRect(0,0,c,v),g.fillStyle=t,g.fillText(a(y)+" "+u+" ("+a(i)+"-"+a(o)+")",d,f),g.drawImage(x,m+h,v,b-h,w,m,v,b-h,w),g.fillRect(m+b-h,v,h,w),g.fillStyle=e,g.globalAlpha=.9,g.fillRect(m+b-h,v,h,a((1-y/P)*w))}}};const ai=new jc({antialias:!0});ai.setPixelRatio(window.devicePixelRatio);ai.shadowMap.enabled=!0;ai.shadowMap.type=bc;document.body.appendChild(ai.domElement);const Go=mr();Go.dom.id="stats";document.body.appendChild(Go.dom);const xr=new Ve(75,1,.1,1e3);xr.position.set(30,30,30);const br=new r0(xr,ai.domElement);br.enableDamping=br.autoRotate=!0;br.maxPolarAngle=Math.PI/2-.03;br.maxDistance=30;const tn=new X_;tn.fog=new Oo(0,40,80);const wr=new e0(16777215,1);wr.shadow.mapSize.width=wr.shadow.mapSize.height=1024;wr.position.set(10,10,10);wr.castShadow=!0;tn.add(wr);const s0=new n0(4210752);tn.add(s0);const $c=()=>{xr.aspect=window.innerWidth/window.innerHeight,xr.updateProjectionMatrix(),ai.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",$c);$c();const Kc=()=>{window.requestAnimationFrame(Kc),br.update(),ai.render(tn,xr),Go.update()};Kc();class o0 extends fr{}const a0=(u,t,e=10)=>{const i=new k().subVectors(t,u).normalize();let o=new k(0,1,0),a=new k(e,0,e);const h=new k().copy(i).multiply(a).applyAxisAngle(o,Math.PI/2).add(t),c=new k().copy(i).multiply(a).applyAxisAngle(o,Math.PI/-2).add(t);return[h,c]};class l0 extends Ae{constructor(t={}){if(super(new ze,new No({side:Rn})),this.vertices=new Float32Array,this.indices=new Uint32Array,this.width=t.width!=null?t.width:1,this.maxLength=t.maxLength||100,this.color=new Wt(t.color).toArray()||[1,1,1],t.vertexColors?(this.material.vertexColors=t.vertexColors,this.colors=new Float32Array((this.color.join(",")+",").repeat(this.maxLength).split(","))):t.color&&(this.material.color=new Wt(t.color)),t.uv){this.uvs=new Float32Array(new Array(this.maxLength*2));for(let e=0;e<this.uvs.length;e+=4){let i=1-e/this.uvs.length;this.uvs.set([0,i,1,i],e)}this.geometry.setAttribute("uv",new Se(this.uvs,2))}this.lastVertex=null}move(t,e={}){if(this.vertices.length<this.maxLength*6){const o=this.vertices;this.vertices=new Float32Array(o.length+6),this.vertices.set(o,6)}else this.vertices.copyWithin(6);const i=e.width!=null?e.width:this.width;if(this.lastVertex){const[o,a]=a0(this.lastVertex,t,i);this.vertices.set(o.toArray()),this.vertices.set(a.toArray(),3)}else this.vertices.set(t.toArray()),this.vertices.set(t.toArray(),3);if(this.colors){const o=e.color!=null?e.color:this.color;this.colors.copyWithin(6),this.colors.set([...o,...o].flat())}if(this.vertices.length>=12&&this.indices.length<this.maxLength*3){const o=this.indices;this.indices=new Uint32Array(o.length+6),this.indices.set(o);const a=(this.indices.length/6-1)*2;this.indices.set([[a,a+1,a+3],[a,a+3,a+2]].flat(),this.indices.length-6)}this.updateGeometry(),this.lastVertex=t}updateGeometry(){this.geometry.setIndex(new Se(this.indices,3)),this.geometry.setAttribute("position",new Se(this.vertices,3)),this.geometry.attributes.position.needsUpdate=!0,this.colors&&(this.geometry.setAttribute("color",new Se(this.colors,3)),this.geometry.attributes.color.needsUpdate=!0)}clear(){this.lastVertex=null,this.vertices=new Float32Array,this.indices=new Uint32Array}}const c0=.2;class u0 extends o0{constructor(){super(),this._mesh=new Ae(new Bo(c0,2),new hs({color:"#cf0"})),this._mesh.castShadow=!0,this.ribbon=new l0({width:.1,uv:!0}),this.ribbon.material.alphaMap=new J_().load("./alpha2.png"),this.ribbon.material.transparent=!0,this.add(this.ribbon),this.add(this._mesh)}move(t,e,i){this.position.set(t,e,i),this.ribbon.move(new k(t,e,i)),this.ribbon.position.set(-t,-e,-i)}}var h0=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ro={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(u,t){(function(e,i){i(t)})(h0,function(e){class i{constructor(n){const[r,l]=n.split("-"),_=r.split(".");this.major=parseInt(_[0],10),this.minor=parseInt(_[1],10),this.patch=parseInt(_[2],10),this.prerelease=l!=null?l:null}toString(){const n=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[n,this.prerelease].join("-"):n}}class o{constructor(n){this.controller_=n}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(n){this.controller_.viewProps.set("disabled",n)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(n){this.controller_.viewProps.set("hidden",n)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class a{constructor(n){this.target=n}}class h extends a{constructor(n,r,l,_){super(n),this.value=r,this.presetKey=l,this.last=_!=null?_:!0}}class c extends a{constructor(n,r,l){super(n),this.value=r,this.presetKey=l}}class p extends a{constructor(n,r){super(n),this.expanded=r}}class d extends a{constructor(n,r){super(n),this.index=r}}function f(s){return s}function m(s){return s==null}function v(s,n){if(s.length!==n.length)return!1;for(let r=0;r<s.length;r++)if(s[r]!==n[r])return!1;return!0}const b={alreadydisposed:()=>"View has been already disposed",invalidparams:s=>`Invalid parameters for '${s.name}'`,nomatchingcontroller:s=>`No matching controller for '${s.key}'`,nomatchingview:s=>`No matching view for '${JSON.stringify(s.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:s=>`Property '${s.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class w{constructor(n){var r;this.message=(r=b[n.type](n.context))!==null&&r!==void 0?r:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=n.type}static alreadyDisposed(){return new w({type:"alreadydisposed"})}static notBindable(){return new w({type:"notbindable"})}static propertyNotFound(n){return new w({type:"propertynotfound",context:{name:n}})}static shouldNeverHappen(){return new w({type:"shouldneverhappen"})}}class x{constructor(n,r,l){this.obj_=n,this.key_=r,this.presetKey_=l!=null?l:r}static isBindable(n){return!(n===null||typeof n!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(n){this.obj_[this.key_]=n}writeProperty(n,r){const l=this.read();if(!x.isBindable(l))throw w.notBindable();if(!(n in l))throw w.propertyNotFound(n);l[n]=r}}class g extends o{get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get title(){var n;return(n=this.controller_.valueController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.valueController.props.set("title",n)}on(n,r){const l=r.bind(this);return this.controller_.valueController.emitter.on(n,()=>{l(new a(this))}),this}}class y{constructor(){this.observers_={}}on(n,r){let l=this.observers_[n];return l||(l=this.observers_[n]=[]),l.push({handler:r}),this}off(n,r){const l=this.observers_[n];return l&&(this.observers_[n]=l.filter(_=>_.handler!==r)),this}emit(n,r){const l=this.observers_[n];!l||l.forEach(_=>{_.handler(r)})}}const P="tp";function A(s){return(r,l)=>[P,"-",s,"v",r?`_${r}`:"",l?`-${l}`:""].join("")}function R(s,n){return r=>n(s(r))}function T(s){return s.rawValue}function N(s,n){s.emitter.on("change",R(T,n)),n(s.rawValue)}function O(s,n,r){N(s.value(n),r)}function S(s,n,r){r?s.classList.add(n):s.classList.remove(n)}function I(s,n){return r=>{S(s,n,r)}}function G(s,n){N(s,r=>{n.textContent=r!=null?r:""})}const H=A("btn");class pt{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(H()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("button");l.classList.add(H("b")),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l;const _=n.createElement("div");_.classList.add(H("t")),G(r.props.value("title"),_),this.buttonElement.appendChild(_)}}class ot{constructor(n,r){this.emitter=new y,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new pt(n,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class z{constructor(n,r){var l;this.constraint_=r==null?void 0:r.constraint,this.equals_=(l=r==null?void 0:r.equals)!==null&&l!==void 0?l:(_,D)=>_===D,this.emitter=new y,this.rawValue_=n}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const l=r!=null?r:{forceEmit:!1,last:!0},_=this.constraint_?this.constraint_.constrain(n):n;!!this.equals_(this.rawValue_,_)&&!l.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=_,this.emitter.emit("change",{options:l,rawValue:_,sender:this}))}}class Q{constructor(n){this.emitter=new y,this.value_=n}get rawValue(){return this.value_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const l=r!=null?r:{forceEmit:!1,last:!0};this.value_===n&&!l.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=n,this.emitter.emit("change",{options:l,rawValue:this.value_,sender:this}))}}function j(s,n){const r=n==null?void 0:n.constraint,l=n==null?void 0:n.equals;return!r&&!l?new Q(s):new z(s,n)}class B{constructor(n){this.emitter=new y,this.valMap_=n;for(const r in this.valMap_)this.valMap_[r].emitter.on("change",()=>{this.emitter.emit("change",{key:r,sender:this})})}static createCore(n){return Object.keys(n).reduce((l,_)=>Object.assign(l,{[_]:j(n[_])}),{})}static fromObject(n){const r=this.createCore(n);return new B(r)}get(n){return this.valMap_[n].rawValue}set(n,r){this.valMap_[n].rawValue=r}value(n){return this.valMap_[n]}}function tt(s,n){const l=Object.keys(n).reduce((_,D)=>{if(_===void 0)return;const V=n[D],it=V(s[D]);return it.succeeded?Object.assign(Object.assign({},_),{[D]:it.value}):void 0},{});return l}function X(s,n){return s.reduce((r,l)=>{if(r===void 0)return;const _=n(l);if(!(!_.succeeded||_.value===void 0))return[...r,_.value]},[])}function Z(s){return s===null?!1:typeof s=="object"}function nt(s){return n=>r=>{if(!n&&r===void 0)return{succeeded:!1,value:void 0};if(n&&r===void 0)return{succeeded:!0,value:void 0};const l=s(r);return l!==void 0?{succeeded:!0,value:l}:{succeeded:!1,value:void 0}}}function rt(s){return{custom:n=>nt(n)(s),boolean:nt(n=>typeof n=="boolean"?n:void 0)(s),number:nt(n=>typeof n=="number"?n:void 0)(s),string:nt(n=>typeof n=="string"?n:void 0)(s),function:nt(n=>typeof n=="function"?n:void 0)(s),constant:n=>nt(r=>r===n?n:void 0)(s),raw:nt(n=>n)(s),object:n=>nt(r=>{if(!!Z(r))return tt(r,n)})(s),array:n=>nt(r=>{if(!!Array.isArray(r))return X(r,n)})(s)}}const J={optional:rt(!0),required:rt(!1)};function ft(s,n){const r=J.required.object(n)(s);return r.succeeded?r.value:void 0}function xt(s){return s&&s.parentElement&&s.parentElement.removeChild(s),null}function $(){return["veryfirst","first","last","verylast"]}const Zt=A(""),Rt={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class St{constructor(n){this.parent_=null,this.blade=n.blade,this.view=n.view,this.viewProps=n.viewProps;const r=this.view.element;this.blade.value("positions").emitter.on("change",()=>{$().forEach(l=>{r.classList.remove(Zt(void 0,Rt[l]))}),this.blade.get("positions").forEach(l=>{r.classList.add(Zt(void 0,Rt[l]))})}),this.viewProps.handleDispose(()=>{xt(r)})}get parent(){return this.parent_}}const mt="http://www.w3.org/2000/svg";function Ut(s){s.offsetHeight}function Nt(s,n){const r=s.style.transition;s.style.transition="none",n(),s.style.transition=r}function yt(s){return s.ontouchstart!==void 0}function te(){return new Function("return this")()}function ee(){return te().document}function re(s){const n=s.ownerDocument.defaultView;return n&&"document"in n?s.getContext("2d"):null}const me={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Yt(s,n){const r=s.createElementNS(mt,"svg");return r.innerHTML=me[n],r}function jt(s,n,r){s.insertBefore(n,s.children[r])}function ge(s){s.parentElement&&s.parentElement.removeChild(s)}function ve(s){for(;s.children.length>0;)s.removeChild(s.children[0])}function L(s){for(;s.childNodes.length>0;)s.removeChild(s.childNodes[0])}function M(s){return s.relatedTarget?s.relatedTarget:"explicitOriginalTarget"in s?s.explicitOriginalTarget:null}const Y=A("lbl");function st(s,n){const r=s.createDocumentFragment();return n.split(`
`).map(_=>s.createTextNode(_)).forEach((_,D)=>{D>0&&r.appendChild(s.createElement("br")),r.appendChild(_)}),r}class ut{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Y()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(Y("l")),O(r.props,"label",D=>{m(D)?this.element.classList.add(Y(void 0,"nol")):(this.element.classList.remove(Y(void 0,"nol")),L(l),l.appendChild(st(n,D)))}),this.element.appendChild(l),this.labelElement=l;const _=n.createElement("div");_.classList.add(Y("v")),this.element.appendChild(_),this.valueElement=_}}class gt extends St{constructor(n,r){const l=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{view:new ut(n,{props:r.props,viewProps:l}),viewProps:l})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Et={id:"button",type:"blade",accept(s){const n=J,r=ft(s,{title:n.required.string,view:n.required.constant("button"),label:n.optional.string});return r?{params:r}:null},controller(s){return new gt(s.document,{blade:s.blade,props:B.fromObject({label:s.params.label}),valueController:new ot(s.document,{props:B.fromObject({title:s.params.title}),viewProps:s.viewProps})})},api(s){return!(s.controller instanceof gt)||!(s.controller.valueController instanceof ot)?null:new g(s.controller)}};class E extends St{constructor(n){super(n),this.value=n.value}}function et(){return new B({positions:j([],{equals:v})})}class ct extends B{constructor(n){super(n)}static create(n){const r={completed:!0,expanded:n,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},l=B.createCore(r);return new ct(l)}get styleExpanded(){var n;return(n=this.get("temporaryExpanded"))!==null&&n!==void 0?n:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const n=this.get("expandedHeight");return this.get("shouldFixHeight")&&!m(n)?`${n}px`:"auto"}bindExpandedClass(n,r){const l=()=>{this.styleExpanded?n.classList.add(r):n.classList.remove(r)};O(this,"expanded",l),O(this,"temporaryExpanded",l)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function ht(s,n){let r=0;return Nt(n,()=>{s.set("expandedHeight",null),s.set("temporaryExpanded",!0),Ut(n),r=n.clientHeight,s.set("temporaryExpanded",null),Ut(n)}),r}function F(s,n){n.style.height=s.styleHeight}function lt(s,n){s.value("expanded").emitter.on("beforechange",()=>{s.set("completed",!1),m(s.get("expandedHeight"))&&s.set("expandedHeight",ht(s,n)),s.set("shouldFixHeight",!0),Ut(n)}),s.emitter.on("change",()=>{F(s,n)}),F(s,n),n.addEventListener("transitionend",r=>{r.propertyName==="height"&&s.cleanUpTransition()})}class at extends o{constructor(n,r){super(n),this.rackApi_=r}}function Mt(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"button"}))}function _t(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"folder"}))}function bt(s,n){const r=n!=null?n:{};return s.addBlade(Object.assign(Object.assign({},r),{view:"separator"}))}function dt(s,n){return s.addBlade(Object.assign(Object.assign({},n),{view:"tab"}))}class Ct{constructor(n){this.emitter=new y,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=n}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(n){for(const r of this.allItems())if(n(r))return r;return null}includes(n){return this.cache_.has(n)}add(n,r){if(this.includes(n))throw w.shouldNeverHappen();const l=r!==void 0?r:this.items_.length;this.items_.splice(l,0,n),this.cache_.add(n);const _=this.extract_(n);_&&(_.emitter.on("add",this.onSubListAdd_),_.emitter.on("remove",this.onSubListRemove_),_.allItems().forEach(D=>{this.cache_.add(D)})),this.emitter.emit("add",{index:l,item:n,root:this,target:this})}remove(n){const r=this.items_.indexOf(n);if(r<0)return;this.items_.splice(r,1),this.cache_.delete(n);const l=this.extract_(n);l&&(l.emitter.off("add",this.onSubListAdd_),l.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:r,item:n,root:this,target:this})}onSubListAdd_(n){this.cache_.add(n.item),this.emitter.emit("add",{index:n.index,item:n.item,root:this,target:n.target})}onSubListRemove_(n){this.cache_.delete(n.item),this.emitter.emit("remove",{index:n.index,item:n.item,root:this,target:n.target})}}class Ht extends o{constructor(n){super(n),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new y,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,_=>{l(_.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(n){const r=n.sender.target.read();this.emitter_.emit("change",{event:new h(this,r,this.controller_.binding.target.presetKey,n.options.last)})}}class Ft extends gt{constructor(n,r){super(n,r),this.binding=r.binding}}class se extends o{constructor(n){super(n),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new y,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,_=>{l(_.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(n){const r=n.sender.target.read();this.emitter_.emit("update",{event:new c(this,r,this.controller_.binding.target.presetKey)})}}class oe extends gt{constructor(n,r){super(n,r),this.binding=r.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function Pr(s){return s instanceof li?s.apiSet_:s instanceof at?s.rackApi_.apiSet_:null}function Fn(s,n){const r=s.find(l=>l.controller_===n);if(!r)throw w.shouldNeverHappen();return r}function Nn(s,n,r){if(!x.isBindable(s))throw w.notBindable();return new x(s,n,r)}class li extends o{constructor(n,r){super(n),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new y,this.apiSet_=new Ct(Pr),this.pool_=r;const l=this.controller_.rack;l.emitter.on("add",this.onRackAdd_),l.emitter.on("remove",this.onRackRemove_),l.emitter.on("inputchange",this.onRackInputChange_),l.emitter.on("monitorupdate",this.onRackMonitorUpdate_),l.children.forEach(_=>{this.setUpApi_(_)})}get children(){return this.controller_.rack.children.map(n=>Fn(this.apiSet_,n))}addInput(n,r,l){const _=l!=null?l:{},D=this.controller_.view.element.ownerDocument,V=this.pool_.createInput(D,Nn(n,r,_.presetKey),_),it=new Ht(V);return this.add(it,_.index)}addMonitor(n,r,l){const _=l!=null?l:{},D=this.controller_.view.element.ownerDocument,V=this.pool_.createMonitor(D,Nn(n,r),_),it=new se(V);return this.add(it,_.index)}addFolder(n){return _t(this,n)}addButton(n){return Mt(this,n)}addSeparator(n){return bt(this,n)}addTab(n){return dt(this,n)}add(n,r){this.controller_.rack.add(n.controller_,r);const l=this.apiSet_.find(_=>_.controller_===n.controller_);return l&&this.apiSet_.remove(l),this.apiSet_.add(n),n}remove(n){this.controller_.rack.remove(n.controller_)}addBlade(n){const r=this.controller_.view.element.ownerDocument,l=this.pool_.createBlade(r,n),_=this.pool_.createBladeApi(l);return this.add(_,n.index)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,_=>{l(_.event)}),this}setUpApi_(n){this.apiSet_.find(l=>l.controller_===n)||this.apiSet_.add(this.pool_.createBladeApi(n))}onRackAdd_(n){this.setUpApi_(n.bladeController)}onRackRemove_(n){if(n.isRoot){const r=Fn(this.apiSet_,n.bladeController);this.apiSet_.remove(r)}}onRackInputChange_(n){const r=n.bladeController;if(r instanceof Ft){const l=Fn(this.apiSet_,r),_=r.binding;this.emitter_.emit("change",{event:new h(l,_.target.read(),_.target.presetKey,n.options.last)})}else if(r instanceof E){const l=Fn(this.apiSet_,r);this.emitter_.emit("change",{event:new h(l,r.value.rawValue,void 0,n.options.last)})}}onRackMonitorUpdate_(n){if(!(n.bladeController instanceof oe))throw w.shouldNeverHappen();const r=Fn(this.apiSet_,n.bladeController),l=n.bladeController.binding;this.emitter_.emit("update",{event:new c(r,l.target.read(),l.target.presetKey)})}}class kn extends at{constructor(n,r){super(n,new li(n.rackController,r)),this.emitter_=new y,this.controller_.foldable.value("expanded").emitter.on("change",l=>{this.emitter_.emit("fold",{event:new p(this,l.sender.rawValue)})}),this.rackApi_.on("change",l=>{this.emitter_.emit("change",{event:l})}),this.rackApi_.on("update",l=>{this.emitter_.emit("update",{event:l})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(n){this.controller_.foldable.set("expanded",n)}get title(){return this.controller_.props.get("title")}set title(n){this.controller_.props.set("title",n)}get children(){return this.rackApi_.children}addInput(n,r,l){return this.rackApi_.addInput(n,r,l)}addMonitor(n,r,l){return this.rackApi_.addMonitor(n,r,l)}addFolder(n){return this.rackApi_.addFolder(n)}addButton(n){return this.rackApi_.addButton(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){return this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addBlade(n){return this.rackApi_.addBlade(n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,_=>{l(_.event)}),this}}class ci extends St{constructor(n){super({blade:n.blade,view:n.view,viewProps:n.rackController.viewProps}),this.rackController=n.rackController}}class ps{constructor(n,r){const l=A(r.viewName);this.element=n.createElement("div"),this.element.classList.add(l()),r.viewProps.bindClassModifiers(this.element)}}function fs(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof Ft&&l.binding===n)return l}return null}function ms(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof oe&&l.binding===n)return l}return null}function C(s,n){for(let r=0;r<s.length;r++){const l=s[r];if(l instanceof E&&l.value===n)return l}return null}function U(s){return s instanceof K?s.rack:s instanceof ci?s.rackController.rack:null}function q(s){const n=U(s);return n?n.bcSet_:null}class W{constructor(n){var r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new y,this.blade_=n!=null?n:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new Ct(q),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(n,r){n.parent&&n.parent.remove(n),n.parent_=this,this.bcSet_.add(n,r)}remove(n){n.parent_=null,this.bcSet_.remove(n)}find(n){return this.bcSet_.allItems().filter(r=>r instanceof n)}onSetAdd_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("add",{bladeController:n.item,index:n.index,isRoot:r,sender:this}),!r)return;const l=n.item;if(l.viewProps.emitter.on("change",this.onChildViewPropsChange_),l.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),l.viewProps.handleDispose(this.onChildDispose_),l instanceof Ft)l.binding.emitter.on("change",this.onChildInputChange_);else if(l instanceof oe)l.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(l instanceof E)l.value.emitter.on("change",this.onChildValueChange_);else{const _=U(l);if(_){const D=_.emitter;D.on("layout",this.onDescendantLayout_),D.on("inputchange",this.onDescendantInputChange_),D.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("remove",{bladeController:n.item,isRoot:r,sender:this}),!r)return;const l=n.item;if(l instanceof Ft)l.binding.emitter.off("change",this.onChildInputChange_);else if(l instanceof oe)l.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(l instanceof E)l.value.emitter.off("change",this.onChildValueChange_);else{const _=U(l);if(_){const D=_.emitter;D.off("layout",this.onDescendantLayout_),D.off("inputchange",this.onDescendantInputChange_),D.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const n=this.bcSet_.items.filter(_=>!_.viewProps.get("hidden")),r=n[0],l=n[n.length-1];this.bcSet_.items.forEach(_=>{const D=[];_===r&&(D.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&D.push("veryfirst")),_===l&&(D.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&D.push("verylast")),_.blade.set("positions",D)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(r=>r.viewProps.get("disposed")).forEach(r=>{this.bcSet_.remove(r)})}onChildInputChange_(n){const r=fs(this.find(Ft),n.sender);if(!r)throw w.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onChildMonitorUpdate_(n){const r=ms(this.find(oe),n.sender);if(!r)throw w.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:r,sender:this})}onChildValueChange_(n){const r=C(this.find(E),n.sender);if(!r)throw w.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onDescendantLayout_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(n){this.emitter.emit("inputchange",{bladeController:n.bladeController,options:n.options,sender:this})}onDescendantMonitorUpdate_(n){this.emitter.emit("monitorupdate",{bladeController:n.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class K extends St{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new ps(n,{viewName:"brk",viewProps:r.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const l=new W(r.root?void 0:r.blade);l.emitter.on("add",this.onRackAdd_),l.emitter.on("remove",this.onRackRemove_),this.rack=l,this.viewProps.handleDispose(()=>{for(let _=this.rack.children.length-1;_>=0;_--)this.rack.children[_].viewProps.set("disposed",!0)})}onRackAdd_(n){!n.isRoot||jt(this.view.element,n.bladeController.view.element,n.index)}onRackRemove_(n){!n.isRoot||ge(n.bladeController.view.element)}}const Tt=A("cnt");class At{constructor(n,r){var l;this.className_=A((l=r.viewName)!==null&&l!==void 0?l:"fld"),this.element=n.createElement("div"),this.element.classList.add(this.className_(),Tt()),r.viewProps.bindClassModifiers(this.element),this.foldable_=r.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),O(this.foldable_,"completed",I(this.element,this.className_(void 0,"cpl")));const _=n.createElement("button");_.classList.add(this.className_("b")),O(r.props,"title",wt=>{m(wt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),r.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const D=n.createElement("div");D.classList.add(this.className_("t")),G(r.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const V=n.createElement("div");V.classList.add(this.className_("m")),this.buttonElement.appendChild(V);const it=r.containerElement;it.classList.add(this.className_("c")),this.element.appendChild(it),this.containerElement=it}}class Dt extends ci{constructor(n,r){var l;const _=ct.create((l=r.expanded)!==null&&l!==void 0?l:!0),D=new K(n,{blade:r.blade,root:r.root,viewProps:r.viewProps});super(Object.assign(Object.assign({},r),{rackController:D,view:new At(n,{containerElement:D.view.element,foldable:_,props:r.props,viewName:r.root?"rot":void 0,viewProps:r.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=r.props,this.foldable=_,lt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const It={id:"folder",type:"blade",accept(s){const n=J,r=ft(s,{title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean});return r?{params:r}:null},controller(s){return new Dt(s.document,{blade:s.blade,expanded:s.params.expanded,props:B.fromObject({title:s.params.title}),viewProps:s.viewProps})},api(s){return s.controller instanceof Dt?new kn(s.controller,s.pool):null}};class zt extends E{constructor(n,r){const l=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{value:r.valueController.value,view:new ut(n,{props:r.props,viewProps:l}),viewProps:l})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class Bt extends o{}const Gt=A("spr");class $t{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Gt()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("hr");l.classList.add(Gt("r")),this.element.appendChild(l)}}class Ye extends St{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new $t(n,{viewProps:r.viewProps})}))}}const fn={id:"separator",type:"blade",accept(s){const r=ft(s,{view:J.required.constant("separator")});return r?{params:r}:null},controller(s){return new Ye(s.document,{blade:s.blade,viewProps:s.viewProps})},api(s){return s.controller instanceof Ye?new Bt(s.controller):null}},mn=A("");function Ce(s,n){return I(s,mn(void 0,n))}class kt extends B{constructor(n){super(n)}static create(n){var r,l;const _=n!=null?n:{},D={disabled:(r=_.disabled)!==null&&r!==void 0?r:!1,disposed:!1,hidden:(l=_.hidden)!==null&&l!==void 0?l:!1},V=B.createCore(D);return new kt(V)}bindClassModifiers(n){O(this,"disabled",Ce(n,"disabled")),O(this,"hidden",Ce(n,"hidden"))}bindDisabled(n){O(this,"disabled",r=>{n.disabled=r})}bindTabIndex(n){O(this,"disabled",r=>{n.tabIndex=r?-1:0})}handleDispose(n){this.value("disposed").emitter.on("change",r=>{r&&n()})}}const Le=A("tbi");class Jt{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Le()),r.viewProps.bindClassModifiers(this.element),O(r.props,"selected",D=>{D?this.element.classList.add(Le(void 0,"sel")):this.element.classList.remove(Le(void 0,"sel"))});const l=n.createElement("button");l.classList.add(Le("b")),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.buttonElement=l;const _=n.createElement("div");_.classList.add(Le("t")),G(r.props.value("title"),_),this.buttonElement.appendChild(_),this.titleElement=_}}class De{constructor(n,r){this.emitter=new y,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new Jt(n,{props:r.props,viewProps:r.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Be{constructor(n,r){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new De(n,{props:r.itemProps,viewProps:kt.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new K(n,{blade:et(),viewProps:kt.create()}),this.props=r.props,O(this.props,"selected",l=>{this.itemController.props.set("selected",l),this.contentController.viewProps.set("hidden",!l)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class gn{constructor(n,r){this.controller_=n,this.rackApi_=r}get title(){var n;return(n=this.controller_.itemController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.itemController.props.set("title",n)}get selected(){return this.controller_.props.get("selected")}set selected(n){this.controller_.props.set("selected",n)}get children(){return this.rackApi_.children}addButton(n){return this.rackApi_.addButton(n)}addFolder(n){return this.rackApi_.addFolder(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addInput(n,r,l){return this.rackApi_.addInput(n,r,l)}addMonitor(n,r,l){return this.rackApi_.addMonitor(n,r,l)}addBlade(n){return this.rackApi_.addBlade(n)}}class ui extends at{constructor(n,r){super(n,new li(n.rackController,r)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new y,this.pageApiMap_=new Map,this.rackApi_.on("change",l=>{this.emitter_.emit("change",{event:l})}),this.rackApi_.on("update",l=>{this.emitter_.emit("update",{event:l})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(l=>{this.setUpPageApi_(l)})}get pages(){return this.controller_.pageSet.items.map(n=>{const r=this.pageApiMap_.get(n);if(!r)throw w.shouldNeverHappen();return r})}addPage(n){const r=this.controller_.view.element.ownerDocument,l=new Be(r,{itemProps:B.fromObject({selected:!1,title:n.title}),props:B.fromObject({selected:!1})});this.controller_.add(l,n.index);const _=this.pageApiMap_.get(l);if(!_)throw w.shouldNeverHappen();return _}removePage(n){this.controller_.remove(n)}on(n,r){const l=r.bind(this);return this.emitter_.on(n,_=>{l(_.event)}),this}setUpPageApi_(n){const r=this.rackApi_.apiSet_.find(_=>_.controller_===n.contentController);if(!r)throw w.shouldNeverHappen();const l=new gn(n,r);this.pageApiMap_.set(n,l)}onPageAdd_(n){this.setUpPageApi_(n.item)}onPageRemove_(n){if(!this.pageApiMap_.get(n.item))throw w.shouldNeverHappen();this.pageApiMap_.delete(n.item)}onSelect_(n){this.emitter_.emit("select",{event:new d(this,n.rawValue)})}}const ue=-1;class Vn{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=j(!0),this.selectedIndex=j(ue),this.items_=[]}add(n,r){const l=r!=null?r:this.items_.length;this.items_.splice(l,0,n),n.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(n){const r=this.items_.indexOf(n);r<0||(this.items_.splice(r,1),n.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=ue,this.empty.rawValue=!0;return}const n=this.items_.findIndex(r=>r.rawValue);n<0?(this.items_.forEach((r,l)=>{r.rawValue=l===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((r,l)=>{r.rawValue=l===n}),this.selectedIndex.rawValue=n),this.empty.rawValue=!1}onItemSelectedChange_(n){if(n.rawValue){const r=this.items_.findIndex(l=>l===n.sender);this.items_.forEach((l,_)=>{l.rawValue=_===r}),this.selectedIndex.rawValue=r}else this.keepSelection_()}}const vn=A("tab");class Re{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(vn(),Tt()),r.viewProps.bindClassModifiers(this.element),N(r.empty,I(this.element,vn(void 0,"nop")));const l=n.createElement("div");l.classList.add(vn("i")),this.element.appendChild(l),this.itemsElement=l;const _=r.contentsElement;_.classList.add(vn("c")),this.element.appendChild(_),this.contentsElement=_}}class Ho extends ci{constructor(n,r){const l=new K(n,{blade:r.blade,viewProps:r.viewProps}),_=new Vn;super({blade:r.blade,rackController:l,view:new Re(n,{contentsElement:l.view.element,empty:_.empty,viewProps:r.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new Ct(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=_}get pageSet(){return this.pageSet_}add(n,r){this.pageSet_.add(n,r)}remove(n){this.pageSet_.remove(this.pageSet_.items[n])}onPageAdd_(n){const r=n.item;jt(this.view.itemsElement,r.itemController.view.element,n.index),this.rackController.rack.add(r.contentController,n.index),this.tab.add(r.props.value("selected"))}onPageRemove_(n){const r=n.item;ge(r.itemController.view.element),this.rackController.rack.remove(r.contentController),this.tab.remove(r.props.value("selected"))}}const Wo={id:"tab",type:"blade",accept(s){const n=J,r=ft(s,{pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")});return!r||r.pages.length===0?null:{params:r}},controller(s){const n=new Ho(s.document,{blade:s.blade,viewProps:s.viewProps});return s.params.pages.forEach(r=>{const l=new Be(s.document,{itemProps:B.fromObject({selected:!1,title:r.title}),props:B.fromObject({selected:!1})});n.add(l)}),n},api(s){return s.controller instanceof Ho?new ui(s.controller,s.pool):null}};function nu(s,n){const r=s.accept(n.params);if(!r)return null;const l=J.optional.boolean(n.params.disabled).value,_=J.optional.boolean(n.params.hidden).value;return s.controller({blade:et(),document:n.document,params:Object.assign(Object.assign({},r.params),{disabled:l,hidden:_}),viewProps:kt.create({disabled:l,hidden:_})})}class iu{constructor(){this.disabled=!1,this.emitter=new y}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class ru{constructor(n,r){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=n,this.emitter=new y,this.interval_=r,this.setTimer_()}get disabled(){return this.disabled_}set disabled(n){this.disabled_=n,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const n=this.doc_.defaultView;n&&n.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const n=this.doc_.defaultView;n&&(this.timerId_=n.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class $i{constructor(n){this.constraints=n}constrain(n){return this.constraints.reduce((r,l)=>l.constrain(r),n)}}function $e(s,n){if(s instanceof n)return s;if(s instanceof $i){const r=s.constraints.reduce((l,_)=>l||(_ instanceof n?_:null),null);if(r)return r}return null}class Ki{constructor(n){this.options=n}constrain(n){const r=this.options;return r.length===0||r.filter(_=>_.value===n).length>0?n:r[0].value}}class hi{constructor(n){this.maxValue=n.max,this.minValue=n.min}constrain(n){let r=n;return m(this.minValue)||(r=Math.max(r,this.minValue)),m(this.maxValue)||(r=Math.min(r,this.maxValue)),r}}class Ar{constructor(n,r=0){this.step=n,this.origin=r}constrain(n){const r=this.origin%this.step,l=Math.round((n-r)/this.step);return r+l*this.step}}const gs=A("lst");class su{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.props_=r.props,this.element=n.createElement("div"),this.element.classList.add(gs()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("select");l.classList.add(gs("s")),O(this.props_,"options",D=>{ve(l),D.forEach((V,it)=>{const wt=n.createElement("option");wt.dataset.index=String(it),wt.textContent=V.text,wt.value=String(V.value),l.appendChild(wt)})}),r.viewProps.bindDisabled(l),this.element.appendChild(l),this.selectElement=l;const _=n.createElement("div");_.classList.add(gs("m")),_.appendChild(Yt(n,"dropdown")),this.element.appendChild(_),r.value.emitter.on("change",this.onValueChange_),this.value_=r.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class Zi{constructor(n,r){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new su(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(n){const l=n.currentTarget.selectedOptions.item(0);if(!l)return;const _=Number(l.dataset.index);this.value.rawValue=this.props.get("options")[_].value}}const jo=A("pop");class ou{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(jo()),r.viewProps.bindClassModifiers(this.element),N(r.shows,I(this.element,jo(void 0,"v")))}}class qo{constructor(n,r){this.shows=j(!1),this.viewProps=r.viewProps,this.view=new ou(n,{shows:this.shows,viewProps:this.viewProps})}}const Xo=A("txt");class au{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Xo()),r.viewProps.bindClassModifiers(this.element),this.props_=r.props,this.props_.emitter.on("change",this.onChange_);const l=n.createElement("input");l.classList.add(Xo("i")),l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,r.value.emitter.on("change",this.onChange_),this.value_=r.value,this.refresh()}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value_.rawValue)}onChange_(){this.refresh()}}class Lr{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=r.parser,this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new au(n,{props:r.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const l=n.currentTarget.value,_=this.parser_(l);m(_)||(this.value.rawValue=_),this.view.refresh()}}function lu(s){return String(s)}function Yo(s){return s==="false"?!1:!!s}function $o(s){return lu(s)}class cu{constructor(n){this.text=n}evaluate(){return Number(this.text)}toString(){return this.text}}const uu={"**":(s,n)=>Math.pow(s,n),"*":(s,n)=>s*n,"/":(s,n)=>s/n,"%":(s,n)=>s%n,"+":(s,n)=>s+n,"-":(s,n)=>s-n,"<<":(s,n)=>s<<n,">>":(s,n)=>s>>n,">>>":(s,n)=>s>>>n,"&":(s,n)=>s&n,"^":(s,n)=>s^n,"|":(s,n)=>s|n};class hu{constructor(n,r,l){this.left=r,this.operator=n,this.right=l}evaluate(){const n=uu[this.operator];if(!n)throw new Error(`unexpected binary operator: '${this.operator}`);return n(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const du={"+":s=>s,"-":s=>-s,"~":s=>~s};class pu{constructor(n,r){this.operator=n,this.expression=r}evaluate(){const n=du[this.operator];if(!n)throw new Error(`unexpected unary operator: '${this.operator}`);return n(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function vs(s){return(n,r)=>{for(let l=0;l<s.length;l++){const _=s[l](n,r);if(_!=="")return _}return""}}function Ji(s,n){var r;const l=s.substr(n).match(/^\s+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function fu(s,n){const r=s.substr(n,1);return r.match(/^[1-9]$/)?r:""}function Qi(s,n){var r;const l=s.substr(n).match(/^[0-9]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function mu(s,n){const r=Qi(s,n);if(r!=="")return r;const l=s.substr(n,1);if(n+=1,l!=="-"&&l!=="+")return"";const _=Qi(s,n);return _===""?"":l+_}function _s(s,n){const r=s.substr(n,1);if(n+=1,r.toLowerCase()!=="e")return"";const l=mu(s,n);return l===""?"":r+l}function Ko(s,n){const r=s.substr(n,1);if(r==="0")return r;const l=fu(s,n);return n+=l.length,l===""?"":l+Qi(s,n)}function gu(s,n){const r=Ko(s,n);if(n+=r.length,r==="")return"";const l=s.substr(n,1);if(n+=l.length,l!==".")return"";const _=Qi(s,n);return n+=_.length,r+l+_+_s(s,n)}function vu(s,n){const r=s.substr(n,1);if(n+=r.length,r!==".")return"";const l=Qi(s,n);return n+=l.length,l===""?"":r+l+_s(s,n)}function _u(s,n){const r=Ko(s,n);return n+=r.length,r===""?"":r+_s(s,n)}const xu=vs([gu,vu,_u]);function bu(s,n){var r;const l=s.substr(n).match(/^[01]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function wu(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0b")return"";const l=bu(s,n);return l===""?"":r+l}function yu(s,n){var r;const l=s.substr(n).match(/^[0-7]+/);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Mu(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0o")return"";const l=yu(s,n);return l===""?"":r+l}function Su(s,n){var r;const l=s.substr(n).match(/^[0-9a-f]+/i);return(r=l&&l[0])!==null&&r!==void 0?r:""}function Eu(s,n){const r=s.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0x")return"";const l=Su(s,n);return l===""?"":r+l}const Cu=vs([wu,Mu,Eu]),Tu=vs([Cu,xu]);function Pu(s,n){const r=Tu(s,n);return n+=r.length,r===""?null:{evaluable:new cu(r),cursor:n}}function Au(s,n){const r=s.substr(n,1);if(n+=r.length,r!=="(")return null;const l=Jo(s,n);if(!l)return null;n=l.cursor,n+=Ji(s,n).length;const _=s.substr(n,1);return n+=_.length,_!==")"?null:{evaluable:l.evaluable,cursor:n}}function Lu(s,n){var r;return(r=Pu(s,n))!==null&&r!==void 0?r:Au(s,n)}function Zo(s,n){const r=Lu(s,n);if(r)return r;const l=s.substr(n,1);if(n+=l.length,l!=="+"&&l!=="-"&&l!=="~")return null;const _=Zo(s,n);return _?(n=_.cursor,{cursor:n,evaluable:new pu(l,_.evaluable)}):null}function Du(s,n,r){r+=Ji(n,r).length;const l=s.filter(_=>n.startsWith(_,r))[0];return l?(r+=l.length,r+=Ji(n,r).length,{cursor:r,operator:l}):null}function Ru(s,n){return(r,l)=>{const _=s(r,l);if(!_)return null;l=_.cursor;let D=_.evaluable;for(;;){const V=Du(n,r,l);if(!V)break;l=V.cursor;const it=s(r,l);if(!it)return null;l=it.cursor,D=new hu(V.operator,D,it.evaluable)}return D?{cursor:l,evaluable:D}:null}}const Iu=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((s,n)=>Ru(s,n),Zo);function Jo(s,n){return n+=Ji(s,n).length,Iu(s,n)}function Fu(s){const n=Jo(s,0);return!n||n.cursor+Ji(s,n.cursor).length!==s.length?null:n.evaluable}function en(s){var n;const r=Fu(s);return(n=r==null?void 0:r.evaluate())!==null&&n!==void 0?n:null}function Qo(s){if(typeof s=="number")return s;if(typeof s=="string"){const n=en(s);if(!m(n))return n}return 0}function Nu(s){return String(s)}function de(s){return n=>n.toFixed(Math.max(Math.min(s,20),0))}const ku=de(0);function Dr(s){return ku(s)+"%"}function ta(s){return String(s)}function xs(s){return s}function ea(s,n){for(;s.length<n;)s.push(void 0)}function Vu(s){const n=[];return ea(n,s),j(n)}function Ou(s){const n=s.indexOf(void 0);return n<0?s:s.slice(0,n)}function Uu(s,n){const r=[...Ou(s),n];return r.length>s.length?r.splice(0,r.length-s.length):ea(r,s.length),r}function tr({primary:s,secondary:n,forward:r,backward:l}){let _=!1;function D(V){_||(_=!0,V(),_=!1)}s.emitter.on("change",V=>{D(()=>{n.setRawValue(r(s,n),V.options)})}),n.emitter.on("change",V=>{D(()=>{s.setRawValue(l(s,n),V.options)}),D(()=>{n.setRawValue(r(s,n),V.options)})}),D(()=>{n.setRawValue(r(s,n),{forceEmit:!1,last:!0})})}function we(s,n){const r=s*(n.altKey?.1:1)*(n.shiftKey?10:1);return n.upKey?+r:n.downKey?-r:0}function er(s){return{altKey:s.altKey,downKey:s.key==="ArrowDown",shiftKey:s.shiftKey,upKey:s.key==="ArrowUp"}}function nn(s){return{altKey:s.altKey,downKey:s.key==="ArrowLeft",shiftKey:s.shiftKey,upKey:s.key==="ArrowRight"}}function zu(s){return s==="ArrowUp"||s==="ArrowDown"}function na(s){return zu(s)||s==="ArrowLeft"||s==="ArrowRight"}function bs(s,n){var r,l;const _=n.ownerDocument.defaultView,D=n.getBoundingClientRect();return{x:s.pageX-(((r=_&&_.scrollX)!==null&&r!==void 0?r:0)+D.left),y:s.pageY-(((l=_&&_.scrollY)!==null&&l!==void 0?l:0)+D.top)}}class On{constructor(n){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=n,this.emitter=new y,n.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd_),n.addEventListener("mousedown",this.onMouseDown_)}computePosition_(n){const r=this.elem_.getBoundingClientRect();return{bounds:{width:r.width,height:r.height},point:n?{x:n.x,y:n.y}:null}}onMouseDown_(n){var r;n.preventDefault(),(r=n.currentTarget)===null||r===void 0||r.focus();const l=this.elem_.ownerDocument;l.addEventListener("mousemove",this.onDocumentMouseMove_),l.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(bs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseMove_(n){this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(bs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseUp_(n){const r=this.elem_.ownerDocument;r.removeEventListener("mousemove",this.onDocumentMouseMove_),r.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(bs(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onTouchStart_(n){n.preventDefault();const r=n.targetTouches.item(0),l=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-l.left,y:r.clientY-l.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchMove_(n){const r=n.targetTouches.item(0),l=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-l.left,y:r.clientY-l.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchEnd_(n){var r;const l=(r=n.targetTouches.item(0))!==null&&r!==void 0?r:this.lastTouch_,_=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(l?{x:l.clientX-_.left,y:l.clientY-_.top}:void 0),sender:this,shiftKey:n.shiftKey})}}function Kt(s,n,r,l,_){const D=(s-n)/(r-n);return l+D*(_-l)}function ia(s){return String(s.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function ae(s,n,r){return Math.min(Math.max(s,n),r)}function ra(s,n){return(s%n+n)%n}const Ie=A("txt");class Bu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(Ie(),Ie(void 0,"num")),r.arrayPosition&&this.element.classList.add(Ie(void 0,r.arrayPosition)),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("input");l.classList.add(Ie("i")),l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=r.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ie()),this.inputElement.classList.add(Ie("i"));const _=n.createElement("div");_.classList.add(Ie("k")),this.element.appendChild(_),this.knobElement=_;const D=n.createElementNS(mt,"svg");D.classList.add(Ie("g")),this.knobElement.appendChild(D);const V=n.createElementNS(mt,"path");V.classList.add(Ie("gb")),D.appendChild(V),this.guideBodyElem_=V;const it=n.createElementNS(mt,"path");it.classList.add(Ie("gh")),D.appendChild(it),this.guideHeadElem_=it;const wt=n.createElement("div");wt.classList.add(A("tt")()),this.knobElement.appendChild(wt),this.tooltipElem_=wt,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.refresh()}onDraggingChange_(n){if(n.rawValue===null){this.element.classList.remove(Ie(void 0,"drg"));return}this.element.classList.add(Ie(void 0,"drg"));const r=n.rawValue/this.props_.get("draggingScale"),l=r+(r>0?-1:r<0?1:0),_=ae(-l,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${l+_},0 L${l},4 L${l+_},8`,`M ${r},-1 L${r},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${r},4`);const D=this.props_.get("formatter");this.tooltipElem_.textContent=D(this.value.rawValue),this.tooltipElem_.style.left=`${r}px`}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value.rawValue)}onChange_(){this.refresh()}}class nr{constructor(n,r){var l;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.parser_=r.parser,this.props=r.props,this.sliderProps_=(l=r.sliderProps)!==null&&l!==void 0?l:null,this.value=r.value,this.viewProps=r.viewProps,this.dragging_=j(null),this.view=new Bu(n,{arrayPosition:r.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const _=new On(this.view.knobElement);_.emitter.on("down",this.onPointerDown_),_.emitter.on("move",this.onPointerMove_),_.emitter.on("up",this.onPointerUp_)}constrainValue_(n){var r,l;const _=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("minValue"),D=(l=this.sliderProps_)===null||l===void 0?void 0:l.get("maxValue");let V=n;return _!==void 0&&(V=Math.max(V,_)),D!==void 0&&(V=Math.min(V,D)),V}onInputChange_(n){const l=n.currentTarget.value,_=this.parser_(l);m(_)||(this.value.rawValue=this.constrainValue_(_)),this.view.refresh()}onInputKeyDown_(n){const r=we(this.baseStep_,er(n));r!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+r),{forceEmit:!1,last:!1})}onInputKeyUp_(n){we(this.baseStep_,er(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(n){if(!n.point)return null;const r=n.point.x-n.bounds.width/2;return this.constrainValue_(this.originRawValue_+r*this.props.get("draggingScale"))}onPointerMove_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const ws=A("sld");class Gu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(ws()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(ws("t")),r.viewProps.bindTabIndex(l),this.element.appendChild(l),this.trackElement=l;const _=n.createElement("div");_.classList.add(ws("k")),this.trackElement.appendChild(_),this.knobElement=_,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.update_()}update_(){const n=ae(Kt(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${n}%`}onChange_(){this.update_()}}class Hu{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.value=r.value,this.viewProps=r.viewProps,this.props=r.props,this.view=new Gu(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new On(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){!n.point||this.value.setRawValue(Kt(ae(n.point.x,0,n.bounds.width),0,n.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),r)}onPointerDownOrMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=we(this.baseStep_,nn(n));r!==0&&this.value.setRawValue(this.value.rawValue+r,{forceEmit:!1,last:!1})}onKeyUp_(n){we(this.baseStep_,nn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ys=A("sldtxt");class Wu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(ys());const l=n.createElement("div");l.classList.add(ys("s")),this.sliderView_=r.sliderView,l.appendChild(this.sliderView_.element),this.element.appendChild(l);const _=n.createElement("div");_.classList.add(ys("t")),this.textView_=r.textView,_.appendChild(this.textView_.element),this.element.appendChild(_)}}class Ms{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.sliderC_=new Hu(n,{baseStep:r.baseStep,props:r.sliderProps,value:r.value,viewProps:this.viewProps}),this.textC_=new nr(n,{baseStep:r.baseStep,parser:r.parser,props:r.textProps,sliderProps:r.sliderProps,value:r.value,viewProps:r.viewProps}),this.view=new Wu(n,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function ir(s,n){s.write(n)}function Rr(s){const n=J;if(Array.isArray(s))return n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))(s).value;if(typeof s=="object")return n.required.raw(s).value}function sa(s){if(s==="inline"||s==="popup")return s}function _n(s){const n=J;return n.required.object({max:n.optional.number,min:n.optional.number,step:n.optional.number})(s).value}function oa(s){if(Array.isArray(s))return s;const n=[];return Object.keys(s).forEach(r=>{n.push({text:r,value:s[r]})}),n}function Ss(s){return m(s)?null:new Ki(oa(s))}function Es(s){const n=s?$e(s,Ki):null;return n?n.options:null}function ju(s){const n=s?$e(s,Ar):null;return n?n.step:null}function Ir(s,n){const r=s&&$e(s,Ar);return r?ia(r.step):Math.max(ia(n),2)}function di(s){const n=ju(s);return n!=null?n:1}function pi(s,n){var r;const l=s&&$e(s,Ar),_=Math.abs((r=l==null?void 0:l.step)!==null&&r!==void 0?r:n);return _===0?.1:Math.pow(10,Math.floor(Math.log10(_))-1)}const Fr=A("ckb");class qu{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Fr()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("label");l.classList.add(Fr("l")),this.element.appendChild(l);const _=n.createElement("input");_.classList.add(Fr("i")),_.type="checkbox",l.appendChild(_),this.inputElement=_,r.viewProps.bindDisabled(this.inputElement);const D=n.createElement("div");D.classList.add(Fr("w")),l.appendChild(D);const V=Yt(n,"check");D.appendChild(V),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Xu{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new qu(n,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const r=n.currentTarget;this.value.rawValue=r.checked}}function Yu(s){const n=[],r=Ss(s.options);return r&&n.push(r),new $i(n)}const $u={id:"input-bool",type:"input",accept:(s,n)=>{if(typeof s!="boolean")return null;const l=ft(n,{options:J.optional.custom(Rr)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Yo,constraint:s=>Yu(s.params),writer:s=>ir},controller:s=>{var n;const r=s.document,l=s.value,_=s.constraint;return _&&$e(_,Ki)?new Zi(r,{props:B.fromObject({options:(n=Es(_))!==null&&n!==void 0?n:[]}),value:l,viewProps:s.viewProps}):new Xu(r,{value:l,viewProps:s.viewProps})}},Un=A("col");class Ku{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Un()),r.foldable.bindExpandedClass(this.element,Un(void 0,"expanded")),O(r.foldable,"completed",I(this.element,Un(void 0,"cpl")));const l=n.createElement("div");l.classList.add(Un("h")),this.element.appendChild(l);const _=n.createElement("div");_.classList.add(Un("s")),l.appendChild(_),this.swatchElement=_;const D=n.createElement("div");if(D.classList.add(Un("t")),l.appendChild(D),this.textElement=D,r.pickerLayout==="inline"){const V=n.createElement("div");V.classList.add(Un("p")),this.element.appendChild(V),this.pickerElement=V}else this.pickerElement=null}}function Zu(s,n,r){const l=ae(s/255,0,1),_=ae(n/255,0,1),D=ae(r/255,0,1),V=Math.max(l,_,D),it=Math.min(l,_,D),wt=V-it;let Pt=0,qt=0;const Xt=(it+V)/2;return wt!==0&&(qt=wt/(1-Math.abs(V+it-1)),l===V?Pt=(_-D)/wt:_===V?Pt=2+(D-l)/wt:Pt=4+(l-_)/wt,Pt=Pt/6+(Pt<0?1:0)),[Pt*360,qt*100,Xt*100]}function Ju(s,n,r){const l=(s%360+360)%360,_=ae(n/100,0,1),D=ae(r/100,0,1),V=(1-Math.abs(2*D-1))*_,it=V*(1-Math.abs(l/60%2-1)),wt=D-V/2;let Pt,qt,Xt;return l>=0&&l<60?[Pt,qt,Xt]=[V,it,0]:l>=60&&l<120?[Pt,qt,Xt]=[it,V,0]:l>=120&&l<180?[Pt,qt,Xt]=[0,V,it]:l>=180&&l<240?[Pt,qt,Xt]=[0,it,V]:l>=240&&l<300?[Pt,qt,Xt]=[it,0,V]:[Pt,qt,Xt]=[V,0,it],[(Pt+wt)*255,(qt+wt)*255,(Xt+wt)*255]}function Qu(s,n,r){const l=ae(s/255,0,1),_=ae(n/255,0,1),D=ae(r/255,0,1),V=Math.max(l,_,D),it=Math.min(l,_,D),wt=V-it;let Pt;wt===0?Pt=0:V===l?Pt=60*(((_-D)/wt%6+6)%6):V===_?Pt=60*((D-l)/wt+2):Pt=60*((l-_)/wt+4);const qt=V===0?0:wt/V,Xt=V;return[Pt,qt*100,Xt*100]}function aa(s,n,r){const l=ra(s,360),_=ae(n/100,0,1),D=ae(r/100,0,1),V=D*_,it=V*(1-Math.abs(l/60%2-1)),wt=D-V;let Pt,qt,Xt;return l>=0&&l<60?[Pt,qt,Xt]=[V,it,0]:l>=60&&l<120?[Pt,qt,Xt]=[it,V,0]:l>=120&&l<180?[Pt,qt,Xt]=[0,V,it]:l>=180&&l<240?[Pt,qt,Xt]=[0,it,V]:l>=240&&l<300?[Pt,qt,Xt]=[it,0,V]:[Pt,qt,Xt]=[V,0,it],[(Pt+wt)*255,(qt+wt)*255,(Xt+wt)*255]}function th(s,n,r){const l=r+n*(100-Math.abs(2*r-100))/200;return[s,l!==0?n*(100-Math.abs(2*r-100))/l:0,r+n*(100-Math.abs(2*r-100))/(2*100)]}function eh(s,n,r){const l=100-Math.abs(r*(200-n)/100-100);return[s,l!==0?n*r/l:0,r*(200-n)/(2*100)]}function zn(s){return[s[0],s[1],s[2]]}function la(s,n){return[s[0],s[1],s[2],n]}const nh={hsl:{hsl:(s,n,r)=>[s,n,r],hsv:th,rgb:Ju},hsv:{hsl:eh,hsv:(s,n,r)=>[s,n,r],rgb:aa},rgb:{hsl:Zu,hsv:Qu,rgb:(s,n,r)=>[s,n,r]}};function Nr(s,n){return[n==="float"?1:s==="rgb"?255:360,n==="float"?1:s==="rgb"?255:100,n==="float"?1:s==="rgb"?255:100]}function ih(s,n,r){var l;const _=Nr(n,r);return[n==="rgb"?ae(s[0],0,_[0]):ra(s[0],_[0]),ae(s[1],0,_[1]),ae(s[2],0,_[2]),ae((l=s[3])!==null&&l!==void 0?l:1,0,1)]}function ca(s,n,r,l){const _=Nr(n,r),D=Nr(n,l);return s.map((V,it)=>V/_[it]*D[it])}function rh(s,n,r){const l=ca(s,n.mode,n.type,"int"),_=nh[n.mode][r.mode](...l);return ca(_,r.mode,"int",r.type)}function kr(s,n){return typeof s!="object"||m(s)?!1:n in s&&typeof s[n]=="number"}class Vt{constructor(n,r,l="int"){this.mode=r,this.type=l,this.comps_=ih(n,r,l)}static black(n="int"){return new Vt([0,0,0],"rgb",n)}static fromObject(n,r="int"){const l="a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b];return new Vt(l,"rgb",r)}static toRgbaObject(n,r="int"){return n.toRgbaObject(r)}static isRgbColorObject(n){return kr(n,"r")&&kr(n,"g")&&kr(n,"b")}static isRgbaColorObject(n){return this.isRgbColorObject(n)&&kr(n,"a")}static isColorObject(n){return this.isRgbColorObject(n)}static equals(n,r){if(n.mode!==r.mode)return!1;const l=n.comps_,_=r.comps_;for(let D=0;D<l.length;D++)if(l[D]!==_[D])return!1;return!0}getComponents(n,r="int"){return la(rh(zn(this.comps_),{mode:this.mode,type:this.type},{mode:n!=null?n:this.mode,type:r}),this.comps_[3])}toRgbaObject(n="int"){const r=this.getComponents("rgb",n);return{r:r[0],g:r[1],b:r[2],a:r[3]}}}const xn=A("colp");class sh{constructor(n,r){this.alphaViews_=null,this.element=n.createElement("div"),this.element.classList.add(xn());const l=n.createElement("div");l.classList.add(xn("hsv"));const _=n.createElement("div");_.classList.add(xn("sv")),this.svPaletteView_=r.svPaletteView,_.appendChild(this.svPaletteView_.element),l.appendChild(_);const D=n.createElement("div");D.classList.add(xn("h")),this.hPaletteView_=r.hPaletteView,D.appendChild(this.hPaletteView_.element),l.appendChild(D),this.element.appendChild(l);const V=n.createElement("div");if(V.classList.add(xn("rgb")),this.textView_=r.textView,V.appendChild(this.textView_.element),this.element.appendChild(V),r.alphaViews){this.alphaViews_={palette:r.alphaViews.palette,text:r.alphaViews.text};const it=n.createElement("div");it.classList.add(xn("a"));const wt=n.createElement("div");wt.classList.add(xn("ap")),wt.appendChild(this.alphaViews_.palette.element),it.appendChild(wt);const Pt=n.createElement("div");Pt.classList.add(xn("at")),Pt.appendChild(this.alphaViews_.text.element),it.appendChild(Pt),this.element.appendChild(it)}}get allFocusableElements(){const n=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(r=>r.inputElement)];return this.alphaViews_&&n.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),n}}function oh(s){return s==="int"?"int":s==="float"?"float":void 0}function Cs(s){const n=J;return ft(s,{alpha:n.optional.boolean,color:n.optional.object({alpha:n.optional.boolean,type:n.optional.custom(oh)}),expanded:n.optional.boolean,picker:n.optional.custom(sa)})}function Bn(s){return s?.1:1}function Gn(s){var n;return(n=s.color)===null||n===void 0?void 0:n.type}function ah(s,n){return s.alpha===n.alpha&&s.mode===n.mode&&s.notation===n.notation&&s.type===n.type}function Fe(s,n){const r=s.match(/^(.+)%$/);return Math.min(r?parseFloat(r[1])*.01*n:parseFloat(s),n)}const lh={deg:s=>s,grad:s=>s*360/400,rad:s=>s*360/(2*Math.PI),turn:s=>s*360};function ua(s){const n=s.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!n)return parseFloat(s);const r=parseFloat(n[1]),l=n[2];return lh[l](r)}function ha(s){const n=s.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[Fe(n[1],255),Fe(n[2],255),Fe(n[3],255)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function da(s){return n=>{const r=ha(n);return r?new Vt(r,"rgb",s):null}}function pa(s){const n=s.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[Fe(n[1],255),Fe(n[2],255),Fe(n[3],255),Fe(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function fa(s){return n=>{const r=pa(n);return r?new Vt(r,"rgb",s):null}}function ma(s){const n=s.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[ua(n[1]),Fe(n[2],100),Fe(n[3],100)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ga(s){return n=>{const r=ma(n);return r?new Vt(r,"hsl",s):null}}function va(s){const n=s.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[ua(n[1]),Fe(n[2],100),Fe(n[3],100),Fe(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function _a(s){return n=>{const r=va(n);return r?new Vt(r,"hsl",s):null}}function xa(s){const n=s.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];const r=s.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:null}function ch(s){const n=xa(s);return n?new Vt(n,"rgb","int"):null}function ba(s){const n=s.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16),Kt(parseInt(n[4]+n[4],16),0,255,0,1)];const r=s.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),Kt(parseInt(r[4],16),0,255,0,1)]:null}function uh(s){const n=ba(s);return n?new Vt(n,"rgb","int"):null}function wa(s){const n=s.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ya(s){return n=>{const r=wa(n);return r?new Vt(r,"rgb",s):null}}function Ma(s){const n=s.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]),parseFloat(n[4])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function Sa(s){return n=>{const r=Ma(n);return r?new Vt(r,"rgb",s):null}}const hh=[{parser:xa,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:ba,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ha,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:pa,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:ma,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:va,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:wa,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:Ma,result:{alpha:!0,mode:"rgb",notation:"object"}}];function dh(s){return hh.reduce((n,{parser:r,result:l})=>n||(r(s)?l:null),null)}function Ts(s,n="int"){const r=dh(s);return r?r.notation==="hex"&&n!=="float"?Object.assign(Object.assign({},r),{type:"int"}):r.notation==="func"?Object.assign(Object.assign({},r),{type:n}):null:null}const Ea={int:[ch,uh,da("int"),fa("int"),ga("int"),_a("int"),ya("int"),Sa("int")],float:[da("float"),fa("float"),ga("float"),_a("float"),ya("float"),Sa("float")]};function ph(s){const n=Ea[s];return r=>{if(typeof r!="string")return Vt.black(s);const l=n.reduce((_,D)=>_||D(r),null);return l!=null?l:Vt.black(s)}}function Ps(s){const n=Ea[s];return r=>n.reduce((l,_)=>l||_(r),null)}function Ca(s){const n=ae(Math.floor(s),0,255).toString(16);return n.length===1?`0${n}`:n}function Ta(s,n="#"){const r=zn(s.getComponents("rgb")).map(Ca).join("");return`${n}${r}`}function As(s,n="#"){const r=s.getComponents("rgb"),l=[r[0],r[1],r[2],r[3]*255].map(Ca).join("");return`${n}${l}`}function Pa(s,n){const r=de(n==="float"?2:0);return`rgb(${zn(s.getComponents("rgb",n)).map(_=>r(_)).join(", ")})`}function fh(s){return n=>Pa(n,s)}function Vr(s,n){const r=de(2),l=de(n==="float"?2:0);return`rgba(${s.getComponents("rgb",n).map((D,V)=>(V===3?r:l)(D)).join(", ")})`}function mh(s){return n=>Vr(n,s)}function gh(s){const n=[de(0),Dr,Dr];return`hsl(${zn(s.getComponents("hsl")).map((l,_)=>n[_](l)).join(", ")})`}function vh(s){const n=[de(0),Dr,Dr,de(2)];return`hsla(${s.getComponents("hsl").map((l,_)=>n[_](l)).join(", ")})`}function Aa(s,n){const r=de(n==="float"?2:0),l=["r","g","b"];return`{${zn(s.getComponents("rgb",n)).map((D,V)=>`${l[V]}: ${r(D)}`).join(", ")}}`}function _h(s){return n=>Aa(n,s)}function La(s,n){const r=de(2),l=de(n==="float"?2:0),_=["r","g","b","a"];return`{${s.getComponents("rgb",n).map((V,it)=>{const wt=it===3?r:l;return`${_[it]}: ${wt(V)}`}).join(", ")}}`}function xh(s){return n=>La(n,s)}const bh=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Ta},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:As},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:gh},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:vh},...["int","float"].reduce((s,n)=>[...s,{format:{alpha:!1,mode:"rgb",notation:"func",type:n},stringifier:fh(n)},{format:{alpha:!0,mode:"rgb",notation:"func",type:n},stringifier:mh(n)},{format:{alpha:!1,mode:"rgb",notation:"object",type:n},stringifier:_h(n)},{format:{alpha:!0,mode:"rgb",notation:"object",type:n},stringifier:xh(n)}],[])];function Ls(s){return bh.reduce((n,r)=>n||(ah(r.format,s)?r.stringifier:null),null)}const rr=A("apl");class wh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(rr()),r.viewProps.bindTabIndex(this.element);const l=n.createElement("div");l.classList.add(rr("b")),this.element.appendChild(l);const _=n.createElement("div");_.classList.add(rr("c")),l.appendChild(_),this.colorElem_=_;const D=n.createElement("div");D.classList.add(rr("m")),this.element.appendChild(D),this.markerElem_=D;const V=n.createElement("div");V.classList.add(rr("p")),this.markerElem_.appendChild(V),this.previewElem_=V,this.update_()}update_(){const n=this.value.rawValue,r=n.getComponents("rgb"),l=new Vt([r[0],r[1],r[2],0],"rgb"),_=new Vt([r[0],r[1],r[2],255],"rgb"),D=["to right",Vr(l),Vr(_)];this.colorElem_.style.background=`linear-gradient(${D.join(",")})`,this.previewElem_.style.backgroundColor=Vr(n);const V=Kt(r[3],0,1,0,100);this.markerElem_.style.left=`${V}%`}onValueChange_(){this.update_()}}class yh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new wh(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new On(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=n.point.x/n.bounds.width,_=this.value.rawValue,[D,V,it]=_.getComponents("hsv");this.value.setRawValue(new Vt([D,V,it,l],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=we(Bn(!0),nn(n));if(r===0)return;const l=this.value.rawValue,[_,D,V,it]=l.getComponents("hsv");this.value.setRawValue(new Vt([_,D,V,it+r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){we(Bn(!0),nn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const fi=A("coltxt");function Mh(s){const n=s.createElement("select"),r=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return n.appendChild(r.reduce((l,_)=>{const D=s.createElement("option");return D.textContent=_.text,D.value=_.value,l.appendChild(D),l},s.createDocumentFragment())),n}class Sh{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(fi());const l=n.createElement("div");l.classList.add(fi("m")),this.modeElem_=Mh(n),this.modeElem_.classList.add(fi("ms")),l.appendChild(this.modeSelectElement);const _=n.createElement("div");_.classList.add(fi("mm")),_.appendChild(Yt(n,"dropdown")),l.appendChild(_),this.element.appendChild(l);const D=n.createElement("div");D.classList.add(fi("w")),this.element.appendChild(D),this.textsElem_=D,this.textViews_=r.textViews,this.applyTextViews_(),N(r.colorMode,V=>{this.modeElem_.value=V})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(n){this.textViews_=n,this.applyTextViews_()}applyTextViews_(){ve(this.textsElem_);const n=this.element.ownerDocument;this.textViews_.forEach(r=>{const l=n.createElement("div");l.classList.add(fi("c")),l.appendChild(r.element),this.textsElem_.appendChild(l)})}}function Eh(s){return de(s==="float"?2:0)}function Ch(s,n,r){const l=Nr(s,n)[r];return new hi({min:0,max:l})}function Ds(s,n,r){return new nr(s,{arrayPosition:r===0?"fst":r===3-1?"lst":"mid",baseStep:Bn(!1),parser:n.parser,props:B.fromObject({draggingScale:n.colorType==="float"?.01:1,formatter:Eh(n.colorType)}),value:j(0,{constraint:Ch(n.colorMode,n.colorType,r)}),viewProps:n.viewProps})}class Th{constructor(n,r){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=r.colorType,this.parser_=r.parser,this.value=r.value,this.viewProps=r.viewProps,this.colorMode=j(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(n),this.view=new Sh(n,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(n){const r={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},l=[Ds(n,r,0),Ds(n,r,1),Ds(n,r,2)];return l.forEach((_,D)=>{tr({primary:this.value,secondary:_.value,forward:V=>V.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[D],backward:(V,it)=>{const wt=this.colorMode.rawValue,Pt=V.rawValue.getComponents(wt,this.colorType_);return Pt[D]=it.rawValue,new Vt(la(zn(Pt),Pt[3]),wt,this.colorType_)}})}),l}onModeSelectChange_(n){const r=n.currentTarget;this.colorMode.rawValue=r.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Rs=A("hpl");class Ph{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Rs()),r.viewProps.bindTabIndex(this.element);const l=n.createElement("div");l.classList.add(Rs("c")),this.element.appendChild(l);const _=n.createElement("div");_.classList.add(Rs("m")),this.element.appendChild(_),this.markerElem_=_,this.update_()}update_(){const n=this.value.rawValue,[r]=n.getComponents("hsv");this.markerElem_.style.backgroundColor=Pa(new Vt([r,100,100],"hsv"));const l=Kt(r,0,360,0,100);this.markerElem_.style.left=`${l}%`}onValueChange_(){this.update_()}}class Ah{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Ph(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new On(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=Kt(ae(n.point.x,0,n.bounds.width),0,n.bounds.width,0,359),_=this.value.rawValue,[,D,V,it]=_.getComponents("hsv");this.value.setRawValue(new Vt([l,D,V,it],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=we(Bn(!1),nn(n));if(r===0)return;const l=this.value.rawValue,[_,D,V,it]=l.getComponents("hsv");this.value.setRawValue(new Vt([_+r,D,V,it],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){we(Bn(!1),nn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Is=A("svp"),Da=64;class Lh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Is()),r.viewProps.bindTabIndex(this.element);const l=n.createElement("canvas");l.height=Da,l.width=Da,l.classList.add(Is("c")),this.element.appendChild(l),this.canvasElement=l;const _=n.createElement("div");_.classList.add(Is("m")),this.element.appendChild(_),this.markerElem_=_,this.update_()}update_(){const n=re(this.canvasElement);if(!n)return;const l=this.value.rawValue.getComponents("hsv"),_=this.canvasElement.width,D=this.canvasElement.height,V=n.getImageData(0,0,_,D),it=V.data;for(let qt=0;qt<D;qt++)for(let Xt=0;Xt<_;Xt++){const sn=Kt(Xt,0,_,0,100),or=Kt(qt,0,D,100,0),ar=aa(l[0],sn,or),_i=(qt*_+Xt)*4;it[_i]=ar[0],it[_i+1]=ar[1],it[_i+2]=ar[2],it[_i+3]=255}n.putImageData(V,0,0);const wt=Kt(l[1],0,100,0,100);this.markerElem_.style.left=`${wt}%`;const Pt=Kt(l[2],0,100,100,0);this.markerElem_.style.top=`${Pt}%`}onValueChange_(){this.update_()}}class Dh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Lh(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new On(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=Kt(n.point.x,0,n.bounds.width,0,100),_=Kt(n.point.y,0,n.bounds.height,100,0),[D,,,V]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Vt([D,l,_,V],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){na(n.key)&&n.preventDefault();const[r,l,_,D]=this.value.rawValue.getComponents("hsv"),V=Bn(!1),it=we(V,nn(n)),wt=we(V,er(n));it===0&&wt===0||this.value.setRawValue(new Vt([r,l+it,_+wt,D],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){const r=Bn(!1),l=we(r,nn(n)),_=we(r,er(n));l===0&&_===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Rh{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.hPaletteC_=new Ah(n,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Dh(n,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=r.supportsAlpha?{palette:new yh(n,{value:this.value,viewProps:this.viewProps}),text:new nr(n,{parser:en,baseStep:.1,props:B.fromObject({draggingScale:.01,formatter:de(2)}),value:j(0,{constraint:new hi({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&tr({primary:this.value,secondary:this.alphaIcs_.text.value,forward:l=>l.rawValue.getComponents()[3],backward:(l,_)=>{const D=l.rawValue.getComponents();return D[3]=_.rawValue,new Vt(D,l.rawValue.mode)}}),this.textC_=new Th(n,{colorType:r.colorType,parser:en,value:this.value,viewProps:this.viewProps}),this.view=new sh(n,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:r.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const Fs=A("colsw");class Ih{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.element=n.createElement("div"),this.element.classList.add(Fs()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("div");l.classList.add(Fs("sw")),this.element.appendChild(l),this.swatchElem_=l;const _=n.createElement("button");_.classList.add(Fs("b")),r.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_,this.update_()}update_(){const n=this.value.rawValue;this.swatchElem_.style.backgroundColor=As(n)}onValueChange_(){this.update_()}}class Fh{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new Ih(n,{value:this.value,viewProps:this.viewProps})}}class Ns{constructor(n,r){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=ct.create(r.expanded),this.swatchC_=new Fh(n,{value:this.value,viewProps:this.viewProps});const l=this.swatchC_.view.buttonElement;l.addEventListener("blur",this.onButtonBlur_),l.addEventListener("click",this.onButtonClick_),this.textC_=new Lr(n,{parser:r.parser,props:B.fromObject({formatter:r.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new Ku(n,{foldable:this.foldable_,pickerLayout:r.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=r.pickerLayout==="popup"?new qo(n,{viewProps:this.viewProps}):null;const _=new Rh(n,{colorType:r.colorType,supportsAlpha:r.supportsAlpha,value:this.value,viewProps:this.viewProps});_.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=_,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(_.view.element),tr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,V)=>V.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),lt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,l=n.relatedTarget;(!l||!r.contains(l))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,l=M(n);l&&r.contains(l)||l&&l===this.swatchC_.view.buttonElement&&!yt(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Nh(s,n){return Vt.isColorObject(s)?Vt.fromObject(s,n):Vt.black(n)}function kh(s){return zn(s.getComponents("rgb")).reduce((n,r)=>n<<8|Math.floor(r)&255,0)}function Vh(s){return s.getComponents("rgb").reduce((n,r,l)=>{const _=Math.floor(l===3?r*255:r)&255;return n<<8|_},0)>>>0}function Oh(s){return new Vt([s>>16&255,s>>8&255,s&255],"rgb")}function Uh(s){return new Vt([s>>24&255,s>>16&255,s>>8&255,Kt(s&255,0,255,0,1)],"rgb")}function zh(s){return typeof s!="number"?Vt.black():Oh(s)}function Bh(s){return typeof s!="number"?Vt.black():Uh(s)}function Gh(s){const n=Ls(s);return n?(r,l)=>{ir(r,n(l))}:null}function Hh(s){const n=s?Vh:kh;return(r,l)=>{ir(r,n(l))}}function Wh(s,n,r){const l=n.toRgbaObject(r);s.writeProperty("r",l.r),s.writeProperty("g",l.g),s.writeProperty("b",l.b),s.writeProperty("a",l.a)}function jh(s,n,r){const l=n.toRgbaObject(r);s.writeProperty("r",l.r),s.writeProperty("g",l.g),s.writeProperty("b",l.b)}function qh(s,n){return(r,l)=>{s?Wh(r,l,n):jh(r,l,n)}}function ks(s){var n;return!!((s==null?void 0:s.alpha)||((n=s==null?void 0:s.color)===null||n===void 0?void 0:n.alpha))}function Xh(s){return s?n=>As(n,"0x"):n=>Ta(n,"0x")}function Yh(s){return"color"in s||"view"in s&&s.view==="color"}const $h={id:"input-color-number",type:"input",accept:(s,n)=>{if(typeof s!="number"||!Yh(n))return null;const r=Cs(n);return r?{initialValue:s,params:r}:null},binding:{reader:s=>ks(s.params)?Bh:zh,equals:Vt.equals,writer:s=>Hh(ks(s.params))},controller:s=>{const n=ks(s.params),r="expanded"in s.params?s.params.expanded:void 0,l="picker"in s.params?s.params.picker:void 0;return new Ns(s.document,{colorType:"int",expanded:r!=null?r:!1,formatter:Xh(n),parser:Ps("int"),pickerLayout:l!=null?l:"popup",supportsAlpha:n,value:s.value,viewProps:s.viewProps})}};function Kh(s){return Vt.isRgbaColorObject(s)}function Zh(s){return n=>Nh(n,s)}function Jh(s,n){return r=>s?La(r,n):Aa(r,n)}const Qh={id:"input-color-object",type:"input",accept:(s,n)=>{if(!Vt.isColorObject(s))return null;const r=Cs(n);return r?{initialValue:s,params:r}:null},binding:{reader:s=>Zh(Gn(s.params)),equals:Vt.equals,writer:s=>qh(Kh(s.initialValue),Gn(s.params))},controller:s=>{var n;const r=Vt.isRgbaColorObject(s.initialValue),l="expanded"in s.params?s.params.expanded:void 0,_="picker"in s.params?s.params.picker:void 0,D=(n=Gn(s.params))!==null&&n!==void 0?n:"int";return new Ns(s.document,{colorType:D,expanded:l!=null?l:!1,formatter:Jh(r,D),parser:Ps(D),pickerLayout:_!=null?_:"popup",supportsAlpha:r,value:s.value,viewProps:s.viewProps})}},td={id:"input-color-string",type:"input",accept:(s,n)=>{if(typeof s!="string"||"view"in n&&n.view==="text")return null;const r=Ts(s,Gn(n));if(!r||!Ls(r))return null;const _=Cs(n);return _?{initialValue:s,params:_}:null},binding:{reader:s=>{var n;return ph((n=Gn(s.params))!==null&&n!==void 0?n:"int")},equals:Vt.equals,writer:s=>{const n=Ts(s.initialValue,Gn(s.params));if(!n)throw w.shouldNeverHappen();const r=Gh(n);if(!r)throw w.notBindable();return r}},controller:s=>{const n=Ts(s.initialValue,Gn(s.params));if(!n)throw w.shouldNeverHappen();const r=Ls(n);if(!r)throw w.shouldNeverHappen();const l="expanded"in s.params?s.params.expanded:void 0,_="picker"in s.params?s.params.picker:void 0;return new Ns(s.document,{colorType:n.type,expanded:l!=null?l:!1,formatter:r,parser:Ps(n.type),pickerLayout:_!=null?_:"popup",supportsAlpha:n.alpha,value:s.value,viewProps:s.viewProps})}};class bn{constructor(n){this.components=n.components,this.asm_=n.assembly}constrain(n){const r=this.asm_.toComponents(n).map((l,_)=>{var D,V;return(V=(D=this.components[_])===null||D===void 0?void 0:D.constrain(l))!==null&&V!==void 0?V:l});return this.asm_.fromComponents(r)}}const Ra=A("pndtxt");class ed{constructor(n,r){this.textViews=r.textViews,this.element=n.createElement("div"),this.element.classList.add(Ra()),this.textViews.forEach(l=>{const _=n.createElement("div");_.classList.add(Ra("a")),_.appendChild(l.element),this.element.appendChild(_)})}}function nd(s,n,r){return new nr(s,{arrayPosition:r===0?"fst":r===n.axes.length-1?"lst":"mid",baseStep:n.axes[r].baseStep,parser:n.parser,props:n.axes[r].textProps,value:j(0,{constraint:n.axes[r].constraint}),viewProps:n.viewProps})}class Vs{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.acs_=r.axes.map((l,_)=>nd(n,r,_)),this.acs_.forEach((l,_)=>{tr({primary:this.value,secondary:l.value,forward:D=>r.assembly.toComponents(D.rawValue)[_],backward:(D,V)=>{const it=r.assembly.toComponents(D.rawValue);return it[_]=V.rawValue,r.assembly.fromComponents(it)}})}),this.view=new ed(n,{textViews:this.acs_.map(l=>l.view)})}}function Ia(s,n){return"step"in s&&!m(s.step)?new Ar(s.step,n):null}function Fa(s){return"max"in s&&!m(s.max)||"min"in s&&!m(s.min)?new hi({max:s.max,min:s.min}):null}function id(s,n){const r=[],l=Ia(s,n);l&&r.push(l);const _=Fa(s);_&&r.push(_);const D=Ss(s.options);return D&&r.push(D),new $i(r)}function rd(s){const n=s?$e(s,hi):null;return n?[n.minValue,n.maxValue]:[void 0,void 0]}function sd(s){const[n,r]=rd(s);return[n!=null?n:0,r!=null?r:100]}const od={id:"input-number",type:"input",accept:(s,n)=>{if(typeof s!="number")return null;const r=J,l=ft(n,{format:r.optional.function,max:r.optional.number,min:r.optional.number,options:r.optional.custom(Rr),step:r.optional.number});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Qo,constraint:s=>id(s.params,s.initialValue),writer:s=>ir},controller:s=>{var n,r;const l=s.value,_=s.constraint;if(_&&$e(_,Ki))return new Zi(s.document,{props:B.fromObject({options:(n=Es(_))!==null&&n!==void 0?n:[]}),value:l,viewProps:s.viewProps});const D=(r="format"in s.params?s.params.format:void 0)!==null&&r!==void 0?r:de(Ir(_,l.rawValue));if(_&&$e(_,hi)){const[V,it]=sd(_);return new Ms(s.document,{baseStep:di(_),parser:en,sliderProps:B.fromObject({maxValue:it,minValue:V}),textProps:B.fromObject({draggingScale:pi(_,l.rawValue),formatter:D}),value:l,viewProps:s.viewProps})}return new nr(s.document,{baseStep:di(_),parser:en,props:B.fromObject({draggingScale:pi(_,l.rawValue),formatter:D}),value:l,viewProps:s.viewProps})}};class wn{constructor(n=0,r=0){this.x=n,this.y=r}getComponents(){return[this.x,this.y]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y;return!(typeof r!="number"||typeof l!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y}toObject(){return{x:this.x,y:this.y}}}const Na={toComponents:s=>s.getComponents(),fromComponents:s=>new wn(...s)},mi=A("p2d");class ad{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(mi()),r.viewProps.bindClassModifiers(this.element),N(r.expanded,I(this.element,mi(void 0,"expanded")));const l=n.createElement("div");l.classList.add(mi("h")),this.element.appendChild(l);const _=n.createElement("button");_.classList.add(mi("b")),_.appendChild(Yt(n,"p2dpad")),r.viewProps.bindDisabled(_),l.appendChild(_),this.buttonElement=_;const D=n.createElement("div");if(D.classList.add(mi("t")),l.appendChild(D),this.textElement=D,r.pickerLayout==="inline"){const V=n.createElement("div");V.classList.add(mi("p")),this.element.appendChild(V),this.pickerElement=V}else this.pickerElement=null}}const yn=A("p2dp");class ld{constructor(n,r){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=r.invertsY,this.maxValue_=r.maxValue,this.element=n.createElement("div"),this.element.classList.add(yn()),r.layout==="popup"&&this.element.classList.add(yn(void 0,"p"));const l=n.createElement("div");l.classList.add(yn("p")),r.viewProps.bindTabIndex(l),this.element.appendChild(l),this.padElement=l;const _=n.createElementNS(mt,"svg");_.classList.add(yn("g")),this.padElement.appendChild(_),this.svgElem_=_;const D=n.createElementNS(mt,"line");D.classList.add(yn("ax")),D.setAttributeNS(null,"x1","0"),D.setAttributeNS(null,"y1","50%"),D.setAttributeNS(null,"x2","100%"),D.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(D);const V=n.createElementNS(mt,"line");V.classList.add(yn("ax")),V.setAttributeNS(null,"x1","50%"),V.setAttributeNS(null,"y1","0"),V.setAttributeNS(null,"x2","50%"),V.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(V);const it=n.createElementNS(mt,"line");it.classList.add(yn("l")),it.setAttributeNS(null,"x1","50%"),it.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(it),this.lineElem_=it;const wt=n.createElement("div");wt.classList.add(yn("m")),this.padElement.appendChild(wt),this.markerElem_=wt,r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[n,r]=this.value.rawValue.getComponents(),l=this.maxValue_,_=Kt(n,-l,+l,0,100),D=Kt(r,-l,+l,0,100),V=this.invertsY_?100-D:D;this.lineElem_.setAttributeNS(null,"x2",`${_}%`),this.lineElem_.setAttributeNS(null,"y2",`${V}%`),this.markerElem_.style.left=`${_}%`,this.markerElem_.style.top=`${V}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ka(s,n,r){return[we(n[0],nn(s)),we(n[1],er(s))*(r?1:-1)]}class cd{constructor(n,r){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.baseSteps_=r.baseSteps,this.maxValue_=r.maxValue,this.invertsY_=r.invertsY,this.view=new ld(n,{invertsY:this.invertsY_,layout:r.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new On(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const l=this.maxValue_,_=Kt(n.point.x,0,n.bounds.width,-l,+l),D=Kt(this.invertsY_?n.bounds.height-n.point.y:n.point.y,0,n.bounds.height,-l,+l);this.value.setRawValue(new wn(_,D),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onPadKeyDown_(n){na(n.key)&&n.preventDefault();const[r,l]=ka(n,this.baseSteps_,this.invertsY_);r===0&&l===0||this.value.setRawValue(new wn(this.value.rawValue.x+r,this.value.rawValue.y+l),{forceEmit:!1,last:!1})}onPadKeyUp_(n){const[r,l]=ka(n,this.baseSteps_,this.invertsY_);r===0&&l===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class ud{constructor(n,r){var l,_;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=ct.create(r.expanded),this.popC_=r.pickerLayout==="popup"?new qo(n,{viewProps:this.viewProps}):null;const D=new cd(n,{baseSteps:[r.axes[0].baseStep,r.axes[1].baseStep],invertsY:r.invertsY,layout:r.pickerLayout,maxValue:r.maxValue,value:this.value,viewProps:this.viewProps});D.view.allFocusableElements.forEach(V=>{V.addEventListener("blur",this.onPopupChildBlur_),V.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=D,this.textC_=new Vs(n,{assembly:Na,axes:r.axes,parser:r.parser,value:this.value,viewProps:this.viewProps}),this.view=new ad(n,{expanded:this.foldable_.value("expanded"),pickerLayout:r.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(l=this.view.buttonElement)===null||l===void 0||l.addEventListener("blur",this.onPadButtonBlur_),(_=this.view.buttonElement)===null||_===void 0||_.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),tr({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:V=>V.rawValue,backward:(V,it)=>it.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),lt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,l=n.relatedTarget;(!l||!r.contains(l))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,l=M(n);l&&r.contains(l)||l&&l===this.view.buttonElement&&!yt(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.view.buttonElement.focus()}}function hd(s){return wn.isObject(s)?new wn(s.x,s.y):new wn}function dd(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y)}function rn(s,n){if(!s)return;const r=[],l=Ia(s,n);l&&r.push(l);const _=Fa(s);return _&&r.push(_),new $i(r)}function pd(s,n){return new bn({assembly:Na,components:[rn("x"in s?s.x:void 0,n.x),rn("y"in s?s.y:void 0,n.y)]})}function Va(s,n){var r,l;const _=s&&$e(s,hi);if(_)return Math.max(Math.abs((r=_.minValue)!==null&&r!==void 0?r:0),Math.abs((l=_.maxValue)!==null&&l!==void 0?l:0));const D=di(s);return Math.max(Math.abs(D)*10,Math.abs(n)*10)}function fd(s,n){const r=n instanceof bn?n.components[0]:void 0,l=n instanceof bn?n.components[1]:void 0,_=Va(r,s.x),D=Va(l,s.y);return Math.max(_,D)}function Oa(s,n){return{baseStep:di(n),constraint:n,textProps:B.fromObject({draggingScale:pi(n,s),formatter:de(Ir(n,s))})}}function md(s){if(!("y"in s))return!1;const n=s.y;return n&&"inverted"in n?!!n.inverted:!1}const gd={id:"input-point2d",type:"input",accept:(s,n)=>{if(!wn.isObject(s))return null;const r=J,l=ft(n,{expanded:r.optional.boolean,picker:r.optional.custom(sa),x:r.optional.custom(_n),y:r.optional.object({inverted:r.optional.boolean,max:r.optional.number,min:r.optional.number,step:r.optional.number})});return l?{initialValue:s,params:l}:null},binding:{reader:s=>hd,constraint:s=>pd(s.params,s.initialValue),equals:wn.equals,writer:s=>dd},controller:s=>{const n=s.document,r=s.value,l=s.constraint;if(!(l instanceof bn))throw w.shouldNeverHappen();const _="expanded"in s.params?s.params.expanded:void 0,D="picker"in s.params?s.params.picker:void 0;return new ud(n,{axes:[Oa(r.rawValue.x,l.components[0]),Oa(r.rawValue.y,l.components[1])],expanded:_!=null?_:!1,invertsY:md(s.params),maxValue:fd(r.rawValue,l),parser:en,pickerLayout:D!=null?D:"popup",value:r,viewProps:s.viewProps})}};class gi{constructor(n=0,r=0,l=0){this.x=n,this.y=r,this.z=l}getComponents(){return[this.x,this.y,this.z]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y,_=n.z;return!(typeof r!="number"||typeof l!="number"||typeof _!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Ua={toComponents:s=>s.getComponents(),fromComponents:s=>new gi(...s)};function vd(s){return gi.isObject(s)?new gi(s.x,s.y,s.z):new gi}function _d(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y),s.writeProperty("z",n.z)}function xd(s,n){return new bn({assembly:Ua,components:[rn("x"in s?s.x:void 0,n.x),rn("y"in s?s.y:void 0,n.y),rn("z"in s?s.z:void 0,n.z)]})}function Os(s,n){return{baseStep:di(n),constraint:n,textProps:B.fromObject({draggingScale:pi(n,s),formatter:de(Ir(n,s))})}}const bd={id:"input-point3d",type:"input",accept:(s,n)=>{if(!gi.isObject(s))return null;const r=J,l=ft(n,{x:r.optional.custom(_n),y:r.optional.custom(_n),z:r.optional.custom(_n)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>vd,constraint:s=>xd(s.params,s.initialValue),equals:gi.equals,writer:s=>_d},controller:s=>{const n=s.value,r=s.constraint;if(!(r instanceof bn))throw w.shouldNeverHappen();return new Vs(s.document,{assembly:Ua,axes:[Os(n.rawValue.x,r.components[0]),Os(n.rawValue.y,r.components[1]),Os(n.rawValue.z,r.components[2])],parser:en,value:n,viewProps:s.viewProps})}};class vi{constructor(n=0,r=0,l=0,_=0){this.x=n,this.y=r,this.z=l,this.w=_}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(n){if(m(n))return!1;const r=n.x,l=n.y,_=n.z,D=n.w;return!(typeof r!="number"||typeof l!="number"||typeof _!="number"||typeof D!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z&&n.w===r.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const za={toComponents:s=>s.getComponents(),fromComponents:s=>new vi(...s)};function wd(s){return vi.isObject(s)?new vi(s.x,s.y,s.z,s.w):new vi}function yd(s,n){s.writeProperty("x",n.x),s.writeProperty("y",n.y),s.writeProperty("z",n.z),s.writeProperty("w",n.w)}function Md(s,n){return new bn({assembly:za,components:[rn("x"in s?s.x:void 0,n.x),rn("y"in s?s.y:void 0,n.y),rn("z"in s?s.z:void 0,n.z),rn("w"in s?s.w:void 0,n.w)]})}function Sd(s,n){return{baseStep:di(n),constraint:n,textProps:B.fromObject({draggingScale:pi(n,s),formatter:de(Ir(n,s))})}}const Ed={id:"input-point4d",type:"input",accept:(s,n)=>{if(!vi.isObject(s))return null;const r=J,l=ft(n,{x:r.optional.custom(_n),y:r.optional.custom(_n),z:r.optional.custom(_n),w:r.optional.custom(_n)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>wd,constraint:s=>Md(s.params,s.initialValue),equals:vi.equals,writer:s=>yd},controller:s=>{const n=s.value,r=s.constraint;if(!(r instanceof bn))throw w.shouldNeverHappen();return new Vs(s.document,{assembly:za,axes:n.rawValue.getComponents().map((l,_)=>Sd(l,r.components[_])),parser:en,value:n,viewProps:s.viewProps})}};function Cd(s){const n=[],r=Ss(s.options);return r&&n.push(r),new $i(n)}const Td={id:"input-string",type:"input",accept:(s,n)=>{if(typeof s!="string")return null;const l=ft(n,{options:J.optional.custom(Rr)});return l?{initialValue:s,params:l}:null},binding:{reader:s=>ta,constraint:s=>Cd(s.params),writer:s=>ir},controller:s=>{var n;const r=s.document,l=s.value,_=s.constraint;return _&&$e(_,Ki)?new Zi(r,{props:B.fromObject({options:(n=Es(_))!==null&&n!==void 0?n:[]}),value:l,viewProps:s.viewProps}):new Lr(r,{parser:D=>D,props:B.fromObject({formatter:xs}),value:l,viewProps:s.viewProps})}},sr={monitor:{defaultInterval:200,defaultLineCount:3}},Ba=A("mll");class Pd{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Ba()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("textarea");l.classList.add(Ba("i")),l.style.height=`calc(var(--bld-us) * ${r.lineCount})`,l.readOnly=!0,r.viewProps.bindDisabled(l),this.element.appendChild(l),this.textareaElem_=l,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.textareaElem_,r=n.scrollTop===n.scrollHeight-n.clientHeight,l=[];this.value.rawValue.forEach(_=>{_!==void 0&&l.push(this.formatter_(_))}),n.textContent=l.join(`
`),r&&(n.scrollTop=n.scrollHeight)}onValueUpdate_(){this.update_()}}class Us{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new Pd(n,{formatter:r.formatter,lineCount:r.lineCount,value:this.value,viewProps:this.viewProps})}}const Ga=A("sgl");class Ad{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Ga()),r.viewProps.bindClassModifiers(this.element);const l=n.createElement("input");l.classList.add(Ga("i")),l.readOnly=!0,l.type="text",r.viewProps.bindDisabled(l),this.element.appendChild(l),this.inputElement=l,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.value.rawValue,r=n[n.length-1];this.inputElement.value=r!==void 0?this.formatter_(r):""}onValueUpdate_(){this.update_()}}class zs{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new Ad(n,{formatter:r.formatter,value:this.value,viewProps:this.viewProps})}}const Ld={id:"monitor-bool",type:"monitor",accept:(s,n)=>{if(typeof s!="boolean")return null;const l=ft(n,{lineCount:J.optional.number});return l?{initialValue:s,params:l}:null},binding:{reader:s=>Yo},controller:s=>{var n;return s.value.rawValue.length===1?new zs(s.document,{formatter:$o,value:s.value,viewProps:s.viewProps}):new Us(s.document,{formatter:$o,lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:sr.monitor.defaultLineCount,value:s.value,viewProps:s.viewProps})}},Mn=A("grl");class Dd{constructor(n,r){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Mn()),r.viewProps.bindClassModifiers(this.element),this.formatter_=r.formatter,this.props_=r.props,this.cursor_=r.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const l=n.createElementNS(mt,"svg");l.classList.add(Mn("g")),l.style.height=`calc(var(--bld-us) * ${r.lineCount})`,this.element.appendChild(l),this.svgElem_=l;const _=n.createElementNS(mt,"polyline");this.svgElem_.appendChild(_),this.lineElem_=_;const D=n.createElement("div");D.classList.add(Mn("t"),A("tt")()),this.element.appendChild(D),this.tooltipElem_=D,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const n=this.svgElem_.getBoundingClientRect(),r=this.value.rawValue.length-1,l=this.props_.get("minValue"),_=this.props_.get("maxValue"),D=[];this.value.rawValue.forEach((qt,Xt)=>{if(qt===void 0)return;const sn=Kt(Xt,0,r,0,n.width),or=Kt(qt,l,_,n.height,0);D.push([sn,or].join(","))}),this.lineElem_.setAttributeNS(null,"points",D.join(" "));const V=this.tooltipElem_,it=this.value.rawValue[this.cursor_.rawValue];if(it===void 0){V.classList.remove(Mn("t","a"));return}const wt=Kt(this.cursor_.rawValue,0,r,0,n.width),Pt=Kt(it,l,_,n.height,0);V.style.left=`${wt}px`,V.style.top=`${Pt}px`,V.textContent=`${this.formatter_(it)}`,V.classList.contains(Mn("t","a"))||(V.classList.add(Mn("t","a"),Mn("t","in")),Ut(V),V.classList.remove(Mn("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Rd{constructor(n,r){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=r.props,this.value=r.value,this.viewProps=r.viewProps,this.cursor_=j(-1),this.view=new Dd(n,{cursor:this.cursor_,formatter:r.formatter,lineCount:r.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!yt(n))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const l=new On(this.view.element);l.emitter.on("down",this.onGraphPointerDown_),l.emitter.on("move",this.onGraphPointerMove_),l.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(n){const r=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(Kt(n.offsetX,0,r.width,0,this.value.rawValue.length))}onGraphPointerDown_(n){this.onGraphPointerMove_(n)}onGraphPointerMove_(n){if(!n.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(Kt(n.data.point.x,0,n.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Bs(s){return"format"in s&&!m(s.format)?s.format:de(2)}function Id(s){var n;return s.value.rawValue.length===1?new zs(s.document,{formatter:Bs(s.params),value:s.value,viewProps:s.viewProps}):new Us(s.document,{formatter:Bs(s.params),lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:sr.monitor.defaultLineCount,value:s.value,viewProps:s.viewProps})}function Fd(s){var n,r,l;return new Rd(s.document,{formatter:Bs(s.params),lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:sr.monitor.defaultLineCount,props:B.fromObject({maxValue:(r="max"in s.params?s.params.max:null)!==null&&r!==void 0?r:100,minValue:(l="min"in s.params?s.params.min:null)!==null&&l!==void 0?l:0}),value:s.value,viewProps:s.viewProps})}function Ha(s){return"view"in s&&s.view==="graph"}const Nd={id:"monitor-number",type:"monitor",accept:(s,n)=>{if(typeof s!="number")return null;const r=J,l=ft(n,{format:r.optional.function,lineCount:r.optional.number,max:r.optional.number,min:r.optional.number,view:r.optional.string});return l?{initialValue:s,params:l}:null},binding:{defaultBufferSize:s=>Ha(s)?64:1,reader:s=>Qo},controller:s=>Ha(s.params)?Fd(s):Id(s)},kd={id:"monitor-string",type:"monitor",accept:(s,n)=>{if(typeof s!="string")return null;const r=J,l=ft(n,{lineCount:r.optional.number,multiline:r.optional.boolean});return l?{initialValue:s,params:l}:null},binding:{reader:s=>ta},controller:s=>{var n;const r=s.value;return r.rawValue.length>1||"multiline"in s.params&&s.params.multiline?new Us(s.document,{formatter:xs,lineCount:(n=s.params.lineCount)!==null&&n!==void 0?n:sr.monitor.defaultLineCount,value:r,viewProps:s.viewProps}):new zs(s.document,{formatter:xs,value:r,viewProps:s.viewProps})}};class Vd{constructor(n){this.onValueChange_=this.onValueChange_.bind(this),this.reader=n.reader,this.writer=n.writer,this.emitter=new y,this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.target=n.target,this.read()}read(){const n=this.target.read();n!==void 0&&(this.value.rawValue=this.reader(n))}write_(n){this.writer(this.target,n)}onValueChange_(n){this.write_(n.rawValue),this.emitter.emit("change",{options:n.options,rawValue:n.rawValue,sender:this})}}function Od(s,n){const r=s.accept(n.target.read(),n.params);if(m(r))return null;const l=J,_={target:n.target,initialValue:r.initialValue,params:r.params},D=s.binding.reader(_),V=s.binding.constraint?s.binding.constraint(_):void 0,it=j(D(r.initialValue),{constraint:V,equals:s.binding.equals}),wt=new Vd({reader:D,target:n.target,value:it,writer:s.binding.writer(_)}),Pt=l.optional.boolean(n.params.disabled).value,qt=l.optional.boolean(n.params.hidden).value,Xt=s.controller({constraint:V,document:n.document,initialValue:r.initialValue,params:r.params,value:wt.value,viewProps:kt.create({disabled:Pt,hidden:qt})}),sn=l.optional.string(n.params.label).value;return new Ft(n.document,{binding:wt,blade:et(),props:B.fromObject({label:sn!=null?sn:n.target.key}),valueController:Xt})}class Ud{constructor(n){this.onTick_=this.onTick_.bind(this),this.reader_=n.reader,this.target=n.target,this.emitter=new y,this.value=n.value,this.ticker=n.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const n=this.target.read();if(n===void 0)return;const r=this.value.rawValue,l=this.reader_(n);this.value.rawValue=Uu(r,l),this.emitter.emit("update",{rawValue:l,sender:this})}onTick_(n){this.read()}}function zd(s,n){return n===0?new iu:new ru(s,n!=null?n:sr.monitor.defaultInterval)}function Bd(s,n){var r,l,_;const D=J,V=s.accept(n.target.read(),n.params);if(m(V))return null;const it={target:n.target,initialValue:V.initialValue,params:V.params},wt=s.binding.reader(it),Pt=(l=(r=D.optional.number(n.params.bufferSize).value)!==null&&r!==void 0?r:s.binding.defaultBufferSize&&s.binding.defaultBufferSize(V.params))!==null&&l!==void 0?l:1,qt=D.optional.number(n.params.interval).value,Xt=new Ud({reader:wt,target:n.target,ticker:zd(n.document,qt),value:Vu(Pt)}),sn=D.optional.boolean(n.params.disabled).value,or=D.optional.boolean(n.params.hidden).value,ar=s.controller({document:n.document,params:V.params,value:Xt.value,viewProps:kt.create({disabled:sn,hidden:or})}),_i=(_=D.optional.string(n.params.label).value)!==null&&_!==void 0?_:n.target.key;return new oe(n.document,{binding:Xt,blade:et(),props:B.fromObject({label:_i}),valueController:ar})}class Gd{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(n){n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput(n,r,l){const _=r.read();if(m(_))throw new w({context:{key:r.key},type:"nomatchingcontroller"});const D=this.pluginsMap_.inputs.reduce((V,it)=>V!=null?V:Od(it,{document:n,target:r,params:l}),null);if(D)return D;throw new w({context:{key:r.key},type:"nomatchingcontroller"})}createMonitor(n,r,l){const _=this.pluginsMap_.monitors.reduce((D,V)=>D!=null?D:Bd(V,{document:n,params:l,target:r}),null);if(_)return _;throw new w({context:{key:r.key},type:"nomatchingcontroller"})}createBlade(n,r){const l=this.pluginsMap_.blades.reduce((_,D)=>_!=null?_:nu(D,{document:n,params:r}),null);if(!l)throw new w({type:"nomatchingview",context:{params:r}});return l}createBladeApi(n){if(n instanceof Ft)return new Ht(n);if(n instanceof oe)return new se(n);if(n instanceof K)return new li(n,this);const r=this.pluginsMap_.blades.reduce((l,_)=>l!=null?l:_.api({controller:n,pool:this}),null);if(!r)throw w.shouldNeverHappen();return r}}function Hd(){const s=new Gd;return[gd,bd,Ed,Td,od,td,Qh,$h,$u,Ld,kd,Nd,Et,It,fn,Wo].forEach(n=>{s.register(n)}),s}class Wa extends o{constructor(n){super(n),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get options(){return this.controller_.valueController.props.get("options")}set options(n){this.controller_.valueController.props.set("options",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,_=>{l(_.event)}),this}}class ja extends o{constructor(n){super(n),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(n){this.controller_.valueController.sliderController.props.set("maxValue",n)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(n){this.controller_.valueController.sliderController.props.set("minValue",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,_=>{l(_.event)}),this}}class qa extends o{constructor(n){super(n),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(n){this.controller_.valueController.props.set("formatter",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const l=r.bind(this);return this.emitter_.on(n,_=>{l(_.event)}),this}}const Wd=function(){return{id:"list",type:"blade",accept(s){const n=J,r=ft(s,{options:n.required.custom(Rr),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string});return r?{params:r}:null},controller(s){const n=new Zi(s.document,{props:B.fromObject({options:oa(s.params.options)}),value:j(s.params.value),viewProps:s.viewProps});return new zt(s.document,{blade:s.blade,props:B.fromObject({label:s.params.label}),valueController:n})},api(s){return!(s.controller instanceof zt)||!(s.controller.valueController instanceof Zi)?null:new Wa(s.controller)}}}();function jd(s){return s.reduce((n,r)=>Object.assign(n,{[r.presetKey]:r.read()}),{})}function qd(s,n){s.forEach(r=>{const l=n[r.presetKey];l!==void 0&&r.write(l)})}class Xd extends kn{constructor(n,r){super(n,r)}get element(){return this.controller_.view.element}importPreset(n){const r=this.controller_.rackController.rack.find(Ft).map(l=>l.binding.target);qd(r,n),this.refresh()}exportPreset(){const n=this.controller_.rackController.rack.find(Ft).map(r=>r.binding.target);return jd(n)}refresh(){this.controller_.rackController.rack.find(Ft).forEach(n=>{n.binding.read()}),this.controller_.rackController.rack.find(oe).forEach(n=>{n.binding.read()})}}class Yd extends Dt{constructor(n,r){super(n,{expanded:r.expanded,blade:r.blade,props:r.props,root:!0,viewProps:r.viewProps})}}const $d={id:"slider",type:"blade",accept(s){const n=J,r=ft(s,{max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number});return r?{params:r}:null},controller(s){var n,r;const l=(n=s.params.value)!==null&&n!==void 0?n:0,_=new Ms(s.document,{baseStep:1,parser:en,sliderProps:B.fromObject({maxValue:s.params.max,minValue:s.params.min}),textProps:B.fromObject({draggingScale:pi(void 0,l),formatter:(r=s.params.format)!==null&&r!==void 0?r:Nu}),value:j(l),viewProps:s.viewProps});return new zt(s.document,{blade:s.blade,props:B.fromObject({label:s.params.label}),valueController:_})},api(s){return!(s.controller instanceof zt)||!(s.controller.valueController instanceof Ms)?null:new ja(s.controller)}},Kd=function(){return{id:"text",type:"blade",accept(s){const n=J,r=ft(s,{parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string});return r?{params:r}:null},controller(s){var n;const r=new Lr(s.document,{parser:s.params.parse,props:B.fromObject({formatter:(n=s.params.format)!==null&&n!==void 0?n:l=>String(l)}),value:j(s.params.value),viewProps:s.viewProps});return new zt(s.document,{blade:s.blade,props:B.fromObject({label:s.params.label}),valueController:r})},api(s){return!(s.controller instanceof zt)||!(s.controller.valueController instanceof Lr)?null:new qa(s.controller)}}}();function Zd(s){const n=s.createElement("div");return n.classList.add(A("dfw")()),s.body&&s.body.appendChild(n),n}function Xa(s,n,r){if(s.querySelector(`style[data-tp-style=${n}]`))return;const l=s.createElement("style");l.dataset.tpStyle=n,l.textContent=r,s.head.appendChild(l)}class Jd extends Xd{constructor(n){var r,l;const _=n!=null?n:{},D=(r=_.document)!==null&&r!==void 0?r:ee(),V=Hd(),it=new Yd(D,{expanded:_.expanded,blade:et(),props:B.fromObject({title:_.title}),viewProps:kt.create()});super(it,V),this.pool_=V,this.containerElem_=(l=_.container)!==null&&l!==void 0?l:Zd(D),this.containerElem_.appendChild(this.element),this.doc_=D,this.usesDefaultWrapper_=!_.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw w.alreadyDisposed();return this.doc_}dispose(){const n=this.containerElem_;if(!n)throw w.alreadyDisposed();if(this.usesDefaultWrapper_){const r=n.parentElement;r&&r.removeChild(n)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(n){("plugin"in n?[n.plugin]:"plugins"in n?n.plugins:[]).forEach(l=>{this.pool_.register(l),this.embedPluginStyle_(l)})}embedPluginStyle_(n){n.css&&Xa(this.document,`plugin-${n.id}`,n.css)}setUpDefaultPlugins_(){Xa(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(n=>{this.embedPluginStyle_(n)}),this.registerPlugin({plugins:[$d,Wd,Wo,Kd]})}}const Qd=new i("3.1.0");e.BladeApi=o,e.ButtonApi=g,e.FolderApi=kn,e.InputBindingApi=Ht,e.ListApi=Wa,e.MonitorBindingApi=se,e.Pane=Jd,e.SeparatorApi=Bt,e.SliderApi=ja,e.TabApi=ui,e.TabPageApi=gn,e.TextApi=qa,e.TpChangeEvent=h,e.VERSION=Qd,Object.defineProperty(e,"__esModule",{value:!0})})})(Ro,Ro.exports);var hr=[[11.516,-1.247,1.622],[11.512,-1.243,1.746],[11.509,-1.239,1.866],[11.505,-1.236,1.981],[11.502,-1.232,2.093],[11.498,-1.228,2.201],[11.495,-1.224,2.304],[11.491,-1.22,2.403],[11.487,-1.216,2.499],[11.484,-1.212,2.59],[11.48,-1.208,2.677],[11.476,-1.204,2.76],[11.473,-1.199,2.839],[11.469,-1.195,2.914],[11.465,-1.191,2.985],[11.461,-1.187,3.052],[11.458,-1.183,3.115],[11.454,-1.179,3.174],[11.45,-1.175,3.228],[11.446,-1.171,3.279],[11.443,-1.167,3.326],[11.439,-1.163,3.369],[11.435,-1.159,3.408],[11.431,-1.155,3.443],[11.428,-1.151,3.474],[11.424,-1.147,3.501],[11.42,-1.143,3.524],[11.416,-1.139,3.543],[11.413,-1.135,3.558],[11.409,-1.131,3.569],[11.405,-1.127,3.576],[11.401,-1.123,3.58],[11.398,-1.119,3.579],[11.394,-1.115,3.575],[11.39,-1.111,3.566],[11.387,-1.107,3.554],[11.383,-1.103,3.538],[11.38,-1.099,3.518],[11.376,-1.095,3.494],[11.373,-1.091,3.466],[11.369,-1.088,3.434],[11.366,-1.084,3.399],[11.362,-1.08,3.36],[11.359,-1.076,3.316],[11.356,-1.072,3.269],[11.352,-1.068,3.219],[11.349,-1.064,3.164],[11.346,-1.061,3.105],[11.343,-1.057,3.043],[11.34,-1.053,2.977],[11.337,-1.049,2.907],[11.334,-1.046,2.834],[11.331,-1.042,2.756],[11.328,-1.038,2.675],[10.447,-.829,2.574],[9.581,-.624,2.47],[8.729,-.424,2.364],[7.892,-.228,2.255],[7.069,-.037,2.144],[6.26,.149,2.03],[5.464,.332,1.915],[4.681,.51,1.797],[3.91,.684,1.676],[3.151,.855,1.554],[2.405,1.022,1.429],[1.669,1.185,1.303],[.945,1.345,1.174],[.232,1.502,1.043],[-.471,1.656,.911],[-1.164,1.807,.776],[-1.848,1.955,.64],[-2.522,2.1,.501],[-3.187,2.243,.361],[-3.844,2.383,.219],[-4.493,2.522,.076],[-5.032,2.639,.097],[-5.499,2.744,.22],[-5.961,2.846,.336],[-6.418,2.948,.446],[-6.871,3.047,.549],[-7.318,3.145,.646],[-7.761,3.242,.735],[-8.199,3.337,.819],[-8.633,3.431,.895],[-9.063,3.523,.965],[-9.489,3.614,1.029],[-9.91,3.703,1.086],[-10.328,3.79,1.137],[-10.742,3.876,1.182],[-11.152,3.961,1.22],[-11.558,4.043,1.252],[-11.837,4.088,1.285],[-11.346,3.908,1.358],[-10.861,3.729,1.427],[-10.38,3.552,1.492],[-9.905,3.377,1.551],[-9.434,3.204,1.606],[-8.968,3.033,1.656],[-8.507,2.864,1.701],[-8.051,2.697,1.742],[-7.599,2.532,1.778],[-7.152,2.368,1.81],[-6.71,2.206,1.837],[-6.272,2.046,1.86],[-5.838,1.888,1.878],[-5.409,1.732,1.892],[-4.984,1.577,1.901],[-4.564,1.424,1.906],[-4.148,1.272,1.907],[-3.736,1.122,1.904],[-3.328,.974,1.896],[-2.925,.827,1.884],[-2.525,.682,1.868],[-2.13,.538,1.847],[-1.738,.396,1.823],[-1.35,.255,1.794],[-.966,.116,1.762],[-.586,-.022,1.725],[-.21,-.159,1.685],[.162,-.294,1.64],[.531,-.428,1.592],[.897,-.56,1.539],[1.259,-.691,1.483],[1.617,-.821,1.423],[1.972,-.95,1.36],[2.323,-1.077,1.292],[2.671,-1.204,1.221],[3.016,-1.329,1.146],[3.358,-1.453,1.068],[3.696,-1.576,.986],[4.032,-1.697,.9],[4.364,-1.818,.811],[4.693,-1.938,.718],[5.02,-2.056,.622],[5.343,-2.174,.522],[5.664,-2.29,.419],[5.981,-2.406,.313],[6.296,-2.521,.203],[6.608,-2.635,.09],[6.86,-2.731,.069],[7.034,-2.802,.171],[7.207,-2.872,.268],[7.38,-2.941,.359],[7.551,-3.01,.446],[7.722,-3.079,.528],[7.892,-3.147,.605],[8.06,-3.215,.677],[8.228,-3.282,.744],[8.396,-3.349,.806],[8.562,-3.416,.864],[8.727,-3.482,.916],[8.892,-3.548,.964],[9.055,-3.613,1.008],[9.218,-3.678,1.046],[9.38,-3.743,1.08],[9.541,-3.807,1.11],[9.702,-3.871,1.134],[9.861,-3.935,1.155],[10.02,-3.998,1.171],[10.177,-4.061,1.182],[10.334,-4.124,1.189],[10.491,-4.186,1.192],[10.646,-4.248,1.19],[10.801,-4.31,1.184],[10.954,-4.371,1.173],[11.107,-4.432,1.159],[11.259,-4.493,1.14],[11.411,-4.554,1.117],[11.561,-4.614,1.09],[11.589,-4.656,1.078],[11.03,-4.611,1.156],[10.477,-4.566,1.229],[9.929,-4.523,1.297],[9.386,-4.48,1.36],[8.849,-4.439,1.419],[8.317,-4.399,1.472],[7.791,-4.359,1.521],[7.269,-4.321,1.565],[6.753,-4.284,1.604],[6.242,-4.247,1.639],[5.736,-4.212,1.669],[5.234,-4.177,1.695],[4.738,-4.143,1.716],[4.247,-4.111,1.732],[3.76,-4.079,1.744],[3.278,-4.048,1.752],[2.801,-4.017,1.755],[2.329,-3.988,1.754],[1.861,-3.959,1.749],[1.398,-3.931,1.739],[.939,-3.904,1.725],[.485,-3.878,1.706],[.035,-3.852,1.684],[-.411,-3.827,1.657],[-.852,-3.803,1.626],[-1.289,-3.779,1.591],[-1.722,-3.756,1.552],[-2.151,-3.734,1.509],[-2.576,-3.712,1.463],[-2.997,-3.691,1.412],[-3.414,-3.67,1.357],[-3.827,-3.65,1.298],[-4.236,-3.63,1.235],[-4.641,-3.611,1.169],[-5.043,-3.592,1.099],[-5.441,-3.574,1.025],[-5.835,-3.556,.947],[-6.226,-3.539,.866],[-6.614,-3.522,.781],[-6.997,-3.506,.693],[-7.378,-3.49,.6],[-7.755,-3.474,.505],[-8.129,-3.458,.406],[-8.5,-3.443,.303],[-8.867,-3.428,.197],[-9.232,-3.414,.087],[-9.545,-3.397,.052],[-9.778,-3.376,.142],[-10.009,-3.355,.226],[-10.239,-3.334,.306],[-10.467,-3.315,.38],[-10.694,-3.295,.449],[-10.919,-3.276,.513],[-11.143,-3.257,.571],[-11.365,-3.238,.625],[-11.586,-3.218,.674],[-11.806,-3.199,.718],[-12.024,-3.179,.757],[-12.241,-3.159,.791],[-12.456,-3.138,.821],[-12.67,-3.116,.845],[-12.883,-3.094,.865],[-13.094,-3.071,.881],[-13.304,-3.046,.892],[-13.513,-3.021,.898],[-13.72,-2.994,.9],[-13.926,-2.966,.897],[-14.077,-2.929,.897],[-13.481,-2.781,1.003],[-12.892,-2.633,1.102],[-12.311,-2.486,1.196],[-11.736,-2.339,1.285],[-11.169,-2.194,1.368],[-10.609,-2.049,1.446],[-10.055,-1.905,1.518],[-9.509,-1.761,1.585],[-8.969,-1.619,1.647],[-8.436,-1.477,1.703],[-7.909,-1.336,1.754],[-7.389,-1.196,1.801],[-6.875,-1.057,1.842],[-6.368,-.918,1.878],[-5.866,-.781,1.909],[-5.371,-.644,1.935],[-4.882,-.508,1.956],[-4.399,-.373,1.972],[-3.921,-.239,1.984],[-3.449,-.105,1.991],[-2.983,.027,1.993],[-2.523,.158,1.991],[-2.067,.289,1.983],[-1.618,.418,1.972],[-1.173,.547,1.956],[-.734,.675,1.936],[-.299,.801,1.911],[.13,.927,1.882],[.554,1.052,1.848],[.974,1.176,1.811],[1.388,1.299,1.769],[1.799,1.42,1.723],[2.204,1.541,1.673],[2.605,1.661,1.619],[3.002,1.779,1.561],[3.395,1.897,1.499],[3.783,2.014,1.433],[4.167,2.129,1.364],[4.548,2.243,1.29],[4.924,2.357,1.213],[5.297,2.469,1.133],[5.665,2.58,1.048],[6.031,2.69,.96],[6.392,2.799,.869],[6.75,2.907,.774],[7.105,3.013,.676],[7.457,3.118,.574],[7.805,3.223,.469],[8.151,3.326,.361],[8.493,3.428,.25],[8.832,3.528,.135],[9.37,3.687,.128],[9.575,3.747,.223],[9.779,3.807,.313],[9.981,3.867,.398],[10.182,3.926,.477],[10.382,3.985,.552],[10.581,4.044,.621],[10.778,4.102,.685],[10.974,4.161,.744],[11.168,4.219,.799],[11.362,4.276,.848],[11.554,4.334,.892],[11.745,4.391,.932],[11.934,4.448,.966],[12.123,4.504,.996],[12.31,4.561,1.021],[12.496,4.617,1.042],[12.681,4.672,1.057],[12.864,4.728,1.069],[13.047,4.783,1.075],[13.228,4.838,1.077],[13.408,4.892,1.075],[13.587,4.946,1.068],[13.765,5,1.056],[13.941,5.054,1.041],[14.117,5.107,1.021],[14.291,5.16,.996],[14.465,5.213,.968],[14.363,5.191,.966],[13.872,5.061,1.007],[13.388,4.933,1.045],[12.909,4.807,1.082],[12.435,4.681,1.117],[11.966,4.557,1.149],[11.503,4.434,1.179],[11.045,4.311,1.208],[10.592,4.191,1.234],[10.144,4.071,1.258],[9.701,3.952,1.28],[9.263,3.835,1.301],[8.83,3.718,1.319],[8.401,3.603,1.335],[7.977,3.488,1.348],[7.558,3.375,1.36],[7.143,3.262,1.37],[6.733,3.151,1.377],[6.326,3.04,1.383],[5.925,2.931,1.386],[5.527,2.822,1.388],[5.134,2.715,1.387],[4.744,2.608,1.384],[4.359,2.502,1.379],[3.977,2.397,1.372],[3.6,2.293,1.362],[3.226,2.19,1.351],[2.855,2.087,1.337],[2.489,1.985,1.322],[2.126,1.884,1.304],[1.766,1.784,1.284],[1.41,1.685,1.262],[1.057,1.586,1.237],[.707,1.488,1.211],[.361,1.391,1.182],[.017,1.294,1.152],[-.323,1.198,1.119],[-.66,1.103,1.084],[-.995,1.008,1.046],[-1.327,.914,1.007],[-1.656,.821,.965],[-1.982,.728,.921],[-2.306,.636,.875],[-2.627,.544,.827],[-2.946,.453,.777],[-3.263,.362,.724],[-3.577,.272,.669],[-3.889,.182,.612],[-4.199,.093,.553],[-4.507,.004,.491],[-4.812,-.085,.428],[-5.116,-.173,.362],[-5.419,-.26,.294],[-5.719,-.348,.223],[-6.018,-.435,.151],[-6.315,-.521,.076],[-6.799,-.661,.089],[-7.008,-.722,.14],[-7.216,-.782,.187],[-7.423,-.843,.23],[-7.629,-.903,.27],[-7.834,-.963,.305],[-8.037,-1.023,.337],[-8.239,-1.083,.366],[-8.44,-1.142,.39],[-8.64,-1.201,.411],[-8.839,-1.26,.429],[-9.037,-1.319,.442],[-9.234,-1.377,.452],[-9.43,-1.435,.459],[-9.625,-1.493,.462],[-9.449,-1.5,.531],[-9.186,-1.495,.614],[-8.926,-1.49,.692],[-8.668,-1.486,.767],[-8.411,-1.483,.838],[-8.157,-1.48,.906],[-7.904,-1.478,.97],[-7.653,-1.476,1.029],[-7.404,-1.475,1.086],[-7.157,-1.474,1.138],[-6.911,-1.474,1.187],[-6.668,-1.474,1.233],[-6.426,-1.475,1.274],[-6.186,-1.476,1.313],[-5.947,-1.478,1.347],[-5.711,-1.48,1.378],[-5.476,-1.482,1.405],[-5.242,-1.485,1.429],[-5.011,-1.489,1.449],[-4.781,-1.493,1.466],[-4.552,-1.497,1.479],[-4.325,-1.502,1.489],[-4.1,-1.507,1.495],[-3.876,-1.513,1.498],[-3.654,-1.519,1.497],[-3.433,-1.525,1.493],[-3.214,-1.532,1.485],[-2.996,-1.539,1.474],[-2.78,-1.547,1.459],[-2.565,-1.555,1.441],[-2.352,-1.563,1.42],[-2.14,-1.572,1.395],[-1.929,-1.581,1.367],[-1.72,-1.59,1.336],[-1.512,-1.6,1.301],[-1.306,-1.61,1.263],[-1.1,-1.62,1.222],[-.896,-1.631,1.178],[-.693,-1.642,1.13],[-.492,-1.654,1.079],[-.292,-1.665,1.024],[-.093,-1.677,.967],[-.023,-1.67,.917],[-.05,-1.648,.87],[-.076,-1.629,.818],[-.101,-1.611,.761],[-.127,-1.594,.7],[-.152,-1.579,.634],[-.177,-1.564,.564],[-.202,-1.549,.489],[-.226,-1.535,.411],[-.25,-1.521,.329],[-.274,-1.508,.243],[-.298,-1.493,.154],[-.322,-1.478,.062],[-.346,-1.474,.069],[-.371,-1.476,.132],[-.396,-1.478,.19],[-.421,-1.48,.245],[-.446,-1.483,.295],[-.47,-1.485,.341],[-.495,-1.488,.384],[-.52,-1.49,.422],[-.545,-1.493,.457],[-.57,-1.496,.487],[-.595,-1.499,.514],[-.62,-1.502,.536],[-.645,-1.505,.555],[-.67,-1.508,.57],[-.694,-1.511,.58],[-.719,-1.514,.587],[-.744,-1.517,.59],[-.769,-1.52,.589],[-.794,-1.523,.585],[-.819,-1.526,.576],[-.845,-1.529,.563],[-.87,-1.531,.547],[-.895,-1.534,.526],[-.92,-1.537,.502],[-.945,-1.54,.474],[-.971,-1.542,.442],[-.996,-1.545,.406],[-1.021,-1.547,.366],[-1.047,-1.549,.323],[-1.073,-1.552,.275],[-1.098,-1.554,.224],[-1.124,-1.555,.169],[-1.15,-1.557,.11],[-1.175,-1.559,.048]];document.title="3d-tennis-basic v.0.0.0";const Qe={w:11.88*2,h:10.97,net:.91},Zc=new i0(200,200,"#222","#111");Zc.position.y=-.1;tn.add(Zc);const Io=new u0;tn.add(Io);const ds=new Ae(new qi(Qe.w,Qe.h),new hs({color:"#0a0"}));ds.rotateX(-Math.PI/2);ds.receiveShadow=!0;tn.add(ds);const _c=4,Cr=new Ae(new qi(Qe.w+_c,Qe.h+_c),new hs({color:"#030"}));Cr.rotateX(-Math.PI/2);Cr.position.setY(-.05);Cr.receiveShadow=!0;tn.add(Cr);const Tr=new Ae(new qi(Qe.net,Qe.h+Qe.net*2,9,110),new hs({color:"#eee",side:Rn,wireframe:!0}));Tr.position.setY(Qe.net/2);Tr.rotateZ(Math.PI/2);Tr.rotateX(Math.PI/2);Tr.castShadow=!0;tn.add(Tr);const d0=new Uo({color:"#fff"}),Yi=(...u)=>tn.add(new qc(new ze().setFromPoints(u.map(([t,e])=>new k(t,.01,e))),d0)),Ze=Qe.w/2,ki=Qe.h/2,In=ki-1.37,Wi=Ze-5.48;Yi([Ze,ki],[Ze,-ki],[-Ze,-ki],[-Ze,ki],[Ze,ki]);Yi([Ze,In],[-Ze,In]);Yi([Ze,-In],[-Ze,-In]);Yi([Wi,0],[-Wi,0]);Yi([Wi,In],[Wi,-In]);Yi([-Wi,In],[-Wi,-In]);const Jc={hard:["#314f67","#4794c7"],grass:["#0a0","#050"],carpet:["#5c8543","#a23729"],clay:["#FFA500","#FF8C00"]},p0={surface:""},Qc=new Ro.exports.Pane,f0=Qc.addFolder({title:"court type"});f0.addInput(p0,"surface",{options:Jc});const tu=({value:[u,t]})=>{ds.material.color.set(u),Cr.material.color.set(t)};Qc.on("change",tu);tu({value:Jc.hard});let qn=0;const eu=async()=>{qn++,qn>hr.length&&(Io.ribbon.clear(),qn=1),hr[qn]&&Io.move(hr[qn][0],hr[qn][2],hr[qn][1]),window.requestAnimationFrame(eu)};eu();
