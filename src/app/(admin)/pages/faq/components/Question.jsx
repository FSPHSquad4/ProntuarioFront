import TextAreaFormInput from '@/components/form/TextAreaFormInput';
import TextFormInput from '@/components/form/TextFormInput';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const Question = () => {
  const questionSchema = yup.object({
    name: yup.string().required('Por favor, insira seu nome'),
    question: yup.string().required('Por favor, insira sua pergunta'),
    email: yup.string().email().required('Por favor, insira seu email'),
    number: yup.string().required('Por favor, insira seu número'),
  });

  const { handleSubmit, control } = useForm({
    resolver: yupResolver(questionSchema),
  });

  return (
    <>
      <form onClick={handleSubmit(() => {})}>
        <div className="border p-3 rounded bg-light-subtle">
          <div className="mb-2">
            <TextFormInput
              control={control}
              name="name"
              placeholder="Nome Completo"
              label="Seu Nome"
            />
          </div>
          <div className="mb-2">
            <TextFormInput
              control={control}
              name="email"
              placeholder="Email"
              label="Email"
            />
          </div>
          <div className="mb-2">
            <TextFormInput
              control={control}
              name="number"
              placeholder="Número"
              label="Número de telefone"
            />
          </div>
          <div>
            <TextAreaFormInput
              control={control}
              name="question"
              type="text"
              label="Digite Sua Pergunta"
              className="form-control"
              id="schedule-textarea"
              rows={3}
              placeholder="Mensagem"
            />
          </div>
          <div className="mt-2">
            <Button variant="primary" type="submit" className="w-100">
              Enviar
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Question;
