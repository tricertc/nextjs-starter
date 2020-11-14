type SuccessResponse = { success: true };
type FailureResponse = { success: false; errorMessage: string };

// login, signup
export type LoginBody = { email: string; password: string };
export type SignupBody = LoginBody & { name: string };
export type AuthResponse = SuccessResponse | FailureResponse;
