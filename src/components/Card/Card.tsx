import { ICardsData } from "../../types/data";
import { CardHeader } from "../CardHeader/CardHeader";
import { CardBody } from "../CardBody/CardBody";

interface ICard {
  card: ICardsData;
}

const Card: React.FC<ICard> = (props) => {
  return (
    <div>
      <CardHeader header={props.card} />
      <CardBody body={props.card} />
    </div>
  );
};

export { Card };
