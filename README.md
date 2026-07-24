# LUMÉA Skincare Landing Page

30代女性の「肌のキレがなくなった」「乾燥によるくすみが気になる」という悩みに向き合う、架空のプレミアム化粧品ブランド **LUMÉA（ルメア）** のランディングページです。

派手な演出や不安訴求に頼らず、読み手が商品を理解し、納得した状態で購入を検討できる情報設計を目指しました。

![LUMÉA hero visual](public/hero-production.png)

## Live Demo

[https://lumea-skincare.yamagem07.chatgpt.site](https://lumea-skincare.yamagem07.chatgpt.site)

> 公開デモの購入ボタンは決済に接続されていません。購入内容を確認するUIのみ実装しています。

## Concept

中心オブジェクトは「止まった一滴」です。

一度で大きく変えるのではなく、少量を丁寧に重ねるスキンケアを、静止した一滴と広がる波紋で表現しています。

### Recognition Shift

1. **Before** — 年齢による変化だから仕方がない、化粧品の表現は大げさで信用しにくい
2. **Turning Point** — 乾燥でキメが乱れると、光が均一に反射せず、肌がくすんで見える場合がある
3. **After** — 若さを装うのではなく、今の肌へうるおいを与えるケアを無理なく続ける

## Information Architecture

LPは次の心理順序で構成しています。

1. 30代の自分向けの商品だと理解する
2. 乾燥と肌印象の関係を理解する
3. アイテムを増やすだけではない選択肢を知る
4. 「止まった一滴」というケアの考え方を理解する
5. 朝晩約2分のルーティンなら続けられると感じる
6. 受賞情報の意味と限界を確認する
7. 使用後の肌印象を想像する
8. 向いている人・向かない人を判断する
9. FAQと販売条件を確認する
10. 購入内容を確認する

## Features

- Reactによる1ページ構成
- デスクトップ・スマートフォン対応
- 日本人女性と化粧品を用いたオリジナルのヒーロービジュアル
- ページ内アンカーナビゲーション
- `<details>` を利用したアクセシブルなFAQ
- 購入内容を確認できるインタラクション
- キーボードフォーカス表示
- `prefers-reduced-motion` 対応
- 誇大表現や虚偽の希少性を避けたコピー

## Tech Stack

- React 19
- Next.js 16
- TypeScript
- Vinext / Vite
- CSS

## Getting Started

Node.js 22.13以上を推奨します。

```bash
git clone https://github.com/shoichirooohori/lumea-skincare-lp.git
cd lumea-skincare-lp
npm install
npm run dev
```

開発サーバー起動後、ターミナルに表示されたURLをブラウザで開いてください。

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run test
```

## Project Structure

```text
app/
├── globals.css          # デザインシステムとレスポンシブスタイル
├── layout.tsx           # メタデータと日本語ページ設定
├── page.tsx             # LP本体
└── purchase-panel.tsx   # 購入内容確認UI

public/
└── hero-production.png  # 生成したヒーロービジュアル
```

## Design Tokens

| Role | Color |
| --- | --- |
| Background | `#F7F3EC` |
| Paper | `#FFFDF9` |
| Text | `#25221F` |
| Bronze | `#9B7454` |
| Border | `#D8C8BE` |
| Soft background | `#EEE5DC` |

## Important Notes

このプロジェクトはポートフォリオ用の架空商品LPです。実際に販売する場合は、以下を正式な情報へ差し替えてください。

- 商品名、全成分、内容量
- 使用方法と使用上の注意
- 送料、返品、解約などの販売条件
- 特定商取引法に基づく表記
- プライバシーポリシー
- 決済ページURL
- モンドセレクションの受賞商品、年度、部門、賞区分

「20代の肌になる」「若返る」などの効果保証や医薬品的な表現は使用していません。公開前には、商品仕様を踏まえて薬機法・景品表示法の専門家による確認を行ってください。

## License

Source code is provided for portfolio and educational purposes. The generated visual and the fictional LUMÉA brand assets may not be resold or redistributed as standalone assets.
