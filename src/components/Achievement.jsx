import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { achievement } from "../assets/text/achievement";

const Achievement = () => {
    const { lang } = useLanguage();
    const list = achievement[lang] || achievement.en;

    const titles = {
        en: "Achievement",
        id: "Prestasi",
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
            ref={sectionRef}
            className="fade-scroll w-100 py-5 d-grid"
            id="achievement"
        >
            <h1
                className="text-center font-monospace pb-4"
                style={{ color: "#303841" }}
            >
                {titles[lang]}
            </h1>
            <div className="row justify-content-evenly gap-4 py-4 px-4 m-0 w-100">
                {list.map((item, i) => {
                    return (
                        <div
                            key={i}
                            className="card border-1 border-dark rounded-5 col-12 col-lg-4 py-2 px-1 shadow-sm"
                        >
                            <div className="card-body">
                                <div className="card-subtitle mb-3 text-secondary opacity-90 font-monospace fs-5 fw-bold d-flex align-items-center flex-wrap gap-2">
                                    <span>{item.emoticon}</span>
                                    <span>{item.title}</span>
                                    {item.new && (
                                        <span className="badge text-bg-danger fs-6">
                                            New!
                                        </span>
                                    )}
                                </div>
                                <div
                                    className="card-text text-muted fs-6"
                                    style={{ textAlign: "justify" }}
                                >
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Achievement;
