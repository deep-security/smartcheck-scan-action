import * as yargs from "yargs";

import { scanCommand } from "./scan";

yargs
  .command(scanCommand)
  .demandCommand()
  .help().argv;
