import { exec } from "shelljs";
import { join } from "path";

const bin = exec("npm bin")
  .toString()
  .trim();
const truffleCmd = join(bin, "truffle compile");
const typechainCmd = join(bin, "typechain --target truffle ./build/**/*.json");

exec(truffleCmd);
exec(typechainCmd);
