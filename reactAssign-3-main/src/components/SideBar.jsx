import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
         <div className='sidebar'>

        <Button variant="primary" className='button1' onClick={handleShow}>
                menu
        </Button>

            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>SideBar</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <button> <a href="#home">HOME</a></button> <br /> <br />
                  <button> <a href="#home">CONTACT US</a></button> <br /> <br />
                  <button> <a href="#home">SERVICES</a></button> <br /> <br />
                  <button> <a href="#home"> HELP</a></button> 
                </Offcanvas.Body>
            </Offcanvas>


        </div>
           
        </>
    );
}

export default SideBar;