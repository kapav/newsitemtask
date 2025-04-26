import ControlReference from '../../references/control-reference/controlReference'
import ExpandReference from '../../references/expand-reference/ExpandReference'
import WrapperReference from '../../references/wrapper-reference/WrapperReference'
import './DuplicateBar.scss'

function DuplicateBar() {
  return (
    <>
      <div>
        DuplicateBar works!
        <ControlReference />
        <WrapperReference />
        <ExpandReference />
      </div>
    </>
  )
}

export default DuplicateBar