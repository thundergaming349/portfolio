import React, { useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { project } from "../assets/text/project";
import RightCarousel from "../templates/RightCarousel";
import LeftCarousel from "../templates/LeftCarousel";

const Project = () => {
    const { lang } = useLanguage();
    const list = project[lang] || project.en;

    const titles = {
        en: "Projects",
        id: "Proyek",
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
            className="w-100 py-5 px-2"
            id="project"
            style={{ background: "#1b1c3b" }}
        >
            <h1
                className="text-center mb-5 font-monospace"
                style={{ color: "#E8EDF2" }}
            >
                {titles[lang]}
            </h1>
            <div ref={sectionRef} className="zoom-in gap-5 d-grid container">
                {list.map((item, index) => {
                    const idx = index + 1;
                    const isOdd = idx % 2 === 0;
                    return !isOdd ? (
                        <LeftCarousel key={index} idx={idx} item={item} />
                    ) : (
                        <RightCarousel key={index} idx={idx} item={item} />
                    );
                })}
            </div>
        </div>
    );
};

export default Project;
