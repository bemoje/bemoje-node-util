const toSet = (string: string, ...concatSets: Set<string>[]) => {
  return new Set(string.split(',').concat(concatSets.map((set) => Array.from(set)).flat()))
}

export const HTML_BOOLEAN_ATTRIBUTES = toSet(
  'async,autocomplete,autofocus,autoplay,border,challenge,checked,compact,contenteditable,controls,default,defer,disabled,formNoValidate,frameborder,hidden,indeterminate,ismap,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,readonly,required,reversed,scoped,scrolling,seamless,selected,sortable,spellcheck,translate',
)

export const HTML_EVENT_ATTRIBUTES = toSet(
  'onabort,onautocomplete,onautocompleteerror,onblur,oncancel,oncanplay,oncanplaythrough,onchange,onclick,onclose,oncontextmenu,oncuechange,ondblclick,ondrag,ondragend,ondragenter,ondragleave,ondragover,ondragstart,ondrop,ondurationchange,onemptied,onended,onerror,onfocus,oninput,oninvalid,onkeydown,onkeypress,onkeyup,onload,onloadeddata,onloadedmetadata,onloadstart,onmousedown,onmouseenter,onmouseleave,onmousemove,onmouseout,onmouseover,onmouseup,onmousewheel,onpause,onplay,onplaying,onprogress,onratechange,onreset,onresize,onscroll,onseeked,onseeking,onselect,onshow,onsort,onstalled,onsubmit,onsuspend,ontimeupdate,ontoggle,onvolumechange,onwaiting',
)

export const HTML_GLOBAL_ATTRIBUTES = toSet(
  'accesskey,autocapitalize,class,contenteditable,contextmenu,dir,draggable,dropzone,hidden,id,itemprop,lang,slot,spellcheck,style,tabindex,title',
)

export const HTML_ATTRIBUTES: Set<string> = toSet(
  'charset,coords,datafld,datasrc,download,href,hreflang,methods,name,ping,referrerpolicy,rel,shape,target,type,urn,alt,crossorigin,preload,alink,background,bgcolor,link,marginbottom,marginheight,marginleft,marginright,margintop,marginwidth,text,vlink,clear,dataformatas,formaction,formenctype,formmethod,formnovalidate,formtarget,align,char,charoff,span,valign,width,src,action,accept,method,profile,color,size,version,allowtransparency,hspace,vspace,decoding,lowsrc,srcset,capture,inputmode,usemap,as,blocking,integrity,display,overflow,content,http-equiv,scheme,archive,classid,code,codebase,codetype,data,declare,standby,valuetype,event,for,language,nomodule,bordercolor,cellpadding,cellspacing,datapagesize,frame,rules,summary,axis,colspan,height,rowspan,scope,cols,maxlength,minlength,rows,wrap,allow,buffered,cite,csp,datetime,dirname,enctype,enterkeyhint,form,headers,high,icon,importance,intrinsicsize,keytype,kind,label,loading,list,low,manifest,max,media,min,optimum,pattern,placeholder,poster,radiogroup,sandbox,sizes,srcdoc,srclang,start,step,value',
  HTML_GLOBAL_ATTRIBUTES,
  HTML_EVENT_ATTRIBUTES,
  HTML_BOOLEAN_ATTRIBUTES,
)

export const HTML_VOID_ELEMENTS = toSet(
  'area,base,br,col,embed,hr,img,input,keygen,link,meta,param,source,track,wbr',
)

export const HTML_ELEMENTS = toSet(
  'a,area,audio,button,col,colgroup,details,dialog,embed,fieldset,form,html,iframe,img,input,link,map,math,meta,object,ol,optgroup,option,script,select,td,textarea,th,video,abbr,acronym,address,applet,article,aside,b,basefont,bdi,bdo,bgsound,big,blink,blockquote,body,canvas,caption,center,cite,code,data,datalist,dd,del,dfn,dir,div,dl,dt,em,figcaption,figure,font,footer,frame,frameset,h1,h2,h3,h4,h5,h6,head,header,hgroup,i,ins,isindex,kbd,label,legend,li,listing,main,mark,marquee,menu,meter,multicol,nav,nextid,nobr,noembed,noframes,noscript,output,p,picture,plaintext,pre,progress,q,rb,rp,rt,rtc,ruby,s,samp,section,slot,small,spacer,span,strike,strong,style,sub,summary,sup,svg,svg:desc,svg:title,table,tbody,template,tfoot,thead,time,title,tr,tt,u,ul,var,xmp',
  HTML_VOID_ELEMENTS,
)
