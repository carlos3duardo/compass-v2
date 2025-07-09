'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Form } from '@/components';
import { ApiCargoProps } from '@/types';

interface ComponentProps {
  cargo?: ApiCargoProps;
}
export function CargoFormulario({ cargo }: ComponentProps) {
  const router = useRouter();

  const formSchema = z.object({
    nome: z
      .string()
      .min(1, { message: 'Campo obrigatório.' })
      .max(64, { message: 'Campo não pode ultrapassar 64 caracteres.' }),
    descricao: z
      .string()
      .min(10, { message: 'Campo não pode possuir menos de 10 caracteres.' })
      .max(2048, { message: 'Campo não pode ultrapassar 2048 caracteres.' })
      .or(z.literal('')),
    situacao: z.boolean(),
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
    if (cargo) {
      reset({
        nome: cargo.nome,
        descricao: cargo.descricao,
        situacao: cargo.situacao === 'ATIVO',
      });
    }
  }, [cargo, reset]);

  async function formSubmit(data: FormData) {
    const formData = {
      ...data,
      situacao: data.situacao ? 'ATIVO' : 'INATIVO',
    };

    try {
      if (cargo) {
        await axios.put(`/api/cargo/${cargo?.id}`, formData);

        router.push(`/cadastro/cargo/${cargo?.id}`);
      } else {
        const response = await axios.post('/api/cargo', formData);
        const postData = response.data;

        router.push(`/cadastro/cargo/${postData.data.id}`);
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
          <Form.Fieldset>
            <Form.Control
              label="Nome"
              className="col-span-12"
              error={errors.nome?.message}
            >
              <Form.InputText
                id="nome"
                name="nome"
                error={errors.nome?.message}
              />
            </Form.Control>
            <Form.Control
              label="Descrição do cargo"
              className="col-span-12"
              error={errors.descricao?.message}
            >
              <Form.Textarea
                id="descricao"
                name="descricao"
                error={errors.descricao?.message}
              />
            </Form.Control>
            <div className="col-span-12 flex items-center justify-between text-sm font-medium">
              <Form.Checkbox name="situacao" label="Ativo" />
            </div>
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

                <Link href="/cadastro/cargo">
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
