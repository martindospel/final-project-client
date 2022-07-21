export default (function () {
  return {
    fetchOneStudent: uuid => {
      return fetch(`http://localhost:4321/api/students/${uuid}`)
        .then(res => res.json());
    },
    fetchStudentTimeline: async uuid => {
      fetch(`http://localhost:4321/api/students/${uuid}/${uuid}`)
        .then(res => res.json())
    },
    editStudentTimeline: async uuid => {
        fetch(`http://localhost:4321/api/students/${uuid}`)
        .then(res => res.json())
    },
  }
})();