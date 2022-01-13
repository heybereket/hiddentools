export const Card = (props: any) => {
  return (
    <div className="mt-8 items-center max-w-sm">
      <a
        href={`${props.link}?ref=hiddentools`}
        target="_blank"
        rel="noreferrer"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={props.image}
          alt={props.name}
          className="rounded-lg hover:opacity-50"
        />
      </a>
      <div className="mt-3">
        <a href={`${props.link}?ref=hiddentools`} target="_blank" rel="noreferrer">
          <h2 className="text-white hover:text-blue-500 font-semibold text-xl">
            {props.name}
          </h2>
        </a>
        <p className="mt-1 text-sm">{props.desc}</p>
        <button className="bg-secondary px-3 py-2 rounded-lg mt-2 text-xs cursor-auto">
            {props.category}
        </button>
      </div>
    </div>
  );
};
