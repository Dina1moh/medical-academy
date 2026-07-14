type YouTubeEmbedProps = {
  title: string;
  src: string;
};

export function YouTubeEmbed({ title, src }: YouTubeEmbedProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-soft">
      <iframe
        className="aspect-video w-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
