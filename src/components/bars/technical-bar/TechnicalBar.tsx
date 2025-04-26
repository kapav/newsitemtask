import ServiceReference from '../../references/service-reference/Servicereference'
import StatisticReference from '../../references/statistic-reference/StatisticReference'
import './TechnicalBar.scss'

function TechnicalBar() {
  return (
    <>
      <div>
        TechnicalBar works!
        <StatisticReference />
        <ServiceReference />
      </div>
    </>
  )
}

export default TechnicalBar