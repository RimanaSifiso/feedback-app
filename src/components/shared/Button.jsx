import Proptypes from 'prop-types'

export default function Button({children, version, type, isDisabled}) {
  return (
    <button
      type={ type }
      disabled={ isDisabled }
      className={ `btn btn-${version}` }
      
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: 'primary',
  type: 'version',
  isDisabled: false
}

Button.propTypes = {
  children: Proptypes.node.isRequired,
  version: Proptypes.string,
  type: Proptypes.string,
  isDisabled: Proptypes.bool
}
