
import { ResponseModel } from "./responseModel";
//import { TokenModel } from "./tokenModel";

export interface SingleResponseModel<T> extends ResponseModel{
    data:T
}