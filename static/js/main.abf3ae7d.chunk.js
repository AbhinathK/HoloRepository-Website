(window["webpackJsonpholorepository-website"]=window["webpackJsonpholorepository-website"]||[]).push([[0],{138:function(e,t,a){e.exports=a.p+"static/media/lung_capture_black.5ba96b99.png"},149:function(e,t,a){e.exports=a(291)},154:function(e,t,a){},155:function(e,t,a){},287:function(e,t,a){},291:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(36),l=a.n(i),r=(a(154),a(18)),s=a(19),c=a(22),m=a(20),u=a(23),h=a(299),d=a(295),p=a(139),g=a(44),f=a(26),y=(a(155),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleItemClick=function(e,t){var n=t.name;return a.setState({activeItem:n})},a.state={activeItem:a.props.activeItem},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.activeItem;return o.a.createElement(h.a,{fixed:"top",id:"menu",pointing:!0,secondary:!0,size:"huge"},o.a.createElement(d.a,null,o.a.createElement(h.a.Item,{as:f.b,to:"/home",style:{padding:"1em 2em"}},o.a.createElement(p.a,{src:"Images/logo_with_title.png",size:"small"})),o.a.createElement(h.a.Item,{name:"Home",active:"Home"===e,onClick:this.handleItemClick,as:f.b,to:"/home"},o.a.createElement(g.a,{name:"home"}),"Home"),o.a.createElement(h.a.Item,{name:"Overview",active:"Overview"===e,onClick:this.handleItemClick,as:f.b,to:"/overview"},o.a.createElement(g.a,{name:"list ul"}),"Overview"),o.a.createElement(h.a.Item,{name:"Group members",active:"Group members"===e,onClick:this.handleItemClick,as:f.b,to:"/groupmember"},o.a.createElement(g.a,{name:"users"}),"Group Members"),o.a.createElement(h.a.Item,{name:"github",as:"a",active:"github"===e,onClick:this.handleItemClick,href:"https://github.com/AppertaFoundation/HoloRepository-2020",position:"right"},o.a.createElement(g.a,{name:"github"}),"GitHub"),o.a.createElement(h.a.Item,{name:"previous",as:"a",active:"previous"===e,onClick:this.handleItemClick,href:"https://fanbomeng97.github.io/HoloRepository-Website/#/",position:"right"},o.a.createElement(g.a,{name:"archive"}),"Previous Version")))}}]),t}(n.Component)),E=(a(287),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement(p.a,{src:"Images/logos.png",style:{width:"814px",height:"58.5px",display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"2em"}}),o.a.createElement("div",null,"Copyright (C) 2020 University College London"),o.a.createElement("div",null,"Read our"," ",o.a.createElement("a",{href:"https://github.com/AppertaFoundation/HoloRepository-2020"},"Source Code")," and"," ",o.a.createElement("a",{href:"https://www.gnu.org/licenses/agpl-3.0.en.html"},"Licence")))}}]),t}(n.Component)),b=a(138),w=a.n(b),v=a(301),S=a(298),k=a(302),H=a(303),R=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{activeItem:"Home"}),o.a.createElement("div",{style:{minHeight:700,backgroundImage:"url(".concat(w.a,")"),backgroundPosition:"center",backgroundSize:"cover",marginTop:"5"}},o.a.createElement(v.a,{style:{backgroundColor:"rgba(0,0,0,0.5)",backgroundPosition:"center",backgroundSize:"cover",height:700}},o.a.createElement(d.a,{textAlign:"center"},o.a.createElement("p",{style:{fontSize:"6em",fontWeight:"normal",color:"white",marginTop:150}},"HoloRepository 2020"),o.a.createElement("p",{style:{fontSize:"1.8em",fontWeight:"normal",color:"white"}},"The HoloRepository 2020 Proof of Concept is an open source FHIR enabled research project that enables CT and MRI DICOM scans of the brain, lungs, chest, abdomen and kidneys to be rendered as a 3D view using the latest techniques for organ segmentation."),o.a.createElement(S.a,{primary:!0,size:"huge",as:f.b,to:"/overview",style:{marginTop:50}},"Start Explore",o.a.createElement(g.a,{name:"right arrow"}))))),o.a.createElement(v.a,{style:{padding:"8em 0em"},vertical:!0},o.a.createElement(d.a,{textAlign:"justified"},o.a.createElement(k.a,{container:!0,stackable:!0,verticalAlign:"middle"},o.a.createElement(k.a.Row,null,o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},o.a.createElement("a",{href:"https://github.com/carlo3247/HoloRepository2020Viewer"},"HoloRepository 2020 Viewer")),o.a.createElement("p",{style:{fontSize:"1.1em"}},"A python tool that incorporates a barebone version of HoloPipelines to segment and generate 3D models of various anatomical stuctures. These include the lungs, brain, kidneys, abdominals and bones. It works on your laptop/PC as a 3D viewer rendering images straight from CT/MRI DICOM scan files locally, with its HoloPipelines segmentation component. This is intended for clinicians to present and teach with."),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},o.a.createElement("a",{href:"https://github.com/AbhinathK/NUC-Optimized-HoloRepository-2020"},"HoloRepository 2020 for NUCs")),o.a.createElement("p",{style:{fontSize:"1.1em"}},"This is an optimised build for clinical Intel(\u2122) NUCs that can show 3D views and simulate a local FHIR enabled database for researchers looking to explore experimental results. This is intended for clinical research settings."),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},o.a.createElement("a",{href:"https://github.com/AbhinathK/CloudHoloRepository2020-Core"},"HoloRepository 2020 for Azure and HoloLens 2")),o.a.createElement("p",{style:{fontSize:"1.1em"}},"This is an Azure Cloud solution that works with the newly released HoloLens 2 and facilitates cloud storage of 3D models."))))),o.a.createElement(E,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),C=a(296),I=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{activeItem:"Group members"}),o.a.createElement(v.a,{vertical:!0},o.a.createElement(H.a,{textAlign:"center",as:"h1",content:"Group Members",style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"2em"}}),o.a.createElement(k.a,{container:!0,style:{padding:"5em 0em"}},o.a.createElement(k.a.Row,null,o.a.createElement("p",{style:{padding:"0em 1em"}},"(Sorted by alphabetical)")),o.a.createElement(k.a.Row,null,o.a.createElement(k.a.Column,{width:3},o.a.createElement(p.a,{src:"Images/Daren.png",circular:!0})),o.a.createElement(k.a.Column,{width:13},o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"Alfred, Daren"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"HoloRegistration2020")),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:"),"daren.alfred.16@ucl.ac.uk"))),o.a.createElement(C.a,null),o.a.createElement(k.a.Row,null,o.a.createElement(k.a.Column,{width:3},o.a.createElement(p.a,{src:"Images/immanuel.jpg",circular:!0})),o.a.createElement(k.a.Column,{width:13},o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"Baskaran, Immanuel"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"HoloPipelines Optimisations")),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:"),"immanuel.baskaran.16@ucl.ac.uk"))),o.a.createElement(C.a,null),o.a.createElement(k.a.Row,null,o.a.createElement(k.a.Column,{width:3},o.a.createElement(p.a,{src:"Images/Abhinath1.png",circular:!0})),o.a.createElement(k.a.Column,{width:13},o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"Kumar, Abhinath"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"System Architect")),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:"),"abhinath.kumar.16@ucl.ac.uk"))),o.a.createElement(C.a,null),o.a.createElement(k.a.Row,null,o.a.createElement(k.a.Column,{width:3},o.a.createElement(p.a,{src:"Images/carlo.jpg",circular:!0})),o.a.createElement(k.a.Column,{width:13},o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"Winkelhake, Carlo"),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Machine learning models")),o.a.createElement("p",{style:{fontSize:"1.2em"}},o.a.createElement("b",null,"Email:"),"carlo.winkelhake.16@ucl.ac.uk"))))),o.a.createElement(E,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),z=a(297),A=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,{activeItem:"Overview"}),o.a.createElement(H.a,{textAlign:"center",as:"h1",content:"Overview",style:{fontSize:"4em",fontWeight:"normal",marginBottom:0,marginTop:"2em"}}),o.a.createElement(v.a,{style:{padding:"5em 0em"},vertical:!0},o.a.createElement(d.a,{textAlign:"justified"},o.a.createElement(k.a,{container:!0,stackable:!0,verticalAlign:"middle"},o.a.createElement(k.a.Column,{width:16},o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"Background"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"Recent technical advancements in the realm of augmented reality (AR) and the availability of consumer head-mounted display (HMD) devices such as the Microsoft HoloLens have opened a wealth of opportunities for healthcare applications, particularly in medical imaging. Several approaches have been proposed to transform imaging studies, such as CT or MRI scans, into three-dimensional models which can be inspected and manipulated in an AR experience [1\u20134]. Generally, all studies agree that the technology is very promising and may even revolutionise the practice of medicine [5]. However, virtually every existing workflow relies on significant manual guidance to conduct steps like segmentation or conversion to polygonal models."),o.a.createElement("p",{style:{fontSize:"1.2em"}},"Neural networks can help automate many tedious tasks and are increasingly used in medical imaging. Architectures such as the 3D U-Net [6] generate models which autonomously create segmentation maps, even with relatively little training data. However, translating these advancements from theory to clinical practice has unique challenges: The source code may not be available, documentation may be missing or require too much technical knowledge. Furthermore, different operating systems, software packages and dependencies obstruct successful usage [7]."),o.a.createElement("p",{style:{fontSize:"1.2em"}},"With the HoloRepository project, we intend to build the technical base for a seamless workflow that allows practitioners to generate 3D models from imaging studies and access them in an AR setting with as little manual involvement as possible. Pre-trained neural networks can be packaged into shareable Docker containers and accessed with a unified interface. Additionally, the Fast Healthcare Interoperability Resources (FHIR) standard, which is rapidly being adapted and also has a significant impact on the field of radiology [8], will connect the 3D models with existing patient health records."),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloRepository 2020 Viewer"),o.a.createElement("iframe",{style:{display:"block"},width:"560",height:"315",src:"https://www.youtube.com/embed/CDra3Yh4Qwo",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),o.a.createElement("p",{style:{fontSize:"1.2em"}},"This repository contains a python tool that incorporates a barebone version of HoloPipelines, wich is part of HoloRepository, to segment and generate 3D models of various anatomical stuctures. These include the lungs, brain, kidneys, abdominals and bones."),o.a.createElement("p",{style:{fontSize:"1.2em"}},"Through the GUI interface, one can either process a new medical scan or open an existing hologram. The created objects can be viewed through a proof of concept hologram viewer built on top of vtkplotter. The 2D View will attempt to open the scan using the default program selected for the task. For this, we recommend mango."),o.a.createElement("p",{style:{fontSize:"1.2em"}},"On Windows, the tool also includes an augmented reality (AR) view, which uses the HoloRegistration application. This enables segmented organ models to be overlayed over the human body using the webcam."),o.a.createElement(p.a,{src:"Images/HoloViewerArchitecture.png",style:{width:"auto",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"2em"}}),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloRepository 2020 for NUCs"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"The NUC optimized HoloRepository 2020 is an edition of HoloRepository 2020, built and optimized for Intel NUCs (Next unit of Computing) in a clinical research environment. This edition provides an offline instance of HoloRepository, as the architecture makes use of a local compute platform  and  simulates  a  local  FHIR  server.   Additionally, optimizations made to tthe HoloPipelines component, allow the system to leverage the hardware of the NUC for increased performance."),o.a.createElement(p.a,{src:"Images/deploymentviewNuc.png",style:{width:"auto",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"2em"}}),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloRepository 2020 for Azure and HoloLens 2"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"This is an Azure Cloud solution that works with the newly released HoloLens 2 and facilitates cloud storage of 3D models."),o.a.createElement(p.a,{src:"Images/NewArchitecture.png",style:{width:"auto",height:"auto",display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"2em"}}),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloRepositoryUI"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A web-based application that allows practitioners to browse their patients and manage the generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side application is accompanied by an API server that is responsible for communicating with the other components."),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloPipelines"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A service that performs the automatic generation of 3D models from 2D image stacks. Pre-trained neural network models are deployed and accessed with this component alongside traditional techniques like Hounsfield value thresholding."),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloStorage"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server provides for the binary holographic data."),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloStorageAccessor"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"An enhanced facade, offering a consistent interface to the HoloStorage and translating the public REST API to internal FHIR queries. To facilitate development of 3rd party components, the interface comes with an interactive OpenAPI documentation."),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloStorageConnector"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A Unity library handling the runtime network connections from HoloLens applications to the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate development of 3rd party applications that plug into the HoloRepository ecosystem."),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloRepository demo application"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"A simple application that demonstrates how to dynamically access 3D models stored in the HoloStorage. The scenes can be distributed alongside the Connector library and serve as examples and interactive documentation."),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloSynthAccess"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"HoloSynthAccess is a new component of the HoloRepository, which connects the system to the Cancer Imaging Archive (CIA), one of the world\u2019s largest open-access databases of medical images for cancer research.  Users are able to use the web-application to query for imaging studies of over 70 different anatomical structures.  Users can also find information such as modality, date, and description of around 30.9 million radiology images. Studies can be downloaded directly to your local machine for  further  research  and  use.  Additionally,  a  subset  of  these  studies  (modalities  and  anatomy supported  by  HoloRepository)  can  be  sent  to  the  simulated  EHR,  which  can  then  be  used  for model generation."),o.a.createElement(C.a,null),o.a.createElement(H.a,{as:"h3",style:{fontSize:"2em"}},"HoloRegistration"),o.a.createElement("p",{style:{fontSize:"1.2em"}},"The HoloRegistation 2020 application allows segmented organ models to be overlayed over the human body through an augmented reality experience. Organ models loaded can automatically locate themselves at the correct position and size, moving along with the user.  It\u2019s design also allows for custom organ configurations to be added at anytime without any changes to code and it supports any type of camera, including webcams."),o.a.createElement(C.a,null))),o.a.createElement(z.a,{fluid:!0,style:{marginTop:"3em"}},o.a.createElement(z.a.Content,null,o.a.createElement(z.a.Header,null,"References")),o.a.createElement(z.a.Content,null,o.a.createElement("p",null,"[1] Smith CM. Medical Imaging in Mixed Reality: A holographics software pipeline. University College London, 2018."),o.a.createElement("p",null,"[2] Pratt P, Ives M, Lawton G, Simmons J, Radev N, Spyropoulou L, et al. Through the HoloLensTM looking glass: augmented reality for extremity reconstruction surgery using 3D vascular models with perforating vessels. Eur Radiol Exp 2018;2:2. doi:10.1186/s41747-017-0033-2."),o.a.createElement("p",null,"[3] Affolter R, Eggert S, Sieberth T, Thali M, Ebert LC. Applying augmented reality during a forensic autopsy\u2014Microsoft HoloLens as a DICOM viewer. Journal of Forensic Radiology and Imaging 2019;16:5\u20138. doi:10.1016/j.jofri.2018.11.003."),o.a.createElement("p",null,"[4] Page M. Visualization of Complex Medical Data Using Next-Generation Holographic Techniques 2017."),o.a.createElement("p",null,"[5] Beydoun A, Gupta V, Siegel E. DICOM to 3D Holograms: Use Case for Augmented Reality in Diagnostic and Interventional Radiology. SIIM Scientific Session Posters and Demonstrations 2017:4."),o.a.createElement("p",null,"[6] \xc7i\xe7ek \xd6, Abdulkadir A, Lienkamp SS, Brox T, Ronneberger O. 3D U-Net: Learning Dense Volumetric Segmentation from Sparse Annotation. ArXiv:160606650 [Cs] 2016."),o.a.createElement("p",null,"[7] Beers A, Brown J, Chang K, Hoebel K, Gerstner E, Rosen B, et al. DeepNeuro: an open-source deep learning toolbox for neuroimaging. ArXiv:180804589 [Cs] 2018."),o.a.createElement("p",null,"[8] Kamel PI, Nagy PG. Patient-Centered Radiology with FHIR: an Introduction to the Use of FHIR to Offer Radiology a Clinically Integrated Platform. J Digit Imaging 2018;31:327\u201333. doi:10.1007/s10278-018-0087-6."))))),o.a.createElement(E,null))}},{key:"componentDidMount",value:function(){window.scrollTo(0,0)}}]),t}(n.Component),O=a(34),T=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f.a,{basename:"/HoloRepository-Website"},o.a.createElement(O.c,null,o.a.createElement(O.a,{exact:!0,path:"/",render:function(){return o.a.createElement(R,null)}}),o.a.createElement(O.a,{exact:!0,path:"/home",render:function(){return o.a.createElement(R,null)}}),o.a.createElement(O.a,{exact:!0,path:"/overview",render:function(){return o.a.createElement(A,null)}}),o.a.createElement(O.a,{exact:!0,path:"/groupmember",render:function(){return o.a.createElement(I,null)}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(f.a,{basename:"/HoloRepository-Website"},o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[149,1,2]]]);
//# sourceMappingURL=main.abf3ae7d.chunk.js.map