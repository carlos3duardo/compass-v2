import Image from 'next/image';

export async function CompanyLogo() {
  return (
    <figure className="relative w-full">
      <Image
        src="/images/logo-bussoladagestao-light-mode.svg"
        alt="Logotipo da empresa"
        className="block dark:hidden"
        fill={true}
        priority={true}
        sizes="(max-width: 260px) 260px, 260px"
        style={{ objectFit: 'contain' }}
      />
      <Image
        src="/images/logo-bussoladagestao-dark-mode.svg"
        alt="Logotipo da empresa"
        className="hidden dark:block"
        fill={true}
        priority={true}
        sizes="(max-width: 260px) 260px, 260px"
        style={{ objectFit: 'contain' }}
      />
    </figure>
  );
}
