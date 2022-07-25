import { baseUrl } from "../config";

export default (function () {
  return {
    fetchOneTeacher: async (uuid) => {
      const res = await fetch(`${baseUrl}api/teachers/${uuid}`);
      return res.json();
    },
  };
})();
