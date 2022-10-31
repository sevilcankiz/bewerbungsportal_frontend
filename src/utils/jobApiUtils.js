export const searchJobs = async (formDataJson) => {
    try {
      console.log("searchJobs", formDataJson);
      const { jobArt, jobOrt } = JSON.parse(formDataJson);
      const url = `${process.env.REACT_APP_PROJECT_API}/jobsuche?wo=${jobOrt}&was=${jobArt}`;
      console.log("API", url);
      const data = await fetch(url, {
          method: 'GET'
        }
      );
      const content = await data.json();
      console.log("content", content);
      return content;
    } catch (error) {
      return error;
    }
  };