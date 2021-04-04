/**
 * Defines the Paths interface
 */
export interface Paths {
  TEMPLATE_MAIN_PATH: string;
  TEMPLATE_STORY_PATH: string;
  TEMPLATE_DOC_PATH: string;
  TEMPLATE_TEST_PATH: string;
  TEMPLATE_STYLES_PATH: string;
  TEMPLATE_INDEX_PATH: string;
  MAIN_PATH: string;
  STORY_PATH: string;
  TEST_PATH: string;
  STYLES_PATH: string;
  INDEX_PATH: string;
}

/**
 * Handles defining and returning the js and ts paths for all files and templates
 * @param directoryName String
 * @param fileName String
 * @returns
 */
export const getPaths = (directoryName: string, fileName: string) => {
  /**
   * Defines the base paths
   */
  const baseJsTemplatePath = "../templates/js";
  const baseTsTemplatePath = "../templates/ts";

  /**
   * Javascript paths
   */
  const jsPaths: Paths = {
    TEMPLATE_MAIN_PATH: `${baseJsTemplatePath}/component.js`,
    TEMPLATE_STORY_PATH: `${baseJsTemplatePath}/component.stories.js`,
    TEMPLATE_DOC_PATH: `${baseJsTemplatePath}/component.md`,
    TEMPLATE_TEST_PATH: `${baseJsTemplatePath}/component.test.js`,
    TEMPLATE_STYLES_PATH: `${baseJsTemplatePath}/component.styles.js`,
    TEMPLATE_INDEX_PATH: `${baseJsTemplatePath}/index.js`,
    MAIN_PATH: `${directoryName}/${fileName}.js`,
    STORY_PATH: `${directoryName}/${fileName}.stories.js`,
    TEST_PATH: `${directoryName}/${fileName}.test.js`,
    STYLES_PATH: `${directoryName}/${fileName}.styles.js`,
    INDEX_PATH: `${directoryName}/index.js`,
  };

  /**
   * Typescript paths
   */
  const tsPaths: Paths = {
    TEMPLATE_MAIN_PATH: `${baseTsTemplatePath}/component.tsx`,
    TEMPLATE_STORY_PATH: `${baseTsTemplatePath}/component.stories.tsx`,
    TEMPLATE_DOC_PATH: `${baseTsTemplatePath}/component.md`,
    TEMPLATE_TEST_PATH: `${baseTsTemplatePath}/component.test.tsx`,
    TEMPLATE_STYLES_PATH: `${baseTsTemplatePath}/component.styles.tsx`,
    TEMPLATE_INDEX_PATH: `${baseTsTemplatePath}/index.tsx`,
    MAIN_PATH: `${directoryName}/${fileName}.tsx`,
    STORY_PATH: `${directoryName}/${fileName}.stories.tsx`,
    TEST_PATH: `${directoryName}/${fileName}.test.tsx`,
    STYLES_PATH: `${directoryName}/${fileName}.styles.tsx`,
    INDEX_PATH: `${directoryName}/index.tsx`,
  };

  return { jsPaths, tsPaths };
};
