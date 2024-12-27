(()=>{var e,t,r,o={4767:(e,t,r)=>{"use strict";r.r(t);var o=r(1609);const n=window.wp.blocks,a=window.wp.blockEditor;var l=r(7104),c=r(6378),s=r(851),i=r(5574),u=r(7723),m=r(6087),d=r(4133);const p=window.wp.components;var b=r(2478),g=r(9491);const h={clear:(0,u.__)("Clear all selected items","woocommerce"),noItems:(0,u.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:(0,u.__)("No results for %s","woocommerce"),search:(0,u.__)("Search for items","woocommerce"),selected:e=>(0,u.sprintf)(/* translators: Number of items selected from list. */ /* translators: Number of items selected from list. */
(0,u._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:(0,u.__)("Search results updated.","woocommerce")},w=(e,t=e)=>{const r=e.reduce(((e,t)=>{const r=t.parent||0;return e[r]||(e[r]=[]),e[r].push(t),e}),{}),o=("id",t.reduce(((e,t)=>(e[String(t.id)]=t,e)),{}));const n=["0"],a=(e={})=>e.parent?[...a(o[e.parent]),e.name]:e.name?[e.name]:[],l=e=>e.map((e=>{const t=r[e.id];return n.push(""+e.id),{...e,breadcrumbs:a(o[e.parent]),children:t&&t.length?l(t):[]}})),c=l(r[0]||[]);return Object.entries(r).forEach((([e,t])=>{n.includes(e)||c.push(...l(t||[]))})),c},_=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map(((e,t)=>r.test(e)?(0,o.createElement)("strong",{key:t},e):(0,o.createElement)(m.Fragment,{key:t},e)))};function f(e,t,r){const o=new Set(t.map((e=>e[r])));return e.filter((e=>!o.has(e[r])))}const y=window.wp.htmlEntities,E=({label:e})=>(0,o.createElement)("span",{className:"woocommerce-search-list__item-count"},e),v=e=>{const{item:t,search:r}=e,n=t.breadcrumbs&&t.breadcrumbs.length;return(0,o.createElement)("span",{className:"woocommerce-search-list__item-label"},n?(0,o.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(a=t.breadcrumbs).length?a.slice(0,1).toString():2===a.length?a.slice(0,1).toString()+" › "+a.slice(-1).toString():a.slice(0,1).toString()+" … "+a.slice(-1).toString()):null,(0,o.createElement)("span",{className:"woocommerce-search-list__item-name"},_((0,y.decodeEntities)(t.name),r)));var a},k=({countLabel:e,className:t,depth:r=0,controlId:n="",item:a,isSelected:l,isSingle:c,onSelect:i,search:u="",selected:d,useExpandedPanelId:b,...g})=>{var h,w;const[k,C]=b,x=null!=e&&void 0!==a.count&&null!==a.count,S=!(null===(h=a.breadcrumbs)||void 0===h||!h.length),N=!(null===(w=a.children)||void 0===w||!w.length),A=k===a.id,T=(0,s.A)(["woocommerce-search-list__item",`depth-${r}`,t],{"has-breadcrumbs":S,"has-children":N,"has-count":x,"is-expanded":A,"is-radio-button":c});(0,m.useEffect)((()=>{N&&l&&C(a.id)}),[a,N,l,C]);const I=g.name||`search-list-item-${n}`,L=`${I}-${a.id}`,P=(0,m.useCallback)((()=>{C(A?-1:Number(a.id))}),[A,a.id,C]);return N?(0,o.createElement)("div",{className:T,onClick:P,onKeyDown:e=>"Enter"===e.key||" "===e.key?P():null,role:"treeitem",tabIndex:0},c?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("input",{type:"radio",id:L,name:I,value:a.value,onChange:i(a),onClick:e=>e.stopPropagation(),checked:l,className:"woocommerce-search-list__item-input",...g}),(0,o.createElement)(v,{item:a,search:u}),x?(0,o.createElement)(E,{label:e||a.count}):null):(0,o.createElement)(o.Fragment,null,(0,o.createElement)(p.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:l,...!l&&a.children.some((e=>d.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:_((0,y.decodeEntities)(a.name),u),onChange:()=>{l?i(f(d,a.children,"id"))():i(function(e,t,r){const o=f(t,e,"id");return[...e,...o]}(d,a.children))()},onClick:e=>e.stopPropagation()}),x?(0,o.createElement)(E,{label:e||a.count}):null)):(0,o.createElement)("label",{htmlFor:L,className:T},c?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("input",{...g,type:"radio",id:L,name:I,value:a.value,onChange:i(a),checked:l,className:"woocommerce-search-list__item-input"}),(0,o.createElement)(v,{item:a,search:u})):(0,o.createElement)(p.CheckboxControl,{...g,id:L,name:I,className:"woocommerce-search-list__item-input",value:(0,y.decodeEntities)(a.value),label:_((0,y.decodeEntities)(a.name),u),onChange:i(a),checked:l}),x?(0,o.createElement)(E,{label:e||a.count}):null)};var C=r(2370);r(6636);const x=({id:e,label:t,popoverContents:r,remove:n,screenReaderLabel:a,className:c=""})=>{const[i,d]=(0,m.useState)(!1),b=(0,g.useInstanceId)(x);if(a=a||t,!t)return null;t=(0,y.decodeEntities)(t);const h=(0,s.A)("woocommerce-tag",c,{"has-remove":!!n}),w=`woocommerce-tag__label-${b}`,_=(0,o.createElement)(o.Fragment,null,(0,o.createElement)("span",{className:"screen-reader-text"},a),(0,o.createElement)("span",{"aria-hidden":"true"},t));return(0,o.createElement)("span",{className:h},r?(0,o.createElement)(p.Button,{className:"woocommerce-tag__text",id:w,onClick:()=>d(!0)},_):(0,o.createElement)("span",{className:"woocommerce-tag__text",id:w},_),r&&i&&(0,o.createElement)(p.Popover,{onClose:()=>d(!1)},r),n&&(0,o.createElement)(p.Button,{className:"woocommerce-tag__remove",onClick:n(e),label:(0,u.sprintf)(
// Translators: %s label.
// Translators: %s label.
(0,u.__)("Remove %s","woocommerce"),t),"aria-describedby":w},(0,o.createElement)(l.A,{icon:C.A,size:20,className:"clear-icon",role:"img"})))},S=x;r(8137);const N=e=>(0,o.createElement)(k,{...e}),A=e=>{const{list:t,selected:r,renderItem:n,depth:a=0,onSelect:l,instanceId:c,isSingle:s,search:i,useExpandedPanelId:u}=e,[d]=u;return t?(0,o.createElement)(m.Fragment,null,t.map((t=>{var p,b;const g=null!==(p=t.children)&&void 0!==p&&p.length&&!s?t.children.every((({id:e})=>r.find((t=>t.id===e)))):!!r.find((({id:e})=>e===t.id)),h=(null===(b=t.children)||void 0===b?void 0:b.length)&&d===t.id;return(0,o.createElement)(m.Fragment,{key:t.id},(0,o.createElement)("li",null,n({item:t,isSelected:g,onSelect:l,isSingle:s,selected:r,search:i,depth:a,useExpandedPanelId:u,controlId:c})),h?(0,o.createElement)(A,{...e,list:t.children,depth:a+1}):null)}))):null},T=({isLoading:e,isSingle:t,selected:r,messages:n,onChange:a,onRemove:l})=>{if(e||t||!r)return null;const c=r.length;return(0,o.createElement)("div",{className:"woocommerce-search-list__selected"},(0,o.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,o.createElement)("strong",null,n.selected(c)),c>0?(0,o.createElement)(p.Button,{variant:"link",isDestructive:!0,onClick:()=>a([]),"aria-label":n.clear},(0,u.__)("Clear all","woocommerce")):null),c>0?(0,o.createElement)("ul",null,r.map(((e,t)=>(0,o.createElement)("li",{key:t},(0,o.createElement)(S,{label:e.name,id:e.id,remove:l}))))):null)},I=({filteredList:e,search:t,onSelect:r,instanceId:n,useExpandedPanelId:a,...c})=>{const{messages:s,renderItem:i,selected:m,isSingle:d}=c,p=i||N;return 0===e.length?(0,o.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,o.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,o.createElement)(l.A,{icon:b.A,role:"img"})),(0,o.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,u.sprintf)(s.noResults,t):s.noItems)):(0,o.createElement)("ul",{className:"woocommerce-search-list__list"},(0,o.createElement)(A,{useExpandedPanelId:a,list:e,selected:m,renderItem:p,onSelect:r,instanceId:n,isSingle:d,search:t}))},L=e=>{const{className:t="",isCompact:r,isHierarchical:n,isLoading:a,isSingle:l,list:c,messages:i=h,onChange:d,onSearch:b,selected:_,type:f="text",debouncedSpeak:y}=e,[E,v]=(0,m.useState)(""),k=(0,m.useState)(-1),C=(0,g.useInstanceId)(L),x=(0,m.useMemo)((()=>({...h,...i})),[i]),S=(0,m.useMemo)((()=>((e,t,r)=>{if(!t)return r?w(e):e;const o=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map((e=>!!o.test(e.name)&&e)).filter(Boolean);return r?w(n,e):n})(c,E,n)),[c,E,n]);(0,m.useEffect)((()=>{y&&y(x.updated)}),[y,x]),(0,m.useEffect)((()=>{"function"==typeof b&&b(E)}),[E,b]);const N=(0,m.useCallback)((e=>()=>{l&&d([]);const t=_.findIndex((({id:t})=>t===e));d([..._.slice(0,t),..._.slice(t+1)])}),[l,_,d]),A=(0,m.useCallback)((e=>()=>{Array.isArray(e)?d(e):-1===_.findIndex((({id:t})=>t===e.id))?d(l?[e]:[..._,e]):N(e.id)()}),[l,N,d,_]),P=(0,m.useCallback)((e=>{const[t]=_.filter((t=>!e.find((e=>t.id===e.id))));N(t.id)()}),[N,_]);return(0,o.createElement)("div",{className:(0,s.A)("woocommerce-search-list",t,{"is-compact":r,"is-loading":a,"is-token":"token"===f})},"text"===f&&(0,o.createElement)(T,{...e,onRemove:N,messages:x}),(0,o.createElement)("div",{className:"woocommerce-search-list__search"},"text"===f?(0,o.createElement)(p.TextControl,{label:x.search,type:"search",value:E,onChange:e=>v(e)}):(0,o.createElement)(p.FormTokenField,{disabled:a,label:x.search,onChange:P,onInputChange:e=>v(e),suggestions:[],__experimentalValidateInput:()=>!1,value:a?[(0,u.__)("Loading…","woocommerce")]:_.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),a?(0,o.createElement)("div",{className:"woocommerce-search-list__list"},(0,o.createElement)(p.Spinner,null)):(0,o.createElement)(I,{...e,search:E,filteredList:S,messages:x,onSelect:A,instanceId:C,useExpandedPanelId:k}))},P=((0,p.withSpokenMessages)(L),window.wc.wcSettings);r(4302);const F=(0,g.withInstanceId)((({className:e,headingLevel:t,onChange:r,heading:n,instanceId:l})=>{const c=`h${t}`;return(0,o.createElement)(c,{className:e},(0,o.createElement)("label",{className:"screen-reader-text",htmlFor:`block-title-${l}`},(0,u.__)("Block title","woocommerce")),(0,o.createElement)(a.PlainText,{id:`block-title-${l}`,className:"wc-block-editor-components-title",value:n,onChange:r,style:{backgroundColor:"transparent"}}))}));var O=r(923),B=r.n(O);function R(e){const t=(0,m.useRef)(e);return B()(e,t.current)||(t.current=e),t.current}const j=window.wc.wcBlocksData,q=window.wp.data,$=(0,m.createContext)("page"),D=()=>(0,m.useContext)($),M=($.Provider,e=>{const t=D();e=e||t;const r=(0,q.useSelect)((t=>t(j.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:o}=(0,q.useDispatch)(j.QUERY_STATE_STORE_KEY);return[r,(0,m.useCallback)((t=>{o(e,t)}),[e,o])]}),V=(e,t,r)=>{const o=D();r=r||o;const n=(0,q.useSelect)((o=>o(j.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:a}=(0,q.useDispatch)(j.QUERY_STATE_STORE_KEY);return[n,(0,m.useCallback)((t=>{a(r,e,t)}),[r,e,a])]},Q=window.wc.wcTypes,G=e=>{const{namespace:t,resourceName:r,resourceValues:o=[],query:n={},shouldSelect:a=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const l=(0,m.useRef)({results:[],isLoading:!0}),c=R(n),s=R(o),i=(()=>{const[,e]=(0,m.useState)();return(0,m.useCallback)((t=>{e((()=>{throw t}))}),[])})(),u=(0,q.useSelect)((e=>{if(!a)return null;const o=e(j.COLLECTIONS_STORE_KEY),n=[t,r,c,s],l=o.getCollectionError(...n);if(l){if(!(0,Q.isError)(l))throw new Error("TypeError: `error` object is not an instance of Error constructor");i(l)}return{results:o.getCollection(...n),isLoading:!o.hasFinishedResolution("getCollection",n)}}),[t,r,s,c,a,i]);return null!==u&&(l.current=u),l.current};var U=r(4717);const Y=window.wc.blocksComponents;r(5400);const W=({name:e,count:t})=>(0,o.createElement)(o.Fragment,null,e,null!==t&&Number.isFinite(t)&&(0,o.createElement)(Y.Label,{label:t.toString(),screenReaderLabel:(0,u.sprintf)(/* translators: %s number of products. */ /* translators: %s number of products. */
(0,u._n)("%s product","%s products",t,"woocommerce"),t),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}));r(8335);const K=({className:e,
/* translators: Reset button text for filters. */
label:t=(0,u.__)("Reset","woocommerce"),onClick:r,screenReaderLabel:n=(0,u.__)("Reset filter","woocommerce")})=>(0,o.createElement)("button",{className:(0,s.A)("wc-block-components-filter-reset-button",e),onClick:r},(0,o.createElement)(Y.Label,{label:t,screenReaderLabel:n}));r(1504);const H=({className:e,isLoading:t,disabled:r,
/* translators: Submit button text for filters. */
label:n=(0,u.__)("Apply","woocommerce"),onClick:a,screenReaderLabel:l=(0,u.__)("Apply filter","woocommerce")})=>(0,o.createElement)("button",{type:"submit",className:(0,s.A)("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:r,onClick:a},(0,o.createElement)(Y.Label,{label:n,screenReaderLabel:l})),z=window.wp.url;var J=r(224);const Z=(0,P.getSettingWithCoercion)("isRenderingPhpTemplate",!1,Q.isBoolean),X="query_type_",ee="filter_";function te(e){if(Z){const t=new URL(e);t.pathname=t.pathname.replace(/\/page\/[0-9]+/i,""),t.searchParams.delete("paged"),t.searchParams.forEach(((e,r)=>{r.match(/^query(?:-[0-9]+)?-page$/)&&t.searchParams.delete(r)})),window.location.href=t.href}else window.history.replaceState({},"",e)}var re=r(8001);r(243);const oe=({className:e,style:t,suggestions:r,multiple:n=!0,saveTransform:a=(e=>e.trim().replace(/\s/g,"-")),messages:l={},validateInput:c=(e=>r.includes(e)),label:i="",...u})=>(0,o.createElement)("div",{className:(0,s.A)("wc-blocks-components-form-token-field-wrapper",e,{"single-selection":!n}),style:t},(0,o.createElement)(re.A,{label:i,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:c,saveTransform:a,maxLength:n?void 0:1,suggestions:r,messages:l,...u}));r(1626);const ne=({children:e})=>(0,o.createElement)("div",{className:"wc-block-filter-title-placeholder"},e),ae=(0,P.getSetting)("attributes",[]).reduce(((e,t)=>{const r=(o=t)&&o.attribute_name?{id:parseInt(o.attribute_id,10),name:o.attribute_name,taxonomy:"pa_"+o.attribute_name,label:o.attribute_label,orderby:o.attribute_orderby}:null;var o;return r&&r.id&&e.push(r),e}),[]),le=(e=[],t,r,o=[],n="in")=>{if(!r||!r.taxonomy)return[];const a=e.filter((e=>e.attribute!==r.taxonomy));return 0===o.length?t(a):(a.push({attribute:r.taxonomy,operator:n,slug:o.map((({slug:e})=>e)).sort()}),t((0,i.di)(a).asc("attribute"))),a},ce=[{value:"preview-1",formattedValue:"preview-1",name:"Blue",label:(0,o.createElement)(W,{name:"Blue",count:3}),textLabel:"Blue (3)"},{value:"preview-2",formattedValue:"preview-2",name:"Green",label:(0,o.createElement)(W,{name:"Green",count:3}),textLabel:"Green (3)"},{value:"preview-3",formattedValue:"preview-3",name:"Red",label:(0,o.createElement)(W,{name:"Red",count:2}),textLabel:"Red (2)"}],se={count:0,has_archives:!0,id:0,label:"Preview",name:"preview",order:"menu_order",parent:0,taxonomy:"preview",type:""};function ie(){return Math.floor(Math.random()*Date.now())}r(3399);const ue=e=>e.replace("pa_",""),me=(e,t=[])=>{const r={};t.forEach((e=>{const{attribute:t,slug:o,operator:n}=e,a=ue(t),l=o.join(","),c=`${X}${a}`,s="in"===n?"or":"and";r[`${ee}${a}`]=l,r[c]=s}));const o=(0,z.removeQueryArgs)(e,...Object.keys(r));return(0,z.addQueryArgs)(o,r)},de=e=>{if(e){const r=(t=`filter_${e.name}`,window?(0,z.getQueryArg)(window.location.href,t):null);return("string"==typeof r?r.split(","):[]).map((e=>encodeURIComponent(e).toLowerCase()))}var t;return[]},pe=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),be=({isLoading:e=!1,options:t,checked:r,onChange:n})=>e?(0,o.createElement)(o.Fragment,null,(0,o.createElement)("span",{className:"is-loading"}),(0,o.createElement)("span",{className:"is-loading"})):(0,o.createElement)(Y.CheckboxList,{className:"wc-block-attribute-filter-list",options:t,checked:r,onChange:n,isLoading:e,isDisabled:e}),ge=(0,m.createContext)({}),he=({attributes:e,isEditor:t=!1,getNotice:r=(()=>null)})=>{const n=(0,P.getSettingWithCoercion)("hasFilterableProducts",!1,Q.isBoolean),a=(0,P.getSettingWithCoercion)("isRenderingPhpTemplate",!1,Q.isBoolean),c=(0,P.getSettingWithCoercion)("pageUrl",window.location.href,Q.isString),[d,p]=(0,m.useState)(!1),b=e.isPreview&&!e.attributeId?se:(e=>{if(e)return ae.find((t=>t.id===e))})(e.attributeId),g=(0,m.useMemo)((()=>de(b)),[b]),[h,w]=(0,m.useState)(g),[_,f]=(0,m.useState)(ie()),[E,v]=(0,m.useState)(e.isPreview&&!e.attributeId?ce:[]),[k]=M(),[C,x]=V("attributes",[]),{results:S,isLoading:N}=G({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[(null==b?void 0:b.id)||0],shouldSelect:e.attributeId>0,query:{orderby:(null==b?void 0:b.orderby)||"menu_order"}}),{results:A,isLoading:T}=(({queryAttribute:e,queryPrices:t,queryStock:r,queryRating:o,queryState:n,isEditor:a=!1})=>{let l=D();l=`${l}-collection-data`;const[c]=M(l),[s,u]=V("calculate_attribute_counts",[],l),[d,p]=V("calculate_price_range",null,l),[b,g]=V("calculate_stock_status_counts",null,l),[h,w]=V("calculate_rating_counts",null,l),_=R(e||{}),f=R(t),y=R(r),E=R(o);(0,m.useEffect)((()=>{"object"==typeof _&&Object.keys(_).length&&(s.find((e=>(0,Q.objectHasProp)(_,"taxonomy")&&e.taxonomy===_.taxonomy))||u([...s,_]))}),[_,s,u]),(0,m.useEffect)((()=>{d!==f&&void 0!==f&&p(f)}),[f,p,d]),(0,m.useEffect)((()=>{b!==y&&void 0!==y&&g(y)}),[y,g,b]),(0,m.useEffect)((()=>{h!==E&&void 0!==E&&w(E)}),[E,w,h]);const[v,k]=(0,m.useState)(a),[C]=(0,U.d7)(v,200);v||k(!0);const x=(0,m.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,i.di)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(c)),[c]);return G({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...n,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...x},shouldSelect:C})})({queryAttribute:{taxonomy:(null==b?void 0:b.taxonomy)||"",queryType:e.queryType},queryState:k,isEditor:t}),I=(0,m.useCallback)((e=>(0,Q.objectHasProp)(A,"attribute_counts")&&Array.isArray(A.attribute_counts)?A.attribute_counts.find((({term:t})=>t===e)):null),[A]);(0,m.useEffect)((()=>{if(N||T)return;if(!Array.isArray(S))return;const t=S.map((t=>{const r=I(t.id);if(!(r||h.includes(t.slug)||(n=t.slug,null!=k&&k.attributes&&k.attributes.some((({attribute:e,slug:t=[]})=>e===(null==b?void 0:b.taxonomy)&&t.includes(n))))))return null;var n;const a=r?r.count:0;return{formattedValue:pe(t.slug),value:t.slug,name:(0,y.decodeEntities)(t.name),label:(0,o.createElement)(W,{name:(0,y.decodeEntities)(t.name),count:e.showCounts?a:null}),textLabel:e.showCounts?`${(0,y.decodeEntities)(t.name)} (${a})`:(0,y.decodeEntities)(t.name)}})).filter((e=>!!e));v(t),f(ie())}),[null==b?void 0:b.taxonomy,S,N,e.showCounts,T,I,h,k.attributes]);const L=(0,m.useCallback)((e=>Array.isArray(S)?S.reduce(((t,r)=>(e.includes(r.slug)&&t.push(r),t)),[]):[]),[S]),F=(0,m.useCallback)(((e,t=!1)=>{if(e=e.map((e=>({...e,slug:e.slug.map((e=>decodeURIComponent(e)))}))),t){if(null==b||!b.taxonomy)return;const t=Object.keys((0,z.getQueryArgs)(window.location.href)),r=ue(b.taxonomy),o=t.reduce(((e,t)=>t.includes(X+r)||t.includes(ee+r)?(0,z.removeQueryArgs)(e,t):e),window.location.href);te(me(o,e))}else{const t=me(c,e);((e,t)=>{const r=Object.entries(t).reduce(((e,[t,r])=>t.includes("query_type")?e:{...e,[t]:r}),{});return Object.entries(r).reduce(((t,[r,o])=>e[r]===o&&t),!0)})((0,z.getQueryArgs)(window.location.href),(0,z.getQueryArgs)(t))||te(t)}}),[c,null==b?void 0:b.taxonomy]),O=t=>{const r=le(C,x,b,L(t),"or"===e.queryType?"in":"and");F(r,0===t.length)},j=(0,m.useCallback)(((r,o=!1)=>{t||(w(r),!o&&e.showFilterButton||le(C,x,b,L(r),"or"===e.queryType?"in":"and"))}),[t,w,C,x,b,L,e.queryType,e.showFilterButton]),q=R((0,m.useMemo)((()=>(0,Q.isAttributeQueryCollection)(C)?C.filter((({attribute:e})=>e===(null==b?void 0:b.taxonomy))).flatMap((({slug:e})=>e)):[]),[C,null==b?void 0:b.taxonomy])),$=function(e,t){const r=(0,m.useRef)();return(0,m.useEffect)((()=>{r.current===e||(r.current=e)}),[e,t]),r.current}(q);(0,m.useEffect)((()=>{!$||B()($,q)||B()(h,q)||j(q)}),[h,q,$,j]);const Y="single"!==e.selectType,Z=(0,m.useCallback)((e=>{const t=h.includes(e);let r;Y?(r=h.filter((t=>t!==e)),t||(r.push(e),r.sort())):r=t?[]:[e],j(r)}),[h,Y,j]);(0,m.useEffect)((()=>{b&&!e.showFilterButton&&((({currentCheckedFilters:e,hasSetFilterDefaultsFromUrl:t})=>t&&0===e.length)({currentCheckedFilters:h,hasSetFilterDefaultsFromUrl:d})?F(C,!0):F(C,!1))}),[d,F,C,b,h,e.showFilterButton]),(0,m.useEffect)((()=>{if(!d&&!N)return g.length>0?(p(!0),void j(g,!0)):void(a||p(!0))}),[b,d,N,j,g,a]);const re=(()=>{const{wrapper:e}=(0,m.useContext)(ge);return t=>{e&&e.current&&(e.current.hidden=!t)}})();if(!n)return re(!1),null;if(!b)return t?r("noAttributes"):(re(!1),null);if(0===E.length&&!N&&t)return r("noProducts");const he=`h${e.headingLevel}`,we=!e.isPreview&&N,_e=!e.isPreview&&T,fe=(we||_e)&&0===E.length;if(!fe&&0===E.length)return re(!1),null;const ye=Y?!fe&&h.length<E.length:!fe&&0===h.length,Ee=(0,o.createElement)(he,{className:"wc-block-attribute-filter__title"},e.heading),ve=fe?(0,o.createElement)(ne,null,Ee):Ee;return re(!0),(0,o.createElement)(o.Fragment,null,!t&&e.heading&&ve,(0,o.createElement)("div",{className:(0,s.A)("wc-block-attribute-filter",`style-${e.displayStyle}`)},"dropdown"===e.displayStyle?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(oe,{key:_,className:(0,s.A)({"single-selection":!Y,"is-loading":fe}),suggestions:E.filter((e=>!h.includes(e.value))).map((e=>e.formattedValue)),disabled:fe,placeholder:(0,u.sprintf)(/* translators: %s attribute name. */ /* translators: %s attribute name. */
(0,u.__)("Select %s","woocommerce"),b.label),onChange:e=>{!Y&&e.length>1&&(e=[e[e.length-1]]);const t=[e=e.map((e=>{const t=E.find((t=>t.formattedValue===e));return t?t.value:e})),h].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));if(1===t.length)return Z(t[0]);const r=[h,e].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));1===r.length&&Z(r[0])},value:h,displayTransform:e=>{const t=E.find((t=>[t.value,t.formattedValue].includes(e)));return t?t.textLabel:e},saveTransform:pe,messages:{added:(0,u.sprintf)(/* translators: %s is the attribute label. */ /* translators: %s is the attribute label. */
(0,u.__)("%s filter added.","woocommerce"),b.label),removed:(0,u.sprintf)(/* translators: %s is the attribute label. */ /* translators: %s is the attribute label. */
(0,u.__)("%s filter removed.","woocommerce"),b.label),remove:(0,u.sprintf)(/* translators: %s is the attribute label. */ /* translators: %s is the attribute label. */
(0,u.__)("Remove %s filter.","woocommerce"),b.label.toLocaleLowerCase()),__experimentalInvalid:(0,u.sprintf)(/* translators: %s is the attribute label. */ /* translators: %s is the attribute label. */
(0,u.__)("Invalid %s filter.","woocommerce"),b.label.toLocaleLowerCase())}}),ye&&(0,o.createElement)(l.A,{icon:J.A,size:30})):(0,o.createElement)(be,{options:E,checked:h,onChange:Z,isLoading:fe,isDisabled:fe})),(0,o.createElement)("div",{className:"wc-block-attribute-filter__actions"},(h.length>0||t)&&!fe&&(0,o.createElement)(K,{onClick:()=>{w([]),f(ie()),d&&O([])},screenReaderLabel:(0,u.__)("Reset attribute filter","woocommerce")}),e.showFilterButton&&(0,o.createElement)(H,{className:"wc-block-attribute-filter__button",isLoading:fe,disabled:(()=>{if(we||_e)return!0;const e=de(b);return e.length===h.length&&h.every((t=>e.includes(t)))})(),onClick:()=>O(h)})))};r(8035);const we=({clientId:e,setAttributes:t,filterType:r,attributes:l})=>{const{replaceBlock:c}=(0,q.useDispatch)("core/block-editor"),{heading:s,headingLevel:i}=l;if((0,q.useSelect)((t=>{const{getBlockParentsByBlockName:r}=t("core/block-editor");return r(e,"woocommerce/filter-wrapper").length>0}),[e])||!r)return null;const m=[(0,o.createElement)(p.Button,{key:"convert",onClick:()=>{const o=[(0,n.createBlock)(`woocommerce/${r}`,{...l,heading:""})];s&&""!==s&&o.unshift((0,n.createBlock)("core/heading",{content:s,level:null!=i?i:2})),c(e,(0,n.createBlock)("woocommerce/filter-wrapper",{heading:s,filterType:r},[...o])),t({heading:"",lock:{remove:!0}})},variant:"primary"},(0,u.__)("Upgrade block","woocommerce"))];return(0,o.createElement)(a.Warning,{actions:m},(0,u.__)("Filter block: We have improved this block to make styling easier. Upgrade it using the button below.","woocommerce"))},_e=(0,P.getSetting)("attributes",[]),fe={noAttributes:(0,u.__)("Please select an attribute to use this filter!","woocommerce"),noProducts:(0,u.__)("There are no products with the selected attributes.","woocommerce")},ye=e=>{const t=fe[e];return t?(0,o.createElement)(p.Notice,{status:"warning",isDismissible:!1},(0,o.createElement)("p",null,t)):null},Ee=(0,p.withSpokenMessages)((({attributes:e,setAttributes:t,debouncedSpeak:r,clientId:n})=>{const{attributeId:b,displayStyle:g,heading:h,headingLevel:w,isPreview:_,queryType:f,showCounts:y,showFilterButton:E,selectType:v}=e,[k,C]=(0,m.useState)(!b&&!_),x=(0,a.useBlockProps)(),S=e=>{if(!e||!e.length)return;const r=e[0].id;_e.find((e=>e.attribute_id===r.toString()))&&b!==r&&t({attributeId:r})},N=({isCompact:e})=>{const t={clear:(0,u.__)("Clear selected attribute","woocommerce"),list:(0,u.__)("Product Attributes","woocommerce"),noItems:(0,u.__)("Your store doesn't have any product attributes.","woocommerce"),search:(0,u.__)("Search for a product attribute:","woocommerce"),selected:e=>(0,u.sprintf)(/* translators: %d is the number of attributes selected. */ /* translators: %d is the number of attributes selected. */
(0,u._n)("%d attribute selected","%d attributes selected",e,"woocommerce"),e),updated:(0,u.__)("Product attribute search results updated.","woocommerce")},r=(0,i.di)(_e.map((e=>({id:parseInt(e.attribute_id,10),name:e.attribute_label})))).asc("name");return(0,o.createElement)(L,{className:"woocommerce-product-attributes",list:r,selected:r.filter((({id:e})=>e===b)),onChange:S,messages:t,isSingle:!0,isCompact:e})};return 0===Object.keys(_e).length?(0,o.createElement)(p.Placeholder,{className:"wc-block-attribute-filter",icon:(0,o.createElement)(l.A,{icon:c.A}),label:(0,u.__)("Filter by Attribute","woocommerce"),instructions:(0,u.__)("Display a list of filters based on the selected attributes.","woocommerce")},(0,o.createElement)("p",null,(0,u.__)("Attributes are needed for filtering your products. You haven't created any attributes yet.","woocommerce")),(0,o.createElement)(p.Button,{className:"wc-block-attribute-filter__add-attribute-button",variant:"secondary",href:(0,P.getAdminLink)("edit.php?post_type=product&page=product_attributes"),target:"_top"},(0,u.__)("Add new attribute","woocommerce")+" ",(0,o.createElement)(l.A,{icon:d.A})),(0,o.createElement)(p.Button,{className:"wc-block-attribute-filter__read_more_button",variant:"tertiary",href:"https://woocommerce.com/document/managing-product-taxonomies/",target:"_blank"},(0,u.__)("Learn more","woocommerce"))):(0,o.createElement)("div",{...x},(0,o.createElement)(a.BlockControls,null,(0,o.createElement)(p.ToolbarGroup,{controls:[{icon:"edit",title:(0,u.__)("Edit","woocommerce"),onClick:()=>C(!k),isActive:k}]})),(0,o.createElement)(a.InspectorControls,{key:"inspector"},(0,o.createElement)(p.PanelBody,{title:(0,u.__)("Display Settings","woocommerce")},(0,o.createElement)(p.ToggleControl,{label:(0,u.__)("Display product count","woocommerce"),checked:y,onChange:()=>t({showCounts:!y})}),(0,o.createElement)(p.__experimentalToggleGroupControl,{label:(0,u.__)("Allow selecting multiple options?","woocommerce"),value:v||"multiple",onChange:e=>t({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:"multiple",label:(0,u._x)("Multiple","Number of filters","woocommerce")}),(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:"single",label:(0,u._x)("Single","Number of filters","woocommerce")})),"multiple"===v&&(0,o.createElement)(p.__experimentalToggleGroupControl,{label:(0,u.__)("Filter Conditions","woocommerce"),help:"and"===f?(0,u.__)("Choose to return filter results for all of the attributes selected.","woocommerce"):(0,u.__)("Choose to return filter results for any of the attributes selected.","woocommerce"),value:f,onChange:e=>t({queryType:e}),className:"wc-block-attribute-filter__conditions-toggle"},(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:"or",label:(0,u.__)("Any","woocommerce")}),(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:"and",label:(0,u.__)("All","woocommerce")})),(0,o.createElement)(p.__experimentalToggleGroupControl,{label:(0,u.__)("Display Style","woocommerce"),value:g,onChange:e=>t({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:"list",label:(0,u.__)("List","woocommerce")}),(0,o.createElement)(p.__experimentalToggleGroupControlOption,{value:"dropdown",label:(0,u.__)("Dropdown","woocommerce")})),(0,o.createElement)(p.ToggleControl,{label:(0,u.__)("Show 'Apply filters' button","woocommerce"),help:(0,u.__)("Products will update when the button is clicked.","woocommerce"),checked:E,onChange:e=>t({showFilterButton:e})})),(0,o.createElement)(p.PanelBody,{title:(0,u.__)("Content Settings","woocommerce"),initialOpen:!1},N({isCompact:!0}))),(0,o.createElement)(we,{clientId:n,attributes:e,setAttributes:t,filterType:"attribute-filter"}),k?(0,o.createElement)(p.Placeholder,{className:"wc-block-attribute-filter",icon:(0,o.createElement)(l.A,{icon:c.A}),label:(0,u.__)("Filter by Attribute","woocommerce")},(0,o.createElement)("div",{className:"wc-block-attribute-filter__instructions"},(0,u.__)("Display a list of filters based on the selected attributes.","woocommerce")),(0,o.createElement)("div",{className:"wc-block-attribute-filter__selection"},N({isCompact:!1}),(0,o.createElement)(p.Button,{variant:"primary",onClick:()=>{C(!1),r((0,u.__)("Now displaying a preview of the Filter Products by Attribute block.","woocommerce"))}},(0,u.__)("Done","woocommerce")))):(0,o.createElement)("div",{className:(0,s.A)("wc-block-attribute-filter")},h&&(0,o.createElement)(F,{className:"wc-block-attribute-filter__title",headingLevel:w,heading:h,onChange:e=>t({heading:e})}),(0,o.createElement)(p.Disabled,null,(0,o.createElement)(he,{attributes:e,isEditor:!0,getNotice:ye}))))})),ve={heading:{type:"string",default:(0,u.__)("Filter by attribute","woocommerce")}},ke=JSON.parse('{"name":"woocommerce/attribute-filter","version":"1.0.0","title":"Filter by Attribute Controls","description":"Enable customers to filter the product grid by selecting one or more attributes, such as color.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"color":{"text":true,"background":false},"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"attributeId":{"type":"number","default":0},"showCounts":{"type":"boolean","default":false},"queryType":{"type":"string","default":"or"},"headingLevel":{"type":"number","default":3},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":3,"$schema":"https://schemas.wp.org/trunk/block.json"}'),Ce=[{supports:{...ke.supports,__experimentalBorder:{radius:!1,color:!0,width:!1}},attributes:{...ke.attributes,showCounts:{type:"boolean",default:!0},...ve},save:({attributes:e})=>{const{className:t,showCounts:r,queryType:n,attributeId:l,heading:c,headingLevel:i,displayStyle:u,showFilterButton:m,selectType:d}=e,p={"data-attribute-id":l,"data-show-counts":r,"data-query-type":n,"data-heading":c,"data-heading-level":i};return"list"!==u&&(p["data-display-style"]=u),m&&(p["data-show-filter-button"]=m),"single"===d&&(p["data-select-type"]=d),(0,o.createElement)("div",{...a.useBlockProps.save({className:(0,s.A)("is-loading",t)}),...p},(0,o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-attribute-filter__placeholder"}))}}];(0,n.registerBlockType)(ke,{apiVersion:3,icon:{src:(0,o.createElement)(l.A,{icon:c.A,className:"wc-block-editor-components-block-icon"})},supports:{...ke.supports},attributes:{...ke.attributes,...ve},edit:Ee,save({attributes:e}){const{className:t}=e;return(0,o.createElement)("div",{...a.useBlockProps.save({className:(0,s.A)("is-loading",t)})})},deprecated:Ce})},5400:()=>{},1626:()=>{},8335:()=>{},1504:()=>{},243:()=>{},8035:()=>{},3399:()=>{},4302:()=>{},8137:()=>{},6636:()=>{},1609:e=>{"use strict";e.exports=window.React},8468:e=>{"use strict";e.exports=window.lodash},195:e=>{"use strict";e.exports=window.wp.a11y},9491:e=>{"use strict";e.exports=window.wp.compose},4040:e=>{"use strict";e.exports=window.wp.deprecated},8107:e=>{"use strict";e.exports=window.wp.dom},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},923:e=>{"use strict";e.exports=window.wp.isShallowEqual},8558:e=>{"use strict";e.exports=window.wp.keycodes},5573:e=>{"use strict";e.exports=window.wp.primitives},979:e=>{"use strict";e.exports=window.wp.warning}},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,a),r.exports}a.m=o,e=[],a.O=(t,r,o,n)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,o,n]=e[u],c=!0,s=0;s<r.length;s++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(c=!1,n<l&&(l=n));if(c){e.splice(u--,1);var i=o();void 0!==i&&(t=i)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);a.r(n);var l={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>l[t]=()=>e[t]));return l.default=()=>e,a.d(n,l),n},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=2432,(()=>{var e={2432:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[l,c,s]=r,i=0;if(l.some((t=>0!==e[t]))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(s)var u=s(a)}for(t&&t(r);i<l.length;i++)n=l[i],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=a.O(void 0,[94],(()=>a(4767)));l=a.O(l),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["attribute-filter"]=l})();