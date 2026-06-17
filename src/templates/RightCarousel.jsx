import React from "react";
import { useLanguage } from "../context/LanguageContext";

const RightCarousel = ({ idx, item }) => {
    const { lang } = useLanguage();

    const textDict = {
        en: {
            link: "Available Link",
            unavailable: "unavailable",
        },
        id: {
            link: "Tautan Tersedia",
            unavailable: "tidak tersedia",
        },
    };

    const isUnavailable = item.url === "unavailable";
    const linkText = isUnavailable ? textDict[lang].unavailable : item.url;

    return (
        <div className="row py-4 g-4 px-2 align-items-center">
            <div className="col-12 col-lg-6 d-none d-lg-block text-lg-start px-lg-4">
                <p className="text-light fs-3 fw-semibold mb-3">{item.title}</p>
                <p
                    className="text-light-50 mb-3"
                    style={{
                        fontSize: "1.08rem",
                        lineHeight: "1.6",
                        color: "#E8EDF2",
                        opacity: 0.85,
                        textAlign: "justify",
                    }}
                >
                    {item.text}
                </p>
                <p className="text-light fs-6">
                    {textDict[lang].link} :{" "}
                    <a
                        href={`${isUnavailable ? "#project" : `${item.url}`}`}
                        className={`${isUnavailable ? "text-decoration-none text-danger fw-semibold" : "text-info fw-semibold"}`}
                        target={isUnavailable ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                    >
                        {linkText}
                    </a>
                </p>
            </div>

            <div
                id={"carousel" + idx}
                className="carousel slide col-12 col-lg-6"
            >
                <div className="carousel-indicators">
                    {item.image.map((img, index) => {
                        const id = index;
                        return (
                            <button
                                key={id}
                                type="button"
                                data-bs-target={"#carousel" + idx}
                                data-bs-slide-to={id}
                                className={id === 0 ? "active" : ""}
                                aria-current={id === 0 ? "true" : "false"}
                                aria-label={`Slide ${id + 1}`}
                            ></button>
                        );
                    })}
                </div>
                <div className="carousel-inner rounded-4 shadow">
                    {item.image.map((img, index) => {
                        const id = index;
                        return (
                            <div
                                key={id}
                                className={`carousel-item ${id === 0 && "active"}`}
                            >
                                <img
                                    src={img}
                                    className="d-block w-100 img-fluid object-fit-fill"
                                    alt="..."
                                    style={{
                                        maxHeight: "350px",
                                        objectFit: "cover",
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={"#carousel" + idx}
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                        style={{ color: "#000" }}
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={"#carousel" + idx}
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                        style={{ color: "#000" }}
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Mobile Text (Bottom on mobile) */}
            <div className="col-12 col-lg-6 d-block d-lg-none text-center">
                <p className="text-light fs-3 fw-semibold mb-3">{item.title}</p>
                <p
                    className="text-light-50 mb-3"
                    style={{
                        fontSize: "1.08rem",
                        lineHeight: "1.6",
                        color: "#E8EDF2",
                        opacity: 0.85,
                    }}
                >
                    {item.text}
                </p>
                <p className="text-light fs-6">
                    {textDict[lang].link} :{" "}
                    <a
                        href={`${isUnavailable ? "#project" : `${item.url}`}`}
                        className={`${isUnavailable ? "text-decoration-none text-danger fw-semibold" : "text-info fw-semibold"}`}
                        target={isUnavailable ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                    >
                        {linkText}
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RightCarousel;
