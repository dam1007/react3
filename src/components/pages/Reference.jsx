import React, { useState, useEffect } from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Contents from '../layout/Contents'
import ReferCont from '../includes/ReferCont'
import Title from '../layout/Title'
import Contact from '../layout/Contact'
import axios from 'axios'



function Reference() {

    const [refers, setRefers] = useState([]);

    useEffect(() => {
        /* const requestOptions = {
          method: 'GET',
          headers: {},
        }; */
        axios.get('https://webstoryboy.github.io/react2022/src/assets/json/refer.json')
        .then((response) => response)
        .then(result => setRefers(result.data.data.htmlRefer));
        /* axios.get('https://webstoryboy.github.io/react2022/src/assets/json/refer.json', requestOptions)
        .then((response) => response)
        .then(result => setRefers(result.data.data.htmlRefer)); */

    }, []);
    

  return (
    <>
        <Header />
        <Contents>
            <Title title={['reference', 'book']} />
            <section className="refer__cont">
                <div className="container">
                  <div className="refer__inner">
                    <h2>html</h2>
                    <ul className="refer__list">
                      {refers.map((refer) => (
                        <ReferCont
                          key={refer.id}
                          id={refer.id}
                          title={refer.title}
                          desc={refer.desc}
                          use={refer.use}
                        />
                      ))}
                    </ul>
                  </div>
                </div>
            </section>
            <Contact />
        </Contents>
        <Footer />
    </>
  )
}

export default Reference