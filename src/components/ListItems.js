import axios from "axios";
import React from "react";
export default function ListItems() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://653facb69e8bd3be29e10577.mockapi.io/api/v1/product"
        );
        setData(response.data);
        //console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      <div>list item</div>
      <div>
        {data.map((ele,index) => (
            <div className='card' key={index}>
                <div>{ele.name}</div>
                <div>${ele.price}</div>
            </div>
        ))}
      </div>
    </>
  );
}
