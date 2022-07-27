import { baseUrl } from "../config";

export default (function () {
  return {
    fetchOneClass: async (uuid) => {
      const res = await fetch(`${baseUrl}api/classes/${uuid}`);
      return res.json();
    },
    createOneClass: async (teacherUuid, className) => {
      await fetch(`${baseUrl}api/classes/add/${teacherUuid}`, {
        method: "post",
        body: JSON.stringify({ className }),
        headers: { "Content-Type": "application/json" },
      });
    },
    fetchStatistics: async (uuid) => {
      const res = await fetch(`${baseUrl}api/classes/statistics/${uuid}`);
      return res.json();
    },
    fetchAllClassesForATeacher: async (teacherUuid) => {
      const res = await fetch(`${baseUrl}api/classes/all/${teacherUuid}`);
      return res.json();
    }
  };
})();
