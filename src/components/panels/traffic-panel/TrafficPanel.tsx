import ConsumerPad from '../../pads/consumer-pad/ConsumerPad'
import './TrafficPanel.scss'

function TrafficPanel() {
  return (
    <>
      <div>
        Top Traffic:
        <ConsumerPad/>
        <ConsumerPad/>
        <ConsumerPad/>
      </div>
    </>
  )
}

export default TrafficPanel