export function VideoReview() {
  return (
    <div className="relative aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/1POPinXjQKo"
        title="The Genius Wave Review"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0"
      />
    </div>
  )
}

