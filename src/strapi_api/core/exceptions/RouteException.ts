import { defaultLanguage } from '../../config/language';
import ApiError from '../ApiError';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const errors = await import(`../../resources/lang/${defaultLanguage}/routeErrorMessages.ts`);

class RouteException extends ApiError {
    constructor(errorTitle : string) {
        const err = errors[errorTitle];
        super(err.code, errorTitle, err.userError, err.detail);
        super.httpCustomStatusCode = err.httpCustomStatusCode || super.httpCustomStatusCode;
    }
}

export default RouteException;