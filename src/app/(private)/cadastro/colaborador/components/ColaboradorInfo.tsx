import {
  Cake,
  CalendarCheck,
  Check,
  GraduationCap,
  Lightbulb,
  Mail,
  MessagesSquare,
  PieChart,
  SquareUserRound,
  TriangleAlert,
  UsersRound,
  X,
} from 'lucide-react';
import { ElementType } from 'react';

import { Badge } from '@/components';
import { dateBirthBr, dateBr } from '@/helpers';
import { ApiColaboradorProps } from '@/types';

interface ComponentProps {
  colaborador: ApiColaboradorProps;
}

function InfoData({ icon: Icon, label }: { icon: ElementType; label: string }) {
  return (
    <h3 className="flex items-center gap-2 text-sm leading-tight font-medium text-slate-400">
      <Icon size={18} /> {label}
    </h3>
  );
}

export function ColaboradorInfo({ colaborador }: ComponentProps) {
  return (
    <div>
      <div className="pt-4">
        <div className="inner pl-[calc(12rem_+_5.5rem)]">
          <h2 className="text-2xl leading-tight font-bold">
            <span className="flex items-center gap-4">
              {colaborador.usuario.nome_completo}
              <Badge
                label={colaborador.situacao.nome}
                color={colaborador.situacao.cor}
                icon={
                  colaborador.situacao.ativo === false
                    ? X
                    : colaborador.situacao.pode_acessar === false
                      ? TriangleAlert
                      : Check
                }
                withBorder
                withDot
                className="py-1"
              />
            </span>
          </h2>
          <div className="flex w-full flex-col gap-4 pt-4 md:flex-row">
            <div role="list" className="flex flex-1 flex-col gap-2">
              {colaborador.cargo && (
                <InfoData
                  icon={SquareUserRound}
                  label={colaborador.cargo.nome}
                />
              )}
              {colaborador.equipes.length > 0 && (
                <InfoData
                  icon={UsersRound}
                  label={colaborador.equipes.map((e) => e.nome).join(', ')}
                />
              )}
              {colaborador.data_admissao && (
                <InfoData
                  icon={CalendarCheck}
                  label={`Adimitido em ${dateBr(colaborador.data_admissao)}`}
                />
              )}
              {colaborador.usuario.nascimento && (
                <InfoData
                  icon={Cake}
                  label={`Faz aniversário em ${dateBirthBr(colaborador.usuario.nascimento)}`}
                />
              )}
              <h3 className="flex items-center gap-2 text-sm leading-tight font-semibold text-slate-400">
                <Mail size={18} /> {colaborador.usuario.email}
              </h3>
            </div>
            <div role="list" className="flex flex-1 flex-col gap-2">
              <InfoData icon={PieChart} label={'2 avaliações de desempenho'} />

              <InfoData
                icon={MessagesSquare}
                label={'Nenhum feedback realizado'}
              />
              <InfoData icon={GraduationCap} label={'Nenhum curso realizado'} />
              <InfoData icon={Lightbulb} label={'Nenhuma ideia postada'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
