import { type CSSProperties } from "react";

export const ProjectImage = ({ data }: { data: any }) => {
  const isMobile = window.innerWidth <= 800;
  const defaultImageStyles: CSSProperties = {
    height: !isMobile ? "55vh" : "80vh",
    width: "100%",
    textAlign: "center"
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
      <div data-toggle="popover" data-trigger="hover" title={data.title} data-content={data.description}>
        <a href={data.url} target="_blank">
          <img className="img-thumbnail rounded shadow" src={data.image} alt={data.title} style={defaultImageStyles} />
        </a>
      </div>
    </div>
  );
};
