// Argument and environment handling shared by the entrypoint scripts under
// src/. Each of them used to hand-roll the same three things: read process.argv,
// print a usage line, exit 1. They had drifted — publish-tool.mjs named
// add-tool.mjs in its usage string, and two scripts touched an argument before
// checking it was there, so a missing argument threw a TypeError instead of
// printing usage.
//
// The pure halves (parseArgs, missingEnv, isMain) hold the logic and are unit
// tested; the wrappers (args, requireEnv) add only the printing and the exit.

// Takes the values described by `names` from `argv`, trimmed. Throws on the
// first missing one — a whitespace-only argument counts as missing, since it is
// what an unset workflow input expands to.
export function parseArgs(argv, names) {
  const values = names.map((_, i) => (argv[i] || '').trim());
  const missing = names.filter((_, i) => !values[i]);

  if (missing.length) {
    throw new Error(`missing ${missing.join(', ')}`);
  }
  return values;
}

// The names in `names` that `env` has no non-empty value for.
export function missingEnv(env, names) {
  return names.filter((name) => !env[name]);
}

// Whether this module is the script node was asked to run, rather than one
// imported by another script — the guard that keeps a module's main() from
// firing when its tests import it.
export function isMain(metaUrl, scriptPath = process.argv[1]) {
  return metaUrl === `file://${scriptPath}`;
}

// parseArgs, plus the usage line and the exit that every entrypoint wants.
export function args(usage, ...names) {
  try {
    return parseArgs(process.argv.slice(2), names);
  } catch (e) {
    console.error(e.message);
    console.error(usage);
    process.exit(1);
  }
}

// Exits unless every variable in `names` is set. Two policies, because the
// scripts genuinely want different ones: `skip` exits 0 to leave the work done
// so far standing, the default exits 1 to fail the job.
export function requireEnv(names, { env = process.env, skip = false, context = '' } = {}) {
  const missing = missingEnv(env, names);
  if (!missing.length) return;

  const suffix = context ? ` — ${context}` : '';
  if (skip) {
    console.warn(`${missing.join(' / ')} not set${suffix || ' — skipping'}`);
    process.exit(0);
  }
  console.error(`${missing.join(' / ')} not set${suffix}`);
  process.exit(1);
}
