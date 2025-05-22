import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalTitle,
  Row,
} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import TextFormInput from '@/components/form/TextFormInput';
import SelectFormInput from '@/components/form/SelectFormInput';

const AddEditEvent = ({
  eventData,
  isEditable,
  onAddEvent,
  onRemoveEvent,
  onUpdateEvent,
  open,
  toggle,
}) => {
  const eventFormSchema = yup.object({
    title: yup.string().required('Por favor, insira o título do evento'),
    category: yup
      .string()
      .required('Por favor, selecione a categoria do evento'),
  });

  const { handleSubmit, control, setValue, reset } = useForm({
    resolver: yupResolver(eventFormSchema),
    defaultValues: {
      title: eventData?.title ?? '',
      category: eventData?.className
        ? String(eventData.className)
        : 'bg-danger',
    },
  });

  useEffect(() => {
    if (eventData?.title) {
      setValue('title', String(eventData?.title));
      setValue('category', String(eventData?.className));
    }
  }, [eventData]);

  useEffect(() => {
    if (!open) reset();
  }, [open]);

  const onSubmitEvent = (data) => {
    isEditable ? onUpdateEvent(data) : onAddEvent(data);
  };

  return (
    <Modal show={open} onHide={toggle} className="fade" tabIndex={-1}>
      <div className="modal-content">
        <form
          onSubmit={handleSubmit(onSubmitEvent)}
          className="needs-validation"
          name="event-form"
        >
          <ModalHeader className="modal-header p-3 border-bottom-0" closeButton>
            <ModalTitle className="modal-title" as="h5">
              Evento
            </ModalTitle>
          </ModalHeader>
          <ModalBody className="px-3 pb-3 pt-0">
            <Row>
              <Col xs={12}>
                <TextFormInput
                  control={control}
                  name="title"
                  containerClassName="mb-3"
                  label="Nome do Evento"
                  placeholder="Insira o nome do evento"
                />
              </Col>
              <Col xs={12}>
                <SelectFormInput
                  control={control}
                  name="category"
                  label="Categoria"
                  containerClassName="mb-3"
                  options={[
                    {
                      value: 'bg-primary',
                      label: 'Azul',
                    },
                    {
                      value: 'bg-secondary',
                      label: 'Cinza Escuro',
                    },
                    {
                      value: 'bg-success',
                      label: 'Verde',
                    },
                    {
                      value: 'bg-info',
                      label: 'Ciano',
                    },
                    {
                      value: 'bg-warning',
                      label: 'Amarelo',
                    },
                    {
                      value: 'bg-danger',
                      label: 'Vermelho',
                    },
                    {
                      value: 'bg-dark',
                      label: 'Escuro',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                {isEditable && (
                  <button
                    onClick={onRemoveEvent}
                    type="button"
                    className="btn btn-danger"
                  >
                    Excluir
                  </button>
                )}
              </Col>
              <Col xs={6} className="text-end">
                <Button
                  variant="light"
                  type="button"
                  className="me-1"
                  onClick={toggle}
                >
                  Cancelar
                </Button>
                <Button variant="primary" type="submit">
                  Salvar
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </form>
      </div>
    </Modal>
  );
};

export default AddEditEvent;
