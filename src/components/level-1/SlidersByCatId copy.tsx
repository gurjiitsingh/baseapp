"use client";

import { useEffect, useState } from "react";


type CategoryType = {
  id: string;
  name: string;
  description?: string;
  image?: string;
};

type ProductType = {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  productDesc?: string;
  categoryId: string;
  image?: string;
};

export default function SlidersByCatId() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, prodRes] = await Promise.all([
          fetch("/api/categories", { cache: "no-store" }),
          fetch("/api/products", { cache: "no-store" }),
        ]);

        if (!catRes.ok || !prodRes.ok) throw new Error("Fetch failed");

        const cats = await catRes.json();
        const prods = await prodRes.json();

        setCategories(cats);
        setProducts(prods);
      } catch (err) {
        console.error("Error fetching menu data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="py-20 text-center text-gray-600">Loading menu...</div>
    );

  return (
    <section className="bg-[#fff8f4] py-8 px-4 md:px-8">
      {categories.map((cat) => {
        const catProducts = products.filter(
          (p) => p.categoryId === cat.id
        );

        if (catProducts.length === 0) return null;

        return (
          <div key={cat.id} id={cat.id} className="mb-12 scroll-mt-24">
            <CategoryHeader category={cat} />
            {/* <ProductSlider products={catProducts} /> */}
          </div>
        );
      })}
    </section>
  );
}

function CategoryHeader({ category }: { category: CategoryType }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
        {category.image && (
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div>
        <h2 className="text-xl font-bold uppercase text-[#d24a0f]">
          {category.name}
        </h2>
        {category.description && (
          <p className="text-sm text-gray-500">{category.description}</p>
        )}
      </div>
    </div>
  );
}
