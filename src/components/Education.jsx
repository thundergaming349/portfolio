import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { education } from "../assets/text/education";

const Education = () => {
    const { lang } = useLanguage();
    const list = education[lang] || education.en;

    const titles = {
        en: "Education",
        id: "Pendidikan",
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
        <div className="py-5 d-grid gap-4" id="education">
            <h1
                className="text-center font-monospace"
                style={{ color: "#303841" }}
            >
                {titles[lang]}
            </h1>
            <div className="row justify-content-center gap-5 m-0 w-100 px-3">
                <div className="col-auto position-relative justify-content-center me-5 d-none d-md-flex">
                    <div className="timeline-line"></div>

                    <div className="timeline-dot dot-1"></div>
                    <div className="timeline-dot dot-2"></div>
                </div>

                <div
                    ref={sectionRef}
                    className="fade-scroll col-10 col-md-5 text-center text-lg-start"
                >
                    {list.map((sch, i) => {
                        return (
                            <div key={i}>
                                <p
                                    className="fs-5 fw-semibold"
                                    style={{ color: "#303841" }}
                                >
                                    {sch.year}
                                </p>
                                <div
                                    className="border border-2 text-center py-4 mb-5 d-grid row g-2 rounded-4"
                                    style={{ borderColor: "#303841" }}
                                >
                                    <i className="fa-solid fa-school text-secondary fs-2"></i>
                                    <div className="text-center px-3">
                                        <h3 className="mb-0 fs-4">
                                            {sch.name}
                                        </h3>
                                        <p className="m-0 text-muted fs-6">
                                            {sch.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Education;
