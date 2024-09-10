const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("jobApplications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {};

export { saveJobApplication };
