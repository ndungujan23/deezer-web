(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"++k9":function(t,i,e){"use strict";e.r(i),e.d(i,"playerFactory",function(){return x}),e.d(i,"MusicModule",function(){return J});var s=e("ofXK"),n=e("tyNb"),a=e("DPnb"),r=e("lPHp"),b=e.n(r),c=e("fXoL"),o=e("D2Vx");let l=(()=>{class t{constructor(t){this.Restful=t}searchArtist(t){return this.Restful.get("/search/artist",{q:t})}getArtist(t){return this.Restful.get(`/artist/${t}`)}getArtistAlbums(t){return this.Restful.get(`/artist/${t}/albums`)}getArtistTopTracks(t){return this.Restful.get(`/artist/${t}/top`)}}return t.\u0275fac=function(i){return new(i||t)(c.Rb(o.a))},t.\u0275prov=c.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("3Pt+");function d(t,i){if(1&t){const t=c.Ob();c.Nb(0,"a",7),c.Ub("click",function(){return c.dc(t),c.Wb().toggle()}),c.Jb(1,"span",8),c.Jb(2,"span",8),c.Jb(3,"span",8),c.Mb()}if(2&t){const t=c.Wb();c.Ab("is-active",t.isMenuVisible)}}function h(t,i){if(1&t){const t=c.Ob();c.Nb(0,"div",9),c.Nb(1,"div",10),c.Nb(2,"div",11),c.Nb(3,"div",12),c.Nb(4,"div",13),c.Nb(5,"span",14),c.Jb(6,"i",15),c.Mb(),c.Nb(7,"input",16),c.Ub("ngModelChange",function(i){return c.dc(t),c.Wb().searchInput=i})("ngModelChange",function(i){return c.dc(t),c.Wb().onSearchValueChanged(i)})("keyup.enter",function(){return c.dc(t),c.Wb().onSearch()}),c.Mb(),c.Mb(),c.Nb(8,"div",17),c.Nb(9,"button",18),c.Ub("click",function(){return c.dc(t),c.Wb().onSearch()}),c.Nb(10,"span",19),c.Jb(11,"i",15),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()}if(2&t){const t=c.Wb();c.Ab("is-active",t.isMenuVisible),c.yb(7),c.Zb("readonly",t.isLoading)("ngModel",t.searchInput),c.yb(2),c.Ab("is-loading",t.isLoading)}}let p=(()=>{class t{constructor(){this.isMenuVisible=!1,this.searchInput="",this.isLoading=!1,this.isSearchHidden=!1,this.queryValueChanged=new c.n,this.searchClicked=new c.n}toggle(){this.isMenuVisible=!this.isMenuVisible}onSearchValueChanged(t){this.queryValueChanged.emit(t)}onSearch(){this.searchClicked.emit(!0)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Cb({type:t,selectors:[["app-topbar"]],inputs:{searchInput:"searchInput",isLoading:"isLoading",isSearchHidden:"isSearchHidden"},outputs:{queryValueChanged:"queryValueChanged",searchClicked:"searchClicked"},decls:7,vars:2,consts:[[1,"navbar","is-fixed-top","has-border-bottom","py-3"],[1,"container","is-fluid"],[1,"navbar-brand"],["href","/",1,"navbar-item"],["alt","Music app","src","/assets/images/logo.png"],["aria-expanded","false","aria-label","menu","class","navbar-burger","data-target","navbarSearchSection","role","button",3,"is-active","click",4,"ngIf"],["class","navbar-menu","id","navbarSearchSection",3,"is-active",4,"ngIf"],["aria-expanded","false","aria-label","menu","data-target","navbarSearchSection","role","button",1,"navbar-burger",3,"click"],["aria-hidden","true"],["id","navbarSearchSection",1,"navbar-menu"],[1,"navbar-end"],[1,"navbar-item"],[1,"field","has-addons"],[1,"control","has-icons-left"],[1,"icon","is-small","is-left"],[1,"fa-solid","fa-magnifying-glass"],["placeholder","Search","type","text",1,"input","is-normal","is-rounded",3,"readonly","ngModel","ngModelChange","keyup.enter"],[1,"control"],[1,"button","is-primary","is-rounded",3,"click"],[1,"icon"]],template:function(t,i){1&t&&(c.Nb(0,"nav",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Nb(3,"a",3),c.Jb(4,"img",4),c.Mb(),c.ic(5,d,4,2,"a",5),c.Mb(),c.ic(6,h,12,6,"div",6),c.Mb(),c.Mb()),2&t&&(c.yb(5),c.Zb("ngIf",!i.isSearchHidden),c.yb(1),c.Zb("ngIf",!i.isSearchHidden))},directives:[s.j,u.a,u.c,u.d],encapsulation:2}),t})();var g=e("5kc3");let m=(()=>{class t{constructor(){}get headerStyle(){var t;return{"background-image":`url(${null===(t=this.artist)||void 0===t?void 0:t.picture_big})`}}get detail(){return`/music/artists/${this.artist&&this.artist.id}`}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Cb({type:t,selectors:[["app-card-artist"]],inputs:{artist:"artist"},decls:18,vars:10,consts:[[3,"routerLink"],[1,"card"],[1,"card-artist-header"],[1,"card-artist-header-slanted-edge"],[1,"card-content"],[1,"content","is-small"],[1,"is-hidden-touch"]],template:function(t,i){1&t&&(c.Nb(0,"a",0),c.Nb(1,"div",1),c.Nb(2,"div",2),c.Jb(3,"div",3),c.Mb(),c.Nb(4,"div",4),c.Nb(5,"div",5),c.Nb(6,"h6"),c.kc(7),c.Mb(),c.Nb(8,"p"),c.Nb(9,"strong"),c.kc(10),c.Xb(11,"shortNumber"),c.Mb(),c.kc(12," Fans"),c.Mb(),c.Nb(13,"p",6),c.Nb(14,"strong"),c.kc(15),c.Xb(16,"shortNumber"),c.Mb(),c.kc(17," Albums "),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&t&&(c.Zb("routerLink",i.detail),c.yb(2),c.gc(i.headerStyle),c.yb(5),c.lc(null==i.artist?null:i.artist.name),c.yb(3),c.lc(c.Yb(11,6,null==i.artist?null:i.artist.nb_fan)),c.yb(5),c.lc(c.Yb(16,8,null==i.artist?null:i.artist.nb_album)))},directives:[n.c],pipes:[g.a],encapsulation:2}),t})();function f(t,i){if(1&t&&(c.Nb(0,"div",6),c.Nb(1,"div",7),c.Nb(2,"p",8),c.kc(3,"Music DB"),c.Mb(),c.Nb(4,"p",9),c.kc(5," Deez.ER "),c.Mb(),c.Nb(6,"p",10),c.kc(7," Search for your favorite artist and see "),c.Jb(8,"br"),c.kc(9," what they're up to... "),c.Mb(),c.Nb(10,"nav",11),c.Nb(11,"div",12),c.Jb(12,"ng-lottie",13),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&t){const t=c.Wb();c.yb(12),c.Zb("options",t.loadingOptions)}}function v(t,i){if(1&t&&(c.Nb(0,"div",16),c.Jb(1,"app-card-artist",17),c.Mb()),2&t){const t=i.$implicit;c.yb(1),c.Zb("artist",t)}}function M(t,i){if(1&t&&(c.Lb(0),c.Nb(1,"div",14),c.ic(2,v,2,1,"div",15),c.Mb(),c.Kb()),2&t){const t=c.Wb();c.yb(2),c.Zb("ngForOf",t.artists)}}let N=(()=>{class t{constructor(t,i,e){this.router=t,this.activatedRoute=i,this.Music=e,this.subscriptions=[],this.searchInput="",this.isLoading=!1,this.artists=[],this.loadingOptions={path:"/assets/lottie/listening.json"}}ngOnInit(){this.subscriptions.push(this.activatedRoute.queryParams.subscribe(t=>{this.searchInput=t&&t.q}))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}onSearchValueChanged(t){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:t&&{q:t}||{}}).catch(console.log)}onSearch(){const t=()=>{this.isLoading=!1,this.response=void 0,this.artists=[]};this.searchInput&&this.searchInput.length?(this.isLoading=!0,this.Music.searchArtist(this.searchInput).toPromise().then(t=>{this.isLoading=!1,this.response=t,this.artists=t&&t.data||[]}).catch(t)):t()}}return t.\u0275fac=function(i){return new(i||t)(c.Ib(n.b),c.Ib(n.a),c.Ib(l))},t.\u0275cmp=c.Cb({type:t,selectors:[["ng-component"]],decls:7,vars:4,consts:[[3,"isLoading","searchInput","searchClicked","queryValueChanged"],[1,"hero","is-fullheight-with-navbar"],[1,"hero-body","is-align-items-center","pt-5","px-0","pb-0"],[1,"container","is-fluid","px-5"],["class","columns is-gapless is-multiline",4,"ngIf","ngIfElse"],["artistsTemplate",""],[1,"columns","is-gapless","is-multiline"],[1,"column","has-text-centered"],[1,"heading"],[1,"title","is-1"],[1,"subtitle","pt-4"],[1,"level","is-mobile"],[1,"level-item","has-text-centered"],["width","300px","height","300px",3,"options"],[1,"columns","is-multiline"],["class","column is-one-quarter",4,"ngFor","ngForOf"],[1,"column","is-one-quarter"],[3,"artist"]],template:function(t,i){if(1&t&&(c.Nb(0,"app-topbar",0),c.Ub("searchClicked",function(){return i.onSearch()})("queryValueChanged",function(t){return i.onSearchValueChanged(t)}),c.Mb(),c.Nb(1,"section",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.ic(4,f,13,1,"div",4),c.ic(5,M,3,1,"ng-template",null,5,c.jc),c.Mb(),c.Mb(),c.Mb()),2&t){const t=c.cc(6);c.Zb("isLoading",i.isLoading)("searchInput",i.searchInput),c.yb(4),c.Zb("ngIf",!i.artists.length)("ngIfElse",t)}},directives:[p,s.j,a.a,s.i,m],encapsulation:2}),t})(),y=(()=>{class t{constructor(){}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=c.Cb({type:t,selectors:[["app-card-album"]],inputs:{album:"album"},decls:11,vars:3,consts:[[1,"media"],[1,"media-content"],[1,"image","is-square"],["alt","Album art",3,"src"],[1,"content","is-small","pt-3"]],template:function(t,i){1&t&&(c.Nb(0,"a"),c.Nb(1,"article",0),c.Nb(2,"div",1),c.Nb(3,"figure",2),c.Jb(4,"img",3),c.Mb(),c.Nb(5,"div",4),c.Nb(6,"p"),c.Nb(7,"strong"),c.kc(8),c.Mb(),c.Jb(9,"br"),c.kc(10),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&t&&(c.yb(4),c.Zb("src",null==i.album?null:i.album.cover_big,c.ec),c.yb(4),c.lc(null==i.album?null:i.album.title),c.yb(2),c.mc(" ",null==i.album?null:i.album.release_date," "))},encapsulation:2}),t})();function k(t,i){if(1&t&&(c.Nb(0,"tr"),c.Nb(1,"th"),c.kc(2),c.Mb(),c.Nb(3,"td"),c.kc(4),c.Mb(),c.Nb(5,"td"),c.kc(6),c.Mb(),c.Mb()),2&t){const t=i.$implicit,e=i.index,s=c.Wb();c.yb(2),c.lc(e+1),c.yb(2),c.lc(t.title),c.yb(2),c.lc(s.formattedTime(1e3*t.duration))}}function I(t,i){if(1&t&&(c.Nb(0,"div",20),c.Jb(1,"app-card-album",21),c.Mb()),2&t){const t=i.$implicit;c.yb(1),c.Zb("album",t)}}const S=function(t){return{"background-image":t}},C=[{path:"",component:N},{path:"artists",children:[{path:"",component:N},{path:":id",component:(()=>{class t{constructor(t,i){this.activatedRoute=t,this.Music=i,this.isLoading=!1,this.albums=[],this.topTracks=[]}ngOnInit(){this.subscription=this.activatedRoute.params.subscribe(t=>{this.artistId=t&&t.id,this.loadUserData(this.artistId)})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}formattedTime(t){return new Date(t).toISOString().slice(11,19)}loadUserData(t){const i=()=>{this.isLoading=!1,this.artist=void 0,this.albums=[],this.topTracks=[]};t?(this.isLoading=!0,Promise.all([this.Music.getArtist(t).toPromise(),this.Music.getArtistAlbums(t).toPromise(),this.Music.getArtistTopTracks(t).toPromise()]).then(t=>{this.isLoading=!1,this.artist=t&&t[0],this.albums=t&&t[1]&&t[1].data||[],this.topTracks=t&&t[2]&&t[2].data||[]}).catch(i)):i()}}return t.\u0275fac=function(i){return new(i||t)(c.Ib(n.a),c.Ib(l))},t.\u0275cmp=c.Cb({type:t,selectors:[["ng-component"]],decls:31,vars:10,consts:[[3,"isSearchHidden"],[1,"hero","is-fullheight-with-navbar"],[1,"hero-body","is-align-items-stretch","pt-5","px-0","pb-0"],[1,"container","is-fluid","px-5"],[1,"section"],[1,"columns","is-multiline"],[1,"column","is-three-fifths"],[1,"box","card-artist-background",3,"ngStyle"],[1,"is-flex","is-flex-direction-column","is-justify-content-center",2,"height","100%"],[1,"media"],[1,"media-content"],[1,"content"],[1,"column"],[1,"box"],[1,"table-container"],[1,"title","is-6"],[1,"table","is-fullwidth","is-bordered","is-striped","is-narrow","is-hoverable"],[4,"ngFor","ngForOf"],[1,"title"],["class","column is-one-fifth",4,"ngFor","ngForOf"],[1,"column","is-one-fifth"],[3,"album"]],template:function(t,i){1&t&&(c.Jb(0,"app-topbar",0),c.Nb(1,"section",1),c.Nb(2,"div",2),c.Nb(3,"div",3),c.Nb(4,"section",4),c.Nb(5,"div",5),c.Nb(6,"div",6),c.Nb(7,"div",7),c.Nb(8,"div",8),c.Nb(9,"article",9),c.Nb(10,"div",10),c.Nb(11,"div",11),c.Nb(12,"p"),c.Nb(13,"strong"),c.kc(14),c.Mb(),c.Jb(15,"br"),c.kc(16),c.Xb(17,"shortNumber"),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(18,"div",12),c.Nb(19,"div",13),c.Nb(20,"div",14),c.Nb(21,"p",15),c.kc(22,"Top Tracks"),c.Mb(),c.Nb(23,"table",16),c.Nb(24,"tbody"),c.ic(25,k,7,3,"tr",17),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Nb(26,"section",4),c.Nb(27,"h1",18),c.kc(28,"Albums"),c.Mb(),c.Nb(29,"div",5),c.ic(30,I,2,1,"div",19),c.Mb(),c.Mb(),c.Mb(),c.Mb(),c.Mb()),2&t&&(c.Zb("isSearchHidden",!0),c.yb(7),c.Zb("ngStyle",c.ac(8,S,"url("+(null==i.artist?null:i.artist.picture_big)+")")),c.yb(7),c.lc(null==i.artist?null:i.artist.name),c.yb(2),c.mc(" ",c.Yb(17,6,null==i.artist?null:i.artist.nb_fan)," "),c.yb(9),c.Zb("ngForOf",i.topTracks),c.yb(5),c.Zb("ngForOf",i.albums))},directives:[p,s.k,s.i,y],pipes:[g.a],encapsulation:2}),t})()}]},{path:"**",redirectTo:"",pathMatch:"full"}];let w=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({imports:[[n.d.forChild(C)],n.d]}),t})();var L=e("PCNd");function x(){return b.a}let J=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({providers:[l],imports:[[s.b,n.d,a.b.forRoot({player:x}),L.a,w]]}),t})()}}]);