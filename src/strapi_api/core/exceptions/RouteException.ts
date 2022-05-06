import {defaultLanguage} from '../../config/language';
import ApiError from '../ApiError';
import HttpStatusCode from "../HttpStatusCode";

const {default: errors} = await import(`../../resources/lang/${defaultLanguage}/routeErrorMessages.ts`);

class RouteException implements ApiError {
  httpCustomStatusCode: HttpStatusCode;
  code: number;
  message: string;
  userError: string;
  detail: string;

  name: string;

  constructor(errorTitle: string) {
    const err = errors[errorTitle];

    this.httpCustomStatusCode = err.httpCustomStatusCode || HttpStatusCode.OK;

    this.code = err.code;
    this.message = errorTitle;
    this.userError = err.userError;
    this.detail = err.detail;
  }
}

export default RouteException;