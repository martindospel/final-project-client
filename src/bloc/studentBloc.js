import { baseUrl } from "../config";

export default (function () {
  return {
    //get one student
    fetchOneStudent: async (uuid) => {
      const res = await fetch(`${baseUrl}api/students/${uuid}`)
      return res.json();
    },
    //add one student
    addStudent: async ({ classUuid, studentName, dob, gender }) => {
      const res = await fetch(`${baseUrl}api/students/`, {
        method: "POST",
        body: JSON.stringify({ classUuid, studentName, dob, gender }),
        headers: { "Content-Type": "application/json" },
      })
      return res.json();
    },
    //add to one student timeline
    addToStudentTimeline: async (
      studentUuid,
      { present, goodBehave, goodPerf, behaveComment, perfComment, date }
    ) => {
      const res = await fetch(`${baseUrl}api/students/${studentUuid}`, {
        method: "POST",
        body: JSON.stringify({
          present,
          goodBehave,
          goodPerf,
          behaveComment,
          perfComment,
          date,
        }),
        headers: { "Content-Type": "application/json" },
      })
      return res.json();
    },
    //edit student timeline
    editStudentTimeline: async (
      studentUuid,
      timelineUuid,
      { present, goodBehave, goodPerf, behaveComment, perfComment, date }
    ) => {
      const res = await fetch(
        `${baseUrl}api/students/${studentUuid}/${timelineUuid}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            present,
            goodBehave,
            goodPerf,
            behaveComment,
            perfComment,
            date,
          }),
          headers: { "Content-Type": "application/json" },
        }
      )
      return res.json();
    },
  };
})();
