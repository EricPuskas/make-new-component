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
export interface COMPONENT_NAMEProps {}

/**
 * Displays the component
 */
const COMPONENT_NAME: React.FC<COMPONENT_NAMEProps> = (props) => {
  const {} = props;

  /**
   * Handles the translations
   */
  const { t } = jest ? { t: (str: string) => str } : useTranslation();

  /**
   * Gets the component styles
   */
  const classes = useStyles();

  return <div className={classes.COMPONENT_NAME}>{t("COMPONENT_NAME")}</div>;
};

export default COMPONENT_NAME;
