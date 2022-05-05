class ApiError extends Error {
    public httpCustomStatusCode = 200;
    public code : number;
    public msg : string;
    public userError : string;
    public detail : string

    constructor(errorCode : number, errorMessage : string, userError : string, errorDetail : string) {
        super();
        this.code = errorCode;
        this.msg = errorMessage;
        this.userError = userError;
        this.detail = errorDetail;
        this.name = this.constructor.name;
    }
}

export default ApiError;