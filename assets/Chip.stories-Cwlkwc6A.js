import{j as e,c as r}from"./useFocusRing-CVnp8mQS.js";import{f as a}from"./index-BEO02Wfb.js";import{$ as W}from"./Button-Efs677zK.js";import"./index-D4lIrffr.js";import"./Hidden-DXnoxMTA.js";import"./usePress-kqvJBuj3.js";import"./index-DsJinFGm.js";const Oe=({className:t})=>e.jsx("svg",{className:t,fill:"currentColor",viewBox:"0 0 20 20","aria-hidden":"true",children:e.jsx("path",{d:"M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"})});function n({className:t,label:We,variant:y="solid",size:l="base",onDelete:S,onClick:k,startIcon:w,endIcon:N}){const T="inline-flex items-center gap-1.5 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",B={sm:"px-2.5 py-1 text-xs rounded-full",base:"px-3 py-1.5 text-sm rounded-full"},R={solid:"bg-gray-200 text-gray-800 hover:bg-gray-300",outlined:"border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"},z=N||S&&e.jsx(W,{onPress:S,className:"ml-1 p-0.5 rounded-full hover:bg-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors","aria-label":"Delete",children:e.jsx(Oe,{className:r(l==="sm"?"w-3 h-3":"w-4 h-4")})}),E=e.jsxs(e.Fragment,{children:[w&&e.jsx("span",{className:r("flex-shrink-0",l==="sm"?"[&>*]:w-3 [&>*]:h-3":"[&>*]:w-4 [&>*]:h-4"),children:w}),e.jsx("span",{className:"truncate",children:We}),z&&e.jsx("span",{className:r("flex-shrink-0",!S||N?l==="sm"?"[&>*]:w-3 [&>*]:h-3":"[&>*]:w-4 [&>*]:h-4":""),children:z})]});return k?e.jsx(W,{onPress:k,className:r(T,B[l],R[y],"cursor-pointer",t),children:E}):e.jsx("div",{className:r(T,B[l],R[y],t),children:E})}n.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'outlined'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'base'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"}]},description:"",defaultValue:{value:"'base'",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Me=()=>e.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),O=()=>e.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",clipRule:"evenodd"})}),s=()=>e.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})}),Ee=()=>e.jsx("svg",{fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})}),Ue={title:"UI/Chip",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["solid","outlined"]},size:{control:{type:"select"},options:["sm","base"]},label:{control:{type:"text"}}},args:{onClick:a(),onDelete:a()}},o={args:{label:"Deletable"}},i={args:{label:"Deletable",variant:"solid",onDelete:a()}},c={args:{label:"Deletable",variant:"outlined",onDelete:a()}},d={args:{label:"Small Chip",size:"sm",onDelete:a()}},p={args:{label:"Base Chip",size:"base",onDelete:a()}},m={args:{label:"With Icon",startIcon:e.jsx(Me,{}),onDelete:a()}},u={args:{label:"Custom End",endIcon:e.jsx(Ee,{})}},b={args:{label:"End Icon Priority",onDelete:a(),endIcon:e.jsx(Ee,{})},parameters:{docs:{description:{story:"When both endIcon and onDelete are provided, endIcon takes priority and the delete button is not shown."}}}},x={args:{label:"Clickable Chip",onClick:a()}},f={args:{label:"Click & Delete",onClick:a(),onDelete:a()}},g={args:{label:"No Delete Button"}},h={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap items-center",children:[e.jsx(n,{label:"Solid",variant:"solid",onDelete:a()}),e.jsx(n,{label:"Outlined",variant:"outlined",onDelete:a()})]})},v={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap items-center",children:[e.jsx(n,{label:"Small",size:"sm",onDelete:a()}),e.jsx(n,{label:"Base",size:"base",onDelete:a()})]})},C={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap items-center",children:[e.jsx(n,{label:"Start Icon",startIcon:e.jsx(O,{}),onDelete:a()}),e.jsx(n,{label:"End Icon",endIcon:e.jsx(s,{})}),e.jsx(n,{label:"Both Icons",startIcon:e.jsx(O,{}),endIcon:e.jsx(s,{})}),e.jsx(n,{label:"Delete Only",onDelete:a()})]})},I={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap items-center",children:[e.jsx(n,{label:"Static"}),e.jsx(n,{label:"Clickable",onClick:a()}),e.jsx(n,{label:"Deletable",onDelete:a()}),e.jsx(n,{label:"Both Actions",onClick:a(),onDelete:a()})]})},D={render:()=>e.jsxs("div",{className:"flex gap-2 flex-wrap max-w-md",children:[e.jsx(n,{label:"React",variant:"solid",startIcon:e.jsx(s,{}),onDelete:a()}),e.jsx(n,{label:"TypeScript",variant:"outlined",startIcon:e.jsx(s,{}),onDelete:a()}),e.jsx(n,{label:"JavaScript",variant:"solid",startIcon:e.jsx(s,{}),onDelete:a()}),e.jsx(n,{label:"CSS",variant:"outlined",startIcon:e.jsx(s,{}),onDelete:a()}),e.jsx(n,{label:"HTML",variant:"solid",startIcon:e.jsx(s,{}),onDelete:a()}),e.jsx(n,{label:"Node.js",variant:"outlined",startIcon:e.jsx(s,{}),onDelete:a()})]}),parameters:{layout:"padded"}},j={render:()=>e.jsxs("div",{className:"flex gap-2 flex-wrap max-w-md",children:[e.jsx(n,{label:"All",variant:"solid",onClick:a()}),e.jsx(n,{label:"Frontend",variant:"outlined",onClick:a()}),e.jsx(n,{label:"Backend",variant:"outlined",onClick:a()}),e.jsx(n,{label:"Mobile",variant:"outlined",onClick:a()}),e.jsx(n,{label:"DevOps",variant:"outlined",onClick:a()})]}),parameters:{layout:"padded"}};var M,A,L;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Deletable'
  }
}`,...(L=(A=o.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var q,V,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Deletable',
    variant: 'solid',
    onDelete: fn()
  }
}`,...(H=(V=i.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var F,P,U;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Deletable',
    variant: 'outlined',
    onDelete: fn()
  }
}`,...(U=(P=c.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var _,$,J;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Small Chip',
    size: 'sm',
    onDelete: fn()
  }
}`,...(J=($=d.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var X,G,K;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Base Chip',
    size: 'base',
    onDelete: fn()
  }
}`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,Y,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'With Icon',
    startIcon: <StarIcon />,
    onDelete: fn()
  }
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,ne;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Custom End',
    endIcon: <HeartIcon />
  }
}`,...(ne=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,le,re;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'End Icon Priority',
    onDelete: fn(),
    endIcon: <HeartIcon />
  },
  parameters: {
    docs: {
      description: {
        story: 'When both endIcon and onDelete are provided, endIcon takes priority and the delete button is not shown.'
      }
    }
  }
}`,...(re=(le=b.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var te,oe,ie;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Clickable Chip',
    onClick: fn()
  }
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,de,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    label: 'Click & Delete',
    onClick: fn(),
    onDelete: fn()
  }
}`,...(pe=(de=f.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ue,be;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    label: 'No Delete Button'
  }
}`,...(be=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:be.source}}};var xe,fe,ge;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap items-center">
      <Chip label="Solid" variant="solid" onDelete={fn()} />
      <Chip label="Outlined" variant="outlined" onDelete={fn()} />
    </div>
}`,...(ge=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,ve,Ce;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap items-center">
      <Chip label="Small" size="sm" onDelete={fn()} />
      <Chip label="Base" size="base" onDelete={fn()} />
    </div>
}`,...(Ce=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var Ie,De,je;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap items-center">
      <Chip label="Start Icon" startIcon={<UserIcon />} onDelete={fn()} />
      <Chip label="End Icon" endIcon={<TagIcon />} />
      <Chip label="Both Icons" startIcon={<UserIcon />} endIcon={<TagIcon />} />
      <Chip label="Delete Only" onDelete={fn()} />
    </div>
}`,...(je=(De=C.parameters)==null?void 0:De.docs)==null?void 0:je.source}}};var Se,ye,ke;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap items-center">
      <Chip label="Static" />
      <Chip label="Clickable" onClick={fn()} />
      <Chip label="Deletable" onDelete={fn()} />
      <Chip label="Both Actions" onClick={fn()} onDelete={fn()} />
    </div>
}`,...(ke=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var we,Ne,Te;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap max-w-md">
      <Chip label="React" variant="solid" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="TypeScript" variant="outlined" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="JavaScript" variant="solid" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="CSS" variant="outlined" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="HTML" variant="solid" startIcon={<TagIcon />} onDelete={fn()} />
      <Chip label="Node.js" variant="outlined" startIcon={<TagIcon />} onDelete={fn()} />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(Te=(Ne=D.parameters)==null?void 0:Ne.docs)==null?void 0:Te.source}}};var Be,Re,ze;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div className="flex gap-2 flex-wrap max-w-md">
      <Chip label="All" variant="solid" onClick={fn()} />
      <Chip label="Frontend" variant="outlined" onClick={fn()} />
      <Chip label="Backend" variant="outlined" onClick={fn()} />
      <Chip label="Mobile" variant="outlined" onClick={fn()} />
      <Chip label="DevOps" variant="outlined" onClick={fn()} />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(ze=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};const _e=["Default","Solid","Outlined","Small","Base","WithStartIcon","WithEndIcon","EndIconOverridesDelete","Clickable","ClickableWithDelete","WithoutDelete","AllVariants","AllSizes","IconVariations","InteractiveStates","TagsExample","FiltersExample"];export{v as AllSizes,h as AllVariants,p as Base,x as Clickable,f as ClickableWithDelete,o as Default,b as EndIconOverridesDelete,j as FiltersExample,C as IconVariations,I as InteractiveStates,c as Outlined,d as Small,i as Solid,D as TagsExample,u as WithEndIcon,m as WithStartIcon,g as WithoutDelete,_e as __namedExportsOrder,Ue as default};
