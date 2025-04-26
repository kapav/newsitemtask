import BibliographicBar from '../bars/bibliographic-bar/BibliographicBar'
import SummaryBar from '../bars/summary-bar/SummaryBar'
import TechnicalBar from '../bars/technical-bar/TechnicalBar'
import './Overview.scss'

function Overview() {
  return (
    <>
      <div>
        Overview works!
        <TechnicalBar />
        <SummaryBar />
        <BibliographicBar />
      </div>
    </>
  )
}

export default Overview