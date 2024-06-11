import{x as V,_ as w,b as _,o as e,c as o,F as k,h as $,j as y,g as P,t as f,f as m,a as n,O as S,a6 as T,n as x,d as c,w as I,Q as L,U as R,aa as B,ab as C,B as U,bs as F,u as z,v as E,D as K,aY as j,aS as q,bt as H,bu as M,bv as Q,e as X,bw as Y,bx as G,by as J,G as W}from"./index-6dc36896.js";import{D as N,C as Z,E as ee}from"./CloseButton-3f01b06f.js";import{A as te}from"./arrow-right-0785f3ac.js";import{T as oe}from"./trash-c1de9387.js";const se=V({components:{ArrowIcon:te},props:{links:{type:Array,default:()=>[]}}});const ne={key:0,class:"link-list"},ie=["href"];function ae(t,r,s,l,h,u){const p=_("ArrowIcon");return t.links&&t.links.length?(e(),o("ul",ne,[(e(!0),o(k,null,$(t.links,(a,d)=>(e(),o("li",{key:d},[a.url?(e(),o("a",{key:0,href:a.url,rel:"ugc noopener"},[y(p),P(" "+f(a.text||a.url),1)],8,ie)):m("",!0)]))),128))])):m("",!0)}const re=w(se,[["render",ae],["__scopeId","data-v-3bea4bbf"]]),le={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#000",viewBox:"0 0 32 32"},de=n("circle",{cx:"16",cy:"16",r:"12.92"},null,-1),ce=n("path",{d:"M8.499 15.934H24.48M15.99 23.991V8.009"},null,-1),ue=[de,ce];function pe(t,r){return e(),o("svg",le,ue)}const _e={render:pe},A=t=>(z("data-v-4c7ccb5e"),t=t(),E(),t),me={class:"external-resources-list"},he={key:1,class:"placeholder"},ye={class:"edit-link-header"},ve={class:"edit-link-text"},fe={key:0,class:"item-error"},ge=A(()=>n("span",null,"Text is required",-1)),ke=[ge],we={class:"edit-link-url"},$e={key:0,class:"item-error"},be=A(()=>n("span",null,"Invalid URL",-1)),De=[be],Ie=V({__name:"ExternalResourcesList",props:{modelValue:{},editable:{type:Boolean,default:!1}},emits:["valid","update:modelValue"],setup(t,{emit:r}){const s=t,l=F(!0),h=i=>l.test(i),u=S(()=>s.modelValue.some(({url:i,text:g})=>!h(i)||!g));T(u,()=>{r("valid",!u.value)},{immediate:!0});const p=()=>{r("update:modelValue",s.modelValue.concat({text:"",url:""}))},a=i=>{r("update:modelValue",s.modelValue.filter((g,D)=>D!==i))},d=(i,g,D)=>{r("update:modelValue",s.modelValue.map((v,b)=>D===b?{...v,[i]:g}:v))};return(i,g)=>(e(),o("div",me,[n("h2",{class:x(["section",{form:i.editable}])},"External resources",2),i.editable?(e(),o(k,{key:1},[(e(!0),o(k,null,$(i.modelValue,(D,v)=>(e(),o("div",{key:v,class:"edit-link"},[n("div",ye,[P(" Link "+f(v+1)+" ",1),y(R,{class:"delete-link-btn",onClick:b=>a(v)},{default:I(()=>[y(L(oe))]),_:2},1032,["onClick"])]),n("div",ve,[y(C,{text:"Text",compact:""},{default:I(()=>[n("div",null,[y(B,{"model-value":i.modelValue[v].text,type:"text",title:"Text","onUpdate:modelValue":b=>d("text",b,v)},null,8,["model-value","onUpdate:modelValue"]),i.modelValue[v].text?m("",!0):(e(),o("div",fe,ke))])]),_:2},1024)]),n("div",we,[y(C,{text:"URL",compact:""},{default:I(()=>[n("div",null,[y(B,{"model-value":i.modelValue[v].url,type:"text",title:"URL","onUpdate:modelValue":b=>d("url",b,v)},null,8,["model-value","onUpdate:modelValue"]),h(i.modelValue[v].url)?m("",!0):(e(),o("div",$e,De))])]),_:2},1024)])]))),128)),y(U,{class:"add-link-btn","with-border":"",compact:"",onClick:p},{default:I(()=>[y(L(_e)),P(" Add external resource ")]),_:1})],64)):(e(),o(k,{key:0},[i.modelValue.length?(e(),c(re,{key:0,links:i.modelValue},null,8,["links"])):(e(),o("div",he,"No links have been added yet"))],64))]))}});const Pe=w(Ie,[["__scopeId","data-v-4c7ccb5e"]]);const xe={props:{text:{type:String,default:""},padded:{type:Boolean,default:!1}}};function Ve(t,r,s,l,h,u){return e(),o("div",{class:x(["placeholder",{padded:s.padded}])},f(s.text),3)}const Ne=w(xe,[["render",Ve],["__scopeId","data-v-2a48393e"]]),Le={class:"description"},Be=["data-replicated-value"],Ce=["readonly","value"],Te=V({__name:"MetadataDescription",props:{originalDescription:{},editable:{type:Boolean,default:!1},modelValue:{default:""}},emits:["update:modelValue"],setup(t){const r=t,s=K(null);return T(q(r,"editable"),async l=>{l&&(await j(),s.value.focus())}),(l,h)=>(e(),o("div",Le,[!l.originalDescription&&!l.editable?(e(),c(Ne,{key:0,padded:"",text:"No description has been set yet"})):(e(),o("div",{key:1,class:"grow-wrap","data-replicated-value":l.modelValue},[n("textarea",{ref_key:"editor",ref:s,class:x(["description-editor",{editable:l.editable}]),readonly:!l.editable,value:l.modelValue,onInput:h[0]||(h[0]=u=>l.$emit("update:modelValue",u.target.value))},null,42,Ce)],8,Be))]))}});const ze=w(Te,[["__scopeId","data-v-fe47dc0d"]]),Ee={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#000","stroke-linejoin":"round",viewBox:"0 0 32 32"},Me=n("path",{d:"M13.2 6.2c-3.8 2.1-5.1 7-3 10.8s7 5.1 10.8 3l4.4-2.6-7.8-13.7-4.4 2.5zm6.9 1.9 5.7-3.2m-2.9 8.2 5.7-3.2M10.2 17c-1.9 1.1-7.3 1.8-5.1 5.9s-1.7 5.4-1.7 5.4"},null,-1),Ae=[Me];function Oe(t,r){return e(),o("svg",Ee,Ae)}const Se={render:Oe},Re={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#000","stroke-linejoin":"round",viewBox:"0 0 32 32"},Ue=n("path",{d:"M7 13.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.2-2.5-2.5-2.5zm9 5.1c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm9-6.8c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zm-9 11.5v4m0-22.6v14.1m-9-.5v9M7 4.7v9m18 2.8v10.8m0-22.6V12"},null,-1),Fe=[Ue];function Ke(t,r){return e(),o("svg",Re,Fe)}const je={render:Ke};const qe={components:{Description:N,PortIcon:H},props:{ports:{type:Array,default:()=>[]},title:{type:String,default:"Input ports"},groupDescription:{type:String,default:null}},computed:{dynamicPorts(){return Boolean(this.groupDescription)}}},He={class:"wrapper"},Qe={class:"content"},Xe={viewBox:"-4.5 -4.5 9 9",width:"12",height:"12"},Ye={key:0,class:"port-name"};function Ge(t,r,s,l,h,u){const p=_("Description"),a=_("PortIcon");return e(),o("div",He,[n("h6",null,f(s.title),1),n("div",Qe,[u.dynamicPorts?(e(),c(p,{key:0,text:s.groupDescription,"render-as-html":"",class:"dyn-ports-description"},null,8,["text"])):m("",!0),n("ol",null,[(e(!0),o(k,null,$(s.ports,(d,i)=>(e(),o("li",{key:i},[(e(),o("svg",Xe,[y(a,{color:d.color,filled:!d.optional,type:d.type},null,8,["color","filled","type"])])),n("div",{class:x(["port-type",{fat:!u.dynamicPorts}])}," Type: "+f(d.typeName),3),!u.dynamicPorts&&d.name?(e(),o("div",Ye,f(d.name),1)):m("",!0),!u.dynamicPorts&&d.description?(e(),c(p,{key:1,text:d.description,"render-as-html":"",class:"port-description"},null,8,["text"])):m("",!0)]))),128))])])])}const Je=w(qe,[["render",Ge],["__scopeId","data-v-ad3c66fa"]]),We={components:{PortGroup:Je},props:{inPorts:{type:Array,default:()=>[]},outPorts:{type:Array,default:()=>[]},dynInPorts:{type:Array,default:()=>[]},dynOutPorts:{type:Array,default:()=>[]}},computed:{hasPorts(){return this.inPorts.length>0||this.outPorts.length>0||this.dynInPorts.length>0||this.dynOutPorts.length>0}}},Ze={key:0,class:"ports-list"};function et(t,r,s,l,h,u){const p=_("PortGroup");return u.hasPorts?(e(),o("div",Ze,[s.inPorts.length?(e(),c(p,{key:0,class:"inports",title:"Input ports",ports:s.inPorts},null,8,["ports"])):m("",!0),s.outPorts.length?(e(),c(p,{key:1,class:"outports",title:"Output ports",ports:s.outPorts},null,8,["ports"])):m("",!0),(e(!0),o(k,null,$(s.dynInPorts,a=>(e(),c(p,{key:a.groupName,title:a.groupName+" (Dynamic Inport)","group-description":a.groupDescription,ports:a.types},null,8,["title","group-description","ports"]))),128)),(e(!0),o(k,null,$(s.dynOutPorts,a=>(e(),c(p,{key:a.groupName,title:a.groupName+" (Dynamic Outport)","group-description":a.groupDescription,ports:a.types},null,8,["title","group-description","ports"]))),128))])):m("",!0)}const tt=w(We,[["render",et]]),ot={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"#000","stroke-linejoin":"round",viewBox:"0 0 32 32"},st=n("path",{d:"m31.1 27.1-3.9-3.9 3.2-3.1-15.2-5.7 5.6 15.2 3.2-3.1 3.9 3.9zM18 13.4c0-2.4-1.9-4.3-4.3-4.3m7.6 4.3c0-4.2-3.4-7.6-7.6-7.6m10.9 7.6c0-6-4.9-10.9-10.9-10.9m-4 10.6c0 2.4 1.9 4.3 4.3 4.3m-7.6-4.3c0 4.2 3.4 7.6 7.6 7.6M3.1 13.1C3.1 19.1 8 24 14 24"},null,-1),nt=[st];function it(t,r){return e(),o("svg",ot,nt)}const at={render:it};const rt={components:{Description:N,StandardIcon:M,InteractiveIcon:at},props:{views:{type:Array,default:()=>[]}}},lt={key:0,class:"views-list"},dt={class:"content"},ct={class:"name"};function ut(t,r,s,l,h,u){const p=_("InteractiveIcon"),a=_("StandardIcon"),d=_("Description");return s.views.length?(e(),o("ul",lt,[(e(!0),o(k,null,$(s.views,(i,g)=>(e(),o("li",{key:g},[n("h6",null,[i.interactive?(e(),c(p,{key:0,class:"interactive"})):(e(),c(a,{key:1})),n("span",null,f(i.interactive?"Interactive":"Standard"),1)]),n("div",dt,[n("span",ct,f(i.name),1),y(d,{text:i.description,"render-as-html":""},null,8,["text"])])]))),128))])):m("",!0)}const pt=w(rt,[["render",ut],["__scopeId","data-v-c9666d01"]]);const _t={components:{Collapser:Q,Description:N},props:{options:{type:Array,default:()=>[]},sanitizeContent:{type:Boolean,default:!1}},computed:{renderableOptions(){return this.options.filter(t=>t.fields&&t.fields.length||t.sectionDescription)}}},mt={key:0,class:"dialog-options"},ht={class:"panel"},yt={class:"option-field-name"},vt={key:0,class:"optional"};function ft(t,r,s,l,h,u){const p=_("Description");return u.renderableOptions.length?(e(),o("div",mt,[(e(!0),o(k,null,$(u.renderableOptions,(a,d)=>(e(),c(X(a.sectionName?"Collapser":"div"),{key:d,class:x(["options",{"with-section":a.sectionName}]),"initially-expanded":s.options.length===1},{title:I(()=>[n("h5",null,f(a.sectionName),1)]),default:I(()=>[a.sectionDescription?(e(),c(p,{key:0,text:a.sectionDescription,"render-as-html":!s.sanitizeContent,class:"section-description"},null,8,["text","render-as-html"])):m("",!0),n("ul",ht,[(e(!0),o(k,null,$(a.fields,(i,g)=>(e(),o("li",{key:g},[n("p",yt,[P(f(i.name)+" ",1),i.optional?(e(),o("span",vt," (optional) ")):m("",!0)]),y(p,{class:"option-description",text:i.description,"render-as-html":!s.sanitizeContent},null,8,["text","render-as-html"])]))),128))])]),_:2},1032,["class","initially-expanded"]))),128))])):m("",!0)}const gt=w(_t,[["render",ft],["__scopeId","data-v-8e9d9ed1"]]);const kt={components:{TabBar:Y,DialogOptions:gt,PortsList:tt,ViewsList:pt},props:{inPorts:{type:Array,default:()=>[]},outPorts:{type:Array,default:()=>[]},dynInPorts:{type:Array,default:()=>[]},dynOutPorts:{type:Array,default:()=>[]},options:{type:Array,default:()=>[]},views:{type:Array,default:()=>[]},emptyText:{type:String,default:"This node does not provide any ports, options or views."},sanitizeContent:{type:Boolean,default:!1}},data(){return{activeTab:null}},computed:{hasPorts(){return this.inPorts.length>0||this.outPorts.length>0||this.dynInPorts.length>0||this.dynOutPorts.length>0},possibleTabValues(){return[{value:"ports",label:"Ports",icon:Se,disabled:!this.hasPorts},{value:"node-dialog-options",label:"Options",icon:je,disabled:this.options.length===0},{value:"views",label:"Views",icon:M,disabled:this.views.length===0}]}}},wt={class:"feature-list"},$t={key:3,class:"placeholder"};function bt(t,r,s,l,h,u){const p=_("TabBar"),a=_("PortsList"),d=_("DialogOptions"),i=_("ViewsList");return e(),o("div",wt,[y(p,{modelValue:h.activeTab,"onUpdate:modelValue":r[0]||(r[0]=g=>h.activeTab=g),"possible-values":u.possibleTabValues,name:"feature"},null,8,["modelValue","possible-values"]),(e(),c(G,null,[h.activeTab==="ports"?(e(),c(a,{key:0,"in-ports":s.inPorts,"out-ports":s.outPorts,"dyn-in-ports":s.dynInPorts,"dyn-out-ports":s.dynOutPorts},null,8,["in-ports","out-ports","dyn-in-ports","dyn-out-ports"])):h.activeTab==="node-dialog-options"?(e(),c(d,{key:1,"sanitize-content":s.sanitizeContent,options:s.options},null,8,["sanitize-content","options"])):h.activeTab==="views"?(e(),c(i,{key:2,views:s.views},null,8,["views"])):(e(),o("p",$t,f(s.emptyText),1))],1024))])}const Dt=w(kt,[["render",bt],["__scopeId","data-v-9ffb8c2f"]]),It={xmlns:"http://www.w3.org/2000/svg",width:"274",height:"237",fill:"#FFD800","shape-rendering":"geometricPrecision",viewBox:"0 0 273.663 236.999"},Pt=n("path",{d:"M136.837 0 0 236.999h273.663L136.837 0zm-31.158 208.718v-90.484l2.807-12.56 78.366 45.229 9.476 8.72-78.373 45.249-12.276 3.846zm3.988-108.324 3.796-16.972 55.982 51.475-59.778-34.503zm-9.145 109.942-16.594 5.198 16.594-74.219v69.021zm99.788-47.054 12.803 11.772-72.587 22.743 59.784-34.515zm-84.476-86.444 5.381-14.248 63.484 77.572-68.865-63.324zM77.042 216.773l-15.032 2.458 35.443-93.772-20.411 91.314zm140.585-36.374 9.645 11.781-98.927 16.194 89.282-27.975zM123.411 53.048l5.594-11.4 67.77 101.046-73.364-89.646zM52.647 222.102l-12.67.855L93.61 113.734 52.647 222.102zm181.792-23.247 7.072 10.545-121.396 8.167 114.324-18.712zm-29.317-59.924L131.726 29.489l5.111-8.846 68.285 118.288zM86.166 108.4 28.089 226.681H17.875L86.166 108.4zm32.992 118.281 131.519-8.848 5.11 8.848H119.158z"},null,-1),xt=[Pt];function Vt(t,r){return e(),o("svg",It,xt)}const Nt={render:Vt},Lt=V({components:{Description:N,NodeFeatureList:Dt,ExternalResourcesList:Pe,CloseButton:Z,MetadataDescription:ze,ExtensionIcon:ee,KNIMETriangleIcon:Nt},props:{selectedNode:{type:Object,default:null},showCloseButton:{type:Boolean,default:!1},isComponent:{type:Boolean,default:!1}},emits:["close"],data(){return{descriptionData:null}},computed:{title(){return this.selectedNode?this.selectedNode.name:""}},watch:{selectedNode:{immediate:!0,async handler(){const{selectedNode:t}=this;if(t!==null){if(this.isComponent){await this.loadComponentDescription();return}await this.loadNodeDescription(),J({DESKTOP:()=>{this.redirectLinks(W.desktop.openUrlInExternalBrowser)}})}}}},methods:{async loadNodeDescription(){this.descriptionData=await this.$store.dispatch("nodeRepository/getNodeDescription",{selectedNode:this.selectedNode})},async loadComponentDescription(){const t=await this.$store.dispatch("nodeRepository/getComponentDescription",{nodeId:this.selectedNode.id});this.descriptionData={...t,description:t.description.value}},async redirectLinks(t){await this.$nextTick();const r=document.querySelector("#node-description-html");r&&r.querySelectorAll("a").forEach(s=>{s.addEventListener("click",l=>(l.preventDefault(),t({url:s.href}),!1))})}}});const O=t=>(z("data-v-f34730cd"),t=t(),E(),t),Bt={class:"node-description"},Ct={class:"node-header"},Tt={class:"header-content"},zt=O(()=>n("hr",null,null,-1)),Et={class:"node-info"},Mt={key:1,class:"placeholder"},At={key:3,class:"extension-info"},Ot={class:"header"},St=O(()=>n("span",null,"Extension",-1)),Rt={class:"extension-name"},Ut={class:"extension-vendor"},Ft={key:1,class:"placeholder no-node"};function Kt(t,r,s,l,h,u){const p=_("CloseButton"),a=_("MetadataDescription"),d=_("Description"),i=_("ExternalResourcesList"),g=_("NodeFeatureList"),D=_("ExtensionIcon"),v=_("KNIMETriangleIcon");return e(),o("div",Bt,[n("div",Ct,[n("div",Tt,[n("h2",null,f(t.title),1),t.showCloseButton?(e(),c(p,{key:0,class:"close-button",onClose:r[0]||(r[0]=b=>t.$emit("close"))})):m("",!0)]),zt]),n("div",Et,[t.selectedNode?(e(),o(k,{key:0},[t.descriptionData?(e(),o(k,{key:0},[t.descriptionData.description?(e(),o(k,{key:0},[t.isComponent?(e(),c(a,{key:0,"original-description":t.descriptionData.description,"model-value":t.descriptionData.description},null,8,["original-description","model-value"])):(e(),c(d,{key:1,id:"node-description-html",text:t.descriptionData.description,"render-as-html":""},null,8,["text"]))],64)):(e(),o("span",Mt," There is no description for this node. ")),t.descriptionData.links?(e(),c(i,{key:2,"model-value":t.descriptionData.links},null,8,["model-value"])):m("",!0),y(g,{"in-ports":t.descriptionData.inPorts,"dyn-in-ports":t.descriptionData.dynInPorts,"out-ports":t.descriptionData.outPorts,"dyn-out-ports":t.descriptionData.dynOutPorts,views:t.descriptionData.views,options:t.descriptionData.options,class:"node-feature-list"},null,8,["in-ports","dyn-in-ports","out-ports","dyn-out-ports","views","options"]),t.descriptionData.extension?(e(),o("div",At,[n("div",Ot,[y(D,{class:"icon"}),St]),n("div",Rt,f(t.descriptionData.extension.name),1),n("div",Ut,[P(" provided by "+f(t.descriptionData.extension.vendor.name)+" ",1),t.descriptionData.extension.vendor.isKNIME?(e(),c(v,{key:0,class:"knime-icon"})):m("",!0)])])):m("",!0)],64)):m("",!0)],64)):(e(),o("div",Ft,"Please select a node"))])])}const Xt=w(Lt,[["render",Kt],["__scopeId","data-v-f34730cd"]]);export{Pe as E,Nt as K,Ne as M,Dt as N,ze as a,Xt as b};