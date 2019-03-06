import * as winston from "winston";

export const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    // allows interpolation
    winston.format.splat(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console({
      // send everything to stderr so that result output doesn't conflict with
      // status messages.
      stderrLevels: ["error", "warn", "info", "verbose", "debug", "silly"],
    }),
  ],
});

export async function writeToStdout(out: string) {
  return new Promise(resolve => {
    process.stdout.write(out, "utf8", resolve);
  });
}
