parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const n=moment().format("YYYY-MM-DD"),m=["2022-01-02","2022-02-01","2022-03-02","2022-04-01","2022-04-30","2022-05-30","2022-06-29","2022-07-28","2022-08-27","2022-09-25","2022-10-25","2022-11-23","2022-12-23"],o=["2022-01-18","2022-02-16","2022-03-18","2022-04-16","2022-05-16","2022-06-14","2022-07-13","2022-08-12","2022-09-10","2022-10-09","2022-11-08","2022-12-08"],t=o.find(m=>moment(m,"YYYY-MM-DD").format("YYYY-MM-DD")>=n),e=m.find(m=>moment(m,"YYYY-MM-DD").format("YYYY-MM-DD")>=n),Y=moment(t).diff(n,"days"),M=moment(e).diff(n,"days"),d=Y<M?"Full Moon":"New Moon",s=Math.min(Y,M)>1?`${Math.min(Y,M)} days`:1===Math.min(Y,M)?"1 day":"";let a="";a=Y<M?M>0?`moon-full-${Y}`:"moon-full":M>0?`moon-new-${M}`:"moon-new";const i=document.getElementById("moon"),f=document.getElementById("type"),l=document.getElementById("count");i.classList.add(a),f.innerHTML=d,l.innerHTML=s;
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/full-moon-in-paris/src.247c539d.js.map