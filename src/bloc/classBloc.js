import { baseUrl } from "../config";

export default (function () {
  return {
    fetchOneClass: async (uuid) => {
      const res = await fetch(`${baseUrl}api/classes/${uuid}`);
      return res.json();
    },

    createOneClass: async (teacherUuid, className) => {
      await fetch(`${baseUrl}api/add/${teacherUuid}`), {
        method: "post",
        body: JSON.stringify({className}),
        headers: {"Content-Type": "application/json" },
      }
      return res.json();
    },

  };
})();
