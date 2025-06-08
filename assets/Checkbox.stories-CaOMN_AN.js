import{$ as Ne,a as k,b as Se,d as we,e as Ve,f as Oe,g as Be,h as Fe,i as T,k as Ee,l as _e,m as qe,j as i,c as D}from"./useFocusRing-CVnp8mQS.js";import{f as Le}from"./index-BEO02Wfb.js";import{r as c,R as _}from"./index-D4lIrffr.js";import{$ as We,a as Ce,b as Me,c as De,d as Te,e as He,f as ze}from"./Form-C7yUtHVI.js";import{$ as q}from"./usePress-kqvJBuj3.js";import"./index-DsJinFGm.js";const Ue=c.createContext(null);c.createContext(null);c.createContext(null);c.createContext(null);c.createContext(null);c.createContext({});function Ae(a,e,t){let{isDisabled:s=!1,isReadOnly:r=!1,value:d,name:n,children:o,"aria-label":$,"aria-labelledby":f,validationState:m="valid",isInvalid:x}=a,v=p=>{p.stopPropagation(),e.setSelected(p.target.checked)},{pressProps:g,isPressed:u}=q({isDisabled:s}),{pressProps:b,isPressed:h}=q({onPress(){var p;e.toggle(),(p=t.current)===null||p===void 0||p.focus()},isDisabled:s||r}),{focusableProps:y}=Ne(a,t),S=k(g,y),C=Se(a,{labelable:!0});return We(t,e.isSelected,e.setSelected),{labelProps:k(b,{onClick:p=>p.preventDefault()}),inputProps:k(C,{"aria-invalid":x||m==="invalid"||void 0,"aria-errormessage":a["aria-errormessage"],"aria-controls":a["aria-controls"],"aria-readonly":r||void 0,onChange:v,disabled:s,...d==null?{}:{value:d},name:n,type:"checkbox",...S}),isSelected:e.isSelected,isPressed:u||h,isDisabled:s,isReadOnly:r,isInvalid:x||m==="invalid"}}function Pe(a,e,t){let s=Ce({...a,value:e.isSelected}),{isInvalid:r,validationErrors:d,validationDetails:n}=s.displayValidation,{labelProps:o,inputProps:$,isSelected:f,isPressed:m,isDisabled:x,isReadOnly:v}=Ae({...a,isInvalid:r},e,t);Me(a,s,t);let{isIndeterminate:g,isRequired:u,validationBehavior:b="aria"}=a;c.useEffect(()=>{t.current&&(t.current.indeterminate=!!g)});let{pressProps:h}=q({isDisabled:x||v,onPress(){let{[De]:y}=a,{commitValidation:S}=y||s;S()}});return{labelProps:k(o,h),inputProps:{...$,checked:f,"aria-required":u&&b==="aria"||void 0,required:u&&b==="native"},isSelected:f,isPressed:m,isDisabled:x,isReadOnly:v,isInvalid:r,validationErrors:d,validationDetails:n}}const Ge=new WeakMap;function Ie(a={}){let{isReadOnly:e}=a,[t,s]=Te(a.isSelected,a.defaultSelected||!1,a.onChange);function r(n){e||s(n)}function d(){e||s(!t)}return{isSelected:t,setSelected:r,toggle:d}}function Je(a,e,t){const s=Ie({isReadOnly:a.isReadOnly||e.isReadOnly,isSelected:e.isSelected(a.value),onChange(h){h?e.addValue(a.value):e.removeValue(a.value),a.onChange&&a.onChange(h)}});let{name:r,descriptionId:d,errorMessageId:n,validationBehavior:o}=Ge.get(e);var $;o=($=a.validationBehavior)!==null&&$!==void 0?$:o;let{realtimeValidation:f}=Ce({...a,value:s.isSelected,name:void 0,validationBehavior:"aria"}),m=c.useRef(He),x=()=>{e.setInvalid(a.value,f.isInvalid?f:m.current)};c.useEffect(x);let v=e.realtimeValidation.isInvalid?e.realtimeValidation:f,g=o==="native"?e.displayValidation:v;var u;let b=Pe({...a,isReadOnly:a.isReadOnly||e.isReadOnly,isDisabled:a.isDisabled||e.isDisabled,name:a.name||r,isRequired:(u=a.isRequired)!==null&&u!==void 0?u:e.isRequired,validationBehavior:o,[De]:{realtimeValidation:v,displayValidation:g,resetValidation:e.resetValidation,commitValidation:e.commitValidation,updateValidation(h){m.current=h,x()}}},s,t);return{...b,inputProps:{...b.inputProps,"aria-describedby":[a["aria-describedby"],e.isInvalid?n:null,d].filter(Boolean).join(" ")||void 0}}}const H={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function Ke(a={}){let{style:e,isFocusable:t}=a,[s,r]=c.useState(!1),{focusWithinProps:d}=we({isDisabled:!t,onFocusWithinChange:o=>r(o)}),n=c.useMemo(()=>s?e:e?{...H,...e}:H,[s]);return{visuallyHiddenProps:{...d,style:n}}}function Qe(a){let{children:e,elementType:t="div",isFocusable:s,style:r,...d}=a,{visuallyHiddenProps:n}=Ke(a);return _.createElement(t,k(d,n),e)}const Xe=c.createContext(null),Ye=c.forwardRef(function(e,t){let{inputRef:s=null,...r}=e;[e,t]=Ve(r,t,Ue);let{validationBehavior:d}=Oe(ze)||{};var n,o;let $=(o=(n=e.validationBehavior)!==null&&n!==void 0?n:d)!==null&&o!==void 0?o:"native",f=c.useContext(Xe),m=Be(c.useMemo(()=>Fe(s,e.inputRef!==void 0?e.inputRef:null),[s,e.inputRef])),{labelProps:x,inputProps:v,isSelected:g,isDisabled:u,isReadOnly:b,isPressed:h,isInvalid:y}=f?Je({...T(e),value:e.value,children:typeof e.children=="function"?!0:e.children},f,m):Pe({...T(e),children:typeof e.children=="function"?!0:e.children,validationBehavior:$},Ie(e),m),{isFocused:S,isFocusVisible:C,focusProps:p}=Ee(),Re=u||b,{hoverProps:je,isHovered:L}=_e({...e,isDisabled:Re}),W=qe({...e,defaultClassName:"react-aria-Checkbox",values:{isSelected:g,isIndeterminate:e.isIndeterminate||!1,isPressed:h,isHovered:L,isFocused:S,isFocusVisible:C,isDisabled:u,isReadOnly:b,isInvalid:y,isRequired:e.isRequired||!1}}),M=Se(e);return delete M.id,_.createElement("label",{...k(M,x,je,W),ref:t,slot:e.slot||void 0,"data-selected":g||void 0,"data-indeterminate":e.isIndeterminate||void 0,"data-pressed":h||void 0,"data-hovered":L||void 0,"data-focused":S||void 0,"data-focus-visible":C||void 0,"data-disabled":u||void 0,"data-readonly":b||void 0,"data-invalid":y||void 0,"data-required":e.isRequired||void 0},_.createElement(Qe,{elementType:"span"},_.createElement("input",{...k(v,p),ref:m})),W.children)});function l({children:a,className:e,...t}){return i.jsx(Ye,{className:D("group flex items-center gap-3 text-sm font-medium text-gray-900","disabled:text-gray-400 disabled:cursor-not-allowed",e),...t,children:({isIndeterminate:s,isSelected:r,isDisabled:d})=>i.jsxs(i.Fragment,{children:[i.jsx("div",{className:D("flex items-center justify-center w-5 h-5 rounded border-2 transition-all duration-200","focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",r||s?"bg-blue-600 border-blue-600":"bg-white border-gray-300 group-hover:border-gray-400",d&&"opacity-50 cursor-not-allowed",!d&&"cursor-pointer"),children:i.jsx("svg",{viewBox:"0 0 18 18","aria-hidden":"true",className:D("w-3.5 h-3.5 text-white transition-opacity duration-200",r||s?"opacity-100":"opacity-0"),fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:s?i.jsx("line",{x1:"4",y1:"9",x2:"14",y2:"9"}):i.jsx("polyline",{points:"4,9 7.5,12.5 14,5.5"})})}),a&&i.jsx("span",{className:D("select-none",d?"cursor-not-allowed":"cursor-pointer"),children:a})]})})}l.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ra={title:"UI/Checkbox",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isSelected:{control:{type:"boolean"}},isIndeterminate:{control:{type:"boolean"}},isDisabled:{control:{type:"boolean"}},children:{control:{type:"text"}}},args:{onChange:Le()}},P={args:{children:"Default checkbox"}},I={args:{children:"Checked checkbox",isSelected:!0}},R={args:{children:"Indeterminate checkbox",isIndeterminate:!0}},j={args:{children:"Disabled checkbox",isDisabled:!0}},N={args:{children:"Disabled checked",isSelected:!0,isDisabled:!0}},w={args:{children:"Disabled indeterminate",isIndeterminate:!0,isDisabled:!0}},V={args:{}},O={args:{children:"This is a very long label that demonstrates how the checkbox works with longer text content"},parameters:{layout:"padded"}},B={render:()=>i.jsxs("div",{className:"space-y-4",children:[i.jsx(l,{children:"Unchecked"}),i.jsx(l,{isSelected:!0,children:"Checked"}),i.jsx(l,{isIndeterminate:!0,children:"Indeterminate"}),i.jsx(l,{isDisabled:!0,children:"Disabled unchecked"}),i.jsx(l,{isSelected:!0,isDisabled:!0,children:"Disabled checked"}),i.jsx(l,{isIndeterminate:!0,isDisabled:!0,children:"Disabled indeterminate"})]}),parameters:{layout:"padded"}},F={render:()=>i.jsxs("form",{className:"space-y-4 max-w-md",children:[i.jsxs("div",{children:[i.jsx("h3",{className:"text-lg font-semibold mb-3",children:"Newsletter Preferences"}),i.jsxs("div",{className:"space-y-3",children:[i.jsx(l,{defaultSelected:!0,children:"Weekly newsletter"}),i.jsx(l,{children:"Product updates"}),i.jsx(l,{children:"Marketing emails"}),i.jsx(l,{isIndeterminate:!0,children:"Special offers (some selected)"})]})]}),i.jsx("div",{className:"pt-4 border-t",children:i.jsx(l,{children:"I agree to the terms and conditions"})})]}),parameters:{layout:"padded"}},E={render:()=>i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{className:"space-y-2",children:[i.jsx("h4",{className:"font-medium",children:"Standard Size"}),i.jsx(l,{isSelected:!0,children:"Standard checkbox"})]}),i.jsxs("div",{className:"space-y-2",children:[i.jsx("h4",{className:"font-medium",children:"With Custom Styling"}),i.jsx(l,{isSelected:!0,className:"text-lg",children:"Larger text checkbox"})]})]}),parameters:{layout:"padded"}};var z,U,A;P.parameters={...P.parameters,docs:{...(z=P.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Default checkbox'
  }
}`,...(A=(U=P.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var G,J,K;I.parameters={...I.parameters,docs:{...(G=I.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    children: 'Checked checkbox',
    isSelected: true
  }
}`,...(K=(J=I.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    children: 'Indeterminate checkbox',
    isIndeterminate: true
  }
}`,...(Y=(X=R.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    children: 'Disabled checkbox',
    isDisabled: true
  }
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ie,se,te;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    children: 'Disabled checked',
    isSelected: true,
    isDisabled: true
  }
}`,...(te=(se=N.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,de,ne;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    children: 'Disabled indeterminate',
    isIndeterminate: true,
    isDisabled: true
  }
}`,...(ne=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var le,ce,oe;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {}
}`,...(oe=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:oe.source}}};var ue,me,be;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    children: 'This is a very long label that demonstrates how the checkbox works with longer text content'
  },
  parameters: {
    layout: 'padded'
  }
}`,...(be=(me=O.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var he,fe,xe;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Checkbox>Unchecked</Checkbox>
      <Checkbox isSelected>Checked</Checkbox>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled unchecked</Checkbox>
      <Checkbox isSelected isDisabled>Disabled checked</Checkbox>
      <Checkbox isIndeterminate isDisabled>Disabled indeterminate</Checkbox>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(xe=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var pe,ve,$e;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <form className="space-y-4 max-w-md">
      <div>
        <h3 className="text-lg font-semibold mb-3">Newsletter Preferences</h3>
        <div className="space-y-3">
          <Checkbox defaultSelected>
            Weekly newsletter
          </Checkbox>
          <Checkbox>
            Product updates
          </Checkbox>
          <Checkbox>
            Marketing emails
          </Checkbox>
          <Checkbox isIndeterminate>
            Special offers (some selected)
          </Checkbox>
        </div>
      </div>

      <div className="pt-4 border-t">
        <Checkbox>
          I agree to the terms and conditions
        </Checkbox>
      </div>
    </form>,
  parameters: {
    layout: 'padded'
  }
}`,...($e=(ve=F.parameters)==null?void 0:ve.docs)==null?void 0:$e.source}}};var ge,ye,ke;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Standard Size</h4>
        <Checkbox isSelected>Standard checkbox</Checkbox>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium">With Custom Styling</h4>
        <Checkbox isSelected className="text-lg">
          Larger text checkbox
        </Checkbox>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(ke=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};const da=["Default","Checked","Indeterminate","Disabled","DisabledChecked","DisabledIndeterminate","WithoutLabel","LongLabel","AllStates","FormExample","SizesComparison"];export{B as AllStates,I as Checked,P as Default,j as Disabled,N as DisabledChecked,w as DisabledIndeterminate,F as FormExample,R as Indeterminate,O as LongLabel,E as SizesComparison,V as WithoutLabel,da as __namedExportsOrder,ra as default};
