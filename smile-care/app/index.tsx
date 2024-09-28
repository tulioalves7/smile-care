// import { ImageAttr } from "@/utils/util";
import styles from "./home.module.css";
// import "aos/dist/aos.css";

export default function Home() {
  return (
    <>
      <main>
        <section className={styles.contentPair}>
          <div className={styles.gallery}>
            <div className={styles.verticalGallery}>
              <div className={styles.galleryImage}>

              </div>
              <div className={styles.horizontalGallery}>
                <div className={styles.galleryImage}>

                </div>
                <div className={styles.galleryImage}>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2 className="title-one">A Dengue Não Escolhe Vítimas, Escolha Prevenir!</h2>
            <p>
              A dengue é uma doença transmitida pela picada do mosquito Aedes aegypti e pode afetar qualquer pessoa, independentemente da idade, sexo ou condição social.
            </p>
          </div>
        </section>
        <section className={`${styles.contentPair} content`}>
          <div className={styles.dengueAttacksContent}>
            <h2 className="title-two">Como a Dengue ataca o corpo?</h2>
            <p>
              A dengue é uma doença viral transmitida principalmente pela picada do mosquito Aedes aegypti infectado. Uma vez introduzido no corpo humano, o vírus da dengue circula na corrente sanguínea e pode causar uma variedade de sintomas que variam de leves a graves. A infecção por dengue pode afetar pessoas de todas as idades e condições de saúde e requer atenção.
            </p>
          </div>
          <div className={styles.dengueAttacksImage}>
            <div className={styles.galleryImage}>
            </div>
            <div className={styles.galleryImage}>
            </div>
          </div>
        </section>
      </main>
      <section className={`${styles.emphasis} content`}>
          <h2 className={styles.emphasisTitle} data-aos="fade-down" data-aos-once="true">Prevenção</h2>
          <div className={styles.charges}>
            <div className={styles.charge} data-aos="fade-down" data-aos-once="true">
              <div className={styles.chargeImage}>
              </div>
              <h1>Eliminação de Criadouros</h1>
              <p>
                É essencial identificar e eliminar qualquer fonte de água parada onde os mosquitos possam se reproduzir.
              </p>
            </div>
            <div className={styles.charge} data-aos="fade-down" data-aos-once="true">
              <div className={styles.chargeImage}>
              </div>
              <h1>Educação e Conscientização</h1>
              <p>
                Informar a comunidade sobre os riscos da dengue, pode ajudar a criar uma cultura de prevenção e cuidado.
              </p>
            </div>
            <div className={styles.charge} data-aos="fade-down" data-aos-once="true">
              <div className={styles.chargeImage}>
              </div>
              <h1>Uso de Repelentes e Roupas Adequadas</h1>
              <p>
                Repelentes contendo DEET, icaridina ou óleo de eucalipto citriodora são recomendados para afastar os mosquitos.
              </p>
            </div>
          </div>
        </section>
        <main>
          <section className="content">
            <h2 className="title-two">Sintomas</h2>
            <p>
              A Organização Mundial da Saúde (OMS) considera a dengue como a doença mais prevalente transmitida por mosquitos. A dengue hemorrágica é uma forma grave da doença, cujas infecções aumentaram mais de 30 vezes globalmente nos últimos 50 anos. O sistema imunológico desenvolve imunidade específica para cada tipo de dengue, permitindo múltiplas infecções, podendo uma pessoa contrair a doença até quatro vezes. Infecções subsequentes tendem a ser mais severas. A transmissão ocorre quando um mosquito pica uma pessoa infectada, permitindo que o vírus se multiplique em seu corpo por cerca de 12 dias antes de ser transmitido a outra pessoa saudável através da picada do mosquito.
            </p>
          </section>
          <section className={`${styles.contentPair} content`}>
            <div className={styles.contentPairText}>
              <h2 className="title-two">Crianças e Idosos</h2>
              <p>
                Crianças e idosos podem manifestar sintomas de dengue de maneira distinta em comparação aos adultos. Em crianças, além da febre persistente, é importante observar sinais como irritabilidade, manchas vermelhas na pele e falta de apetite. A desidratação pode ocorrer rapidamente em crianças devido à menor capacidade de conservar líquidos.
              </p>
              <p>
                Nos idosos, além da febre e dores no corpo, sintomas como cansaço extremo, confusão mental, tonturas e fraqueza podem ser mais proeminentes. A capacidade reduzida do sistema imunológico em idades avançadas pode tornar o quadro clínico mais grave e requerer cuidados médicos imediatos.
              </p>
              <p>
                É fundamental estar atento a esses sintomas específicos e buscar assistência médica ao notar qualquer alteração no estado de saúde de crianças e idosos, garantindo um diagnóstico precoce e um tratamento adequado para a dengue.
              </p>
            </div>
            <div className={styles.contentPairImage}>
            </div>
          </section>
          <section className="content">
            <h2 className="title-two">Casos de Dengue em Ascensão: Um Perigo Subestimado</h2>
            <p>
              Nos últimos anos, os casos de dengue têm aumentado de forma alarmante em várias regiões do mundo. O que muitos consideram uma doença banal, com sintomas semelhantes aos de uma gripe forte, pode, na verdade, se transformar em uma ameaça letal. A dengue, transmitida pelo mosquito Aedes aegypti, não deve ser subestimada.
            </p>
            <br />
            <p>
              Os números falam por si. As estatísticas mostram um crescimento preocupante no número de pessoas infectadas. Em muitas áreas urbanas e rurais, a presença constante de criadouros de mosquitos tem contribuído para esse aumento. Infelizmente, essa crescente incidência muitas vezes é vista como um mero inconveniente sazonal, levando a uma perigosa complacência.
            </p>
            <br />
            <p>
              O que muitos não sabem ou esquecem é que a dengue pode evoluir para formas graves, como a dengue hemorrágica ou a síndrome do choque da dengue. Essas complicações podem causar hemorragias severas, falência de órgãos e, em muitos casos, levar à morte se não tratadas adequadamente e a tempo.
            </p>
            <br />
            <p>
              O risco é real e iminente. Cada ano, milhares de pessoas, muitas delas crianças, perdem suas vidas para essa doença que poderia ser prevenida com medidas simples de controle de mosquitos e eliminação de criadouros. O combate à dengue requer uma abordagem coletiva, desde ações governamentais até o empenho de cada indivíduo em manter seu ambiente livre de água parada, onde o mosquito se reproduz.
            </p>
          </section>
          <section className="content">
            <h2 className="title-two">Proteja-se e Ajude a Reduzir os Casos</h2>
            <p>
              Compreender a gravidade da dengue é o primeiro passo para a prevenção. Elimine locais de reprodução de mosquitos, como recipientes que acumulam água parada, vasos de plantas e pneus velhos. Além disso, use repelente e vista roupas que cubram a maior parte do corpo, especialmente durante os períodos de maior atividade dos mosquitos. Mantenha telas em portas e janelas para evitar a entrada dos insetos em sua casa.
            </p>
            <br />
            <p>
              Participar de campanhas de conscientização é fundamental para disseminar informações sobre os riscos da dengue e as medidas preventivas. Seja voluntário em iniciativas locais de controle de vetores, como mutirões de limpeza e monitoramento de focos de mosquitos. Ao tomar essas precauções e compartilhar conhecimento com sua comunidade, você contribui significativamente para reduzir os casos de dengue e proteger a saúde de todos. Juntos, podemos combater efetivamente essa doença e garantir um ambiente mais seguro para todos.uperação rápida e para prevenir possíveis complicações da doença.
            </p>
          </section>
          <section className="content">
            <h2 className="title-two">Juntos Somos Mais Fortes!</h2>
            <p>
              Engajar-se na prevenção da dengue é um ato de cuidado e responsabilidade com sua comunidade. Ao implementar medidas de prevenção em sua casa e incentivar outros a fazerem o mesmo, você contribui significativamente para a redução dos casos da doença. Seja parte ativa nesta causa, compartilhando conhecimento, participando de iniciativas locais ou organizando atividades comunitárias. Cada pessoa conta, e juntos podemos criar um impacto positivo duradouro na saúde de nossa comunidade. Vamos trabalhar juntos e proteger aqueles que amamos!
            </p>
          </section>
          <section className={`${styles.contentPair} content`} >
            <div className={styles.contentPairImage}>
            </div>
            <div className={styles.contentPairText}>
              <h2 className="title-two">Cuidados Importantes</h2>
              <p>
                O tratamento da dengue visa aliviar os sintomas e prevenir complicações. Uma hidratação adequada é fundamental para ajudar o corpo a combater a infecção e evitar a desidratação, que pode ocorrer devido à febre alta e à perda de líquidos.
              </p>
              <p>
                É crucial evitar o uso de medicamentos à base de ácido acetilsalicílico, como a aspirina, pois eles podem aumentar o risco de complicações hemorrágicas.
              </p>
              <p>
                Ao apresentar sintomas de dengue, como febre persistente, dores intensas e outros sinais alarmantes, é essencial procurar assistência médica imediatamente. O diagnóstico precoce e o tratamento adequado são fundamentais para uma recuperação rápida e para prevenir possíveis complicações da doença.
              </p>
            </div>
          </section>
        </main>
    </>
  );
}
