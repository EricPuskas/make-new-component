#!/usr/bin/env node
import path from "path";
import fs, { promises as fsp } from "fs";
// @ts-ignore
import { version } from "../package.json";

/**
 * External Imports
 */
import { program } from "commander";

/**
 * Imports helpers and utils
 */
import { getPaths, Paths } from "./paths";
import { utils } from "./utils";

program.version(version);

/**
 * Init the program
 */
program
  .arguments("<componentName>")
  .option("-ts, --ts", "Typescript template", false)
  .parse(process.argv);

/**
 * Get the arguments
 */
const [componentName] = program.args;

/**
 * Define the component directory
 */
const componentDir = `src/components/${componentName}`;

/**
 * Check for component name
 */
if (!componentName) {
  utils.executeFatalError(
    `Sorry, you need to specify a name for your component like this: make-new-component <name>`
  );
}

/**
 * Check to see if a directory at the given path exists
 */
if (!fs.existsSync(path.resolve(process.cwd() + "/src/components"))) {
  utils.executeFatalError(`
  Current directory: /${path.basename(process.cwd())}
  Components can only be created in /${path.basename(
    process.cwd()
  )}/src/components
  Please create a "src/components" directory.
  `);
}

/**
 * Check to see if this component has already been created
 */
if (fs.existsSync(path.resolve(componentDir))) {
  utils.executeFatalError(
    `Looks like this component already exists! There's already a component at ${componentDir}.\nPlease delete this directory and try again.`
  );
}

/**
 * Get the js and ts paths
 */
const { jsPaths, tsPaths } = getPaths(componentDir, componentName);

/**
 * Log intro
 */
utils.logIntro(
  componentName,
  `${path.basename(process.cwd())}/${componentDir}`
);

/**
 * Handles creating the directory for the component
 * @param componentDir String
 */
const createComponentDirectory = async (componentDir: string) => {
  await fsp.mkdir(componentDir);
};

/**
 * Handles formatting the template
 * @param template Buffer | String
 */
const formatTemplate = (template: Buffer | string) =>
  template
    .toString()
    .replace(/COMPONENT_NAME/g, componentName)
    .replace("// @ts-nocheck", "")
    .trimStart();

/**
 * Handles creating a component file
 * @param path String
 * @param template Buffer | String
 */
const createComponentFile = async (path: string, template: Buffer | string) => {
  await fsp.writeFile(path, formatTemplate(template));
};

/**
 * Handles building the component files
 * @param paths Paths
 */
const buildComponentFiles = async (paths: Paths) => {
  /**
   * Gets the content for the main template
   */

  const mainTemplate = await fsp.readFile(
    path.join(__dirname, paths.TEMPLATE_MAIN_PATH)
  );

  /**
   * Gets the content for the story template
   */
  const storyTemplate = await fsp.readFile(
    path.join(__dirname, paths.TEMPLATE_STORY_PATH)
  );

  /**
   * Gets the content for the test template
   */
  const testTemplate = await fsp.readFile(
    path.join(__dirname, paths.TEMPLATE_TEST_PATH)
  );

  /**
   * Gets the content for the style template
   */
  const stylesTemplate = await fsp.readFile(
    path.join(__dirname, paths.TEMPLATE_STYLES_PATH)
  );

  /**
   * Gets the content for the index template
   */
  const indexTemplate = await fsp.readFile(
    path.join(__dirname, paths.TEMPLATE_INDEX_PATH)
  );

  /**
   * Handles getting the component path
   * @param p String
   * @returns
   */
  const calculatePath = (p: string) =>
    path.join(path.resolve(process.cwd()), p);

  /**
   * Creates the component directory
   */
  await createComponentDirectory(calculatePath(componentDir));
  utils.logItemCompletion("Directory created.");

  /**
   * Creates the main file
   */
  await createComponentFile(calculatePath(paths.MAIN_PATH), mainTemplate);
  utils.logItemCompletion("Component created.");

  /**
   * Creates the story file
   */
  await createComponentFile(calculatePath(paths.STORY_PATH), storyTemplate);
  utils.logItemCompletion("Story created.");

  /**
   * Creates the test file
   */
  await createComponentFile(calculatePath(paths.TEST_PATH), testTemplate);
  utils.logItemCompletion("Test created.");

  /**
   * Creates the styles file
   */
  await createComponentFile(calculatePath(paths.STYLES_PATH), stylesTemplate);
  utils.logItemCompletion("Styles created.");

  /**
   * Creates the index file
   */
  await createComponentFile(calculatePath(paths.INDEX_PATH), indexTemplate);
  utils.logItemCompletion("Index created.");
};

/**
 * Handles building the files
 */
const buildFiles = async () => {
  /**
   * Gets the options
   */
  const options = program.opts();

  if (options.ts) {
    /**
     * Typescript
     */
    await buildComponentFiles(tsPaths);
  } else {
    /**
     * Javascript
     */
    await buildComponentFiles(jsPaths);
  }
};

buildFiles();
