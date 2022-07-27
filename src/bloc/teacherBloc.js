import { baseUrl } from "../config";

export default (function () {
  return {
    loginTeacher: async (access_token) => {
      const res = await fetch(`${baseUrl}api/teachers/login/${access_token}`, { method: "POST" });
      return res.json();
    },
    signupTeacher: async (fullName, access_token) => {
      const res = await fetch(`${baseUrl}api/teachers/signup/${access_token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName }),
      });
      return res.json();
    },
  };
})();
