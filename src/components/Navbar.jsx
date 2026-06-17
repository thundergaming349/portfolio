import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import idFlag from '../assets/id_flag.png';
import ukFlag from '../assets/uk_flag.svg';

const Navbar = () => {
    const { lang, requestLanguageChange } = useLanguage();

    const navItems = {
        en: [
            { name: "Home", href: "#welcome" },
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Education", href: "#education" },
            { name: "Project", href: "#project" },
            { name: "Achievement", href: "#achievement" }
        ],
        id: [
            { name: "Beranda", href: "#welcome" },
            { name: "Tentang", href: "#about" },
            { name: "Keahlian", href: "#skills" },
            { name: "Pendidikan", href: "#education" },
            { name: "Proyek", href: "#project" },
            { name: "Prestasi", href: "#achievement" }
        ]
    };

    const closeMenu = () => {
        const nav = document.getElementById('collapsibleNavId');
        if (nav && nav.classList.contains('show')) {
            const bootstrap = window.bootstrap;
            if (bootstrap && bootstrap.Collapse) {
                const bsCollapse = bootstrap.Collapse.getInstance(nav) || new bootstrap.Collapse(nav);
                bsCollapse.hide();
            }
        }
    };

    return (
        <nav
            className="navbar navbar-expand-md navbar-light px-3 py-2 fixed-top shadow-sm z-3"
            style={{ background: "#F5F5F5", opacity: "95%" }}
        >
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <button
                    className="navbar-toggler fw-bold fs-2 text-dark border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    ☰
                </button>
                <div
                    className="collapse navbar-collapse text-center justify-content-center align-items-center fs-5"
                    id="collapsibleNavId"
                >
                    <ul className="navbar-nav fw-semibold gap-2">
                        {navItems[lang].map((item) => (
                            <li key={item.href} className="nav-item nav-btn">
                                <a
                                    className="nav-link"
                                    href={item.href}
                                    style={{ color: "#303841" }}
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Language selector on the right */}
                <div className="d-flex align-items-center gap-2 ms-auto ms-md-3">
                    <button
                        onClick={() => requestLanguageChange('id')}
                        style={{
                            background: 'none',
                            border: lang === 'id' ? '2px solid #303841' : '2px solid transparent',
                            padding: '2px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            opacity: lang === 'id' ? 1 : 0.5,
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        title="Bahasa Indonesia"
                    >
                        <img src={idFlag} alt="ID" style={{ width: '24px', height: '16px', objectFit: 'cover' }} />
                    </button>
                    <button
                        onClick={() => requestLanguageChange('en')}
                        style={{
                            background: 'none',
                            border: lang === 'en' ? '2px solid #303841' : '2px solid transparent',
                            padding: '2px',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            opacity: lang === 'en' ? 1 : 0.5,
                            transition: 'all 0.2s',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        title="English"
                    >
                        <img src={ukFlag} alt="EN" style={{ width: '24px', height: '16px', objectFit: 'cover' }} />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

