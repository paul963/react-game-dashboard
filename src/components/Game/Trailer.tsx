import useTrailers from "../../hooks/useTrailers";

interface Props {
  gameId: number;
}

const Trailer = ({ gameId }: Props) => {
  const { data, error } = useTrailers(gameId);
  const video = data?.results[0];

  if (error) throw error;

  return video ? (
    <div className="game-trailer">
      <video
        src={video.data.max}
        poster={video.preview}
        controls
        className="w-100"
      />
    </div>
  ) : null;
};

export default Trailer;
