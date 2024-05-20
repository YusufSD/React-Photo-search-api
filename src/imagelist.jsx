import ImageItem from "./imageitem";

function ImageList({ imageHolder }) {
  return (
    <div className="imageList">
      {imageHolder.map((image, index) => {
        return <ImageItem key={index} images={image} />;
      })}
    </div>
  );
}

export default ImageList;
