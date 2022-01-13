export const Footer = () => {
  return (
    <div className="px-4 py-2 md:mt-10 rounded-lg flex flex-col md:flex-row items-center justify-center text-center">
      <div className="text-gray-400">
        built by{' '}
        <a
          href="https://twitter.com/heybereket"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:text-blue-300 cursor-pointer"
        >
          @heybereket
        </a>
      </div>
    </div>
  );
};
