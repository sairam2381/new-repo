import react, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loading";
const Fetchapi = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setData] = useState(null);
  const [page, setPage] = useState(1);
  async function fetchData() {
    try {
      setLoading(true);
      let response = await axios.get(
        // "https://jsonplaceholder.typicode.com/users/1",
        `https://jsonplaceholder.typicode.com/users/${page}`,
      );
      console.log("=>(data:)<=", response);
      // let res=await response.json();

      setData([response.data]);
    } catch (error) {
      console.log("Error:", error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div>
      {loading === true ? (
        <Loader />
      ) : (
        <div>
          {apiData?.map((item, index) => {
            return (
              <div>
                <h1>{item?.name}</h1>
                <h3>{item?.username}</h3>
              </div>
            );
          })}
        </div>
      )}
      {/* {apiData?.map((item, index) => {
        return (
          <div>
            <h1>{item?.name}</h1>
            <h3>{item?.username}</h3>
          </div>
        );
      })} */}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Addition
      </button>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Subtraction
      </button>
    </div>
  );
};
export default Fetchapi;
