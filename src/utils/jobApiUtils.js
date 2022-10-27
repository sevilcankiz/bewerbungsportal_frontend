export const searchJobs = async (jobArt, jobOrt) => {
    try {
      console.log("searchJobs", jobArt, jobOrt);
      const url = `${process.env.REACT_APP_PROJECT_API}/jobsuche?was=${jobArt}?wo=${jobOrt}`;
      console.log("API", url);
      const data = await fetch(url, {
          method: 'GET'
        }
      );
      const content = await data.json();
      console.log("content", content)
      return { data };
    } catch (error) {
      return { error };
    }
  };