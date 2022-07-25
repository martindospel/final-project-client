export default (function () {
  return {
    fetchOneClass: async (uuid) => {
      const res = await fetch(`http://localhost:4321/api/classes/${uuid}`)
      return res.json();
    },
    addStudentToClass: async (uuid, studentUuid) => {
      await fetch(`http://localhost:4321/api/classes/${uuid}`, {
        method: "post",
        body: JSON.stringify({ uuid: studentUuid }),
        headers: { "Content-Type": "application/json" },
      });
    },
  };
})();
