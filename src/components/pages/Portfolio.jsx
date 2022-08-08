import React, {useEffect, useState} from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer'
import Contents from '../layout/Contents'
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import PortCont from '../includes/PortCont';

function Portfolio() {
    const [ports, setPorts] = useState([]);

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json", requestOptions)
        .then(response => response.json())
        .then(result => setPorts(result.data.ports))
        .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <Header />
            <Contents> 
                <Title title={['portfolio', 'site']} />
                <PortCont ports = {ports} />
                <Contact/>
            </Contents>
            <Footer />
        </>
    )
}

export default Portfolio