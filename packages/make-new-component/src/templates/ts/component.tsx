// @ts-nocheck
/**
 * Imports i18n
 */
import { useTranslation } from "react-i18next";

/**
 * Imports the component styles
 */
import { useStyles } from "./COMPONENT_NAME.styles";

/**
 * Defines the props interface
 */
interface COMPONENT_NAMEProps {
  componentName: string;
}

/**
 * Defines the default props
 */
const defaultProps = {
  componentName: "COMPONENT_NAME",
};

/**
 * Displays the component
 */
const COMPONENT_NAME: React.FC<COMPONENT_NAMEProps> = (props) => {
  const { componentName } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.COMPONENT_NAME}>{t(componentName)}</div>;
};

COMPONENT_NAME.defaultProps = defaultProps;

export default COMPONENT_NAME;
export { defaultProps as COMPONENT_NAMEDefaultProps };
