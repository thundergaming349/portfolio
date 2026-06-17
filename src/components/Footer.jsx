import React from "react";

const Footer = () => {
    return (
        <footer
            className="text-center py-4 fs-6"
            style={{
                background: "#15161b",
                color: "#8c98a5",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                margin: 0,
            }}
        >
            <div className="container">
                <p className="m-0 font-monospace">
                    &copy; 2026 Fathar Faidurrahman made with ❤️, all right
                    reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
