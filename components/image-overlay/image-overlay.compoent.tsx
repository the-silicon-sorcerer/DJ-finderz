import style from "./image-overlay.module.css";

interface ImageOverlayProps {
  opacity: string;
  linear?: boolean;
}

const ImageOverlay = ({ opacity, linear = false }: ImageOverlayProps) => {
  const version = linear
    ? "linear-gradient(180deg, transparent, rgb(0,0,0, 0.3), black)"
    : "";

  return (
    <div
      className={style.overlay}
      style={{ opacity: opacity, backgroundImage: version }}
    ></div>
  );
};

export default ImageOverlay;
