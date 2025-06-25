'use client';

import axios, { isAxiosError } from 'axios';
import { DoorOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { Card } from '@/components';
import Button from '@/components/Button';

export function Logout() {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    try {
      await axios.delete('/api/auth/token');

      router.push('/login?logout=true');

      return;
    } catch (err) {
      if (isAxiosError(err)) {
        const response = err.response;
        const json = await response?.data;

        if (json?.message) {
          alert(json.message);
        }
      }
    }
  }, [router]);

  const handleDashboard = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Card.Root>
      <Card.Body className="flex flex-col items-center gap-4 2xl:gap-6">
        <figure className="ring-primary text-primary rounded-full p-6 ring">
          <DoorOpen size={36} />
        </figure>
        <div className="flex flex-col">
          <h2 className="text-center text-lg font-bold">Desconectar</h2>
          <p className="text-center text-sm text-slate-600">
            Você tem certeza que deseja sair?
          </p>
        </div>
        <div className="flex w-full flex-col items-stretch gap-4 lg:w-[480px] lg:flex-row">
          <Button className="lg:flex-1" onClick={handleLogout}>
            Confirmar sair
          </Button>
          <Button
            className="lg:flex-1"
            variant="outline"
            onClick={handleDashboard}
          >
            Cancelar
          </Button>
        </div>
      </Card.Body>
    </Card.Root>
  );

  return (
    <div className="bg-card flex flex-col items-center gap-6 rounded-lg p-8 shadow">
      <figure className="ring-primary text-primary rounded-full p-6 ring">
        <DoorOpen size={36} />
      </figure>
      <div className="flex flex-col">
        <h2 className="text-center text-lg font-bold">Desconectar</h2>
        <p className="text-center text-sm text-slate-600">
          Você tem certeza que deseja sair?
        </p>
      </div>
      <div className="flex w-full flex-col items-stretch gap-4 lg:w-[480px] lg:flex-row">
        <Button className="lg:flex-1" color="primary" onClick={handleLogout}>
          Confirmar sair
        </Button>
        <Button
          className="lg:flex-1"
          color="default"
          variant="outline"
          onClick={handleDashboard}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
}
