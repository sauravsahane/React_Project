import React from 'react'
import './App.css'
import BasicTabs from './TopNav'
import BasicCard from './TheBox'
import ReviewSlider from './Slider'

function ThePage() {

  return (
    <div className='container'>
        <div className='theBox'>
            <BasicCard/>
        </div>
        <div className='upperContainer'>
            <div className='upperContainerSub'>
                <h3>NITYANAND CHARAN DAS</h3>
                <h1>Learn key life lessons from the Gita: Mind control and conflict resolution</h1>
            </div>
        </div>
        <div className="nav">
            <BasicTabs/>
        </div>
        <div className="about">
            <h2>ABOUT</h2>
            <p>Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Senectus et netus et malesuada. Convallis aenean et tortor at risus viverra adipiscing. Consequat nisl vel pretium lectus quam id leo in. Scelerisque felis imperdiet proin fermentum.</p>

            <p>Leo a diam sollicitudin tempor. In metus vulputate eu scelerisque felis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Nisi porta lorem mollis aliquam ut porttitor. Convallis aenean et tortor at. Vitae ultricies leo integer malesuada nunc vel. Nam at lectus urna duis convallis. Duis ut diam quam nulla. Nisl purus in mollis nunc sed id semper risus in.</p>

            <p>Amet porttitor eget dolor morbi non arcu risus. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Magna sit amet purus gravida quis blandit turpis. Consequat ac felis donec et odio. Volutpat diam ut venenatis tellus in metus vulputate. Nisi scelerisque eu ultrices vitae auctor. Morbi enim nunc faucibus a. Fames ac turpis egestas sed tempus urna. Non diam phasellus vestibulum lorem sed risus ultricies.</p>
        </div>
        <div className='section2'>
            <h3>What to except from the course</h3>
            <ul>
                <li>Learn to mange your relationships</li>
                <li>Better communication</li>
                <li>Time management</li>
                <li>Forgiveness</li>
            </ul>
        </div>
        <div className='section2'>
            <h3>Key topics covered</h3>
            <p>Leo a diam sollicitudin tempor. In metus vulputate eu scelerisque felis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Nisi porta lorem mollis aliquam ut porttitor. Convallis aenean et tortor at. Vitae ultricies leo integer malesuada nunc vel. Nam at lectus urna duis convallis. Duis ut diam quam nulla. Nisl purus in mollis nunc sed id semper risus in.</p>
            <ul>
                <li><span style={{ fontWeight: 'bold' }}>10 written and audio sessions</span> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</li>
                <li><span style={{ fontWeight: 'bold' }}>Intuitive exercises and homework</span> walk you through the energies and values of numbers and number sequences so you can become your own authority.</li>
                <li><span style={{ fontWeight: 'bold' }}>A Handy reference</span> to numerical meanings, so you can uncover your soul's gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</li>
                <li><span style={{ fontWeight: 'bold' }}>Expert techniques</span> for manifestation offer simple ways to use numbers to co-create with the universe.</li>
            </ul>
        </div>
        <div className='info'>
            <h3>About the Instructor</h3>
            <div className='subInfo'>
                <img className='thedp' src='https://pbs.twimg.com/profile_images/1650049387224080384/WAVo3FHK_400x400.jpg' alt='instructor'/>
                <div>
                    <p>Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Senectus et netus et malesuada. Convallis aenean et tortor at risus viverra adipiscing. Consequat nisl vel pretium lectus quam id leo in. Scelerisque felis imperdiet proin fermentum.</p>    
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
                            <img style={{ height: '25px', width: '25px' }} src="https://i.pinimg.com/564x/63/a2/31/63a231592efca78f2bcbc02267eb37be.jpg"/>
                            <span style={{marginLeft: '5px', fontSize: '13px'}}>Facebook</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
                            <img style={{ height: '23px', width: '23px' }} src="https://play-lh.googleusercontent.com/YvIeFtcOu07BNT4gVRmcS9Lq82Tp7Fs2gnFY65T9KGFJDFDx8US7JRSerAoBkG0fDA"/>
                            <span style={{marginLeft: '5px', fontSize: '13px'}}>Twitter</span>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Leo a diam sollicitudin tempor. In metus vulputate eu scelerisque felis. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Nisi porta lorem mollis aliquam ut porttitor. Convallis aenean et tortor at. Vitae ultricies leo integer malesuada nunc vel. Nam at lectus urna duis convallis. Duis ut diam quam nulla. Nisl purus in mollis nunc sed id semper risus in.</p>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
                            <img style={{ height: '25px', width: '25px' }} src="https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc"/>
                            <span style={{marginLeft: '5px', fontSize: '13px'}}>YouTube</span>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', width: '50%'}}>
                            <img style={{ height: '25px', width: '25px' }} src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=ais"/>
                            <span style={{marginLeft: '5px', fontSize: '13px'}}>Instagram</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer style={{ width: '97%' }}>
            <ReviewSlider/>
        </footer>
    </div>
  )
}

export default ThePage