import { createFileRoute } from '@tanstack/vue-router'
import * as fs from 'node:fs'
import { createServerFn } from '@tanstack/vue-start'

const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  )
}

export const getCount = createServerFn({ method: 'GET' })
  .handler(() => {
    return readCount()
  })

export const updateCount = createServerFn({ method: 'POST' })
  .inputValidator((d: number) => d)
  .handler(async ({ data }) => {
    const count = await readCount()
    await fs.promises.writeFile(filePath, `${count + data}`)
  })

export const Route = createFileRoute('/')({
  // component is loaded from index.component.vue
  loader: async () => await getCount(),
})
