import { useState, useEffect } from "react";
import { CardList } from "./components/CardList/CardList";
import { IFetchData } from "./types/data";

const App: React.FC = () => {
  const [data, setData] = useState<IFetchData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://bgaa.by/test");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data ? <CardList dataCards={data} /> : <div>Loading...</div>}
      <button>Сохранить</button>
    </>
  );
};

export { App };
