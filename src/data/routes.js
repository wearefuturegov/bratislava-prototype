import App from "./../App";
import Email from "./../pages/Email";

const routes = [{
    path: "/",
    exact: true,
    component: App
}, {
    path: "/email",
    exact: true,
    component: Email
}, ];

export default routes;

//   "2-2": "P2.2 Email",
//         "2-3": "P2.3 Online Bill",
//         "2-4": "P2.4 Tax dept CMS",
//         "2-5": "P2.5 Tax dept CMS - edit",
//         "3": "P3 Payment Email",
//         "3-4": "P3 Bill with payment"