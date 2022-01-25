import React from "react";
import Container from "../../common/Container";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
  <Container>
      <Header title="Об авторе" />
      <Section 
        title="Никита Рысиев" 
        body={
          <p contentEditable>
            <p>вы можете отредактировать текст ниже</p>
            <p>Привет ! Меня зовут Ник, и я начинающий младший Front-End (React) разработчик и 👶 Младший ручной  тестировщик программного обеспечения с введением в автоматизацию.
             Мой родной язык русский, но я больше учу и практикую английский язык, польский и немного немецкий.</p> 
            <p>Сейчас я стараюсь изучать тестирование программного обеспечения и кодирование простых веб-приложений.</p>
            <p>Я хочу очень хорошо знать программирование и говорить по-английски, чтобы быть полезным на рынке труда. 
            </p>
          </p>
          } 
        />
  </Container>
);