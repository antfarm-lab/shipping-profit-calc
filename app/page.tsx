"use client";

import { useState } from "react";

export default function Home() {
  const [salePrice, setSalePrice] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [shippingFee, setShippingFee] = useState("");

  const sale = Number(salePrice) || 0;
  const cost = Number(costPrice) || 0;
  const shipping = Number(shippingFee) || 0;

  const profit = sale - cost - shipping;
  const profitRate = sale > 0 ? (profit / sale) * 100 : 0;

  const reset = () => {
    setSalePrice("");
    setCostPrice("");
    setShippingFee("");
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10 text-gray-900">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6 shadow">
        <h1 className="mb-2 text-2xl font-bold">
          送料込み利益計算ツール
        </h1>
        <p className="mb-6 text-sm text-gray-600">
          売値・原価・送料から利益を計算します。
        </p>

        <div className="space-y-4">
          <input
            type="number"
            value={salePrice}
            onChange={(e) => setSalePrice(e.target.value)}
            placeholder="売値（例：5000）"
            className="w-full rounded border p-3"
          />

          <input
            type="number"
            value={costPrice}
            onChange={(e) => setCostPrice(e.target.value)}
            placeholder="仕入れ値（例：2000）"
            className="w-full rounded border p-3"
          />

          <input
            type="number"
            value={shippingFee}
            onChange={(e) => setShippingFee(e.target.value)}
            placeholder="送料（例：750）"
            className="w-full rounded border p-3"
          />
        </div>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">利益額</p>
          <p className={profit < 0 ? "text-3xl font-bold text-red-600" : "text-3xl font-bold"}>
            {profit.toLocaleString()}円
          </p>

          <p className="mt-4 text-sm text-gray-600">利益率</p>
          <p className={profitRate < 0 ? "text-2xl font-bold text-red-600" : "text-2xl font-bold"}>
            {profitRate.toFixed(1)}%
          </p>
        </div>

        <button
          onClick={reset}
          className="mt-6 w-full rounded bg-black py-3 font-bold text-white"
        >
          リセット
        </button>
                <div className="mt-6 border-t pt-4">
          <p className="mb-2 text-sm font-bold text-gray-700">
            関連ツール
          </p>
          <ul className="space-y-2 text-sm text-blue-600 underline">
            <li>
              <a href="https://calc-tools.vercel.app/">
                メルカリ利益計算ツール
              </a>
            </li>
            <li>
              <a href="https://shipping-calc.vercel.app/">
                フリマ送料計算ツール
              </a>
            </li>
            <li>
              <a href="https://price-reverse-calc.vercel.app/">
                販売価格逆算ツール
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    送料込みで利益計算することが重要な理由
  </h2>

  <p className="mb-3">
    フリマ販売では販売価格だけ見ても正しい利益はわかりません。
    送料まで含めて計算しないと赤字になることがあります。
  </p>

  <p className="mb-3">
    特に大型商品では送料負担が大きく、
    想定より利益が少なくなるケースがあります。
  </p>

  <p>
    この送料込み利益計算ツールでは送料や手数料を含めた
    正確な利益を確認できます。
  </p>
</section>
      <section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm">
    <a className="text-blue-600 underline" href="https://calc-tools-mauve.vercel.app/">
      利益計算ツール
    </a>
    <a className="text-blue-600 underline" href="https://shipping-calc-olive.vercel.app/">
      送料計算ツール
    </a>
    <a className="text-blue-600 underline" href="https://fee-calc-seven.vercel.app/">
      手数料計算ツール
    </a>
  </div>
</section>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}