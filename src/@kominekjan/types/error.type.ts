export type ErrorKominekJan = {
	/**
	 * Error code
	 * @example 400
	 * @example 401
	 * @example 403
	 * @example 404
	 * @example 500
	 * @example 503
	 * @example 504
	 **/
	code: number;
	/**
	 * Error message
	 * @example Bad Request
	 * @example Unauthorized
	 * @example Forbidden
	 * @example Not Found
	 * @example Internal Server Error
	 * @example Service Unavailable
	 **/
	message: string;
	/**
	 * Error description
	 * @example The server cannot or will not process the request due to an apparent client error
	 * @example The request has not been applied because it lacks valid authentication credentials for the target resource
	 * @example The server understood the request but refuses to authorize it
	 * @example The origin server did not find a current representation for the target resource or is not willing to disclose that one exists
	 **/
	description: string;
	/**
	 * Error details
	 * @example {"username": "Username is required"}
	 * @example {"password": "Password is required"}
	 * @example {"username": "Username is required", "password": "Password is required"}
	 **/
	details: string;
};
