'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Form } from '@/components';
import { ApiEquipeProps, ApiEquipeRowProps } from '@/types';

interface ComponentProps {
  equipe?: ApiEquipeProps;
  superiores: ApiEquipeRowProps[];
}
export function EquipeFormulario({ equipe, superiores }: ComponentProps) {
  const router = useRouter();

  const formSchema = z.object({
    nome: z
      .string()
      .min(1, { message: 'Campo obrigatório.' })
      .max(64, { message: 'Campo não pode ultrapassar 64 caracteres.' }),
    parent_id: z.string().uuid().or(z.literal('')),
    tipo: z.boolean(),
    situacao: z.enum(['ATIVO', 'INATIVO'], {
      message: 'Campo não informado ou inválido.',
    }),
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
    if (equipe) {
      reset({
        nome: equipe.nome,
        situacao: equipe.ativa ? 'ATIVO' : 'INATIVO',
        parent_id: equipe.equipe_superior?.id,
        tipo: equipe.tipo === 'ASSISTENTE' ? true : false,
      });
    }
  }, [equipe, reset]);

  async function formSubmit(data: FormData) {
    const formData = {
      ...data,
      tipo: data.tipo ? 'ASSISTENTE' : null,
    };

    try {
      if (equipe) {
        await axios.put(`/api/equipe/${equipe?.id}`, formData);

        router.push(`/cadastro/equipe/${equipe?.id}`);
      } else {
        const response = await axios.post('/api/equipe', formData);
        const postData = response.data;

        router.push(`/cadastro/equipe/${postData.data.id}`);
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
              className="md:col-span-6 lg:col-span-5"
              error={errors.nome?.message}
            >
              <Form.InputText
                id="nome"
                name="nome"
                error={errors.nome?.message}
              />
            </Form.Control>

            <Form.Control
              label="Equipe superior"
              className="md:col-span-7 lg:col-span-6"
              error={errors.parent_id?.message}
            >
              <Form.Select
                id="parent_id"
                name="parent_id"
                error={errors.parent_id?.message}
                placeholder="Selecione"
                options={superiores
                  .filter((sup) => sup.id !== equipe?.id)
                  .map((sup) => ({
                    label: sup.nome,
                    value: sup.id,
                  }))}
              />
            </Form.Control>

            <Form.Control
              label="Situação"
              className="md:col-span-4 lg:col-span-2"
              error={errors.situacao?.message}
            >
              <Form.Select
                id="situacao"
                name="situacao"
                error={errors.situacao?.message}
                placeholder="Selecione"
                options={[
                  { label: 'Ativa', value: 'ATIVO' },
                  { label: 'Inativa', value: 'INATIVO' },
                ]}
              />
            </Form.Control>

            <Form.Control error={errors.situacao?.message}>
              <div className="col-span-12 flex items-center justify-between text-sm font-medium">
                <Form.Checkbox
                  name="tipo"
                  label="Assistente / Consultor / Staff"
                />
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
                  Entrar
                </Form.Submit>

                <Link href="/cadastro/equipe">
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
