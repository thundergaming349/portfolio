const Navbar = () => {
    return (
        <nav
            class="navbar navbar-expand-sm navbar-dark px-2 py-2 fixed-top shadow-sm"
            style={{ background: "#F5F5F5", opacity: "90%" }}
        >
            <button
                class="navbar-toggler d-lg-none"
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
                class="collapse navbar-collapse text-center justify-content-center align-items-center fs-5"
                id="collapsibleNavId"
            >
                <ul class="navbar-nav me-auto mt-2 mt-lg-0 fw-semibold gap-2">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            aria-current="page"
                            style={{ color: "#303841" }}
                        >
                            About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            style={{ color: "#303841" }}
                        >
                            Skills
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            style={{ color: "#303841" }}
                        >
                            Education
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            style={{ color: "#303841" }}
                        >
                            Project
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            style={{ color: "#303841" }}
                        >
                            Achievement
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
