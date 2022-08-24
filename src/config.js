// const login = e => {
//   e.preventDefault();
//   fetch('', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       id: inputValues.id,
//       password: inputValues.password,
//     }),
//   })
//     .then(response => response.json())
//     .then(data => {
//       localStorage.setItem('Token', data.accessToken);
//       navigate('/main-bosung');
//     });
// };
// const signUp = e => {
//   e.preventDefault();
//   fetch('', {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       id: inputValues.id,
//       password: inputValues.password,
//     }),
//   })
//     .then(response => response.json())
//     .then(data => {});
// };

export const getOrder = async (url, setState) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTMyNjU4MH0.lGtjlP5qVZKd-4q23ZpqstdmJM5xGY4SlRnQXzMptMQ',
    },
  });
  const data = await response.json();
  setState(Object.values(data)[1]);
};

export const deleteData = async (url, execution) => {
  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvMUBnbWFpbC5jb20iLCJpZCI6MSwiYmlydGgiOiIyMDAwLTA5LTMwVDE1OjAwOjAwLjAwMFoiLCJjb250YWN0IjoiMDEwLTU1NTUtNDQ0NCIsInBvaW50IjoxMDAwMDAwMCwibmFtZSI6ImxlZSIsImlhdCI6MTY2MTEzMDIzNX0.1ZQ9uebdi1950j-dhZcG-3Tsf_9KTjWgFltGYQ7WOVk',
      },
    }).then(execution);
  } catch (err) {
    throw new Error(err);
  }
};
