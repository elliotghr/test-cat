const Fetch = (url) => {
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("Error");
      return res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default Fetch;
