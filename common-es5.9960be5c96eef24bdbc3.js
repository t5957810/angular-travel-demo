!function(){"use strict";function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkangular_travel=self.webpackChunkangular_travel||[]).push([[592],{4108:function(e,a,i){i.d(a,{t:function(){return n}});var n=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this._totalPage=0,this._pageList=[],this._eachPage=5,this._pageStart=1,this._itemEnd=0,this._itemStart=0}var a,i,n;return a=e,(i=[{key:"pageStart",get:function(){return this._pageStart}},{key:"pageList",get:function(){return this._pageList}},{key:"itemEnd",get:function(){return this._itemEnd=this._eachPage*this._pageStart,this._itemEnd}},{key:"itemStart",get:function(){return this._itemStart=this._itemEnd-this._eachPage<=0?0:this._itemEnd-this._eachPage,this._itemStart}},{key:"buildPageList",value:function(t){this._pageList=[],this._totalPage=Math.ceil(t.length/this._eachPage);for(var e=1;e<=this._totalPage;e++)this._pageList.push(e)}},{key:"resetPageStart",value:function(){this._pageStart=1}},{key:"alterPage",value:function(t,e){if("previous"===t){if(1===this._pageStart)return;this._pageStart--}if("next"===t){if(this._pageStart===this._totalPage)return;this._pageStart++}"change"===t&&(this._pageStart=e)}}])&&t(a.prototype,i),n&&t(a,n),e}()}}])}();