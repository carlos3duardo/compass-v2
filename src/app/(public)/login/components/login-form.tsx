'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import axios, { isAxiosError } from 'axios';
import { ArrowRight, KeyRound, UserCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Card, Form } from '@/components';

export function LoginForm() {
  const formSchema = z.object({
    username: z.string().min(1, { message: 'Campo obrigatório.' }),
    password: z.string().min(1, { message: 'Campo obrigatório.' }),
    remember: z.boolean(),
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
      const response = await axios.post('/api/auth/token', data);

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
    <div className="px-4">
      <Card.Root className="w-full px-4 md:max-w-[480px] lg:py-12 xl:px-6">
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
              Acesso ao sistema
            </h1>
            <p className="text-sm leading-none opacity-80">
              Por favor, informe suas credenciais
            </p>
          </section>
        </Card.Header>
        <Card.Content>
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
                <Form.Control
                  label="Sua senha"
                  className="col-span-12"
                  error={errors.password?.message}
                >
                  <Form.InputPassword
                    id="password"
                    name="password"
                    icon={KeyRound}
                    error={errors.password?.message}
                  />
                </Form.Control>
                <div className="col-span-12 flex items-center justify-between text-sm font-medium">
                  <Form.Checkbox
                    name="remember"
                    label="Lembrar-me"
                    error={errors.remember?.message}
                  />
                  <div>Esqueci minha senha</div>
                </div>
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
                      Entrar
                    </Form.Submit>
                  </div>
                </Form.FooterSection>
              </Form.Footer>
            </Form.Body>
          </Form.Root>
        </Card.Content>
        <Card.Footer>
          <ul className="text-sm">
            <li>
              <Link href="/">Política de privacidade</Link>
            </li>
            <li>
              <Link href="/">Uso de cookies</Link>
            </li>
          </ul>
        </Card.Footer>
      </Card.Root>
    </div>
  );

  /*

  return (
    <Card className="relative w-full">
      formulário de login
      <div className="flex w-full flex-col gap-6 p-12">
        <figure className="flex justify-center">
          <Image
            src="/images/logo-bussoladagestao-light-mode.svg"
            width={207}
            height={64}
            alt="Logotipo da Bússola da Gestão"
          />
        </figure>
        <Form {...methods}>
          <form onSubmit={handleSubmit(formSubmit)} className="space-y-8">
            <FormField
              control={control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </Card>
  );
  */
}
