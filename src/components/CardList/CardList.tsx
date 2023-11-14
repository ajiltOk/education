import { Card } from "../Card/Card";
import { IFetchData } from "../../types/data";

interface ICardList {
  dataCards: IFetchData;
}

const CardList: React.FC<ICardList> = (props) => {
  return (
    <ul>
      {props.dataCards.data.map((card) => {
        return (
          <li key={card.uniqueId}>
            <Card card={card} />
          </li>
        );
      })}
    </ul>
  );
};

export { CardList };
