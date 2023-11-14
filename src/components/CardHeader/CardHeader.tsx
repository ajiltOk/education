import { ICardsData } from "../../types/data";
import styled from "styled-components";

interface ICardHeader {
  header: ICardsData;
}

const CardHeader: React.FC<ICardHeader> = (props) => {
  return (
    <div className="grid-container-header">
      <div className="header">{props.header.subjectName}</div>
      <div className="subgrid">
        <div className="item">Группа</div>
        <div className="item">{props.header.groupName}</div>
        <div className="item">Курс</div>
        <div className="item">{props.header.course}</div>
        <div className="item">Колличество курсантов</div>
        <div className="item">{props.header.studentsNumber}</div>
        <div className="item">Семестр</div>
        <div className="item">{props.header.semestr}</div>
      </div>
    </div>
  );
};

export { CardHeader };
