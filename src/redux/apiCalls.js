import { publicRequest , BASE_URL} from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicRequest.post(BASE_URL + "/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure())
    }
}