(window["webpackJsonpintroduction-website"]=window["webpackJsonpintroduction-website"]||[]).push([[0],{141:function(e,t,a){e.exports=a.p+"static/media/background.5e3ed3fd.png"},142:function(e,t,a){e.exports=a.p+"static/media/team.bd83dd67.jpg"},143:function(e,t,a){e.exports=a.p+"static/media/intro.98e2e1a0.jpg"},144:function(e,t,a){e.exports=a.p+"static/media/general.af21991d.md"},145:function(e,t,a){e.exports=a.p+"static/media/ui.d51910ab.md"},146:function(e,t,a){e.exports=a.p+"static/media/pipeline.59c7a5a8.md"},147:function(e,t,a){e.exports=a.p+"static/media/accessor.3b835f5d.md"},148:function(e,t,a){e.exports=a.p+"static/media/hololens.5541e345.md"},149:function(e,t,a){e.exports=a.p+"static/media/connector.cca927d8.md"},161:function(e,t,a){e.exports=a(302)},166:function(e,t,a){},298:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),l=a.n(o),i=(a(166),a(19)),c=a(20),m=a(23),s=a(21),u=a(24),d=a(310),g=a(306),E=a(151),p=a(46),h=a(33),b=a(7),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a.state={activeItem:a.props.activeItem},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return r.a.createElement(d.a,{fixed:"top",style:{backgroundColor:"#ffffff"},pointing:!0,secondary:!0,size:"huge"},r.a.createElement(g.a,null,b.isBrowser||b.isTablet?r.a.createElement(d.a.Item,{as:h.b,to:"/home"},r.a.createElement(E.a,{src:"Images/logo_with_title.png",size:"small"})):"",r.a.createElement(d.a.Item,{name:"Home",active:"Home"===e,onClick:this.handleItemClick,as:h.b,to:"/home"},r.a.createElement(p.a,{name:"home"}),b.isBrowser||b.isTablet?"Home":""),r.a.createElement(d.a.Item,{name:"Introduction",active:"Introduction"===e,onClick:this.handleItemClick,as:h.b,to:"/intro"},r.a.createElement(p.a,{name:"list ul"}),b.isBrowser||b.isTablet?"Introduction":""),r.a.createElement(d.a.Item,{name:"Team",active:"Team"===e,onClick:this.handleItemClick,as:h.b,to:"/Team"},r.a.createElement(p.a,{name:"users"}),b.isBrowser||b.isTablet?"Team":""),r.a.createElement(d.a.Item,{name:"github",as:"a",active:"github"===e,onClick:this.handleItemClick,href:"https://github.com/nbckr/HoloRepository-Core",position:"right"},r.a.createElement(p.a,{name:"github"}),b.isBrowser||b.isTablet?"GitHub":"")))}}]),t}(n.Component),y=(a(298),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement(E.a,{src:"Images/logos.png",id:"image"}),r.a.createElement("div",null,"Copyright (C) 2019 University College London"),r.a.createElement("div",null,"Read our"," ",r.a.createElement("a",{href:"https://github.com/nbckr/HoloRepository-Core"},"Source Code")," and"," ",r.a.createElement("a",{href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"Licence")))}}]),t}(n.Component)),w=a(141),k=a.n(w),C=(a(89),a(313)),v=a(309),I=a(312),R=a(311),T=a(70),S=a(307),H={fontSize:b.isBrowser?"2.2em":"1.3em",fontWeight:"normal"},j=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{activeItem:"Home"}),r.a.createElement("div",{style:{minHeight:700,backgroundImage:"url(".concat(k.a,")"),backgroundPosition:"center",backgroundSize:"cover",marginTop:"5"}},r.a.createElement(C.a,{style:{backgroundColor:"rgba(0,0,0,0.4)",backgroundPosition:"center",backgroundSize:"cover",height:700}},r.a.createElement(g.a,{textAlign:"center"},r.a.createElement("p",{style:{fontSize:b.isBrowser||b.isTablet?"6em":"3em",fontWeight:"normal",color:"white",marginTop:150}},"HoloRepository"),r.a.createElement("p",{style:{fontSize:b.isBrowser||b.isTablet?"1.8em":"1.2em",fontWeight:"normal",color:"white"}},"A system for transforming medical imaging studies such as CT or MRI scans into 3-dimensional holograms, storing data on a cloud-based platform and making it available for other systems."),r.a.createElement(v.a,{primary:!0,size:"huge",as:h.b,to:"/intro",style:{marginTop:50}},"Start Explore",r.a.createElement(p.a,{name:"right arrow"}))))),r.a.createElement(C.a,{style:{padding:"3em 0em",backgroundColor:"#f8f8f8"},vertical:!0},r.a.createElement(I.a,{container:!0,stackable:!0,verticalAlign:"middle",textAlign:"justified"},r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:8},r.a.createElement(R.a,{style:H},r.a.createElement(T.a,{circular:!0,style:{backgroundColor:"#ffc375",marginRight:5}}),"  HoloRepository UI"),r.a.createElement("p",{id:"grayFont"},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components.")),r.a.createElement(I.a.Column,{width:8,align:"middle"},r.a.createElement(E.a,{src:"Images/ui.png",size:"large"}))),r.a.createElement(S.a,null),r.a.createElement(I.a.Row,{style:{marginBottom:20}},r.a.createElement(I.a.Column,{width:8,align:"middle"},r.a.createElement(E.a,{src:"Images/pipeline.png",size:"large"})),r.a.createElement(I.a.Column,{width:8},r.a.createElement(R.a,{style:H},r.a.createElement(T.a,{circular:!0,style:{backgroundColor:"#a9dc7f",marginRight:5}}),"  HoloPipelines"),r.a.createElement("p",{id:"grayFont"},"A cloud-based service that performs the automatic generation of 3D models from 2D image stacks. Pre-trained neural network models are deployed and accessed with this component alongside traditional techniques like Hounsfield value thresholding."))),r.a.createElement(S.a,null),r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:8},r.a.createElement(R.a,{style:H},r.a.createElement(T.a,{circular:!0,style:{backgroundColor:"#8bbfe7",marginRight:5}}),"  HoloStorage and Accessor"),r.a.createElement("p",{id:"grayFont"},"A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server provides for the binary holographic data."),r.a.createElement("p",{id:"grayFont"},"An enhanced facade, offering a consistent interface to the HoloStorage and translating the public REST API to internal FHIR queries. To facilitate development of 3rd party components, the interface comes with an interactive OpenAPI documentation.")),r.a.createElement(I.a.Column,{width:8,align:"middle"},r.a.createElement(E.a,{src:"Images/accessor.png",size:"large"}))),r.a.createElement(S.a,null),r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:8,align:"middle"},r.a.createElement(E.a,{src:"Images/lens.png",size:"large"})),r.a.createElement(I.a.Column,{width:8},r.a.createElement(R.a,{style:H},r.a.createElement(T.a,{circular:!0,style:{backgroundColor:"#d1bcd2",marginRight:5}})," HoloLens App and Storage Connector"),r.a.createElement("p",{id:"grayFont"},"A simple application that demonstrates how to dynamically access 3D models stored in the HoloStorage. The scenes can be distributed alongside the Connector library and serve as examples and interactive documentation."),r.a.createElement("p",{id:"grayFont"},"A Unity library handling the runtime network connections from HoloLens applications to the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate development of 3rd party applications that plug into the HoloRepository ecosystem."))))),r.a.createElement(y,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),x=a(142),A=a.n(x),O=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{activeItem:"Team"}),r.a.createElement("div",{style:{minHeight:200,backgroundImage:"url(".concat(A.a,")"),backgroundPosition:"center",backgroundSize:"cover",marginTop:"5"}},r.a.createElement(C.a,{style:{backgroundColor:"rgba(0,0,0,0.4)",backgroundPosition:"center",backgroundSize:"cover",height:200}},r.a.createElement(R.a,{textAlign:"center",content:"Team",style:{fontSize:"4em",fontWeight:"normal",marginTop:75,color:"#ffffff"}}))),r.a.createElement(C.a,{style:{marginTop:0,backgroundColor:"#f8f8f8"}},r.a.createElement(g.a,{textAlign:"left"},r.a.createElement(C.a,null,r.a.createElement(I.a,{style:{padding:"1em 1em"}},r.a.createElement(I.a.Row,null,r.a.createElement("p",{style:{padding:"0em 1em"}},"(Sorted by alphabetical)")),r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:3},r.a.createElement(E.a,{src:"Images/niels.jpg",circular:!0})),r.a.createElement(I.a.Column,{width:13},r.a.createElement(R.a,{id:"normal_2"},"Boecker, Niels"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Team leader")),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Responsible for: "),"HoloRepository UI"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Email:")," niels.boecker.18@ucl.ac.uk"))),r.a.createElement(S.a,null),r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:3},r.a.createElement(E.a,{src:"Images/wenjie.png",circular:!0})),r.a.createElement(I.a.Column,{width:b.isBrowser?5:13},r.a.createElement(R.a,{id:"normal_2"},"Boon, Wenjie"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Team member")),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Responsible for: "),"HoloStorage and Accessor"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Email:")," wenjie.boon.18@ucl.ac.uk")),b.isBrowser?r.a.createElement(I.a.Column,{width:3},r.a.createElement(E.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})):"",b.isBrowser?r.a.createElement(I.a.Column,{width:5},r.a.createElement(R.a,{id:"normal_2"},"Boonyaprasert, Udomkarn"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Team member")),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Responsible for: "),"HoloPipelines"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Email:")," udomkarn.boonyaprasert.17@ucl.ac.uk")):""),r.a.createElement(S.a,null),b.isMobile?r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:3},r.a.createElement(E.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})),r.a.createElement(I.a.Column,{width:13},r.a.createElement(R.a,{id:"normal_2"},"Boonyaprasert, Udomkarn"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Team member")),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Responsible for: "),"HoloPipelines"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Email:")," udomkarn.boonyaprasert.17@ucl.ac.uk"))):"",b.isMobile?r.a.createElement(S.a,null):"",r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:3},r.a.createElement(E.a,{src:"Images/fanbo.png",circular:!0})),r.a.createElement(I.a.Column,{width:b.isBrowser?5:13},r.a.createElement(R.a,{id:"normal_2"},"Meng, Fanbo"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Team member")),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Responsible for: "),"HoloLens App and StorageConnector"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Email:")," fanbo.meng.18@ucl.ac.uk")),b.isBrowser?r.a.createElement(I.a.Column,{width:3},r.a.createElement(E.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})):"",b.isBrowser?r.a.createElement(I.a.Column,{width:5},r.a.createElement(R.a,{id:"normal_2"},"Wong, Ka Wai"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Team member")),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Responsible for: "),"HoloPipelines"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Email:")," ka.wong.18@ucl.ac.uk")):""),b.isMobile?r.a.createElement(S.a,null):"",b.isMobile?r.a.createElement(I.a.Row,null,r.a.createElement(I.a.Column,{width:3},r.a.createElement(E.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})),r.a.createElement(I.a.Column,{width:13},r.a.createElement(R.a,{id:"normal_2"},"Wong, Ka Wai"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Team member")),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Responsible for: "),"HoloPipelines"),r.a.createElement("p",{id:"common"},r.a.createElement("b",null,"Email:")," ka.wong.18@ucl.ac.uk"))):"")))),r.a.createElement(y,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),B=a(143),P=a.n(B),M=a(144),z=a.n(M),D=a(145),L=a.n(D),W=a(146),U=a.n(W),F=a(147),_=a.n(F),G=a(148),J=a.n(G),N=a(149),K=a.n(N),q=a(308),V=a(38),X={padding:b.isBrowser||b.isTablet?"0.5em 2em":"0.5em 0.5em",fontSize:b.isBrowser||b.isTablet?"1.1em":"0.8em",fontWeight:"normal"},$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).state={general:"",ui:"",pipeline:"",accessor:"",hololens:"",connector:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{activeItem:"Introduction"}),r.a.createElement("div",{style:{minHeight:200,backgroundImage:"url(".concat(P.a,")"),backgroundPosition:"center",backgroundSize:"cover",marginTop:"5"}},r.a.createElement(C.a,{style:{backgroundColor:"rgba(0,0,0,0.4)",backgroundPosition:"center",backgroundSize:"cover",height:200}},r.a.createElement(R.a,{textAlign:"center",content:"Introduction",style:{fontSize:"4em",fontWeight:"normal",marginTop:75,color:"#ffffff"}}))),r.a.createElement(C.a,{style:{marginTop:0,backgroundColor:"#f8f8f8"}},r.a.createElement(I.a,null,r.a.createElement(I.a.Row,null,b.isBrowser?r.a.createElement(I.a.Column,{width:"3"}):"",r.a.createElement(I.a.Column,{width:b.isBrowser?10:16},r.a.createElement(g.a,{textAlign:"justified"},r.a.createElement(C.a,null,r.a.createElement(T.a,{ribbon:!0,style:{padding:"0.5em 1em"}},"General"),r.a.createElement(V.a,{children:this.state.general,style:X})),r.a.createElement(C.a,null,r.a.createElement(T.a,{ribbon:!0,style:{backgroundColor:"#ffc375"}},"HoloRepository UI"),r.a.createElement(V.a,{children:this.state.ui,style:X})),r.a.createElement(C.a,null,r.a.createElement(T.a,{ribbon:!0,style:{backgroundColor:"#a9dc7f"}},"HoloPipelines"),r.a.createElement(V.a,{children:this.state.pipeline,style:X})),r.a.createElement(C.a,null,r.a.createElement(T.a,{ribbon:!0,style:{backgroundColor:"#8bbfe7"}},"HoloStorage and Accessor"),r.a.createElement(V.a,{children:this.state.accessor,style:X})),r.a.createElement(C.a,null,r.a.createElement(T.a,{ribbon:!0,style:{backgroundColor:"#d1bcd2"}},"HoloLens App and StorageConnector"),r.a.createElement(V.a,{children:this.state.hololens,style:X}),r.a.createElement(V.a,{children:this.state.connector,style:X})),r.a.createElement(q.a,{fluid:!0,style:{marginTop:"3em"}},r.a.createElement(q.a.Content,null,r.a.createElement(q.a.Header,null,"References")),r.a.createElement(q.a.Content,null,r.a.createElement("p",null,"[1] Smith CM. Medical Imaging in Mixed Reality: A holographics software pipeline. University College London, 2018."),r.a.createElement("p",null,"[2] Pratt P, Ives M, Lawton G, Simmons J, Radev N, Spyropoulou L, et al. Through the HoloLensTM looking glass: augmented reality for extremity reconstruction surgery using 3D vascular models with perforating vessels. Eur Radiol Exp 2018;2:2. doi:10.1186/s41747-017-0033-2."),r.a.createElement("p",null,"[3] Affolter R, Eggert S, Sieberth T, Thali M, Ebert LC. Applying augmented reality during a forensic autopsy\u2014Microsoft HoloLens as a DICOM viewer. Journal of Forensic Radiology and Imaging 2019;16:5\u20138. doi:10.1016/j.jofri.2018.11.003."),r.a.createElement("p",null,"[4] Page M. Visualization of Complex Medical Data Using Next-Generation Holographic Techniques 2017."),r.a.createElement("p",null,"[5] Beydoun A, Gupta V, Siegel E. DICOM to 3D Holograms: Use Case for Augmented Reality in Diagnostic and Interventional Radiology. SIIM Scientific Session Posters and Demonstrations 2017:4."),r.a.createElement("p",null,"[6] \xc7i\xe7ek \xd6, Abdulkadir A, Lienkamp SS, Brox T, Ronneberger O. 3D U-Net: Learning Dense Volumetric Segmentation from Sparse Annotation. ArXiv:160606650 [Cs] 2016."),r.a.createElement("p",null,"[7] Beers A, Brown J, Chang K, Hoebel K, Gerstner E, Rosen B, et al. DeepNeuro: an open-source deep learning toolbox for neuroimaging. ArXiv:180804589 [Cs] 2018."),r.a.createElement("p",null,"[8] Kamel PI, Nagy PG. Patient-Centered Radiology with FHIR: an Introduction to the Use of FHIR to Offer Radiology a Clinically Integrated Platform. J Digit Imaging 2018;31:327\u201333. doi:10.1007/s10278-018-0087-6."))))),b.isBrowser||b.isTablet?r.a.createElement(I.a.Column,{width:"3"}):""))),r.a.createElement(y,null))}},{key:"componentWillMount",value:function(){var e=this;fetch(z.a).then(function(e){return e.text()}).then(function(t){e.setState({general:t})}),fetch(L.a).then(function(e){return e.text()}).then(function(t){e.setState({ui:t})}),fetch(U.a).then(function(e){return e.text()}).then(function(t){e.setState({pipeline:t})}),fetch(_.a).then(function(e){return e.text()}).then(function(t){e.setState({accessor:t})}),fetch(J.a).then(function(e){return e.text()}).then(function(t){e.setState({hololens:t})}),fetch(K.a).then(function(e){return e.text()}).then(function(t){e.setState({connector:t})})}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),Q=a(35),Y=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(Q.c,null,r.a.createElement(Q.a,{exact:!0,path:"/",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(Q.a,{exact:!0,path:"/home",render:function(){return r.a.createElement(j,null)}}),r.a.createElement(Q.a,{exact:!0,path:"/intro",render:function(){return r.a.createElement($,null)}}),r.a.createElement(Q.a,{exact:!0,path:"/Team",render:function(){return r.a.createElement(O,null)}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){}},[[161,1,2]]]);
//# sourceMappingURL=main.f5cc264d.chunk.js.map