import http from "../http-common";

const getAll = () => {
    return http.get("/menu/items/").catch(err => err);
};

const createMap = (data: any) => {
    return http.post("/menu/items/createMap",data).catch(err => err);
};

const setOrigin = (data: any) => {
    return http.post("/menu/items/setOrigin",data).catch(err => err);
};

const ColorService = {
    getAll,
    createMap,
    setOrigin
};

export default ColorService;
