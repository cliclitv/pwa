(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{R2cY:function(t,e,n){"use strict";n.r(e),n.d(e,"VideoModule",(function(){return a}));var o=n("ofXK"),r=n("tyNb"),c=n("nCDP"),i=n("fXoL");let s=(()=>{class t{constructor(t){this.activatedRoute=t}ngOnInit(){let t=this.activatedRoute.snapshot.queryParamMap.get("url");Object(c.b)(t).then(t=>{this.videoInfo={url:t.url,type:t.type}})}}return t.\u0275fac=function(e){return new(e||t)(i.Gb(r.a))},t.\u0275cmp=i.Ab({type:t,selectors:[["app-video"]],decls:1,vars:2,template:function(t,e){1&t&&i.Hb(0,"e-player"),2&t&&i.xb("src",e.videoInfo.url)("type",e.videoInfo.type)},styles:["video[_ngcontent-%COMP%]{width:100%}"]}),t})(),a=(()=>{class t{}return t.\u0275mod=i.Eb({type:t}),t.\u0275inj=i.Db({factory:function(e){return new(e||t)},imports:[[o.b,r.e.forChild([{path:"",component:s}])]]}),t})()}}]);