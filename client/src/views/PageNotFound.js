import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import { getPathByName } from "../routes/routerManager";
import routeNames from "../routes/routeNames";

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the home page on component mount
        navigate('/');
    }, [navigate]);

    return (
        <DefaultLayout>
            <p>
                You have tried to access an invalid URL/Path.
                Please <Link to={getPathByName(routeNames.LANDING)}>return to the home page</Link>.
            </p>
        </DefaultLayout>
    );
};

export default PageNotFound;
