import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { welcome } from "../assets/text/welcome";

const Welcome = () => {
    const { lang } = useLanguage();
    const content = welcome[lang] || welcome.en;

    return (
        <div className="w-100 vh-100 mb-4 position-relative" id="welcome">
            <img
                src={welcome.banner}
                alt=""
                className="w-100 vh-100 object-fit-cover"
            />
            <div
                className="position-absolute top-50 start-50 translate-middle mt-2 col-12 col-lg-8 text-white text-center fs-2 text-shadow-sm d-grid gap-4"
                style={{ opacity: "90%", color: "#F5F5F5", zIndex: 2 }}
            >
                <div className="fade-in">
                    <h1
                        className="fw-bold"
                        style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
                    >
                        {content.text}
                    </h1>
                    <p
                        className="fs-3"
                        style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.7)" }}
                    >
                        {content.subtext}
                    </p>
                </div>
                <div
                    className="row justify-content-center g-3 fs-4 w-100 text-center mx-auto fade-in"
                    style={{ maxWidth: "650px" }}
                >
                    <div className="col-6 col-md-4">
                        <div className="github card border-2 bg-secondary bg-opacity-10 rounded-4 h-100">
                            <a
                                href={welcome.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-body text-decoration-none d-flex flex-column align-items-center justify-content-center py-3"
                                style={{ color: "#fff" }}
                            >
                                <i
                                    className="fa-brands fa-github fs-2 mb-2"
                                    style={{ color: "#fff" }}
                                ></i>
                                <p className="fw-bold m-0 fs-5">Github</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="insta card border-2 bg-secondary bg-opacity-10 rounded-4 h-100">
                            <a
                                href={welcome.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-body text-decoration-none d-flex flex-column align-items-center justify-content-center py-3"
                                style={{ color: "#fff" }}
                            >
                                <i
                                    className="fa-brands fa-instagram fs-2 mb-2"
                                    style={{ color: "#FF61F8" }}
                                ></i>
                                <p className="fw-bold text-truncate m-0 fs-5">
                                    Instagram
                                </p>
                            </a>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="linkedin card border-2 bg-secondary bg-opacity-10 rounded-4 h-100">
                            <a
                                href={welcome.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-body text-decoration-none d-flex flex-column align-items-center justify-content-center py-3"
                                style={{ color: "#fff" }}
                            >
                                <i className="fa-brands fa-linkedin text-primary fs-2 mb-2"></i>
                                <p className="fw-bold m-0 fs-5">LinkedIn</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
