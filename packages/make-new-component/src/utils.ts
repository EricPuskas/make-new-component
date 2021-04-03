/**
 * External Imports
 */
import chalk from "chalk";

/**
 * Paints the console text yellow
 * @param text String
 * @returns
 */
const paintYellow = (text: string) => chalk.rgb(255, 204, 0)(text);

/**
 * Paints the console text gray
 * @param text String
 * @returns
 */
const paintGray = (text: string) => chalk.rgb(90, 90, 90)(text);

/**
 * Paints the console text green
 * @param text String
 * @returns
 */
const paintGreen = (text: string) => chalk.green(text);

/**
 * Paints the console text red
 * @param text String
 * @returns
 */
const paintError = (error: string) => console.error(chalk.bold.red(error));

/**
 * Defines the utils
 */
export const utils = {
  /**
   * Defines the intro log function
   * @param name String
   * @param dir String
   */
  logIntro: (name: string, dir: string) => {
    console.info("\n");
    console.log(`✨ Creating the ${paintYellow(name)} component ✨`);

    const pathString = chalk.rgb(0, 186, 255)(dir);

    console.log(`Directory: ${pathString}`);
    console.log(paintGray("========================================="));
  },
  /**
   * Defines the success log function
   * @param successText String
   */
  logItemCompletion: (successText: string) => {
    console.log(`${paintGreen("✓")} ${successText}`);
  },
  /**
   * Defines the error log function
   * @param error String
   */
  logError: (error: string) => {
    console.log("\n");
    paintError("Error creating component.");
    paintError(error);
    console.log("\n");
  },
  /**
   * Defines the error log function -> also exits the program.
   * @param error String
   */
  executeFatalError: (error: string) => {
    utils.logError(error);
    process.exit(1);
  },
};
