(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{GDMS:function(t,o,e){"use strict";e.r(o),e.d(o,"PromotionDetailComponent",function(){return x}),e.d(o,"PromotionListComponent",function(){return tt}),e.d(o,"MarketingModule",function(){return ct}),e.d(o,"marketingRoutes",function(){return et}),e.d(o,"promotionBreadcrumb",function(){return nt}),e.d(o,"PromotionResolver",function(){return ot});var n=e("3Pt+"),c=e("OxKu"),i=e("t9nd"),r=e("IzEk"),a=e("5+tZ"),s=e("fXoL"),d=e("tyNb"),m=e("uEVm"),l=e("iszU"),u=e("W7hW"),p=e("nqNv"),b=e("ofXK"),h=e("1XD6"),f=e("Bzlx"),g=e("tBhK"),v=e("8MG2"),y=e("7xiD"),C=e("zzDm"),P=e("eBFp"),O=e("IKcI"),k=e("EFLa"),A=e("sYmb"),Q=e("V0to");const I=function(){return["enabled"]};function F(t,o){if(1&t&&(s.hc(0,"clr-toggle-wrapper"),s.cc(1,"input",23),s.hc(2,"label"),s.Vc(3),s.sc(4,"translate"),s.gc(),s.gc()),2&t){const t=s.rc();s.Qb(1),s.yc("formControl",t.detailForm.get(s.Bc(4,I))),s.Qb(2),s.Wc(s.tc(4,2,"common.enabled"))}}function w(t,o){if(1&t){const t=s.ic();s.hc(0,"button",24),s.pc("click",function(){s.Lc(t);return s.rc().create()}),s.Vc(1),s.sc(2,"translate"),s.gc()}if(2&t){const t=s.rc();s.yc("disabled",!t.saveButtonEnabled()),s.Qb(1),s.Xc(" ",s.tc(2,2,"common.create")," ")}}function D(t,o){if(1&t){const t=s.ic();s.hc(0,"button",24),s.pc("click",function(){s.Lc(t);return s.rc(2).save()}),s.Vc(1),s.sc(2,"translate"),s.gc()}if(2&t){const t=s.rc(2);s.yc("disabled",!t.saveButtonEnabled()),s.Qb(1),s.Xc(" ",s.tc(2,2,"common.update")," ")}}function V(t,o){1&t&&s.Tc(0,D,3,4,"button",25),2&t&&s.yc("vdrIfPermissions","UpdatePromotion")}function j(t,o){if(1&t){const t=s.ic();s.fc(0),s.hc(1,"vdr-configurable-input",26),s.pc("remove",function(o){s.Lc(t);return s.rc().removeCondition(o)}),s.sc(2,"hasPermission"),s.gc(),s.ec()}if(2&t){const t=o.$implicit,e=o.index,n=s.rc();s.Qb(1),s.yc("readonly",!s.tc(2,4,"UpdatePromotion"))("operation",t)("operationDefinition",n.getConditionDefinition(t))("formControlName",e)}}function T(t,o){if(1&t){const t=s.ic();s.hc(0,"button",31),s.pc("click",function(){s.Lc(t);const e=o.$implicit;return s.rc(2).addCondition(e)}),s.Vc(1),s.gc()}if(2&t){const t=o.$implicit;s.Qb(1),s.Xc(" ",t.description," ")}}function L(t,o){if(1&t&&(s.hc(0,"vdr-dropdown"),s.hc(1,"button",27),s.cc(2,"clr-icon",28),s.Vc(3),s.sc(4,"translate"),s.gc(),s.hc(5,"vdr-dropdown-menu",29),s.Tc(6,T,2,1,"button",30),s.gc(),s.gc()),2&t){const t=s.rc();s.Qb(3),s.Xc(" ",s.tc(4,2,"marketing.add-condition")," "),s.Qb(3),s.yc("ngForOf",t.getAvailableConditions())}}function N(t,o){if(1&t){const t=s.ic();s.hc(0,"vdr-configurable-input",32),s.pc("remove",function(o){s.Lc(t);return s.rc().removeAction(o)}),s.sc(1,"hasPermission"),s.gc()}if(2&t){const t=o.$implicit,e=o.index,n=s.rc();s.yc("operation",t)("readonly",!s.tc(1,4,"UpdatePromotion"))("operationDefinition",n.getActionDefinition(t))("formControlName",e)}}function U(t,o){if(1&t){const t=s.ic();s.hc(0,"button",31),s.pc("click",function(){s.Lc(t);const e=o.$implicit;return s.rc(2).addAction(e)}),s.Vc(1),s.gc()}if(2&t){const t=o.$implicit;s.Qb(1),s.Xc(" ",t.description," ")}}function S(t,o){if(1&t&&(s.hc(0,"vdr-dropdown"),s.hc(1,"button",27),s.cc(2,"clr-icon",28),s.Vc(3),s.sc(4,"translate"),s.gc(),s.hc(5,"vdr-dropdown-menu",29),s.Tc(6,U,2,1,"button",30),s.gc(),s.gc()),2&t){const t=s.rc();s.Qb(3),s.Xc(" ",s.tc(4,2,"marketing.add-action")," "),s.Qb(3),s.yc("ngForOf",t.getAvailableActions())}}class x extends i.l{constructor(t,o,e,c,i,r,a){super(o,t,e,i),this.changeDetector=c,this.dataService=i,this.formBuilder=r,this.notificationService=a,this.conditions=[],this.actions=[],this.allConditions=[],this.allActions=[],this.detailForm=this.formBuilder.group({name:["",n.C.required],enabled:!0,couponCode:null,perCustomerUsageLimit:null,startsAt:null,endsAt:null,conditions:this.formBuilder.array([]),actions:this.formBuilder.array([])})}ngOnInit(){this.init(),this.promotion$=this.entity$,this.dataService.promotion.getPromotionActionsAndConditions().single$.subscribe(t=>{this.allActions=t.promotionActions,this.allConditions=t.promotionConditions,this.changeDetector.markForCheck()})}ngOnDestroy(){this.destroy()}getAvailableConditions(){return this.allConditions.filter(t=>!this.conditions.find(o=>o.code===t.code))}getConditionDefinition(t){return this.allConditions.find(o=>o.code===t.code)}getAvailableActions(){return this.allActions.filter(t=>!this.actions.find(o=>o.code===t.code))}getActionDefinition(t){return this.allActions.find(o=>o.code===t.code)}saveButtonEnabled(){return this.detailForm.dirty&&this.detailForm.valid&&(0!==this.conditions.length||this.detailForm.value.couponCode)&&0!==this.actions.length}addCondition(t){this.addOperation("conditions",t),this.detailForm.markAsDirty()}addAction(t){this.addOperation("actions",t),this.detailForm.markAsDirty()}removeCondition(t){this.removeOperation("conditions",t),this.detailForm.markAsDirty()}removeAction(t){this.removeOperation("actions",t),this.detailForm.markAsDirty()}formArrayOf(t){return this.detailForm.get(t)}create(){if(!this.detailForm.dirty)return;const t=this.detailForm.value,o={name:t.name,enabled:!0,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt,conditions:this.mapOperationsToInputs(this.conditions,t.conditions),actions:this.mapOperationsToInputs(this.actions,t.actions)};this.dataService.promotion.createPromotion(o).subscribe(({createPromotion:t})=>{switch(t.__typename){case"Promotion":this.notificationService.success(Object(c.a)("common.notify-create-success"),{entity:"Promotion"}),this.detailForm.markAsPristine(),this.changeDetector.markForCheck(),this.router.navigate(["../",t.id],{relativeTo:this.route});break;case"MissingConditionsError":this.notificationService.error(t.message)}},t=>{this.notificationService.error(Object(c.a)("common.notify-create-error"),{entity:"Promotion"})})}save(){if(!this.detailForm.dirty)return;const t=this.detailForm.value;this.promotion$.pipe(Object(r.a)(1),Object(a.a)(o=>{const e={id:o.id,name:t.name,enabled:t.enabled,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt,conditions:this.mapOperationsToInputs(this.conditions,t.conditions),actions:this.mapOperationsToInputs(this.actions,t.actions)};return this.dataService.promotion.updatePromotion(e)})).subscribe(t=>{this.notificationService.success(Object(c.a)("common.notify-update-success"),{entity:"Promotion"}),this.detailForm.markAsPristine(),this.changeDetector.markForCheck()},t=>{this.notificationService.error(Object(c.a)("common.notify-update-error"),{entity:"Promotion"})})}setFormValues(t,o){this.detailForm.patchValue({name:t.name,enabled:t.enabled,couponCode:t.couponCode,perCustomerUsageLimit:t.perCustomerUsageLimit,startsAt:t.startsAt,endsAt:t.endsAt}),t.conditions.forEach(t=>{this.addOperation("conditions",t)}),t.actions.forEach(t=>this.addOperation("actions",t))}mapOperationsToInputs(t,o){return t.map((t,e)=>({code:t.code,arguments:Object.values(o[e].args).map((o,e)=>({name:t.args[e].name,value:Object(i.R)(o)}))}))}addOperation(t,o){const e=this.formArrayOf(t),n="conditions"===t?this.conditions:this.actions;if(-1===e.value.findIndex(t=>t.code===o.code)){const c=o.args.reduce((e,n)=>{var c;return Object.assign(Object.assign({},e),{[n.name]:null!==(c=Object(i.V)(n.value))&&void 0!==c?c:this.getDefaultArgValue(t,o,n.name)})},{});e.push(this.formBuilder.control({code:o.code,args:c})),n.push({code:o.code,args:o.args.map(t=>({name:t.name,value:Object(i.V)(t.value)}))})}}getDefaultArgValue(t,o,e){const n="conditions"===t?this.allConditions.find(t=>t.code===o.code):this.allActions.find(t=>t.code===o.code);if(n){const t=n.args.find(t=>t.name===e);if(t)return Object(i.W)(t)}throw new Error('Could not determine default value for "argName"')}removeOperation(t,o){const e=this.formArrayOf(t),n="conditions"===t?this.conditions:this.actions,c=e.value.findIndex(t=>t.code===o.code);-1!==c&&(e.removeAt(c),n.splice(c,1))}}x.\u0275fac=function(t){return new(t||x)(s.bc(d.e),s.bc(d.a),s.bc(i.I),s.bc(s.j),s.bc(i.s),s.bc(n.e),s.bc(i.G))},x.\u0275cmp=s.Vb({type:x,selectors:[["vdr-promotion-detail"]],features:[s.Nb],decls:46,vars:43,consts:[[1,"flex","clr-align-items-center"],[3,"entity"],[4,"vdrIfPermissions"],["locationId","promotion-detail"],["class","btn btn-primary",3,"disabled","click",4,"ngIf","ngIfElse"],["updateButton",""],[1,"form",3,"formGroup"],["for","name",3,"label"],["id","name","type","text","formControlName","name",3,"readonly"],["for","startsAt",3,"label"],["formControlName","startsAt"],["for","endsAt",3,"label"],["formControlName","endsAt"],["for","couponCode",3,"label"],["id","couponCode","type","text","formControlName","couponCode",3,"readonly"],["for","perCustomerUsageLimit",3,"label"],["id","perCustomerUsageLimit","type","number","min","1","max","999","formControlName","perCustomerUsageLimit",3,"readonly"],[1,"clr-row"],["formArrayName","conditions",1,"clr-col"],[1,"clr-control-label"],[4,"ngFor","ngForOf"],["formArrayName","actions",1,"clr-col"],[3,"operation","readonly","operationDefinition","formControlName","remove",4,"ngFor","ngForOf"],["type","checkbox","clrToggle","","name","enabled",3,"formControl"],[1,"btn","btn-primary",3,"disabled","click"],["class","btn btn-primary",3,"disabled","click",4,"vdrIfPermissions"],[3,"readonly","operation","operationDefinition","formControlName","remove"],["vdrDropdownTrigger","",1,"btn","btn-outline"],["shape","plus"],["vdrPosition","bottom-left"],["type","button","vdrDropdownItem","",3,"click",4,"ngFor","ngForOf"],["type","button","vdrDropdownItem","",3,"click"],[3,"operation","readonly","operationDefinition","formControlName","remove"]],template:function(t,o){if(1&t&&(s.hc(0,"vdr-action-bar"),s.hc(1,"vdr-ab-left"),s.hc(2,"div",0),s.cc(3,"vdr-entity-info",1),s.sc(4,"async"),s.Tc(5,F,5,5,"clr-toggle-wrapper",2),s.gc(),s.gc(),s.hc(6,"vdr-ab-right"),s.cc(7,"vdr-action-bar-items",3),s.Tc(8,w,3,4,"button",4),s.sc(9,"async"),s.Tc(10,V,1,1,"ng-template",null,5,s.Uc),s.gc(),s.gc(),s.hc(12,"form",6),s.hc(13,"vdr-form-field",7),s.sc(14,"translate"),s.cc(15,"input",8),s.sc(16,"hasPermission"),s.gc(),s.hc(17,"vdr-form-field",9),s.sc(18,"translate"),s.cc(19,"vdr-datetime-picker",10),s.gc(),s.hc(20,"vdr-form-field",11),s.sc(21,"translate"),s.cc(22,"vdr-datetime-picker",12),s.gc(),s.hc(23,"vdr-form-field",13),s.sc(24,"translate"),s.cc(25,"input",14),s.sc(26,"hasPermission"),s.gc(),s.hc(27,"vdr-form-field",15),s.sc(28,"translate"),s.cc(29,"input",16),s.sc(30,"hasPermission"),s.gc(),s.hc(31,"div",17),s.hc(32,"div",18),s.hc(33,"label",19),s.Vc(34),s.sc(35,"translate"),s.gc(),s.Tc(36,j,3,6,"ng-container",20),s.hc(37,"div"),s.Tc(38,L,7,4,"vdr-dropdown",2),s.gc(),s.gc(),s.hc(39,"div",21),s.hc(40,"label",19),s.Vc(41),s.sc(42,"translate"),s.gc(),s.Tc(43,N,2,6,"vdr-configurable-input",22),s.hc(44,"div"),s.Tc(45,S,7,4,"vdr-dropdown",2),s.gc(),s.gc(),s.gc(),s.gc()),2&t){const t=s.Ic(11);s.Qb(3),s.yc("entity",s.tc(4,19,o.entity$)),s.Qb(2),s.yc("vdrIfPermissions","UpdatePromotion"),s.Qb(3),s.yc("ngIf",s.tc(9,21,o.isNew$))("ngIfElse",t),s.Qb(4),s.yc("formGroup",o.detailForm),s.Qb(1),s.yc("label",s.tc(14,23,"common.name")),s.Qb(2),s.yc("readonly",!s.tc(16,25,"UpdatePromotion")),s.Qb(2),s.yc("label",s.tc(18,27,"marketing.starts-at")),s.Qb(3),s.yc("label",s.tc(21,29,"marketing.ends-at")),s.Qb(3),s.yc("label",s.tc(24,31,"marketing.coupon-code")),s.Qb(2),s.yc("readonly",!s.tc(26,33,"UpdatePromotion")),s.Qb(2),s.yc("label",s.tc(28,35,"marketing.per-customer-limit")),s.Qb(2),s.yc("readonly",!s.tc(30,37,"UpdatePromotion")),s.Qb(5),s.Wc(s.tc(35,39,"marketing.conditions")),s.Qb(2),s.yc("ngForOf",o.conditions),s.Qb(2),s.yc("vdrIfPermissions","UpdatePromotion"),s.Qb(3),s.Wc(s.tc(42,41,"marketing.actions")),s.Qb(2),s.yc("ngForOf",o.actions),s.Qb(2),s.yc("vdrIfPermissions","UpdatePromotion")}},directives:[m.a,m.b,l.a,u.a,m.c,p.a,b.o,n.E,n.q,n.j,h.a,f.a,n.b,n.p,n.h,g.a,n.v,n.d,v.u,b.n,v.k,n.a,v.i,n.g,y.a,C.a,P.a,v.o,O.a,k.a],pipes:[b.b,A.d,Q.a],styles:[""],changeDetection:0});var $=e("VRyK"),B=e("EY2u"),E=e("Kj3r"),W=e("1G5W"),X=e("eIep"),G=e("CotX"),M=e("r2d8"),K=e("ef/U"),_=e("2/wi"),q=e("HMPB");const z=function(){return["./create"]};function R(t,o){1&t&&(s.hc(0,"a",6),s.cc(1,"clr-icon",7),s.Vc(2),s.sc(3,"translate"),s.gc()),2&t&&(s.yc("routerLink",s.Bc(4,z)),s.Qb(2),s.Xc(" ",s.tc(3,2,"marketing.create-new-promotion")," "))}function J(t,o){if(1&t&&(s.hc(0,"vdr-chip"),s.Vc(1),s.gc()),2&t){const t=s.rc().item;s.Qb(1),s.Xc(" ",t.couponCode," ")}}function Y(t,o){1&t&&(s.hc(0,"vdr-chip"),s.Vc(1),s.sc(2,"translate"),s.gc()),2&t&&(s.Qb(1),s.Wc(s.tc(2,1,"common.disabled")))}const Z=function(t){return["./",t]};function H(t,o){if(1&t){const t=s.ic();s.hc(0,"td",8),s.Vc(1),s.gc(),s.hc(2,"td",8),s.Tc(3,J,2,1,"vdr-chip",9),s.gc(),s.hc(4,"td",8),s.Vc(5),s.sc(6,"localeDate"),s.gc(),s.hc(7,"td",8),s.Vc(8),s.sc(9,"localeDate"),s.gc(),s.hc(10,"td",10),s.Tc(11,Y,3,3,"vdr-chip",9),s.gc(),s.hc(12,"td",11),s.cc(13,"vdr-table-row-action",12),s.sc(14,"translate"),s.gc(),s.hc(15,"td",11),s.hc(16,"vdr-dropdown"),s.hc(17,"button",13),s.Vc(18),s.sc(19,"translate"),s.cc(20,"clr-icon",14),s.gc(),s.hc(21,"vdr-dropdown-menu",15),s.hc(22,"button",16),s.pc("click",function(){s.Lc(t);const e=o.item;return s.rc().deletePromotion(e.id)}),s.sc(23,"hasPermission"),s.cc(24,"clr-icon",17),s.Vc(25),s.sc(26,"translate"),s.gc(),s.gc(),s.gc(),s.gc()}if(2&t){const t=o.item;s.Qb(1),s.Wc(t.name),s.Qb(2),s.yc("ngIf",t.couponCode),s.Qb(2),s.Wc(s.uc(6,10,t.startsAt,"longDate")),s.Qb(3),s.Wc(s.uc(9,13,t.endsAt,"longDate")),s.Qb(3),s.yc("ngIf",!t.enabled),s.Qb(2),s.yc("label",s.tc(14,16,"common.edit"))("linkTo",s.Cc(24,Z,t.id)),s.Qb(5),s.Xc(" ",s.tc(19,18,"common.actions")," "),s.Qb(4),s.yc("disabled",!s.tc(23,20,"DeletePromotion")),s.Qb(3),s.Xc(" ",s.tc(26,22,"common.delete")," ")}}class tt extends i.n{constructor(t,o,e,c,i){super(o,e),this.dataService=t,this.notificationService=c,this.modalService=i,this.searchForm=new n.i({name:new n.f(""),couponCode:new n.f("")}),super.setQueryFn((...t)=>this.dataService.promotion.getPromotions(...t).refetchOnChannelChange(),t=>t.promotions,(t,o)=>this.createQueryOptions(t,o,this.searchForm.value))}ngOnInit(){super.ngOnInit(),Object($.a)(this.searchForm.valueChanges.pipe(Object(E.a)(250)),this.route.queryParamMap).pipe(Object(W.a)(this.destroy$)).subscribe(t=>{t.params||this.setPageNumber(1),this.refresh()})}deletePromotion(t){this.modalService.dialog({title:Object(c.a)("catalog.confirm-delete-promotion"),buttons:[{type:"secondary",label:Object(c.a)("common.cancel")},{type:"danger",label:Object(c.a)("common.delete"),returnValue:!0}]}).pipe(Object(X.a)(o=>o?this.dataService.promotion.deletePromotion(t):B.a)).subscribe(()=>{this.notificationService.success(Object(c.a)("common.notify-delete-success"),{entity:"Promotion"}),this.refresh()},t=>{this.notificationService.error(Object(c.a)("common.notify-delete-error"),{entity:"Promotion"})})}createQueryOptions(t,o,e){const n={};return e.couponCode&&(n.couponCode={contains:e.couponCode}),e.name&&(n.name={contains:e.name}),{options:{skip:t,take:o,filter:n}}}}tt.\u0275fac=function(t){return new(t||tt)(s.bc(i.s),s.bc(d.e),s.bc(d.a),s.bc(i.G),s.bc(i.F))},tt.\u0275cmp=s.Vb({type:tt,selectors:[["vdr-promotion-list"]],features:[s.Nb],decls:31,vars:32,consts:[[1,"search-form",3,"formGroup"],["type","text","formControlName","name",1,"search-input",3,"placeholder"],["type","text","formControlName","couponCode",1,"search-input",3,"placeholder"],["locationId","promotion-list"],["class","btn btn-primary",3,"routerLink",4,"vdrIfPermissions"],[3,"items","itemsPerPage","totalItems","currentPage","pageChange","itemsPerPageChange"],[1,"btn","btn-primary",3,"routerLink"],["shape","plus"],[1,"left","align-middle"],[4,"ngIf"],[1,"align-middle"],[1,"right","align-middle"],["iconShape","edit",3,"label","linkTo"],["type","button","vdrDropdownTrigger","",1,"btn","btn-link","btn-sm"],["shape","caret down"],["vdrPosition","bottom-right"],["type","button","vdrDropdownItem","",1,"delete-button",3,"disabled","click"],["shape","trash",1,"is-danger"]],template:function(t,o){1&t&&(s.hc(0,"vdr-action-bar"),s.hc(1,"vdr-ab-left"),s.hc(2,"form",0),s.cc(3,"input",1),s.sc(4,"translate"),s.cc(5,"input",2),s.sc(6,"translate"),s.gc(),s.gc(),s.hc(7,"vdr-ab-right"),s.cc(8,"vdr-action-bar-items",3),s.Tc(9,R,4,5,"a",4),s.gc(),s.gc(),s.hc(10,"vdr-data-table",5),s.pc("pageChange",function(t){return o.setPageNumber(t)})("itemsPerPageChange",function(t){return o.setItemsPerPage(t)}),s.sc(11,"async"),s.sc(12,"async"),s.sc(13,"async"),s.sc(14,"async"),s.hc(15,"vdr-dt-column"),s.Vc(16),s.sc(17,"translate"),s.gc(),s.hc(18,"vdr-dt-column"),s.Vc(19),s.sc(20,"translate"),s.gc(),s.hc(21,"vdr-dt-column"),s.Vc(22),s.sc(23,"translate"),s.gc(),s.hc(24,"vdr-dt-column"),s.Vc(25),s.sc(26,"translate"),s.gc(),s.cc(27,"vdr-dt-column"),s.cc(28,"vdr-dt-column"),s.cc(29,"vdr-dt-column"),s.Tc(30,H,27,26,"ng-template"),s.gc()),2&t&&(s.Qb(2),s.yc("formGroup",o.searchForm),s.Qb(1),s.yc("placeholder",s.tc(4,12,"marketing.search-by-name")),s.Qb(2),s.yc("placeholder",s.tc(6,14,"marketing.search-by-coupon-code")),s.Qb(4),s.yc("vdrIfPermissions","CreatePromotion"),s.Qb(1),s.yc("items",s.tc(11,16,o.items$))("itemsPerPage",s.tc(12,18,o.itemsPerPage$))("totalItems",s.tc(13,20,o.totalItems$))("currentPage",s.tc(14,22,o.currentPage$)),s.Qb(6),s.Wc(s.tc(17,24,"common.name")),s.Qb(3),s.Wc(s.tc(20,26,"marketing.coupon-code")),s.Qb(3),s.Wc(s.tc(23,28,"marketing.starts-at")),s.Qb(3),s.Wc(s.tc(26,30,"marketing.ends-at")))},directives:[m.a,m.b,n.E,n.q,n.j,f.a,n.b,n.p,n.h,m.c,p.a,u.a,G.a,M.a,d.h,v.o,b.o,K.a,C.a,P.a,O.a,k.a,_.a],pipes:[A.d,b.b,q.a,Q.a],styles:[".search-form[_ngcontent-%COMP%]{padding:0}.search-input[_ngcontent-%COMP%]{margin:6px 8px 0 0;min-width:200px}"],changeDetection:0});class ot extends i.m{constructor(t,o){super(t,{__typename:"Promotion",id:"",createdAt:"",updatedAt:"",name:"",enabled:!1,conditions:[],actions:[]},t=>o.promotion.getPromotion(t).mapStream(t=>t.promotion))}}ot.\u0275fac=function(t){return new(t||ot)(s.lc(d.e),s.lc(i.s))},ot.\u0275prov=s.Xb({token:ot,factory:ot.\u0275fac,providedIn:"root"});const et=[{path:"promotions",component:tt,data:{breadcrumb:Object(c.a)("breadcrumb.promotions")}},{path:"promotions/:id",component:x,resolve:Object(i.O)(ot),canDeactivate:[i.o],data:{breadcrumb:nt}}];function nt(t,o){return Object(i.Q)({entity:t.entity,id:o.id,breadcrumbKey:"breadcrumb.promotions",getName:t=>t.name,route:"promotions"})}class ct{}ct.\u0275fac=function(t){return new(t||ct)},ct.\u0275mod=s.Zb({type:ct}),ct.\u0275inj=s.Yb({imports:[[i.J,d.i.forChild(et)]]})}}]);
//# sourceMappingURL=10-es2015.1fc9a52e52444bb17b6a.js.map