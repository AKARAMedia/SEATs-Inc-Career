import VideoPlaylist, { type PlaylistVideo } from "@/components/VideoPlaylist";

export default function VideoSection({
  title = "Our Video",
  subtitleKhmer = "សារចែករំលែក ពីCEOក្រុមហ៊ុន",
  videos,
}: {
  title?: string;
  subtitleKhmer?: string;
  videos: PlaylistVideo[];
}) {
  return (
    <section className="bg-gradient-to-b from-primary to-white py-20 text-white">
      <div className="container-site">
        <h2 className="text-3xl">{title}</h2>
        <p className="mt-1 text-sm text-white/80">{subtitleKhmer}</p>
        <div className="mt-8">
          <VideoPlaylist videos={videos} />
        </div>
      </div>
    </section>
  );
}
