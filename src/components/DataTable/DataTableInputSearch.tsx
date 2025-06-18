'use client';

import { Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function DataTableInputSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);

    console.log({ term });
  }, 350);

  return (
    <div className="border-border flex items-center gap-1 rounded-[6px] border p-0.5">
      <button
        type="button"
        id="search-button"
        className="flex h-7 w-7 items-center justify-center rounded-[4px]"
      >
        <Search size={16} />
      </button>
      <input
        type="text"
        id="search"
        placeholder="Procurar..."
        className="text-sm font-medium outline-none"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('search')?.toString()}
      />
    </div>
  );
}
