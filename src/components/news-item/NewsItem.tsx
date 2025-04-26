import DuplicateBar from '../bars/duplicate-bar/DuplicateBar'
import OriginBar from '../bars/origin-bar/OriginBar'
import PhraseBar from '../bars/phrase-bar/PhraseBar'
import SectionBar from '../bars/section-bar/SectionBar'
import Overview from '../overview/Overview'
import './NewsItem.scss'

function NewsItem() {
  return (
    <>
      <div>
        NewsItem works!
        <Overview />
        <SectionBar />
        <PhraseBar />
        <OriginBar />
        <DuplicateBar />
      </div>
    </>
  )
}

export default NewsItem
