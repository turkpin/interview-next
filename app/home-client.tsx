"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  stock: number;
  minOrder: number;
  maxOrder: number;
  price: number;
};

type Language = "tr" | "en";

type Translation = {
  title: string;
  allGames: string;
  productName?: string;
  stock?: string;
  price?: string;
  quantity?: string;
  buy?: string;
};

const games = [
  { id: 0, name: "Tüm Oyunlar" },
  { id: 1, name: "Game 1" },
  { id: 2, name: "Game 2" },
  { id: 3, name: "Game 3" },
];

const products: Product[] = [
  { id: 1, name: "Product 1", stock: 10, minOrder: 1, maxOrder: 5, price: 100 },
  { id: 2, name: "Product 2", stock: 20, minOrder: 1, maxOrder: 5, price: 200 },
  { id: 3, name: "Product 3", stock: 30, minOrder: 1, maxOrder: 5, price: 300 },
];

const translations: Record<Language, Translation> = {
  tr: { title: "Test Proje", allGames: "Tüm Oyunlar", productName: "Ürün Adı", stock: "Stok", price: "Fiyat", quantity: "Miktar", buy: "Satın Al" },
  en: { title: "Test Project", allGames: "All Games" },
};

function HomeContent({ initialLanguage }: { initialLanguage: Language }) {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [selectedGame, setSelectedGame] = useState(0);
  const [quantities, setQuantities] = useState<Record<number, number>>(Object.fromEntries(products.map((product) => [product.id, 1])));
  const text = translations[language];

  useEffect(() => {
    document.cookie = `lang=${initialLanguage}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [initialLanguage]);

  function changeLanguage(nextLanguage: Language) {
    document.cookie = `lang=${nextLanguage}; Path=/; Max-Age=31536000; SameSite=Lax`;
    setLanguage(nextLanguage);
    setSelectedGame(0);
    setQuantities(Object.fromEntries(products.map((product) => [product.id, 1])));
    router.push(`/?lang=${nextLanguage}`);
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-white text-[#212529]">
      <header>
        <nav className="mb-6 bg-[#212529] px-0 py-2 text-white">
          <div className="bootstrap-container flex items-center">
            <Link href={`/?lang=${language}`} className="py-1.25 text-xl font-normal leading-normal text-white no-underline">{text.title}</Link>
          </div>
        </nav>
      </header>
      <main className="w-full shrink-0">
        <div className="bootstrap-container">
          <div className="flex flex-wrap">
            <div className="w-auto">
              <label htmlFor="games" className="sr-only">{text.allGames}</label>
              <select id="games" value={selectedGame} onChange={(event) => setSelectedGame(Number(event.target.value))} className="form-select-equivalent block h-9.5 rounded-md border border-[#dee2e6] bg-white px-3 py-1.5 pr-9 text-base font-normal leading-normal text-[#212529] outline-none">
                {games.map((game) => <option key={game.id} value={game.id}>{game.id === 0 ? text.allGames : game.name}</option>)}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="mb-4 w-full border-collapse border-[#dee2e6] text-left align-top text-base">
              <thead><tr>
                <th scope="col" className="border-b border-[#dee2e6] bg-white px-2 py-2 font-bold text-black">{text.productName}</th>
                <th scope="col" className="border-b border-[#dee2e6] bg-white px-2 py-2 font-bold text-black">{text.stock}</th>
                <th scope="col" className="border-b border-[#dee2e6] bg-white px-2 py-2 font-bold text-black">{text.price}</th>
                <th scope="col" className="border-b border-[#dee2e6] bg-white px-2 py-2 font-bold text-black">{text.quantity}</th>
              </tr></thead>
              <tbody>{products.map((product) => <tr key={product.id} className="odd:bg-[#f2f2f2] hover:bg-[#ececec]">
                <td className="border-b border-[#dee2e6] px-2 py-2 text-black">{product.name}</td><td className="border-b border-[#dee2e6] px-2 py-2 text-black">{product.stock}</td><td className="border-b border-[#dee2e6] px-2 py-2 text-black">{product.price}</td>
                <td className="border-b border-[#dee2e6] px-2 py-2 text-black"><input aria-label={`${product.name} ${text.quantity}`} type="number" value={quantities[product.id]} min={product.minOrder} max={product.maxOrder} onChange={(event) => setQuantities({ ...quantities, [product.id]: Number(event.target.value) })} className="block h-9.5 w-full rounded-md border border-[#dee2e6] bg-white px-3 py-1.5 text-base leading-normal text-[#212529] outline-none" /></td>
              </tr>)}</tbody>
            </table>
            <button type="button" className="inline-block cursor-pointer rounded-md border border-[#0d6efd] bg-[#0d6efd] px-3 py-1.5 text-base font-normal leading-normal text-white transition hover:border-[#0a58ca] hover:bg-[#0b5ed7]">{text.buy}</button>
          </div>
        </div>
      </main>
      <footer className="mt-auto bg-[#f8f9fa] py-4">
        <div className="bootstrap-container">
          <label htmlFor="language" className="sr-only">Language</label>
          <select id="language" name="lang" value={language} onChange={(event) => changeLanguage(event.target.value as Language)} className="native-language-select"><option value="tr">Türkçe</option><option value="en">English</option></select>
        </div>
      </footer>
    </div>
  );
}

export default HomeContent;
export type { Language };
