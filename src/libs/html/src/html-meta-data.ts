export const HTML_VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'keygen',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
])

export const HTML_BOOLEAN_ATTRIBUTES = new Set([
  'async',
  'autocomplete',
  'autofocus',
  'autoplay',
  'border',
  'challenge',
  'checked',
  'compact',
  'contenteditable',
  'controls',
  'default',
  'defer',
  'disabled',
  'formNoValidate',
  'frameborder',
  'hidden',
  'indeterminate',
  'ismap',
  'loop',
  'multiple',
  'muted',
  'nohref',
  'noresize',
  'noshade',
  'novalidate',
  'nowrap',
  'open',
  'readonly',
  'required',
  'reversed',
  'scoped',
  'scrolling',
  'seamless',
  'selected',
  'sortable',
  'spellcheck',
  'translate',
])

export const HTML_EVENT_HANDLER_ATTRIBUTES = new Set([
  'onabort',
  'onautocomplete',
  'onautocompleteerror',
  'onblur',
  'oncancel',
  'oncanplay',
  'oncanplaythrough',
  'onchange',
  'onclick',
  'onclose',
  'oncontextmenu',
  'oncuechange',
  'ondblclick',
  'ondrag',
  'ondragend',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondragstart',
  'ondrop',
  'ondurationchange',
  'onemptied',
  'onended',
  'onerror',
  'onfocus',
  'oninput',
  'oninvalid',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onload',
  'onloadeddata',
  'onloadedmetadata',
  'onloadstart',
  'onmousedown',
  'onmouseenter',
  'onmouseleave',
  'onmousemove',
  'onmouseout',
  'onmouseover',
  'onmouseup',
  'onmousewheel',
  'onpause',
  'onplay',
  'onplaying',
  'onprogress',
  'onratechange',
  'onreset',
  'onresize',
  'onscroll',
  'onseeked',
  'onseeking',
  'onselect',
  'onshow',
  'onsort',
  'onstalled',
  'onsubmit',
  'onsuspend',
  'ontimeupdate',
  'ontoggle',
  'onvolumechange',
  'onwaiting',
])

export const HTML_ATTRIBUTES: Record<string, { description: string; relatedTags: string[] }> = {
  'http-equiv': {
    description: '',
    relatedTags: ['meta'],
  },
  'accept': {
    description: 'List of types the server accepts, typically a file type.',
    relatedTags: ['form', 'input'],
  },
  'accesskey': {
    description: 'Defines a keyboard shortcut to activate or add focus to the element.',
    relatedTags: ['Global attribute'],
  },
  'action': {
    description: 'The URI of a program that processes the information submitted via the form.',
    relatedTags: ['form'],
  },
  'align': {
    description: 'Specifies the horizontal alignment of the element.',
    relatedTags: [
      'applet',
      'caption',
      'col',
      'colgroup',
      'hr',
      'iframe',
      'img',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'tr',
    ],
  },
  'allow': {
    description: 'Specifies a feature-policy for the iframe.',
    relatedTags: ['iframe'],
  },
  'alt': {
    description: "Alternative text in case an image can't be displayed.",
    relatedTags: ['applet', 'area', 'img', 'input'],
  },
  'async': {
    description: 'Indicates that the script should be executed asynchronously.',
    relatedTags: ['script'],
  },
  'autocapitalize': {
    description:
      'Controls whether and how text input is automatically capitalized as it is entered/edited by the user.',
    relatedTags: ['Global attribute'],
  },
  'autocomplete': {
    description:
      'Indicates whether controls in this form can by default have their values automatically completed by the browser.',
    relatedTags: ['form', 'input', ' select', 'textarea'],
  },
  'autofocus': {
    description: 'The element should be automatically focused after the page loaded.',
    relatedTags: ['button', 'input', 'keygen', 'select', 'textarea'],
  },
  'autoplay': {
    description: 'The audio or video should play as soon as possible.',
    relatedTags: ['audio', 'video'],
  },
  'background': {
    description:
      'Specifies the URL of an image file.Note:Although browsers and email clients may still support this attribute, it is obsolete. Use CSSbackground-imageinstead.',
    relatedTags: ['body', 'table', 'td', 'th'],
  },
  'bgcolor': {
    description:
      'Background color of the element. Note:This is a legacy attribute. Please use the CSSbackground-colorproperty instead.',
    relatedTags: ['body', 'col', 'colgroup', 'marquee', 'table', 'tbody', 'tfoot', 'td', 'th', 'tr'],
  },
  'border': {
    description: 'The border width. Note:This is a legacy attribute. Please use the CSSborderproperty instead.',
    relatedTags: ['img', 'object', 'table'],
  },
  'buffered': {
    description: 'Contains the time range of already buffered media.',
    relatedTags: ['audio', 'video'],
  },
  'challenge': {
    description: 'A challenge string that is submitted along with the public key.',
    relatedTags: ['keygen'],
  },
  'charset': {
    description: 'Declares the character encoding of the page or script.',
    relatedTags: ['meta', 'script'],
  },
  'checked': {
    description: 'Indicates whether the element should be checked on page load.',
    relatedTags: ['command', 'input'],
  },
  'cite': {
    description: 'Contains a URI which points to the source of the quote or change.',
    relatedTags: ['blockquote', 'del', 'ins', 'q'],
  },
  'class': {
    description: 'Often used with CSS to style elements with common properties.',
    relatedTags: ['Global attribute'],
  },
  'code': {
    description: "Specifies the URL of the applet's class file to be loaded and executed.",
    relatedTags: ['applet'],
  },
  'codebase': {
    description:
      "This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored.",
    relatedTags: ['applet'],
  },
  'color': {
    description:
      'This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. Note:This is a legacy attribute. Please use the CSScolorproperty instead.',
    relatedTags: ['basefont', 'font', 'hr'],
  },
  'cols': {
    description: 'Defines the number of columns in a textarea.',
    relatedTags: ['textarea'],
  },
  'colspan': {
    description: 'The colspan attribute defines the number of columns a cell should span.',
    relatedTags: ['td', 'th'],
  },
  'content': {
    description: 'A value associated withhttp-equivornamedepending on the context.',
    relatedTags: ['meta'],
  },
  'contenteditable': {
    description: "Indicates whether the element's content is editable.",
    relatedTags: ['Global attribute'],
  },
  'contextmenu': {
    description: "Defines the ID of amenuelement which will serve as the element's context menu.",
    relatedTags: ['Global attribute'],
  },
  'controls': {
    description: 'Indicates whether the browser should show playback controls to the user.',
    relatedTags: ['audio', 'video'],
  },
  'coords': {
    description: 'A set of values specifying the coordinates of the hot-spot region.',
    relatedTags: ['area'],
  },
  'crossorigin': {
    description: 'How the element handles cross-origin requests',
    relatedTags: ['audio', 'img', 'link', 'script', 'video'],
  },
  'csp': {
    description: 'Specifies the Content Security Policy that an embedded document must agree to enforce upon itself.',
    relatedTags: ['iframe'],
  },
  'data': {
    description: 'Specifies the URL of the resource.',
    relatedTags: ['object'],
  },
  'datetime': {
    description: 'Indicates the date and time associated with the element.',
    relatedTags: ['del', 'ins', 'time'],
  },
  'decoding': {
    description: 'Indicates the preferred method to decode the image.',
    relatedTags: ['img'],
  },
  'default': {
    description:
      "Indicates that the track should be enabled unless the user's preferences indicate something different.",
    relatedTags: ['track'],
  },
  'defer': {
    description: 'Indicates that the script should be executed after the page has been parsed.',
    relatedTags: ['script'],
  },
  'dir': {
    description: 'Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)',
    relatedTags: ['Global attribute'],
  },
  'dirname': {
    description: '',
    relatedTags: ['input', 'textarea'],
  },
  'disabled': {
    description: 'Indicates whether the user can interact with the element.',
    relatedTags: ['button', 'command', 'fieldset', 'input', 'keygen', 'optgroup', 'option', 'select', 'textarea'],
  },
  'download': {
    description: 'Indicates that the hyperlink is to be used for downloading a resource.',
    relatedTags: ['a', 'area'],
  },
  'draggable': {
    description: 'Defines whether the element can be dragged.',
    relatedTags: ['Global attribute'],
  },
  'dropzone': {
    description: 'Indicates that the element accept the dropping of content on it.',
    relatedTags: ['Global attribute'],
  },
  'enctype': {
    description: 'Defines the content type of the form date when themethodis POST.',
    relatedTags: ['form'],
  },
  'enterkeyhint': {
    description:
      'Theenterkeyhintspecifies what action label (or icon) to present for the enter key on virtual keyboards. The attribute can be used with form controls (such as the value oftextareaelements), or in elements in an editing host (e.g., usingcontenteditableattribute).',
    relatedTags: ['textarea', 'contenteditable'],
  },
  'for': {
    description: 'Describes elements which belongs to this one.',
    relatedTags: ['label', 'output'],
  },
  'form': {
    description: 'Indicates the form that is the owner of the element.',
    relatedTags: [
      'button',
      'fieldset',
      'input',
      'keygen',
      'label',
      'meter',
      'object',
      'output',
      'progress',
      'select',
      'textarea',
    ],
  },
  'formaction': {
    description: 'Indicates the action of the element, overriding the action defined in theform.',
    relatedTags: ['input', 'button'],
  },
  'formenctype': {
    description:
      'If the button/input is a submit button (type="submit"), this attribute sets the encoding type to use during form submission. If this attribute is specified, it overrides theenctypeattribute of the button\'sformowner.',
    relatedTags: ['button', 'input'],
  },
  'formmethod': {
    description:
      'If the button/input is a submit button (type="submit"), this attribute sets the submission method to use during form submission (GET,POST, etc.). If this attribute is specified, it overrides themethodattribute of the button\'sformowner.',
    relatedTags: ['button', 'input'],
  },
  'formnovalidate': {
    description:
      'If the button/input is a submit button (type="submit"), this boolean attribute specifies that the form is not to be validated when it is submitted. If this attribute is specified, it overrides thenovalidateattribute of the button\'sformowner.',
    relatedTags: ['button', 'input'],
  },
  'formtarget': {
    description:
      'If the button/input is a submit button (type="submit"), this attribute specifies the browsing context (for example, tab, window, or inline frame) in which to display the response that is received after submitting the form. If this attribute is specified, it overrides thetargetattribute of the button\'sformowner.',
    relatedTags: ['button', 'input'],
  },
  'headers': {
    description: 'IDs of thethelements which applies to this element.',
    relatedTags: ['td', 'th'],
  },
  'height': {
    description:
      'Specifies the height of elements listed here. For all other elements, use the CSSheightproperty. Note:In some instances, such asdiv, this is a legacy attribute, in which case the CSSheightproperty should be used instead.',
    relatedTags: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
  },
  'hidden': {
    description: 'Prevents rendering of given element, while keeping child elements, e.g. script elements, active.',
    relatedTags: ['Global attribute'],
  },
  'high': {
    description: 'Indicates the lower bound of the upper range.',
    relatedTags: ['meter'],
  },
  'href': {
    description: 'The URL of a linked resource.',
    relatedTags: ['a', 'area', 'base', 'link'],
  },
  'hreflang': {
    description: 'Specifies the language of the linked resource.',
    relatedTags: ['a', 'area', 'link'],
  },
  'icon': {
    description: 'Specifies a picture which represents the command.',
    relatedTags: ['command'],
  },
  'id': {
    description: 'Often used with CSS to style a specific element. The value of this attribute must be unique.',
    relatedTags: ['Global attribute'],
  },
  'importance': {
    description: 'Indicates the relative fetch priority for the resource.',
    relatedTags: ['iframe', 'img', 'link', 'script'],
  },
  'integrity': {
    description: 'Specifies aSubresource Integrityvalue that allows browsers to verify what they fetch.',
    relatedTags: ['link', 'script'],
  },
  'intrinsicsize': {
    description:
      'This attribute tells the browser to ignore the actual intrinsic size of the image and pretend itâ€™s the size specified in the attribute.',
    relatedTags: ['img'],
  },
  'inputmode': {
    description:
      'Provides a hint as to the type of data that might be entered by the user while editing the element or its contents. The attribute can be used with form controls (such as the value oftextareaelements), or in elements in an editing host (e.g., usingcontenteditableattribute).',
    relatedTags: ['textarea', 'contenteditable'],
  },
  'ismap': {
    description: 'Indicates that the image is part of a server-side image map.',
    relatedTags: ['img'],
  },
  'itemprop': {
    description: '',
    relatedTags: ['Global attribute'],
  },
  'keytype': {
    description: 'Specifies the type of key generated.',
    relatedTags: ['keygen'],
  },
  'kind': {
    description: 'Specifies the kind of text track.',
    relatedTags: ['track'],
  },
  'label': {
    description: 'Specifies a user-readable title of the element.',
    relatedTags: ['optgroup', ' option', ' track'],
  },
  'lang': {
    description: 'Defines the language used in the element.',
    relatedTags: ['Global attribute'],
  },
  'language': {
    description: 'Defines the script language used in the element.',
    relatedTags: ['script'],
  },
  'loading': {
    description: 'Indicates if the element should be loaded lazily.WIP:WHATWG PR #3752',
    relatedTags: ['img', 'iframe'],
  },
  'list': {
    description: 'Identifies a list of pre-defined options to suggest to the user.',
    relatedTags: ['input'],
  },
  'loop': {
    description: "Indicates whether the media should start playing from the start when it's finished.",
    relatedTags: ['audio', 'bgsound', 'marquee', 'video'],
  },
  'low': {
    description: 'Indicates the upper bound of the lower range.',
    relatedTags: ['meter'],
  },
  'manifest': {
    description:
      'Specifies the URL of the document\'s cache manifest. Note:This attribute is obsolete, uselink rel="manifest"instead.',
    relatedTags: ['html'],
  },
  'max': {
    description: 'Indicates the maximum value allowed.',
    relatedTags: ['input', 'meter', 'progress'],
  },
  'maxlength': {
    description: 'Defines the maximum number of characters allowed in the element.',
    relatedTags: ['input', 'textarea'],
  },
  'minlength': {
    description: 'Defines the minimum number of characters allowed in the element.',
    relatedTags: ['input', 'textarea'],
  },
  'media': {
    description: 'Specifies a hint of the media for which the linked resource was designed.',
    relatedTags: ['a', 'area', 'link', 'source', 'style'],
  },
  'method': {
    description: 'Defines whichHTTPmethod to use when submitting the form. Can beGET(default) orPOST.',
    relatedTags: ['form'],
  },
  'min': {
    description: 'Indicates the minimum value allowed.',
    relatedTags: ['input', 'meter'],
  },
  'multiple': {
    description: 'Indicates whether multiple values can be entered in an input of the typeemailorfile.',
    relatedTags: ['input', 'select'],
  },
  'muted': {
    description: 'Indicates whether the audio will be initially silenced on page load.',
    relatedTags: ['audio', 'video'],
  },
  'name': {
    description: 'Name of the element. For example used by the server to identify the fields in form submits.',
    relatedTags: [
      'button',
      'form',
      'fieldset',
      'iframe',
      'input',
      'keygen',
      'object',
      'output',
      'select',
      'textarea',
      'map',
      'meta',
      'param',
    ],
  },
  'novalidate': {
    description: "This attribute indicates that the form shouldn't be validated when submitted.",
    relatedTags: ['form'],
  },
  'open': {
    description: 'Indicates whether the details will be shown on page load.',
    relatedTags: ['details'],
  },
  'optimum': {
    description: 'Indicates the optimal numeric value.',
    relatedTags: ['meter'],
  },
  'pattern': {
    description: "Defines a regular expression which the element's value will be validated against.",
    relatedTags: ['input'],
  },
  'ping': {
    description:
      'Thepingattribute specifies a space-separated list of URLs to be notified if a user follows the hyperlink.',
    relatedTags: ['a', 'area'],
  },
  'placeholder': {
    description: 'Provides a hint to the user of what can be entered in the field.',
    relatedTags: ['input', 'textarea'],
  },
  'poster': {
    description: 'A URL indicating a poster frame to show until the user plays or seeks.',
    relatedTags: ['video'],
  },
  'preload': {
    description: 'Indicates whether the whole resource, parts of it or nothing should be preloaded.',
    relatedTags: ['audio', 'video'],
  },
  'radiogroup': {
    description: '',
    relatedTags: ['command'],
  },
  'readonly': {
    description: 'Indicates whether the element can be edited.',
    relatedTags: ['input', 'textarea'],
  },
  'referrerpolicy': {
    description: 'Specifies which referrer is sent when fetching the resource.',
    relatedTags: ['a', 'area', 'iframe', 'img', 'link', 'script'],
  },
  'rel': {
    description: 'Specifies the relationship of the target object to the link object.',
    relatedTags: ['a', 'area', 'link'],
  },
  'required': {
    description: 'Indicates whether this element is required to fill out or not.',
    relatedTags: ['input', 'select', 'textarea'],
  },
  'reversed': {
    description: 'Indicates whether the list should be displayed in a descending order instead of a ascending.',
    relatedTags: ['ol'],
  },
  'rows': {
    description: 'Defines the number of rows in a text area.',
    relatedTags: ['textarea'],
  },
  'rowspan': {
    description: 'Defines the number of rows a table cell should span over.',
    relatedTags: ['td', 'th'],
  },
  'sandbox': {
    description:
      'Stops a document loaded in an iframe from using certain features (such as submitting forms or opening new windows).',
    relatedTags: ['iframe'],
  },
  'scope': {
    description: 'Defines the cells that the header test (defined in thethelement) relates to.',
    relatedTags: ['th'],
  },
  'scoped': {
    description: '',
    relatedTags: ['style'],
  },
  'selected': {
    description: 'Defines a value which will be selected on page load.',
    relatedTags: ['option'],
  },
  'shape': {
    description: '',
    relatedTags: ['a', 'area'],
  },
  'size': {
    description:
      "Defines the width of the element (in pixels). If the element'stypeattribute istextorpasswordthen it's the number of characters.",
    relatedTags: ['input', 'select'],
  },
  'sizes': {
    description: '',
    relatedTags: ['link', 'img', 'source'],
  },
  'slot': {
    description: 'Assigns a slot in a shadow DOM shadow tree to an element.',
    relatedTags: ['Global attribute'],
  },
  'span': {
    description: '',
    relatedTags: ['col', 'colgroup'],
  },
  'spellcheck': {
    description: 'Indicates whether spell checking is allowed for the element.',
    relatedTags: ['Global attribute'],
  },
  'src': {
    description: 'The URL of the embeddable content.',
    relatedTags: ['audio', 'embed', 'iframe', 'img', 'input', 'script', 'source', 'track', 'video'],
  },
  'srcdoc': {
    description: '',
    relatedTags: ['iframe'],
  },
  'srclang': {
    description: '',
    relatedTags: ['track'],
  },
  'srcset': {
    description: 'One or more responsive image candidates.',
    relatedTags: ['img', 'source'],
  },
  'start': {
    description: 'Defines the first number if other than 1.',
    relatedTags: ['ol'],
  },
  'step': {
    description: '',
    relatedTags: ['input'],
  },
  'style': {
    description: 'Defines CSS styles which will override styles previously set.',
    relatedTags: ['Global attribute'],
  },
  'summary': {
    description: '',
    relatedTags: ['table'],
  },
  'tabindex': {
    description: "Overrides the browser's default tab order and follows the one specified instead.",
    relatedTags: ['Global attribute'],
  },
  'target': {
    description: '',
    relatedTags: ['a', 'area', 'base', 'form'],
  },
  'title': {
    description: 'Text to be displayed in a tooltip when hovering over the element.',
    relatedTags: ['Global attribute'],
  },
  'translate': {
    description:
      'Specify whether an elementâ€™s attribute values and the values of itsTextnode children are to be translated when the page is localized, or whether to leave them unchanged.',
    relatedTags: ['Global attribute'],
  },
  'type': {
    description: 'Defines the type of the element.',
    relatedTags: ['button', 'input', 'command', 'embed', 'object', 'script', 'source', 'style', 'menu'],
  },
  'usemap': {
    description: '',
    relatedTags: ['img', 'input', 'object'],
  },
  'value': {
    description: 'Defines a default value which will be displayed in the element on page load.',
    relatedTags: ['button', 'data', 'input', 'li', 'meter', 'option', 'progress', 'param'],
  },
  'width': {
    description:
      "For the elements listed here, this establishes the element's width. Note:For all other instances, such asdiv, this is a legacy attribute, in which case the CSSwidthproperty should be used instead.",
    relatedTags: ['canvas', 'embed', 'iframe', 'img', 'input', 'object', 'video'],
  },
  'wrap': {
    description: 'Indicates whether the text should be wrapped.',
    relatedTags: ['textarea'],
  },
}

export const HTML_ELEMENTS: Record<string, { description: string }> = {
  a: {
    description: 'Defines a hyperlink',
  },
  abbr: {
    description: 'Defines an abbreviation or an acronym',
  },
  acronym: {
    description: 'Not supported in HTML5. Use <abbr> instead.',
  },
  address: {
    description: 'Defines contact information for the author/owner of a document',
  },
  applet: {
    description: 'Not supported in HTML5. Use <embed> or <object> instead.',
  },
  area: {
    description: 'Defines an area inside an image-map',
  },
  article: {
    description: 'Defines an article',
  },
  aside: {
    description: 'Defines content aside from the page content',
  },
  audio: {
    description: 'Defines sound content',
  },
  b: {
    description: 'Defines bold text',
  },
  base: {
    description: 'Specifies the base URL/target for all relative URLs in a document',
  },
  basefont: {
    description: 'Not supported in HTML5. Use CSS instead.',
  },
  bdi: {
    description: 'Isolates a part of text that might be formatted in a different direction from other text outside it',
  },
  bdo: {
    description: 'Overrides the current text direction',
  },
  big: {
    description: 'Not supported in HTML5. Use CSS instead.',
  },
  blockquote: {
    description: 'Defines a section that is quoted from another source',
  },
  body: {
    description: "Defines the document's body",
  },
  br: {
    description: 'Defines a single line break',
  },
  button: {
    description: 'Defines a clickable button',
  },
  canvas: {
    description: 'Used to draw graphics, on the fly, via scripting (usually JavaScript)',
  },
  caption: {
    description: 'Defines a table caption',
  },
  center: {
    description: 'Not supported in HTML5. Use CSS instead.',
  },
  cite: {
    description: 'Defines the title of a work',
  },
  code: {
    description: 'Defines a piece of computer code',
  },
  col: {
    description: 'Specifies column properties for each column within a <colgroup> element',
  },
  colgroup: {
    description: 'Specifies a group of one or more columns in a table for formatting',
  },
  data: {
    description: 'Links the given content with a machine-readable translation',
  },
  datalist: {
    description: 'Specifies a list of pre-defined options for input controls',
  },
  dd: {
    description: 'Defines a description/value of a term in a description list',
  },
  del: {
    description: 'Defines text that has been deleted from a document',
  },
  details: {
    description: 'Defines additional details that the user can view or hide',
  },
  dfn: {
    description: 'Represents the defining instance of a term',
  },
  dialog: {
    description: 'Defines a dialog box or window',
  },
  dir: {
    description: 'Not supported in HTML5. Use <ul> instead.',
  },
  div: {
    description: 'Defines a section in a document',
  },
  dl: {
    description: 'Defines a description list',
  },
  dt: {
    description: 'Defines a term/name in a description list',
  },
  em: {
    description: 'Defines emphasized text',
  },
  embed: {
    description: 'Defines a container for an external (non-HTML) application',
  },
  fieldset: {
    description: 'Groups related elements in a form',
  },
  figcaption: {
    description: 'Defines a caption for a <figure> element',
  },
  figure: {
    description: 'Specifies self-contained content',
  },
  font: {
    description: 'Not supported in HTML5. Use CSS instead.',
  },
  footer: {
    description: 'Defines a footer for a document or section',
  },
  form: {
    description: 'Defines an HTML form for user input',
  },
  frame: {
    description: 'Not supported in HTML5.',
  },
  frameset: {
    description: 'Not supported in HTML5.',
  },
  h1: {
    description: 'Defines HTML headings',
  },
  h2: {
    description: 'Defines HTML headings',
  },
  h3: {
    description: 'Defines HTML headings',
  },
  h4: {
    description: 'Defines HTML headings',
  },
  h5: {
    description: 'Defines HTML headings',
  },
  h6: {
    description: 'Defines HTML headings',
  },
  head: {
    description: 'Defines information about the document',
  },
  header: {
    description: 'Defines a header for a document or section',
  },
  hr: {
    description: 'Defines a thematic change in the content',
  },
  html: {
    description: 'Defines the root of an HTML document',
  },
  i: {
    description: 'Defines a part of text in an alternate voice or mood',
  },
  iframe: {
    description: 'Defines an inline frame',
  },
  img: {
    description: 'Defines an image',
  },
  input: {
    description: 'Defines an input control',
  },
  ins: {
    description: 'Defines a text that has been inserted into a document',
  },
  kbd: {
    description: 'Defines keyboard input',
  },
  label: {
    description: 'Defines a label for an <input> element',
  },
  legend: {
    description: 'Defines a caption for a <fieldset> element',
  },
  li: {
    description: 'Defines a list item',
  },
  link: {
    description:
      'Defines the relationship between a document and an external resource (most used to link to style sheets)',
  },
  main: {
    description: 'Specifies the main content of a document',
  },
  map: {
    description: 'Defines a client-side image-map',
  },
  mark: {
    description: 'Defines marked/highlighted text',
  },
  meta: {
    description: 'Defines metadata about an HTML document',
  },
  meter: {
    description: 'Defines a scalar measurement within a known range (a gauge)',
  },
  nav: {
    description: 'Defines navigation links',
  },
  noframes: {
    description: 'Not supported in HTML5.',
  },
  noscript: {
    description: 'Defines an alternate content for users that do not support client-side scripts',
  },
  object: {
    description: 'Defines an embedded object',
  },
  ol: {
    description: 'Defines an ordered list',
  },
  optgroup: {
    description: 'Defines a group of related options in a drop-down list',
  },
  option: {
    description: 'Defines an option in a drop-down list',
  },
  output: {
    description: 'Defines the result of a calculation',
  },
  p: {
    description: 'Defines a paragraph',
  },
  param: {
    description: 'Defines a parameter for an object',
  },
  picture: {
    description: 'Defines a container for multiple image resources',
  },
  pre: {
    description: 'Defines preformatted text',
  },
  progress: {
    description: 'Represents the progress of a task',
  },
  q: {
    description: 'Defines a short quotation',
  },
  rp: {
    description: 'Defines what to show in browsers that do not support ruby annotations',
  },
  rt: {
    description: 'Defines an explanation/pronunciation of characters (for East Asian typography)',
  },
  ruby: {
    description: 'Defines a ruby annotation (for East Asian typography)',
  },
  s: {
    description: 'Defines text that is no longer correct',
  },
  samp: {
    description: 'Defines sample output from a computer program',
  },
  script: {
    description: 'Defines a client-side script',
  },
  section: {
    description: 'Defines a section in a document',
  },
  select: {
    description: 'Defines a drop-down list',
  },
  small: {
    description: 'Defines smaller text',
  },
  source: {
    description: 'Defines multiple media resources for media elements (<video> and <audio>)',
  },
  span: {
    description: 'Defines a section in a document',
  },
  strike: {
    description: 'Not supported in HTML5. Use <del> or <s> instead.',
  },
  strong: {
    description: 'Defines important text',
  },
  style: {
    description: 'Defines style information for a document',
  },
  sub: {
    description: 'Defines subscripted text',
  },
  summary: {
    description: 'Defines a visible heading for a <details> element',
  },
  sup: {
    description: 'Defines superscripted text',
  },
  svg: {
    description: 'Defines a container for SVG graphics',
  },
  table: {
    description: 'Defines a table',
  },
  tbody: {
    description: 'Groups the body content in a table',
  },
  td: {
    description: 'Defines a cell in a table',
  },
  template: {
    description: 'Defines a template',
  },
  textarea: {
    description: 'Defines a multiline input control (text area)',
  },
  tfoot: {
    description: 'Groups the footer content in a table',
  },
  th: {
    description: 'Defines a header cell in a table',
  },
  thead: {
    description: 'Groups the header content in a table',
  },
  time: {
    description: 'Defines a date/time',
  },
  title: {
    description: 'Defines a title for the document',
  },
  tr: {
    description: 'Defines a row in a table',
  },
  track: {
    description: 'Defines text tracks for media elements (<video> and <audio>)',
  },
  tt: {
    description: 'Not supported in HTML5. Use CSS instead.',
  },
  u: {
    description: 'Defines text that should be stylistically different from normal text',
  },
  ul: {
    description: 'Defines an unordered list',
  },
  var: {
    description: 'Defines a variable',
  },
  video: {
    description: 'Defines a video or movie',
  },
  wbr: {
    description: 'Defines a possible line-break',
  },
}
