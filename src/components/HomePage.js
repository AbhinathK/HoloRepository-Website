import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import BackgroundImage from "../images/lung_capture_black.png";
import {
    Header,
    Segment,
    Grid,
    Container,
    Button,
    Icon
} from "semantic-ui-react";
import {Link} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Home'/>
                <div style={{
                        minHeight: 700,
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        marginTop: '5',
                    }}>
                    <Segment style = {{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        height: 700}}>
                        <Container textAlign='center'>
                            <p style={{
                                    fontSize: '6em',
                                    fontWeight: 'normal',
                                    color: 'white',
                                    marginTop: 150
                                }}>
                                HoloRepository 2020
                            </p>
                            <p style={{
                                    fontSize: '1.8em',
                                    fontWeight: 'normal',
                                    color: 'white'

                                }}>
                                The HoloRepository 2020 Proof of Concept is an open source FHIR enabled research project that enables 
                                CT and MRI DICOM scans of the brain, lungs, chest, abdomen and kidneys to be rendered as a 3D view 
                                using the latest techniques for organ segmentation.
                            </p>
                            <Button primary size='huge' as={Link} to="/overview"style={{marginTop: 50}}>
                                Start Explore
                                <Icon name='right arrow' />
                            </Button>
                        </Container>
                    </Segment>
                </div>

                <Segment style={{ padding: '8em 0em'}} vertical>
                    <Container textAlign='justified'>
                        <Grid container stackable verticalAlign='middle'>
                            <Grid.Row>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    <a href="https://github.com/carlo3247/HoloRepository2020Viewer">HoloRepository 2020 Viewer</a>
                                </Header>
                                <p style={{ fontSize: '1.1em' }}>
                                A python tool that incorporates a barebone version of HoloPipelines to segment and generate 3D models of various anatomical stuctures. 
                                These include the lungs, brain, kidneys, abdominals and bones. 
                                It works on your laptop/PC as a 3D viewer rendering images straight from CT/MRI DICOM scan files locally, 
                                with its HoloPipelines segmentation component. 
                                This is intended for clinicians to present and teach with.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    <a href="https://github.com/AbhinathK/NUC-Optimized-HoloRepository-2020">HoloRepository 2020 for NUCs</a>
                                </Header>
                                <p style={{ fontSize: '1.1em' }}>
                                    This is an optimised build for clinical Intel(™) NUCs that can show 3D views and simulate a
                                        local FHIR enabled database for researchers looking to explore experimental results.
                                        This is intended for clinical research settings.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    <a href="https://github.com/AbhinathK/CloudHoloRepository2020-Core">HoloRepository 2020 for Azure and HoloLens 2</a>
                                </Header>
                                <p style={{ fontSize: '1.1em' }}>
                                This is an Azure Cloud solution that works with the newly released HoloLens 2 and facilitates cloud storage of 3D models.
                                </p>
                            </Grid.Row>
                        </Grid>
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

export default HomePage;
