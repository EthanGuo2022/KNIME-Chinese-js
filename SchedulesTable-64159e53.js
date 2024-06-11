import{p as t,f as _,_ as I,I as j}from"./JobsTable.vue_vue_type_script_setup_true_lang-b7e10464.js";import{x as T,D as d,O as m,o as S,c as x,j as E,w as k,d as O,as as A,Q as c,u as P,v as C,a as F,_ as D}from"./index-6dc36896.js";const N=e=>{if(!e?.startTime)return"-";let s="Custom interval";try{if(!e?.filter&&!e?.delay)return"Once";const r=e.delayType.toLowerCase(),n=e.delay===1&&r.endsWith("s")?r.slice(0,-1):r;let l;e.delay===1?n==="day"?l="Daily":n==="hour"?l="Hourly":l="Every minute":l=`Every ${e.delay} ${n}`;let a=!1;const f=Object.values(e.filter?.times?.[0]?.start)[0],h=Object.values(e.filter?.times?.[0]?.start)[1],p=f!==0||h!==0,b=Object.values(e.filter?.times?.[0]?.end)[0],v=Object.values(e.filter?.times?.[0]?.end)[1],y=Object.values(e.filter?.times?.[0]?.end)[2],i=b!==23||v!==59||y!==59;(e.filter?.times?.length>1||p||i||e.filter?.daysOfWeek?.length!==7||e.filter?.days?.length<31||e.filter?.days?.length===31&&Array.from(Array(31)).some((o,u)=>!e.filter?.days.includes(u+1))||e.filter?.months?.length!==12)&&(a=!0),a&&(l+=" with exceptions"),s=l}catch{}return s},B=["lastRun","nextScheduledExecution","user","schedule","disabled","id"],w={lastRun:"Last run",nextScheduledExecution:"Next run",targetName:"Workflow",workflowPath:"Workflow Path",user:"User",schedule:"Interval",inputParameters:"Parameters",reset:"Reset",discard:"Discard",numFailures:"Fail count",discardAfterSuccessfulExec:"Discard after success",discardAfterFailedExec:"Discard after fail",notifications:"Notifications",actions:"Actions",configurationWithPasswords:"Auth properties",lastJob:"Last job ID",configuration:"Configuration",disabled:"Status",id:"Schedule ID"},W={lastRun:t.DateTime,targetName:t.Nominal,workflowPath:t.String,user:t.Nominal,schedule:t.Object,nextScheduledExecution:t.DateTime,inputParameters:t.Object,numFailures:t.Number,reset:t.Boolean,discard:t.Boolean,discardAfterSuccessfulExec:t.Boolean,discardAfterFailedExec:t.Boolean,notifications:t.Object,actions:t.Array,configurationWithPasswords:t.Object,lastJob:t.String,configuration:t.Object,disabled:t.Boolean,id:t.String},$={numFailures:e=>e?`${e} Failures`:"-",schedule:e=>N(e),actions:e=>e?.length?`${e.length} Actions`:"-",disabled:e=>e?"Inactive":"Active",lastRun:e=>e?_(e):"",nextScheduledExecution:e=>_(e)},M={workflowPath:["workflow-path"]},R={schedule:!0,inputParameters:!0,notifications:!0,actions:!0,configurationWithPasswords:!0,configuration:!0,disabled:{type:"StringRenderer",process:e=>e?"Active":"Inactive"}},H=["status"],J=[{name:"edit",text:"Edit",callback:(e,s)=>{s.$store.dispatch("spaces/editSchedule",{scheduleId:e.id})}},{name:"delete",text:"Delete",callback:(e,s)=>{s.$store.dispatch("spaces/deleteSchedule",{scheduleId:e.id})}}],L=[],U=e=>(P("data-v-ceef58ae"),e=e(),C(),e),G={class:"modal-wrapper"},V=U(()=>F("h2",null,"Schedules",-1)),q={key:1,class:"empty-message"},z=T({__name:"SchedulesTable",props:{schedules:{},jobs:{}},setup(e){const s=e,r={showSorting:!0,showTimeFilter:!0,showSearch:!0,showColumnFilters:!0,showPopovers:!0,showCollapser:!0},n=d(W),l=d($),a=d(H),f=Object.values(w),h=d(Object.keys(w)),p=m(()=>r),b=m(()=>J),v=m(()=>L),y=m(()=>s.schedules.map(o=>({...o,nextScheduledExecution:o.schedule.nextScheduledExecution,disabled:o.schedule.disabled}))),i=o=>s.jobs.filter(u=>u.schedulerId===o);return(o,u)=>(S(),x("div",G,[V,E(c(j),A({ref:"schedulesTable","all-data":y.value,"all-column-headers":c(f),"all-column-keys":h.value,"all-column-types":n.value,"all-formatters":l.value,"all-class-generators":c(M),"all-slotted-columns":a.value,"all-popover-renderers":c(R),"default-columns":c(B),"sub-menu-items":b.value,"group-sub-menu-items":v.value},p.value),{collapserContent:k(({row:g})=>[g.data.id&&i(g.data.id).length?(S(),O(I,{key:0,"show-search":!1,"show-column-filters":!1,"page-size":5,"is-inside-schedule":!0,class:"table",jobs:i(g.data.id)},null,8,["jobs"])):(S(),x("div",q," No jobs available for this schedule. "))]),_:1},16,["all-data","all-column-headers","all-column-keys","all-column-types","all-formatters","all-class-generators","all-slotted-columns","all-popover-renderers","default-columns","sub-menu-items","group-sub-menu-items"])]))}});const X=D(z,[["__scopeId","data-v-ceef58ae"]]);export{X as default};