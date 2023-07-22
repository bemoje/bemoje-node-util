import { _HTML_BOOLEAN_ATTRIBUTES } from './_HTML_BOOLEAN_ATTRIBUTES'
import { _HTML_EVENT_ATTRIBUTES } from './_HTML_EVENT_ATTRIBUTES'
import { _HTML_GLOBAL_ATTRIBUTES } from './_HTML_GLOBAL_ATTRIBUTES'

export const _HTML_ATTRIBUTES: Set<string> = new Set(
  'charset,coords,datafld,datasrc,download,href,hreflang,methods,name,ping,referrerpolicy,rel,shape,target,type,urn,alt,crossorigin,preload,alink,background,bgcolor,link,marginbottom,marginheight,marginleft,marginright,margintop,marginwidth,text,vlink,clear,dataformatas,formaction,formenctype,formmethod,formnovalidate,formtarget,align,char,charoff,span,valign,width,src,action,accept,method,profile,color,size,version,allowtransparency,hspace,vspace,decoding,lowsrc,srcset,capture,inputmode,usemap,as,blocking,integrity,display,overflow,content,http-equiv,scheme,archive,classid,code,codebase,codetype,data,declare,standby,valuetype,event,for,language,nomodule,bordercolor,cellpadding,cellspacing,datapagesize,frame,rules,summary,axis,colspan,height,rowspan,scope,cols,maxlength,minlength,rows,wrap,allow,buffered,cite,csp,datetime,dirname,enctype,enterkeyhint,form,headers,high,icon,importance,intrinsicsize,keytype,kind,label,loading,list,low,manifest,max,media,min,optimum,pattern,placeholder,poster,radiogroup,sandbox,sizes,srcdoc,srclang,start,step,value'
    .split(',')
    .concat(..._HTML_GLOBAL_ATTRIBUTES, ..._HTML_EVENT_ATTRIBUTES, ..._HTML_BOOLEAN_ATTRIBUTES),
)
