import { Button } from '@/components/shadcn/ui/button';

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1>Compass</h1>
      <div>
        <Button>Push me (nothing happen)</Button>
      </div>
    </div>
  );
}
