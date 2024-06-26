const products = [
  {
    id: 1,
    name: "Black Basic Tee",
    price: "$32",
    href: "#",
    imageSrc: "/images/flyer2.jpg",
    imageAlt: "GmeStop Flyer 1",
  },
  {
    id: 2,
    name: "Black Basic Tee",
    price: "$32",
    href: "#",
    imageSrc: "/images/flyer1.jpg",
    imageAlt: "GmeStop Flyer 2",
  },
  {
    id: 3,
    name: "Black Basic Tee",
    price: "$32",
    href: "#",
    imageSrc: "/images/poster1.jpg",
    imageAlt: "GmeStop Poster 1",
  },
];

export default function Media() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-gray-200 capitalize">
            Spread the Word
          </h2>
          <a
            href="#"
            className="hidden text-sm font-semibold text-red-600 hover:text-white sm:block"
          >
            Download HQ Print Pack
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              {/* <h3 className="mt-4 text-base font-semibold text-gray-900">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.price}</p> */}
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <a
            href="#"
            className="block text-sm font-semibold text-red-600 hover:text-white"
          >
            Download HQ Print Pack
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
