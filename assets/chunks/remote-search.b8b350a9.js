import{g,j as s,k as f,r as p,o as k,f as x,w as v,a as m,u as j,l as w,b as h,t as E}from"../app.52e27a73.js";const S={class:"value"},V={class:"link"},F=g({__name:"autocomplete-template",setup(y){const u=s(""),o=s([]),n=(e,t)=>{const l=e?o.value.filter(a(e)):o.value;t(l)},a=e=>t=>t.value.toLowerCase().indexOf(e.toLowerCase())===0,_=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],d=e=>{console.log(e)},c=e=>{console.log(e)};return f(()=>{o.value=_()}),(e,t)=>{const l=p("el-icon"),i=p("el-autocomplete");return k(),x(i,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=r=>u.value=r),"fetch-suggestions":n,"popper-class":"my-autocomplete",placeholder:"Please input",onSelect:d},{suffix:v(()=>[m(l,{class:"el-input__icon",onClick:c},{default:v(()=>[m(j(w))]),_:1})]),default:v(({item:r})=>[h("div",S,E(r.value),1),h("span",V,E(r.link),1)]),_:1},8,["modelValue"])}}});var M=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const C=h("div",{class:"sub-title my-2 text-sm text-gray-600"}," list suggestions when activated ",-1),O=h("div",{class:"sub-title my-2 text-sm text-gray-600"}," list suggestions on input ",-1),P=g({__name:"autocomplete",setup(y){const u=s(""),o=s(""),n=s([]),a=(e,t)=>{const l=e?n.value.filter(_(e)):n.value;t(l)},_=e=>t=>t.value.toLowerCase().indexOf(e.toLowerCase())===0,d=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}],c=e=>{console.log(e)};return f(()=>{n.value=d()}),(e,t)=>{const l=p("el-autocomplete"),i=p("el-col"),r=p("el-row");return k(),x(r,{class:"demo-autocomplete text-center"},{default:v(()=>[m(i,{span:12},{default:v(()=>[C,m(l,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=b=>u.value=b),"fetch-suggestions":a,clearable:"",class:"inline-input w-50",placeholder:"Please Input",onSelect:c},null,8,["modelValue"])]),_:1}),m(i,{span:12},{default:v(()=>[O,m(l,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=b=>o.value=b),"fetch-suggestions":a,"trigger-on-focus":!1,clearable:"",class:"inline-input w-50",placeholder:"Please Input",onSelect:c},null,8,["modelValue"])]),_:1})]),_:1})}}});var z=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));const L=g({__name:"remote-search",setup(y){const u=s(""),o=s([]),n=()=>[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}];let a;const _=(e,t)=>{const l=e?o.value.filter(d(e)):o.value;clearTimeout(a),a=setTimeout(()=>{t(l)},3e3*Math.random())},d=e=>t=>t.value.toLowerCase().indexOf(e.toLowerCase())===0,c=e=>{console.log(e)};return f(()=>{o.value=n()}),(e,t)=>{const l=p("el-autocomplete");return k(),x(l,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=i=>u.value=i),"fetch-suggestions":_,placeholder:"Please input",onSelect:c},null,8,["modelValue"])}}});var A=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"}));export{M as _,z as a,A as b};
