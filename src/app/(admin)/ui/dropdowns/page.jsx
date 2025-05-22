import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { colorVariants } from '@/context/constants';
import { Col, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'react-bootstrap';

// 

const SingleButtonDropdowns = () => {
  return <ComponentContainerCard title='Menus suspensos de botão único' description={<>  Qualquer <code>.btn</code> único pode ser transformado em um menu suspenso
    alterne com algumas alterações de marcação. Veja como você pode colocá-los para funcionar
    com <code>&lt;button&gt;</code>&nbsp;
    elementos:</>}>
      <Row>
        <Col xs={'auto'}>
          <Dropdown>
            <DropdownToggle as={'button'} className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem>Ação</DropdownItem>
              <DropdownItem>Outra Ação</DropdownItem>
              <DropdownItem>Algo mais aqui</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col xs={'auto'}>
          <Dropdown>
            <DropdownToggle className="btn btn-secondary" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuLink">
              <DropdownItem>Ação</DropdownItem>
              <DropdownItem>Outra Ação</DropdownItem>
              <DropdownItem>Algo mais aqui</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const CustomDropdownArrow = () => {
  return <ComponentContainerCard title='Custom Dropdown Arrow' description={<>  Qualquer <code>.btn</code> único pode ser transformado em um menu suspenso
    alterne com algumas alterações de marcação. Veja como você pode colocá-los para funcionar
    com <code>&lt;button&gt;</code>
    elementos:</>}>
      <Row>
        <Col xs={'auto'}>
          <Dropdown>
            <DropdownToggle className="btn btn-primary dropdown-toggle drop-arrow-none" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sem flecha
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem>Ação</DropdownItem>
              <DropdownItem>Outra Ação</DropdownItem>
              <DropdownItem>Algo mais aqui</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col xs={'auto'}>
          <Dropdown>
            <DropdownToggle as={'button'} className="btn btn-outline-info dropdown-toggle drop-arrow-none" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ícone da tabela <IconifyIcon icon='tabler:chevron-down' className="align-middle ms-1" />
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem>Ação</DropdownItem>
              <DropdownItem>Outra Ação</DropdownItem>
              <DropdownItem>Algo mais aqui</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col xs={'auto'}>
          <Dropdown>
            <DropdownToggle className="btn btn-secondary bg-gradient dropdown-toggle drop-arrow-none" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Ícone Lúcido <IconifyIcon icon='lucide:square-chevron-down' className="avatar-xxs ms-2" />
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem>Ação</DropdownItem>
              <DropdownItem>Outra Ação</DropdownItem>
              <DropdownItem>Algo mais aqui</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col xs={'auto'}>
          <Dropdown>
            <DropdownToggle as={'button'} className="btn btn-soft-success dropdown-toggle drop-arrow-none" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Solar Icon <IconifyIcon icon="solar:album-bold-duotone" className="fs-20 ms-2" />
            </DropdownToggle>
            <DropdownMenu aria-labelledby="dropdownMenuButton">
              <DropdownItem>Ação</DropdownItem>
              <DropdownItem>Outra Ação</DropdownItem>
              <DropdownItem>Algo mais aqui</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const VariantDropdown = () => {
  return <ComponentContainerCard title='Variante' description={<>A melhor parte é que você também pode fazer isso com qualquer variante de botão:</>}>
      {colorVariants.slice(0, 6).map((item, idx) => {
      return <Dropdown className="btn-group mb-2" key={idx}>
              <DropdownToggle as={'button'} type="button" className={`btn btn-${item}`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item}</DropdownToggle> &nbsp;
              <DropdownMenu>
                <DropdownItem>Ação</DropdownItem>
                <DropdownItem>Outra Ação</DropdownItem>
                <DropdownItem>Algo mais aqui</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Link separado</DropdownItem>
              </DropdownMenu>
            </Dropdown>;
    })}
    </ComponentContainerCard>;
};
const DropupVariation = () => {
  return <ComponentContainerCard title='Dropup Variação' description={<>Menus suspensos do rigger acima dos elementos
    adicionando <code>.dropup</code> ao pai
    elemento.</>}>
      <Dropdown drop='up' className="btn-group dropup">
        <DropdownToggle type="button" className="btn btn-light" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropup</DropdownToggle> &nbsp;
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown drop='up' className="btn-group dropup">
        <button type="button" className="btn btn-light">
          Drop-up dividido
        </button>
        <DropdownToggle type="button" className="btn btn-light dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="visually-hidden">Alternar menu suspenso</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DropendVariation = () => {
  return <ComponentContainerCard title='Variação de dropend' description={<>Acione menus suspensos à direita dos elementos adicionando
      <code>.dropend</code> para o elemento pai.</>}>
      <Dropdown drop='end' className="btn-group mb-2 dropend">
        <DropdownToggle type="button" className="btn btn-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropend
        </DropdownToggle> &nbsp;
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown drop='end' className="btn-group mb-2 dropend">
        <button type="button" className="btn btn-primary">
          Split Dropend
        </button>
        <DropdownToggle type="button" className="btn btn-primary dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="visually-hidden">Toggle Dropright</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DisabledItem = () => {
  return <ComponentContainerCard title='Desabilitado' description={<>Adicione <code>.disabled</code> aos itens no menu suspenso para
      <strong>denomine-os como desativados</strong>.</>}>
      <Dropdown className="btn-group">
        <DropdownToggle type="button" className="btn btn-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Disabled
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem className="dropdown-item" href="#">Link normal</DropdownItem>
          <DropdownItem className="dropdown-item disabled" href="#" tabIndex={-1} aria-disabled="true">link Desabilitado</DropdownItem>
          <DropdownItem className="dropdown-item" href="#">Outro link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DarkDropdowns = () => {
  return <ComponentContainerCard title='Dark dropdowns' description={<>Opte por menus suspensos mais escuros para combinar com uma barra de navegação escura ou estilo personalizado
    adicionando <code>.dropdown-menu-dark</code> em um existente
    <code>.menu suspenso</code>. Nenhuma alteração é necessária nos itens suspensos.</>}>
      <Dropdown>
        <DropdownToggle className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </DropdownToggle>
        <DropdownMenu data-bs-theme="dark">
          <li><DropdownItem className="active" href="#">Ação</DropdownItem></li>
          <li><DropdownItem href="">Outra Ação</DropdownItem></li>
          <li><DropdownItem href="">Algo mais aqui</DropdownItem></li>
          <li>
            <DropdownDivider />
          </li>
          <li><DropdownItem href="">Link separado</DropdownItem></li>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const Text = () => {
  return <ComponentContainerCard title='Text' description={<>Coloque qualquer texto de forma livre em um menu suspenso com texto e use utilitários de espaçamento. Observe que você provavelmente precisará de estilos de dimensionamento adicionais para restringir a largura do menu.</>}>
      <Dropdown className="btn-group">
        <DropdownToggle type="button" className="btn btn-primary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu suspenso de texto
        </DropdownToggle>
        <DropdownMenu className="p-3 text-muted" style={{
        maxWidth: 200
      }}>
          <p>
            Alguns exemplos de texto que fluem livremente no menu suspenso.
          </p>
          <p className="mb-0">
            E este é mais um texto de exemplo.
          </p>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const MenuAlignment = () => {
  return <ComponentContainerCard title='Menu alignment' description={<> Adicionar <code>.dropdown-menu-end</code>
    para um <code>.dropdown-menu</code> à direita
    alinhe o menu suspenso.</>}>
      <Dropdown align={'end'}>
        <DropdownToggle type="button" className="btn btn-light" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu alinhado à direita
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const SplitButtonDropdowns = () => {
  return <ComponentContainerCard title='Menus suspensos do botão Dividir' description={<>  Da mesma forma, crie menus suspensos de botão dividido com praticamente a mesma marcação de botão único
    menus suspensos de botão, mas com a adição de <code>.dropdown-toggle-split</code> para
    espaçamento adequado ao redor do cursor suspenso.</>}>
      {colorVariants.slice(0, 6).map((item, idx) => {
      return <Dropdown className="btn-group mb-2" key={idx}>
              <button type="button" className={`btn btn-${item}`}>{item}</button>
              <DropdownToggle type="button" className={`btn btn-${item} dropdown-toggle-split drop-arrow-none`} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <IconifyIcon icon='tabler:chevron-down' className="align-middle" />
              </DropdownToggle> &nbsp;
              <DropdownMenu>
                <DropdownItem>Ação</DropdownItem>
                <DropdownItem>Outra Ação</DropdownItem>
                <DropdownItem>Algo mais aqui</DropdownItem>
                <DropdownDivider />
                <DropdownItem>Link separado</DropdownItem>
              </DropdownMenu>
            </Dropdown>;
    })}
    </ComponentContainerCard>;
};
const Sizing = () => {
  return <ComponentContainerCard title='Sizing' description={<>Os menus suspensos de botões funcionam com botões de todos os tamanhos, incluindo os padrões
      e botões suspensos de divisão.</>}>
      <Dropdown className="btn-group">
        <DropdownToggle className="btn btn-light btn-lg" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Botão grande
        </DropdownToggle> &nbsp;
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="btn-group">
        <button className="btn btn-light btn-lg" type="button">
          Botão grande
        </button>
        <DropdownToggle type="button" className="btn btn-lg btn-light dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="visually-hidden">Alternar menu suspenso</span>
        </DropdownToggle>&nbsp;
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="btn-group">
        <DropdownToggle className="btn btn-light btn-sm " type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Botão Pequeno
        </DropdownToggle>&nbsp;
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown className="btn-group">
        <button className="btn btn-light btn-sm" type="button">
          Botão Pequeno
        </button>
        <DropdownToggle type="button" className="btn btn-sm btn-light dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <span className="visually-hidden">Alternar menu suspenso</span>
        </DropdownToggle>&nbsp;
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DropstartVariation = () => {
  return <ComponentContainerCard title='Dropstart variation' description={<>Acione menus suspensos à direita dos elementos adicionando
      <code>.dropleft</code> para o elemento pai.</>}>
      <Dropdown drop='start' className="btn-group dropstart ">
        <DropdownToggle type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropstart
        </DropdownToggle> &nbsp;
        <DropdownMenu>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
          <DropdownItem>Algo mais aqui</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Link separado</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown drop='start' className="btn-group">
        <div className="btn-group dropstart" role="group">
          <DropdownToggle type="button" className="btn btn-secondary dropdown-split dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="visually-hidden">Alternar Dropstart</span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Ação</DropdownItem>
            <DropdownItem>Outra Ação</DropdownItem>
            <DropdownItem>Algo mais aqui</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Link separado</DropdownItem>
          </DropdownMenu>
        </div>
        <button type="button" className="btn btn-secondary">
          Dropstart dividido
        </button>
      </Dropdown>
    </ComponentContainerCard>;
};
const ActiveItem = () => {
  return <ComponentContainerCard title='Item ativo' description={<>Adicione <code>.active</code> ao item no menu suspenso em <strong>style
      eles como ativos</strong>.</>}>
      <Dropdown className="btn-group">
        <DropdownToggle type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Item ativo
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Link normal</DropdownItem>
          <DropdownItem className="active" href="#">Link ativo</DropdownItem>
          <DropdownItem>Outro Link</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const Headers = () => {
  return <ComponentContainerCard title='Headers' description={<>Adicione um cabeçalho para rotular seções de ações em qualquer menu suspenso.</>}>
      <Dropdown className="btn-group">
        <DropdownToggle type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Header
        </DropdownToggle>
        <DropdownMenu>
          <DropdownHeader as={'h6'} className="dropdown-header">Dropdown header</DropdownHeader>
          <DropdownItem>Ação</DropdownItem>
          <DropdownItem>Outra Ação</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const CenteredDropdowns = () => {
  return <ComponentContainerCard title='Centered dropdowns' description={<>Faça o menu suspenso centralizado abaixo do botão de alternância com
      <code>.dropdown-center</code> no elemento pai.</>}>
      <div className="hstack gap-2">
        <Dropdown drop='down-centered' className="dropdown-center">
          <DropdownToggle className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Dropdown Centralizado
          </DropdownToggle>
          <DropdownMenu>
            <li><DropdownItem>Ação</DropdownItem></li>
            <li><DropdownItem>Ação Dois</DropdownItem></li>
            <li><DropdownItem>Ação Três</DropdownItem></li>
          </DropdownMenu>
        </Dropdown>
        <Dropdown drop='up-centered' className="dropup-center dropup">
          <DropdownToggle className="btn btn-secondary " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown Centralizado
          </DropdownToggle>
          <DropdownMenu>
            <li><DropdownItem>Ação</DropdownItem></li>
            <li><DropdownItem>Ação Dois</DropdownItem></li>
            <li><DropdownItem>Ação Três</DropdownItem></li>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const AutoCloseBehavior = () => {
  return <ComponentContainerCard title='Auto close behavior' description={<>Por padrão, o menu suspenso é fechado ao clicar dentro ou
    fora do menu suspenso. Você pode usar a opção <code>autoClose</code> para alterar
    esse comportamento do menu suspenso.</>}>
      <div className="hstack gap-2 flex-wrap">
        <Dropdown autoClose className="btn-group">
          <DropdownToggle className="btn btn-secondary" type="button" data-bs-toggle="dropdown" data-bs-auto-close="true" aria-expanded="false">
            Menu Padrão
          </DropdownToggle>
          <DropdownMenu>
            <li><DropdownItem>Menu item</DropdownItem></li>
            <li><DropdownItem>Menu item</DropdownItem></li>
            <li><DropdownItem>Menu item</DropdownItem></li>
          </DropdownMenu>
        </Dropdown>
        <Dropdown autoClose="outside" className="btn-group">
          <DropdownToggle className="btn btn-secondary" type="button" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">
            Clicável dentro
          </DropdownToggle>
          <DropdownMenu>
            <li><DropdownItem>Menu item</DropdownItem></li>
            <li><DropdownItem>Menu item</DropdownItem></li>
            <li><DropdownItem>Menu item</DropdownItem></li>
          </DropdownMenu>
        </Dropdown>
        <Dropdown autoClose="inside" className="btn-group">
          <DropdownToggle className="btn btn-secondary" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
            Clicável fora
          </DropdownToggle>
          <DropdownMenu>
            <li><DropdownItem>Menu item</DropdownItem></li>
            <li><DropdownItem>Menu item</DropdownItem></li>
            <li><DropdownItem>Menu item</DropdownItem></li>
          </DropdownMenu>
        </Dropdown>
        <Dropdown autoClose="inside" className="btn-group">
          <DropdownToggle className="btn btn-secondary" type="button" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
            Fechamento manual
          </DropdownToggle>
          <DropdownMenu>
            <li><DropdownItem>Menu item</DropdownItem></li>
            <li><DropdownItem>Menu item</DropdownItem></li>
            <li><DropdownItem>Menu item</DropdownItem></li>
          </DropdownMenu>
        </Dropdown>
      </div>
    </ComponentContainerCard>;
};
const FormsDropdown = () => {
  return <ComponentContainerCard title='Forms' description={<>Coloque um formulário em um menu suspenso ou transforme-o em um menu suspenso
      menu e use utilitários de margem ou preenchimento para fornecer o espaço negativo necessário.</>}>
      <Dropdown>
        <DropdownToggle type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Formulário
        </DropdownToggle>
        <DropdownMenu>
          <form className="px-4 py-3">
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">Endereço</label>
              <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleDropdownFormPassword1" className="form-label">Senha</label>
              <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Senha" />
            </div>
            <div className="mb-2">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                <label className="form-check-label" htmlFor="dropdownCheck">
                  Lembrar
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Acessar</button>
          </form>
          <DropdownDivider className="dropdown-divider" />
          <DropdownItem>Novidade por aqui? Inscrever-se</DropdownItem>
          <DropdownItem>Forgot password?</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ComponentContainerCard>;
};
const DropdownsPage = () => {
  return <>
      <PageBreadcrumb title='Dropdowns' />
      <Row>
        <Col xl={6}>
          <SingleButtonDropdowns />
          <CustomDropdownArrow />
          <VariantDropdown />
          <DropupVariation />
          <DropendVariation />
          <DisabledItem />
          <DarkDropdowns />
          <Text />
          <MenuAlignment />
        </Col>
        <Col xl={6}>
          <SplitButtonDropdowns />
          <Sizing />
          <DropstartVariation />
          <ActiveItem />
          <Headers />
          <CenteredDropdowns />
          <AutoCloseBehavior />
          <FormsDropdown />
        </Col>
      </Row>
    </>;
};
export default DropdownsPage;