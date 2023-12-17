import Route from './routeNames';

const BASE_URL = '/';

const routes = {
    landing: {
        path: BASE_URL,
        name: Route.LANDING
    },
    projects: {
        path: BASE_URL + 'projects',
        name: Route.PROJECTS
    },
    about: {
        path: BASE_URL + 'about',
        name: Route.ABOUT
    },
    contact: {
        path: BASE_URL + 'contact',
        name: Route.CONTACT
    }
};

export default routes;

export const getPathByKey = key => {
    return routes[key].path;
}
export const getPathByName = name => {
    const route = Object.values(routes).find(x => x.name === name).path;
    return route;
};

export const getNameByPath = path => {
    // const findNameByPath = R.compose(R.prop('name'), R.find(R.propEq('path', path)), R.values);
    // return findNameByPath(routes)
    const route = Object.values(routes).find(x => x.path === path);
    return route;
};

