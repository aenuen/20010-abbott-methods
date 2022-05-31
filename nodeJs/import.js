import i from"fs";import t from"path";const e=(i,t)=>{const e=String(i),n=String(t);return e.substr(-e.length)===n?e:e+n},n=(t,n,r)=>{const s=`${r?e(r,"/"):""}${n}`;return new Promise((e=>i.writeFile(s,t,(i=>e(i?"":s)))))},r=(t,n)=>{const r=`${n?e(n,"/"):""}${t}`;return new Promise((t=>i.unlink(r,(i=>t(!i)))))},s=(t,n)=>{if(t){const r=`${n?e(n,"/"):""}${t}`;i.existsSync(r)&&(i.unlinkSync(r),console.log(`文件删除成功：${r}`))}},o=t=>new Promise((e=>i.rmdir(t,{recursive:!0},(i=>e(!i))))),c=require("fs");class a{constructor(i){this.parseFile(i)}parseFile(i){const{destination:t,filename:e="",originalname:n="",path:r=""}=i,s=n.split(".")[1]||"";this.suffix=s,this.path=r,this.filePath=`${t}${e}.${s}`,this.newFile=`${e}.${s}`,this.originalname=n}parse(){return new Promise(((i,t)=>{this.suffix?(c.existsSync(this.path)&&!c.existsSync(this.filePath)&&c.renameSync(this.path,this.filePath),i(this)):t(new Error("上文件的后缀名无效"))}))}}const h=t=>new Promise((e=>i.stat(t,((i,t)=>{e(i?{}:t)})))),u=t=>new Promise((e=>{e(i.existsSync(t))})),l=t=>new Promise((e=>i.stat(t,((i,t)=>{e(!i&&t.isFile())})))),f=t=>new Promise((e=>i.stat(t,((i,t)=>{e(!i&&t.isDirectory())})))),m=t=>new Promise((e=>i.mkdir(t,(i=>{e(!i)}))));
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
function d(i,t,e,n){return new(e||(e=Promise))((function(r,s){function o(i){try{a(n.next(i))}catch(i){s(i)}}function c(i){try{a(n.throw(i))}catch(i){s(i)}}function a(i){var t;i.done?r(i.value):(t=i.value,t instanceof e?t:new e((function(i){i(t)}))).then(o,c)}a((n=n.apply(i,t||[])).next())}))}const p=i=>d(void 0,void 0,void 0,(function*(){const e=yield u(i),n=yield f(i);if(e&&n)return!0;if(e)return!1;{const e=t.parse(i).dir;return!!(yield m(e))&&(yield m(i))}})),w=t=>new Promise((e=>i.readdir(t,((i,t)=>e(i?[]:t))))),y=t=>{const e=[];return i.readdirSync(t).forEach((i=>{e.push(`${i}`)})),e};export{n as FFHandleDataSaveFile,r as FFHandleDeleteFile,s as FFHandleDeleteFileSync,o as FFHandleDeleteFolder,a as FFHandleFileParse,h as FFHandleGetStats,u as FFHandleIsExists,l as FFHandleIsFile,f as FFHandleIsFolder,m as FFHandleMakeFolderOne,p as FFHandleMakeFolderPath,w as FFHandleReadFolderDF,y as FFHandleReadFolderDFSync};
//# sourceMappingURL=import.js.map
