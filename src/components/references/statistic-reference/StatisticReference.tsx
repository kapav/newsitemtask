import DatePad from '../../pads/date-pad/DatePad'
import VolumePad from '../../pads/volume-pad/VolumePad'
import TrafficPanel from '../../panels/traffic-panel/TrafficPanel'
import './StatisticReference.scss'

function StatisticReference() {
  return (
    <>
      <div>
        StatisticReference works!
        <DatePad />
        <VolumePad />
        <TrafficPanel />
      </div>
    </>
  )
}

export default StatisticReference