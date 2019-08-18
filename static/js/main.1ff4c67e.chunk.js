(window["webpackJsonpintroduction-website"]=window["webpackJsonpintroduction-website"]||[]).push([[0],{141:function(e,a,t){e.exports=t.p+"static/media/background.451c266f.jpg"},151:function(e,a,t){e.exports=t(292)},156:function(e,a,t){},288:function(e,a,t){},292:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(39),l=t.n(r),i=(t(156),t(19)),c=t(20),m=t(23),s=t(21),d=t(24),u=t(300),p=t(296),h=t(142),g=t(37),E=t(33),b=t(8),f=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).handleItemClick=function(e,a){var n=a.name;return t.setState({activeItem:n})},t.state={activeItem:t.props.activeItem},t}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return o.a.createElement(u.a,{fixed:"top",style:{backgroundColor:"#ffffff"},pointing:!0,secondary:!0,size:"huge"},o.a.createElement(p.a,null,b.isBrowser||b.isTablet?o.a.createElement(u.a.Item,{as:E.b,to:"/home",style:{padding:"1em 2em"}},o.a.createElement(h.a,{src:"Images/logo_with_title.png",size:"small"})):"",o.a.createElement(u.a.Item,{name:"Home",active:"Home"===e,onClick:this.handleItemClick,as:E.b,to:"/home"},o.a.createElement(g.a,{name:"home"}),b.isBrowser||b.isTablet?"Home":""),o.a.createElement(u.a.Item,{name:"Introduction",active:"Introduction"===e,onClick:this.handleItemClick,as:E.b,to:"/intro"},o.a.createElement(g.a,{name:"list ul"}),b.isBrowser||b.isTablet?"Introduction":""),o.a.createElement(u.a.Item,{name:"Team",active:"Team"===e,onClick:this.handleItemClick,as:E.b,to:"/Team"},o.a.createElement(g.a,{name:"users"}),b.isBrowser||b.isTablet?"Team":""),o.a.createElement(u.a.Item,{name:"github",as:"a",active:"github"===e,onClick:this.handleItemClick,href:"https://github.com/nbckr/HoloRepository-Core",position:"right"},o.a.createElement(g.a,{name:"github"}),b.isBrowser||b.isTablet?"GitHub":"")))}}]),a}(n.Component),y=(t(288),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement(h.a,{src:"Images/logos.png",id:"image"}),o.a.createElement("div",null,"Copyright (C) 2019 University College London"),o.a.createElement("div",null,"Read our"," ",o.a.createElement("a",{href:"https://github.com/nbckr/HoloRepository-Core"},"Source Code")," and"," ",o.a.createElement("a",{href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"Licence")))}}]),a}(n.Component)),w=t(141),v=t.n(w),k=(t(89),t(303)),I=t(301),C=t(305),H=t(298),R=t(70),T=t(304),A=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{activeItem:"Home"}),o.a.createElement("div",{style:{minHeight:700,backgroundImage:"url(".concat(v.a,")"),backgroundPosition:"center",backgroundSize:"cover",marginTop:"5"}},o.a.createElement(k.a,{style:{backgroundColor:"rgba(0,0,0,0.5)",backgroundPosition:"center",backgroundSize:"cover",height:700}},o.a.createElement(p.a,{textAlign:"center"},o.a.createElement("p",{style:{fontSize:b.isBrowser||b.isTablet?"6em":"3em",fontWeight:"normal",color:"white",marginTop:150}},"HoloRepository"),o.a.createElement("p",{style:{fontSize:b.isBrowser||b.isTablet?"1.8em":"1.2em",fontWeight:"normal",color:"white"}},"A system for transforming medical imaging studies such as CT or MRI scans into 3-dimensional holograms, storing data on a cloud-based platform and making it available for other systems."),o.a.createElement(I.a,{primary:!0,size:"huge",as:E.b,to:"/intro",style:{marginTop:50}},"Start Explore",o.a.createElement(g.a,{name:"right arrow"}))))),o.a.createElement(k.a,{style:{padding:"8em 0em"},vertical:!0},o.a.createElement(p.a,{textAlign:"justified"},o.a.createElement(C.a,{container:!0,stackable:!0},o.a.createElement(C.a.Row,null,o.a.createElement(C.a.Column,{width:8},o.a.createElement(H.a,{horizontal:!0,style:{marginBottom:20}},o.a.createElement(H.a.Item,null,o.a.createElement(R.a,{circular:!0,style:{backgroundColor:"#ffc375"}})),o.a.createElement(H.a.Item,null,o.a.createElement(T.a,{as:"h3",style:{fontSize:b.isBrowser?"2em":"1.3em",fontWeight:"normal"}},"HoloRepository UI"))),o.a.createElement("p",{id:"grayFont"},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement(H.a,{horizontal:!0,style:{marginTop:20,marginBottom:20}},o.a.createElement(H.a.Item,null,o.a.createElement(R.a,{circular:!0,style:{backgroundColor:"#8bbfe7"}})),o.a.createElement(H.a.Item,null,o.a.createElement(T.a,{as:"h3",style:{fontSize:b.isBrowser?"2em":"1.3em",fontWeight:"normal"}},"HoloStorage and Accessor"))),o.a.createElement("p",{id:"grayFont"},"A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server provides for the binary holographic data."),o.a.createElement("p",{id:"grayFont"},"An enhanced facade, offering a consistent interface to the HoloStorage and translating the public REST API to internal FHIR queries. To facilitate development of 3rd party components, the interface comes with an interactive OpenAPI documentation.")),o.a.createElement(C.a.Column,{floated:"right",width:8},o.a.createElement(H.a,{horizontal:!0,style:{marginBottom:20}},o.a.createElement(H.a.Item,null,o.a.createElement(R.a,{circular:!0,style:{backgroundColor:"#a9dc7f"}})),o.a.createElement(H.a.Item,null,o.a.createElement(T.a,{as:"h3",style:{fontSize:b.isBrowser?"2em":"1.3em",fontWeight:"normal"}},"HoloPipelines"))),o.a.createElement("p",{id:"grayFont"},"A cloud-based service that performs the automatic generation of 3D models from 2D image stacks. Pre-trained neural network models are deployed and accessed with this component alongside traditional techniques like Hounsfield value thresholding."),o.a.createElement(H.a,{horizontal:!0,style:{marginTop:20,marginBottom:20}},o.a.createElement(H.a.Item,null,o.a.createElement(R.a,{circular:!0,style:{backgroundColor:"#d1bcd2"}})),o.a.createElement(H.a.Item,null,o.a.createElement(T.a,{as:"h3",style:{fontSize:b.isBrowser?"2em":"1.3em",fontWeight:"normal"}},"HoloLens App and StorageConnector"))),o.a.createElement("p",{id:"grayFont"},"A simple application that demonstrates how to dynamically access 3D models stored in the HoloStorage. The scenes can be distributed alongside the Connector library and serve as examples and interactive documentation."),o.a.createElement("p",{id:"grayFont"},"A Unity library handling the runtime network connections from HoloLens applications to the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate development of 3rd party applications that plug into the HoloRepository ecosystem.")))))),o.a.createElement(y,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),a}(n.Component),S=t(297),j=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{activeItem:"Team"}),o.a.createElement(k.a,{vertical:!0},o.a.createElement(T.a,{textAlign:"center",as:"h1",content:"Team",style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"2em"}}),o.a.createElement(p.a,{textAlign:"left"},o.a.createElement(C.a,{style:{padding:"5em 0em"}},o.a.createElement(C.a.Row,null,o.a.createElement("p",{style:{padding:"0em 1em"}},"(Sorted by alphabetical)")),o.a.createElement(C.a.Row,null,o.a.createElement(C.a.Column,{width:3},o.a.createElement(h.a,{src:"Images/niels.jpg",circular:!0})),o.a.createElement(C.a.Column,{width:13},o.a.createElement(T.a,{id:"normal_2"},"Boecker, Niels"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Team leader")),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Responsible for: "),"HoloRepository UI"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Email:")," niels.boecker.18@ucl.ac.uk"))),o.a.createElement(S.a,null),o.a.createElement(C.a.Row,null,o.a.createElement(C.a.Column,{width:3},o.a.createElement(h.a,{src:"Images/wenjie.png",circular:!0})),o.a.createElement(C.a.Column,{width:b.isBrowser?5:13},o.a.createElement(T.a,{id:"normal_2"},"Boon, Wenjie"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Responsible for: "),"HoloStorage and Accessor"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Email:")," wenjie.boon.18@ucl.ac.uk")),b.isBrowser?o.a.createElement(C.a.Column,{width:3},o.a.createElement(h.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})):"",b.isBrowser?o.a.createElement(C.a.Column,{width:5},o.a.createElement(T.a,{id:"normal_2"},"Boonyaprasert, Udomkarn"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Responsible for: "),"HoloPipelines"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Email:")," udomkarn.boonyaprasert.17@ucl.ac.uk")):""),o.a.createElement(S.a,null),b.isMobile?o.a.createElement(C.a.Row,null,o.a.createElement(C.a.Column,{width:3},o.a.createElement(h.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})),o.a.createElement(C.a.Column,{width:13},o.a.createElement(T.a,{id:"normal_2"},"Boonyaprasert, Udomkarn"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Team leader")),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Responsible for: "),"HoloRepository UI"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Email:")," niels.boecker.18@ucl.ac.uk"))):"",b.isMobile?o.a.createElement(S.a,null):"",o.a.createElement(C.a.Row,null,o.a.createElement(C.a.Column,{width:3},o.a.createElement(h.a,{src:"Images/fanbo.png",circular:!0})),o.a.createElement(C.a.Column,{width:b.isBrowser?5:13},o.a.createElement(T.a,{id:"normal_2"},"Meng, Fanbo"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Responsible for: "),"HoloLens App and StorageConnector"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Email:")," fanbo.meng.18@ucl.ac.uk")),b.isBrowser?o.a.createElement(C.a.Column,{width:3},o.a.createElement(h.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})):"",b.isBrowser?o.a.createElement(C.a.Column,{width:5},o.a.createElement(T.a,{id:"normal_2"},"Wong, Ka Wai"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Responsible for: "),"HoloPipelines"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Email:")," ka.wong.18@ucl.ac.uk")):""),b.isMobile?o.a.createElement(S.a,null):"",b.isMobile?o.a.createElement(C.a.Row,null,o.a.createElement(C.a.Column,{width:3},o.a.createElement(h.a,{src:"https://react.semantic-ui.com/images/wireframe/image.png",circular:!0})),o.a.createElement(C.a.Column,{width:13},o.a.createElement(T.a,{id:"normal_2"},"Wong, Ka Wai"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Team member")),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Responsible for: "),"HoloPipelines"),o.a.createElement("p",{id:"common"},o.a.createElement("b",null,"Email:")," ka.wong.18@ucl.ac.uk"))):""))),o.a.createElement(y,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),a}(n.Component),B=t(299),O=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{activeItem:"Introduction"}),o.a.createElement(T.a,{textAlign:"center",content:"Introduction",style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"2em"}}),o.a.createElement(k.a,{style:{padding:"5em 0em"},vertical:!0},o.a.createElement(p.a,{textAlign:"justified"},o.a.createElement(C.a,{container:!0,stackable:!0,verticalAlign:"middle"},o.a.createElement(C.a.Column,{width:16},o.a.createElement(T.a,{id:"normal_2"},"Background"),o.a.createElement("p",{id:"common"},"Recent technical advancements in the realm of augmented reality (AR) and the availability of consumer head-mounted display (HMD) devices such as the Microsoft HoloLens have opened a wealth of opportunities for healthcare applications, particularly in medical imaging. Several approaches have been proposed to transform imaging studies, such as CT or MRI scans, into three-dimensional models which can be inspected and manipulated in an AR experience [1\u20134]. Generally, all studies agree that the technology is very promising and may even revolutionise the practice of medicine [5]. However, virtually every existing workflow relies on significant manual guidance to conduct steps like segmentation or conversion to polygonal models."),o.a.createElement("p",{id:"common"},"Neural networks can help automate many tedious tasks and are increasingly used in medical imaging. Architectures such as the 3D U-Net [6] generate models which autonomously create segmentation maps, even with relatively little training data. However, translating these advancements from theory to clinical practice has unique challenges: The source code may not be available, documentation may be missing or require too much technical knowledge. Furthermore, different operating systems, software packages and dependencies obstruct successful usage [7]."),o.a.createElement("p",{id:"common"},"With the HoloRepository project, we intend to build the technical base for a seamless workflow that allows practitioners to generate 3D models from imaging studies and access them in an AR setting with as little manual involvement as possible. Pre-trained neural networks can be packaged into shareable Docker containers and accessed with a unified interface. Additionally, the Fast Healthcare Interoperability Resources (FHIR) standard, which is rapidly being adapted and also has a significant impact on the field of radiology [8], will connect the 3D models with existing patient health records."),o.a.createElement(T.a,{id:"normal_2"},"HoloRepositoryUI"),o.a.createElement("p",{id:"common"},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement(S.a,null),o.a.createElement(T.a,{id:"normal_2"},"HoloPipelines"),o.a.createElement("p",{id:"common"},"A cloud-based service that performs the automatic generation of 3D models from 2D image stacks. Pre-trained neural network models are deployed and accessed with this component alongside traditional techniques like Hounsfield value thresholding."),o.a.createElement(S.a,null),o.a.createElement(T.a,{id:"normal_2"},"HoloStorage"),o.a.createElement("p",{id:"common"},"A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server provides for the binary holographic data."),o.a.createElement(S.a,null),o.a.createElement(T.a,{id:"normal_2"},"HoloStorageAccessor"),o.a.createElement("p",{id:"common"},"An enhanced facade, offering a consistent interface to the HoloStorage and translating the public REST API to internal FHIR queries. To facilitate development of 3rd party components, the interface comes with an interactive OpenAPI documentation."),o.a.createElement(S.a,null),o.a.createElement(T.a,{id:"normal_2"},"HoloStorageConnector"),o.a.createElement("p",{id:"common"},"A Unity library handling the runtime network connections from HoloLens applications to the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate development of 3rd party applications that plug into the HoloRepository ecosystem."),o.a.createElement(S.a,null),o.a.createElement(T.a,{id:"normal_2"},"HoloRepository demo application"),o.a.createElement("p",{id:"common"},"A simple application that demonstrates how to dynamically access 3D models stored in the HoloStorage. The scenes can be distributed alongside the Connector library and serve as examples and interactive documentation."))),o.a.createElement(B.a,{fluid:!0,style:{marginTop:"3em"}},o.a.createElement(B.a.Content,null,o.a.createElement(B.a.Header,null,"References")),o.a.createElement(B.a.Content,null,o.a.createElement("p",null,"[1] Smith CM. Medical Imaging in Mixed Reality: A holographics software pipeline. University College London, 2018."),o.a.createElement("p",null,"[2] Pratt P, Ives M, Lawton G, Simmons J, Radev N, Spyropoulou L, et al. Through the HoloLensTM looking glass: augmented reality for extremity reconstruction surgery using 3D vascular models with perforating vessels. Eur Radiol Exp 2018;2:2. doi:10.1186/s41747-017-0033-2."),o.a.createElement("p",null,"[3] Affolter R, Eggert S, Sieberth T, Thali M, Ebert LC. Applying augmented reality during a forensic autopsy\u2014Microsoft HoloLens as a DICOM viewer. Journal of Forensic Radiology and Imaging 2019;16:5\u20138. doi:10.1016/j.jofri.2018.11.003."),o.a.createElement("p",null,"[4] Page M. Visualization of Complex Medical Data Using Next-Generation Holographic Techniques 2017."),o.a.createElement("p",null,"[5] Beydoun A, Gupta V, Siegel E. DICOM to 3D Holograms: Use Case for Augmented Reality in Diagnostic and Interventional Radiology. SIIM Scientific Session Posters and Demonstrations 2017:4."),o.a.createElement("p",null,"[6] \xc7i\xe7ek \xd6, Abdulkadir A, Lienkamp SS, Brox T, Ronneberger O. 3D U-Net: Learning Dense Volumetric Segmentation from Sparse Annotation. ArXiv:160606650 [Cs] 2016."),o.a.createElement("p",null,"[7] Beers A, Brown J, Chang K, Hoebel K, Gerstner E, Rosen B, et al. DeepNeuro: an open-source deep learning toolbox for neuroimaging. ArXiv:180804589 [Cs] 2018."),o.a.createElement("p",null,"[8] Kamel PI, Nagy PG. Patient-Centered Radiology with FHIR: an Introduction to the Use of FHIR to Offer Radiology a Clinically Integrated Platform. J Digit Imaging 2018;31:327\u201333. doi:10.1007/s10278-018-0087-6."))))),o.a.createElement(y,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),a}(n.Component),D=t(36),M=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(E.a,null,o.a.createElement(D.c,null,o.a.createElement(D.a,{exact:!0,path:"/",render:function(){return o.a.createElement(A,null)}}),o.a.createElement(D.a,{exact:!0,path:"/home",render:function(){return o.a.createElement(A,null)}}),o.a.createElement(D.a,{exact:!0,path:"/intro",render:function(){return o.a.createElement(O,null)}}),o.a.createElement(D.a,{exact:!0,path:"/Team",render:function(){return o.a.createElement(j,null)}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,a,t){}},[[151,1,2]]]);
//# sourceMappingURL=main.1ff4c67e.chunk.js.map