import{j as e,c as Ae}from"./useFocusRing-CVnp8mQS.js";import{$ as Ve}from"./Button-Efs677zK.js";import"./index-D4lIrffr.js";import"./Hidden-DXnoxMTA.js";import"./usePress-kqvJBuj3.js";import"./index-DsJinFGm.js";const r=({children:j,fullWidth:Ee=!1,variant:Le="primary",loading:I=!1,startIcon:S,endIcon:w,size:Ne="md",className:Te,disabled:ze,...We})=>{const Fe="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",Re={sm:"h-8 px-3 text-sm gap-1.5",md:"h-10 px-4 text-sm gap-2",lg:"h-12 px-6 text-base gap-2.5"},Ce={primary:"bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",outlined:"border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-600",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-600",text:"bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-600"},qe=Ee?"w-full":"",Pe=()=>e.jsxs("svg",{className:"animate-spin h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]});return e.jsx(Ve,{className:Ae(Fe,Re[Ne],Ce[Le],qe,Te),isDisabled:ze,isPending:I,...We,children:I?e.jsxs(e.Fragment,{children:[e.jsx(Pe,{}),j]}):e.jsxs(e.Fragment,{children:[S&&e.jsx("span",{className:"shrink-0",children:S}),j,w&&e.jsx("span",{className:"shrink-0",children:w})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'outlined' | 'secondary' | 'text'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'text'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},startIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},formAction:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: PressEvent) => void",signature:{arguments:[{type:{name:"PressEvent"},name:"e"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<Element, Element>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<Element, Element>",elements:[{name:"Element"},{name:"Element"}]},name:"e"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<Element, Element>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<Element, Element>",elements:[{name:"Element"},{name:"Element"}]},name:"e"}],return:{name:"void"}}},description:""},onFocusChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isFocused: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isFocused"}],return:{name:"void"}}},description:""}},composes:["Omit"]};const n=()=>e.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})}),b=()=>e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 8l4 4m0 0l-4 4m4-4H3"})}),He={title:"UI/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","outlined","secondary","text"]},size:{control:{type:"select"},options:["sm","md","lg"]},fullWidth:{control:{type:"boolean"}},loading:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},children:{control:{type:"text"}}}},a={args:{children:"Primary Button",variant:"primary"}},t={args:{children:"Outline Button",variant:"outlined"}},s={args:{children:"Secondary Button",variant:"secondary"}},o={args:{children:"Text Button",variant:"text"}},i={args:{children:"Small Button",size:"sm"}},c={args:{children:"Medium Button",size:"md"}},l={args:{children:"Large Button",size:"lg"}},d={args:{children:"With Icon",startIcon:e.jsx(n,{})}},u={args:{children:"Continue",endIcon:e.jsx(b,{})}},m={args:{children:"Both Icons",startIcon:e.jsx(n,{}),endIcon:e.jsx(b,{})}},p={args:{children:"Loading...",loading:!0}},g={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"primary",loading:!0,children:"Primary Loading"}),e.jsx(r,{variant:"outlined",loading:!0,children:"Outline Loading"}),e.jsx(r,{variant:"secondary",loading:!0,children:"Secondary Loading"}),e.jsx(r,{variant:"text",loading:!0,children:"Text Loading"})]})},h={args:{children:"Disabled Button",disabled:!0}},x={args:{children:"Full Width Button",fullWidth:!0},parameters:{layout:"padded"}},y={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"primary",children:"Primary"}),e.jsx(r,{variant:"outlined",children:"Outline"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"text",children:"Text"})]})},v={render:()=>e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})},f={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{startIcon:e.jsx(n,{}),children:"Start Icon"}),e.jsx(r,{endIcon:e.jsx(b,{}),children:"End Icon"}),e.jsx(r,{startIcon:e.jsx(n,{}),endIcon:e.jsx(b,{}),children:"Both Icons"}),e.jsx(r,{startIcon:e.jsx(n,{}),loading:!0,children:"Loading (replaces icons)"})]})},B={render:()=>e.jsxs("form",{className:"flex gap-4",children:[e.jsx(r,{type:"submit",variant:"primary",children:"Submit"}),e.jsx(r,{type:"reset",variant:"outlined",children:"Reset"}),e.jsx(r,{type:"button",variant:"text",children:"Cancel"})]})};var E,L,N;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...(N=(L=a.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var T,z,W;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outlined'
  }
}`,...(W=(z=t.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var F,R,C;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...(C=(R=s.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var q,P,A;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: 'Text Button',
    variant: 'text'
  }
}`,...(A=(P=o.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var V,O,M;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...(M=(O=i.parameters)==null?void 0:O.docs)==null?void 0:M.source}}};var k,D,_;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Medium Button',
    size: 'md'
  }
}`,...(_=(D=c.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var $,H,U;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...(U=(H=l.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'With Icon',
    startIcon: <StarIcon />
  }
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: 'Continue',
    endIcon: <ArrowIcon />
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'Both Icons',
    startIcon: <StarIcon />,
    endIcon: <ArrowIcon />
  }
}`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,ae,te;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    children: 'Loading...',
    loading: true
  }
}`,...(te=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,oe,ie;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <Button variant="primary" loading>
        Primary Loading
      </Button>
      <Button variant="outlined" loading>
        Outline Loading
      </Button>
      <Button variant="secondary" loading>
        Secondary Loading
      </Button>
      <Button variant="text" loading>
        Text Loading
      </Button>
    </div>
}`,...(ie=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ce,le,de;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true
  }
}`,...(de=(le=h.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,he,xe;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <Button variant="primary">Primary</Button>
      <Button variant="outlined">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="text">Text</Button>
    </div>
}`,...(xe=(he=y.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ye,ve,fe;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center flex-wrap">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...(fe=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Be,be,je;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <Button startIcon={<StarIcon />}>Start Icon</Button>
      <Button endIcon={<ArrowIcon />}>End Icon</Button>
      <Button startIcon={<StarIcon />} endIcon={<ArrowIcon />}>
        Both Icons
      </Button>
      <Button startIcon={<StarIcon />} loading>
        Loading (replaces icons)
      </Button>
    </div>
}`,...(je=(be=f.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Ie,Se,we;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <form className="flex gap-4">
      <Button type="submit" variant="primary">
        Submit
      </Button>
      <Button type="reset" variant="outlined">
        Reset
      </Button>
      <Button type="button" variant="text">
        Cancel
      </Button>
    </form>
}`,...(we=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const Ue=["Primary","Outline","Secondary","Text","Small","Medium","Large","WithStartIcon","WithEndIcon","WithBothIcons","Loading","LoadingWithVariants","Disabled","FullWidth","AllVariants","AllSizes","IconVariations","FormButtons"];export{v as AllSizes,y as AllVariants,h as Disabled,B as FormButtons,x as FullWidth,f as IconVariations,l as Large,p as Loading,g as LoadingWithVariants,c as Medium,t as Outline,a as Primary,s as Secondary,i as Small,o as Text,m as WithBothIcons,u as WithEndIcon,d as WithStartIcon,Ue as __namedExportsOrder,He as default};
