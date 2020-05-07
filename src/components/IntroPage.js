import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import {
    Header,
    Segment,
    Grid,
    Divider,
    Container,
    Card,
    Image,
} from "semantic-ui-react";

class IntroPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Overview'/>
                    <Header
                        textAlign='center'
                        as='h1'
                        content='Overview'
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '2em',
                        }}/>
                <Segment style={{ padding: '5em 0em'}} vertical>
                    <Container textAlign='justified'>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Column width={16}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Background
                                </Header>

                                <p style={{ fontSize: '1.2em' }}>
                                    Recent technical advancements in the realm of augmented reality (AR) and the availability
                                    of consumer head-mounted display (HMD) devices such as the Microsoft HoloLens have opened
                                    a wealth of opportunities for healthcare applications, particularly in medical imaging.
                                    Several approaches have been proposed to transform imaging studies, such as CT or MRI
                                    scans, into three-dimensional models which can be inspected and manipulated in an AR
                                    experience [1–4]. Generally, all studies agree that the technology is very promising
                                    and may even revolutionise the practice of medicine [5]. However, virtually every
                                    existing workflow relies on significant manual guidance to conduct steps like segmentation
                                    or conversion to polygonal models.
                                </p>

                                <p style={{ fontSize: '1.2em' }}>
                                    Neural networks can help automate many tedious tasks and are increasingly used in medical
                                    imaging. Architectures such as the 3D U-Net [6] generate models which autonomously create
                                    segmentation maps, even with relatively little training data. However, translating these
                                    advancements from theory to clinical practice has unique challenges: The source code may
                                    not be available, documentation may be missing or require too much technical knowledge.
                                    Furthermore, different operating systems, software packages and dependencies obstruct
                                    successful usage [7].
                                </p>
                                <p style={{ fontSize: '1.2em' }}>
                                    With the HoloRepository project, we intend to build the technical base for a seamless
                                    workflow that allows practitioners to generate 3D models from imaging studies and access
                                    them in an AR setting with as little manual involvement as possible. Pre-trained neural
                                    networks can be packaged into shareable Docker containers and accessed with a unified
                                    interface. Additionally, the Fast Healthcare Interoperability Resources (FHIR) standard,
                                    which is rapidly being adapted and also has a significant impact on the field of radiology [8],
                                    will connect the 3D models with existing patient health records.
                                </p>
                                <Divider />

                                <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloRepository 2020 Viewer
                                </Header>
                                <iframe style={{display:'block'}} width="560" height="315" src="https://www.youtube.com/embed/CDra3Yh4Qwo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                <p style={{ fontSize: '1.2em' }}>
                                    This repository contains a python tool that incorporates a barebone version of HoloPipelines, 
                                    wich is part of HoloRepository, to segment and generate 3D models of various anatomical stuctures.
                                     These include the lungs, brain, kidneys, abdominals and bones.
                                </p>

                                <p style={{ fontSize: '1.2em' }}>
                                Through the GUI interface, one can either process a new medical scan or open an existing hologram. 
                                The created objects can be viewed through a proof of concept hologram viewer built on top of vtkplotter. 
                                The 2D View will attempt to open the scan using the default program selected for the task. For this, we recommend mango.
                                </p>
                                    
                                <p style={{ fontSize: '1.2em' }}>
                                On Windows, the tool also includes an augmented reality (AR) view, which uses the HoloRegistration application. 
                                This enables segmented organ models to be overlayed over the human body using the webcam.
                                </p>
                                <Image src= "Images/HoloViewerArchitecture.png" style={{
                                    width: 'auto',
                                    height: 'auto',
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginBottom: '2em'}}/>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloRepository 2020 for NUCs
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                The NUC optimized HoloRepository 2020 is an edition of HoloRepository 2020, built and optimized for Intel NUCs 
                                (Next unit of Computing) in a clinical research environment. This edition provides an offline instance of HoloRepository, 
                                as the architecture makes use of a local compute platform  and  simulates  a  local  FHIR  server.   Additionally, optimizations 
                                made to tthe HoloPipelines component, allow the system to leverage the hardware of 
                                the Intel NUC for increased performance.
                                </p>
                                <Image src= "Images/deploymentviewNuc.png" style={{
                                    width: 'auto',
                                    height: 'auto',
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginBottom: '2em'}}/>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                HoloRepository 2020 for Azure and HoloLens 2
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                    This is an Azure Cloud solution that works with the newly released HoloLens 2 and facilitates cloud storage of 3D models.
                                </p>
                                <Image src= "Images/NewArchitecture.png" style={{
                                    width: 'auto',
                                    height: 'auto',
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginBottom: '2em'}}/>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    HoloRepositoryUI
                                </Header>
                                
                                <p style={{ fontSize: '1.2em' }}>
                                    A web-based application that allows practitioners to browse their patients and manage the
                                    generation of 3D models sourced from imaging studies like CT or MRI scans. The client-side
                                    application is accompanied by an API server that is responsible for communicating with the
                                    other components.
                                </p>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    HoloPipelines
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                    A service that performs the automatic generation of 3D models from 2D image
                                    stacks. Pre-trained neural network models are deployed and accessed with this component
                                    alongside traditional techniques like Hounsfield value thresholding.
                                </p>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    HoloStorage
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                    A cloud-based storage for medical 3D models and associated metadata. Entirely hosted on
                                    Microsoft Azure, a FHIR server stores the structured medical data and a Blob Storage server
                                    provides for the binary holographic data.
                                </p>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    HoloStorageAccessor
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                    An enhanced facade, offering a consistent interface to the HoloStorage and translating
                                    the public REST API to internal FHIR queries. To facilitate development of 3rd party
                                    components, the interface comes with an interactive OpenAPI documentation.
                                </p>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    HoloStorageConnector
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                    A Unity library handling the runtime network connections from HoloLens applications to
                                    the HoloStorage. Distributed as a separate UnityPackage, this is meant to facilitate
                                    development of 3rd party applications that plug into the HoloRepository ecosystem.
                                </p>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    HoloRepository demo application
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                    A simple application that demonstrates how to dynamically access 3D models stored in the
                                    HoloStorage. The scenes can be distributed alongside the Connector library and serve as
                                    examples and interactive documentation.
                                </p>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    HoloSynthAccess
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                HoloSynthAccess is a new component of the HoloRepository, which connects the system to the 
                                Cancer Imaging Archive (CIA), one of the world’s largest open-access databases of medical images 
                                for cancer research.  Users are able to use the web-application to query for imaging studies 
                                of over 70 different anatomical structures.  Users can also find information such as modality, 
                                date, and description of around 30.9 million radiology images. Studies can be downloaded directly to 
                                your local machine for  further  research  and  use.  Additionally,  a  subset  of  these  studies  (modalities  and  anatomy 
                                supported  by  HoloRepository)  can  be  sent  to  the  simulated  EHR,  which  can  then  be  used  for model generation.
                                </p>
                                <Divider />
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    HoloRegistration
                                </Header>
                                <p style={{ fontSize: '1.2em' }}>
                                The HoloRegistation 2020 application allows segmented organ models to be overlayed over the human body 
                                through an augmented reality experience. Organ models loaded can automatically locate themselves at the 
                                correct position and size, moving along with the user.  It’s design also allows for custom organ configurations 
                                to be added at anytime without any changes to code and it supports any type of camera, including webcams.
                                </p>
                                <Divider />

                                
                            </Grid.Column>
                        </Grid>
                        <Card fluid style={{ marginTop: '3em'}}>
                            <Card.Content>
                                <Card.Header>References</Card.Header>
                            </Card.Content>
                            <Card.Content>
                                <p>[1]	Smith CM. Medical Imaging in Mixed Reality: A holographics software pipeline.
                                    University College London, 2018.</p>
                                <p>[2]	Pratt P, Ives M, Lawton G, Simmons J, Radev N, Spyropoulou L, et al. Through the
                                    HoloLensTM looking glass: augmented reality for extremity reconstruction surgery using
                                    3D vascular models with perforating vessels. Eur Radiol Exp
                                    2018;2:2. doi:10.1186/s41747-017-0033-2.</p>
                                <p>[3]	Affolter R, Eggert S, Sieberth T, Thali M, Ebert LC. Applying augmented reality
                                    during a forensic autopsy—Microsoft HoloLens as a DICOM viewer. Journal of Forensic
                                    Radiology and Imaging 2019;16:5–8. doi:10.1016/j.jofri.2018.11.003.</p>
                                <p>[4]	Page M. Visualization of Complex Medical Data Using Next-Generation Holographic
                                    Techniques 2017.</p>
                                <p>[5]	Beydoun A, Gupta V, Siegel E. DICOM to 3D Holograms: Use Case for Augmented
                                    Reality in Diagnostic and Interventional Radiology. SIIM Scientific Session Posters
                                    and Demonstrations 2017:4.</p>
                                <p>[6]	Çiçek Ö, Abdulkadir A, Lienkamp SS, Brox T, Ronneberger O. 3D U-Net: Learning
                                    Dense Volumetric Segmentation from Sparse Annotation. ArXiv:160606650 [Cs] 2016.</p>
                                <p>[7]	Beers A, Brown J, Chang K, Hoebel K, Gerstner E, Rosen B, et al. DeepNeuro: an
                                    open-source deep learning toolbox for neuroimaging. ArXiv:180804589 [Cs] 2018.</p>
                                <p>[8]	Kamel PI, Nagy PG. Patient-Centered Radiology with FHIR: an Introduction to the
                                    Use of FHIR to Offer Radiology a Clinically Integrated Platform. J Digit Imaging
                                    2018;31:327–33. doi:10.1007/s10278-018-0087-6.</p>
                            </Card.Content>
                        </Card>
                    </Container>

                </Segment>
                <SharedFooter/>
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
}

export default IntroPage;
