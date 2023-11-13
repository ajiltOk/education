import { ICard, ITeachers } from "../../types/data";

interface Iq {
  data: Array<object>;
  teachers: Array<object>;
}

let result = fetch("https://bgaa.by/test").then((response) => response.json());
console.log(result);

const Card: React.FC = () => {
  return <div></div>;
};

export { Card };
