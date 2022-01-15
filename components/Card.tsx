const Warning = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 512 512"
      {...props}
    >
      <path d="M449.07,399.08,278.64,82.58c-12.08-22.44-44.26-22.44-56.35,0L51.87,399.08A32,32,0,0,0,80,446.25H420.89A32,32,0,0,0,449.07,399.08Zm-198.6-1.83a20,20,0,1,1,20-20A20,20,0,0,1,250.47,397.25ZM272.19,196.1l-5.74,122a16,16,0,0,1-32,0l-5.74-121.95v0a21.73,21.73,0,0,1,21.5-22.69h.21a21.74,21.74,0,0,1,21.73,22.7Z" />
    </svg>
  );
};

const Image = (props: any): JSX.Element => {
  switch (props.image) {
    case 'image_error':
      return (
        <div className="border-2 border-white hover:opacity-50 rounded-lg px-9 py-[35px] flex items-center justify-center">
          <Warning className=" fill-white" />
        </div>
      );

    default:
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={props.image}
          alt={props.name}
          className="rounded-lg hover:opacity-50"
        />
      );
  }
};

export const Card = (props: any) => {
  return (
    <div className="mt-8 items-center max-w-sm">
      <a
        href={`${props.link}?ref=hiddentools`}
        target="_blank"
        rel="noreferrer"
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image image={props.image} name={props.name} />
      </a>
      <div className="mt-3">
        <a
          href={`${props.link}?ref=hiddentools`}
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="text-white hover:text-blue-500 font-semibold text-xl">
            {props.name}
          </h2>
        </a>
        <p className="mt-1 text-sm line-clamp-3">{props.desc}</p>
        <button className="bg-secondary px-3 py-2 rounded-lg mt-2 text-xs cursor-auto">
          {props.category}
        </button>
      </div>
    </div>
  );
};
