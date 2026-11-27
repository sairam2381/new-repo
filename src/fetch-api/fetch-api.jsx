import react, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./loading";
const Fetchapi = () => {
  const [loading, setLoading] = useState(false);
  const [apiData, setData] = useState(null);
  async function fetchData() {
    try {
      setLoading(true);
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
      );
      // let res=await response.json();

      setData(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

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
    </div>
  );
};
export default Fetchapi;
