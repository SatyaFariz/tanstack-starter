import{n as K,I as Y,a as H,$ as He,b as J,H as Oe,e as P,l as ze,k as _e,m as G,f as Ke,J as Ue,i as Je,K as Ge,j as r,c as q}from"./useFocusRing-BZ3FjUyO.js";import{f as _}from"./index-BEO02Wfb.js";import{r as c,R as x}from"./index-D4lIrffr.js";import{$ as Q}from"./Hidden-DXnoxMTA.js";import{d as Qe,a as Xe,$ as Ye,b as Ze,f as ea}from"./Form-wMOhqw1S.js";function aa(a,e){let{id:t,"aria-label":n,"aria-labelledby":l}=a;return t=K(t),l&&n?l=[...new Set([t,...l.trim().split(/\s+/)])].join(" "):l&&(l=l.trim().split(/\s+/).join(" ")),!n&&!l&&e&&(n=e),{id:t,"aria-label":n,"aria-labelledby":l}}function ra(a){let{id:e,label:t,"aria-labelledby":n,"aria-label":l,labelElementType:u="label"}=a;e=K(e);let s=K(),i={};t&&(n=n?`${s} ${n}`:s,i={id:s,htmlFor:u==="label"?e:void 0});let o=aa({id:e,"aria-label":l,"aria-labelledby":n});return{labelProps:i,fieldProps:o}}function ta(a){let{description:e,errorMessage:t,isInvalid:n,validationState:l}=a,{labelProps:u,fieldProps:s}=ra(a),i=Y([!!e,!!t,n,l]),o=Y([!!e,!!t,n,l]);return s=H(s,{"aria-describedby":[i,o,a["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:u,fieldProps:s,descriptionProps:{id:i},errorMessageProps:{id:o}}}function la(a,e){let{inputElementType:t="input",isDisabled:n=!1,isRequired:l=!1,isReadOnly:u=!1,type:s="text",validationBehavior:i="aria"}=a,[o,m]=Qe(a.value,a.defaultValue||"",a.onChange),{focusableProps:I}=He(a,e),$=Xe({...a,value:o}),{isInvalid:v,validationErrors:g,validationDetails:b}=$.displayValidation,{labelProps:E,fieldProps:h,descriptionProps:w,errorMessageProps:d}=ta({...a,isInvalid:v,errorMessage:a.errorMessage||g}),j=J(a,{labelable:!0});const S={type:s,pattern:a.pattern};return Ye(e,o,m),Ze(a,$,e),c.useEffect(()=>{if(e.current instanceof Oe(e.current).HTMLTextAreaElement){let y=e.current;Object.defineProperty(y,"defaultValue",{get:()=>y.value,set:()=>{},configurable:!0})}},[e]),{labelProps:E,inputProps:H(j,t==="input"?S:void 0,{disabled:n,readOnly:u,required:l&&i==="native","aria-required":l&&i==="aria"||void 0,"aria-invalid":v||void 0,"aria-errormessage":a["aria-errormessage"],"aria-activedescendant":a["aria-activedescendant"],"aria-autocomplete":a["aria-autocomplete"],"aria-haspopup":a["aria-haspopup"],"aria-controls":a["aria-controls"],value:o,onChange:y=>m(y.target.value),autoComplete:a.autoComplete,autoCapitalize:a.autoCapitalize,maxLength:a.maxLength,minLength:a.minLength,name:a.name,placeholder:a.placeholder,inputMode:a.inputMode,autoCorrect:a.autoCorrect,spellCheck:a.spellCheck,[parseInt(x.version,10)>=17?"enterKeyHint":"enterkeyhint"]:a.enterKeyHint,onCopy:a.onCopy,onCut:a.onCut,onPaste:a.onPaste,onCompositionEnd:a.onCompositionEnd,onCompositionStart:a.onCompositionStart,onCompositionUpdate:a.onCompositionUpdate,onSelect:a.onSelect,onBeforeInput:a.onBeforeInput,onInput:a.onInput,...I,...h}),descriptionProps:w,errorMessageProps:d,isInvalid:v,validationErrors:g,validationDetails:b}}const U=c.createContext({});let na=a=>{let{onHoverStart:e,onHoverChange:t,onHoverEnd:n,...l}=a;return l};const sa=Q(function(e,t){[e,t]=P(e,t,U);let{hoverProps:n,isHovered:l}=ze(e),{isFocused:u,isFocusVisible:s,focusProps:i}=_e({isTextInput:!0,autoFocus:e.autoFocus}),o=!!e["aria-invalid"]&&e["aria-invalid"]!=="false",m=G({...e,values:{isHovered:l,isFocused:u,isFocusVisible:s,isDisabled:e.disabled||!1,isInvalid:o},defaultClassName:"react-aria-Input"});return x.createElement("input",{...H(na(e),i,n),...m,ref:t,"data-focused":u||void 0,"data-disabled":e.disabled||void 0,"data-hovered":l||void 0,"data-focus-visible":s||void 0,"data-invalid":o||void 0})}),Be=c.createContext({}),oa=Q(function(e,t){[e,t]=P(e,t,Be);let{elementType:n="label",...l}=e;return x.createElement(n,{className:"react-aria-Label",...l,ref:t})}),We=c.createContext({}),ke=c.forwardRef(function(e,t){[e,t]=P(e,t,We);let{elementType:n="span",...l}=e;return x.createElement(n,{className:"react-aria-Text",...l,ref:t})}),X=c.createContext(null),ia=c.forwardRef(function(e,t){let n=c.useContext(X);return n!=null&&n.isInvalid?x.createElement(da,{...e,ref:t}):null}),da=c.forwardRef((a,e)=>{let t=c.useContext(X),n=J(a),l=G({...a,defaultClassName:"react-aria-FieldError",defaultChildren:t.validationErrors.length===0?void 0:t.validationErrors.join(" "),values:t});return l.children==null?null:x.createElement(ke,{slot:"errorMessage",...n,...l,ref:e})}),ca=c.createContext({}),ua=c.createContext(null),ma=Q(function(e,t){[e,t]=P(e,t,ua);let{validationBehavior:n}=Ke(ea)||{};var l,u;let s=(u=(l=e.validationBehavior)!==null&&l!==void 0?l:n)!==null&&u!==void 0?u:"native",i=c.useRef(null),[o,m]=P({},i,U),[I,$]=Ue(!e["aria-label"]&&!e["aria-labelledby"]),[v,g]=c.useState("input"),{labelProps:b,inputProps:E,descriptionProps:h,errorMessageProps:w,...d}=la({...Je(e),inputElementType:v,label:$,validationBehavior:s},m),j=c.useCallback(z=>{m.current=z,z&&g(z instanceof HTMLTextAreaElement?"textarea":"input")},[m]),S=G({...e,values:{isDisabled:e.isDisabled||!1,isInvalid:d.isInvalid,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1},defaultClassName:"react-aria-TextField"}),y=J(e);return delete y.id,x.createElement("div",{...y,...S,ref:t,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":d.isInvalid||void 0,"data-readonly":e.isReadOnly||void 0,"data-required":e.isRequired||void 0},x.createElement(Ge,{values:[[Be,{...b,ref:I}],[U,{...H(E,o),ref:j}],[ca,{...E,ref:j}],[We,{slots:{description:h,errorMessage:w}}],[X,d]]},S.children))});function p({label:a,className:e,isInvalid:t=!1,errorMessage:n,description:l,fullWidth:u=!0,startAdornment:s,endAdornment:i,requirementIndicator:o="none",required:m,disabled:I,value:$,defaultValue:v,name:g,ref:b,...E}){const h=c.useRef(null),w=d=>{h.current!==d&&(h.current=d),typeof b=="function"?b(d):b&&(b.current=d)};return r.jsxs(ma,{className:q("w-full",!u&&"w-auto"),isRequired:m||o==="required",isDisabled:I,isInvalid:t,value:$,defaultValue:v,name:g,children:[a&&r.jsxs(oa,{className:q("block font-medium mb-2",t?"text-red-600":"text-primary"),children:[a,o==="required"&&r.jsx("span",{className:"text-red-500 ml-1",children:"*"}),o==="optional"&&r.jsx("span",{className:"text-gray-400 ml-1",children:"(optional)"})]}),r.jsxs("div",{className:q("flex items-center border rounded-md bg-white",t?"border-red-500 focus-within:ring-1 focus-within:ring-red-500 focus-within:border-red-500":"border-divider focus-within:ring-1 focus-within:ring-primary/30 focus-within:border-primary/30","disabled:bg-gray-100"),children:[s&&r.jsx("div",{className:"flex items-center pl-3 text-gray-400 cursor-text",onClick:()=>{var d;return(d=h.current)==null?void 0:d.focus()},"aria-hidden":"true",children:s}),r.jsx(sa,{ref:w,className:q("flex-1 py-2.5 bg-transparent border-0 focus:outline-none focus:ring-0",s?"pl-2":"pl-3",i?"pr-2":"pr-3",t?"text-red-600":"text-primary","disabled:text-gray-400 disabled:cursor-not-allowed","placeholder:text-gray-400",e),...E}),i&&r.jsx("div",{className:"flex items-center pr-3 text-gray-400 cursor-text",onClick:()=>{var d;return(d=h.current)==null?void 0:d.focus()},"aria-hidden":"true",children:i})]}),l&&r.jsx(ke,{slot:"description",className:"mt-1.5 text-sm text-gray-400",children:l}),t&&n&&r.jsx(ia,{className:"mt-1.5 text-sm text-red-600",children:n})]})}p.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},startAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endAdornment:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},requirementIndicator:{required:!1,tsType:{name:"union",raw:"'required' | 'optional' | 'none'",elements:[{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}}}};const f=()=>r.jsxs("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:[r.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),r.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]}),Fe=()=>r.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",children:r.jsx("path",{fillRule:"evenodd",d:"M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z",clipRule:"evenodd"})}),O=()=>r.jsxs("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:[r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})]}),pa=()=>r.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),ya={title:"UI/TextField",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{isInvalid:{control:{type:"boolean"}},requirementIndicator:{control:{type:"select"},options:["none","required","optional"]},type:{control:{type:"select"},options:["text","email","password","search","tel","url"]},fullWidth:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},label:{control:{type:"text"}},placeholder:{control:{type:"text"}},description:{control:{type:"text"}},errorMessage:{control:{type:"text"}}},args:{onChange:_(),onFocus:_(),onBlur:_()}},C={args:{label:"Email",placeholder:"Enter your email"}},T={args:{label:"Email",placeholder:"Enter your email",startAdornment:r.jsx(f,{})}},N={args:{label:"Password",type:"password",placeholder:"Enter your password",endAdornment:r.jsx(O,{})}},R={args:{label:"Search",placeholder:"Search...",startAdornment:r.jsx(pa,{}),endAdornment:r.jsx(O,{})}},A={args:{label:"Email",placeholder:"Enter your email",requirementIndicator:"required",startAdornment:r.jsx(f,{})}},M={args:{label:"Phone Number",placeholder:"Enter your phone number",requirementIndicator:"optional"}},D={args:{label:"Email",placeholder:"Enter your email",description:"We'll never share your email with anyone else.",startAdornment:r.jsx(f,{})}},L={args:{label:"Email",placeholder:"Enter your email",isInvalid:!0,errorMessage:"Please enter a valid email address",startAdornment:r.jsx(f,{}),defaultValue:"invalid-email"}},V={args:{label:"Email",placeholder:"Enter your email",disabled:!0,startAdornment:r.jsx(f,{}),defaultValue:"user@example.com"}},B={args:{label:"Password",type:"password",placeholder:"Enter your password",startAdornment:r.jsx(Fe,{}),endAdornment:r.jsx(O,{}),requirementIndicator:"required"}},W={render:()=>r.jsxs("div",{className:"w-96 space-y-6",children:[r.jsx(p,{label:"Email",type:"email",placeholder:"Enter your email",startAdornment:r.jsx(f,{}),requirementIndicator:"required",isInvalid:!0,errorMessage:"Please enter a valid email address"}),r.jsx(p,{label:"Password",type:"password",placeholder:"Enter your password",startAdornment:r.jsx(Fe,{}),endAdornment:r.jsx(O,{}),requirementIndicator:"required"})]}),parameters:{layout:"padded"}},k={render:()=>r.jsxs("div",{className:"w-96 space-y-6",children:[r.jsx(p,{label:"Default State",placeholder:"Default input",startAdornment:r.jsx(f,{})}),r.jsx(p,{label:"Invalid State",placeholder:"Invalid input",isInvalid:!0,errorMessage:"This field has an error",startAdornment:r.jsx(f,{}),defaultValue:"invalid-input"}),r.jsx(p,{label:"Disabled State",placeholder:"Disabled input",disabled:!0,startAdornment:r.jsx(f,{}),defaultValue:"disabled@example.com"})]}),parameters:{layout:"padded"}},F={render:()=>r.jsxs("div",{className:"space-y-6",children:[r.jsx("div",{className:"w-64",children:r.jsx(p,{label:"Small Width",placeholder:"Small width field",fullWidth:!1})}),r.jsx("div",{className:"w-96",children:r.jsx(p,{label:"Medium Width",placeholder:"Medium width field"})}),r.jsx("div",{className:"w-full max-w-2xl",children:r.jsx(p,{label:"Large Width",placeholder:"Large width field"})})]}),parameters:{layout:"padded"}};var Z,ee,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email'
  }
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,le;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    startAdornment: <EmailIcon />
  }
}`,...(le=(te=T.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,se,oe;N.parameters={...N.parameters,docs:{...(ne=N.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    endAdornment: <EyeIcon />
  }
}`,...(oe=(se=N.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,de,ce;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    startAdornment: <SearchIcon />,
    endAdornment: <EyeIcon />
  }
}`,...(ce=(de=R.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,me,pe;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    requirementIndicator: 'required',
    startAdornment: <EmailIcon />
  }
}`,...(pe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var fe,be,he;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    requirementIndicator: 'optional'
  }
}`,...(he=(be=M.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var xe,ve,ye;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    description: 'We\\'ll never share your email with anyone else.',
    startAdornment: <EmailIcon />
  }
}`,...(ye=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var $e,ge,Ee;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    isInvalid: true,
    errorMessage: 'Please enter a valid email address',
    startAdornment: <EmailIcon />,
    defaultValue: 'invalid-email'
  }
}`,...(Ee=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:Ee.source}}};var Ie,we,Pe;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    disabled: true,
    startAdornment: <EmailIcon />,
    defaultValue: 'user@example.com'
  }
}`,...(Pe=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Pe.source}}};var je,Se,qe;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    startAdornment: <LockIcon />,
    endAdornment: <EyeIcon />,
    requirementIndicator: 'required'
  }
}`,...(qe=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:qe.source}}};var Ce,Te,Ne;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-6">
      <TextInput label="Email" type="email" placeholder="Enter your email" startAdornment={<EmailIcon />} requirementIndicator="required" isInvalid errorMessage="Please enter a valid email address" />
      <TextInput label="Password" type="password" placeholder="Enter your password" startAdornment={<LockIcon />} endAdornment={<EyeIcon />} requirementIndicator="required" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(Ne=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var Re,Ae,Me;k.parameters={...k.parameters,docs:{...(Re=k.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-6">
      <TextInput label="Default State" placeholder="Default input" startAdornment={<EmailIcon />} />
      <TextInput label="Invalid State" placeholder="Invalid input" isInvalid errorMessage="This field has an error" startAdornment={<EmailIcon />} defaultValue="invalid-input" />
      <TextInput label="Disabled State" placeholder="Disabled input" disabled startAdornment={<EmailIcon />} defaultValue="disabled@example.com" />
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(Me=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:Me.source}}};var De,Le,Ve;F.parameters={...F.parameters,docs:{...(De=F.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="w-64">
        <TextInput label="Small Width" placeholder="Small width field" fullWidth={false} />
      </div>
      <div className="w-96">
        <TextInput label="Medium Width" placeholder="Medium width field" />
      </div>
      <div className="w-full max-w-2xl">
        <TextInput label="Large Width" placeholder="Large width field" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(Ve=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};const $a=["Default","WithStartIcon","WithEndIcon","WithBothIcons","Required","Optional","WithDescription","InvalidState","Disabled","PasswordField","LoginForm","AllStates","DifferentSizes"];export{k as AllStates,C as Default,F as DifferentSizes,V as Disabled,L as InvalidState,W as LoginForm,M as Optional,B as PasswordField,A as Required,R as WithBothIcons,D as WithDescription,N as WithEndIcon,T as WithStartIcon,$a as __namedExportsOrder,ya as default};
