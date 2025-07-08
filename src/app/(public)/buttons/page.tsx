import { Button, ModeToggle } from '@/components';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto">
        <h3 className="py-4 text-center text-sm font-medium">Colors</h3>
        <div className="grid grid-cols-6 gap-4">
          <Button color="primary">primary</Button>
          <Button color="secondary">secondary</Button>
          <Button color="success">success</Button>
          <Button color="destructive">destructive</Button>
          <Button color="warning">warning</Button>
          <Button color="info">info</Button>
        </div>

        <h3 className="py-4 text-center text-sm font-medium">Sizes</h3>

        <div className="grid grid-cols-5 gap-4">
          <Button size="xs">xs</Button>
          <Button size="sm">sm</Button>
          <Button size="md">md</Button>
          <Button size="lg">lg</Button>
          <Button size="xl">xl</Button>
        </div>

        <h3 className="py-4 text-center text-sm font-medium">
          Variant: Outline
        </h3>

        <div className="grid grid-cols-6 gap-4">
          <Button color="primary" variant="outline">
            primary
          </Button>
          <Button color="secondary" variant="outline">
            secondary
          </Button>
          <Button color="success" variant="outline">
            success
          </Button>
          <Button color="destructive" variant="outline">
            destructive
          </Button>
          <Button color="warning" variant="outline">
            warning
          </Button>
          <Button color="info" variant="outline">
            info
          </Button>
        </div>

        <h3 className="py-4 text-center text-sm font-medium">Variant: Flat</h3>

        <div className="grid grid-cols-6 gap-4">
          <Button color="primary" variant="flat">
            primary
          </Button>
          <Button color="secondary" variant="flat">
            secondary
          </Button>
          <Button color="success" variant="flat">
            success
          </Button>
          <Button color="destructive" variant="flat">
            destructive
          </Button>
          <Button color="warning" variant="flat">
            warning
          </Button>
          <Button color="info" variant="flat">
            info
          </Button>
        </div>

        <h3 className="py-4 text-center text-sm font-medium">
          Variant: Surface
        </h3>

        <div className="grid grid-cols-6 gap-4">
          <Button color="primary" variant="surface">
            primary
          </Button>
          <Button color="secondary" variant="surface">
            secondary
          </Button>
          <Button color="success" variant="surface">
            success
          </Button>
          <Button color="destructive" variant="surface">
            destructive
          </Button>
          <Button color="warning" variant="surface">
            warning
          </Button>
          <Button color="info" variant="surface">
            info
          </Button>
        </div>

        <h3 className="py-4 text-center text-sm font-medium">Variant: Ghost</h3>

        <div className="grid grid-cols-6 gap-4">
          <Button color="primary" variant="ghost">
            primary
          </Button>
          <Button color="secondary" variant="ghost">
            secondary
          </Button>
          <Button color="success" variant="ghost">
            success
          </Button>
          <Button color="destructive" variant="ghost">
            destructive
          </Button>
          <Button color="warning" variant="ghost">
            warning
          </Button>
          <Button color="info" variant="ghost">
            info
          </Button>
        </div>

        <h3 className="py-4 text-center text-sm font-medium">Loading</h3>
        <div className="grid grid-cols-5 gap-4">
          <Button color="primary" isLoading>
            primary
          </Button>
          <Button color="secondary" variant="outline" isLoading>
            secondary
          </Button>
          <Button color="success" variant="flat" isLoading>
            success
          </Button>
          <Button color="destructive" variant="surface" isLoading>
            destructive
          </Button>
          <Button color="warning" variant="ghost" isLoading>
            warning
          </Button>
        </div>
      </div>
      <div className="theme-switcher absolute right-5 bottom-5 flex gap-2">
        <ModeToggle />
      </div>
    </main>
  );
}
