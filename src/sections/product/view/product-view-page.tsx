import { Breadcrumbs } from '@/components/atoms/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
// import ProductForm from '../product-form';
import { ProductFormManual } from '../product-form-manual';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Product', link: '/dashboard/product' },
  { title: 'Create', link: '/dashboard/product/create' }
];

export default function ProductViewPage() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductFormManual />
      </div>
    </ScrollArea>
  );
}
