"use client"

export default function Chapter({ params }: { params: { chapterId: string } }) {
  return <main>
    <h1>Chapter {params.chapterId}</h1>
  </main>
}