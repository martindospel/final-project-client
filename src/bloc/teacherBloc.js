import { baseUrl } from "../config";

export default (function () {
  return {
    fetchOneTeacher: async (uuid) => {
      const res = await fetch(`${baseUrl}api/teachers/${uuid}`);
      return res.json();
    },
    addOneTeacher: async (fullName, email) => {
      const res = await fetch(`${baseUrl}api/teachers`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          email,
        })
      });
      return res.json()
    }
  };
})();
