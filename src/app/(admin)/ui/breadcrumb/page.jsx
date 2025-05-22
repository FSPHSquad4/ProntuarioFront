const ExampleBreadcrumb = () => {
  return (
    <Card>
      <CardHeader className="border-bottom border-dashed d-flex align-items-center">
        <h4 className="header-title">Exemplo</h4>
      </CardHeader>
      <CardBody>
        <p className="text-muted">
          Indique a localização da página atual dentro de uma hierarquia de
          navegação, adicionando separadores automaticamente via CSS. Por favor,
          leia a documentação oficial do{' '}
          <Link
            target="_blank"
            to="https://getbootstrap.com/docs/5.3/components/breadcrumb/"
          >
            Bootstrap
          </Link>
          para mais opções.
        </p>
        <nav aria-label="breadcrumb">
          <Breadcrumb className="mb-0 py-2">
            <BreadcrumbItem active className="active" aria-current="page">
              Início
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
        <nav aria-label="breadcrumb">
          <Breadcrumb className="mb-0 py-2">
            <BreadcrumbItem className="m-0">Início</BreadcrumbItem>
            <div
              className="mx-1"
              style={{
                height: 24,
              }}
            >
              <IconifyIcon icon="tabler:chevron-right" height={16} width={16} />
            </div>
            <BreadcrumbItem active aria-current="page">
              Biblioteca
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
        <nav aria-label="breadcrumb">
          <Breadcrumb className="mb-0 py-2">
            <BreadcrumbItem className="m-0">Início</BreadcrumbItem>
            <div
              className="mx-1"
              style={{
                height: 24,
              }}
            >
              <IconifyIcon icon="tabler:chevron-right" height={16} width={16} />
            </div>
            <BreadcrumbItem className="m-0">Biblioteca</BreadcrumbItem>
            <div
              className="mx-1"
              style={{
                height: 24,
              }}
            >
              <IconifyIcon icon="tabler:chevron-right" height={16} width={16} />
            </div>
            <BreadcrumbItem active aria-current="page">
              Dados
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
      </CardBody>
    </Card>
  );
};

const BreadcrumbWithIcons = () => {
  return (
    <Card>
      <CardHeader className="border-bottom border-dashed d-flex align-items-center">
        <h4 className="header-title">Com Ícones</h4>
      </CardHeader>
      <CardBody>
        <p className="text-muted">
          Opcionalmente, você pode especificar ícones com o item de breadcrumb.
        </p>
        <nav aria-label="breadcrumb">
          <Breadcrumb className="breadcrumb bg-light bg-opacity-50 p-2 mb-2">
            <BreadcrumbItem active aria-current="page">
              <IconifyIcon icon="tabler:smart-home" className="fs-16 me-1" />
              Início
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
        <nav aria-label="breadcrumb">
          <Breadcrumb className="bg-light bg-opacity-50 p-2 mb-2">
            <BreadcrumbItem>
              <IconifyIcon icon="tabler:smart-home" className="fs-16 me-1" />
              Início
            </BreadcrumbItem>
            <div
              className="mx-1"
              style={{
                height: 20,
              }}
            >
              <IconifyIcon icon="tabler:chevron-right" height={16} width={16} />
            </div>
            <BreadcrumbItem active aria-current="page">
              Biblioteca
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
        <nav aria-label="breadcrumb">
          <Breadcrumb className="bg-light bg-opacity-50 p-2 mb-0">
            <BreadcrumbItem>
              <IconifyIcon icon="tabler:smart-home" className="fs-16 me-1" />
              Início
            </BreadcrumbItem>
            <div
              className="mx-1"
              style={{
                height: 20,
              }}
            >
              <IconifyIcon icon="tabler:chevron-right" height={16} width={16} />
            </div>
            <BreadcrumbItem>Biblioteca</BreadcrumbItem>
            <div
              className="mx-1"
              style={{
                height: 20,
              }}
            >
              <IconifyIcon icon="tabler:chevron-right" height={16} width={16} />
            </div>
            <BreadcrumbItem active aria-current="page">
              Dados
            </BreadcrumbItem>
          </Breadcrumb>
        </nav>
      </CardBody>
    </Card>
  );
};

const DividersBreadcrumb = () => {
  return (
    <Card>
      <CardHeader className="border-bottom border-dashed d-flex align-items-center">
        <h4 className="header-title">Divisores</h4>
      </CardHeader>
      <CardBody>
        <p className="text-muted">
          Indique a localização da página atual dentro de uma hierarquia de
          navegação, adicionando separadores automaticamente via CSS. Por favor,
          leia a documentação oficial do{' '}
          <Link
            target="_blank"
            to="https://getbootstrap.com/docs/5.3/components/breadcrumb/"
          >
            Bootstrap
          </Link>
          para mais opções.
        </p>
        ...
      </CardBody>
    </Card>
  );
};
