import React, { useEffect } from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import ContactPage from "../containers/Contact/Contact";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <DefaultLayout>
            <ContactPage />
        </DefaultLayout>
    );
};

export default About;
