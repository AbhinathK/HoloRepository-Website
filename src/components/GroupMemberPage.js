import React, { Component } from "react";
import SharedHeader from "./shared/Header";
import SharedFooter from "./shared/Footer";
import {
    Header,
    Segment,
    Image,
    Grid,
    Divider
} from "semantic-ui-react";

class GroupMemberPage extends Component {
    render() {
        return (
            <div>
                <SharedHeader activeItem='Group members' />
                <Segment vertical>
                    <Header
                        textAlign='center'
                        as='h1'
                        content='Group Members'
                        style={{
                            fontSize: '4em',
                            fontWeight: 'normal',
                            marginBottom: 0,
                            marginTop: '2em',
                        }} />
                    <Grid container style={{ padding: '5em 0em' }}>
                        <Grid.Row>
                            <p style={{ padding: '0em 1em' }}>
                                (Sorted by alphabetical)
                            </p>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src="Images/wenjie.png" circular />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Alfred, Daren
                                </Header>
                                <p style={{ fontSize: '1.2em' }}><b>HoloRegistration2020</b></p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b>daren.alfred.16@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider />

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src="Images/wenjie.png" circular />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Baskaran, Immanuel
                                </Header>
                                <p style={{ fontSize: '1.2em' }}><b>HoloPipelines Optimisations</b></p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b>immanuel.baskaran.16@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider />

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' circular />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Kumar, Abhinath
                                </Header>
                                <p style={{ fontSize: '1.2em' }}><b>System Architect</b></p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b>abhinath.kumar.16@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>

                        <Divider />

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Image src="Images/fanbo.png" circular />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <Header as='h3' style={{ fontSize: '2em' }}>
                                    Winkelhake, Carlo
                                </Header>
                                <p style={{ fontSize: '1.2em' }}><b>Machine learning models</b></p>
                                <p style={{ fontSize: '1.2em' }}><b>Email:</b>carlo.winkelhake.16@ucl.ac.uk</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <SharedFooter />
            </div>
        );
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
}

export default GroupMemberPage;
