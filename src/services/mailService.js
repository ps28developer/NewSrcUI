import { ROUTES } from "../utils/constants";

export const mailService = {
  /**
   * @param {string} email - User's email address.
   * @returns {Promise<Object>} - Response data.
   */
  requestDemo: async (email) => {
    const response = await fetch(ROUTES.DEMO_REQUEST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to submit request");
    }

    return data;
  },
};
