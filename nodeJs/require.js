"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("fs"));
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
function i(e,t,i,s){return new(i||(i=Promise))((function(n,a){function r(e){try{o(s.next(e))}catch(e){a(e)}}function l(e){try{o(s.throw(e))}catch(e){a(e)}}function o(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,l)}o((s=s.apply(e,t||[])).next())}))}exports.FFHandleDataSaveFile=(e,i)=>new Promise(((s,n)=>{t.default.writeFile(i,e,(e=>{e?n(""):s(i)}))})),exports.FFHandleDeleteFile=e=>new Promise(((i,s)=>{e&&(t.default.existsSync(e)?t.default.unlink(e,(e=>{e?s(!1):i(!0)})):i(!0))})),exports.FFHandleDeleteFolder=e=>new Promise(((i,s)=>{t.default.existsSync(e)?t.default.rmdir(e,{recursive:!0},(e=>{e?s(!1):i(!0)})):i(!0)})),exports.FFHandleFileParse=class{constructor(e){this.parseFile(e)}parseFile(e){const{destination:t,filename:i="",originalname:s,path:n=""}=e,a=s.split(".")[1]||"";this.suffix=a,this.path=n,this.filePath=`${t}${i}.${a}`,this.newFile=`${i}.${a}`,this.originalName=s}parse(){return new Promise(((e,s)=>i(this,void 0,void 0,(function*(){this.suffix?(t.default.existsSync(this.path)&&!t.default.existsSync(this.filePath)&&t.default.renameSync(this.path,this.filePath),e(this)):s(new Error("上文件的后缀名无效"))}))))}},exports.FFHandleGetStats=e=>new Promise(((i,s)=>{t.default.stat(e,((e,t)=>{e?s({}):i(t)}))})),exports.FFHandleIsExists=e=>new Promise(((i,s)=>{t.default.existsSync(e)?i(!0):s(!1)})),exports.FFHandleIsFile=e=>new Promise(((i,s)=>{t.default.stat(e,((e,t)=>{e?s(!1):t.isFile()?i(!0):s(!1)}))})),exports.FFHandleIsFolder=e=>new Promise(((i,s)=>{t.default.stat(e,((e,t)=>{e?s(!1):t.isDirectory()?i(!0):s(!1)}))})),exports.FFHandleReadDownFile=e=>new Promise(((i,s)=>{t.default.readdir(e,((e,t)=>{e?s([]):i(t)}))})),exports.FFHandleRename=(e,i)=>new Promise(((s,n)=>{t.default.rename(e,i,(e=>{e?n(!1):s(!0)}))}));
//# sourceMappingURL=require.js.map
