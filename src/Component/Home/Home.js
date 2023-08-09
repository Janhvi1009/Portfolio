import React, { useContext, useEffect } from 'react'
import { sender } from '../Store'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    let { mode, setMode } = useContext(sender)

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            <div className={`container-fluid text-${mode ? "light" : "dark"} mt-5 bg-${mode ? "dark" : "light"}`} id='Home'>
                <div className="row align-items-center vh-100">
                    <div className=" col-12 col-md-6" style={{ fontStyle: "italic" }}>
                        <h1  >Hello!</h1>
                        <br />
                        <h1 style={{ fontWeight: "bolder" }}>I'm Janhvi Kolhe</h1>
                        <h3 style={{ fontWeight: "bolder" }}>Frontend Developer</h3>
                        <p>Seeking challenging position in a reputed organization when I can contribute my ideas and
                            looking for opportunities where I can improve my skills and progress professionally.
                        </p>
                    </div>
                    <div className=" col-12 col-md-6">
                        <img data-aos="flip-left" data-aos-duration='2000' className="shadow-lg p-3 mb-5 rounded" src="Img/Home/Home.png" alt="" width='100%' height='500px' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home