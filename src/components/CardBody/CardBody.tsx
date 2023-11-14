import { ICardsData } from "../../types/data";
import "./CardBody.module.scss";

interface ICardBody {
  body: ICardsData;
}

const CardBody: React.FC<ICardBody> = (props) => {
  return (
    <div>
      <div className="grid-container-body">
        <div className="item">Занятия</div>
        <div className="item">Часы</div>
        <div className="item">Преподаватель +</div>
        <div className="item">Лекции</div>
        <div className="item">{props.body.lecturesHours}</div>
        <input></input>
        <div className="item">Лабораторные работы</div>
        <div className="item">{props.body.laboratoryHours}</div>
        <input></input>
        <div className="item">Практические</div>
        <div className="item">{props.body.practicHours}</div>
        <input></input>
        <div className="item">Семинарские</div>
        <div className="item">{props.body.seminarHours}</div>
        <input></input>
        <div className="item">{props.body.exam ? "Экзамен" : "Зачет"}</div>
        <div className="item"></div>
        <input></input>
        <div className="item">Примечание(для составления расписания)</div>
        <div className="item"></div>
        <textarea></textarea>
      </div>
    </div>
  );
};

export { CardBody };
