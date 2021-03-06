import React from "react";

export default class Potato extends React.Component {
  render() {
    return (
      <div className="potato">
        <figure>
          <div className="border"></div>
          <img
            src={require("../../imgPotato/items.jpg")}
            alt="Необходимые предметы"
          />
          <figcaption>
            <p>Вот что нам понадобится:</p>
            <p> 1) Картофель среднего размера, лучше больше</p>
            <p>
              2) Нож (если есть специальный нож для вырезания сердцевины, то это
              будет хорошим плюсом)
            </p>
            <p>3) Табак для кальяна </p>
            <p>4) Зубочистки</p>
            <p>5) Уголь кокосовый для кальяна</p>
            <p>6) Фольга или Колауд</p>
            <p>7) Салфетки или бумажные полотенца</p>
          </figcaption>
        </figure>
        <figure>
          <div className="border"></div>
          <img
            src={require("../../imgPotato/hole.jpg")}
            alt="Делаем отверстие в картошке"
          />
          <figcaption>
            <p>Разрезаем картофель и делаем отверстие под диаметр с шахты</p>
            <p>Салфетками промакиваем картофель, чтобы убрать лишнюю влагу</p>
            <p>
              Будьте осторожны, елси диаметр отверстия окажется меньше, то можно
              разломать картофель
            </p>
            <p>Картофель должен одеваться плотно на шахту</p>
          </figcaption>
        </figure>
        <figure>
          <div className="border"></div>
          <img
            src={require("../../imgPotato/establish.jpg")}
            alt="Решетка из зубочисток"
          />
          <figcaption>
            <p>
              Делаем решетку из зубочисток, чтобы табак не провалился в колбу
            </p>
            <p>Не слишком плотно, но и без больших дырок</p>
            <p>В это время разогреваем угли </p>
          </figcaption>
        </figure>
        <figure>
          <div className="border"></div>
          <img
            src={require("../../imgPotato/plant.jpg")}
            alt="Укладывает табак и одеваем на шахту"
          />
          <figcaption>
            <p>Укладывает табак и одеваем на шахту</p>
            <p>
              Плотно натягиваем фольгу (можно закрепить зубочистками), или как в
              моем случае, закидываем угли в колауд
            </p>
          </figcaption>
        </figure>
        <figure>
          <div className="border"></div>
          <img
            src={require("../../imgPotato/try.jpg")}
            alt="Прогреваем и пробуем"
          />
          <figcaption>
            <p>
              Ставим колауд на нашу чашу (будет шипеть из-за влаги самой
              картошки)
            </p>
            <p>
              Дать прогреться табаку и нашей чаше минут 6-7 (запахнет запеченой
              картохой, поэтому желательно заранее покушать)
            </p>
            <p>И можно пробовать</p>
          </figcaption>
        </figure>
        <figure>
          <div className="border"></div>
          <img
            src={require("../../imgPotato/tasting.jpg")}
            alt="Тестируем на людях"
          />
          <figcaption>
            <p>
              Ну, тут даже ярые противники курения не смогут остаться в стороне)
            </p>
            <p>Не драники и не фри - так картошку еще не использовали.</p>
            <p>На вкус это...странно.</p>
            <p>
              Спустя минут 20 активного курения появляется аромат печеной
              картошки, что довольно вкусно...
            </p>
          </figcaption>
        </figure>
      </div>
    );
  }
}
