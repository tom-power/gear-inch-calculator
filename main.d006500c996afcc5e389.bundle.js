webpackJsonp([1],{"+h1B":function(n,l,u){"use strict";var t=u("/oeL"),e=u("aR8+"),r=u("wQAS"),i=u("q4dy"),o=u("qbdv"),a=u("fc+i"),s=u("bm2B"),c=u("CPp0"),_=u("BkNc"),g=u("HbNM"),d=u("TMPH"),p=u("0+Ck"),f=u("OFTX"),m=u("RnRo"),h=u("vt0V");u.d(l,"a",function(){return v});var v=t.b(e.a,[r.a],function(n){return t.c([t.d(512,t.e,t.f,[[8,[i.a]],[3,t.e],t.g]),t.d(5120,t.h,t.i,[[3,t.h]]),t.d(4608,o.a,o.b,[t.h]),t.d(5120,t.j,t.k,[]),t.d(5120,t.l,t.m,[]),t.d(5120,t.n,t.o,[]),t.d(4608,a.b,a.c,[a.d]),t.d(6144,t.p,null,[a.b]),t.d(4608,a.e,a.f,[]),t.d(5120,a.g,function(n,l,u,t){return[new a.h(n),new a.i(l),new a.j(u,t)]},[a.d,a.d,a.d,a.e]),t.d(4608,a.k,a.k,[a.g,t.q]),t.d(135680,a.l,a.l,[a.d]),t.d(4608,a.m,a.m,[a.k,a.l]),t.d(6144,t.r,null,[a.m]),t.d(6144,a.n,null,[a.l]),t.d(4608,t.s,t.s,[t.q]),t.d(4608,a.o,a.o,[a.d]),t.d(4608,a.p,a.p,[a.d]),t.d(4608,s.a,s.a,[]),t.d(4608,s.b,s.b,[]),t.d(4608,c.a,c.a,[]),t.d(4608,c.b,c.c,[]),t.d(5120,c.d,c.e,[]),t.d(4608,c.f,c.f,[c.a,c.b,c.d]),t.d(4608,c.g,c.h,[]),t.d(5120,c.i,c.j,[c.f,c.g]),t.d(5120,_.a,_.b,[_.c]),t.d(4608,_.d,_.d,[]),t.d(6144,_.e,null,[_.d]),t.d(135680,_.f,_.f,[_.c,t.t,t.u,t.v,_.e]),t.d(4608,_.g,_.g,[]),t.d(5120,_.h,_.i,[_.j]),t.d(5120,t.w,function(n){return[n]},[_.h]),t.d(4608,g.a,g.a,[]),t.d(4608,d.a,d.a,[g.a]),t.d(4608,p.a,p.a,[]),t.d(4608,f.a,f.a,[d.a,p.a]),t.d(4608,m.a,m.a,[s.a]),t.d(4608,h.a,h.a,[m.a]),t.d(1024,_.k,_.l,[[3,_.c]]),t.d(1024,t.x,a.q,[]),t.d(1024,t.y,function(){return[_.m()]},[]),t.d(512,_.j,_.j,[t.v]),t.d(1024,t.z,function(n,l,u){return[a.r(n,l),_.n(u)]},[[2,a.s],[2,t.y],_.j]),t.d(512,t.A,t.A,[[2,t.z]]),t.d(131584,t.B,t.B,[t.q,t.C,t.v,t.x,t.e,t.A]),t.d(2048,t.D,null,[t.B]),t.d(512,_.o,_.p,[]),t.d(512,_.q,_.q,[]),t.d(256,_.r,{},[]),t.d(1024,o.c,_.s,[o.d,[2,o.e],_.r]),t.d(512,o.f,o.f,[o.c]),t.d(512,t.u,t.u,[]),t.d(512,t.t,t.E,[t.u,[2,t.F]]),t.d(1024,_.t,function(){return[[{path:"*",component:r.a}]]},[]),t.d(1024,_.c,_.u,[t.D,_.o,_.q,o.f,t.v,t.t,t.u,_.t,_.r,[2,_.v],[2,_.w]]),t.d(512,_.x,_.x,[[2,_.k],[2,_.c]]),t.d(512,o.g,o.g,[]),t.d(512,t.G,t.G,[t.D]),t.d(512,a.t,a.t,[[3,a.t]]),t.d(512,s.c,s.c,[]),t.d(512,s.d,s.d,[]),t.d(512,c.k,c.k,[]),t.d(512,e.a,e.a,[])])})},0:function(n,l,u){n.exports=u("cDNt")},"0+Ck":function(n,l,u){"use strict";var t=u("TX5I");u.d(l,"a",function(){return e});var e=function(){function n(){}return n.prototype.getQueryString=function(n){var l="?";return l+=t.a.wheelDiameterParam+"="+n.wheel.diameter,l+="&",l+=t.a.chainringsParam+"=["+this.getSprocketTeethAsCsv(n.chainrings)+"]",l+="&",l+=t.a.cogsParam+"=["+this.getSprocketTeethAsCsv(n.cogs)+"]"},n.prototype.getSprocketTeethAsCsv=function(n){return n.reduce(function(n,l){return n+(""!==n?",":"")+l.teeth},"")},n}()},"43G0":function(n,l,u){"use strict";var t=u("vt0V"),e=u("OFTX");u.d(l,"a",function(){return r});var r=function(){function n(n,l){this.formService=n,this.updateService=l}return n.prototype.ngOnChanges=function(){this.form=this.formService.initForm(this.params),this.updateOutput()},n.prototype.add=function(n,l){this.formService.add(this.form,n,l)},n.prototype.remove=function(n,l){this.formService.remove(this.form,n,l)},n.prototype.updateOutput=function(){this.form.valid&&this.updateService.updateOutput(this.form.value)},Object.defineProperty(n.prototype,"chainrings",{get:function(){return this.form.get("chainrings")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"cogs",{get:function(){return this.form.get("cogs")},enumerable:!0,configurable:!0}),n.ctorParameters=function(){return[{type:t.a},{type:e.a}]},n}()},"8wlt":function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".top-margin-20[_ngcontent-%COMP%]{margin-top:20px}.top-margin-10[_ngcontent-%COMP%]{margin-top:10px}"]},HbNM:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n.prototype.getGearInches=function(n,l,u){return n*(l/u)},n}()},NhKt:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".top-margin-20[_ngcontent-%COMP%]{margin-top:20px}.top-margin-10[_ngcontent-%COMP%]{margin-top:10px}"]},OCwQ:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=[".top-margin-20[_ngcontent-%COMP%]{margin-top:20px}.top-margin-10[_ngcontent-%COMP%]{margin-top:10px}"]},OFTX:function(n,l,u){"use strict";var t=u("0+Ck"),e=u("TMPH"),r=u("rlar");u.n(r);u.d(l,"a",function(){return i});var i=function(){function n(n,l){this.gearInchMapService=n,this.linkService=l,this.output=new r.Subject}return n.prototype.getOutput=function(){return this.output.asObservable()},n.prototype.updateOutput=function(n){this.output.next(this.getOutputFromBike(n))},n.prototype.getOutputFromBike=function(n){var l={};return l.cogs=n.cogs,l.chainrings=n.chainrings,l.gearInchesMap=this.gearInchMapService.getGearInchesMap(n),l.link="/"+this.linkService.getQueryString(n),l},n.ctorParameters=function(){return[{type:e.a},{type:t.a}]},n}()},RnRo:function(n,l,u){"use strict";var t=u("bm2B");u.d(l,"a",function(){return e});var e=function(){function n(n){this.fb=n}return n.prototype.initForm=function(n,l,u){return this.fb.group({wheel:this.getWheelFormGroup(n),chainrings:this.getSprocketFormArray(l),cogs:this.getSprocketFormArray(u)})},n.prototype.getWheelFormGroup=function(n){return this.fb.group({diameter:[n,[t.e.required,t.e.pattern("[0-9]{1,2}[.]{0,1}[0-9]{0,2}")]]})},n.prototype.getSprocketFormArray=function(n){var l=this,u=this.fb.array([]);return n=null!=n?n:[null],n.forEach(function(n,t){u.push(l.getSprocketFormGroup(t,n))}),u},n.prototype.getSprocketFormGroup=function(n,l){return this.fb.group({id:n,teeth:[l,[t.e.required,t.e.pattern("[0-9]{1,3}")]]})},n.ctorParameters=function(){return[{type:t.a}]},n}()},TMPH:function(n,l,u){"use strict";var t=u("HbNM");u.d(l,"a",function(){return e});var e=function(){function n(n){this.calculateService=n}return n.prototype.getGearInchesMap=function(n){var l={};if(null!=n&&null!=n.chainrings&&null!=n.cogs)for(var u=0,t=n.chainrings;u<t.length;u++){var e=t[u];l[e.id]={};for(var r=0,i=n.cogs;r<i.length;r++){var o=i[r];l[e.id][o.id]=this.calculateService.getGearInches(n.wheel.diameter,e.teeth,o.teeth)}}return l},n.ctorParameters=function(){return[{type:t.a}]},n}()},TX5I:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t=function(){function n(){}return n}();t.wheelDiameterParam="wheel-diameter",t.chainringsParam="chainrings",t.cogsParam="cogs"},"aR8+":function(n,l,u){"use strict";var t=u("wQAS");u.d(l,"a",function(){return e});var e=(t.a,function(){function n(){}return n}())},cDNt:function(n,l,u){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=u("/oeL"),e=u("p5Ee"),r=u("+h1B"),i=u("fc+i");e.a.production&&u.i(t.a)(),u.i(i.a)().bootstrapModuleFactory(r.a)},p5Ee:function(n,l,u){"use strict";u.d(l,"a",function(){return t});var t={production:!0}},q4dy:function(n,l,u){"use strict";function t(n){return i._25(0,[(n()(),i._26(0,null,null,7,"div",[["class","jumbotron jumbotron-fluid"]],null,null,null,null,null)),(n()(),i._27(null,["\n  "])),(n()(),i._26(0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(n()(),i._27(null,["\n    "])),(n()(),i._26(0,null,null,1,"h1",[["class","display-3"],["style","text-align: center !important;"]],null,null,null,null,null)),(n()(),i._27(null,["\n      Gear inch calculator\n    "])),(n()(),i._27(null,["\n  "])),(n()(),i._27(null,["\n"])),(n()(),i._27(null,["\n"])),(n()(),i._26(0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(n()(),i._27(null,["\n  "])),(n()(),i._26(0,null,null,2,"app-form-root",[],null,null,null,o.a,o.b)),i._28(573440,null,0,a.a,[s.a,c.a],{params:[0,"params"]},null),(n()(),i._27(null,["\n  "])),(n()(),i._27(null,["\n  "])),(n()(),i._26(0,null,null,2,"app-output-root",[],null,null,null,_.a,_.b)),i._28(245760,null,0,g.a,[c.a,d.f],null,null),(n()(),i._27(null,["\n  "])),(n()(),i._27(null,["\n"])),(n()(),i._27(null,["\n"]))],function(n,l){n(l,12,0,l.component.params),n(l,16,0)},null)}function e(n){return i._25(0,[(n()(),i._26(0,null,null,1,"app-root",[],null,null,null,t,h)),i._28(114688,null,0,p.a,[f.a],null,null)],function(n,l){n(l,1,0)},null)}var r=u("NhKt"),i=u("/oeL"),o=u("rkiF"),a=u("43G0"),s=u("vt0V"),c=u("OFTX"),_=u("v25Y"),g=u("vdkO"),d=u("qbdv"),p=u("wQAS"),f=u("BkNc");u.d(l,"a",function(){return v});var m=[r.a],h=i._24({encapsulation:0,styles:m,data:{}}),v=i._29("app-root",p.a,e,{},{},[])},qtrl:function(n,l){function u(n){throw new Error("Cannot find module '"+n+"'.")}u.keys=function(){return[]},u.resolve=u,n.exports=u,u.id="qtrl"},rkiF:function(n,l,u){"use strict";function t(n){return g._25(0,[(n()(),g._26(0,null,null,1,"button",[["class","btn btn-primary btn-xs"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.remove("chainrings",n.parent.parent.context.index)&&t}return t},null,null)),(n()(),g._27(null,["\n                Remove\n              "]))],null,null)}function e(n){return g._25(0,[(n()(),g._26(0,null,null,7,"div",[["class","top-margin-10"]],null,null,null,null,null)),(n()(),g._27(null,["\n              "])),(n()(),g._26(0,null,null,1,"button",[["class","btn btn-primary btn-xs"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.add("chainrings",n.parent.context.index+1)&&t}return t},null,null)),(n()(),g._27(null,["\n                Add\n              "])),(n()(),g._27(null,["\n              "])),(n()(),g._30(16777216,null,null,1,null,t)),g._28(16384,null,0,d.m,[g._6,g._7],{ngIf:[0,"ngIf"]},null),(n()(),g._27(null,["\n            "]))],function(n,l){n(l,6,0,l.component.chainrings.controls.length>1)},null)}function r(n){return g._25(0,[(n()(),g._26(0,null,null,25,"div",[],null,null,null,null,null)),(n()(),g._27(null,["\n            "])),(n()(),g._26(0,null,null,19,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),g._28(212992,null,0,p.f,[[3,p.g],[8,null],[8,null]],{name:[0,"name"]},null),g._32(2048,null,p.g,null,[p.f]),g._28(16384,null,0,p.h,[p.g],null,null),(n()(),g._27(null,["\n              "])),(n()(),g._26(0,null,null,5,"input",[["formControlName","id"],["type","hidden"]],[[8,"value",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==g._33(n,8)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==g._33(n,8).onTouched()&&t}if("compositionstart"===l){t=!1!==g._33(n,8)._compositionStart()&&t}if("compositionend"===l){t=!1!==g._33(n,8)._compositionEnd(u.target.value)&&t}return t},null,null)),g._28(16384,null,0,p.i,[g._4,g._3,[2,p.j]],null,null),g._32(1024,null,p.k,function(n){return[n]},[p.i]),g._28(671744,null,0,p.l,[[3,p.g],[8,null],[8,null],[2,p.k]],{name:[0,"name"]},null),g._32(2048,null,p.m,null,[p.l]),g._28(16384,null,0,p.n,[p.m],null,null),(n()(),g._27(null,["\n              "])),(n()(),g._26(0,null,null,6,"input",[["class","form-control"],["formControlName","teeth"],["placeholder","number of teeth"],["size","30"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==g._33(n,15)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==g._33(n,15).onTouched()&&t}if("compositionstart"===l){t=!1!==g._33(n,15)._compositionStart()&&t}if("compositionend"===l){t=!1!==g._33(n,15)._compositionEnd(u.target.value)&&t}if("change"===l){t=!1!==g._33(n,16).onChange(u.target.value)&&t}if("input"===l){t=!1!==g._33(n,16).onChange(u.target.value)&&t}if("blur"===l){t=!1!==g._33(n,16).onTouched()&&t}return t},null,null)),g._28(16384,null,0,p.i,[g._4,g._3,[2,p.j]],null,null),g._28(16384,null,0,p.o,[g._4,g._3],null,null),g._32(1024,null,p.k,function(n,l){return[n,l]},[p.i,p.o]),g._28(671744,null,0,p.l,[[3,p.g],[8,null],[8,null],[2,p.k]],{name:[0,"name"]},null),g._32(2048,null,p.m,null,[p.l]),g._28(16384,null,0,p.n,[p.m],null,null),(n()(),g._27(null,["\n            "])),(n()(),g._27(null,["\n            "])),(n()(),g._30(16777216,null,null,1,null,e)),g._28(16384,null,0,d.m,[g._6,g._7],{ngIf:[0,"ngIf"]},null),(n()(),g._27(null,["\n          "]))],function(n,l){n(l,3,0,l.context.index);n(l,10,0,"id");n(l,18,0,"teeth"),n(l,24,0,l.context.last)},function(n,l){n(l,2,0,g._33(l,5).ngClassUntouched,g._33(l,5).ngClassTouched,g._33(l,5).ngClassPristine,g._33(l,5).ngClassDirty,g._33(l,5).ngClassValid,g._33(l,5).ngClassInvalid,g._33(l,5).ngClassPending),n(l,7,0,g._31(1,"",l.context.index,""),g._33(l,12).ngClassUntouched,g._33(l,12).ngClassTouched,g._33(l,12).ngClassPristine,g._33(l,12).ngClassDirty,g._33(l,12).ngClassValid,g._33(l,12).ngClassInvalid,g._33(l,12).ngClassPending),n(l,14,0,g._33(l,20).ngClassUntouched,g._33(l,20).ngClassTouched,g._33(l,20).ngClassPristine,g._33(l,20).ngClassDirty,g._33(l,20).ngClassValid,g._33(l,20).ngClassInvalid,g._33(l,20).ngClassPending)})}function i(n){return g._25(0,[(n()(),g._26(0,null,null,1,"button",[["class","btn btn-primary btn-xs"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.remove("cogs",n.parent.parent.context.index)&&t}return t},null,null)),(n()(),g._27(null,["\n                Remove\n              "]))],null,null)}function o(n){return g._25(0,[(n()(),g._26(0,null,null,7,"div",[["class","top-margin-10"]],null,null,null,null,null)),(n()(),g._27(null,["\n              "])),(n()(),g._26(0,null,null,1,"button",[["class","btn btn-primary btn-xs"]],null,[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.add("cogs",n.parent.context.index+1)&&t}return t},null,null)),(n()(),g._27(null,["\n                Add\n              "])),(n()(),g._27(null,["\n              "])),(n()(),g._30(16777216,null,null,1,null,i)),g._28(16384,null,0,d.m,[g._6,g._7],{ngIf:[0,"ngIf"]},null),(n()(),g._27(null,["\n            "]))],function(n,l){n(l,6,0,l.component.cogs.controls.length>1)},null)}function a(n){return g._25(0,[(n()(),g._26(0,null,null,25,"div",[],null,null,null,null,null)),(n()(),g._27(null,["\n            "])),(n()(),g._26(0,null,null,19,"div",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),g._28(212992,null,0,p.f,[[3,p.g],[8,null],[8,null]],{name:[0,"name"]},null),g._32(2048,null,p.g,null,[p.f]),g._28(16384,null,0,p.h,[p.g],null,null),(n()(),g._27(null,["\n              "])),(n()(),g._26(0,null,null,5,"input",[["formControlName","id"],["type","hidden"]],[[8,"value",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==g._33(n,8)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==g._33(n,8).onTouched()&&t}if("compositionstart"===l){t=!1!==g._33(n,8)._compositionStart()&&t}if("compositionend"===l){t=!1!==g._33(n,8)._compositionEnd(u.target.value)&&t}return t},null,null)),g._28(16384,null,0,p.i,[g._4,g._3,[2,p.j]],null,null),g._32(1024,null,p.k,function(n){return[n]},[p.i]),g._28(671744,null,0,p.l,[[3,p.g],[8,null],[8,null],[2,p.k]],{name:[0,"name"]},null),g._32(2048,null,p.m,null,[p.l]),g._28(16384,null,0,p.n,[p.m],null,null),(n()(),g._27(null,["\n              "])),(n()(),g._26(0,null,null,6,"input",[["class","form-control"],["formControlName","teeth"],["placeholder","number of teeth"],["size","30"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==g._33(n,15)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==g._33(n,15).onTouched()&&t}if("compositionstart"===l){t=!1!==g._33(n,15)._compositionStart()&&t}if("compositionend"===l){t=!1!==g._33(n,15)._compositionEnd(u.target.value)&&t}if("change"===l){t=!1!==g._33(n,16).onChange(u.target.value)&&t}if("input"===l){t=!1!==g._33(n,16).onChange(u.target.value)&&t}if("blur"===l){t=!1!==g._33(n,16).onTouched()&&t}return t},null,null)),g._28(16384,null,0,p.i,[g._4,g._3,[2,p.j]],null,null),g._28(16384,null,0,p.o,[g._4,g._3],null,null),g._32(1024,null,p.k,function(n,l){return[n,l]},[p.i,p.o]),g._28(671744,null,0,p.l,[[3,p.g],[8,null],[8,null],[2,p.k]],{name:[0,"name"]},null),g._32(2048,null,p.m,null,[p.l]),g._28(16384,null,0,p.n,[p.m],null,null),(n()(),g._27(null,["\n            "])),(n()(),g._27(null,["\n            "])),(n()(),g._30(16777216,null,null,1,null,o)),g._28(16384,null,0,d.m,[g._6,g._7],{ngIf:[0,"ngIf"]},null),(n()(),g._27(null,["\n          "]))],function(n,l){n(l,3,0,l.context.index);n(l,10,0,"id");n(l,18,0,"teeth"),n(l,24,0,l.context.last)},function(n,l){n(l,2,0,g._33(l,5).ngClassUntouched,g._33(l,5).ngClassTouched,g._33(l,5).ngClassPristine,g._33(l,5).ngClassDirty,g._33(l,5).ngClassValid,g._33(l,5).ngClassInvalid,g._33(l,5).ngClassPending),n(l,7,0,g._31(1,"",l.context.index,""),g._33(l,12).ngClassUntouched,g._33(l,12).ngClassTouched,g._33(l,12).ngClassPristine,g._33(l,12).ngClassDirty,g._33(l,12).ngClassValid,g._33(l,12).ngClassInvalid,g._33(l,12).ngClassPending),n(l,14,0,g._33(l,20).ngClassUntouched,g._33(l,20).ngClassTouched,g._33(l,20).ngClassPristine,g._33(l,20).ngClassDirty,g._33(l,20).ngClassValid,g._33(l,20).ngClassInvalid,g._33(l,20).ngClassPending)})}function s(n){return g._25(0,[(n()(),g._26(0,null,null,100,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(n,l,u){var t=!0;if("submit"===l){t=!1!==g._33(n,2).onSubmit(u)&&t}if("reset"===l){t=!1!==g._33(n,2).onReset()&&t}return t},null,null)),g._28(16384,null,0,p.p,[],null,null),g._28(540672,null,0,p.q,[[8,null],[8,null]],{form:[0,"form"]},null),g._32(2048,null,p.g,null,[p.q]),g._28(16384,null,0,p.h,[p.g],null,null),(n()(),g._27(null,["\n  "])),(n()(),g._26(0,null,null,84,"div",[["class","row top-margin-20"]],null,null,null,null,null)),(n()(),g._27(null,["\n    "])),(n()(),g._26(0,null,null,29,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),g._27(null,["\n      "])),(n()(),g._26(0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._26(0,null,null,3,"div",[["class","col text-center"]],null,null,null,null,null)),(n()(),g._27(null,["\n          "])),(n()(),g._26(0,null,null,0,"img",[["src","assets/images/wheel-256.png"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._27(null,["\n      "])),(n()(),g._27(null,["\n      "])),(n()(),g._26(0,null,null,18,"div",[["class","form-group top-margin-20"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._26(0,null,null,15,"div",[["formGroupName","wheel"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),g._28(212992,null,0,p.f,[[3,p.g],[8,null],[8,null]],{name:[0,"name"]},null),g._32(2048,null,p.g,null,[p.f]),g._28(16384,null,0,p.h,[p.g],null,null),(n()(),g._27(null,["\n          "])),(n()(),g._26(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),g._27(null,["Wheel diameter including tire"])),(n()(),g._27(null,["\n          "])),(n()(),g._26(0,null,null,6,"input",[["class","form-control"],["formControlName","diameter"],["placeholder","00.00"],["size","30"],["step","0.05"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(n,l,u){var t=!0;if("input"===l){t=!1!==g._33(n,29)._handleInput(u.target.value)&&t}if("blur"===l){t=!1!==g._33(n,29).onTouched()&&t}if("compositionstart"===l){t=!1!==g._33(n,29)._compositionStart()&&t}if("compositionend"===l){t=!1!==g._33(n,29)._compositionEnd(u.target.value)&&t}if("change"===l){t=!1!==g._33(n,30).onChange(u.target.value)&&t}if("input"===l){t=!1!==g._33(n,30).onChange(u.target.value)&&t}if("blur"===l){t=!1!==g._33(n,30).onTouched()&&t}return t},null,null)),g._28(16384,null,0,p.i,[g._4,g._3,[2,p.j]],null,null),g._28(16384,null,0,p.o,[g._4,g._3],null,null),g._32(1024,null,p.k,function(n,l){return[n,l]},[p.i,p.o]),g._28(671744,null,0,p.l,[[3,p.g],[8,null],[8,null],[2,p.k]],{name:[0,"name"]},null),g._32(2048,null,p.m,null,[p.l]),g._28(16384,null,0,p.n,[p.m],null,null),(n()(),g._27(null,["\n        "])),(n()(),g._27(null,["\n      "])),(n()(),g._27(null,["\n    "])),(n()(),g._27(null,["\n    "])),(n()(),g._26(0,null,null,24,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),g._27(null,["\n      "])),(n()(),g._26(0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._26(0,null,null,3,"div",[["class","col text-center"]],null,null,null,null,null)),(n()(),g._27(null,["\n          "])),(n()(),g._26(0,null,null,0,"img",[["src","assets/images/chainrings-256.png"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._27(null,["\n      "])),(n()(),g._27(null,["\n      "])),(n()(),g._26(0,null,null,13,"div",[["class","form-group top-margin-20"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._26(0,null,null,10,"div",[["formArrayName","chainrings"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),g._28(212992,null,0,p.r,[[3,p.g],[8,null],[8,null]],{name:[0,"name"]},null),g._32(2048,null,p.g,null,[p.r]),g._28(16384,null,0,p.h,[p.g],null,null),(n()(),g._27(null,["\n          "])),(n()(),g._26(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),g._27(null,["Chainrings"])),(n()(),g._27(null,["\n          "])),(n()(),g._30(16777216,null,null,1,null,r)),g._28(802816,null,0,d.l,[g._6,g._7,g.l],{ngForOf:[0,"ngForOf"]},null),(n()(),g._27(null,["\n        "])),(n()(),g._27(null,["\n      "])),(n()(),g._27(null,["\n    "])),(n()(),g._27(null,["\n    "])),(n()(),g._26(0,null,null,24,"div",[["class","col-sm-4"]],null,null,null,null,null)),(n()(),g._27(null,["\n      "])),(n()(),g._26(0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._26(0,null,null,3,"div",[["class","col text-center"]],null,null,null,null,null)),(n()(),g._27(null,["\n          "])),(n()(),g._26(0,null,null,0,"img",[["src","assets/images/cogs-256.png"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._27(null,["\n      "])),(n()(),g._27(null,["\n      "])),(n()(),g._26(0,null,null,13,"div",[["class","form-group top-margin-20"]],null,null,null,null,null)),(n()(),g._27(null,["\n        "])),(n()(),g._26(0,null,null,10,"div",[["formArrayName","cogs"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,null,null)),g._28(212992,null,0,p.r,[[3,p.g],[8,null],[8,null]],{name:[0,"name"]},null),g._32(2048,null,p.g,null,[p.r]),g._28(16384,null,0,p.h,[p.g],null,null),(n()(),g._27(null,["\n          "])),(n()(),g._26(0,null,null,1,"label",[],null,null,null,null,null)),(n()(),g._27(null,["Cogs"])),(n()(),g._27(null,["\n          "])),(n()(),g._30(16777216,null,null,1,null,a)),g._28(802816,null,0,d.l,[g._6,g._7,g.l],{ngForOf:[0,"ngForOf"]},null),(n()(),g._27(null,["\n        "])),(n()(),g._27(null,["\n      "])),(n()(),g._27(null,["\n    "])),(n()(),g._27(null,["\n  "])),(n()(),g._27(null,["\n  "])),(n()(),g._26(0,null,null,7,"div",[["class","row top-margin-20"]],null,null,null,null,null)),(n()(),g._27(null,["\n    "])),(n()(),g._26(0,null,null,4,"div",[["class","col text-center"]],null,null,null,null,null)),(n()(),g._27(null,["\n      "])),(n()(),g._26(0,null,null,1,"button",[["class","btn btn-primary"]],[[8,"disabled",0]],[[null,"click"]],function(n,l,u){var t=!0,e=n.component;if("click"===l){t=!1!==e.updateOutput()&&t}return t},null,null)),(n()(),g._27(null,["\n        Calculate\n      "])),(n()(),g._27(null,["\n    "])),(n()(),g._27(null,["\n  "])),(n()(),g._27(null,["\n"])),(n()(),g._27(null,["\n"]))],function(n,l){var u=l.component;n(l,2,0,u.form);n(l,21,0,"wheel");n(l,32,0,"diameter");n(l,52,0,"chainrings"),n(l,60,0,u.chainrings.controls);n(l,78,0,"cogs"),n(l,86,0,u.cogs.controls)},function(n,l){var u=l.component;n(l,0,0,g._33(l,4).ngClassUntouched,g._33(l,4).ngClassTouched,g._33(l,4).ngClassPristine,g._33(l,4).ngClassDirty,g._33(l,4).ngClassValid,g._33(l,4).ngClassInvalid,g._33(l,4).ngClassPending),n(l,20,0,g._33(l,23).ngClassUntouched,g._33(l,23).ngClassTouched,g._33(l,23).ngClassPristine,g._33(l,23).ngClassDirty,g._33(l,23).ngClassValid,g._33(l,23).ngClassInvalid,g._33(l,23).ngClassPending),n(l,28,0,g._33(l,34).ngClassUntouched,g._33(l,34).ngClassTouched,g._33(l,34).ngClassPristine,g._33(l,34).ngClassDirty,g._33(l,34).ngClassValid,g._33(l,34).ngClassInvalid,g._33(l,34).ngClassPending),n(l,51,0,g._33(l,54).ngClassUntouched,g._33(l,54).ngClassTouched,g._33(l,54).ngClassPristine,g._33(l,54).ngClassDirty,g._33(l,54).ngClassValid,g._33(l,54).ngClassInvalid,g._33(l,54).ngClassPending),n(l,77,0,g._33(l,80).ngClassUntouched,g._33(l,80).ngClassTouched,g._33(l,80).ngClassPristine,g._33(l,80).ngClassDirty,g._33(l,80).ngClassValid,g._33(l,80).ngClassInvalid,g._33(l,80).ngClassPending),n(l,96,0,!u.form.valid)})}function c(n){return g._25(0,[(n()(),g._26(0,null,null,1,"app-form-root",[],null,null,null,s,b)),g._28(573440,null,0,f.a,[m.a,h.a],null,null)],null,null)}var _=u("8wlt"),g=u("/oeL"),d=u("qbdv"),p=u("bm2B"),f=u("43G0"),m=u("vt0V"),h=u("OFTX");u.d(l,"b",function(){return b}),l.a=s;var v=[_.a],b=g._24({encapsulation:0,styles:v,data:{}});g._29("app-form-root",f.a,c,{params:"params"},{},[])},v25Y:function(n,l,u){"use strict";function t(n){return _._25(0,[(n()(),_._26(0,null,null,1,"td",[],null,null,null,null,null)),(n()(),_._27(null,["\n            ","\n          "]))],null,function(n,l){n(l,1,0,l.context.$implicit.teeth)})}function e(n){return _._25(0,[(n()(),_._26(0,null,null,1,"th",[],null,null,null,null,null)),(n()(),_._27(null,["\n            ","\n          "]))],null,function(n,l){n(l,1,0,l.context.$implicit.toFixed(2))})}function r(n){return _._25(0,[(n()(),_._26(0,null,null,7,"tr",[],null,null,null,null,null)),(n()(),_._27(null,["\n          "])),(n()(),_._26(0,null,null,1,"td",[["style","background-color:white"]],null,null,null,null,null)),(n()(),_._27(null,["\n            ","\n          "])),(n()(),_._27(null,["\n          "])),(n()(),_._30(16777216,null,null,1,null,e)),_._28(802816,null,0,g.l,[_._6,_._7,_.l],{ngForOf:[0,"ngForOf"]},null),(n()(),_._27(null,["\n        "]))],function(n,l){n(l,6,0,l.component.output.gearInchesMap[l.context.$implicit.id])},function(n,l){n(l,3,0,l.context.$implicit.teeth)})}function i(n){return _._25(0,[(n()(),_._26(0,null,null,18,"table",[["border","1"],["class","table table-striped table-bordered table-condensed"],["style","padding:auto"]],null,null,null,null,null)),(n()(),_._27(null,["\n        "])),(n()(),_._26(0,null,null,9,"thead",[],null,null,null,null,null)),(n()(),_._27(null,["\n        "])),(n()(),_._26(0,null,null,6,"tr",[],null,null,null,null,null)),(n()(),_._27(null,["\n          "])),(n()(),_._26(0,null,null,0,"td",[],null,null,null,null,null)),(n()(),_._27(null,["\n          "])),(n()(),_._30(16777216,null,null,1,null,t)),_._28(802816,null,0,g.l,[_._6,_._7,_.l],{ngForOf:[0,"ngForOf"]},null),(n()(),_._27(null,["\n        "])),(n()(),_._27(null,["\n        "])),(n()(),_._27(null,["\n        "])),(n()(),_._26(0,null,null,4,"tbody",[],null,null,null,null,null)),(n()(),_._27(null,["\n        "])),(n()(),_._30(16777216,null,null,1,null,r)),_._28(802816,null,0,g.l,[_._6,_._7,_.l],{ngForOf:[0,"ngForOf"]},null),(n()(),_._27(null,["\n        "])),(n()(),_._27(null,["\n      "]))],function(n,l){var u=l.component;n(l,9,0,u.output.cogs),n(l,16,0,u.output.chainrings)},null)}function o(n){return _._25(0,[(n()(),_._26(0,null,null,1,"a",[["class","btn btn-primary"]],[[8,"href",4]],null,null,null,null)),(n()(),_._27(null,["\n          Link to this calculation\n        "]))],null,function(n,l){var u=l.component;n(l,0,0,_._31(1,"",u.output.link,""))})}function a(n){return _._25(0,[(n()(),_._26(0,null,null,19,"div",[["class","row top-margin-20"]],null,null,null,null,null)),(n()(),_._27(null,["\n  "])),(n()(),_._26(0,null,null,16,"div",[["class","col"]],null,null,null,null,null)),(n()(),_._27(null,["\n    "])),(n()(),_._26(0,null,null,4,"div",[["class","table-responsive"]],null,null,null,null,null)),(n()(),_._27(null,["\n      "])),(n()(),_._30(16777216,null,null,1,null,i)),_._28(16384,null,0,g.m,[_._6,_._7],{ngIf:[0,"ngIf"]},null),(n()(),_._27(null,["\n    "])),(n()(),_._27(null,["\n    "])),(n()(),_._26(0,null,null,7,"div",[["class","row"],["style","margin-bottom: 20px"]],null,null,null,null,null)),(n()(),_._27(null,["\n      "])),(n()(),_._26(0,null,null,4,"div",[["class","col text-center"]],null,null,null,null,null)),(n()(),_._27(null,["\n        "])),(n()(),_._30(16777216,null,null,1,null,o)),_._28(16384,null,0,g.m,[_._6,_._7],{ngIf:[0,"ngIf"]},null),(n()(),_._27(null,["\n      "])),(n()(),_._27(null,["\n    "])),(n()(),_._27(null,["\n  "])),(n()(),_._27(null,["\n"])),(n()(),_._27(null,["\n"]))],function(n,l){var u=l.component;n(l,7,0,null!=u.output),n(l,15,0,null!=u.output)},null)}function s(n){return _._25(0,[(n()(),_._26(0,null,null,1,"app-output-root",[],null,null,null,a,m)),_._28(245760,null,0,d.a,[p.a,g.f],null,null)],function(n,l){n(l,1,0)},null)}var c=u("OCwQ"),_=u("/oeL"),g=u("qbdv"),d=u("vdkO"),p=u("OFTX");u.d(l,"b",function(){return m}),l.a=a;var f=[c.a],m=_._24({encapsulation:0,styles:f,data:{}});_._29("app-output-root",d.a,s,{},{},[])},vdkO:function(n,l,u){"use strict";var t=u("OFTX"),e=u("qbdv"),r=u("xrDH");u.n(r);u.d(l,"a",function(){return i});var i=function(){function n(n,l){this.updateService=n,this.location=l}return n.prototype.ngOnInit=function(){var n=this;this.subscription=this.updateService.getOutput().subscribe(function(l){n.output=l,n.gearInchesMapToArray(),n.updateLink()})},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n.prototype.gearInchesMapToArray=function(){this.output.gearInchesMap=r.values(this.output.gearInchesMap).map(function(n){return r.values(n)})},n.prototype.updateLink=function(){this.output.link=this.location.prepareExternalUrl(this.output.link)},n.ctorParameters=function(){return[{type:t.a},{type:e.f}]},n}()},vt0V:function(n,l,u){"use strict";var t=u("RnRo"),e=u("TX5I");u.d(l,"a",function(){return r});var r=function(){function n(n){this.formBuilderService=n}return n.prototype.initForm=function(n){var l=+n[e.a.wheelDiameterParam],u=this.getNumberArray(n[e.a.chainringsParam]),t=this.getNumberArray(n[e.a.cogsParam]);return this.formBuilderService.initForm(l,u,t)},n.prototype.getNumberArray=function(n){return null!=n?JSON.parse(n):n},n.prototype.add=function(n,l,u){n.controls[l].push(this.formBuilderService.getSprocketFormGroup(u,null))},n.prototype.remove=function(n,l,u){n.controls[l].removeAt(u)},n.ctorParameters=function(){return[{type:t.a}]},n}()},wQAS:function(n,l,u){"use strict";var t=u("BkNc");u.d(l,"a",function(){return e});var e=function(){function n(n){this.route=n}return n.prototype.ngOnInit=function(){var n=this;this.route.queryParams.subscribe(function(l){n.params=l})},n.ctorParameters=function(){return[{type:t.a}]},n}()}},[0]);