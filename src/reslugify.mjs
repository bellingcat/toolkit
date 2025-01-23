import fs from 'fs';
import path from 'path';

/**
 * Reslugify all tool folders in `toolkit/gitbook/tools`,
 * removing Windows-prohibited characters and replacing spaces with dashes.
 * Prints any changes made.
 *
 * Usage:
 *   node reslugify.mjs
 */
function reslugifyTools() {
  const toolsRoot = path.join('toolkit', 'gitbook', 'tools');
  const allEntries = fs.readdirSync(toolsRoot, { withFileTypes: true });

  const changedTools = [];

  for (const entry of allEntries) {
    if (!entry.isDirectory()) continue; // skip files

    const originalName = entry.name;
    // 1) Remove illegal chars: < > : " / \ | ? * and ASCII 0x00–0x1F
    // 2) Replace whitespace with '-'
    let safeName = originalName
      .replace(/[<>:"/\\|?*\x00-\x1F]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

    // If after stripping out everything we’re left with an empty string,
    // handle it (e.g., fallback to "untitled").
    if (!safeName) {
      safeName = 'untitled';
    }

    if (safeName !== originalName) {
      const oldPath = path.join(toolsRoot, originalName);
      const newPath = path.join(toolsRoot, safeName);

      console.log(`Renaming: ${originalName} -> ${safeName}`);
      try {
        fs.renameSync(oldPath, newPath);
        changedTools.push(`${originalName} -> ${safeName}`);
      } catch (err) {
        console.error(`Failed to rename ${originalName}:`, err.message);
      }
    }
  }

  if (changedTools.length === 0) {
    console.log("No tools needed renaming. All good!");
  } else {
    console.log("\nTools successfully renamed:");
    changedTools.forEach((line) => console.log(` - ${line}`));
  }
}

// Run the function if called directly from the CLI
if (import.meta.url === process.argv[1] || !process.argv[1]) {
  reslugifyTools();
}

export { reslugifyTools };
