export const fetchProduct = () => {
  return (dispatch) => {
    fetch("/api/products").then((res) =>
      res.json().then((data) => {
        dispatch({ type: "FETCH_PRODUCTS", data: data });
      })
    );
  };
};
