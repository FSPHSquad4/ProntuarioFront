import ComponentContainerCard from '@/components/ComponentContainerCard';
import { colorVariants } from '@/context/constants';
import { Link } from 'react-router-dom';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const ColoredLinks = () => {
  return (
    <ComponentContainerCard
      title="Links coloridos"
      description={
        <>
          Você pode usar as classes <code>.link-*</code> para colorir links. Ao
          contrário das classes{' '}
          <Link to="/ui/utilities">
            <code>.text-*</code>
          </Link>
          , essas classes possuem estados <code>:hover</code> e{' '}
          <code>:focus</code>. Alguns estilos de link utilizam uma cor de
          primeiro plano relativamente clara e devem ser usados apenas em um
          fundo escuro para garantir contraste suficiente.
        </>
      }
    >
      {colorVariants.slice(0, 6).map((item, idx) => (
        <p key={idx}>
          <Link to="" className={`link-${item}`}>
            {item.charAt(0).toUpperCase() + item.slice(1)} link
          </Link>
        </p>
      ))}
      <p>
        <Link to="" className="link-light">
          Link claro
        </Link>
      </p>
      <p>
        <Link to="" className="link-dark">
          Link escuro
        </Link>
      </p>
      <p className="mb-0">
        <Link to="" className="link-body-emphasis">
          Link destacado
        </Link>
      </p>
    </ComponentContainerCard>
  );
};
const LinkUtilities = () => {
  return (
    <ComponentContainerCard
      title="Utilitários de link"
      description={
        <>
          <Link to="/ui/utilities">Auxiliares de link colorido</Link> foram
          atualizados para se combinar com nossos utilitários de link. Use os
          novos utilitários para modificar a opacidade do link, a opacidade do
          sublinhado e o deslocamento do sublinhado.
        </>
      }
    >
      {colorVariants.slice(0, 6).map((item, idx) => (
        <p key={idx}>
          <Link
            to=""
            className={`link-${item} text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)} link
          </Link>
        </p>
      ))}
      <p>
        <Link
          to=""
          className="link-light text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          Link claro
        </Link>
      </p>
      <p>
        <Link
          to=""
          className="link-dark text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
        >
          Link escuro
        </Link>
      </p>
      <p>
        <Link
          to=""
          className="link-body-emphasis text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
        >
          Link destacado
        </Link>
      </p>
    </ComponentContainerCard>
  );
};
const LinkOpacity = () => {
  return (
    <ComponentContainerCard
      title="Opacidade do link"
      description={
        <>
          Altere a opacidade alfa do valor da cor do link <code>rgba()</code>{' '}
          com utilitários. Esteja ciente de que alterações na opacidade da cor
          podem levar a links com contraste <em>insuficiente</em>.
        </>
      }
    >
      <p>
        <Link className="link-opacity-10" to="">
          Opacidade do link 10
        </Link>
      </p>
      <p>
        <Link className="link-opacity-25" to="">
          Opacidade do link 25
        </Link>
      </p>
      <p>
        <Link className="link-opacity-50" to="">
          Opacidade do link 50
        </Link>
      </p>
      <p>
        <Link className="link-opacity-75" to="">
          Opacidade do link 75
        </Link>
      </p>
      <p className="mb-0">
        <Link className="link-opacity-100" to="">
          Opacidade do link 100
        </Link>
      </p>
    </ComponentContainerCard>
  );
};
const LinkHoverOpacity = () => {
  return (
    <ComponentContainerCard
      title="Opacidade do link ao passar o mouse"
      description={
        <>Você também pode alterar o nível de opacidade ao passar o mouse.</>
      }
    >
      <p>
        <Link className="link-opacity-10-hover" to="">
          Opacidade ao passar 10
        </Link>
      </p>
      <p>
        <Link className="link-opacity-25-hover" to="">
          Opacidade ao passar 25
        </Link>
      </p>
      <p>
        <Link className="link-opacity-50-hover" to="">
          Opacidade ao passar 50
        </Link>
      </p>
      <p>
        <Link className="link-opacity-75-hover" to="">
          Opacidade ao passar 75
        </Link>
      </p>
      <p className="mb-0">
        <Link className="link-opacity-100-hover" to="">
          Opacidade ao passar 100
        </Link>
      </p>
    </ComponentContainerCard>
  );
};
const UnderlineColor = () => {
  return (
    <ComponentContainerCard
      title="Cor do sublinhado"
      description={
        <>
          Altere a cor do sublinhado independentemente da cor do texto do link.
        </>
      }
    >
      <p>
        <Link
          to=""
          className="text-decoration-underline link-underline-primary"
        >
          Sublinhado primário
        </Link>
      </p>
      <p>
        <Link
          to=""
          className="text-decoration-underline link-underline-secondary"
        >
          Sublinhado secundário
        </Link>
      </p>
      <p>
        <Link
          to=""
          className="text-decoration-underline link-underline-success"
        >
          Sublinhado de sucesso
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-danger">
          Sublinhado de erro
        </Link>
      </p>
      <p>
        <Link
          to=""
          className="text-decoration-underline link-underline-warning"
        >
          Sublinhado de aviso
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-info">
          Sublinhado informativo
        </Link>
      </p>
      <p>
        <Link to="" className="text-decoration-underline link-underline-light">
          Sublinhado claro
        </Link>
      </p>
      <p className="mb-0">
        <Link to="" className="text-decoration-underline link-underline-dark">
          Sublinhado escuro
        </Link>
      </p>
    </ComponentContainerCard>
  );
};
const UnderlineOpacity = () => {
  return (
    <ComponentContainerCard
      title="Opacidade do sublinhado"
      description={
        <>
          Altere a opacidade do sublinhado. É necessário adicionar{' '}
          <code>.link-underline</code> para primeiro definir uma cor{' '}
          <code>rgba()</code> que usamos para então modificar a opacidade alfa.
        </>
      }
    >
      <p>
        <Link
          className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0"
          to="#"
        >
          Opacidade do sublinhado 0
        </Link>
      </p>
      <p>
        <Link
          className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10"
          to="#"
        >
          Opacidade do sublinhado 10
        </Link>
      </p>
      <p>
        <Link
          className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25"
          to="#"
        >
          Opacidade do sublinhado 25
        </Link>
      </p>
      <p>
        <Link
          className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50"
          to="#"
        >
          Opacidade do sublinhado 50
        </Link>
      </p>
      <p>
        <Link
          className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75"
          to="#"
        >
          Opacidade do sublinhado 75
        </Link>
      </p>
      <p className="mb-0">
        <Link
          className="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100"
          to="#"
        >
          Opacidade do sublinhado 100
        </Link>
      </p>
    </ComponentContainerCard>
  );
};
const UnderlineOffset = () => {
  return (
    <ComponentContainerCard
      title="Deslocamento do sublinhado"
      description={
        <>
          Altere o deslocamento do sublinhado. É necessário adicionar{' '}
          <code>.link-underline</code> para primeiro definir uma cor{' '}
          <code>rgba()</code> que usamos para então modificar a opacidade alfa.
        </>
      }
    >
      <p>
        <Link to="">Link padrão</Link>
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-1" to="">
          Link com deslocamento 1
        </Link>
      </p>
      <p>
        <Link className="text-decoration-underline link-offset-2" to="">
          Link com deslocamento 2
        </Link>
      </p>
      <p className="mb-0">
        <Link className="text-decoration-underline link-offset-3" to="">
          Link com deslocamento 3
        </Link>
      </p>
    </ComponentContainerCard>
  );
};
const HoverVariants = () => {
  return (
    <ComponentContainerCard
      title="Variantes ao passar o mouse"
      description={
        <>
          Assim como os utilitários <code>.link-opacity-*-hover</code>, os
          utilitários <code>.link-offset</code> e{' '}
          <code>.link-underline-opacity</code> incluem variantes{' '}
          <code>:hover</code> por padrão. Combine para criar estilos de link
          exclusivos.
        </>
      }
    >
      <Link
        className="link-offset-2 link-offset-3-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        to=""
      >
        Opacidade do sublinhado 0
      </Link>
    </ComponentContainerCard>
  );
};
const Links = () => {
  return (
    <>
      <PageBreadcrumb title="Links" />
      <Row>
        <Col xl={6}>
          <ColoredLinks />
        </Col>
        <Col xl={6}>
          <LinkUtilities />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <LinkOpacity />
        </Col>
        <Col xl={6}>
          <LinkHoverOpacity />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <UnderlineColor />
        </Col>
        <Col xl={6}>
          <UnderlineOpacity />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <UnderlineOffset />
        </Col>
        <Col xl={6}>
          <HoverVariants />
        </Col>
      </Row>
    </>
  );
};
export default Links;
