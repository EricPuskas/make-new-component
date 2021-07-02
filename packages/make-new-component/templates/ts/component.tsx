// @ts-nocheck
/**
 * Imports the component styles
 */
import { useStyles } from "./COMPONENT_NAME.styles";

/**
 * Defines the props interface
 */
export interface COMPONENT_NAMEProps {
  text?: string;
}

/**
 * Defines the default props
 */
const defaultProps: COMPONENT_NAMEProps = {
  text: "COMPONENT_NAME"
};

/**
 * Displays the component
 */
export const COMPONENT_NAME: React.FC<COMPONENT_NAMEProps> = (props) => {
  const { text } = props;

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.COMPONENT_NAME}>{text}</div>;
};

COMPONENT_NAME.defaultProps = defaultProps;
