import small1 from '@/assets/images/small/small-1.jpg';
import small2 from '@/assets/images/small/small-2.jpg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const BackgroundColor = () => {
  return (
    <ComponentContainerCard
      title="Cor de fundo"
      description={
        <>
          Semelhante às classes de cores de texto contextuais, defina o plano de
          fundo de um elemento para qualquer classe contextual. Fundo
          utilitários{' '}
          <strong>
            não definem <code>cor</code>
          </strong>
          , então, em alguns casos, você deseja usar utilitários de cores{' '}
          <code>.text-*</code>.
        </>
      }
    >
      <div className="bg-primary text-white p-2 mb-2">.bg-primary</div>
      <div className="bg-secondary text-white p-2 mb-2">.bg-secondary</div>
      <div className="bg-success text-white p-2 mb-2">.bg-success</div>
      <div className="bg-danger text-white p-2 mb-2">.bg-danger</div>
      <div className="bg-warning text-dark p-2 mb-2">.bg-warning</div>
      <div className="bg-info text-dark p-2 mb-2">.bg-info</div>
      <div className="bg-light text-dark p-2 mb-2">.bg-light</div>
      <div className="bg-dark p-2 mb-2">.bg-dark</div>
      <div className="bg-body text-dark p-2 mb-2">.bg-body</div>
      <div className="bg-body-secondary text-dark p-2 mb-2">
        .bg-body-secondary
      </div>
      <div className="bg-body-tertiary text-dark p-2 mb-2">
        .bg-body-tertiary
      </div>
      <div className="bg-white p-2 mb-2">.bg-white</div>
      <div className="bg-black text-white p-2 mb-2">.bg-black</div>
      <div className="bg-transparent text-dark p-2">.bg-transparent</div>
    </ComponentContainerCard>
  );
};
const BackgroundGradientColor = () => {
  return (
    <ComponentContainerCard
      title="Cor de fundo com degradê"
      description={
        <>
          Ao adicionar uma classe <code>.bg-gradient</code>, um gradiente linear
          é adicionado como imagem de fundo aos planos de fundo. Esse o
          gradiente começa com um branco semitransparente que desaparece na
          parte inferior.
        </>
      }
    >
      <div className="p-2 mb-2 bg-primary bg-gradient text-white">
        .bg-gradient.bg-primary
      </div>
      <div className="p-2 mb-2 bg-secondary bg-gradient text-white">
        .bg-secondary.bg-gradient
      </div>
      <div className="p-2 mb-2 bg-success bg-gradient text-white">
        .bg-success.bg-gradient
      </div>
      <div className="p-2 mb-2 bg-danger bg-gradient text-white">
        .bg-danger.bg-gradient
      </div>
      <div className="p-2 mb-2 bg-warning bg-gradient text-dark">
        .bg-warning.bg-gradient
      </div>
      <div className="p-2 mb-2 bg-info bg-gradient text-dark">
        .bg-info.bg-gradient
      </div>
      <div className="p-2 mb-2 bg-light bg-gradient text-dark">
        .bg-light.bg-gradient
      </div>
      <div className="p-2 mb-2 bg-dark bg-gradient text-white">
        .bg-dark.bg-gradient
      </div>
      <div className="p-2 mb-2 bg-black bg-gradient text-white">
        .bg-black.bg-gradient
      </div>
    </ComponentContainerCard>
  );
};
const SoftBackground = () => {
  return (
    <ComponentContainerCard
      title="Fundo suave"
      description={
        <>
          Semelhante às classes de cores de texto contextuais, defina o plano de
          fundo de um elemento para qualquer classe contextual. Utilitários em
          segundo plano não são definidos
          <code>color</code>, então em alguns casos você vai querer usar{' '}
          <code>.text-*</code>{' '}
          <a href="https://getbootstrap.com/docs/5.3/utilities/colors/">
            utilitários de cores
          </a>
          .
        </>
      }
    >
      <Row>
        <Col xs={12}>
          <div className="d-flex flex-column gap-2">
            <div className="bg-primary-subtle p-2">
              <code className="text-primary-emphasis">.bg-primary-subtle</code>
            </div>
            <div className="bg-secondary-subtle p-2">
              <code className="text-secondary-emphasis">
                .bg-secondary-subtle{' '}
              </code>
            </div>
            <div className="bg-success-subtle p-2">
              <code className="text-success-emphasis">.bg-success-subtle</code>
            </div>
            <div className="bg-danger-subtle p-2">
              <code className="text-danger-emphasis">.bg-danger-subtle</code>
            </div>
            <div className="bg-warning-subtle p-2">
              <code className="text-warning-emphasis">.bg-warning-subtle</code>
            </div>
            <div className="bg-info-subtle p-2">
              <code className="text-info-emphasis">.bg-info-subtle</code>
            </div>
            <div className="bg-light-subtle p-2">
              <code className="text-light-emphasis">.bg-light-subtle</code>
            </div>
            <div className="bg-dark-subtle p-2">
              <code className="text-dark-emphasis">.bg-dark-subtle</code>
            </div>
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};
const BackgroundAndColor = () => {
  return (
    <ComponentContainerCard
      title="Cor de &amp; Fundo"
      description={
        <>
          Ajudantes de cor e fundo combinam o poder do nosso Utilitários{' '}
          <code>.text-*</code> e utilitários <code>.bg-*</code> em uma classe.
          Usando nossa função Sass <code>color-contrast()</code>, determinamos
          automaticamente um
          <code>cor</code> contrastante para uma <code>cor de fundo</code>{' '}
          específica.
        </>
      }
    >
      <div className="d-flex flex-column gap-2">
        <div className="text-bg-primary p-2">
          Primário com cor contrastante (.text-bg-primary)
        </div>
        <div className="text-bg-secondary p-2">
          Secundário com cor contrastante (.text-bg-secondary)
        </div>
        <div className="text-bg-success p-2">
          Sucesso com cores contrastantes (.text-bg-success)
        </div>
        <div className="text-bg-danger p-2">
          Perigo com cor contrastante (.text-bg-danger)
        </div>
        <div className="text-bg-warning p-2">
          Aviso com cor contrastante (.text-bg-warning)
        </div>
        <div className="text-bg-info p-2">
          Informações com cores contrastantes (.text-bg-info)
        </div>
        <div className="text-bg-light p-2">
          Luz com cor contrastante (.text-bg-light)
        </div>
        <div className="text-bg-dark p-2">
          Escuro com cor contrastante (.text-bg-dark)
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const ColoredLinks = () => {
  return (
    <ComponentContainerCard
      title="Links coloridos"
      description={
        <>
          Você pode usar as classes <code>.link-*</code> para colorir links. Ao
          contrário das classes <code>.text-*</code>, essas classes têm um
          Estado <code>:hover</code> e <code>:focus</code>.
        </>
      }
    >
      <div className="d-flex flex-column gap-2">
        <Link to="" className="link-primary">
          Link Primário
        </Link>
        <Link to="" className="link-secondary">
          Link Secundário
        </Link>
        <Link to="" className="link-success">
          Link de Sucesso
        </Link>
        <Link to="" className="link-danger">
          Link de Perigo
        </Link>
        <Link to="" className="link-warning">
          Lingo de Alerta
        </Link>
        <Link to="" className="link-info">
          Link de Informação
        </Link>
        <Link to="" className="link-light">
          Link Claro
        </Link>
        <Link to="" className="link-dark">
          Link Escuro
        </Link>
      </div>
    </ComponentContainerCard>
  );
};
const BackgroundOpacity = () => {
  return (
    <ComponentContainerCard
      title="Background Opacity"
      description={
        <>
          Utilitários <code>background-color</code> são gerados com Sass usando
          variáveis ​​CSS. Esse permite mudanças de cores em tempo real sem
          compilação e alfa dinâmico mudanças de transparência.
        </>
      }
    >
      <div className="bg-primary p-2 text-white">
        Este é o plano de fundo primário padrão
      </div>
      <div className="bg-primary p-2 text-white bg-opacity-75">
        Isso é 75% de opacidade primária fundo
      </div>
      <div className="bg-primary p-2 text-dark bg-opacity-50">
        Este é o fundo primário com 50% de opacidade
      </div>
      <div className="bg-primary p-2 text-dark bg-opacity-25">
        Este é o fundo primário com 25% de opacidade
      </div>
      <div className="bg-primary p-2 text-dark bg-opacity-10">
        Este é um fundo de sucesso com 10% de opacidade
      </div>
    </ComponentContainerCard>
  );
};
const TextColor = () => {
  return (
    <ComponentContainerCard
      title="Cor de Texto"
      description={
        <>
          Colorir texto com utilitários de cores. Se você quiser colorir links,
          você pode usar as classes auxiliares <code>.link-*</code> que possuem{' '}
          <code>:hover</code>&nbsp; e estados <code>:focus</code>.
        </>
      }
    >
      <Row>
        <Col md={6}>
          <p className="text-primary">.text-primary</p>
          <p className="text-primary-emphasis">.text-primary-emphasis</p>
          <p className="text-secondary">.text-secondary</p>
          <p className="text-secondary-emphasis">.text-secondary-emphasis</p>
          <p className="text-success">.text-success</p>
          <p className="text-success-emphasis">.text-success-emphasis</p>
          <p className="text-danger">.text-danger</p>
          <p className="text-danger-emphasis">.text-danger-emphasis</p>
          <p className="text-warning">.text-warning</p>
          <p className="text-warning-emphasis">.text-warning-emphasis</p>
          <p className="text-info">.text-info</p>
          <p className="text-info-emphasis">.text-info-emphasis</p>
          <p className="text-light bg-dark">.text-light</p>
          <p className="text-light-emphasis">.text-light-emphasis</p>
        </Col>
        <Col md={6}>
          <p className="text-dark">.text-dark</p>
          <p className="text-dark-emphasis">.text-dark-emphasis</p>
          <p className="text-muted">.text-muted</p>
          <p className="text-body">.text-body</p>
          <p className="text-body-emphasis">.text-body-emphasis</p>
          <p className="text-body-secondary">.text-body-secondary</p>
          <p className="text-body-tertiary">.text-body-tertiary</p>
          <p className="text-black">.text-black</p>
          <p className="text-white bg-dark">.text-white</p>
          <p className="text-black-50">.text-black-50</p>
          <p className="text-white-50 bg-dark">.text-white-50</p>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};
const TextOpacityColor = () => {
  return (
    <ComponentContainerCard
      title="Cor da opacidade do texto"
      description={
        <>
          utilitários de cores de texto são gerados com Sass usando variáveis
          ​​CSS. Isso permite cores em tempo real alterações sem compilação e
          alterações dinâmicas de transparência alfa.
        </>
      }
    >
      <div className="text-primary">Este é o texto principal padrão</div>
      <div className="text-primary text-opacity-75">
        Este é um texto primário com 75% de opacidade
      </div>
      <div className="text-primary text-opacity-50">
        Este é um texto primário com 50% de opacidade
      </div>
      <div className="text-primary text-opacity-25">
        Este é um texto primário com 25% de opacidade
      </div>
    </ComponentContainerCard>
  );
};
const Opacity = () => {
  return (
    <ComponentContainerCard
      title="Opacidade"
      description={
        <>
          A propriedade <code>opacity</code> define o nível de opacidade para um
          elemento. O nível de opacidade descreve a transparência nível, onde{' '}
          <code>1</code> não é transparente, <code>.5</code> é 50% visível e{' '}
          <code>0</code> é completamente transparente. Defina a{' '}
          <code>opacidade</code> de um elemento usando
          <code>
            .opacity-{'{'}value{'}'}
          </code>{' '}
          utilitários.
        </>
      }
    >
      <div className="d-flex flex-wrap gap-2">
        <div className="opacity-100 p-2 bg-primary text-light fw-bold rounded">
          100%
        </div>
        <div className="opacity-75 p-2 bg-primary text-light fw-bold rounded">
          75%
        </div>
        <div className="opacity-50 p-2 bg-primary text-light fw-bold rounded">
          50%
        </div>
        <div className="opacity-25 p-2 bg-primary text-light fw-bold rounded">
          25%
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const AdditiveBorder = () => {
  return (
    <ComponentContainerCard
      title="Borda Aditiva (Adicionar)"
      description={
        <>
          Use utilitários de borda para <b>adicionar</b> as bordas de um
          elemento. Escolher de todas as fronteiras ou uma de cada vez.
        </>
      }
    >
      <div className="d-flex align-items-start flex-wrap gap-4">
        <div className="text-center">
          <div className="border avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-top avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-end avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-bottom avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border-start avatar-md bg-light bg-opacity-50" />
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const SubtractiveBorder = () => {
  return (
    <ComponentContainerCard
      title="Borda subtrativa (remover)"
      description={
        <>
          Use utilitários de borda para <b>remover</b> as bordas de um elemento.
          Escolher de todas as fronteiras ou uma de cada vez.
        </>
      }
    >
      <div className="d-flex align-items-start flex-wrap gap-4">
        <div className="text-center">
          <div className="border border-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-top-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-end-0 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-bottom-0 avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-start-0 avatar-md bg-light bg-opacity-50"></div>
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const BorderColor = () => {
  return (
    <ComponentContainerCard
      title="Cor da borda"
      description={
        <>
          Altere a cor da borda usando utilitários criados com base nas cores do
          nosso tema.
        </>
      }
    >
      <div className="d-flex align-items-start flex-wrap gap-2">
        <div className="text-center">
          <div className="border border-primary avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-secondary avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-success avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-danger avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-warning avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-info avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-light avatar-md" />
        </div>
        <div className="text-center">
          <div className="border border-dark avatar-md bg-light bg-opacity-50" />
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const BorderWidthSize = () => {
  return (
    <ComponentContainerCard
      title="Tamanho da largura da borda"
      description={<></>}
    >
      <div className="d-flex align-items-start flex-wrap gap-2">
        <div className="text-center">
          <div className="border border-1 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-2 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-3 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-4 avatar-md bg-light bg-opacity-50" />
        </div>
        <div className="text-center">
          <div className="border border-5 avatar-md bg-light bg-opacity-50" />
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const BorderOpacity = () => {
  return (
    <ComponentContainerCard
      title="Opacidade da borda"
      description={
        <>
          escolha qualquer um dos utilitários <code>.border-opacity</code>:
        </>
      }
    >
      <div className="border border-success p-2 mb-2">
        Esta é a borda de sucesso padrão
      </div>
      <div className="border border-success p-2 mb-2 border-opacity-75">
        Isso é 75% borda de sucesso de opacidade
      </div>
      <div className="border border-success p-2 mb-2 border-opacity-50">
        Isso é 50% borda de sucesso de opacidade
      </div>
      <div className="border border-success p-2 mb-2 border-opacity-25">
        Isso é 25% borda de sucesso de opacidade
      </div>
      <div className="border border-success p-2 border-opacity-10">
        Isso é 10% de opacidade fronteira de sucesso
      </div>
    </ComponentContainerCard>
  );
};
const BorderSubtleColor = () => {
  return (
    <ComponentContainerCard
      title="Cor sutil da borda"
      description={
        <>
          Altere a cor da borda usando utilitários criados com base nas cores do
          nosso tema.
        </>
      }
    >
      <div className="d-flex align-items-start flex-wrap gap-2">
        <div className="text-center">
          <div className="border border-primary-subtle avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-secondary-subtle avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-success-subtle avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-danger-subtle avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-warning-subtle avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-info-subtle avatar-md bg-light bg-opacity-50"></div>
        </div>
        <div className="text-center">
          <div className="border border-light-subtle avatar-md" />
        </div>
        <div className="text-center">
          <div className="border border-dark-subtle avatar-md bg-light bg-opacity-50"></div>
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const BorderRadius = () => {
  return (
    <ComponentContainerCard
      title="Border Radius"
      description={
        <>
          Adicione classes a um elemento para arredondar facilmente seus cantos.
        </>
      }
    >
      <div className="d-flex align-items-start flex-wrap gap-2">
        <img src={avatar2} className="avatar-lg rounded" alt="rounded" />
        <img
          src={avatar2}
          className="avatar-lg rounded-top"
          alt="rounded-top"
        />
        <img
          src={avatar2}
          className="avatar-lg rounded-end"
          alt="rounded-end"
        />
        <img
          src={avatar2}
          className="avatar-lg rounded-bottom"
          alt="rounded-bottom"
        />
        <img
          src={avatar2}
          className="avatar-lg rounded-start"
          alt="rounded-start"
        />
        <img
          src={avatar2}
          className="avatar-lg rounded-circle"
          alt="rounded-circle"
        />
        <img
          src={small2}
          className="avatar-lg w-auto rounded-pill"
          alt="rounded-pill"
        />
      </div>
    </ComponentContainerCard>
  );
};
const BorderRadiusSize = () => {
  return (
    <ComponentContainerCard
      title="Tamanho do arredondamento das bordas"
      description={
        <>
          Use as classes de escala para cantos arredondados maiores ou menores.
          Os tamanhos variam de <code>0</code> a <code>5</code>.
        </>
      }
    >
      <div className="d-flex align-items-start flex-wrap gap-2">
        <img src={avatar4} className="avatar-lg rounded-0" alt="rounded-0" />
        <img src={avatar4} className="avatar-lg rounded-1" alt="rounded-1" />
        <img src={avatar4} className="avatar-lg rounded-2" alt="rounded-2" />
        <img src={avatar4} className="avatar-lg rounded-3" alt="rounded-3" />
        <img src={avatar4} className="avatar-lg rounded-4" alt="rounded-4" />
        <img src={avatar4} className="avatar-lg rounded-5" alt="rounded-5" />
      </div>
    </ComponentContainerCard>
  );
};
const TextSelection = () => {
  return (
    <ComponentContainerCard
      title="Seleção de Texto"
      description={
        <>
          Use <code>user-select-all</code>, <code>user-select-auto</code>, ou
          classe <code>user-select-none</code> para o conteúdo que é selecionado
          quando o usuário interage com ele.
        </>
      }
    >
      <p className="user-select-all">
        Este parágrafo será totalmente selecionado quando clicado pelo usuário.
      </p>
      <p className="user-select-auto">
        Este parágrafo tem comportamento de seleção padrão.
      </p>
      <p className="user-select-none mb-0">
        Este parágrafo não poderá ser selecionado quando clicado pelo usuário.
      </p>
    </ComponentContainerCard>
  );
};
const PointerEvents = () => {
  return (
    <ComponentContainerCard
      title="Eventos de ponteiro"
      description={
        <>
          Bootstrap fornece <code>.pe-none</code> e <code>.pe-auto</code>
          classes para evitar ou adicionar interações de elementos.
        </>
      }
    >
      <p>
        <Link to="" className="pe-none" tabIndex={-1} aria-disabled="true">
          Esse link
        </Link>
        não pode ser clicado
      </p>
      <p>
        <Link to="" className="pe-auto">
          Esse link
        </Link>{' '}
        pode ser clicado (este é o comportamento padrão).
      </p>
      <p className="pe-none">
        <Link to="" tabIndex={-1} aria-disabled="true">
          Esse link
        </Link>
        não pode ser clicado porque o
        A propriedade <code>pointer-events</code> é herdada de seu pai.
        No entanto,
        <Link to="" className="pe-auto">
          Esse link
        </Link>{' '}
        possui uma classe <code>pe-auto</code> e pode ser clicada.
      </p>
    </ComponentContainerCard>
  );
};
const Overflow = () => {
  return (
    <ComponentContainerCard
      title="Overflow"
      description={
        <>
          Ajuste a propriedade <code>overflow</code> rapidamente com quatro padrões
          valores e classes. Essas classes não respondem por padrão.
        </>
      }
    >
      <div className="d-flex flex-wrap gap-4">
        <div
          className="overflow-auto p-3 bg-light"
          style={{
            maxWidth: 260,
            maxHeight: 100,
          }}
        >
          Este é um exemplo de uso de <code>.overflow-auto</code> em um elemento
          com dimensões definidas de largura e altura. Por design, este conteúdo será
          rolar verticalmente.
        </div>
        <div
          className="overflow-hidden p-3 bg-light"
          style={{
            maxWidth: 260,
            maxHeight: 100,
          }}
        >
          Este é um exemplo de uso de <code>.overflow-hidden</code> em um
          elemento com dimensões definidas de largura e altura.
        </div>
        <div
          className="overflow-visible p-3 bg-light"
          style={{
            maxWidth: 260,
            maxHeight: 100,
          }}
        >
          Este é um exemplo de uso de <code>.overflow-visible</code> em um
          elemento com dimensões definidas de largura e altura.
        </div>
        <div
          className="overflow-scroll p-3 bg-light"
          style={{
            maxWidth: 260,
            maxHeight: 100,
          }}
        >
          Este é um exemplo de uso de <code>.overflow-scroll</code> em um
          elemento com dimensões definidas de largura e altura.
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const PositionInArrange = () => {
  return (
    <ComponentContainerCard
      title="Position in Arrange"
      description={
        <>
         Organize elementos facilmente com os utilitários de posicionamento de bordas. O
          o formato é{' '}
          <code>
            {'{'}propriedade{'}'}-{'{'}posição{'}'}
          </code>
          .
        </>
      }
    >
      <div
        className="position-relative p-5 bg-light bg-opacity-50 m-3 border rounded"
        style={{
          height: 180,
        }}
      >
        <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded" />
        <div className="position-absolute top-50 start-50 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-50 end-50 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
      </div>
    </ComponentContainerCard>
  );
};
const PositionCenter = () => {
  return (
    <ComponentContainerCard
      title="Posição no centro"
      description={
        <>
          Além disso, você também pode centralizar os elementos com a transformação
          classe de utilitário <code>.translate-middle</code>.
        </>
      }
    >
      <div
        className="position-relative m-3 bg-light bg-opacity-50 border rounded"
        style={{
          height: 180,
        }}
      >
        <div className="position-absolute top-0 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 start-100 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-100 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-0 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-100 start-100 translate-middle avatar-xs bg-dark rounded"></div>
      </div>
    </ComponentContainerCard>
  );
};
const PositionAxis = () => {
  return (
    <ComponentContainerCard
      title="Posição no Eixo"
      description={
        <>
          Adicionando <code>.translate-middle-x</code> ou
          Classes <code>.translate-middle-y</code>, os elementos podem ser posicionados
          apenas na direção horizontal ou vertical.
        </>
      }
    >
      <div
        className="position-relative m-3 bg-light border rounded"
        style={{
          height: 180,
        }}
      >
        <div className="position-absolute top-0 start-0 avatar-xs bg-dark rounded "></div>
        <div className="position-absolute top-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-0 end-0 avatar-xs bg-dark rounded" />
        <div className="position-absolute top-50 start-0 translate-middle-y avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 start-50 translate-middle avatar-xs bg-dark rounded"></div>
        <div className="position-absolute top-50 end-0 translate-middle-y avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 start-0 avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x avatar-xs bg-dark rounded"></div>
        <div className="position-absolute bottom-0 end-0 avatar-xs bg-dark rounded"></div>
      </div>
    </ComponentContainerCard>
  );
};
const Shadows = () => {
  return (
    <ComponentContainerCard
      title="Shadows"
      description={
        <>
          Embora as sombras nos componentes estejam desabilitadas por padrão no Bootstrap e
          pode ser habilitado através
          <code>$enable-shadows</code>, você também pode adicionar ou remover rapidamente um
          sombra com o nosso
          Classes utilitárias <code>box-shadow</code>. Inclui suporte para{' '}
          <code>.shadow-none</code> e três tamanhos padrão (que têm
          variáveis ​​associadas para corresponder).
        </>
      }
    >
      <div className="shadow-none p-2 mb-2 bg-light rounded">Sem sombra</div>
      <div className="shadow-sm p-2 mb-2 rounded">Sombra pequena</div>
      <div className="shadow p-2 mb-2 rounded">Sombra normal</div>
      <div className="shadow-lg p-2 mb-2 rounded">Sombra grande</div>
    </ComponentContainerCard>
  );
};
const Width = () => {
  return (
    <ComponentContainerCard
      title="Largura"
      description={
        <>
          Os utilitários de largura são gerados a partir da API do utilitário em
          <code>_utilities.scss</code>. Inclui suporte para
          <code>25%</code>, <code>50%</code>, <code>75%</code>,{' '}
          <code>100%</code> e
          <code>auto</code> por padrão. Modifique esses valores conforme necessário
          gerar diferentes utilidades aqui.
        </>
      }
    >
      <div className="w-25 p-2 bg-light">Largura 25%</div>
      <div className="w-50 p-2 bg-light">Largura 50%</div>
      <div className="w-75 p-2 bg-light">Largura 75%</div>
      <div className="w-100 p-2 bg-light">Largura 100%</div>
      <div className="w-auto p-2 bg-light">Largura auto</div>
    </ComponentContainerCard>
  );
};
const Height = () => {
  return (
    <ComponentContainerCard
      title="Altura"
      description={
        <>
          Os utilitários de altura são gerados a partir da API do utilitário em
          <code>_utilities.scss</code>. Inclui suporte para
          <code>25%</code>, <code>50%</code>, <code>75%</code>,{' '}
          <code>100%</code> e
          <code>auto</code> por padrão. Modifique esses valores conforme necessário
          gerar diferentes utilidades aqui.
        </>
      }
    >
      <div
        className="d-flex flex-wrap gap-3 align-items-start"
        style={{
          height: 255,
        }}
      >
        <div className="h-25 p-2 bg-light">Altura 25%</div>
        <div className="h-50 p-2 bg-light">Altura 50%</div>
        <div className="h-75 p-2 bg-light">Altura 75%</div>
        <div className="h-100 p-2 bg-light">Altura 100%</div>
        <div className="h-auto p-2 bg-light">Altura auto</div>
      </div>
    </ComponentContainerCard>
  );
};
const ObjectFit = () => {
  return (
    <ComponentContainerCard
      title="Ajuste ao objeto"
      description={
        <>
          Altere o valor de{' '}
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">
            <code>ajuste ao objeto</code>
            propriedade
          </a>{' '}
          com nossas classes utilitárias <code>object-fit</code> responsivas. Esse
          propriedade diz ao conteúdo para preencher o contêiner pai em uma variedade
          de maneiras, como preservar a proporção ou esticar para ocupar
          tanto espaço quanto possível.
        </>
      }
    >
      <div className="d-flex align-items-start flex-wrap gap-3 text-center">
        <div>
          <img
            src={small1}
            className="object-fit-contain border rounded avatar-xl"
            alt="..."
          />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-contain</code>
          </p>
        </div>
        <div>
          <img
            src={small1}
            className="object-fit-cover border rounded avatar-xl"
            alt="..."
          />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-cover</code>
          </p>
        </div>
        <div>
          <img
            src={small1}
            className="object-fit-fill border rounded avatar-xl"
            alt="..."
          />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-fill</code>
          </p>
        </div>
        <div>
          <img
            src={small1}
            className="object-fit-scale border rounded avatar-xl"
            alt="..."
          />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-scale</code>
          </p>
        </div>
        <div>
          <img
            src={small1}
            className="object-fit-none border rounded avatar-xl"
            alt="..."
          />
          <p className="mt-1 mb-0">
            <code className="user-select-all">.object-fit-none</code>
          </p>
        </div>
      </div>
    </ComponentContainerCard>
  );
};
const ZIndex = () => {
  return (
    <ComponentContainerCard
      title="Z-index"
      description={
        <>
          Use utilitários <code>z-index</code> para empilhar elementos em cima de um
          outro. Requer um valor de <code>posição</code> diferente de{' '}
          <code>estático</code>, que pode ser definido com estilos personalizados ou usando nosso{' '}
          <Link to="/docs/5.3/utilities/position/">utilitários de posição</Link>.
        </>
      }
    >
      <div
        className="position-relative"
        style={{
          height: 220,
          zIndex: 1,
        }}
      >
        <div className="z-3 position-absolute p-5 rounded-3 bg-primary-subtle" />
        <div className="z-2 position-absolute p-5 m-2 rounded-3 bg-success-subtle"></div>
        <div className="z-1 position-absolute p-5 m-3 rounded-3 bg-secondary-subtle"></div>
        <div className="z-0 position-absolute p-5 m-4 rounded-3 bg-danger-subtle" />
        <div className="z-n1 position-absolute p-5 m-5 rounded-3 bg-info-subtle" />
      </div>
    </ComponentContainerCard>
  );
};
const Utilities = () => {
  return (
    <>
      <PageBreadcrumb title="Utilidades" />
      <Row>
        <Col xl={6}>
          <BackgroundColor />
        </Col>
        <Col xl={6}>
          <BackgroundGradientColor />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <SoftBackground />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <BackgroundAndColor />
        </Col>
        <Col xl={6}>
          <ColoredLinks />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <BackgroundOpacity />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <TextColor />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <TextOpacityColor />
        </Col>
        <Col xl={6}>
          <Opacity />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <AdditiveBorder />
        </Col>
        <Col xl={6}>
          <SubtractiveBorder />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <BorderColor />
          <BorderWidthSize />
        </Col>
        <Col xl={6}>
          <BorderOpacity />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <BorderSubtleColor />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <BorderRadius />
        </Col>
        <Col xl={6}>
          <BorderRadiusSize />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <TextSelection />
        </Col>
        <Col xl={6}>
          <PointerEvents />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <Overflow />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <PositionInArrange />
        </Col>
        <Col xl={6}>
          <PositionCenter />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <PositionAxis />
        </Col>
        <Col xl={6}>
          <Shadows />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Width />
        </Col>
        <Col xl={6}>
          <Height />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <ObjectFit />
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <ZIndex />
        </Col>
      </Row>
    </>
  );
};
export default Utilities;
