import { CommandModule } from "yargs";

export const helloCommand: CommandModule = {
  command: "hello <name>",
  builder: yargs =>
    yargs.positional("name", {
      describe: "Who to say hi to",
    }),
  handler: args => {
    console.log(`hello ${args.name}`);
  },
};
