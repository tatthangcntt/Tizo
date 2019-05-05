import axios from "axios";
export default class MyRequest {
    static instance = null;
    static createInstance() {
        var object = axios;
        object.defaults.timeout = 10000;
        return object;
    }

    static getInstance() {
        if (!MyRequest.instance) {
            MyRequest.instance = MyRequest.createInstance();
        }
        return MyRequest.instance;
    }
}
