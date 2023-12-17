import React, { useEffect } from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import HomePage from "../containers/HomePage/HomePage";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <DefaultLayout>
            <HomePage />
        </DefaultLayout>
    );
};

export default About;
