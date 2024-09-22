export default function Button({ label, arrow, order, main }) {
  return (
    <div className="btn__wrapper inline-flex items-center justify-center dynamic--font3 leading-[1.6] tracking-[-.02em]">
      <span
        style={{
          fontSize: "clamp(10px, 2px + .625vw, 14px)",
          opacity: ".7",
          order: order === "label-first" ? 1 : 2,
        }}
        className={`font-roobert ${
          order === "label-first"
            ? "btn__text pr-[18px]"
            : "btn__text--opposite pl-[18px]"
        }`}
      >
        {label}
      </span>
      <span
        className="icon__btn"
        style={{ order: order === "icon-first" ? 1 : 2 }}
      >
        <span
          style={{
            padding: main ? "calc(18px * 0.35)" : "calc(24px * 0.35)",
          }}
          className="icon__btn--content"
        >
          <svg
            className={`${arrow === "left" && "icon__btn--reverse"}`}
            width="8"
            height="8"
            viewBox="0 0 11 12"
            fill="#1A1B1C"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            style={{
              position: "relative",
              top: 1,
              left: -1,
              width: main ? "6px" : "8px",
            }}
          >
            <path d="m.714 6 9.429 5.444V.556L.714 6Z" fill="current"></path>
          </svg>
        </span>
      </span>
    </div>
  );
}
