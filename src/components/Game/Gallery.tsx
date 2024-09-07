import useGallery from "../../hooks/useGallery";
import style from "./Gallery.module.scss";

interface Props {
  gameId: number;
}

const Gallery = ({ gameId }: Props) => {
  const { data, error } = useGallery(gameId);

  if (error) throw error;

  return (
    <div className={style.game_gallery}>
      {data?.results.map((file) => (
        <img
          key={file.id}
          src={file.image}
          className="w-100"
        />
      ))}
    </div>
  );
};

export default Gallery;
