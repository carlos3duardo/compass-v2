import Image from 'next/image';

export function UserAvatar() {
  return (
    <figure className="group hover:ring-foreground/40 ring-background relative h-[42px] w-[42px] rounded-full ring-2 transition duration-200">
      <Image
        src="/images/avatar-placeholder.jpg"
        alt="avatar"
        width={42}
        height={42}
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          aspectRatio: '1 / 1',
        }}
        className="rounded-full"
      />
    </figure>
  );
}
