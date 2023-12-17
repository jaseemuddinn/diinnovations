import React, { useEffect } from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import ProjectPage from "../containers/Projects/Projects";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <DefaultLayout>
            <ProjectPage />
        </DefaultLayout>
    );
};

export default About;
