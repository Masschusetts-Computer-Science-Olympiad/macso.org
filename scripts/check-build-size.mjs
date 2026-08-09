import { readdir, stat } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const assetsDirectory = join(projectRoot, 'dist', 'assets')

const budgets = new Map([
  ['.js', { label: 'JavaScript', maximumBytes: 410_000 }],
  ['.css', { label: 'CSS', maximumBytes: 44_000 }],
])

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(directory, entry.name)
    if (entry.isDirectory()) files.push(...(await listFiles(fullPath)))
    if (entry.isFile()) files.push(fullPath)
  }

  return files
}

const files = await listFiles(assetsDirectory)
let failed = false

for (const [extension, budget] of budgets) {
  const matchingFiles = files.filter((file) => extname(file) === extension)
  const sizes = await Promise.all(matchingFiles.map((file) => stat(file)))
  const totalBytes = sizes.reduce((total, file) => total + file.size, 0)
  const percentage = ((totalBytes / budget.maximumBytes) * 100).toFixed(1)

  console.log(
    `${budget.label}: ${totalBytes.toLocaleString()} / ${budget.maximumBytes.toLocaleString()} bytes (${percentage}%)`,
  )

  if (totalBytes > budget.maximumBytes) {
    failed = true
    for (const file of matchingFiles) {
      const fileSize = await stat(file)
      console.error(`  ${relative(projectRoot, file)}: ${fileSize.size} bytes`)
    }
  }
}

if (failed) {
  console.error('Build output exceeds its checked-in performance budget.')
  process.exitCode = 1
}
