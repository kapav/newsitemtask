import AuthorPad from '../../pads/author-pad/AuthorPad'
import CountryPad from '../../pads/country-pad/CountryPad'
import LanguagePad from '../../pads/language-pad/LanguagePad'
import LinkPad from '../../pads/link-pad/LinkPad'
import './BibliographicBar.scss'

function BibliographicBar() {
  return (
    <>
      <div>
        BibliographicBar works!
        <LinkPad />
        <CountryPad />
        <LanguagePad />
        <AuthorPad />
      </div>
    </>
  )
}

export default BibliographicBar