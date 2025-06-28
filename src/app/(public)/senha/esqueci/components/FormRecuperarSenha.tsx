'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import { ArrowRight, UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Card, Form } from '@/components';

export function FormRecuperarSenha() {
  const formSchema = z.object({
    username: z.string().min(1, { message: 'Campo obrigatório.' }),
  });

  type FormData = z.infer<typeof formSchema>;

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const {
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  async function formSubmit(data: FormData) {
    try {
      const response = await axios.post('/api/auth/password-recovery', data);

      console.log('response', response.data);
    } catch (err) {
      if (isAxiosError(err)) {
        const response = err.response;
        const json = await response?.data;

        if (json.error === 'invalid_grant') {
          setError('root.serverError', {
            message: json.message,
          });

          return;
        }

        setError('root.serverError', {
          message:
            'Não foi possível realizar a autenticação. Tente novamente. Se persistir, entre em contato com o suporte.',
        });
      }
    }
  }

  return (
    <div className="w-full px-4 md:max-w-[480px] lg:w-[480px]">
      <Card.Root className="w-full px-4 lg:py-12 xl:px-6">
        <Card.Header className="flex flex-col items-center gap-8">
          <figure className="flex justify-center">
            <Image
              src="/images/logo-bussoladagestao-light-mode.svg"
              width={207}
              height={64}
              alt="Logotipo da Bússola da Gestão"
              className="block dark:hidden"
            />
            <Image
              src="/images/logo-bussoladagestao-dark-mode.svg"
              width={207}
              height={64}
              alt="Logotipo da Bússola da Gestão"
              className="hidden dark:block"
            />
          </figure>
          <section className="text-foreground flex flex-col items-center gap-1 text-center">
            <h1 className="text-xl leading-none font-semibold">
              Esqueceu sua senha?
            </h1>
            <p className="text-sm leading-none opacity-80">
              Informe o seu endereço de e-mail que enviaremos instruções de como
              recuperar seu acesso.
            </p>
          </section>
        </Card.Header>
        <Card.Body>
          <Form.Root {...methods}>
            <Form.Body onSubmit={handleSubmit(formSubmit)}>
              <Form.Fieldset className="px-0 xl:px-0">
                <Form.Control
                  label="Seu e-mail"
                  className="col-span-12"
                  error={errors.username?.message}
                >
                  <Form.InputText
                    id="username"
                    name="username"
                    icon={UserCircle}
                    error={errors.username?.message}
                  />
                </Form.Control>
              </Form.Fieldset>

              <Form.Error />

              <Form.Footer className="p-0 xl:px-0">
                <Form.FooterSection>
                  <div className="flex w-full flex-col gap-2">
                    <Form.Submit
                      color="primary"
                      icon={ArrowRight}
                      iconSide="right"
                      fullWidth
                      isLoading={isSubmitting}
                      disabled={isSubmitting}
                    >
                      Enviar
                    </Form.Submit>
                    <div>
                      <Link href="/login">
                        <Button variant="ghost" fullWidth>
                          Voltar para o login
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Form.FooterSection>
              </Form.Footer>
            </Form.Body>
          </Form.Root>
        </Card.Body>
      </Card.Root>
    </div>
  );
}
