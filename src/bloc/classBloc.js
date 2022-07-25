import { baseUrl } from "../config";

export default (function () {
  return {
    fetchOneClass: async (uuid) => {
      const res = await fetch(`${baseUrl}api/classes/${uuid}`);
      return res.json();
    },
    addStudentToClass: async (uuid, studentUuid) => {
      await fetch(`${baseUrl}api/classes/${uuid}`, {
        method: "post",
        body: JSON.stringify({ uuid: studentUuid }),
        headers: { "Content-Type": "application/json" },
      });
    },
  };
})();
