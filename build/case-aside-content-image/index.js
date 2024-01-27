(()=>{"use strict";var e={n:t=>{var l=t&&t.__esModule?()=>t.default:()=>t;return e.d(l,{a:l}),l},d:(t,l)=>{for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,l=window.wp.element,n=(window.wp.i18n,window.wp.components),a=window.wp.blockEditor,r=window.wp.serverSideRender;var o=e.n(r);const c=JSON.parse('{"u2":"ink-components/case-aside-content-image"}');(0,t.registerBlockType)(c.u2,{edit:function({attributes:e,setAttributes:t}){const{title:r,bttn:i,subtitle:m,content:u,anchor:s,thumbnail:d}=e;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(a.InspectorControls,{key:"setting"},(0,l.createElement)(n.Panel,null,(0,l.createElement)(n.PanelBody,{title:"Image Thumbnail",initialOpen:!0},(0,l.createElement)(n.Flex,null,(0,l.createElement)(n.FlexItem,null,(0,l.createElement)(a.MediaUpload,{onSelect:e=>{console.log(e),e&&e.url&&t({thumbnail:{id:e.id,src:e.url}})},type:"image",value:d.id,className:"p-3 bg-slate-300 img-box",render:({open:e})=>(0,l.createElement)(n.Button,{onClick:e},d?(0,l.createElement)("img",{src:d.src}):"click here")})),(0,l.createElement)(n.FlexItem,null,d?"Change media":"Select new Media"))),(0,l.createElement)(n.PanelBody,{title:"Text content",initialOpen:!0},(0,l.createElement)("ul",null,(0,l.createElement)("li",null,(0,l.createElement)(n.TextControl,{label:"Title",value:r,onChange:e=>t({title:e})}),(0,l.createElement)("hr",null)),(0,l.createElement)("li",null,(0,l.createElement)(n.TextControl,{label:"Subtitle",value:m,onChange:e=>t({subtitle:e})}),(0,l.createElement)("hr",null)),(0,l.createElement)("li",null,(0,l.createElement)(n.TextareaControl,{label:"Content",value:u,onChange:e=>t({content:e})}),(0,l.createElement)("hr",null)))),(0,l.createElement)(n.PanelBody,{title:"Section ID",initialOpen:!0},(0,l.createElement)("ul",null,(0,l.createElement)("li",null,(0,l.createElement)(n.TextControl,{label:"ID",value:s||"",onChange:e=>t({anchor:e})})))))),(0,l.createElement)("div",(0,a.useBlockProps)(),(0,l.createElement)(o(),{block:c.u2,attributes:e})))}})})();