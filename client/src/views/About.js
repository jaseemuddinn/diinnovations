import React, { useEffect } from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import AboutPage from "../containers/About/About";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <DefaultLayout>
            <AboutPage />
        </DefaultLayout>
    );
};

export default About;
