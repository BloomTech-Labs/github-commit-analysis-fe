import React from 'react';
import styled from "styled-components"
import ".../../font-awesome/css/font-awesome.min.css";
import Loralie from "../img/prtfolio-pic.jpg"
import Dan from "../img/dan-miller.jpg"
import Jake from "../img/jake-mallory.png"
import J from "../img/20191007_124927.jpg"

const CardHolder = styled.div`
display: flex;
flex-direction: row-reverse;
flex-wrap: wrap;
justify-content: space-evenly;
`
const Card = styled.div `
    height: auto;
    width: 200px;
    background-color: #eeeeee;
    margin: 10px 20px 10px 20px ;
`
const Pics = styled.img`
  height: 150px;
  width: 150px;
  display: block;
  margin: 0 auto;
`
const Name = styled.h3`
    text-align: center;
`
const Bio = styled.p`
text-align: center;
`
const SocialMedia = styled.div`
display: flex;
justify-content: center;
`
const Github = styled.a`
background-color: white;
margin: 5px;
    &:hover {
        background-color: #0A9AEC;
    }
`
const LinkedIn = styled.a`
background-color: white;
margin: 5px;
    &:hover {
        background-color: #2867B2;
    }
`
export default () => (
    <CardHolder>
  <Card>
        <Pics src={Loralie} alt="profile pic"/>
        <Name>Farid Hamida</Name>
        <Bio>Project Lead</Bio>
        <SocialMedia>
        <Github> <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>

        <Card>
        <Pics src={Jake} alt="profile pic"/>
        <Name> Jake Mallory </Name>
        <Bio>Engineering Manager</Bio>
        <SocialMedia>
        <Github href="https://github.com/tinomen" target="_blank" 
          rel="noopener noreferrer" > <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>

        <Card>
        <Pics src={Dan} alt="profile pic"/>
        <Name> Dan Miller </Name>
        <Bio>Product Manager</Bio>
        <SocialMedia>
        <Github href="https://danmmiller.com/" target="_blank" 
          rel="noopener noreferrer" > <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn  href="https://www.linkedin.com/in/danmiller9" target="_blank" 
          rel="noopener noreferrer"> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>

        <Card>
        <Pics src={Loralie} alt="profile pic"/>
        <Name>Nicholas George</Name>
        <Bio>Lambda School student Currently in LabsPT11</Bio>
        <SocialMedia>
        <Github> <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card> 

        <Card>
        <Pics src={Loralie} alt="profile pic"/>
        <Name>Guillermo Arria-Devoe</Name>
        <Bio>Lambda School student Currently in LabsPT11</Bio>
        <SocialMedia>
        <Github> <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>

        <Card>
        <Pics src={J} alt="profile pic"/>
        <Name> J Wylie </Name>
        <Bio>Disciple of Christ, Husband, Father, and Data Scientist. Owner of ikTech, and ever seeking to gain and use dev knowledge for good.</Bio>
        <SocialMedia>
        <Github href="https://github.com/iesous-kurios" target="_blank" 
          rel="noopener noreferrer"> <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn href="https://www.linkedin.com/in/j-wylie/" target="_blank" 
          rel="noopener noreferrer"> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>

        <Card>
        <Pics src={Loralie} alt="profile pic"/>
        <Name>Loralie Flint</Name>
        <Bio>Lambda School student Currently in LabsPT11</Bio>
        <SocialMedia>
        <Github href="https://github.com/LoralieFlint" target="_blank" 
          rel="noopener noreferrer"> <i class="fa fa-github fa-2x cat"></i> </Github>
        <LinkedIn href="https://www.linkedin.com/in/loralie-flint/" target="_blank" 
          rel="noopener noreferrer"> <i class="fa fa-linkedin fa-2x LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>

        <Card>
        <Pics src={Loralie} alt="profile pic"/>
        <Name>Khadijatu Deen Karim</Name>
        <Bio>Lambda School student Currently in LabsPT11</Bio>
        <SocialMedia>
        <Github> <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>
        
        <Card>
        <Pics src={Loralie} alt="profile pic"/>
        <Name>Matther Orth</Name>
        <Bio>Lambda School student Currently in LabsPT11</Bio>
        <SocialMedia>
        <Github> <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>
        
        <Card>
        <Pics src={Loralie} alt="profile pic"/>
        <Name>Kiran Junnarkar</Name>
        <Bio>Lambda School student Currently in LabsPT11</Bio>
        <SocialMedia>
        <Github> <i class="fa fa-github"></i> </Github>  
        <LinkedIn> <i class="fa fa-linkedin" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card>
        
        <Card>
        <Pics src={Loralie} alt="profile pic"/>
        <Name>Heber Gonzalez</Name>
        <Bio>Lambda School student Currently in LabsPT11</Bio>
        <SocialMedia>
        <Github> <i class="fa fa-github cat"></i> </Github>  
        <LinkedIn> <i class="fa fa-linkedin LI" aria-hidden="true"></i> </LinkedIn> 
        </SocialMedia>
        </Card> 
    </CardHolder>
);