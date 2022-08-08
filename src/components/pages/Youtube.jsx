import React, {useState, useEffect} from 'react'
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Title from '../layout/Title';
import Contact from '../layout/Contact';
import YoutubeList from '../includes/YoutubeList';
// import axios from 'axios';

function Youtube() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    //fetch() - 변화되는 데이터를 계속 불러와주는 것.
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=bts&key=AIzaSyCXKxujgGX_BGPi-L-G-sYa8NZX-VWm8hk", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
         //result를 videos에 저장시켜줌.
         setVideos(result.items);
      })
      .catch((error) => console.log('error', error));
  }, []);
  
  /* useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    axios.get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=bts&key=AIzaSyCXKxujgGX_BGPi-L-G-sYa8NZX-VWm8hk', requestOptions)
    .then((response) => response)
    .then((result) => {
      setVideos(result.items);
      console.log(result);
    })
    .catch((error) => console.log('error', error));

  }, []); */

  return (
    <>
      <Header />
      <Contents>
        <Title title={['youtube', 'site']}/>
        <section className="youtube__cont">
              <div className="container">
                <div className="youtube__inner">
                  <YoutubeList videos={videos} />
                </div>
              </div>
            </section>
        <Contact />
      </Contents>
      <Footer />
    </>
  )
}

export default Youtube