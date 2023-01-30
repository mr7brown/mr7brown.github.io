"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),k=a,m=p["".concat(s,".").concat(k)]||p[k]||u[k]||l;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const l={sidebar_label:"HBO Media Manifest Metadata",sidebar_position:0,tags:["Raspberry Pi","Git","Github","Linux","Google Assistant SDK","VS Code","HBO","Jenkins"]},o="HBO Media Manifest Core",r={unversionedId:"technical-specifications/media-manifest-core",id:"technical-specifications/media-manifest-core",title:"HBO Media Manifest Core",description:"The purpose of this document is to document and define WarnerMedia's requirements for the successful delivery of content and technical metadata using MovieLabs Media Manifest Core (MMC).",source:"@site/docs/technical-specifications/media-manifest-core.md",sourceDirName:"technical-specifications",slug:"/technical-specifications/media-manifest-core",permalink:"/docs/docs/technical-specifications/media-manifest-core",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technical-specifications/media-manifest-core.md",tags:[{label:"Raspberry Pi",permalink:"/docs/docs/tags/raspberry-pi"},{label:"Git",permalink:"/docs/docs/tags/git"},{label:"Github",permalink:"/docs/docs/tags/github"},{label:"Linux",permalink:"/docs/docs/tags/linux"},{label:"Google Assistant SDK",permalink:"/docs/docs/tags/google-assistant-sdk"},{label:"VS Code",permalink:"/docs/docs/tags/vs-code"},{label:"HBO",permalink:"/docs/docs/tags/hbo"},{label:"Jenkins",permalink:"/docs/docs/tags/jenkins"}],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"HBO Media Manifest Metadata",sidebar_position:0,tags:["Raspberry Pi","Git","Github","Linux","Google Assistant SDK","VS Code","HBO","Jenkins"]},sidebar:"tutorialSidebar",previous:{title:"Technical Specifications",permalink:"/docs/docs/technical-specifications/"},next:{title:"HBO High-Definition Range",permalink:"/docs/docs/technical-specifications/HBO-HDR_Spec"}},s={},d=[{value:"Media Manifest Core",id:"media-manifest-core",level:3},{value:"Identifiers",id:"identifiers",level:3},{value:"Parameter Definitions",id:"parameter-definitions",level:3},{value:"Example",id:"example",level:4},{value:"Inventory Metadata",id:"inventory-metadata",level:3},{value:"Audio",id:"audio",level:3},{value:"5.1 Surround English Snippet",id:"51-surround-english-snippet",level:4},{value:"Dual Mono Spanish Snippet",id:"dual-mono-spanish-snippet",level:4},{value:"Inventory",id:"inventory",level:3},{value:"Snippet",id:"snippet",level:4},{value:"Markers",id:"markers",level:3},{value:"Snippet",id:"snippet-1",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hbo-media-manifest-core"},"HBO Media Manifest Core"),(0,a.kt)("p",null,"The purpose of this document is to document and define ",(0,a.kt)("strong",{parentName:"p"},"WarnerMedia's")," requirements for the successful delivery of content and technical metadata using MovieLabs Media Manifest Core (MMC)."),(0,a.kt)("h3",{id:"media-manifest-core"},"Media Manifest Core"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WarnerMedia")," has standardized on MMC, which is an industry-standard from the MovieLabs family of specifications, to accompany all packages or assets delivered to ",(0,a.kt)("strong",{parentName:"p"},"WarnerMedia"),". The Media Manifest Core has a simple metadata structure able to express relationships between media elements and technical metadata that is discrete from the physical form and location of the assets. WarnerMedia is currently utilizing ",(0,a.kt)("a",{parentName:"p",href:"https://movielabs.com/md/manifest/v1.8/Manifest_v1.8.pdf"},"Media Manifest version 1.8.pdf"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WarnerMedia's")," manifest requirement is a well-defined subset of the overall content in MMC. Specifically, we support the following key features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inventory -")," The inventory of media, including video, audio, text tracks, and artwork.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Video - Description of the parent video track."),(0,a.kt)("li",{parentName:"ul"},"Audio - Description of one or more audio tracks."),(0,a.kt)("li",{parentName:"ul"},"Subtitle - Metadata about subtitle tracks."),(0,a.kt)("li",{parentName:"ul"},"Image - Description of the images."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Presentations"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Markers - Representation of timed events in the video track."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Picture Groups -")," Metadata about artwork referenced in inventory.")),(0,a.kt)("p",null,"In addition to metadata requirements, ",(0,a.kt)("strong",{parentName:"p"},"WarnerMedia")," relies on consistent taxonomy and controlled vocabulary for various fields. For accepted values, refer to the ",(0,a.kt)("strong",{parentName:"p"},"Controlled Vocabulary")," section."),(0,a.kt)("h3",{id:"identifiers"},"Identifiers"),(0,a.kt)("p",null,"As prescribed by the MMC specification, the primary requirement for identifiers is global uniqueness. In order to comply with the MMC specification, providers MUST supply identifiers in the following format:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"md:","[idtype]",":","[scheme]",":","[SSID]",":","[additional information]")),(0,a.kt)("h3",{id:"parameter-definitions"},"Parameter Definitions"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<idtype>")," - the type of identifier. See Common Metadata for more details on identifier types."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<scheme>")," - the namespace of the identifier. We accept registered identifiers with EIDR, TMS, Gracenote or any Common Metadata recognized naming scheme. We also accept the private house scheme used in the distributor org."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"<SSID>")," - The scheme specific ID or SSID is a string that corresponds with IDs in scheme. For example: ",(0,a.kt)("strong",{parentName:"p"},"WarnerMedia")," for EIDR scheme"),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"md: id:EIDR-S:58D1-A4D9-E968-F592-5435-M")),(0,a.kt)("p",null,"The parent ContentID MUST be the identification of the edit-level entity in the distributor org. It MUST be specified within the Inventory Metadata-type, which can contain: Content ID, metadata, or reference a metadata container."),(0,a.kt)("h3",{id:"inventory-metadata"},"Inventory Metadata"),(0,a.kt)("p",null,"This purpose of this section is to contain either Basic Metadata, or a container reference to Basic Metadata. Contributors to ",(0,a.kt)("strong",{parentName:"p"},"WarnerMedia")," MUST use this section of the MMC to provide the Content ID, Work Type and distribution organization."),(0,a.kt)("h3",{id:"audio"},"Audio"),(0,a.kt)("p",null,"This section describes the two tracks for audio. The first example is for 5.1 Surround English and the second is for Dual Mono Spanish."),(0,a.kt)("h4",{id:"51-surround-english-snippet"},"5.1 Surround English Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<Audio AudioTrackID="md:audtrackid:eidr-x:10.5240/961B-5417-8551-0544-8586-V:composite-5.1.en">\n   <Type>primary</Type>\n   <Description>5.1 Surround</Description>\n   <Language>en</Language>\n   <Channels>6</Channels>\n   <Encoding>\n      <Codec>PCM</Codec>\n      <TrackReference>1</TrackReference>\n      <ChannelMapping>L,R,C,LFE,LS,RS</ChannelMapping>\n   </Encoding>\n</Audio>\n')),(0,a.kt)("h4",{id:"dual-mono-spanish-snippet"},"Dual Mono Spanish Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<Audio AudioTrackID="md:audtrackid:eidr-x:10.5240/961B-5417-8551-0544-8586-V:composite-2.0DM.en">\n   <Type>Primary</Type>\n   <Description>Dual Mono</Description>\n   <Language>es</Language>\n   <Channels>2</Channels>\n   <Encoding>\n      <Codec>PCM</Codec>\n      <TrackReference>2</TrackReference>\n      <ChannelMapping>M1,M2</ChannelMapping>\n   </Encoding>\n</Audio>\n')),(0,a.kt)("h3",{id:"inventory"},"Inventory"),(0,a.kt)("p",null,"This purpose of this section in the MMC is to provide technical details regarding the delivered assets. Several fields are required for the DTC workflow, while some are optional and are indicated accordingly."),(0,a.kt)("h4",{id:"snippet"},"Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<Image ImageID="md:imageid:eidr-s:C124-0623-A677-69A8-0B8C-J:Logo-png">\n   <Width>4320</Width>\n   <Height>1300</Height>\n   <Encoding>png</Encoding>\n   <ContainerReference>\n      <ContainerLocation>/A2017084/AustinPowersIMOM_1997_2017084_Logo_4320x1300.png</ContainerLocation>\n   </ContainerReference>\n</Image>\n')),(0,a.kt)("table",null,(0,a.kt)("caption",null,"Field Descriptions"),(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"col"},"MMC Field Name"),(0,a.kt)("th",{scope:"col"},"Required?"),(0,a.kt)("th",{scope:"col"},"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"3"},(0,a.kt)("b",null,"Video"))),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"VideoTrackID"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The identifier of the video track. md:videotrackid:[scheme]:[SSID]")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Type"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The video type. Only primary video is accepted.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"SubType"),(0,a.kt)("td",null),(0,a.kt)("td",null,"This field may be used to further describe the primary video. (Theatrical, Broadcast, DTC, Censored).")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Encoding"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Codec"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The codec used such as JPEG2000. See accepted video codecs in the Controlled Vocabulary Section.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"BitRateAverage"),(0,a.kt)("td",null),(0,a.kt)("td",null,"Bitrate averaged over the entire track.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ActualLength"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The actual length of the track. Example: PT1H40M27.130S")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Picture"),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"AspectRatio"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The original aspect ratio calculated by dividing active width pixels / active height pixels. ")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"FrameRate"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The native frame rate. Frames/seconds denoted as decimal.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ActiveWidthPixels"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Number of active width pixels.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ActiveHeightPixels"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Number of active height pixels.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"WidthPixels"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Number pixel columns.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"HeightPixels"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Number of pixel rows.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Progressive"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Boolean indicating picture scan type. \u201ctrue\u201d=progressive, \u201cfalse\u201d=interlaced")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"3"},(0,a.kt)("b",null,"Subtitle"))),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"SubtitleTrackId"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The identifier of the subtitle track. The format - md:subtrackid:[scheme]:[SSID]")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Type"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The purpose of the Subtitle. See accepted subtitle types in the Controlled Vocabulary section.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"FormatType"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The subtitle format type.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Language"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Language of the subtitle track.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ContainerReference"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ContainerLocation"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Contains a URL referencing the location of the file.")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"3"},(0,a.kt)("b",null,"Audio"))),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"AudioTrackID"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The attribute of the audio track. The format md:audtrackid:[scheme]:[SSID]:[info]")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Type"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"SubType"),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Language"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Indicates how channels are mapped to intended speaker locations.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Encoding"),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Codec"),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Channels"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"TrackReference"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"An integer indicating the target track\u2019s number/position.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ChannelMapping"),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ContainerReference"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ContainerLocation"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Contains a URL referencing the location of the file.")),(0,a.kt)("tr",null,(0,a.kt)("td",{colspan:"3"},(0,a.kt)("b",null,"Image"))),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ImageID"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The identifier of the image. md:imageid:[schema]:[SSID]:[info]")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Width"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The image width.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Height"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The image height.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Purpose"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The image purpose. See accepted types in the Controlled Vocabulary section.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"Encoding"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"The encoding method or format.")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ContainerReference"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"},"ContainerLocation"),(0,a.kt)("td",null,"Yes"),(0,a.kt)("td",null,"Contains a URL referencing the location of the file.")))),(0,a.kt)("h3",{id:"markers"},"Markers"),(0,a.kt)("p",null,"A marker identifies a significant time-code event within a work. A single, \u201cmarked\u201d frame may represent one point in time (a single frame\u2019s timecode label) or may be one of a pair of markers describing the start and end of a segment of interest."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Distinct segments described by first-frame (FF) and last-frame (LF) notation may overlap.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Composition segments (declared using the in-point label FFOC and the out-point label LFOC) MUST bracket a single, contiguous segment of program content. If one were to play all composition segments back-to-back, playback MUST not include non-program material nor exclude any program content.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Logos, slates, cards and so forth are not program content and SHOULD NOT appear in a playlist of composition segments. However, they MUST be \u201cmarked.\u201d")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"End-credits and start-credits are not distinct composition segments and MUST be marked independently of the composition segment in which they appear."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WarnerMedia")," supports label types described in SMPTE ST 2067-3 and will not recognize or process a distributor\u2019s proprietary marker labels. Currently-recognized labels are listed in the Controlled Vocabulary section below."),(0,a.kt)("p",null,"In addition to the SMPTE labels, we support two additional, non-SMPTE labels (a pair) which allow us to distinguish black outside of the bounds of the program from commercial black. The two labels are:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"FFVB \u2013 First frame of video black"),(0,a.kt)("li",{parentName:"ol"},"LFVB \u2013 Last frame of video black")),(0,a.kt)("h4",{id:"snippet-1"},"Snippet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<Marker>\n   <Timecode dropframe="false">00:59:20:00</Timecode>\n   <DisplayLabel language="en">START: SLATE</DisplayLabel>\n   <Label>FFHS</Label>\n</Marker>\n')))}p.isMDXComponent=!0}}]);