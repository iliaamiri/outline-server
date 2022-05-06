import HttpStatusCode from "./HttpStatusCode";

interface ApiError extends Error {
  // Http status code just for denormalization
  httpCustomStatusCode: HttpStatusCode;

  // Internal error-code. This is just for this API
  code: number;

  // The explicit message the API client will receive
  message: string;

  // The prepared message that the user should receive
  userError: string;

  // Other details
  detail: string;
}


export default ApiError;