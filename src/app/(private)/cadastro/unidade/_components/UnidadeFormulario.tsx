'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Form } from '@/components';
import { ApiColaboradorListProps, ApiUnidadeProps } from '@/types';

interface ComponentProps {
  unidade?: ApiUnidadeProps;
  colaboradores: ApiColaboradorListProps[];
}
export function UnidadeFormulario({ unidade, colaboradores }: ComponentProps) {
  const router = useRouter();

  const formSchema = z.object({
    nome: z
      .string()
      .min(5, { message: 'Campo não pode possuir menos de 5 caracteres.' })
      .max(64, { message: 'Campo não pode ultrapassar 64 caracteres.' }),
    codigo: z.string().optional().or(z.literal('')),
    cnpj: z.string().optional().or(z.literal('')),
    logradouro: z.string().optional().or(z.literal('')),
    numero: z.string().optional().or(z.literal('')),
    complemento: z.string().optional().or(z.literal('')),
    bairro: z.string().optional().or(z.literal('')),
    cep: z.string().optional().or(z.literal('')),
    municipio: z.string().optional().or(z.literal('')),
    uf: z.string().optional().or(z.literal('')),
    responsavel_id: z.string().optional().or(z.literal('')),
    ativo: z.string().optional().or(z.literal('')),
  });

  type FormData = z.infer<typeof formSchema>;

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = methods;

  useEffect(() => {
    if (unidade) {
      reset({
        nome: unidade.nome,
        cnpj: unidade.cnpj,
        codigo: unidade.codigo,
        cep: unidade.cep,
        logradouro: unidade.logradouro,
        numero: unidade.numero,
        complemento: unidade.complemento || '',
        bairro: unidade.bairro,
        municipio: unidade.municipio,
        uf: unidade.uf,
        responsavel_id: unidade.responsavel?.id,
        ativo: unidade.ativo === true ? '1' : '0',
      });
    }
  }, [unidade, reset]);

  async function formSubmit(data: FormData) {
    const formData = {
      ...data,
      ativo: data.ativo === '1' ? true : false,
    };

    try {
      if (unidade) {
        await axios.put(`/api/unidade/${unidade?.id}`, formData);

        router.push(`/cadastro/unidade/${unidade?.id}`);
      } else {
        const response = await axios.post('/api/unidade', formData);
        const responseData = response.data;

        router.push(`/cadastro/unidade/${responseData.data.id}`);
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
              className="col-span-4"
              error={errors.nome?.message}
            >
              <Form.InputText
                id="nome"
                name="nome"
                error={errors.nome?.message}
              />
            </Form.Control>

            <Form.Control
              label="CNPJ"
              className="col-span-4"
              error={errors.cnpj?.message}
            >
              <Form.InputText
                id="cnpj"
                name="cnpj"
                error={errors.cnpj?.message}
              />
            </Form.Control>
            <Form.Control
              label="Código"
              className="col-span-2"
              error={errors.codigo?.message}
            >
              <Form.InputText
                id="codigo"
                name="codigo"
                error={errors.codigo?.message}
              />
            </Form.Control>

            <Form.Control
              label="Situação"
              className="col-span-2"
              error={errors.ativo?.message}
            >
              <Form.Select
                id="ativo"
                name="ativo"
                error={errors.ativo?.message}
                placeholder="Selecione"
                options={[
                  { label: 'Ativo', value: '1' },
                  { label: 'Inativo', value: '0' },
                ]}
              />
            </Form.Control>

            <Form.Control
              label="CEP"
              className="col-span-2"
              error={errors.cep?.message}
            >
              <Form.InputText id="cep" name="cep" error={errors.cep?.message} />
            </Form.Control>
            <Form.Control
              label="Endereço"
              className="col-span-5"
              error={errors.logradouro?.message}
            >
              <Form.InputText
                id="logradouro"
                name="logradouro"
                error={errors.logradouro?.message}
              />
            </Form.Control>
            <Form.Control
              label="Número"
              className="col-span-2"
              error={errors.numero?.message}
            >
              <Form.InputText
                id="numero"
                name="numero"
                error={errors.numero?.message}
              />
            </Form.Control>
            <Form.Control
              label="Complemento"
              className="col-span-3"
              error={errors.complemento?.message}
            >
              <Form.InputText
                id="complemento"
                name="complemento"
                error={errors.complemento?.message}
              />
            </Form.Control>

            <Form.Control
              label="Bairro"
              className="col-span-3"
              error={errors.bairro?.message}
            >
              <Form.InputText
                id="bairro"
                name="bairro"
                error={errors.bairro?.message}
              />
            </Form.Control>

            <Form.Control
              label="Município"
              className="col-span-3"
              error={errors.municipio?.message}
            >
              <Form.InputText
                id="municipio"
                name="municipio"
                error={errors.municipio?.message}
              />
            </Form.Control>

            <Form.Control
              label="UF"
              className="col-span-2"
              error={errors.uf?.message}
            >
              <Form.InputText id="uf" name="uf" error={errors.uf?.message} />
            </Form.Control>

            <Form.Control
              label="Responsável"
              className="col-span-4"
              error={errors.responsavel_id?.message}
            >
              <Form.Select
                id="responsavel_id"
                name="responsavel_id"
                error={errors.responsavel_id?.message}
                placeholder="Selecione"
                options={colaboradores.map((col) => ({
                  value: col.id,
                  label: col.usuario.nome_completo,
                }))}
              />
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
                  {unidade ? 'Atualizar' : 'Cadastrar'}
                </Form.Submit>

                <Link href="/cadastro/unidade">
                  <Button variant="ghost">Voltar</Button>
                </Link>
              </div>
            </Form.FooterSection>
          </Form.Footer>
        </Form.Body>
      </Form.Root>
    </>
  );
}
