import PurchasePanel from "./purchase-panel";

const concerns = [
  "朝、肌がなんとなく冴えず、疲れて見える",
  "保湿しても、午後には乾燥が気になる",
  "頬のハリ感が以前と違うと感じる",
];

const steps = [
  {
    number: "01",
    title: "ほどく",
    body: "洗顔後の肌に美容液をなじませ、角層へうるおいを届けます。",
  },
  {
    number: "02",
    title: "満たす",
    body: "乾燥しやすい頬からやさしく重ね、みずみずしい肌印象へ整えます。",
  },
  {
    number: "03",
    title: "守る",
    body: "クリームで包み込み、うるおいを保ちながら、なめらかな手触りへ。",
  },
];

const faqs = [
  {
    q: "敏感肌でも使えますか？",
    a: "すべての方に刺激が起きないわけではありません。心配な方は腕の内側などで少量からお試しいただき、異常がある場合は使用を中止してください。",
  },
  {
    q: "どのくらいで変化を感じますか？",
    a: "使用感や肌の状態には個人差があります。本品は医薬品ではなく、肌へうるおいを与え、乾燥によるくすみを目立ちにくくするための化粧品です。",
  },
  {
    q: "他のスキンケアと併用できますか？",
    a: "基本的には併用いただけます。美容液は化粧水の後、クリームはお手入れの最後を目安に、肌の状態に合わせて量を調整してください。",
  },
  {
    q: "香りや使用感が合わなかったら？",
    a: "香り・テクスチャーの感じ方には個人差があります。購入前に全成分、内容量、返品条件をご確認ください。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="LUMÉA トップへ">
          LUMÉA
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#story">肌について</a>
          <a href="#design">一滴の設計</a>
          <a href="#evidence">受賞実績</a>
          <a href="#faq">よくあるご質問</a>
        </nav>
        <a className="header-cta" href="#purchase">
          購入内容を見る
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero-production.png"
            alt=""
            width="1600"
            height="1000"
            fetchPriority="high"
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">THE MOISTURE RITUAL FOR YOUR 30s</p>
          <h1 id="hero-title">
            <span>止まった一滴が、</span>
            <span>うるおいの時間を動かす。</span>
          </h1>
          <p className="hero-lead">
            年齢とともに変化する肌へ。
            <br />
            毎日のケアに、うるおいとハリ感を意識した二品を。
          </p>
          <a className="button button-primary" href="#design">
            一滴の設計を見る
            <span aria-hidden="true">→</span>
          </a>
          <div className="hero-meta">
            <p className="price">
              <span>2品セット</span>¥20,000<small>（税込）</small>
            </p>
            <p className="award">モンドセレクション受賞※</p>
            <p className="fine-print">
              ※受賞対象商品・年度・部門は、公開前に正式情報をご確認ください。
            </p>
          </div>
        </div>
      </section>

      <section className="empathy section" id="story">
        <div className="section-label">01 / FOR YOU</div>
        <div className="section-grid">
          <div>
            <p className="kicker">30代の肌に、増やすより見直すという選択。</p>
            <h2>調子が悪いわけではない。<br />でも、昨日までと少し違う。</h2>
          </div>
          <div>
            <p className="body-large">
              肌のキレがなくなったように見える日も、くすんで感じる朝も。
              その印象には、乾燥によってキメが乱れ、光が均一に反射しにくくなることが関係している場合があります。
            </p>
            <ul className="concern-list">
              {concerns.map((concern) => (
                <li key={concern}>{concern}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="problem section warm">
        <div className="section-label">02 / REFRAME</div>
        <div className="narrow">
          <p className="kicker">くすみを隠す前に、うるおいの土台を整える。</p>
          <h2>必要なのは、若さを装うことではなく、<br />今の肌がうるおいを保てるケア。</h2>
          <p className="body-large">
            メイクで明るく見せることも、アイテムを増やすことも選択肢の一つです。
            ただし、乾燥した角層へ十分にうるおいを与えずに重ねても、なめらかな印象は続きにくいもの。
            LUMÉAは、毎日続けやすい二段階に絞りました。
          </p>
        </div>
      </section>

      <section className="design section" id="design">
        <div className="section-label">03 / THE STILL DROP</div>
        <div className="design-intro">
          <div className="drop-visual" aria-hidden="true">
            <span className="drop" />
            <span className="ripple ripple-one" />
            <span className="ripple ripple-two" />
          </div>
          <div>
            <p className="kicker">中心オブジェクト：止まった一滴</p>
            <h2>動かない一滴が、<br />ケアの流れをつくる。</h2>
            <p className="body-large">
              一度で大きく変えるのではなく、少量を丁寧に重ねる。
              「止まった一滴」は、肌と向き合う短い時間が、その日のうるおいを支えるという設計思想の象徴です。
            </p>
          </div>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <p className="step-number">{step.number}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="routine section ink">
        <div className="section-label">04 / TWO MINUTES</div>
        <div className="routine-grid">
          <div>
            <p className="kicker">朝と夜、約2分の静かなルーティン。</p>
            <h2>続けやすさまで、<br />処方の一部と考える。</h2>
          </div>
          <div className="routine-card">
            <div>
              <span>朝</span>
              <strong>美容液 2–3滴</strong>
              <p>メイク前は薄く、頬を中心になじませます。</p>
            </div>
            <div>
              <span>夜</span>
              <strong>美容液＋クリーム</strong>
              <p>手のひらで包み込むように、摩擦を避けて整えます。</p>
            </div>
            <small>※使用量は目安です。肌の状態に合わせて調整してください。</small>
          </div>
        </div>
      </section>

      <section className="evidence section" id="evidence">
        <div className="section-label">05 / EVIDENCE</div>
        <div className="proof-card">
          <div className="medal" aria-hidden="true">M</div>
          <div>
            <p className="kicker">第三者評価について</p>
            <h2>モンドセレクション受賞※</h2>
            <p className="body-large">
              受賞歴は品質を検討する一つの材料です。一方で、受賞はすべての方への効果や肌との相性を保証するものではありません。
              LUMÉAでは、受賞情報と商品の使用感を分けて、誠実にお伝えします。
            </p>
            <p className="fine-print">
              ※公開時には、受賞商品名・年度・賞区分・審査対象を一次資料で確認し、正式に表記してください。
            </p>
          </div>
        </div>
      </section>

      <section className="imagine section soft">
        <div className="section-label">06 / YOUR DAY</div>
        <div className="narrow center">
          <p className="kicker">目指すのは、年齢を消すことではありません。</p>
          <h2>触れたくなる、弾むような<br />うるおいのある肌印象へ。</h2>
          <p className="body-large">
            朝の光の中で、乾燥によるくすみが目立ちにくい。
            頬に触れたとき、なめらかでやわらかな感触がある。
            そんな小さな実感を、毎日のケアから育てていきます。
          </p>
          <p className="fine-print">
            ※表現は使用後の肌印象を示すもので、若返りや年齢変化そのものを示すものではありません。
          </p>
        </div>
      </section>

      <section className="fit section">
        <div className="section-label">07 / IS IT FOR ME?</div>
        <div className="fit-grid">
          <article>
            <p className="fit-label good">おすすめしたい方</p>
            <h3>シンプルな保湿ケアを、丁寧に続けたい方</h3>
            <ul>
              <li>乾燥によるくすみが気になる</li>
              <li>うるおいとハリ感を重視したい</li>
              <li>朝晩の二段階ケアを続けられる</li>
            </ul>
          </article>
          <article>
            <p className="fit-label">おすすめしない方</p>
            <h3>即効的・医療的な変化を求める方</h3>
            <ul>
              <li>一度で大きな変化を期待する</li>
              <li>肌疾患の治療を目的としている</li>
              <li>香りやテクスチャーを試さず選びたくない</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-label">08 / QUESTIONS</div>
        <div className="faq-grid">
          <div>
            <p className="kicker">選ぶ前に、確かめてほしいこと。</p>
            <h2>よくあるご質問</h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}<span aria-hidden="true">＋</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="purchase section" id="purchase">
        <div className="section-label">09 / PRODUCT</div>
        <div className="purchase-grid">
          <div className="product-still" aria-hidden="true">
            <div className="bottle"><span>LUMÉA</span><small>MOISTURE SERUM</small></div>
            <div className="jar"><span>LUMÉA</span><small>MOISTURE CREAM</small></div>
          </div>
          <div className="purchase-copy">
            <p className="kicker">LUMÉA MOISTURE RITUAL</p>
            <h2>美容液・クリーム<br />2品セット</h2>
            <p className="purchase-price">¥20,000<small>（税込）</small></p>
            <ul className="purchase-notes">
              <li>毎回購入の単品セット（定期契約ではありません）</li>
              <li>全成分・内容量・送料・返品条件は購入前に確認</li>
              <li>肌に異常がある場合は使用しないでください</li>
            </ul>
            <PurchasePanel />
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">LUMÉA</a>
        <p>
          本ページはLPデザインのデモです。商品名、成分、受賞歴、販売条件は公開前に正式情報へ差し替えてください。
        </p>
        <p>© 2026 LUMÉA</p>
      </footer>
    </main>
  );
}
