
// export const getUser = async (token) => {
//   try {
//     const { data } = await fetch(`${process.env.REACT_APP_PROJECT_API}/auth/me`, {
//       headers: { Authorization: token }
//     });
//     return { data };
//   } catch (error) {
//     return { error };
//   }
// };

export const registerUser = async (formDataJson) => {
  try {
    console.log("API", process.env.REACT_APP_PROJECT_API);
    console.log("formDataJson", formDataJson);
    const data = await fetch(
      `${process.env.REACT_APP_PROJECT_API}/users`, {
        method: 'POST',
        body: formDataJson,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }
    );
    const content = await data.json();
    console.log("content", content)
    return { data };
  } catch (error) {
    return { error };
  }
};

// export const loginUser = async (formData) => {
//   try {
//     const { data } = await fetch(
//       `${process.env.REACT_APP_PROJECT_API}/auth/signin`,
//       formData
//     );
//     return { data };
//   } catch (error) {
//     return { error };
//   }
// };