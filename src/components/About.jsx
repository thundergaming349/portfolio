import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { about } from "../assets/text/about";
import foto_pribadi from "../assets/foto_pribadi.jpeg";

const About = () => {
    const { lang } = useLanguage();
    const content = about[lang] || about.en;

    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            },
            {
                threshold: 0.2,
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="fade-scroll w-100 min-vh-100 my-4 container position-relative"
            id="about"
        >
            <h1
                className="text-center font-monospace pb-5"
                style={{ color: "#303841" }}
            >
                {content.title}
            </h1>
            <div className="position-relative w-100 text-black mt-4">
                <div className="justify-content-center row ">
                    <div className="text-center col-12 col-lg-6">
                        <div className="text-start">
                            <img
                                src={foto_pribadi}
                                className="end-0 position-relative mx-auto d-none d-lg-block rounded-4"
                                style={{
                                    zIndex: "2",
                                    left: "-5rem",
                                    top: "2rem",
                                    maxWidth: "250px",
                                }}
                                alt="Fathar"
                            />
                            <div
                                className="bg-danger position-absolute d-none d-xl-grid"
                                style={{
                                    width: "500px",
                                    height: "500px",
                                    borderRadius: "50%",
                                    zIndex: "1",
                                    top: "0px",
                                    left: "-2rem",
                                    opacity: "0.2",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="text-center col-12 col-lg-6 text-lg-start">
                        <p className="lead dropcap fw-light fs-3 mb-3">
                            {content.hello}
                        </p>
                        <p className="lead text-break fw-light fs-5 mb-3">
                            {content.paragraph1}
                        </p>
                        <p className="lead text-break fw-light fs-5">
                            {content.paragraph2}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
