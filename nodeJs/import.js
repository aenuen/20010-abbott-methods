import i from"fs";const e=(e,t)=>new Promise(((n,s)=>{i.writeFile(t,e,(i=>{i?s(""):n(t)}))})),t=e=>new Promise(((t,n)=>{e&&(i.existsSync(e)?i.unlink(e,(i=>{i?n(!1):t(!0)})):t(!0))})),n=e=>new Promise(((t,n)=>{i.existsSync(e)?i.rmdir(e,{recursive:!0},(i=>{i?n(!1):t(!0)})):t(!0)}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function s(i,e,t,n){return new(t||(t=Promise))((function(s,r){function o(i){try{c(n.next(i))}catch(i){r(i)}}function a(i){try{c(n.throw(i))}catch(i){r(i)}}function c(i){var e;i.done?s(i.value):(e=i.value,e instanceof t?e:new t((function(i){i(e)}))).then(o,a)}c((n=n.apply(i,e||[])).next())}))}class r{constructor(i){this.parseFile(i)}parseFile(i){const{destination:e,filename:t="",originalname:n,path:s=""}=i,r=n.split(".")[1]||"";this.suffix=r,this.path=s,this.filePath=`${e}${t}.${r}`,this.newFile=`${t}.${r}`,this.originalName=n}parse(){return new Promise(((e,t)=>s(this,void 0,void 0,(function*(){this.suffix?(i.existsSync(this.path)&&!i.existsSync(this.filePath)&&i.renameSync(this.path,this.filePath),e(this)):t(new Error("上文件的后缀名无效"))}))))}}const o=e=>new Promise(((t,n)=>{i.stat(e,((i,e)=>{i?n({}):t(e)}))})),a=e=>new Promise(((t,n)=>{i.existsSync(e)?t(!0):n(!1)})),c=e=>new Promise(((t,n)=>{i.stat(e,((i,e)=>{i?n(!1):e.isFile()?t(!0):n(!1)}))})),h=e=>new Promise(((t,n)=>{i.stat(e,((i,e)=>{i?n(!1):e.isDirectory()?t(!0):n(!1)}))})),m=e=>new Promise(((t,n)=>{i.readdir(e,((i,e)=>{i?n([]):t(e)}))})),f=(e,t)=>new Promise(((n,s)=>{i.rename(e,t,(i=>{i?s(!1):n(!0)}))}));export{e as FFHandleDataSaveFile,t as FFHandleDeleteFile,n as FFHandleDeleteFolder,r as FFHandleFileParse,o as FFHandleGetStats,a as FFHandleIsExists,c as FFHandleIsFile,h as FFHandleIsFolder,m as FFHandleReadDownFile,f as FFHandleRename};
//# sourceMappingURL=import.js.map
