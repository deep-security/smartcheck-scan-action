import * as yargs from "yargs";

import { helloCommand } from "./src/hello";

yargs
  .command(helloCommand)
  .demandCommand()
  .help().argv;
