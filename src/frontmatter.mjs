// Minimal drop-in replacement for the slice of gray-matter's API this repo
// uses (`matter(str)` and `matter.stringify(content, data)`). gray-matter is
// permanently pinned to js-yaml@^3.13.1 (vulnerable to GHSA-h67p-54hq-rp68),
// so we talk to js-yaml directly instead of pulling in an unpatchable dep.
import yaml from 'js-yaml';

const OPEN = '---';
const CLOSE = '\n---';

function matter(input) {
  if (input === '' || !input.startsWith(OPEN) || input.charAt(OPEN.length) === '-') {
    return { data: {}, content: input };
  }

  const rest = input.slice(OPEN.length);
  const closeIndex = rest.indexOf(CLOSE);
  const block = (closeIndex === -1 ? rest : rest.slice(0, closeIndex)).trim();
  const data = block === '' ? {} : yaml.load(block);

  if (closeIndex === -1) {
    return { data: data || {}, content: '' };
  }

  let content = rest.slice(closeIndex + CLOSE.length);
  if (content[0] === '\r') content = content.slice(1);
  if (content[0] === '\n') content = content.slice(1);

  return { data: data || {}, content };
}

matter.stringify = function (content, data) {
  const body = content.endsWith('\n') ? content : content + '\n';
  const block = yaml.dump(data).trim();
  if (block === '{}') return body;
  return `${OPEN}\n${block}\n---\n${body}`;
};

export default matter;
