"use client";

import { useState } from "react";

export default function PurchasePanel() {
  const [open, setOpen] = useState(false);

  return (
    <div className="purchase-panel">
      <button
        className="button button-primary purchase-button"
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="order-summary"
      >
        購入内容を確認する
        <span aria-hidden="true">→</span>
      </button>
      {open && (
        <div className="order-summary" id="order-summary" role="status">
          <button
            className="close-button"
            type="button"
            onClick={() => setOpen(false)}
            aria-label="購入内容を閉じる"
          >
            ×
          </button>
          <p className="order-eyebrow">ORDER SUMMARY</p>
          <strong>LUMÉA 美容液・クリーム 2品セット</strong>
          <p>商品価格 ¥20,000（税込）</p>
          <small>
            このLPはデザインデモのため決済には進みません。実運用時に販売・決済ページへ接続してください。
          </small>
        </div>
      )}
    </div>
  );
}
