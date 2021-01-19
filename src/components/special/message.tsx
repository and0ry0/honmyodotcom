import Container from '../container'
import { CONST_SITE_NAME, CONST_MESSAGE, CONST_CREATOR } from '../../libs/constants'

export default function Message() {
  return (
    <div className="w-screen mb-12 bg-black text-white py-16">
      <Container>
        <div className="grid text-left grid-cols-1 gap-y-6 mb-16 leading-10">
          <p className="text-2xl font-bold leading-loose">インターネット上の「名札」が増えすぎた。どれが自分なのかわからない。子供の頃に考えたハンドルネームが、未だに自分を縛る。</p>
          <p>このドメインはかつて、ネット上のプロフィールから、個人情報を詮索する悪質なサイトに使われていました。</p>
          <p>私がこのドメインを取得したのは、ポートフォリオのURLが決められなかったからです。ハンドルネームが変わってもアドレスを変えないで済むように、名前に関係のないドメインを取得したかったのです。</p>
          <p>ドメインを取得した後に、つい数ヶ月前まで、悪質なサイトに使われていたことを知ってしまいました。しかし、何年分も料金を払ってしまったので、何かしらの活用手段を考えるほかありませんでした。</p>
          <p>今の私にはそんな技術力はありませんが、将来的には、「ネット上の名前と向き合う場所」にしていきたいです。例えば、</p>
          <ul>
            <li>増えすぎたハンドルネームをバーチャルな墓に埋葬する</li>
            <li>ハンドルネームと対応するアカウント、人格を整理する</li>
            <li>名前の代わりにUUIDが書かれた名刺を生成する</li>
          </ul>
          <p>といったサービスが目標です。時間はかかりますが、当分はこのドメインが悪用されることはないでしょう。</p>
          <p className="">2021年1月19日 {CONST_CREATOR}</p>
        </div>
        <div className="font-bold mt-2 text-2xl leading-loose">
          <div className="text-3xl">{CONST_MESSAGE}</div>
          <div className="text-5xl md:text-6xl uppercase tracking-widest">{CONST_SITE_NAME}</div>
        </div>
      </Container >
    </div >
  )
}