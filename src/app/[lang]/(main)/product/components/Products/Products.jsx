import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from './util';

const Product = () => {
    return (
        <section aria-labelledby="trending-heading" className="bg-white">
          <div className="mx-auto sm:px-6 sm:py-24  lg:px-8">
            <div className="flex items-center justify-between space-x-4">
              <h2 className="text-3xl font-medium text-gray-900">Products</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              {products.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                    <Image src={product.imageSrc} alt={product.imageAlt} className="object-cover object-center" />
                    <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                      <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                        View Product
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                    <h3>
                      <Link href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p>{product.price}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
              ))}
            </div>
        </div>
    </section>
  );
};

export default Product;