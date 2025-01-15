import { useEffect, useState } from "react";

import CardText from "../card/CardText";

interface Book {
  id: number;
  title: string;
  body: string;
}

const Product = () => {
  const [data, setData] = useState([] as Book[]);

  useEffect(() => {
    const fetchJsonPlaceHolder = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchJsonPlaceHolder();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 pt-5">
        {data.map((item) => (
          <CardText
            key={item.id}
            id={item.id}
            title={item.title}
            body={item.body}
          />
        ))}
      </div>
    </>
  );
};

export default Product;
