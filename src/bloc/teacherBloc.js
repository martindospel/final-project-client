export default (function () {
  return {
    fetchOneTeacher: async (uuid) => {
      const res = await fetch(`http://localhost:4321/api/teachers/${uuid}`);
      return res.json();
    },
  };
})();
