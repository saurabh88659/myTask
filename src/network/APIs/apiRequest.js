import { BASE_URL, Instance, getAuthHeaders } from '../commonServices';
import { endPoints } from './endPoints';

export const getImageListData = async obj => {
    const authHeaders = await getAuthHeaders();
    try {
        const result = Instance('POST', BASE_URL + endPoints.getdata, authHeaders, obj);
        return result
    } catch (e) {
        return e;
    }
};



export const SaveUserData = async obj => {
    const authHeaders = await getAuthHeaders();
    try {
        const result = Instance('POST', BASE_URL + endPoints.savedata, authHeaders, obj);
        return result;
    } catch (e) {
        return e;
    }
};
