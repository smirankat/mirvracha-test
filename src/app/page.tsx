import Image from "next/image";
import Link from "next/link";
import Modal_1 from "./Modal_1/page";
import Modal_2 from "./Modal_2/page";
import icon2 from "/public/icon2.png";
import icon3 from "/public/icon3.png";
import pointer_blue from "/public/pointer_blue.png";
import pointer_green from "/public/pointer_green.png";
import vector5 from "/public/vector5.svg";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function homePage({ searchParams }: SearchParamProps) {
  const showFirst = searchParams?.showFirst;
  const showSecond = searchParams?.showSecond;

  return (
    <>
      <div className="intro">
        <h1>ХОБЛ: мифы и реальность</h1>
        <div className="item">
          <Image className="item__icon" src={icon2} alt="icon" />
          <div className="item__question">
            <Image className="item__question_border" src={vector5} alt="icon" />
            <p>
              ХОБЛ болеют <strong>преимущественно мужчины?</strong>
            </p>
          </div>
          <div className="item__text_wrapper">
            <div className="item__text">
              В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
              (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет,
              было выявлено преобладание...
            </div>
          </div>
          <Link href="/?showFirst=true">
            <Image className="pointer" src={pointer_blue} alt="pointer" />
          </Link>
        </div>
        {showFirst && <Modal_1 />}

        <div className="item">
          <Image className="item__icon" src={icon3} alt="icon" />
          <div className="item__question">
            <Image className="item__question_border" src={vector5} alt="icon" />
            <p>
              <span>
                <strong>Опасно</strong> не наличие
              </span>{" "}
              заболевания, а обострения?
            </p>
          </div>
          <div className="item__text_wrapper">
            <div className="item__text">
              Большинство пациентов с ХОБЛ столкнется с обострениями: как
              минимум одно среднетяжелое или тяжелое обострение случится в
              течение...
            </div>
          </div>
          <Link href="/?showSecond=true">
            <Image className="pointer" src={pointer_green} alt="pointer" />
          </Link>
        </div>
        {showSecond && <Modal_2 />}
      </div>
    </>
  );
}
