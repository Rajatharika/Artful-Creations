import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Art.css'
function Bottomnav() {
  const picture={
    name:'logo', 
    url:'https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png', 
    imageSize:500
}; 
const image={
  name:'insta',
  url:'https://cdn-icons-png.flaticon.com/512/87/87390.png',
  imageSize:500
};
const contact={
  name:'contact',
  url:'https://i.pinimg.com/736x/fc/27/fb/fc27fb81e77cc56ba4ed981d7801ceb9.jpg',
  imageSize:500
};
  return (
    <Navbar expand="lg" className="navv" fixed='bottom'>
      <Container fluid>
      <img className='pic'
            style={{ 
                width: '30px',
                height: '30px',
                float:'left'
            }}
            src={picture.url}
            alt={picture.name}
                />
        <img className='insta'
        style={{
          width:'30px',
          heigth:'30px',
          float:'left'
        }}
        src={image.url}
        alt={image.name}
        />
      </Container>
    </Navbar>
  );
}

export default Bottomnav;