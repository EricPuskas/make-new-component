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
export interface COMPONENT_NAMEProps {
  text?: string;
}

/**
 * Displays the component
 */
const COMPONENT_NAME: React.FC<COMPONENT_NAMEProps> = (props) => {
  const { text } = props;

  /**
   * Handles the translations
   */
  const { t } = useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return (
    <div className={classes.root}>{t(text ? text : "COMPONENT_NAME")}</div>
  );
};

export default COMPONENT_NAME;
