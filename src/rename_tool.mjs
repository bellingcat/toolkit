import pkg from './paths.mjs'
const {getTools} = pkg;
import pkg2 from './tools.mjs'
const {renameTool} = pkg2

const inputToolname = process.argv[2]
const newToolname = process.argv[3]
const tools = getTools();
const tool = tools.find((x) => x.title === inputToolname || x.filename === inputToolname);
if (!tool) {
  console.warn("Tool not found", inputToolname);
  process.exit(1);
}
renameTool(tool, newToolname);
