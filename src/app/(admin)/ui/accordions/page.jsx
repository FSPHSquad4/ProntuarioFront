import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Row,
} from 'react-bootstrap';

//

const accordionData = ['primeiro', 'segundo', 'terceiro'];
const DefaultAccordions = () => {
  return (
    <ComponentContainerCard
      title="Acordeões Padrão"
      description={
        'Clique nos acordeões abaixo para expandir/recolher o conteúdo do acordeão.'
      }
    >
      <Accordion defaultActiveKey={'0'} id="accordionExample">
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader
              as={'h2'}
              className="accordion-header"
              id="headingOne"
            >
              Item do Acordeão #{idx}
            </AccordionHeader>
            <AccordionBody>
              <strong>Este é o corpo do acordeão do item {item}.</strong> Ele é
              mostrado por padrão, até que o plugin de colapso adicione as
              classes apropriadas que usamos para estilizar cada elemento. Essas
              classes controlam a aparência geral, assim como a exibição e o
              ocultamento via transições CSS. Você pode modificar qualquer um
              desses elementos com CSS personalizado ou sobrescrevendo nossas
              variáveis padrão. Vale também destacar que qualquer HTML pode ser
              inserido dentro do <code>.accordion-body</code>, embora a
              transição limite o estouro.
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentContainerCard>
  );
};

const FlushAccordions = () => {
  return (
    <ComponentContainerCard
      title="Acordeões Flush"
      description={
        <>
          Adicione <code>.accordion-flush</code> para remover a cor de fundo
          padrão, algumas bordas e alguns cantos arredondados, para renderizar
          os acordeões de ponta a ponta com o contêiner pai.
        </>
      }
    >
      <Accordion
        defaultActiveKey={'0'}
        className="accordion-flush"
        id="accordionFlushExample"
      >
        <AccordionItem eventKey="0" className="accordion-item">
          <AccordionHeader as={'h2'} id="flush-headingOne">
            Item do Acordeão #1
          </AccordionHeader>
          <AccordionBody>
            <p>
              Conteúdo de exemplo para este acordeão, que visa demonstrar a
              classe
              <code>.accordion-flush</code>. Este é o corpo do acordeão do
              primeiro item.
            </p>
            <button type="button" className="btn btn-primary btn-sm">
              Clique em Mim
            </button>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="1" className="accordion-item">
          <AccordionHeader as={'h2'} id="flush-headingTwo">
            Item do Acordeão #2
          </AccordionHeader>
          <AccordionBody>
            Conteúdo de exemplo para este acordeão, que visa demonstrar a classe
            <code>.accordion-flush</code>. Este é o corpo do acordeão do segundo
            item. Vamos imaginar que este seja preenchido com algum conteúdo
            real.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="2" className="accordion-item">
          <AccordionHeader as={'h2'} id="flush-headingThree">
            Item do Acordeão #3
          </AccordionHeader>
          <AccordionBody>
            Conteúdo de exemplo para este acordeão, que visa demonstrar a classe
            <code>.accordion-flush</code>. Este é o corpo do acordeão do
            terceiro item. Não há nada mais empolgante acontecendo aqui em
            termos de conteúdo, mas estamos apenas preenchendo o espaço para
            fazê-lo parecer, pelo menos à primeira vista, um pouco mais
            representativo de como isso ficaria em uma aplicação do mundo real.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </ComponentContainerCard>
  );
};

const BorderedAccordions = () => {
  return (
    <ComponentContainerCard
      title="Acordeões com Bordas"
      description={
        <>
          Usando o componente de cartão, você pode estender o comportamento de
          colapso padrão para criar um acordeão. Para alcançar o estilo de
          acordeão de forma adequada, certifique-se de usar{' '}
          <code>.accordion</code> como contêiner.
        </>
      }
    >
      <Accordion
        defaultActiveKey={'0'}
        className="accordion-bordered"
        id="BorderedaccordionExample"
      >
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader as={'h2'} id="BorderedheadingOne">
              Item do Acordeão #{idx}
            </AccordionHeader>
            <AccordionBody>
              <strong>Este é o corpo do acordeão do item {item}.</strong> Ele é
              mostrado por padrão, até que o plugin de colapso adicione as
              classes apropriadas que usamos para estilizar cada elemento. Essas
              classes controlam a aparência geral, assim como a exibição e o
              ocultamento via transições CSS. Você pode modificar qualquer um
              desses elementos com CSS personalizado ou sobrescrevendo nossas
              variáveis padrão. Vale também destacar que qualquer HTML pode ser
              inserido dentro do <code>.accordion-body</code>, embora a
              transição limite o estouro.
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentContainerCard>
  );
};

const CustomIconAccordion = () => {
  return (
    <ComponentContainerCard
      title="Acordeão com Ícone Personalizado"
      description={
        <>
          {' '}
          Usando o componente de cartão, você pode estender o comportamento de
          colapso padrão para criar um acordeão. Para alcançar o estilo de
          acordeão de forma adequada, certifique-se de usar{' '}
          <code>.accordion</code> como contêiner.
        </>
      }
    >
      <Accordion
        defaultActiveKey={'0'}
        className="accordion-bordered accordion-custom-icon accordion-arrow-none"
        id="CustomIconaccordionExample"
      >
        <AccordionItem eventKey="0">
          <AccordionHeader id="CustomIconheadingOne">
            Item do Acordeão com ícones Tabler
            <IconifyIcon
              icon="tabler:plus"
              className="accordion-icon accordion-icon-on"
            />
            <IconifyIcon
              icon="tabler:minus"
              className="accordion-icon accordion-icon-off"
            />
          </AccordionHeader>
          <div
            id="CustomIconcollapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="CustomIconheadingOne"
            data-bs-parent="#CustomIconaccordionExample"
          >
            <AccordionBody>
              <strong>Este é o corpo do acordeão do primeiro item.</strong> Ele
              é mostrado por padrão, até que o plugin de colapso adicione as
              classes apropriadas que usamos para estilizar cada elemento. Essas
              classes controlam a aparência geral, assim como a exibição e o
              ocultamento via transições CSS. Você pode modificar qualquer um
              desses elementos com CSS personalizado ou sobrescrevendo nossas
              variáveis padrão. Vale também destacar que qualquer HTML pode ser
              inserido dentro do <code>.accordion-body</code>, embora a
              transição limite o estouro.
            </AccordionBody>
          </div>
        </AccordionItem>
        <AccordionItem eventKey="1">
          <AccordionHeader id="CustomIconheadingTwo">
            Item do Acordeão com ícones Lucid
            <IconifyIcon
              icon="lucide:circle-plus"
              className="accordion-icon accordion-icon-on avatar-xxs me-n1"
            />
            <IconifyIcon
              icon="lucide:minus-circle"
              className="accordion-icon accordion-icon-off avatar-xxs me-n1"
            />
          </AccordionHeader>
          <AccordionBody>
            <strong>Este é o corpo do acordeão do segundo item.</strong> Ele é
            oculto por padrão, até que o plugin de colapso adicione as classes
            apropriadas que usamos para estilizar cada elemento. Essas classes
            controlam a aparência geral, assim como a exibição e o ocultamento
            via transições CSS. Você pode modificar qualquer um desses elementos
            com CSS personalizado ou sobrescrevendo nossas variáveis padrão.
            Vale também destacar que qualquer HTML pode ser inserido dentro do{' '}
            <code>.accordion-body</code>, embora a transição limite o estouro.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem eventKey="2">
          <AccordionHeader id="CustomIconheadingThree">
            Item do Acordeão com ícones solares duotônicos
            <IconifyIcon
              icon="solar:add-square-bold-duotone"
              className="accordion-icon text-secondary accordion-icon-on fs-24 me-n2"
            />
            <IconifyIcon
              icon="solar:minus-square-bold-duotone"
              className="accordion-icon text-danger accordion-icon-off fs-24 me-n2"
            />
          </AccordionHeader>
          <AccordionBody>
            <strong>Este é o corpo do acordeão do terceiro item.</strong> Ele é
            oculto por padrão, até que o plugin de colapso adicione as classes
            apropriadas que usamos para estilizar cada elemento. Essas classes
            controlam a aparência geral, assim como a exibição e o ocultamento
            via transições CSS. Você pode modificar qualquer um desses elementos
            com CSS personalizado ou sobrescrevendo nossas variáveis padrão.
            Vale também destacar que qualquer HTML pode ser inserido dentro do{' '}
            <code>.accordion-body</code>, embora a transição limite o estouro.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </ComponentContainerCard>
  );
};

const AlwaysOpenAccordions = () => {
  return (
    <ComponentContainerCard
      title="Acordeões Sempre Abertos"
      description={
        <>
          Oculte o atributo <code>data-bs-parent</code> em cada{' '}
          <code>.accordion-collapse</code> para manter os itens do acordeão
          abertos quando outro item for aberto.
        </>
      }
    >
      <Accordion
        alwaysOpen
        defaultActiveKey={['0']}
        id="accordionPanelsStayOpenExample"
      >
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader id="panelsStayOpen-headingOne">
              Item do Acordeão #{item}
            </AccordionHeader>
            <AccordionBody>
              <strong>Este é o corpo do acordeão do item {item}.</strong> Ele é
              mostrado por padrão, até que o plugin de colapso adicione as
              classes apropriadas que usamos para estilizar cada elemento. Essas
              classes controlam a aparência geral, assim como a exibição e o
              ocultamento via transições CSS. Você pode modificar qualquer um
              desses elementos com CSS personalizado ou sobrescrevendo nossas
              variáveis padrão. Vale também destacar que qualquer HTML pode ser
              inserido dentro do <code>.accordion-body</code>, embora a
              transição limite o estouro.
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentContainerCard>
  );
};

const AccordionWithoutArrow = () => {
  return (
    <ComponentContainerCard
      title="Acordeão Sem Setas"
      description={
        <>
          {' '}
          Usando o componente de cartão, você pode estender o comportamento de
          colapso padrão para criar um acordeão. Para alcançar o estilo de
          acordeão de forma adequada, certifique-se de usar{' '}
          <code>.accordion</code> como contêiner.
        </>
      }
    >
      <Accordion
        defaultActiveKey={'0'}
        className="accordion-arrow-none"
        id="withoutarrowaccordionExample"
      >
        {accordionData.map((item, idx) => (
          <AccordionItem eventKey={`${idx}`} key={idx}>
            <AccordionHeader as={'h2'} id="withoutarrowheadingOne">
              Item do Acordeão #{item}
            </AccordionHeader>
            <AccordionBody>
              <strong>Este é o corpo do acordeão do item {item}.</strong> Ele é
              mostrado por padrão, até que o plugin de colapso adicione as
              classes apropriadas que usamos para estilizar cada elemento. Essas
              classes controlam a aparência geral, assim como a exibição e o
              ocultamento via transições CSS. Você pode modificar qualquer um
              desses elementos com CSS personalizado ou sobrescrevendo nossas
              variáveis padrão. Vale também destacar que qualquer HTML pode ser
              inserido dentro do <code>.accordion-body</code>, embora a
              transição limite o estouro.
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </ComponentContainerCard>
  );
};

const AccordionsPage = () => {
  return (
    <>
      <PageBreadcrumb title="Acordeões" />
      <Row>
        <Col xl={6}>
          <DefaultAccordions />
        </Col>
        <Col xl={6}>
          <FlushAccordions />
        </Col>
        <Col xl={6}>
          <BorderedAccordions />
        </Col>
        <Col xl={6}>
          <CustomIconAccordion />
        </Col>
        <Col xl={6}>
          <AlwaysOpenAccordions />
        </Col>
        <Col xl={6}>
          <AccordionWithoutArrow />
        </Col>
      </Row>
    </>
  );
};
export default AccordionsPage;
