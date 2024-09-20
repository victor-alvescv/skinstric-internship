export default function Button({ label, arrow, order }) {
  return (
    <div
      style={{ transform: "translate(0px, 0px)" }}
      id="right-link"
      className="btn-link btn--horizontal inline-flex items-center justify-center dynamic--font3 leading-[1.6] tracking-[-.02em]"
    >
      <span
        style={{
          fontSize: "clamp(10px, 2px + .625vw, 14px)",
          opacity: ".7",
          order: order === "label-first" ? 1 : 2, // Set order based on the `order` prop
        }}
        className={` font-roobert ${
          order === "label-first"
            ? "btn--text pr-[18px]"
            : "btn--text-opposite pl-[18px]"
        }`}
      >
        {label}
      </span>
      <span
        className="iconButton"
        style={{ order: order === "icon-first" ? 1 : 2 }} // Set order based on the `order` prop
      >
        <span className="iconButton--content">
          <svg
            className={`${arrow === "left" && "iconButton-reverse"}`}
            width="8"
            height="8"
            viewBox="0 0 11 12"
            fill="#1A1B1C"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            style={{ position: "relative", top: 1, left: -1 }}
          >
            <path d="m.714 6 9.429 5.444V.556L.714 6Z" fill="current"></path>
          </svg>
        </span>
      </span>
    </div>
  );
}
