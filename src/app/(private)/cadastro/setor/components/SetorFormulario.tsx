'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Form } from '@/components';
import { ApiColaboradorListProps, ApiSetorProps } from '@/types';

interface ComponentProps {
  setor?: ApiSetorProps;
  colaboradores: ApiColaboradorListProps[];
}
export function SetorFormulario({ setor, colaboradores }: ComponentProps) {
  const router = useRouter();

  const formSchema = z.object({
    nome: z
      .string()
      .min(2, {
        message: 'Campo obrigatório não pode possuir menos de 2 caracteres.',
      })
      .max(64, { message: 'Campo não pode ultrapassar 64 caracteres.' }),
    responsavel_id: z.string().uuid().or(z.literal('')),
    ativo: z.boolean(),
  });

  type FormData = z.infer<typeof formSchema>;

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = methods;

  useEffect(() => {
    if (setor) {
      reset({
        nome: setor.nome,
        responsavel_id: setor.responsavel ? setor.responsavel.id : '',
        ativo: setor.ativo,
      });
    }
  }, [reset, setor]);

  async function formSubmit(data: FormData) {
    console.log({ data });
    try {
      if (setor) {
        await axios.put(`/api/setor/${setor?.id}`, data);

        router.push(`/cadastro/setor/${setor?.id}`);
      } else {
        await axios.post('/api/setor', data);

        router.push('/cadastro/setor/');
      }
    } catch (err) {
      console.error(err);
      if (isAxiosError(err)) {
        const response = err.response;
        const json = await response?.data;

        setError('root.serverError', { message: json.message });

        return;
      }

      setError('root.serverError', {
        message:
          'Não foi possível realizar a operação devido a um erro desconhecido.',
      });
    }
  }

  return (
    <>
      <Form.Root {...methods}>
        <Form.Body onSubmit={handleSubmit(formSubmit)}>
          <Form.Fieldset layout="horizontal">
            <Form.Control
              label="Nome"
              className="md:col-span-6 lg:col-span-4"
              error={errors.nome?.message}
            >
              <Form.InputText
                id="nome"
                name="nome"
                error={errors.nome?.message}
                uppercase
              />
            </Form.Control>

            <Form.Control
              label="Responsável"
              className="md:col-span-7 lg:col-span-5"
              error={errors.responsavel_id?.message}
            >
              <Form.Select
                id="responsavel_id"
                name="responsavel_id"
                error={errors.responsavel_id?.message}
                placeholder="Selecione"
                options={colaboradores.map((col) => ({
                  label: col.usuario.nome,
                  value: col.id,
                }))}
              />
            </Form.Control>

            <Form.Control error={errors.ativo?.message}>
              <div className="col-span-12 flex items-center justify-between text-sm font-medium">
                <Form.Checkbox name="ativo" label="Ativo" />
              </div>
            </Form.Control>
          </Form.Fieldset>

          <Form.Separator />

          <Form.Footer>
            <Form.FooterSection>
              <div className="flex gap-2">
                <Form.Submit
                  color="primary"
                  iconSide="right"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {setor ? 'Atualizar' : 'Cadastrar'}
                </Form.Submit>

                <Link
                  href={
                    setor ? `/cadastro/setor/${setor.id}` : '/cadastro/setor'
                  }
                >
                  <Button variant="outline">Voltar</Button>
                </Link>
              </div>
            </Form.FooterSection>
          </Form.Footer>
        </Form.Body>
      </Form.Root>
    </>
  );
}
