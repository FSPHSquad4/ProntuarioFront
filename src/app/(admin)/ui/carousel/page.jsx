import small1Img from '@/assets/images/small/small-1.jpg';
import small2Img from '@/assets/images/small/small-2.jpg';
import small3Img from '@/assets/images/small/small-3.jpg';
import small4Img from '@/assets/images/small/small-4.jpg';
import small5Img from '@/assets/images/small/small-5.jpg';
import small6Img from '@/assets/images/small/small-6.jpg';
import small7Img from '@/assets/images/small/small-7.jpg';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Carousel, CarouselItem, Col, Row } from 'react-bootstrap';

//

const SlidesOnly = () => {
  return (
    <ComponentContainerCard
      title="Somente Slides"
      description={
        <>
          Aqui está um carrossel apenas com slides. Observe a presença de{' '}
          <code className="me-1">.d-block</code>e <code>.img-fluid</code> nas
          imagens do carrossel para evitar o alinhamento padrão das imagens no
          navegador.
        </>
      }
    >
      <Carousel
        controls={false}
        indicators={false}
        id="carouselExampleSlidesOnly"
        className="slide"
        data-bs-ride="carousel"
      >
        <CarouselItem className=" active">
          <img
            className="d-block img-fluid"
            src={small1Img}
            alt="Primeiro slide"
          />
        </CarouselItem>
        <CarouselItem className="">
          <img
            className="d-block img-fluid"
            src={small2Img}
            alt="Segundo slide"
          />
        </CarouselItem>
        <CarouselItem className="">
          <img
            className="d-block img-fluid"
            src={small3Img}
            alt="Terceiro slide"
          />
        </CarouselItem>
      </Carousel>
    </ComponentContainerCard>
  );
};
const SlidesWithControls = () => {
  return (
    <ComponentContainerCard
      title="Com Controles"
      description={<>Adicionando controles de anterior e próximo:</>}
    >
      <Carousel
        indicators={false}
        id="carouselExampleControls"
        className="slide"
        data-bs-ride="carousel"
      >
        <CarouselItem className="carousel-item active">
          <img
            className="d-block img-fluid"
            src={small4Img}
            alt="Primeiro slide"
          />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img
            className="d-block img-fluid"
            src={small1Img}
            alt="Segundo slide"
          />
        </CarouselItem>
        <CarouselItem className="carousel-item">
          <img
            className="d-block img-fluid"
            src={small2Img}
            alt="Terceiro slide"
          />
        </CarouselItem>
      </Carousel>
    </ComponentContainerCard>
  );
};
const SlidesWithIndicators = () => {
  return (
    <ComponentContainerCard
      title="Com Indicadores"
      description={
        <>
          Você também pode adicionar indicadores ao carrossel, junto com os
          controles.
        </>
      }
    >
      <Carousel
        controls={true}
        indicators={true}
        id="carouselExampleIndicators"
      >
        <CarouselItem className=" active">
          <img
            className="d-block img-fluid"
            src={small3Img}
            alt="Primeiro slide"
          />
        </CarouselItem>
        <CarouselItem className="">
          <img
            className="d-block img-fluid"
            src={small2Img}
            alt="Segundo slide"
          />
        </CarouselItem>
        <CarouselItem className="">
          <img
            className="d-block img-fluid"
            src={small1Img}
            alt="Terceiro slide"
          />
        </CarouselItem>
      </Carousel>
    </ComponentContainerCard>
  );
};
const SlidesWithCaptions = () => {
  return (
    <ComponentContainerCard
      title="Com Legendas"
      description={
        <>
          Adicione legendas aos seus slides facilmente com o elemento{' '}
          <code>.carousel-caption</code> dentro de qualquer{' '}
          <code>.carousel-item</code>.
        </>
      }
    >
      <Carousel
        indicators={false}
        id="carouselExampleCaption"
        className="slide"
        data-bs-ride="carousel"
      >
        <CarouselItem className=" active">
          <img src={small1Img} alt="..." className="d-block img-fluid" />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="text-white">Legenda do primeiro slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <img src={small3Img} alt="..." className="d-block img-fluid" />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="text-white">Legenda do segundo slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <img src={small2Img} alt="..." className="d-block img-fluid" />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="text-white">Legenda do terceiro slide</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
      </Carousel>
    </ComponentContainerCard>
  );
};
const CrossFade = () => {
  return (
    <ComponentContainerCard
      title="Transição Suave"
      description={
        <>
          Adicione <code>.carousel-fade</code> ao seu carrossel para animar os
          slides com uma transição suave em vez de deslizamento.
        </>
      }
    >
      <Carousel
        indicators={false}
        id="carouselExampleFade"
        className="slide carousel-fade"
        data-bs-ride="carousel"
      >
        <CarouselItem className=" active">
          <img
            className="d-block img-fluid"
            src={small1Img}
            alt="Primeiro slide"
          />
        </CarouselItem>
        <CarouselItem className="">
          <img
            className="d-block img-fluid"
            src={small2Img}
            alt="Segundo slide"
          />
        </CarouselItem>
        <CarouselItem className="">
          <img
            className="d-block img-fluid"
            src={small3Img}
            alt="Terceiro slide"
          />
        </CarouselItem>
      </Carousel>
    </ComponentContainerCard>
  );
};
const IndividualInterval = () => {
  return (
    <ComponentContainerCard
      title="Intervalo Individual"
      description={
        <>
          Adicione <code>data-bs-interval=</code> a um{' '}
          <code>.carousel-item</code> para alterar o tempo de espera entre a
          transição automática para o próximo item.
        </>
      }
    >
      <Carousel
        indicators={false}
        id="carouselExampleInterval"
        className="slide"
        data-bs-ride="carousel"
      >
        <CarouselItem className=" active" data-bs-interval={1000}>
          <img
            src={small4Img}
            className="img-fluid d-block w-100"
            alt="Primeiro slide"
          />
        </CarouselItem>
        <CarouselItem data-bs-interval={2000}>
          <img
            src={small2Img}
            className="img-fluid d-block w-100"
            alt="Segundo slide"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={small1Img}
            className="img-fluid d-block w-100"
            alt="Terceiro slide"
          />
        </CarouselItem>
      </Carousel>
    </ComponentContainerCard>
  );
};
const DarkVariant = () => {
  return (
    <ComponentContainerCard
      title="Variante Escura"
      description={
        <>
          Adicione <code>.carousel-dark</code> ao <code>.carousel</code> para
          controles, indicadores e legendas mais escuros. Os controles são
          invertidos em relação ao preenchimento branco padrão com a propriedade
          CSS <code>filter</code>. Legendas e controles possuem variáveis Sass
          adicionais que personalizam a <code>cor</code> e a{' '}
          <code>cor de fundo</code>.
        </>
      }
    >
      <Carousel id="carouselExampleDark" className="carousel-dark slide">
        <CarouselItem className=" active" data-bs-interval={10000}>
          <img src={small5Img} className="img-fluid" alt="Imagens" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Legenda do primeiro slide</h5>
            <p>Algum conteúdo representativo para o primeiro slide.</p>
          </div>
        </CarouselItem>
        <CarouselItem data-bs-interval={2000}>
          <img src={small6Img} className="img-fluid" alt="Imagens" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Legenda do segundo slide</h5>
            <p>Algum conteúdo representativo para o segundo slide.</p>
          </div>
        </CarouselItem>
        <CarouselItem className="">
          <img src={small7Img} className="img-fluid" alt="Imagens" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Legenda do terceiro slide</h5>
            <p>Algum conteúdo representativo para o terceiro slide.</p>
          </div>
        </CarouselItem>
      </Carousel>
    </ComponentContainerCard>
  );
};
const CarouselPage = () => {
  return (
    <>
      <PageBreadcrumb title="Carrossel" />
      <Row>
        <Col lg={6}>
          <SlidesOnly />
        </Col>
        <Col lg={6}>
          <SlidesWithControls />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <SlidesWithIndicators />
        </Col>
        <Col lg={6}>
          <SlidesWithCaptions />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <CrossFade />
        </Col>
        <Col lg={6}>
          <IndividualInterval />
        </Col>
        <Col lg={6}>
          <DarkVariant />
        </Col>
      </Row>
    </>
  );
};
export default CarouselPage;
