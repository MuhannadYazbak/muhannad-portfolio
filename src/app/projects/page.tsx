import fs from 'fs'
import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'

async function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), 'content', filename)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const processedContent = await remark().use(html).process(fileContents)
  return processedContent.toString()
}

export default async function Home() {
  const content = await getMarkdownContent('Projects.md')

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  )
}