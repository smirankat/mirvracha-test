import Image from "next/image";
import heart from "/public/heart.png";
import man from "/public/man.png";
import bladder from "/public/bladder.png";

function Modal_2() {
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal-2">
          <p>
            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
            одно среднетяжелое или тяжелое обострение случится в течение 3 лет у
            77% пациентов1.
          </p>
          <p>
            В течение 5 лет после первого тяжёлого обострения в живых остаются
            только 40% пациентов.2 Прогноз после обострений ХОБЛ схож с таковым
            при сердечной недостаточности, инфаркте миокарда и некоторых
            злокачественных опухолях.
          </p>
          <h3>Пятилетняя выживаемость пациентов</h3>
          <div className="modalCarts">
            <div className="modalCart">
              <Image className="modalCart__icon" src={heart} alt="heart" />
              <div className="modalCart__percent">45,5%</div>
              <p>
                пациентов с <strong>сердечной недостаточностью</strong>
                <sup>1</sup>
              </p>
              <p>Популяционное когортное исследование (N=385)</p>
            </div>
            <div className="modalCart">
              <Image className="modalCart__icon" src={man} alt="man" />
              <div className="modalCart__percent">55,3%</div>
              <p>
                пациентов с <strong>инфарктом миокарда</strong>
                <sup>1</sup>
              </p>
              <p>Апостериорный анализ когортного исследования (N=2887)</p>
            </div>
            <div className="modalCart">
              <Image className="modalCart__icon" src={bladder} alt="bladder" />
              <div className="modalCart__percent">50,5%</div>
              <p>
                пациентов с <strong>раком мочевого пузыря</strong>
              </p>
              <p>пациентов с раком мочевого пузыря</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal_2;
