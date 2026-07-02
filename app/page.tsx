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
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-6">
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
               
      </div>
      <section className="mt-12 text-left max-w-3xl mx-auto space-y-6">

  <div>
    <h2 className="text-2xl font-bold mb-3">
      送料込み販売で利益はいくら残る？
    </h2>
    <p>
      フリマアプリでは送料込みで販売することが多いため、
      販売価格だけを見ても本当の利益は分かりません。
      送料や販売手数料を差し引いたあとに、
      実際にいくら利益が残るか確認することが重要です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      メルカリで送料込み1000円販売は利益が出る？
    </h2>
    <p>
      1000円で販売しても、送料や手数料を引くと利益がかなり少なくなる場合があります。
      小さな商品でも発送方法によって利益が変わるため、
      出品前に送料込みの利益を計算しておくと安心です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      送料負担を間違えると赤字になることもある
    </h2>
    <p>
      送料込み価格で出品すると、購入者には分かりやすい反面、
      出品者側の利益が減りやすくなります。
      送料・手数料・仕入れ値をまとめて確認して、
      赤字販売を避けることが大切です。
    </p>
  </div>

  <div>
    <h2 className="text-2xl font-bold mb-3">
      よくある質問
    </h2>
    <p>
      Q. 送料込み価格の利益計算に使えますか？<br />
      A. はい。販売価格から送料や手数料を引いた利益確認に使えます。<br /><br />

      Q. メルカリやラクマにも使えますか？<br />
      A. はい。フリマアプリ全般の送料込み利益計算に使えます。
    </p>
  </div>

</section>
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
 <h2 className="text-xl font-bold mb-3">
  他の便利ツール
</h2>

<ul className="list-disc pl-6 space-y-2 text-blue-600 underline">
  <li>
    <a href="https://calc-tools-mauve.vercel.app/">
      総合計算ツール
    </a>
  </li>
  <li>
    <a href="https://shipping-calc-olive.vercel.app/">
      送料計算ツール
    </a>
  </li>
  <li>
    <a href="https://price-reverse-calc.vercel.app/">
      販売価格逆算ツール
    </a>
  </li>
  <li>
    <a href="https://fee-calc-seven.vercel.app/">
      手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://profit-rate-calc.vercel.app/">
      利益率計算ツール
    </a>
  </li>
  <li>
    <a href="https://discount-rate-calc.vercel.app/">
      割引率計算ツール
    </a>
  </li>
  <li>
    <a href="https://amazon-fee-calc.vercel.app/">
      Amazon手数料計算ツール
    </a>
  </li>
  <li>
    <a href="https://roi-calc-woad.vercel.app/">
      ROI計算ツール
    </a>
  </li>
  <li>
    <a href="https://break-even-calc-one.vercel.app/">
      損益分岐点計算ツール
    </a>
  </li>
</ul>
</section>
<p className="mt-6 text-xs text-gray-500 text-center">
  このサイトはメルカリ・Amazon・ラクマ・せどり・副業に役立つ無料計算ツールを公開しています。
</p>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}