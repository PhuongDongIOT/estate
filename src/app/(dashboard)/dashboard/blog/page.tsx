import { searchParamsCache } from '@/lib/searchparams';
import { ProductListingPage } from '@/sections/product/view';
// import { SearchParams } from 'nuqs';

type pageProps = {
  searchParams: any;
};

export const metadata = {
  title: 'Dashboard : Product'
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  return <ProductListingPage />;
}
