import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { skills } from "../assets/text/skills";

const Skills = () => {
    const { lang } = useLanguage();

    const text = {
        en: {
            title: "Skills",
            programming: "Programming",
            tools: "Tools",
        },
        id: {
            title: "Keahlian",
            programming: "Pemrograman",
            tools: "Peralatan & Framework",
        },
    };

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
            className="w-100 py-5 px-2 d-grid gap-5"
            id="skills"
            style={{ background: "#1b1c3b" }}
        >
            <h1
                className="text-center font-monospace"
                style={{ color: "#E8EDF2" }}
            >
                {text[lang].title}
            </h1>

            <hr className="text-light text-center" />

            <div ref={sectionRef} className="zoom-in">
                <div className="gap-4 d-grid px-2 pb-4">
                    <h2
                        className="text-center pb-2"
                        style={{ color: "#E8EDF2" }}
                    >
                        {text[lang].programming}{" "}
                        <i className="fa-solid fa-code"></i>
                    </h2>
                    <div className="row g-3 px-2 px-lg-4 justify-content-center">
                        {skills.programming.map((item) => (
                            <div
                                key={item.name}
                                className="col-6 col-md-3 col-lg-2 d-flex"
                            >
                                <div
                                    style={{ borderColor: "#263B6A" }}
                                    className="cardprog card border-2 bg-transparent rounded-4 w-100 d-flex flex-column align-items-center justify-content-center"
                                >
                                    <a
                                        className="card-body text-decoration-none d-flex flex-column align-items-center justify-content-center h-100 w-100 py-3"
                                        style={{ color: "#fff" }}
                                    >
                                        <img
                                            src={item.logo}
                                            style={{
                                                maxWidth: "50px",
                                                maxHeight: "50px",
                                                objectFit: "contain",
                                            }}
                                            alt={item.name}
                                            className="mb-2"
                                        />
                                        <p className="fw-bold m-0 fs-6">
                                            {item.name}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="px-2 py-4">
                    <h2
                        className="text-center pb-2"
                        style={{ color: "#E8EDF2" }}
                    >
                        {text[lang].tools}{" "}
                        <i className="fa-solid fa-screwdriver-wrench"></i>
                    </h2>
                    <div className="row g-3 px-2 px-lg-4 justify-content-center">
                        {skills.tools.map((item) => (
                            <div
                                key={item.name}
                                className="col-6 col-md-4 col-lg-3 d-flex"
                            >
                                <div
                                    style={{ borderColor: "#263B6A" }}
                                    className="cardtool card border-2 bg-transparent rounded-4 w-100 d-flex flex-column align-items-center justify-content-center"
                                >
                                    <a
                                        className="card-body text-decoration-none d-flex flex-column align-items-center justify-content-center h-100 w-100 py-3"
                                        style={{ color: "#fff" }}
                                    >
                                        <img
                                            src={item.logo}
                                            style={{
                                                maxWidth: "50px",
                                                maxHeight: "50px",
                                                objectFit: "contain",
                                            }}
                                            alt={item.name}
                                            className="mb-2"
                                        />
                                        <p className="fw-bold m-0 fs-6">
                                            {item.name}
                                        </p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
