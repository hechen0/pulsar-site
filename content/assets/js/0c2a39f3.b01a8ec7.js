"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[48335],{3905:(e,a,t)=>{t.d(a,{Zo:()=>r,kt:()=>h});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},r=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,r=m(e,["components","mdxType","originalType","parentName"]),c=o(t),u=l,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||i;return t?n.createElement(h,s(s({ref:a},r),{},{components:t})):n.createElement(h,s({ref:a},r))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,s=new Array(i);s[0]=u;var m={};for(var p in a)hasOwnProperty.call(a,p)&&(m[p]=a[p]);m.originalType=e,m[c]="string"==typeof e?e:l,s[1]=m;for(var o=2;o<i;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(67294),l=t(86010);const i="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,s),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(87462),l=t(67294),i=t(86010),s=t(72389),m=t(67392),p=t(7094),o=t(12466);const r="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:a,block:t,defaultValue:s,values:d,groupId:u,className:h}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??v.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),g=(0,m.l)(k,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===s?s:s??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:f}=(0,p.U)(),[T,I]=(0,l.useState)(y),A=[],{blockElementScrollPositionUntilNextRender:N}=(0,o.o5)();if(null!=u){const e=b[u];null!=e&&e!==T&&k.some((a=>a.value===e))&&I(e)}const S=e=>{const a=e.currentTarget,t=A.indexOf(a),n=k[t].value;n!==T&&(N(a),I(n),null!=u&&f(u,String(n)))},P=e=>{let a=null;switch(e.key){case"Enter":S(e);break;case"ArrowRight":{const t=A.indexOf(e.currentTarget)+1;a=A[t]??A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;a=A[t]??A[A.length-1];break}}a?.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",r)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},h)},k.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:e=>A.push(e),onKeyDown:P,onClick:S},s,{className:(0,i.Z)("tabs__item",c,s?.className,{"tabs__item--active":T===a})}),t??a)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==T})))))}function u(e){const a=(0,s.Z)();return l.createElement(d,(0,n.Z)({key:String(a)},e))}},93814:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>p,default:()=>u,frontMatter:()=>m,metadata:()=>o,toc:()=>c});var n=t(87462),l=(t(67294),t(3905)),i=t(65488),s=t(85162);const m={id:"admin-api-schemas",title:"Manage Schemas",sidebar_label:"Schemas"},p=void 0,o={unversionedId:"admin-api-schemas",id:"admin-api-schemas",title:"Manage Schemas",description:"This page only shows some frequently used operations.",source:"@site/docs/admin-api-schemas.md",sourceDirName:".",slug:"/admin-api-schemas",permalink:"/docs/next/admin-api-schemas",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/admin-api-schemas.md",tags:[],version:"current",frontMatter:{id:"admin-api-schemas",title:"Manage Schemas",sidebar_label:"Schemas"},sidebar:"docsSidebar",previous:{title:"Packages",permalink:"/docs/next/admin-api-packages"},next:{title:"Transactions",permalink:"/docs/next/admin-api-transactions"}},r={},c=[{value:"Manage schema",id:"manage-schema",level:2},{value:"Upload a schema",id:"upload-a-schema",level:3},{value:"Get the latest schema",id:"get-the-latest-schema",level:3},{value:"Get a specific schema",id:"get-a-specific-schema",level:3},{value:"Extract a schema",id:"extract-a-schema",level:3},{value:"Delete a schema",id:"delete-a-schema",level:3},{value:"Manage schema AutoUpdate",id:"manage-schema-autoupdate",level:2},{value:"Enable schema AutoUpdate",id:"enable-schema-autoupdate",level:3},{value:"Disable schema AutoUpdate",id:"disable-schema-autoupdate",level:3},{value:"Manage schema validation enforcement",id:"manage-schema-validation-enforcement",level:2},{value:"Enable schema validation enforcement",id:"enable-schema-validation-enforcement",level:3},{value:"Disable schema validation enforcement",id:"disable-schema-validation-enforcement",level:3},{value:"Manage schema compatibility strategy",id:"manage-schema-compatibility-strategy",level:2},{value:"Set schema compatibility strategy",id:"set-schema-compatibility-strategy",level:3},{value:"Set topic-level schema compatibility strategy",id:"set-topic-level-schema-compatibility-strategy",level:4},{value:"Set namespace-level schema compatibility strategy",id:"set-namespace-level-schema-compatibility-strategy",level:4},{value:"Set cluster-level schema compatibility strategy",id:"set-cluster-level-schema-compatibility-strategy",level:4},{value:"Get schema compatibility strategy",id:"get-schema-compatibility-strategy",level:3},{value:"Get topic-level schema compatibility strategy",id:"get-topic-level-schema-compatibility-strategy",level:4},{value:"Get namespace-level schema compatibility strategy",id:"get-namespace-level-schema-compatibility-strategy",level:4}],d={toc:c};function u(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"This page only shows ",(0,l.kt)("strong",{parentName:"p"},"some frequently used operations"),"."),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Pulsar admin"),", including commands, flags, descriptions, and more, see ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},"Pulsar admin doc"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"REST API"),", including parameters, responses, samples, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api#/"},"REST")," API doc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"For the latest and complete information about ",(0,l.kt)("inlineCode",{parentName:"p"},"Java admin API"),", including classes, methods, descriptions, and more, see ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.10.x/"},"Java admin API doc"),".")))),(0,l.kt)("h2",{id:"manage-schema"},"Manage schema"),(0,l.kt)("h3",{id:"upload-a-schema"},"Upload a schema"),(0,l.kt)("p",null,"To upload (register) a new schema for a topic, you can use one of the following methods."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"upload")," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin schemas upload --filename <schema-definition-file> <topic-name>\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"schema-definition-file")," is in JSON format. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "<schema-type>",\n    "schema": "<an-utf8-encoded-string-of-schema-definition-data>",\n    "properties": {} // the properties associated with the schema\n}\n')),(0,l.kt)("p",null,"The following is an example of the ",(0,l.kt)("inlineCode",{parentName:"p"},"schema-definition-file")," for a JSON schema."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "JSON",\n    "schema": "{\\"type\\":\\"record\\",\\"name\\":\\"User\\",\\"namespace\\":\\"com.foo\\",\\"fields\\":[{\\"name\\":\\"file1\\",\\"type\\":[\\"null\\",\\"string\\"],\\"default\\":null},{\\"name\\":\\"file2\\",\\"type\\":[\\"null\\",\\"string\\"],\\"default\\":null},{\\"name\\":\\"file3\\",\\"type\\":[\\"string\\",\\"null\\"],\\"default\\":\\"dfdf\\"}]}",\n    "properties": {}\n}\n'))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," request to this endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/uploadSchema"},"POST /admin/v2/schemas/:tenant/:namespace/:topic/schema")),(0,l.kt)("p",null,"The post payload is in JSON format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "<schema-type>",\n    "schema": "<an-utf8-encoded-string-of-schema-definition-data>",\n    "properties": {} // the properties associated with the schema\n}\n'))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"void createSchema(String topic, PostSchemaPayload schemaPayload)\n")),(0,l.kt)("p",null,"Here is an example of ",(0,l.kt)("inlineCode",{parentName:"p"},"PostSchemaPayload"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'PulsarAdmin admin = \u2026;\n\nPostSchemaPayload payload = new PostSchemaPayload();\npayload.setType("INT8");\npayload.setSchema("");\n\nadmin.createSchema("my-tenant/my-ns/my-topic", payload);\n')))),(0,l.kt)("h3",{id:"get-the-latest-schema"},"Get the latest schema"),(0,l.kt)("p",null,"To get the latest schema for a topic, you can use one of the following methods. "),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin schemas get <topic-name>\n")),(0,l.kt)("p",null,"Example output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": 0,\n    "type": "String",\n    "timestamp": 0,\n    "data": "string",\n    "properties": {\n        "property1": "string",\n        "property2": "string"\n    }\n}\n'))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," request to this endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/getSchema"},"GET /admin/v2/schemas/:tenant/:namespace/:topic/schema")),(0,l.kt)("p",null,"Here is an example of a response, which is returned in JSON format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "<the-version-number-of-the-schema>",\n    "type": "<the-schema-type>",\n    "timestamp": "<the-creation-timestamp-of-the-version-of-the-schema>",\n    "data": "<an-utf8-encoded-string-of-schema-definition-data>",\n    "properties": {} // the properties associated with the schema\n}\n'))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"SchemaInfo createSchema(String topic)\n")),(0,l.kt)("p",null,"Here is an example of ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'PulsarAdmin admin = \u2026;\n\nSchemaInfo si = admin.getSchema("my-tenant/my-ns/my-topic");\n')))),(0,l.kt)("h3",{id:"get-a-specific-schema"},"Get a specific schema"),(0,l.kt)("p",null,"To get a specific version of a schema, you can use one of the following methods."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin schemas get <topic-name> --version=<version>\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," request to a schema endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/getSchema"},"GET /admin/v2/schemas/:tenant/:namespace/:topic/schema/:version")),(0,l.kt)("p",null,"Here is an example of a response, which is returned in JSON format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "<the-version-number-of-the-schema>",\n    "type": "<the-schema-type>",\n    "timestamp": "<the-creation-timestamp-of-the-version-of-the-schema>",\n    "data": "<an-utf8-encoded-string-of-schema-definition-data>",\n    "properties": {} // the properties associated with the schema\n}\n'))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"SchemaInfo createSchema(String topic, long version)\n")),(0,l.kt)("p",null,"Here is an example of ",(0,l.kt)("inlineCode",{parentName:"p"},"SchemaInfo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'PulsarAdmin admin = \u2026;\n\nSchemaInfo si = admin.getSchema("my-tenant/my-ns/my-topic", 1L);\n')))),(0,l.kt)("h3",{id:"extract-a-schema"},"Extract a schema"),(0,l.kt)("p",null,"To extract (provide) a schema via a topic, use the following method."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"extract")," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin schemas extract --classname <class-name> --jar <jar-path> --type <type-name>\n")))),(0,l.kt)("h3",{id:"delete-a-schema"},"Delete a schema"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"In any case, the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," action deletes ",(0,l.kt)("strong",{parentName:"p"},"all versions")," of a schema registered for a topic.")),(0,l.kt)("p",null,"To delete a schema for a topic, you can use one of the following methods."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," subcommand."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pulsar-admin schemas delete <topic-name>\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE")," request to a schema endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/deleteSchema"},"DELETE /admin/v2/schemas/:tenant/:namespace/:topic/schema")," "),(0,l.kt)("p",null,"Here is an example of a response returned in JSON format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": "<the-latest-version-number-of-the-schema>",\n}\n'))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"void deleteSchema(String topic)\n")),(0,l.kt)("p",null,"Here is an example of deleting a schema."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'PulsarAdmin admin = \u2026;\n\nadmin.deleteSchema("my-tenant/my-ns/my-topic");\n')))),(0,l.kt)("h2",{id:"manage-schema-autoupdate"},"Manage schema AutoUpdate"),(0,l.kt)("h3",{id:"enable-schema-autoupdate"},"Enable schema AutoUpdate"),(0,l.kt)("p",null,"To enable/enforce schema auto-update at the namespace level, you can use one of the following methods."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"set-is-allow-auto-update-schema")," subcommand. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-is-allow-auto-update-schema --enable tenant/namespace\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," request to a namespace endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/isAllowAutoUpdateSchema"},"POST /admin/v2/namespaces/:tenant/:namespace/isAllowAutoUpdateSchema")),(0,l.kt)("p",null,"The post payload is in JSON format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"{\n\u201cisAllowAutoUpdateSchema\u201d: \u201ctrue\u201d\n}\n"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("p",null,"Here is an example to enable schema auto-update for a tenant/namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'admin.namespaces().setIsAllowAutoUpdateSchema("my-namspace", true);\n')))),(0,l.kt)("h3",{id:"disable-schema-autoupdate"},"Disable schema AutoUpdate"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"When schema auto-update is disabled, you can only ",(0,l.kt)("a",{parentName:"p",href:"#upload-a-schema"},"register a new schema"),".")),(0,l.kt)("p",null,"To disable schema auto-update at the ",(0,l.kt)("strong",{parentName:"p"},"namespace")," level, you can use one of the following commands."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"set-is-allow-auto-update-schema")," subcommand. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-is-allow-auto-update-schema --disable tenant/namespace\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," request to a namespace endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/isAllowAutoUpdateSchema"},"POST /admin/v2/namespaces/:tenant/:namespace/isAllowAutoUpdateSchema")),(0,l.kt)("p",null,"The post payload is in JSON format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"{\n\u201cisAllowAutoUpdateSchema\u201d: \u201cfalse\u201d\n}\n"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("p",null,"Here is an example to enable schema auto-unpdate of a tenant/namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'admin.namespaces().setIsAllowAutoUpdateSchema("my-namspace", false);\n')))),(0,l.kt)("h2",{id:"manage-schema-validation-enforcement"},"Manage schema validation enforcement"),(0,l.kt)("h3",{id:"enable-schema-validation-enforcement"},"Enable schema validation enforcement"),(0,l.kt)("p",null,"To enforce schema validation enforcement at the ",(0,l.kt)("strong",{parentName:"p"},"cluster")," level, you can configure ",(0,l.kt)("inlineCode",{parentName:"p"},"schemaValidationEnforced")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file. "),(0,l.kt)("p",null,"To enable schema validation enforcement at the ",(0,l.kt)("strong",{parentName:"p"},"namespace")," level, you can use one of the following commands."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"set-schema-validation-enforce")," subcommand. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-schema-validation-enforce --enable tenant/namespace\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," request to a namespace endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/schemaValidationEnforced"},"POST /admin/v2/namespaces/:tenant/:namespace/schemaValidationEnforced")),(0,l.kt)("p",null,"The post payload is in JSON format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"{\n\u201cschemaValidationEnforced\u201d: \u201ctrue\u201d\n}\n"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("p",null,"Here is an example to enable schema validation enforcement for a tenant/namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'admin.namespaces().setSchemaValidationEnforced("my-namspace", true);\n')))),(0,l.kt)("h3",{id:"disable-schema-validation-enforcement"},"Disable schema validation enforcement"),(0,l.kt)("p",null,"To disable schema validation enforcement at the ",(0,l.kt)("strong",{parentName:"p"},"namespace")," level, you can use one of the following commands."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"set-schema-validation-enforce")," subcommand. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin namespaces set-schema-validation-enforce --disable tenant/namespace\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"POST")," request to a namespace endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/schemaValidationEnforced"},"POST /admin/v2/namespaces/:tenant/:namespace/schemaValidationEnforced")),(0,l.kt)("p",null,"The post payload is in JSON format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},"{\n\u201cschemaValidationEnforced\u201d: \u201cfalse\u201d\n}\n"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("p",null,"Here is an example to enable schema validation enforcement for a tenant/namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'admin.namespaces().setSchemaValidationEnforced("my-namspace", false);\n')))),(0,l.kt)("h2",{id:"manage-schema-compatibility-strategy"},"Manage schema compatibility strategy"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/schema-understand#schema-compatibility-check-strategy"},"schema compatibility check strategy")," configured at different levels has priority: topic level > namespace level > cluster level. In other words:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you set the strategy at both topic and namespace levels, the topic-level strategy is used. "),(0,l.kt)("li",{parentName:"ul"},"If you set the strategy at both namespace and cluster levels, the namespace-level strategy is used. ")),(0,l.kt)("h3",{id:"set-schema-compatibility-strategy"},"Set schema compatibility strategy"),(0,l.kt)("h4",{id:"set-topic-level-schema-compatibility-strategy"},"Set topic-level schema compatibility strategy"),(0,l.kt)("p",null,"To set a schema compatibility check strategy at the topic level, you can use one of the following methods."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin topicPolicies set-schema-compatibility-strategy"))," command. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin topicPolicies set-schema-compatibility-strategy <strategy> <topicName>\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," request to this endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/schemaCompatibilityStrategy"},"PUT /admin/v2/topics/:tenant/:namespace/:topic"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"void setSchemaCompatibilityStrategy(String topic, SchemaCompatibilityStrategy strategy)\n")),(0,l.kt)("p",null,"Here is an example of setting a schema compatibility check strategy at the topic level."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'PulsarAdmin admin = \u2026;\n\nadmin.topicPolicies().setSchemaCompatibilityStrategy("my-tenant/my-ns/my-topic", SchemaCompatibilityStrategy.ALWAYS_INCOMPATIBLE);\n')))),(0,l.kt)("h4",{id:"set-namespace-level-schema-compatibility-strategy"},"Set namespace-level schema compatibility strategy"),(0,l.kt)("p",null,"To set schema compatibility check strategy at the namespace level, you can use one of the following methods."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-schema-compatibility-strategy"))," command. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces set-schema-compatibility-strategy options\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"PUT")," request to this endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/schemaCompatibilityStrategy"},"PUT /admin/v2/namespaces/:tenant/:namespace"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.10.x/"},(0,l.kt)("inlineCode",{parentName:"a"},"setSchemaCompatibilityStrategy"))," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'admin.namespaces().setSchemaCompatibilityStrategy("test", SchemaCompatibilityStrategy.FULL);\n')))),(0,l.kt)("h4",{id:"set-cluster-level-schema-compatibility-strategy"},"Set cluster-level schema compatibility strategy"),(0,l.kt)("p",null,"To set schema compatibility check strategy at the ",(0,l.kt)("strong",{parentName:"p"},"cluster")," level, set ",(0,l.kt)("inlineCode",{parentName:"p"},"schemaCompatibilityStrategy")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"conf/broker.conf")," file."),(0,l.kt)("p",null,"The following is an example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"schemaCompatibilityStrategy=ALWAYS_INCOMPATIBLE\n")),(0,l.kt)("h3",{id:"get-schema-compatibility-strategy"},"Get schema compatibility strategy"),(0,l.kt)("h4",{id:"get-topic-level-schema-compatibility-strategy"},"Get topic-level schema compatibility strategy"),(0,l.kt)("p",null,"To get the topic-level schema compatibility check strategy, you can use one of the following methods."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin topicPolicies get-schema-compatibility-strategy"))," command. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin topicPolicies get-schema-compatibility-strategy <topicName>\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," request to this endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/schemaCompatibilityStrategy"},"GET /admin/v2/topics/:tenant/:namespace/:topic"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"SchemaCompatibilityStrategy getSchemaCompatibilityStrategy(String topic, boolean applied)\n")),(0,l.kt)("p",null,"Here is an example of getting the topic-level schema compatibility check strategy."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'PulsarAdmin admin = \u2026;\n\n// get the current applied schema compatibility strategy\nadmin.topicPolicies().getSchemaCompatibilityStrategy("my-tenant/my-ns/my-topic", true);\n\n// only get the schema compatibility strategy from topic policies\nadmin.topicPolicies().getSchemaCompatibilityStrategy("my-tenant/my-ns/my-topic", false);\n')))),(0,l.kt)("h4",{id:"get-namespace-level-schema-compatibility-strategy"},"Get namespace-level schema compatibility strategy"),(0,l.kt)("p",null,"You can get schema compatibility check strategy at namespace level using one of the following methods."),(0,l.kt)(i.Z,{groupId:"api-choice",defaultValue:"Admin CLI",values:[{label:"Admin CLI",value:"Admin CLI"},{label:"REST API",value:"REST API"},{label:"Java Admin API",value:"Java Admin API"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"Admin CLI",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{href:"/tools/pulsar-admin/",target:"_blank"},(0,l.kt)("inlineCode",{parentName:"p"},"pulsar-admin namespaces get-schema-compatibility-strategy"))," command. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pulsar-admin namespaces get-schema-compatibility-strategy options\n"))),(0,l.kt)(s.Z,{value:"REST API",mdxType:"TabItem"},(0,l.kt)("p",null,"Send a ",(0,l.kt)("inlineCode",{parentName:"p"},"GET")," request to this endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.10.3&apiversion=v2#operation/schemaCompatibilityStrategy"},"GET /admin/v2/namespaces/:tenant/:namespace"))),(0,l.kt)(s.Z,{value:"Java Admin API",mdxType:"TabItem"},(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/api/admin/2.10.x/"},(0,l.kt)("inlineCode",{parentName:"a"},"getSchemaCompatibilityStrategy"))," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'admin.namespaces().getSchemaCompatibilityStrategy("test", SchemaCompatibilityStrategy.FULL);\n')))))}u.isMDXComponent=!0}}]);