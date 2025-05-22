import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Row } from 'react-bootstrap';

// 

const Typography = () => {
  return <>
      <PageBreadcrumb title='Tipografia' />
      <div>
        <Row>
          <Col xs={12}>
            <ComponentContainerCard title='Exibir títulos' description={<>Os elementos de cabeçalho tradicionais são projetados para funcionar melhor em carnes
              do conteúdo da sua página. Quando você precisar que um título se destaque, considere usar um display
              título – um estilo de título maior e um pouco mais opinativo.</>}>
              <h1 className="display-1">Display 1</h1>
              <p className="text-muted">Suspendisse vel quam malesuada, aliquet sem sit
                amet, fringilla elit. Morbi
                tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien
                nec,
                varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros
                hendrerit
                est consequat posuere et at velit.</p>
              <div className="clearfix" />
              <h1 className="display-2">Display 2</h1>
              <p className="text-muted">In nec rhoncus eros. Vestibulum eu mattis nisl.
                Quisque viverra viverra magna
                nec pulvinar. Maecenas pellentesque porta augue, consectetur
                facilisis diam
                porttitor sed. Suspendisse tempor est sodales augue rutrum
                tincidunt.
                Quisque a malesuada purus.</p>
              <div className="clearfix" />
              <h1 className="display-3">Display 3</h1>
              <p className="text-muted">Vestibulum auctor tincidunt semper. Phasellus ut
                vulputate lacus. Suspendisse
                ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl
                nisi,
                feugiat quis bibendum vitae, dapibus in tellus.</p>
              <div className="clearfix" />
              <h1 className="display-4">Display 4</h1>
              <p className="text-muted mb-0">Nulla et mattis nunc. Curabitur scelerisque
                commodo condimentum. Mauris
                blandit, velit a consectetur egestas, diam arcu fermentum justo,
                eget
                ultrices arcu eros vel erat.</p>
              <div className="clearfix" />
              <h1 className="display-5">Display 5</h1>
              <p className="text-muted mb-0">Nulla et mattis nunc. Curabitur scelerisque
                commodo condimentum. Mauris
                blandit, velit a consectetur egestas, diam arcu fermentum justo,
                eget.</p>
              <div className="clearfix" />
              <h1 className="display-6">Display 6</h1>
              <p className="text-muted mb-0">Nulla et mattis nunc. Curabitur scelerisque
                commodo condimentum. Mauris
                blandit, velit a consectetur egestas.</p>
            </ComponentContainerCard>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ComponentContainerCard title='Titulos' description={<>Todos os títulos HTML, <code>&lt;h1&gt;</code>&nbsp;até&nbsp;
              <code>&lt;h6&gt;</code>, estão disponíveis. <code>.h1</code> até <code>.h6</code>&nbsp;
              classes também estão disponíveis, para quando você deseja combinar o estilo da fonte de um título
              mas ainda deseja que seu texto seja exibido embutido.</>}>
              <h1>Este é um Título 1</h1>
              <p className="text-muted">Suspendisse vel quam malesuada, aliquet sem sit
                amet, fringilla elit. Morbi
                tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien
                nec,
                varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros
                hendrerit
                est consequat posuere et at velit.</p>
              <div className="clearfix" />
              <h2>Este é um Título 2</h2>
              <p className="text-muted">In nec rhoncus eros. Vestibulum eu mattis nisl.
                Quisque viverra viverra magna
                nec pulvinar. Maecenas pellentesque porta augue, consectetur
                facilisis diam
                porttitor sed. Suspendisse tempor est sodales augue rutrum
                tincidunt.
                Quisque a malesuada purus.</p>
              <div className="clearfix" />
              <h3>Este é um Título 3</h3>
              <p className="text-muted">Vestibulum auctor tincidunt semper. Phasellus ut
                vulputate lacus. Suspendisse
                ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl
                nisi,
                feugiat quis bibendum vitae, dapibus in tellus.</p>
              <div className="clearfix" />
              <h4>Este é um Título 4</h4>
              <p className="text-muted">Nulla et mattis nunc. Curabitur scelerisque
                commodo condimentum. Mauris
                blandit, velit a consectetur egestas, diam arcu fermentum justo,
                eget
                ultrices arcu eros vel erat.</p>
              <div className="clearfix" />
              <h5>Este é um Título 5</h5>
              <p className="text-muted">Quisque nec turpis at urna dictum luctus.
                Suspendisse convallis dignissim
                eros at volutpat. In egestas mattis dui. Aliquam mattis dictum
                aliquet.
                Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.
                Vivamus
                pretium nec odio cursus elementum. Suspendisse molestie ullamcorper
                ornare.</p>
              <div className="clearfix" />
              <h6>Este é um Título 6</h6>
              <p className="text-muted mb-0">Donec ultricies, lacus id tempor condimentum, orci
                leo faucibus sem, a
                molestie libero lectus ac justo. ultricies mi eros, sit amet tempor
                nulla
                varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in
                tellus.</p>
            </ComponentContainerCard>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ComponentContainerCard title='Elementos de texto embutidos' description={<>Estilo para elementos HTML5 embutidos comuns.</>}>
              <p className="lead">
                Seu título vai aqui
              </p>
              <p>Você pode usar a tag mark para <mark>destacar</mark> o texto.</p>
              <p><del>Esta linha de texto deve ser tratada como texto excluído.</del></p>
              <p><s>Esta linha de texto deve ser tratada como não sendo mais precisa.</s></p>
              <p><ins>Esta linha de texto deve ser tratada como um acréscimo ao
                documento.</ins></p>
              <p><u>Esta linha de texto será renderizada como sublinhada</u></p>
              <p><small>Esta linha de texto deve ser tratada como letras miúdas.</small></p>
              <p><strong>Esta linha é renderizada em negrito.</strong></p>
              <p><em>Esta linha é renderizada como texto em itálico.</em></p>
              Nulla <abbr title="attribute">attr</abbr> vitae elit libero, a pharetra augue.
            </ComponentContainerCard>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ComponentContainerCard title='Nomeando uma fonte' description={<>Uma citação conhecida, contida em um elemento blockquote.</>}>
              <figure>
                <blockquote className="blockquote">
                  <p>Uma citação conhecida, contida em um elemento blockquote.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Alguém famoso em <cite title="Source Title">Título da fonte</cite>
                </figcaption>
              </figure>
            </ComponentContainerCard>
          </Col>
        </Row>
        <Row>
          <Col xl={4}>
            <ComponentContainerCard title='Não ordenado' description={<>Uma lista de itens em que a ordem não importa explicitamente.</>}>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  Consectetur adipiscing elit
                </li>
                <li>
                  Integer molestie lorem at massa
                </li>
                <li>
                  Facilisis in pretium nisl aliquet
                </li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>
                      Phasellus iaculis neque
                    </li>
                    <li>
                      Purus sodales ultricies
                    </li>
                    <li>
                      Vestibulum laoreet porttitor sem
                    </li>
                    <li>
                      Ac tristique libero volutpat at
                    </li>
                  </ul>
                </li>
                <li>
                  Faucibus porta lacus fringilla vel
                </li>
                <li>
                  Aenean sit amet erat nunc
                </li>
                <li>
                  Eget porttitor lorem
                </li>
              </ul>
            </ComponentContainerCard>
          </Col>

          <Col xl={4}>
            <ComponentContainerCard title='Ordenado' description={<>Uma lista de itens em que a ordem importa explicitamente.</>}>
              <ol>
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  Consectetur adipiscing elit
                </li>
                <li>
                  Integer molestie lorem at massa
                </li>
                <li>
                  Facilisis in pretium nisl aliquet
                </li>
                <li>
                  Nulla volutpat aliquam velit
                  <ol>
                    <li>
                      Phasellus iaculis neque
                    </li>
                    <li>
                      Purus sodales ultricies
                    </li>
                    <li>
                      Vestibulum laoreet porttitor sem
                    </li>
                    <li>
                      Ac tristique libero volutpat at
                    </li>
                  </ol>
                </li>
                <li>
                  Faucibus porta lacus fringilla vel
                </li>
                <li>
                  Aenean sit amet erat nunc
                </li>
                <li>
                  Eget porttitor lorem
                </li>
              </ol>
            </ComponentContainerCard>
          </Col>
          <Col xl={4}>
            <ComponentContainerCard title='Sem estilo' description={<><strong>isso só se aplica a filhos imediatos
              itens da lista</strong>, o que significa que você precisará adicionar a classe para qualquer lista aninhada
              também.</>}>
              <ul className="list-unstyled">
                <li>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  Integer molestie lorem at massa
                  <ul>
                    <li>
                      Phasellus iaculis neque
                    </li>
                  </ul>
                </li>
                <li>
                  Faucibus porta lacus fringilla vel
                </li>
                <li>
                  Eget porttitor lorem
                </li>
              </ul>
              <h5>Inline</h5>
              <p className="text-muted m-b-15">
              Coloque todos os itens da lista em uma única linha com <code>
                  display: bloco embutido;</code>
                e algum preenchimento leve.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  Lorem ipsum
                </li>
                <li className="list-inline-item">
                  Phasellus iaculis
                </li>
                <li className="list-inline-item">
                  Nulla volutpat
                </li>
              </ul>
            </ComponentContainerCard>
          </Col>
        </Row>
      </div>
      <Row>
        <Col xl={4}>
          <ComponentContainerCard title='Abreviações' description={<>Add .initialism to an abbreviation for a slightly smaller
            font-size.</>}>
            <p><abbr title="attribute">attr</abbr></p>
            <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
          </ComponentContainerCard>
        </Col>
        <Col xl={4}>
          <ComponentContainerCard title='Alinhamento' description={<>Use utilitários de texto conforme necessário para alterar o alinhamento do seu
            citação em bloco.</>}>
            <figure className="text-center">
              <blockquote className="blockquote">
                <p>Uma citação conhecida, contida em um elemento blockquote.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                &nbsp;Someone famous in <cite title="Source Title">Título da fonte</cite>
              </figcaption>
            </figure>
            <figure className="text-end">
              <blockquote className="blockquote">
                <p>Uma citação conhecida, contida em um elemento blockquote.</p>
              </blockquote>
              <figcaption className="blockquote-footer">
                &nbsp;Someone famous in <cite title="Source Title">Título da fonte</cite>
              </figcaption>
            </figure>
          </ComponentContainerCard>
        </Col>
        <Col xl={4}>
          <ComponentContainerCard title='Em linha' description={<>Remova os marcadores de uma lista e aplique alguma margem clara com uma combinação de duas classes, .list-inline e .list-inline-item.</>}>
            <ul className="list-inline">
              <li className="list-inline-item">This is a list item.</li>
              <li className="list-inline-item">E mais uma</li>
              <li className="list-inline-item">Mas eles são exibidos em linha.</li>
            </ul>
          </ComponentContainerCard>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ComponentContainerCard title='Blockquotes' description={<>Para citar blocos de conteúdo de outra fonte dentro do seu
            documento. Coloque <code>&lt;blockquote class=&quot;blockquote&quot;&gt;</code> em torno de qualquer <abbr title="PacesText Markup Language">HTML</abbr> como citação.</>}>
            <blockquote className="blockquote">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante.</p>
            </blockquote>
            <figcaption className="blockquote-footer">Alguém famoso em <cite title="Source Title">Titulo de Busca</cite></figcaption>
            <p className="text-muted m-b-15">
              Use utilitários de texto conforme necessário para alterar o alinhamento da sua citação.
            </p>
            <blockquote className="blockquote text-center">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante.</p>
            </blockquote>
            <figcaption className="blockquote-footer text-center">Alguém famoso em <cite title="Source Title">Titulo de Busca</cite></figcaption>
            <blockquote className="blockquote text-end">
              <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer posuere erat a ante.</p>
            </blockquote>
            <figcaption className="blockquote-footer text-end">Alguém famoso em <cite title="Source Title">Titulo de Busca</cite></figcaption>
          </ComponentContainerCard>
        </Col>
        <Col xl={6}>
          <ComponentContainerCard title='Descrição Alinhamento da lista' description={<>Alinhe termos e descrições horizontalmente usando nossa grade
            classes predefinidas do sistema (ou mixins semânticos). Para prazos mais longos, você pode
            opcionalmente, adicione uma classe <code>.text-truncate</code> para truncar o texto com um
            reticências.</>}>
            <dl className="row mb-0">
            <dt className="col-sm-3">Listas de descrição</dt>
              <dd className="col-sm-9">Uma lista de descrições é perfeita para definir termos.</dd>
              <dt className="col-sm-3">Euismod</dt>
              <dd className="col-sm-9">
                <p>Vestibulum id ligula porta felis euismod sempre eget lacinia odio sem
                  ne elit.</p>
                <p>Donec id elit non mi porta gravida at eget metus.</p>
              </dd>
              <dt className="col-sm-3">Malesuada porta</dt>
              <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
              <dt className="col-sm-3 text-truncate">O termo truncado está truncado</dt>
              <dd className="col-sm-9">Fusce dapibus, Tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
              <dt className="col-sm-3">Aninhamento</dt>
              <dd className="col-sm-9">
                <dl className="linha mb-0">
                  <dt className="col-sm-4">Lista de definições aninhadas</dt>
                  <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc
                    agosto blandit nunc.</dd>
                </dl>
              </dd>
            </dl>
          </ComponentContainerCard>
        </Col>
      </Row>
    </>;
};
export default Typography;