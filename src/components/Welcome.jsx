import { welcome } from "../assets/text/welcome";

const Welcome = () => {
    return (
        <div className="w-100 vh-100">
            <img
                src="/src/assets/welcome_banner.jpg"
                alt=""
                className="w-100 vh-100 object-fit-fill img-fluid"
            />
            <div
                class="position-absolute top-50 start-50 translate-middle text-white text-center fs-2"
                style={{ opacity: "90%" }}
            >
                <h1 className="fw-bold">{welcome.text}</h1>
                <p>{welcome.subtext}</p>
            </div>
        </div>
    );
};

export default Welcome;
