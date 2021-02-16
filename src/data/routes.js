import App from "../pages/App";
import Email from "./../pages/Email";
import Bill from "./../pages/Bill";

const routes = [{
    titleKey: "navigation.home",
    path: "/",
    exact: true,
    component: App
}, {
    titleKey: "navigation.2-2",
    path: "/email",
    exact: true,
    component: Email
}, {
    titleKey: "navigation.bill",
    path: "/bill",
    exact: true,
    component: Bill
}, ];

export default routes;

//   "2-2": "P2.2 Email",
//         "2-3": "P2.3 Online Bill",
//         "2-4": "P2.4 Tax dept CMS",
//         "2-5": "P2.5 Tax dept CMS - edit",
//         "3": "P3 Payment Email",
//         "3-4": "P3 Bill with payment"