import react from 'react'
import './footer.css';

function Footer() {
    return (
        <footer>
            <p>FLOWER DELIVERY APP</p>
            <p>Created For ElevateHER Innovation Space Ltd</p>
            <p>By</p>
            <p>Mmesoma Ugwuanyi</p>
            <p>&copy; {new Date().getFullYear()} Flower Delivery. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
