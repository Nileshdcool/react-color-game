import http from "../http-common";

const getAllColors = async () => {
    try {
        return http.get("/menu/items/getAllColors");
    } catch (err) {
        return err;
    }
};

const createMap = async (data: any) => {
    try {
        return http.post("/menu/items/createMap", data);
    } catch (err) {
        return err;
    }
};

const setOrigin = async (data: any) => {
    try {
        return http.post("/menu/items/setOrigin", data);
    } catch (err) {
        return err;
    }
};

const ColorService = {
    getAllColors,
    createMap,
    setOrigin
};

export default ColorService;
