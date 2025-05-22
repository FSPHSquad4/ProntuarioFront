import ChoicesFormInput from '@/components/form/ChoicesFormInput';
import { options } from '@/components/form/data';
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
} from 'react-bootstrap';
import Select from 'react-select';

const TodosSelects = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader className="border-bottom border-dashed">
              <CardTitle as={'h4'} className="mb-2">
                Select2
              </CardTitle>
              <p className="text-muted fs-14 mb-0">
                O Select2 oferece uma caixa de seleção personalizável com
                suporte para pesquisa, marcação, conjuntos de dados remotos,
                rolagem infinita e muitas outras opções altamente utilizadas.
              </p>
            </CardHeader>
            <CardBody>
              <Row className="g-3">
                <Col lg={6}>
                  <p className="mb-1 fw-bold text-muted">Seleção Única</p>
                  <p className="text-muted fs-14">
                    O Select2 pode transformar uma caixa de seleção regular como
                    esta...
                  </p>
                  <Select
                    className="select2"
                    options={options}
                    isMulti={false}
                  />
                </Col>
                <Col lg={6}>
                  <p className="mb-1 fw-bold text-muted">Seleção Múltipla</p>
                  <p className="text-muted fs-14">
                    O Select2 pode transformar uma caixa de seleção regular como
                    esta...
                  </p>
                  <Select
                    className="select2"
                    options={options}
                    isMulti={true}
                  />
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <Card>
            <CardHeader className="border-bottom border-dashed">
              <CardTitle as={'h4'} className="mb-0">
                Escolhas
              </CardTitle>
            </CardHeader>
            <CardBody>
              <div>
                <h5 className="fs-14 mb-2">
                  Exemplo de entrada de seleção única
                </h5>
                <Row>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-single-default"
                        className="form-label text-muted"
                      >
                        Padrão
                      </label>
                      <p className="text-muted">
                        Defina o atributo <code>data-choices</code> para
                        configurar uma seleção única padrão.
                      </p>
                      <ChoicesFormInput
                        className="form-control"
                        data-choices
                        id="choices-single-default"
                      >
                        <option>Este é um placeholder</option>
                        <option value="Escolha 1">Escolha 1</option>
                        <option value="Escolha 2">Escolha 2</option>
                        <option value="Escolha 3">Escolha 3</option>
                      </ChoicesFormInput>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-single-groups"
                        className="form-label text-muted"
                      >
                        Grupos de Opções
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>data-choices data-choices-groups</code> para
                        configurar grupo de opções
                      </p>
                      <ChoicesFormInput
                        className="form-control"
                        id="choices-single-groups"
                        data-choices
                        data-choices-groups
                        data-placeholder="Selecione a Cidade"
                      >
                        <option>Escolha uma cidade</option>
                        <optgroup label="Reino Unido">
                          <option value="Londres">Londres</option>
                          <option value="Manchester">Manchester</option>
                          <option value="Liverpool">Liverpool</option>
                        </optgroup>
                        <optgroup label="França">
                          <option value="Paris">Paris</option>
                          <option value="Lyon">Lyon</option>
                          <option value="Marselha">Marselha</option>
                        </optgroup>
                        <optgroup label="Alemanha" disabled>
                          <option value="Hamburgo">Hamburgo</option>
                          <option value="Munique">Munique</option>
                          <option value="Berlim">Berlim</option>
                        </optgroup>
                        <optgroup label="EUA">
                          <option value="Nova York">Nova York</option>
                          <option value="Washington" disabled>
                            Washington
                          </option>
                          <option value="Michigan">Michigan</option>
                        </optgroup>
                        <optgroup label="Espanha">
                          <option value="Madri">Madri</option>
                          <option value="Barcelona">Barcelona</option>
                          <option value="Málaga">Málaga</option>
                        </optgroup>
                        <optgroup label="Canadá">
                          <option value="Montreal">Montreal</option>
                          <option value="Toronto">Toronto</option>
                          <option value="Vancouver">Vancouver</option>
                        </optgroup>
                      </ChoicesFormInput>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-single-no-search"
                        className="form-label text-muted"
                      >
                        Opções adicionadas via configuração sem pesquisa
                      </label>
                      <p className="text-muted">
                        Defina{' '}
                        <code>
                          data-choices data-choices-search-false
                          data-choices-removeItem
                        </code>
                      </p>
                      <ChoicesFormInput
                        className="form-control"
                        id="choices-single-no-search"
                        options={{
                          removeItemButton: true,
                        }}
                      >
                        <option value="Zero">Zero</option>
                        <option value="Um">Um</option>
                        <option value="Dois">Dois</option>
                        <option value="Três">Três</option>
                        <option value="Quatro">Quatro</option>
                        <option value="Cinco">Cinco</option>
                        <option value="Seis">Seis</option>
                      </ChoicesFormInput>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-single-no-sorting"
                        className="form-label text-muted"
                      >
                        Opções adicionadas via configuração sem ordenação
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>data-choices data-choices-sorting-false</code>.
                      </p>
                      <ChoicesFormInput
                        className="form-control"
                        id="choices-single-no-sorting"
                        data-choices
                        data-choices-sorting-false
                      >
                        <option value="Madri">Madri</option>
                        <option value="Toronto">Toronto</option>
                        <option value="Vancouver">Vancouver</option>
                        <option value="Londres">Londres</option>
                        <option value="Manchester">Manchester</option>
                        <option value="Liverpool">Liverpool</option>
                        <option value="Paris">Paris</option>
                        <option value="Málaga">Málaga</option>
                        <option value="Washington" disabled>
                          Washington
                        </option>
                        <option value="Lyon">Lyon</option>
                        <option value="Marselha">Marselha</option>
                        <option value="Hamburgo">Hamburgo</option>
                        <option value="Munique">Munique</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Berlim">Berlim</option>
                        <option value="Montreal">Montreal</option>
                        <option value="Nova York">Nova York</option>
                        <option value="Michigan">Michigan</option>
                      </ChoicesFormInput>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="mt-4">
                <h5 className="fs-14 mb-3">Entrada de seleção múltipla</h5>
                <Row>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-multiple-default"
                        className="form-label text-muted"
                      >
                        Padrão
                      </label>
                      <p className="text-muted">
                        Defina o atributo <code>data-choices multiple</code>.
                      </p>
                      <ChoicesFormInput
                        className="form-control"
                        id="choices-multiple-default"
                        data-choices
                        multiple
                      >
                        <option value="Escolha 1" selected>
                          Escolha 1
                        </option>
                        <option value="Escolha 2">Escolha 2</option>
                        <option value="Escolha 3">Escolha 3</option>
                        <option value="Escolha 4" disabled>
                          Escolha 4
                        </option>
                      </ChoicesFormInput>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-multiple-remove-button"
                        className="form-label text-muted"
                      >
                        Com botão de remover
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-choices data-choices-removeItem multiple
                        </code>
                        .
                      </p>
                      <ChoicesFormInput
                        className="form-control"
                        options={{
                          removeItemButton: true,
                        }}
                        id="choices-multiple-remove-button"
                        data-choices
                        data-choices-removeitem
                        multiple
                      >
                        <option value="Escolha 1" selected>
                          Escolha 1
                        </option>
                        <option value="Escolha 2">Escolha 2</option>
                        <option value="Escolha 3">Escolha 3</option>
                        <option value="Escolha 4">Escolha 4</option>
                      </ChoicesFormInput>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-multiple-groups"
                        className="form-label text-muted"
                      >
                        Grupos de opções
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-choices
                          data-choices-multiple-groups=&quot;true&quot; multiple
                        </code>
                        .
                      </p>
                      <ChoicesFormInput
                        className="form-control"
                        id="choices-multiple-groups"
                        data-choices
                        data-choices-multiple-groups="true"
                        multiple
                      >
                        <option>Escolha uma cidade</option>
                        <optgroup label="Reino Unido">
                          <option value="Londres">Londres</option>
                          <option value="Manchester">Manchester</option>
                          <option value="Liverpool">Liverpool</option>
                        </optgroup>
                        <optgroup label="França">
                          <option value="Paris">Paris</option>
                          <option value="Lyon">Lyon</option>
                          <option value="Marselha">Marselha</option>
                        </optgroup>
                        <optgroup label="Alemanha" disabled>
                          <option value="Hamburgo">Hamburgo</option>
                          <option value="Munique">Munique</option>
                          <option value="Berlim">Berlim</option>
                        </optgroup>
                        <optgroup label="EUA">
                          <option value="Nova York">Nova York</option>
                          <option value="Washington" disabled>
                            Washington
                          </option>
                          <option value="Michigan">Michigan</option>
                        </optgroup>
                        <optgroup label="Espanha">
                          <option value="Madri">Madri</option>
                          <option value="Barcelona">Barcelona</option>
                          <option value="Málaga">Málaga</option>
                        </optgroup>
                        <optgroup label="Canadá">
                          <option value="Montreal">Montreal</option>
                          <option value="Toronto">Toronto</option>
                          <option value="Vancouver">Vancouver</option>
                        </optgroup>
                      </ChoicesFormInput>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="mt-4">
                <h5 className="fs-14 mb-3">Entradas de texto</h5>
                <Row>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-text-remove-button"
                        className="form-label text-muted"
                      >
                        Definir valores limite com botão de remover
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>
                          data-choices data-choices-limit=&quot;Limite
                          Requerido&quot; data-choices-removeItem
                        </code>
                        .
                      </p>
                      <ChoicesFormInput
                        options={{
                          removeItemButton: true,
                          maxItemCount: 3,
                        }}
                        allowInput
                        className="form-control"
                        data-choices
                        data-choices-limit={3}
                        data-choices-removeitem
                        defaultValue="Tarefa-1"
                      />
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="mb-3">
                      <label
                        htmlFor="choices-text-unique-values"
                        className="form-label text-muted"
                      >
                        Apenas valores únicos, sem colar
                      </label>
                      <p className="text-muted">
                        Defina o atributo{' '}
                        <code>data-choices data-choices-text-unique-true</code>.
                      </p>
                      <ChoicesFormInput
                        options={{
                          duplicateItemsAllowed: false,
                          paste: false,
                        }}
                        allowInput
                        className="form-control"
                        id="choices-text-unique-values"
                        data-choices
                        data-choices-text-unique-true
                        defaultValue="Projeto-A, Projeto-B"
                      />
                    </div>
                  </Col>
                </Row>
                <div>
                  <label
                    htmlFor="choices-text-disabled"
                    className="form-label text-muted"
                  >
                    Desabilitado
                  </label>
                  <p className="text-muted">
                    Defina o atributo{' '}
                    <code>data-choices data-choices-text-disabled-true</code>.
                  </p>
                  <input
                    disabled
                    className="form-control"
                    id="choices-text-disabled"
                    data-choices
                    data-choices-text-disabled-true
                    type="text"
                    defaultValue="josh@joshuajohnson.co.uk, joe@bloggs.co.uk"
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default TodosSelects;
