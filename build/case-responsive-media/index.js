(()=>{"use strict";var e={n:t=>{var l=t&&t.__esModule?()=>t.default:()=>t;return e.d(l,{a:l}),l},d:(t,l)=>{for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,l=window.wp.element,n=(window.wp.i18n,window.wp.components),a=window.wp.blockEditor,r=window.wp.serverSideRender;var o=e.n(r);const i=JSON.parse('{"u2":"ink-components/case-responsive-media"}');(0,t.registerBlockType)(i.u2,{edit:function({attributes:e,setAttributes:t}){const{desktop:r,mobile:c,height:m,title:s,anchor:d}=e,u={overflow:"hidden",width:"14rem",height:"15rem"};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.InspectorControls,{key:"setting"},(0,l.createElement)(n.Panel,null,(0,l.createElement)(n.PanelBody,{title:"Title",initialOpen:!0},(0,l.createElement)("ul",null,(0,l.createElement)("li",null,(0,l.createElement)(n.TextControl,{label:"Title",value:s||"",onChange:e=>t({title:e})})))),(0,l.createElement)(n.PanelBody,{title:"Desktop media",initialOpen:!0},(0,l.createElement)(n.Flex,null,(0,l.createElement)(n.FlexItem,null,(0,l.createElement)(a.MediaUpload,{onSelect:e=>{console.log(e),e&&e.url&&t({desktop:{id:e.id,src:e.url}})},type:"image",value:r.id,className:"p-3 bg-slate-300",render:({open:e})=>(0,l.createElement)(n.Button,{onClick:e},r?(0,l.createElement)("img",{style:u,src:r.src}):"click here")})),(0,l.createElement)(n.FlexItem,null,r?"Change media":"Select new Media")),(0,l.createElement)(n.Flex,null,(0,l.createElement)(n.FlexItem,null,(0,l.createElement)(n.TextControl,{label:"Alto",value:m.lg,onChange:e=>t({height:{...m,lg:e}})})))),(0,l.createElement)(n.PanelBody,{title:"Mobile media",initialOpen:!0},(0,l.createElement)(n.Flex,null,(0,l.createElement)(n.FlexItem,null,(0,l.createElement)(a.MediaUpload,{onSelect:e=>{console.log(e),e&&e.url&&t({mobile:{id:e.id,src:e.url}})},type:"image",value:c.id,className:"p-3 bg-slate-300",render:({open:e})=>(0,l.createElement)(n.Button,{onClick:e},c?(0,l.createElement)("img",{style:u,src:c.src}):"click here")})),(0,l.createElement)(n.FlexItem,null,c?"Change media":"Select new Media")),(0,l.createElement)(n.Flex,null,(0,l.createElement)(n.FlexItem,null,(0,l.createElement)(n.TextControl,{label:"Alto",value:m.sm,onChange:e=>t({height:{...m,sm:e}})})))),(0,l.createElement)(n.PanelBody,{title:"Section ID",initialOpen:!0},(0,l.createElement)("ul",null,(0,l.createElement)("li",null,(0,l.createElement)(n.TextControl,{label:"ID",value:d||"",onChange:e=>t({anchor:e})})))))),(0,l.createElement)("div",(0,a.useBlockProps)(),(0,l.createElement)(o(),{block:i.u2,attributes:e})))}})})();