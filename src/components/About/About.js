import React from "react";
//styled components
import { Section } from "./Section";
import { ImageContainer, TextContainer, Container } from "./Containers";
import { H1 } from "./H1";
import { Desc } from "./Desc";
import { Icons, HrefIG, HrefFB, FaInfoCompany } from "./Icons";
import { Line } from "./Line";

function About() {
  return (
    <Section>
      <Container>
        <ImageContainer></ImageContainer>
        <TextContainer>
          <H1>sklep baller bay</H1>
          <Line></Line>
          <Desc>
            Światem „Streetwearu” oraz „High Endowych” marek zajmujemy się od
            2017 roku. Mamy za sobą wiele udanych transakcji. W „Baller Bay”
            klienta traktujemy tak, jak sami chcielibyśmy być traktowani. W
            ofercie posiadamy różnego rodzaju odzież, obuwie oraz akcesoria.
            Wysyłka przedmiotu odbywa się najpóźniej 48 godzin po zaksięgowaniu
            pieniędzy na naszym koncie.
          </Desc>

          <Desc>
            Jeżeli szukasz czegoś, co nie jest dostępne w naszym sklepie, albo
            chcesz zadać jakieś pytanie skontaktuj się z nami poprzez formularz
            dostępny w sekcji kontakt, bądź za pomocą facebooka do którego
            odnośnik znajduje się poniżej.
          </Desc>
          <Line></Line>
          <Icons>
            <div>
              <a
                href="https://www.instagram.com/baller_bay_official/?igshid=bpbwz2ltfc55&fbclid=IwAR1wPCRg0MJaXU_9SiriwjoPK8wsCE4ZKfmnI41lEeJzJG4CM07nIMIiHs4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HrefIG></HrefIG>
              </a>
            </div>

            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100021759016143"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HrefFB></HrefFB>
              </a>
            </div>

            <div>
              <a
                href="https://www.money.pl/rejestr-firm/nip/548-27-29-178/kod-pocztowy/43-460/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInfoCompany></FaInfoCompany>
              </a>
            </div>
          </Icons>
        </TextContainer>
      </Container>
    </Section>
  );
}

export default About;
