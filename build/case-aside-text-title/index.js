(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var l in n)e.o(n,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:n[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,n=window.wp.element,l=(window.wp.i18n,window.wp.components),o=window.wp.blockEditor,r=window.wp.serverSideRender;var a=e.n(r);const i=JSON.parse('{"u2":"ink-components/case-aside-text-title"}');(0,t.registerBlockType)(i.u2,{edit:function({attributes:e,setAttributes:t}){const{title:r,content:c,anchor:u}=e;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(o.InspectorControls,{key:"setting"},(0,n.createElement)(l.Panel,null,(0,n.createElement)(l.PanelBody,{title:"Contenido",initialOpen:!0},(0,n.createElement)("ul",null,(0,n.createElement)("li",null,(0,n.createElement)(l.TextControl,{label:"Title",value:r,onChange:e=>t({title:e})})),(0,n.createElement)("li",null,(0,n.createElement)(l.TextareaControl,{label:"Content",help:"Enter some text",value:c,onChange:e=>t({content:e})})))),(0,n.createElement)(l.PanelBody,{title:"Section ID",initialOpen:!0},(0,n.createElement)("ul",null,(0,n.createElement)("li",null,(0,n.createElement)(l.TextControl,{label:"ID",value:u||"",onChange:e=>t({anchor:e})})))))),(0,n.createElement)("div",(0,o.useBlockProps)(),(0,n.createElement)(a(),{block:i.u2,attributes:e})))}})})();