import{A as b,B as d,C as G,D as T,E as P,F as Q,G as X,H as M,I as y,J as O,K as Y,L as ee,P as te,R as ie,S as ne,T as K,U as D,V as I,X as re,a as A,b as z,c as w,d as U,e as W,f as S,g as J,h as V,i as H,j as h,k as F,l as L,m as k,n as E,o as s,p as f,q as u,r as m,s as n,t,u as p,v as N,w as v,x as g,y as Z,z as a}from"./chunk-CLP4KPKH.js";var C=(()=>{let e=class e{constructor(i){this.http=i,this._apiUrl="https://restcountries.com/v3.1",this._localStorageKey="countriesCacheStore",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:void 0,subregion:void 0,countries:[]}},this.loadFromlocalStorage()}saveTolocalStorage(){localStorage.setItem(this._localStorageKey,JSON.stringify(this.cacheStore))}loadFromlocalStorage(){localStorage.getItem(this._localStorageKey)&&(this.cacheStore=JSON.parse(localStorage.getItem(this._localStorageKey)))}getCountriesRequest(i){return this.http.get(i).pipe(w(o=>A([])),U(200))}SearchByCapital(i){let o=`${this._apiUrl}/capital/${i}`;return this.http.get(o).pipe(S(l=>this.cacheStore.byCapital={term:i,countries:l}),S(()=>this.saveTolocalStorage()),w(l=>(console.log(l),A([]))),U(200))}SearchCountry(i){let o=`${this._apiUrl}/name/${i}`;return this.getCountriesRequest(o).pipe(S(l=>this.cacheStore.byCountries={term:i,countries:l}),S(()=>this.saveTolocalStorage()))}SearchByRegion(i){let o=`${this._apiUrl}/region/${i}`;return this.getCountriesRequest(o).pipe(S(l=>this.cacheStore.byRegion={region:i,subregion:void 0,countries:l}),S(()=>this.saveTolocalStorage()))}SearchBySubregion(i){let o=`${this._apiUrl}/subregion/${i}`;return this.getCountriesRequest(o).pipe(S(l=>this.cacheStore.byRegion={region:this.cacheStore.byRegion.region,subregion:i,countries:l}),S(()=>this.saveTolocalStorage()))}searchCountryByAlphaCode(i){let o=`${this._apiUrl}/alpha/${i}`;return this.http.get(o).pipe(z(l=>l.length>0?l[0]:null),w(l=>A(null)))}};e.\u0275fac=function(o){return new(o||e)(H(ee))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();var de=r=>["/countries/by/",r];function ue(r,e){r&1&&(n(0,"div",1)(1,"div"),p(2,"i",2),t(),n(3,"div",3),a(4," Perform a search to find Countries."),t()())}function ge(r,e){r&1&&(n(0,"div",4)(1,"div"),p(2,"i",5),t(),n(3,"div",3),a(4," No countries found."),t()())}function he(r,e){if(r&1&&(n(0,"tr")(1,"td"),a(2),t(),n(3,"td"),a(4),t(),n(5,"td"),p(6,"img",8),t(),n(7,"td"),p(8,"img",9),t(),n(9,"td"),a(10),t(),n(11,"td"),a(12),t(),n(13,"td"),a(14),T(15,"number"),t(),n(16,"td")(17,"a",10),a(18,"More"),t()()()),r&2){let c=e.$implicit,i=e.index;s(2),b(i+1),s(2),b(c.flag),s(2),m("src",c.flags.svg,E)("alt",c.flags.alt),s(2),m("src",c.coatOfArms.png,E),s(2),b(c.name.common),s(2),b(c.capital),s(2),b(P(15,9,c.population)),s(3),m("routerLink",G(11,de,c.cca3))}}function fe(r,e){if(r&1&&(n(0,"table",6)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),t(),n(5,"th"),a(6,"Icon"),t(),n(7,"th"),a(8,"Flag"),t(),n(9,"th"),a(10,"Arms"),t(),n(11,"th"),a(12,"Name"),t(),n(13,"th"),a(14,"Capital"),t(),n(15,"th"),a(16,"Population"),t(),p(17,"th"),t()(),n(18,"tbody"),u(19,he,19,13,"tr",7),t()()),r&2){let c=g();s(19),m("ngForOf",c.countries)}}var B=(()=>{let e=class e{constructor(){this.countries=[],this.hasSearchStarted=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=h({type:e,selectors:[["countries-table"]],inputs:{countries:"countries",hasSearchStarted:"hasSearchStarted"},decls:3,vars:3,consts:[[3,"ngIf"],[1,"alert","alert-info","d-flex","align-items-center"],[1,"bi","bi-info-circle"],[1,"px-4"],[1,"alert","alert-warning","d-flex","align-items-center"],[1,"bi","bi-x-octagon"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"src"],[3,"routerLink"]],template:function(o,l){o&1&&u(0,ue,5,0,"ng-template",0)(1,ge,5,0,"ng-template",0)(2,fe,20,1,"ng-template",0),o&2&&(m("ngIf",!l.hasSearchStarted&&l.countries.length===0),s(),m("ngIf",l.hasSearchStarted&&l.countries.length===0),s(),m("ngIf",l.countries.length>0))},dependencies:[M,y,ne,O],styles:["img[_ngcontent-%COMP%]{width:25px;border:1px solid #EEE}"]});let r=e;return r})();function Se(r,e){r&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.initialValue="",this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.initialValue=i,this.countriesService.SearchByCapital(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(C))},e.\u0275cmp=h({type:e,selectors:[["countries-by-capital-page"]],decls:11,vars:4,consts:[[1,"row"],[1,"col"],["placeholder","Type to search country by capital",3,"onValue","onDebounce","initialValue"],[4,"ngIf"],[3,"countries","hasSearchStarted"]],template:function(o,l){o&1&&(n(0,"h2"),a(1,"Search by Capital"),t(),p(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),v("onValue",function(x){return l.searchByCapital(x)})("onDebounce",function(x){return l.searchByCapital(x)}),t()()(),n(6,"div",0)(7,"div",1),p(8,"hr"),u(9,Se,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),t()()),o&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries)("hasSearchStarted",l.initialValue!==""))},dependencies:[y,D,I,B],encapsulation:2});let r=e;return r})();function ve(r,e){r&1&&p(0,"shared-loading-spinner")}var se=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.initialValue="",this.isLoading=!1}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchCountry(i){this.isLoading=!0,this.initialValue=i,this.countriesService.SearchCountry(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(C))},e.\u0275cmp=h({type:e,selectors:[["countries-by-country-page"]],decls:11,vars:4,consts:[[1,"row"],[1,"col"],["placeholder","Type to search country",3,"onValue","onDebounce","initialValue"],[4,"ngIf"],[3,"countries","hasSearchStarted"]],template:function(o,l){o&1&&(n(0,"h2"),a(1,"Search Country"),t(),p(2,"hr"),n(3,"div",0)(4,"div",1)(5,"shared-search-box",2),v("onValue",function(x){return l.searchCountry(x)})("onDebounce",function(x){return l.searchCountry(x)}),t()()(),n(6,"div",0)(7,"div",1),p(8,"hr"),u(9,ve,1,0,"shared-loading-spinner",3),p(10,"countries-table",4),t()()),o&2&&(s(5),m("initialValue",l.initialValue),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries)("hasSearchStarted",l.initialValue!==""))},dependencies:[y,D,I,B],encapsulation:2});let r=e;return r})();function be(r,e){if(r&1){let c=N();n(0,"button",8),v("click",function(){let o=L(c).$implicit,l=g();return k(l.searchByRegion(o))}),a(1),t()}if(r&2){let c=e.$implicit,i=g();m("ngClass",i.selectedRegion===c?"btn-primary":"btn-outline-primary")("disabled",i.isLoading),s(),d(" ",c," ")}}function Ce(r,e){if(r&1){let c=N();n(0,"button",9),v("click",function(){let o=L(c).$implicit,l=g(2);return k(l.searchBySubregion(o))}),a(1),t()}if(r&2){let c=e.$implicit,i=g(2);m("ngClass",i.selectedSubregion===c?"btn-secondary":"btn-outline-secondary")("disabled",i.isLoading),s(),d(" ",c," ")}}function xe(r,e){if(r&1){let c=N();n(0,"div",1)(1,"button",9),v("click",function(){L(c);let o=g();return k(o.searchByRegion(o.selectedRegion))}),a(2," All "),t(),u(3,Ce,2,3,"button",10),t()}if(r&2){let c=g();s(),m("ngClass",c.selectedSubregion?"btn-outline-secondary":"btn-secondary")("disabled",c.isLoading),s(2),m("ngForOf",c.subregions)}}function _e(r,e){r&1&&p(0,"shared-loading-spinner")}var ce=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"],this.subregions=[],this.isLoading=!1}SetSubRegionsByRegion(){switch(this.selectedRegion){case"Africa":this.subregions=["Northern Africa","Eastern Africa","Middle Africa","Southern Africa","Western Africa"];break;case"Americas":this.subregions=["Caribbean","Central America","South America","Northern America"];break;case"Asia":this.subregions=["Central Asia","Eastern Asia","South-eastern Asia","Southern Asia","Western Asia"];break;case"Europe":this.subregions=["Eastern Europe","Northern Europe","Southern Europe","Western Europe"];break;case"Oceania":this.subregions=["Australia and New Zealand","Melanesia","Micronesia","Polynesia"];break}}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region,this.selectedSubregion=this.countriesService.cacheStore.byRegion.subregion,this.SetSubRegionsByRegion()}searchByRegion(i){this.selectedRegion=i,this.SetSubRegionsByRegion(),this.selectedSubregion=void 0,this.isLoading=!0,this.countriesService.SearchByRegion(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}searchBySubregion(i){this.selectedSubregion=i,this.isLoading=!0,this.countriesService.SearchBySubregion(i).subscribe(o=>{this.countries=o,this.isLoading=!1})}};e.\u0275fac=function(o){return new(o||e)(f(C))},e.\u0275cmp=h({type:e,selectors:[["countries-by-region-page"]],decls:13,vars:5,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","disabled","click",4,"ngFor","ngForOf"],[1,"row","mt-3"],["class","col text-center",4,"ngIf"],[1,"col"],[4,"ngIf"],[3,"countries","hasSearchStarted"],[1,"btn","mx-2",3,"click","ngClass","disabled"],[1,"btn","btn-sm","mx-2",3,"click","ngClass","disabled"],["class","btn btn-sm mx-2",3,"ngClass","disabled","click",4,"ngFor","ngForOf"]],template:function(o,l){o&1&&(n(0,"h2"),a(1,"Search by Region"),t(),p(2,"hr"),n(3,"div",0)(4,"div",1),u(5,be,2,3,"button",2),t()(),n(6,"div",3),u(7,xe,4,3,"div",4),t(),n(8,"div",0)(9,"div",5),p(10,"hr"),u(11,_e,1,0,"shared-loading-spinner",6),p(12,"countries-table",7),t()()),o&2&&(s(5),m("ngForOf",l.regions),s(2),m("ngIf",l.subregions),s(4),m("ngIf",l.isLoading),s(),m("countries",l.countries)("hasSearchStarted",l.selectedRegion!==void 0))},dependencies:[X,M,y,I,B],encapsulation:2});let r=e;return r})();function Ee(r,e){r&1&&(n(0,"h2"),a(1,"Single Country"),t(),p(2,"hr"),n(3,"div",2),p(4,"div",3),n(5,"div",4),a(6," Loading country..."),t()())}function Ie(r,e){if(r&1&&(n(0,"div")(1,"div",5)(2,"div",6)(3,"h2"),a(4),n(5,"span",7),a(6),t()(),p(7,"hr"),t()(),n(8,"div",5)(9,"div",8),p(10,"img",9),t(),n(11,"div",10)(12,"ul",11)(13,"li",12)(14,"strong"),a(15,"Official Name"),t(),a(16),t(),n(17,"li",12)(18,"strong"),a(19,"Code"),t(),a(20),t(),n(21,"li",12)(22,"strong"),a(23,"Area"),t(),a(24),T(25,"number"),t(),n(26,"li",12)(27,"strong"),a(28,"Population"),t(),a(29),T(30,"number"),t(),n(31,"li",12)(32,"strong"),a(33,"Capital"),t(),a(34),t(),n(35,"li",12)(36,"strong"),a(37,"Region"),t(),a(38),t(),n(39,"li",12)(40,"strong"),a(41,"Subregion"),t(),a(42),t()()(),n(43,"div",13),p(44,"img",14),t()(),n(45,"div",15)(46,"div",16)(47,"h3"),a(48,"Translations"),t(),n(49,"div",17)(50,"span",18),a(51),t(),n(52,"span",18),a(53),t(),n(54,"span",18),a(55),t(),n(56,"span",18),a(57),t(),n(58,"span",18),a(59),t(),n(60,"span",18),a(61),t(),n(62,"span",18),a(63),t(),n(64,"span",18),a(65),t(),n(66,"span",18),a(67),t(),n(68,"span",18),a(69),t(),n(70,"span",18),a(71),t()()()()()),r&2){let c=g();s(4),d("",c.country.name.common," "),s(2),b(c.country.flag),s(4),m("src",c.country.flags.svg,E)("alt",c.country.flags.alt),s(6),d(" ",c.country.name.official," "),s(4),d(" ",c.country.cca3," "),s(4),d(" ",P(25,23,c.country.area)," km2 "),s(5),d(" ",P(30,25,c.country.population)," "),s(5),d(" ",c.country.capital[0]," "),s(4),d(" ",c.country.region," "),s(4),d(" ",c.country.subregion," "),s(2),m("src",c.country.coatOfArms.png,E),s(7),d("Ara: ",c.country.translations.ara.common,""),s(2),d("Bre: ",c.country.translations.bre.common,""),s(2),d("Kor: ",c.country.translations.kor.common,""),s(2),d("Ces: ",c.country.translations.ces.common,""),s(2),d("Cym: ",c.country.translations.cym.common,""),s(2),d("Est: ",c.country.translations.est.common,""),s(2),d("Fin: ",c.country.translations.fin.common,""),s(2),d("Ita: ",c.country.translations.ita.common,""),s(2),d("Deu: ",c.country.translations.deu.common,""),s(2),d("Spa: ",c.country.translations.esp.common,""),s(2),d("Per: ",c.country.translations.per.common,"")}}var le=(()=>{let e=class e{constructor(i,o,l){this.activatedRoute=i,this.router=o,this.countriesService=l}ngOnInit(){this.activatedRoute.params.pipe(W(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}searchCountry(i){this.countriesService.searchCountryByAlphaCode(i).subscribe(o=>{console.log({country:o})})}};e.\u0275fac=function(o){return new(o||e)(f(te),f(ie),f(C))},e.\u0275cmp=h({type:e,selectors:[["countries-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","d-flex","align-items-center"],["role","status",1,"spinner-border"],[1,"px-4"],[1,"row"],[1,"col-12"],[1,"float-end"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col-5"],[1,"list-group"],[1,"list-group-item"],[1,"col-3"],[1,"img-thumbnail",3,"src"],[1,"row","mt-2"],[1,"col"],[1,"flex","flex-wrap"],[1,"badge","bg-secondary","m-1"]],template:function(o,l){if(o&1&&u(0,Ee,7,0,"ng-template",null,0,Q)(2,Ie,72,27,"div",1),o&2){let R=Z(1);s(2),m("ngIf",l.country)("ngIfElse",R)}},dependencies:[y,O],encapsulation:2});let r=e;return r})();var Be=[{path:"by-country",component:se},{path:"by-capital",component:ae},{path:"by-region",component:ce},{path:"by/:id",component:le},{path:"**",redirectTo:"by-country"}],me=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=F({type:e}),e.\u0275inj=V({imports:[K.forChild(Be),K]});let r=e;return r})();var Ye=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=F({type:e}),e.\u0275inj=V({imports:[Y,me,re]});let r=e;return r})();export{Ye as CountriesModule};
