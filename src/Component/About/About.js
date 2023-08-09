import React, { useContext, useEffect, useState } from 'react'
import Header from '../Header'
import { GrSettingsOption } from 'react-icons/gr';
import { sender } from '../Store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    let [show, setShow] = useState(false)

    useEffect(() => {
        AOS.init();
      }, [])

    let { mode, setMode } = useContext(sender)

    let Data = [
        {
            id: 1,
            title: "Name",
            info: "Janhvi Kolhe"
        },
        {
            id: 2,
            title: "Email",
            info: "janhvikolhe1009@gmail.com"
        },
        {
            id: 3,
            title: "DOB",
            info: "10/09/2000"
        },
        {
            id: 4,
            title: "From",
            info: "Nagpur"
        }
    ]

    let [colorpick, setColorPick] = useState("primary")

    

    return (
        <>
            <div className={`container-fluid position-relative text-${mode ? "light" : "dark"} bg-${mode ? "dark" : "light"}`} id='About'>
                <Header title='About Me' />
                <div className="row Align-item-center">
                    <div className="col-12 col-md-6 About">
                        <img data-aos="flip-left" data-aos-duration='2000' className="shadow-lg p-3 mb-5 rounded" src="Img/About/About1-removebg-preview.png" alt="" width='100%' height='300px' />
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="d-flex align-items-center" style={{ fontSize: '17px' }}>Hello, my name is Janhvi, and I am a software engineer. I have completed my graduation in Computer Science Engineering. <br />
                            I’m a Computer Science Engineer who loves keeping my skills up-to-date and always looking for new challenges.
                            <br /> My favorite thing about programming is how it lets me express myself creatively—I love coming up with ways to communicate what I want to say with code instead of words or pictures.
                            <br /> In my free time, I enjoy spending time with friends and family, cooking food, reading books, and relaxing at home.</p></div>
                </div>
                <div className="row mt-4 ">
                    {
                        Data.map((e) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-3">
                                    <div data-aos="zoom-out-up" className={`card mx-auto text-bg-${colorpick} mb-3`} style={{ maxWidth: '18rem' }}>
                                        <div className="card-header">{e.title}</div>
                                        <div className="card-body">
                                            <p className="card-text">{e.info}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='mx-auto text-center p-2 shadow border-1 position-absolute top-0 end-0' style={{ width: '75px' }}>
                    <GrSettingsOption className='spinner-border border-0 bg-light' onClick={() => setShow(!show)} style={{ fontSize: '25px' }} />
                    {
                        show &&
                        <div>
                            <button onClick={() => setColorPick("danger")} className='rounded-circle mt-2 bg-danger text-danger'>A</button>
                            <button onClick={() => setColorPick("success")} className='rounded-circle bg-success my-2 text-success mx-2'>A</button>
                            <button onClick={() => setColorPick("warning")} className='rounded-circle bg-warning text-warning'>A</button>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default About