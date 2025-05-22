import small1Img from '@/assets/images/small/small-1.jpg';
import small2Img from '@/assets/images/small/small-2.jpg';
import small3Img from '@/assets/images/small/small-3.jpg';
import small4Img from '@/assets/images/small/small-4.jpg';
import { colorVariants } from '@/context/constants';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

// 

const CardWithImage = () => {
  return <Card className="d-block">
      <img className="card-img-top img-fluid" width={381} height={254} src={small1Img} alt="Card image cap" />
      <CardBody>
        <CardTitle as={'h5'}>Titulo do Card</CardTitle>
        <p className="card-text">Algum texto de exemplo rápido para desenvolver o título do cartão e fazer
        a maior parte do conteúdo do cartão. Algum texto de exemplo rápido para desenvolver o título do cartão e compor.</p>
        <Button variant='primary'>Botão</Button>
      </CardBody>
    </Card>;
};
const CardWithImage2 = () => {
  return <Card className="d-block">
      <img className="card-img-top img-fluid" width={381} height={254} src={small2Img} alt="Card image cap" />
      <CardBody>
        <CardTitle as={'h5'}>Titulo do Cartão</CardTitle>
        <p className="card-text">Algum texto de exemplo rápido para construir no cartão.</p>
      </CardBody>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo ódio</li>
      </ul>
      <CardBody>
        <Link to="" className="card-link text-custom">Link do Card</Link>&nbsp;
        <Link to="" className="card-link text-custom">Outro link</Link>
      </CardBody>
    </Card>;
};
const CardWithImage3 = () => {
  return <Card className="d-block">
      <img className="card-img-top img-fluid" width={381} height={254} src={small3Img} alt="Card image cap" />
      <CardBody>
        <p className="card-text">Algum texto de exemplo rápido para desenvolver o Título do Cartão e fazer
        a maior parte do conteúdo do cartão. Algum texto de exemplo rápido para construir no Título do Cartão e compor.</p>
        <Button variant='primary'>Botão</Button>
      </CardBody>
    </Card>;
};
const CardWithTitleAndImage = () => {
  return <Card className="d-block">
      <CardBody>
        <CardTitle as={'h5'}>Titulo do Cartão</CardTitle>
        <h6 className="card-subtitle text-muted">Legenda do cartão de suporte</h6>
      </CardBody>
      <img className="img-fluid" src={small4Img} alt="Card image cap" />
      <CardBody>
        <p className="card-text">Algum texto de exemplo rápido para desenvolver o Título do Cartão e fazer
        a maior parte do conteúdo do cartão.</p>
        <Link to="" className="card-link text-custom">Link do Card</Link>&nbsp;
        <Link to="" className="card-link text-custom">Outro link</Link>
      </CardBody>
    </Card>;
};
const CardWithSpecialTitle = () => {
  return <div className="card card-body">
      <CardTitle as={'h5'}>Tratamento Especial do título</CardTitle>
      <p className="card-text">Com o texto de apoio abaixo como uma introdução natural para
      contente.</p>
      <Button variant='primary'>Ir pra algum lugar</Button>
    </div>;
};
const CardWithHeader = () => {
  return <Card>
      <h5 className="card-header bg-light">Apresentou</h5>
      <CardBody>
        <CardTitle as={'h5'}>Tratamento especial do título</CardTitle>
        <p className="card-text">Com o texto de apoio abaixo como uma introdução natural para
        conteúdo adicional.</p>
        <Button variant='primary'>Vá para algum lugar</Button>
      </CardBody>
    </Card>;
};
const CardWithHeaderAndQuote = () => {
  return <Card>
      <CardHeader className="bg-light">
        Quote
      </CardHeader>
      <CardBody>
        <blockquote className="card-bodyquote">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.</p>
          <footer>Alguém famoso em <cite title="Source Title">Título da fonte</cite>
          </footer>
        </blockquote>
      </CardBody>
    </Card>;
};
const CardWithHeaderAndFooter = () => {
  return <Card>
      <CardHeader className="bg-light">
      Apresentou
      </CardHeader>
      <CardBody>
        <Button variant='primary'>Ir a algum lugar</Button>
      </CardBody>
      <CardFooter className="border-top border-light text-muted">
      2 dias atrás
      </CardFooter>
    </Card>;
};
const ColorCards = () => {
  return <Row>
      <Col lg={4} sm={6}>
        <Card className="text-bg-secondary">
          <CardBody>
            <CardTitle as={'h5'}>Tratamento especial do título</CardTitle>
            <p className="card-text">Com o texto de apoio abaixo como uma introdução natural para
            conteúdo adicional.</p>
            <Button variant='primary' size='sm'>Botão</Button>
          </CardBody>
        </Card>
      </Col>
      {colorVariants.slice(1, 6).map((item, idx) => <Col lg={4} sm={6} key={idx}>
            <Card className={`text-bg-${item}`}>
              <CardBody>
                <blockquote className="card-bodyquote mb-0">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.</p>
                  <footer>Alguém famoso em <cite title="Source Title">Titulo da Fonte</cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>)}
    </Row>;
};
const ColorCards2 = () => {
  return <Row>
      {colorVariants.slice(0, 6).map((item, idx) => <Col lg={4} sm={6} key={idx}>
            <Card className={`text-bg-${item} bg-gradient`}>
              <CardBody>
                <blockquote className="card-bodyquote mb-0">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.</p>
                  <footer>Alguém famoso em <cite title="Source Title">Título da fonte</cite>
                  </footer>
                </blockquote>
              </CardBody>
            </Card>
          </Col>)}
    </Row>;
};
const BorderedCards = () => {
  return <>
      <Col md={4}>
        <Card className="border-secondary border">
          <CardBody>
            <CardTitle as={'h5'}>Tratamento especial do título</CardTitle>
            <p className="card-text">Com o texto de apoio abaixo como uma introdução natural para
            conteúdo adicional.</p>
            <Button variant='secondary' size='sm'>Botão</Button>
          </CardBody>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="border-primary border border-dashed">
          <CardBody>
            <CardTitle as={'h5'} className="text-primary">Tratamento especial do título</CardTitle>
            <p className="card-text">Com o texto de apoio abaixo como uma introdução natural para
              conteúdo adicional.</p>
            <Button variant='primary' size='sm'>Botão</Button>
          </CardBody>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="border-success border">
          <CardBody>
            <h5 className="card-title text-success">Tratamento especial do título</h5>
            <p className="card-text">Com o texto de apoio abaixo como uma introdução natural para
              conteúdo adicional.</p>
            <Button variant='success' size='sm'>Botão</Button>
          </CardBody>
        </Card>
      </Col>
    </>;
};
const CardWithStretchedLink = () => {
  return <>
      <Col sm={6} lg={3}>
        <Card>
          <img src={small2Img} height={254} width={381} className="card-img-top img-fluid" alt="..." />
          <CardBody>
            <CardTitle as={'h5'}>Cartão com link esticado</CardTitle>
            <Button variant='primary' className="mt-2 stretched-link">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm={6} lg={3}>
        <Card>
          <img src={small3Img} height={254} width={381} className="card-img-top img-fluid" alt="..." />
          <CardBody>
            <CardTitle as={'h5'}><Link to="" className="text-success stretched-link">Cartão com link esticado</Link></CardTitle>
            <p className="card-text">
              Algum texto de exemplo rápido para desenvolver a maior parte do conteúdo do cartão.
            </p>
          </CardBody>
        </Card>
      </Col>
      <Col sm={6} lg={3}>
        <Card>
          <img src={small4Img} height={254} width={381} className="card-img-top img-fluid" alt="..." />
          <CardBody>
            <CardTitle as={'h5'}>Cartão com link esticado</CardTitle>
            <Button variant='info' className="mt-2 stretched-link">Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>
      <Col sm={6} lg={3}>
        <Card>
          <img src={small1Img} height={254} width={381} className="card-img-top img-fluid" alt="..." />
          <CardBody>
            <CardTitle as={'h5'}><Link to="" className="stretched-link">Cartão com link esticado</Link></CardTitle>
            <p className="card-text">
              Algum texto de exemplo rápido para desenvolver a maior parte do conteúdo do cartão.
            </p>
          </CardBody>
        </Card>
      </Col>
    </>;
};
const HorizontalCard = () => {
  return <>
      <Col lg={6}>
        <Card>
          <Row className="g-0 align-items-center">
            <Col md={4}>
              <img src={small4Img} className="img-fluid rounded-start" alt="..." />
            </Col>
            <Col md={8}>
              <CardBody>
                <CardTitle as={'h5'}>Titulo do Cartão</CardTitle>
                <p className="card-text">Este é um cartão mais amplo com texto de apoio abaixo como uma introdução natural a conteúdo adicional. Este conteúdo é um pouco mais longo.</p>
                <p className="card-text"><small className="text-muted">Última atualização há 3 minutos</small></p>
              </CardBody>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col lg={6}>
        <Card>
          <Row className="g-0 align-items-center">
            <Col md={8}>
              <CardBody>
                <CardTitle as={'h5'}>Titulo do Cartão</CardTitle>
                <p className="card-text">Este é um cartão mais amplo com texto de apoio abaixo como uma introdução natural a conteúdo adicional. Este conteúdo é um pouco mais longo.</p>
                <p className="card-text"><small className="text-muted">Última atualização há 3 minutos</small></p>
              </CardBody>
            </Col>
            <Col md={4}>
              <img src={small1Img} className="img-fluid rounded-end" alt="..." />
            </Col>
          </Row>
        </Card>
      </Col>
    </>;
};
const CardWithGroup = ({
  item
}) => {
  return <Card className="d-block">
      <img className="card-img-top img-fluid" height={354} width={532} src={item.image} alt="Card image cap" />
      <CardBody>
        <CardTitle as={'h5'}>{item.title}</CardTitle>
        <p className="card-text">{item.text}</p>
        <p className="card-text">
          <small className="text-muted">{item.subtext}</small>
        </p>
      </CardBody>
    </Card>;
};
const CardsPage = () => {
  const CardGroupDetails = [{
    id: 1,
    image: small1Img,
    title: 'Titulo do Cartão',
    text: 'Este é um cartão mais amplo com texto de apoio abaixo como uma introdução natural a conteúdo adicional. Este conteúdo é um pouco mais longo.',
    subtext: 'Última atualização há 3 minutos'
  }, {
    id: 2,
    image: small2Img,
    title: 'Titulo do Cartão',
    text: 'Este cartão tem o texto de apoio abaixo como uma introdução natural a conteúdo adicional.',
    subtext: 'Última atualização há 3 minutos'
  }, {
    id: 3,
    image: small3Img,
    title: 'Titulo do Cartão',
    text: 'Este é um cartão mais amplo com texto de apoio abaixo como uma introdução natural a conteúdo adicional. Este cartão tem um conteúdo ainda mais longo do que o primeiro para mostrar essa ação de altura igual.',
    subtext: 'Última atualização há 3 minutos'
  }];
  return <>
      <PageBreadcrumb title='Cards' />
      <Row>
        <Col sm={6} lg={3}>
          <CardWithImage />
        </Col>
        <Col sm={6} lg={3}>
          <CardWithImage2 />
        </Col>
        <Col sm={6} lg={3}>
          <CardWithImage3 />
        </Col>
        <Col sm={6} lg={3}>
          <CardWithTitleAndImage />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <CardWithSpecialTitle />
        </Col>
        <Col sm={6}>
          <CardWithSpecialTitle />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <CardWithHeader />
        </Col>
        <Col md={4}>
          <CardWithHeaderAndQuote />
        </Col>
        <Col md={4}>
          <CardWithHeaderAndFooter />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-3">Cartão colorido</h4>
        </Col>
      </Row>
      <ColorCards />
      <ColorCards2 />

      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-3">Card Bordado</h4>
        </Col>
      </Row>
      <Row>
        <BorderedCards />
      </Row>
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-3">Horizontal Card</h4>
        </Col>
      </Row>
      <Row>
        <HorizontalCard />
      </Row>
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-3">Elo esticado</h4>
        </Col>
      </Row>
      <Row>
        <CardWithStretchedLink />
      </Row>
      <Row>
        <Col xs={12}>
          <h4 className="mb-4 mt-3">Card Grupo</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className="card-group">
            {CardGroupDetails.map((item, idx) => <CardWithGroup item={item} key={idx} />)}
          </div>
        </Col>
      </Row>
    </>;
};
export default CardsPage;