import React, { Component } from "react";
import { 
  Button, 
  Container, 
  Header, 
  Menu, 
  Segment, 
  Image,
  Grid,
  Embed,
  Card,
  Dropdown
} from "semantic-ui-react";
import "./App.css";

class App extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
    const { activeItem } = this.state
    
    return (
      <div className="App">

        {/* nav bar 
            TODO: change weird float property
        */}
        <Menu fixed='top' size='large' id="navbar" borderless right secondary>
          <Container>
            <Menu.Item id="navbar">
              <Image size='tiny' src='https://thesign.al/content/images/2017/06/favicon.png' wrapped/>
            </Menu.Item>
            <Menu.Item 
              id="navbaritem"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              Home
            </Menu.Item>
            <Menu.Item 
              id="navbaritem"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              About
            </Menu.Item>
            <Menu.Item 
              id="navbaritem"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              Alumni
            </Menu.Item>
            <Menu.Item 
              id="navbaritem"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              Seniors
            </Menu.Item>
            <Menu.Item 
              id="navbaritem"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              Professors
            </Menu.Item>
          </Container>
        </Menu>

        {/* main landing page */}
        <Segment vertical textAlign="left">
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Segment vertical textAlign="left">
                  {/* <Container as="nav">
                    <Header as="h2">
                      <Image circular src='/public/tower.png'/>
                      The Signal
                    </Header>
                  </Container> */}
                  <Container className="content">
                    <Header inverted as="h1">
                      The Anti-Resume Project
                    </Header>
                      <p class="paragraph_padded">
                        The goal of this project is to highlight both failures and accomplishments of people at Penn that 
                        wouldn’t normally show up on a resume, and to promote the message that we are more than our resume, 
                        our GPA, our internship, or our job. The Signal is currently sharing anti-resumes of Penn alumni 
                        and students in an effort to promote discussion and reflection on what failure really means.
                      </p>
                    <Header inverted as="h3">
                    <a href="https://thesign.al">
                      SUBMIT AN ANTI-RESUME →
                    </a>
                    </Header>
                  </Container>
                  
              </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment vertical textAlign="center">
                  
                </Segment> 
              </Grid.Column>
            </Grid.Row>
          </Grid>
          
          {/* TODO: put this at the bottom of the landing page */}
          
        </Segment>
        
        {/* video page */}
        <Segment vertical textAlign="center" id="video_segment">
          <Container className="content" id="video_segment_container">
            <Header inverted as="h1">
              More About the Project
            </Header>
              <Embed
                id='Ymfzg7rVZwU'
                source='youtube'
              />
            {/* https://www.youtube.com/watch?v=Ymfzg7rVZwU */}
              <p class="paragraph_padded_video">
              This is the video caption this is the video caption this is the video caption.
              </p>
          </Container>
        </Segment>

        {/* roster */}
        {/* TODO:
        - implement grid
        - card contianers
        - scroll effect for different card container roster components */
        }
        <Segment vertical textAlign="center">

        </Segment>
        
        {/* footer */}
        <Segment vertical as="footer" textAlign="center">
            Made with ♡ in Philadelphia by{" "}
            <a href="https://thesign.al">
              The Signal
            </a>
            .
        </Segment>
      </div>
    );
  }
}

export default App;