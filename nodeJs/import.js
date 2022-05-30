import t from"fs";import n from"path";const i=(t,n)=>{const i=String(t),e=String(n);return i.substr(-i.length)===e?i:i+e},e=(n,e,r)=>{const s=`${r?i(r,"/"):""}${e}`;return new Promise((i=>t.writeFile(s,n,(t=>i(t?"":s)))))},r=(n,e)=>{const r=`${e?i(e,"/"):""}${n}`;return new Promise((n=>t.unlink(r,(t=>n(!t)))))},s=(n,e)=>{if(n){const r=`${e?i(e,"/"):""}${n}`;t.existsSync(r)&&(t.unlinkSync(r),console.log(`文件删除成功：${r}`))}},o=n=>new Promise((i=>t.rmdir(n,{recursive:!0},(t=>i(!t))))),c=require("fs");class a{constructor(t){this.parseFile(t)}parseFile(t){const{destination:n,filename:i="",originalname:e="",path:r=""}=t,s=e.split(".")[1]||"";this.suffix=s,this.path=r,this.filePath=`${n}${i}.${s}`,this.newFile=`${i}.${s}`,this.originalname=e}parse(){return new Promise(((t,n)=>{this.suffix?(c.existsSync(this.path)&&!c.existsSync(this.filePath)&&c.renameSync(this.path,this.filePath),t(this)):n(new Error("上文件的后缀名无效"))}))}}const h=n=>new Promise((i=>t.stat(n,((t,n)=>{i(t?{}:n)})))),u=n=>new Promise((i=>t.mkdir(n,(t=>{i(!t)}))));
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
function f(t,n,i,e){return new(i||(i=Promise))((function(r,s){function o(t){try{a(e.next(t))}catch(t){s(t)}}function c(t){try{a(e.throw(t))}catch(t){s(t)}}function a(t){var n;t.done?r(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(o,c)}a((e=e.apply(t,n||[])).next())}))}const l=t=>f(void 0,void 0,void 0,(function*(){const i=yield h(t);if(i&&i.isDirectory())return!0;if(i)return!1;{const i=n.parse(t).dir;return!!(yield l(i))&&(yield u(t))}})),m=n=>new Promise((i=>t.readdir(n,((t,n)=>i(t?[]:n))))),p=n=>{const i=[];return t.readdirSync(n).forEach((t=>{i.push(`${t}`)})),i};export{e as FFHandleDataSaveFile,r as FFHandleDeleteFile,s as FFHandleDeleteFileSync,o as FFHandleDeleteFolder,a as FFHandleFileParse,h as FFHandleGetStats,u as FFHandleMakeFolderOne,l as FFHandleMakeFolderPath,m as FFHandleReadFolderDF,p as FFHandleReadFolderDFSync};
//# sourceMappingURL=import.js.map
