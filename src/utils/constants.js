export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5174/api";

export const ROUTES = {
  DEMO_REQUEST: `${API_BASE_URL}/request-demo`,
};

export const UI_MESSAGES = {
  SUCCESS_JOIN: "Successfully joined early access! Check your inbox.",
  ERROR_GENERIC: "Something went wrong. Please try again.",
  ERROR_CONNECTION: "Failed to connect to the server.",
};
