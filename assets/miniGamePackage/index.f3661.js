window.__require=function e(t,n,r){function o(a,s){if(!n[a]){if(!t[a]){var c=a.split("/");if(c=c[c.length-1],!t[c]){var u="function"==typeof __require&&__require;if(!s&&u)return u(c,!0);if(i)return i(c,!0);throw new Error("Cannot find module '"+a+"'")}a=c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){return o(t[a][1][e]||e)},l,l.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<r.length;a++)o(r[a]);return o}({LittleGameCenterScreen:[function(e,t,n){"use strict";cc._RF.push(t,"7576fxUgA1ECK8mJLgSqQmb","LittleGameCenterScreen");var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var u=c(e("../../scripts/Controller/SceneCtrl")),l=e("../../scripts/Utils/CocosExtension"),f=c(e("./SubPackageManager")),p=e("./utils/PlatformUtils"),d=cc._decorator,h=d.ccclass,y=d.property,b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),Object.defineProperty(t.prototype,"fairyUI",{get:function(){return[]},enumerable:!1,configurable:!0}),t.prototype.back=function(){f.default.instance.getModel().gameExit()},t.prototype.start=function(){return a(this,void 0,void 0,function(){var e,t,n=this;return s(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),p.subPlatformEnv.isWX&&wx.showLoading({title:"\u8d44\u6e90\u52a0\u8f7d\u4e2d...",success:function(){console.error(1111),n.rootNode.childrenCount>0&&wx.hideLoading({})}}),[4,f.default.instance.loadSubpackage(f.default.instance.currentKey)];case 1:return r.sent(),[3,3];case 2:return e=r.sent(),console.error("\u52a0\u8f7d\u5b50\u5305\u5f02\u5e38:"+e),f.default.instance.exitGameCenter(),[2];case 3:return f.default.instance.initModel()?((t=f.default.instance.model).registeView(),[4,t.gameRun(void 0,this.rootNode)]):[3,5];case 4:return r.sent()?(f.default.instance.hideLoaidngUI(),(p.subPlatformEnv.isWX||p.subPlatformEnv.isTT)&&wx.hideLoading({}),[3,6]):(console.error("\u6e38\u620f\u542f\u52a8\u5f02\u5e38: "+f.default.instance.currentKey),f.default.instance.exitGameCenter(),[2]);case 5:return console.error("\u52a0\u8f7d\u5b50\u5305\u5f02\u5e38:\u65e0\u6cd5\u521d\u59cb\u5316model"),f.default.instance.exitGameCenter(),[2];case 6:return[4,l.delay(500)];case 7:return r.sent(),this.uiNode.setSiblingIndex(-1),[2]}})})},i([y(cc.Node)],t.prototype,"rootNode",void 0),i([y(cc.Node)],t.prototype,"uiNode",void 0),i([h("LittleGameCenterScreen")],t)}(u.default);n.default=b,cc._RF.pop()},{"../../scripts/Controller/SceneCtrl":void 0,"../../scripts/Utils/CocosExtension":void 0,"./SubPackageManager":"SubPackageManager","./utils/PlatformUtils":"PlatformUtils"}],MiniGameResultWindow:[function(e,t,n){"use strict";cc._RF.push(t,"0406bqjvGRIsY1YQvhYXgwj","MiniGameResultWindow");var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});var s=a(e("./SubPackageManager")),c=cc._decorator,u=c.ccclass,l=c.property,f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onLoad=function(){this.okBtn.on(cc.Node.EventType.TOUCH_END,this.exitGame,this)},t.prototype.onEnable=function(){this._onClose=void 0},t.prototype.setWinOrLoseToPlay=function(e,t){this.winBg.active=e,this.loseBg.active=!e,this.winTitle.active=e,this.loseTitle.active=!e,this.resultAni.play("showResult"),this._onClose=t;var n=e?this.winSound:this.failSound;cc.audioEngine.play(n,!1,1)},t.prototype.onDisable=function(){this._onClose&&this._onClose()},t.prototype.exitGame=function(){var e=s.default.instance.getModel();e?e.gameExit():(s.default.instance.exitGameCenter(),cc.audioEngine.uncache(this.winSound),cc.audioEngine.uncache(this.failSound))},i([l(cc.Node)],t.prototype,"winBg",void 0),i([l(cc.Node)],t.prototype,"loseBg",void 0),i([l(cc.Node)],t.prototype,"winTitle",void 0),i([l(cc.Node)],t.prototype,"loseTitle",void 0),i([l(cc.Animation)],t.prototype,"resultAni",void 0),i([l(cc.Node)],t.prototype,"okBtn",void 0),i([l(cc.AudioClip)],t.prototype,"winSound",void 0),i([l(cc.AudioClip)],t.prototype,"failSound",void 0),i([u("MiniGameResultWindow")],t)}(cc.Component);n.default=f,cc._RF.pop()},{"./SubPackageManager":"SubPackageManager"}],MiniGameScreen:[function(e,t,n){"use strict";cc._RF.push(t,"61b98ZHY5tFXaHlfndCVRH9","MiniGameScreen");var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return a(t,e),t},u=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r};Object.defineProperty(n,"__esModule",{value:!0});var l=e("../../scripts/Managers/PoolManager"),f=c(e("./SubPackageManager")),p=cc._decorator,d=p.ccclass,h=p.property,y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.prototype.onLoad=function(){},t.prototype.onEnable=function(){if(f.default.instance.resolveQueryParams(),f.default.instance.enterParams.miniGameEnter==f.MiniGameEnterType.AutoEnter)this.listRoot.active=!1,f.default.instance.showGame(f.default.instance.enterParams.miniGame[0]);else{this.listRoot.active=!0,u(this.listRoot.children).forEach(function(e){return l.PM.Put(e)});for(var e=0;e<f.default.instance.enterParams.miniGame.length;e++){var t=l.PM.Get(this.itemPrefab);t.setParent(this.listRoot),t.name=e+1+"",t.getComponentInChildren(cc.Label).string="\u6e38\u620f"+(e+1),t.targetOff(this),t.on(cc.Node.EventType.TOUCH_END,this.enterGame,this)}}},t.prototype.enterGame=function(e){var t=e.target;f.default.instance.showGame(t.name)},s([h(cc.Node)],t.prototype,"listRoot",void 0),s([h(cc.Prefab)],t.prototype,"itemPrefab",void 0),s([d("MiniGameScreen")],t)}(cc.Component);n.default=y,cc._RF.pop()},{"../../scripts/Managers/PoolManager":void 0,"./SubPackageManager":"SubPackageManager"}],PlatformUtils:[function(e,t,n){"use strict";cc._RF.push(t,"90dd1WAJvFF2KeYwcZg6YEY","PlatformUtils"),Object.defineProperty(n,"__esModule",{value:!0}),n.subPlatformEnv=n.isCocosGame=void 0,d("platformVersion","v1.0.3"),d("platformTagTime","2022-06-27 11:21"),n.isCocosGame=window&&window.cc&&window.cc.sys&&"string"==typeof window.cc.sys.OS_IOS,n.subPlatformEnv={get isDebug(){return!n.isCocosGame&&!!window.DEBUG},get isWX(){return n.isCocosGame?cc.sys.platform===cc.sys.WECHAT_GAME:egret.Capabilities.runtimeType===egret.RuntimeType.WXGAME},get isTT(){return!!n.isCocosGame&&cc.sys.platform===cc.sys.BYTEDANCE_GAME},get isQQ(){return window&&window.qq},get isNativeAPP(){return!n.isCocosGame&&egret.Capabilities.runtimeType===egret.RuntimeType.NATIVE},get isNativeIOSAPP(){return n.isCocosGame?(d("cc.sys.platform",cc.sys.platform),cc.sys.os===cc.sys.OS_IOS&&!1):(d("egret.Capabilities.runtimeType",egret.Capabilities.runtimeType),d("egret.Capabilities.os",egret.Capabilities.os),egret.Capabilities.runtimeType===egret.RuntimeType.NATIVE&&"iOS"===egret.Capabilities.os)},get isNativeAndroidAPP(){return n.isCocosGame?cc.sys.os===cc.sys.OS_ANDROID&&!1:egret.Capabilities.runtimeType===egret.RuntimeType.NATIVE&&"Android"===egret.Capabilities.os},get isH5(){return n.isCocosGame?cc.sys.platform===cc.sys.DESKTOP_BROWSER||cc.sys.platform===cc.sys.MOBILE_BROWSER:egret.Capabilities.runtimeType===egret.RuntimeType.WEB},get isMixMicroEnd(){if(window&&window.navigator&&window.navigator.userAgent){var e=window.navigator.userAgent;return e.indexOf("mix_micro_end_ios")>-1||e.indexOf("mix_micro_end_android")>-1}return!1},get isMixMicroEndAndroid(){return!!(window&&window.navigator&&window.navigator.userAgent)&&window.navigator.userAgent.indexOf("mix_micro_end_android")>-1},get isNonMixMicroEnd(){if(window&&window.navigator&&window.navigator.userAgent){var e=window.navigator.userAgent;return e.indexOf("HortorApp")>-1||e.indexOf("gcApp")>-1||e.indexOf("HortorApk")>-1||e.indexOf("gcApk")>-1}return!1}};var r=n.subPlatformEnv.isDebug,o=n.subPlatformEnv.isWX,i=n.subPlatformEnv.isTT,a=n.subPlatformEnv.isNativeAPP,s=n.subPlatformEnv.isNativeIOSAPP,c=n.subPlatformEnv.isNativeAndroidAPP,u=n.subPlatformEnv.isH5,l=n.subPlatformEnv.isMixMicroEnd,f=n.subPlatformEnv.isMixMicroEndAndroid,p=n.subPlatformEnv.isNonMixMicroEnd;function d(e,t){var n=!1;(a||l)&&(n=!0),console.warn("[platform]: "+e+" ",n?JSON.stringify(t):t)}d("isDebug",r),d("isWX",o),d("isTT",i),d("isNativeAPP",a),d("isNativeIOSAPP",s),d("isNativeAndroidAPP",c),d("isH5",u),d("isMixMicroEnd",l),d("isMixMicroEndAndroid",f),d("isNonMixMicroEnd",p),r&&void 0===window.HSDK&&(window.HSDK={},["ENV","LogType","EventType","NoticeType","SMSCodeType","QQScene","WXScene","QQMicroAppType","WXMicroAppType","MicroProgramType","BindPlatformType","AddicationType","SwitchStatus"].forEach(function(e){window.HSDK[e]={}})),cc._RF.pop()},{}],SingleClass:[function(e,t,n){"use strict";cc._RF.push(t,"fbf14qqhvtHsK+DrxtRK7UB","SingleClass"),Object.defineProperty(n,"__esModule",{value:!0}),n.SingleClass=void 0;var r=function(){function e(){}return e.getInst=function(){return this._instance||(this._instance=new this),this._instance},e}();n.SingleClass=r,cc._RF.pop()},{}],SubPackageManager:[function(e,t,n){"use strict";cc._RF.push(t,"b80e8Jf7fRPkIPYPzdtv/me","SubPackageManager");var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.addSubPackage=n.SubPackageKeyToModel=n.MiniGameEnterType=n.SubPackageKey=void 0;var c,u,l=e("./utils/SingleClass"),f=e("./utils/PlatformUtils"),p=e("./utils/SubResourceUtils"),d=s(e("./MiniGameResultWindow")),h=e("../../scripts/Utils/Defer"),y=s(e("../../scripts/Controller/GameManager"));(function(e){e[e.none=-1]="none",e[e.g2048=1]="g2048",e[e.paipaizuo=2]="paipaizuo",e[e.diver=3]="diver",e[e.ring=4]="ring",e[e.catch=5]="catch",e[e.digIce=6]="digIce",e[e.drop=7]="drop",e[e.mine=8]="mine",e[e.CNT=9]="CNT"})(c=n.SubPackageKey||(n.SubPackageKey={})),function(e){e[e.ListEnter=1]="ListEnter",e[e.AutoEnter=2]="AutoEnter"}(u=n.MiniGameEnterType||(n.MiniGameEnterType={})),n.SubPackageKeyToModel={},n.addSubPackage=function(e){return function(t){n.SubPackageKeyToModel[e]=t,console.log("addSubPackage  ",e)}};var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.useMiniGame=!1,t._currentKey=-1,t.onClose=void 0,t.model=void 0,t.enterParams={miniGame:[],miniGameEnter:u.AutoEnter},t}return o(t,e),Object.defineProperty(t.prototype,"currentKey",{get:function(){return this._currentKey},set:function(e){this._currentKey=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"instance",{get:function(){return this.getInst()},enumerable:!1,configurable:!0}),t.prototype.showGame=function(e,t){if((f.subPlatformEnv.isWX||f.subPlatformEnv.isTT)&&!wx.loadSubpackage)return console.error("\u5fae\u4fe1\u7248\u672c\u8fc7\u4f4e\u8bf7\u66f4\u65b0\u91cd\u8bd5"),void this.exitGameCenter();this.currentKey!=e&&(this.currentKey=e,this.onClose=t,cc.director.loadScene("LittleGameCenterScreen"))},t.prototype.loadSubpackage=function(){return i(this,void 0,Promise,function(){var e;return a(this,function(){return e=new h.Defer,f.subPlatformEnv.isWX||f.subPlatformEnv.isTT?f.isCocosGame?cc.assetManager.loadBundle("miniGameModule",null,function(t,n){n?e.resolve(!0):e.reject(!1)}):wx.loadSubpackage({name:function(){return"miniGameModule"},success:function(){e.resolve(!0)},fail:function(){e.reject(!1)},complete:function(){}}):e.resolve(!0),[2,e.promise]})})},t.prototype.initModel=function(){if(null==this.currentKey||this.currentKey<0)return console.error("\u9700\u8981\u6253\u5f00\u7684\u5b50\u5305\u5f02\u5e38"),!1;if(!n.SubPackageKeyToModel[this.currentKey])return console.error("SubPackageKeyToModel\u7f3a\u5c11\u5bf9\u5e94\u7684model\u914d\u7f6e"),!1;var e=n.SubPackageKeyToModel[this.currentKey];return this.model=new e(c[this.currentKey]),!0},t.prototype.exitGameCenter=function(){var e=c[this.currentKey];this.currentKey=-1,this.model=void 0,this.onClose&&(this.onClose(),this.onClose=void 0),this.enterRealGame(),setTimeout(function(){p.SubResourceUtils.getInst().releaseBundle(e),p.SubResourceUtils.getInst().releaseBundle(p.SubResourceUtils.getInst().bundleRoot)},100)},t.prototype.getModel=function(){return this.model},t.prototype.enterRealGame=function(){cc.director.emit("closeMiniGame")},t.prototype.resolveQueryParams=function(){for(var e=y.default.Ins.minigameQuery.split("&"),t=0;t<e.length;t++){var n=e[t].split("="),r=n[0],o=n[1];switch(r){case"miniGameEnter":this.enterParams.miniGameEnter=Number.parseInt(o);break;case"miniGameExtra":this.enterParams.miniGameExtra=o;break;case"miniGame":for(var i=[],a=1;a<c.CNT;a++)i.push(a);this.enterParams.miniGame=i}}},t.prototype.hideLoaidngUI=function(){cc.director.emit("hideLoadingUI")},t.prototype.gotoResultWithLoading=function(e,t,n,r){return i(this,void 0,void 0,function(){var o,i,s;return a(this,function(a){switch(a.label){case 0:return[4,p.SubResourceUtils.getInst().loadAsset("prefab/result/miniGameResult",cc.Prefab)];case 1:return(o=a.sent())?((i=cc.instantiate(o)).name="miniGameResult",null==(s=t||cc.find("rootNode"))||s.addChild(i),n&&n(),i.getComponent(d.default).setWinOrLoseToPlay(e),[2]):(this.getModel()?this.getModel().gameExit():this.exitGameCenter(),this.onClose=r,[2])}})})},t}(l.SingleClass);n.default=b,cc._RF.pop()},{"../../scripts/Controller/GameManager":void 0,"../../scripts/Utils/Defer":void 0,"./MiniGameResultWindow":"MiniGameResultWindow","./utils/PlatformUtils":"PlatformUtils","./utils/SingleClass":"SingleClass","./utils/SubResourceUtils":"SubResourceUtils"}],SubPackageModelBase:[function(e,t,n){"use strict";cc._RF.push(t,"259bdM7rMlHGZEFZxnRyLnG","SubPackageModelBase");var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},s=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var c=e("./utils/SubResourceUtils"),u=i(e("./SubPackageManager")),l=e("../../scripts/Utils/Defer"),f=function(){function e(e){this.enterWindow="",this.enterWindow="prefab/"+e}return e.prototype.registeView=function(){},e.prototype.gameRun=function(e,t){return a(this,void 0,Promise,function(){var n,r,o,i;return s(this,function(a){switch(a.label){case 0:return n=new l.Defer,e&&(this.enterWindow=e),this.enterWindow?[4,c.SubResourceUtils.getInst().loadAsset(this.enterWindow,cc.Prefab)]:(n.reject(!1),[2,n.promise]);case 1:return(r=a.sent())&&(o=cc.instantiate(r))?(o.name=u.SubPackageKey[u.default.instance.currentKey],null==(i=t||cc.find("rootNode"))||i.addChild(o),n.resolve(!0),[2,n.promise]):(n.reject(!1),[2,n.promise])}})})},e.prototype.unregisteView=function(){},e.prototype.gameExit=function(){this.unregisteView(),u.default.instance.exitGameCenter()},e}();n.default=f,cc._RF.pop()},{"../../scripts/Utils/Defer":void 0,"./SubPackageManager":"SubPackageManager","./utils/SubResourceUtils":"SubResourceUtils"}],SubResourceUtils:[function(e,t,n){"use strict";cc._RF.push(t,"49b9554GetNwqtkAGoGV6Wh","SubResourceUtils");var r,o=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function s(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}c((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(e){return function(t){return c([e,t])}}function c(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0}),n.SubResourceUtils=void 0;var s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._bundlePromises=cc.js.createMap(),t.bundleRoot="miniGameRes",t}return o(t,e),t.prototype.loadDir=function(e,n,r){return i(this,void 0,void 0,function(){var o=this;return a(this,function(){return[2,new Promise(function(s,c){return i(o,void 0,void 0,function(){var o,i;return a(this,function(a){switch(a.label){case 0:return o=t.getInst().bundleRoot,[4,this.loadBundle(o)];case 1:return(i=a.sent())?(i.loadDir(e,n,function(t,o){o?(r(o),s(o)):e?(c(t),console.error(t)):console.error("URI\u4e0d\u5b58\u5728",e,n)}),[2]):[2,null]}})})})]})})},t.prototype.loadAsset=function(e,n,r){return i(this,void 0,Promise,function(){var o=this;return a(this,function(){return[2,new Promise(function(s,c){return i(o,void 0,void 0,function(){var o,i,u;return a(this,function(a){switch(a.label){case 0:return o=t.getInst().bundleRoot,[4,this.loadBundle(o)];case 1:return(i=a.sent())?(u=i.get(e,n))?(null==r||r(u),[2,u]):(i.load(e,n,function(t,o){o?(null==r||r(o),s(o)):e?(c(t),console.error(t)):console.error("URI\u4e0d\u5b58\u5728",e,n)}),[2]):[2,null]}})})})]})})},t.prototype.loadBundle=function(e){return i(this,void 0,Promise,function(){var t,n;return a(this,function(){return t=this._bundlePromises,(n=cc.assetManager.getBundle(e))?[2,n]:(t[e]||(t[e]=new Promise(function(n,r){cc.assetManager.loadBundle(e,function(o,i){delete t[e],i?n(i):(r(o),console.error(o))})})),[2,t[e]])})})},t.prototype.releaseBundle=function(e){if("string"==typeof e){var t=cc.assetManager.getBundle(e);t&&t.releaseAll()}else e.releaseAll()},t}(e("./SingleClass").SingleClass);n.SubResourceUtils=s,cc._RF.pop()},{"./SingleClass":"SingleClass"}]},{},["LittleGameCenterScreen","MiniGameResultWindow","MiniGameScreen","SubPackageManager","SubPackageModelBase","PlatformUtils","SingleClass","SubResourceUtils"]);