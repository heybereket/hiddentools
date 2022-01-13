export const Header = () => {
  return (
    <div>
      <h1 className="text-white text-4xl md:text-5xl font-bold">
        Hidden Tools
      </h1>
      <p className="text-md md:text-lg">
        ✨ Discover a wide collection of unique tools.
      </p>

      <div className="mt-3 text-sm">
        <span>
          Built by{' '}
          <a
            href="https://twitter.com/heybereket"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-300 cursor-pointer"
          >
            @heybereket
          </a>{' '}
          -{' '}
        </span>
        <span>
          OSS @{' '}
          <a
            href="https://github.com/heybereket/hiddentools"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-300 cursor-pointer"
          >
            heybereket/hiddentools
          </a>
        </span>
      </div>
    </div>
  );
};
