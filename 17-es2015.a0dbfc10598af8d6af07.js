(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"8k80":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{}var e=u("pMnS"),r=u("MKJQ"),i=u("sZkV"),a=u("mrSG"),b=u("Zmtf"),s=u("IheW");let c=(()=>{class l{constructor(l,n){this.app=l,this.http=n,this.getUserData()}getUserData(){return a.a(this,void 0,void 0,(function*(){try{const l=yield this.http.get(this.app.API_PROFILE).toPromise();this.profile=l.data}catch(l){console.log(l)}}))}}return l.ngInjectableDef=t.Pb({factory:function(){return new l(t.Qb(b.a),t.Qb(s.c))},token:l,providedIn:"root"}),l})();var h=u("43Ke");class p{constructor(l,n,u,t){this.router=l,this.auth=n,this.alertCtrl=u,this.account=t,this.photoURL="https://www.gravatar.com/avatar?d=mm&s=140"}ngAfterViewInit(){this.account.getUserData()}logout(){this.auth.logout().then(l=>{this.router.navigateByUrl("/login")})}}var g=u("iInd"),d=t.qb({encapsulation:0,styles:[["ion-toolbar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;--background:transparent}.user-header[_ngcontent-%COMP%]{position:relative;display:-webkit-box;display:flex;padding-top:50px;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:300px}.user-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:150px;border-radius:50%}.user-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{position:absolute;bottom:10px}.user-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-left:6px;margin-right:6px}.user-detail[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;background:var(--ion-color-step-150,#d7d8da)}"]],data:{}});function m(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,7,"ion-header",[["class","ion-no-border"]],null,null,null,r.ab,r.o)),t.rb(1,49152,null,0,i.A,[t.h,t.k,t.y],null,null),(l()(),t.sb(2,0,null,0,5,"ion-toolbar",[],null,null,null,r.xb,r.L)),t.rb(3,49152,null,0,i.yb,[t.h,t.k,t.y],null,null),(l()(),t.sb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,r.P,r.d)),t.rb(5,49152,null,0,i.k,[t.h,t.k,t.y],null,null),(l()(),t.sb(6,0,null,0,1,"ion-menu-button",[],null,null,null,r.kb,r.z)),t.rb(7,49152,null,0,i.Q,[t.h,t.k,t.y],null,null),(l()(),t.sb(8,0,null,null,45,"ion-content",[["class","user-detail"]],null,null,null,r.W,r.k)),t.rb(9,49152,null,0,i.t,[t.h,t.k,t.y],null,null),(l()(),t.sb(10,0,null,0,3,"div",[["class","user-header"]],null,null,null,null,null)),(l()(),t.sb(11,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.sb(12,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(13,null,["",""])),(l()(),t.sb(14,0,null,0,24,"div",[["class","ion-padding user-detail"]],null,null,null,null,null)),(l()(),t.sb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(16,null,[""," Say hello on social media!"])),(l()(),t.sb(17,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.sb(18,0,null,null,6,"ion-chip",[["button",""],["color","twitter"]],null,null,null,r.U,r.i)),t.rb(19,49152,null,0,i.r,[t.h,t.k,t.y],{color:[0,"color"]},null),(l()(),t.sb(20,0,null,0,1,"ion-icon",[["name","logo-twitter"]],null,null,null,r.bb,r.p)),t.rb(21,49152,null,0,i.B,[t.h,t.k,t.y],{name:[0,"name"]},null),(l()(),t.sb(22,0,null,0,2,"ion-label",[],null,null,null,r.hb,r.v)),t.rb(23,49152,null,0,i.M,[t.h,t.k,t.y],null,null),(l()(),t.Jb(-1,0,["Twitter"])),(l()(),t.sb(25,0,null,null,6,"ion-chip",[["button",""],["color","dark"]],null,null,null,r.U,r.i)),t.rb(26,49152,null,0,i.r,[t.h,t.k,t.y],{color:[0,"color"]},null),(l()(),t.sb(27,0,null,0,1,"ion-icon",[["name","logo-github"]],null,null,null,r.bb,r.p)),t.rb(28,49152,null,0,i.B,[t.h,t.k,t.y],{name:[0,"name"]},null),(l()(),t.sb(29,0,null,0,2,"ion-label",[],null,null,null,r.hb,r.v)),t.rb(30,49152,null,0,i.M,[t.h,t.k,t.y],null,null),(l()(),t.Jb(-1,0,["GitHub"])),(l()(),t.sb(32,0,null,null,6,"ion-chip",[["button",""],["color","instagram"]],null,null,null,r.U,r.i)),t.rb(33,49152,null,0,i.r,[t.h,t.k,t.y],{color:[0,"color"]},null),(l()(),t.sb(34,0,null,0,1,"ion-icon",[["name","logo-instagram"]],null,null,null,r.bb,r.p)),t.rb(35,49152,null,0,i.B,[t.h,t.k,t.y],{name:[0,"name"]},null),(l()(),t.sb(36,0,null,0,2,"ion-label",[],null,null,null,r.hb,r.v)),t.rb(37,49152,null,0,i.M,[t.h,t.k,t.y],null,null),(l()(),t.Jb(-1,0,["Instagram"])),(l()(),t.sb(39,0,null,0,14,"ion-list",[["lines","none"]],null,null,null,r.jb,r.w)),t.rb(40,49152,null,0,i.N,[t.h,t.k,t.y],{lines:[0,"lines"]},null),(l()(),t.sb(41,0,null,0,9,"ion-item",[["detail","false"]],null,null,null,r.gb,r.r)),t.rb(42,49152,null,0,i.G,[t.h,t.k,t.y],{detail:[0,"detail"]},null),(l()(),t.sb(43,0,null,0,7,"ion-label",[],null,null,null,r.hb,r.v)),t.rb(44,49152,null,0,i.M,[t.h,t.k,t.y],null,null),(l()(),t.sb(45,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(46,null,["Rol ID: ",""])),(l()(),t.sb(47,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(48,null,["Status: ",""])),(l()(),t.sb(49,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(50,null,["User ID: ",""])),(l()(),t.sb(51,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.logout()&&t),t}),r.gb,r.r)),t.rb(52,49152,null,0,i.G,[t.h,t.k,t.y],null,null),(l()(),t.Jb(-1,0,["Logout"]))],(function(l,n){l(n,19,0,"twitter"),l(n,21,0,"logo-twitter"),l(n,26,0,"dark"),l(n,28,0,"logo-github"),l(n,33,0,"instagram"),l(n,35,0,"logo-instagram"),l(n,40,0,"none"),l(n,42,0,"false")}),(function(l,n){var u=n.component;l(n,11,0,u.photoURL),l(n,13,0,null==u.account.profile?null:u.account.profile.lastNames),l(n,16,0,"@"+(null==u.account.profile?null:u.account.profile.username)),l(n,46,0,null==u.account.profile?null:u.account.profile.rolId),l(n,48,0,null==u.account.profile?null:u.account.profile.status),l(n,50,0,null==u.account.profile?null:u.account.profile.userId)}))}function k(l){return t.Lb(0,[(l()(),t.sb(0,0,null,null,1,"page-account",[],null,null,null,m,d)),t.rb(1,4243456,null,0,p,[g.m,h.a,i.a,c],null,null)],null,null)}var f=t.ob("page-account",p,k,{},{},[]),y=u("SVse");class v{}u.d(n,"AccountModuleNgFactory",(function(){return w}));var w=t.pb(o,[],(function(l){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[e.a,f]],[3,t.j],t.w]),t.Bb(4608,y.n,y.m,[t.t,[2,y.A]]),t.Bb(4608,i.b,i.b,[t.y,t.g]),t.Bb(4608,i.Cb,i.Cb,[i.b,t.j,t.q]),t.Bb(4608,i.Eb,i.Eb,[i.b,t.j,t.q]),t.Bb(1073742336,y.c,y.c,[]),t.Bb(1073742336,i.Ab,i.Ab,[]),t.Bb(1073742336,g.q,g.q,[[2,g.v],[2,g.m]]),t.Bb(1073742336,v,v,[]),t.Bb(1073742336,o,o,[]),t.Bb(1024,g.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);