"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("fs"),t=require("path");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),i=n(t);const s=(e,t)=>{const n=String(e),r=String(t);return n.substr(-n.length)===r?n:n+r},a=require("fs");const o=e=>new Promise((t=>{t(r.default.existsSync(e))})),l=e=>new Promise((t=>r.default.stat(e,((e,n)=>{t(!e&&n.isDirectory())})))),d=e=>new Promise((t=>r.default.mkdir(e,(e=>{t(!e)}))));
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
function u(e,t,n,r){return new(n||(n=Promise))((function(i,s){function a(e){try{l(r.next(e))}catch(e){s(e)}}function o(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}l((r=r.apply(e,t||[])).next())}))}exports.FFHandleDataSaveFile=(e,t,n)=>{const i=`${n?s(n,"/"):""}${t}`;return new Promise((t=>r.default.writeFile(i,e,(e=>t(e?"":i)))))},exports.FFHandleDeleteFile=(e,t)=>{const n=`${t?s(t,"/"):""}${e}`;return new Promise((e=>r.default.unlink(n,(t=>e(!t)))))},exports.FFHandleDeleteFileSync=(e,t)=>{if(e){const n=`${t?s(t,"/"):""}${e}`;r.default.existsSync(n)&&(r.default.unlinkSync(n),console.log(`文件删除成功：${n}`))}},exports.FFHandleDeleteFolder=e=>new Promise((t=>r.default.rmdir(e,{recursive:!0},(e=>t(!e))))),exports.FFHandleFileParse=class{constructor(e){this.parseFile(e)}parseFile(e){const{destination:t,filename:n="",originalname:r="",path:i=""}=e,s=r.split(".")[1]||"";this.suffix=s,this.path=i,this.filePath=`${t}${n}.${s}`,this.newFile=`${n}.${s}`,this.originalname=r}parse(){return new Promise(((e,t)=>{this.suffix?(a.existsSync(this.path)&&!a.existsSync(this.filePath)&&a.renameSync(this.path,this.filePath),e(this)):t(new Error("上文件的后缀名无效"))}))}},exports.FFHandleGetStats=e=>new Promise((t=>r.default.stat(e,((e,n)=>{t(e?{}:n)})))),exports.FFHandleIsExists=o,exports.FFHandleIsFile=e=>new Promise((t=>r.default.stat(e,((e,n)=>{t(!e&&n.isFile())})))),exports.FFHandleIsFolder=l,exports.FFHandleMakeFolderOne=d,exports.FFHandleMakeFolderPath=e=>u(void 0,void 0,void 0,(function*(){const t=yield o(e),n=yield l(e);if(t&&n)return!0;if(t)return!1;{const t=i.default.parse(e).dir;return!!(yield d(t))&&(yield d(e))}})),exports.FFHandleReadFolderDF=e=>new Promise((t=>r.default.readdir(e,((e,n)=>t(e?[]:n))))),exports.FFHandleReadFolderDFSync=e=>{const t=[];return r.default.readdirSync(e).forEach((e=>{t.push(`${e}`)})),t};
//# sourceMappingURL=require.js.map
