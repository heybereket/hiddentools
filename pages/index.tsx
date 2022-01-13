import axios from 'axios';
import type { GetStaticProps } from 'next';
import { Key, SetStateAction, useEffect, useState } from 'react';
import { fetcher } from '../lib/fetcher';
import { Tool } from '../types/Tool';
import { Header } from '../components/Header';
import { Card } from '../components/Card';
import Link from 'next/link';
import { CATEGORIES } from '../lib/constants';

interface HomeProps {
  tools: any;
}

const Home: React.FC<HomeProps> = (props) => {
  const [tools, setTools] = useState([]);
  const [query, setQuery] = useState('');
  const [viewCategories, setViewCategories] = useState(false);

  const filterTools = () => {
    return tools.filter((tool: Tool) =>
      (tool.name + tool.desc).toLowerCase().includes(query.toLowerCase())
    );
  };

  useEffect(() => {
    if (query) {
      setTools(filterTools());
    } else {
      setTools(props.tools.sort(() => Math.random() - 0.5));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const changeSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setQuery(event.target.value);
  };

  return (
    <div className="px-16 py-16 md:py-0">
      <Header />

      <div className="flex space-x-4 mt-4">
        <input
          type="text"
          placeholder="Search tools..."
          value={query}
          onChange={changeSearch}
          spellCheck="false"
          className="bg-secondary focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full"
        />
        <Link href="/submit">
          <a className="bg-secondary hover:bg-gray-700 text-center focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full">
            Submit a tool
          </a>
        </Link>
      </div>

      {!viewCategories && (
        <button
          className="block md:hidden text-gray-500 dark:text-primary-100 mt-4 font-semibold"
          onClick={() => setViewCategories(true)}
        >
          Categories are hidden. View categories -&gt;
        </button>
      )}

      <div
        className={`space-y-3 mt-5 md:mt-2 ${
          viewCategories ? 'block' : 'hidden md:block'
        }`}
      >
        <button
          className="bg-secondary hover:bg-gray-700 hover:cursor-pointer mr-3 focus:cursor-pointer px-3 py-2 rounded-lg text-xs cursor-auto"
          onClick={() => setTools(props.tools.sort(() => Math.random() - 0.5))}
        >
          All ({props.tools.length})
        </button>
        {CATEGORIES.map((category: string) => (
          <button
            key={category}
            onClick={() =>
              setTools(
                props.tools.filter((tool: Tool) => tool.category === category)
              )
            }
            className="bg-secondary hover:bg-gray-700 hover:cursor-pointer mr-3 focus:cursor-pointer px-3 py-2 rounded-lg text-xs cursor-auto"
          >
            {category}{' '}
            <span className="text-gray-400">
              (
              {
                props.tools.filter((tool: Tool) => tool.category === category)
                  .length
              }
              )
            </span>
          </button>
        ))}
      </div>

      {tools.length === 0 && (
        <div className="mt-5">
          <span>
            😥 No results found for <strong>{query}</strong>.
          </span>
        </div>
      )}

      <div className="md:grid sm:grid-cols-1 grid-cols-2 gap-4 gap-y-15 gap-x-5 md:grid-cols-4">
        {tools.map((item: any, i: Key) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tools = await fetcher(`tools`);

  return { props: { tools: tools.tools }, revalidate: 60 };
};

export default Home;
