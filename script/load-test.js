import http from "k6/http";
import { sleep } from "k6";

export let options = {
    stages: [
        { duration: "5m", target: 40 },
        { duration: "10m", target: 60 },
        { duration: "3m", target: 100 },
        { duration: "2m", target: 500 },
        { duration: "3m", target: 60 },
        { duration: "10m", target: 40 },
        { duration: "5m", target: 10 },
    ],
    thresholds: {
        http_req_duration: ["p(99)<1500"],
        http_req_duration: ["p(95)<1200"],
        http_req_duration: ["p(90)<1010"],
    },
};

const BASE_URL = "https://philoserf.com";

export default () => {
    http.get(`${BASE_URL}/now`);
    sleep(1);
};
