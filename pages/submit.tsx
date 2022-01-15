import axios from 'axios';
import Head from 'next/head';
import { useState } from 'react';
import { Header } from '../components/Header';
import { CATEGORIES } from '../lib/constants';

const Tool = () => {
  const [toolName, setToolName] = useState('');
  const [toolDesc, setToolDesc] = useState('');
  const [toolLink, setToolLink] = useState('');
  const [toolCategory, setToolCategory] = useState('');
  const [error, setError] = useState('');

  const submitTool = async () => {
    if (!toolLink || !toolCategory) {
      return setError('Please fill out all fields');
    }

    return await axios
      .post('/api/tools/create', {
        name: toolName,
        desc: toolDesc,
        link: toolLink,
        category: toolCategory,
      })
      .then((res) => (window.location.href = '/'))
      .catch((e) => setError(e.message));
  };

  return (
    <>
      <Head>
        <title>Submit / Hidden Tools</title>
      </Head>
      <div className="px-16 py-16 md:py-0">
        <Header />

        <div className="mt-3">
          <label className="text-sm text-gray-400">
            *title & description are optional*
          </label>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>

        <div className="flex space-x-4 mt-4 mb-4">
          <input
            placeholder="Tool Name"
            type="text"
            spellCheck="false"
            className="bg-secondary focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            onChange={(e: any) => setToolName(e.target.value)}
          />
          <input
            placeholder="Tool URL"
            type="text"
            spellCheck="false"
            className="bg-secondary focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            onChange={(e: any) => setToolLink(e.target.value)}
          />
        </div>

        <div className="flex space-x-4 mt-4 mb-4">
          <input
            placeholder="Tool Description"
            type="text"
            spellCheck="false"
            className="bg-secondary focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            onChange={(e: any) => setToolDesc(e.target.value)}
          />
          <select
            onChange={(e) => setToolCategory(e.target.value)}
            className="bg-secondary text-gray-400 focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full"
          >
            <option selected disabled>
              Category -&gt;
            </option>
            {CATEGORIES.sort().map((category: string) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={submitTool}
          className="bg-secondary hover:bg-gray-700 focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        >
          Submit Tool
        </button>

        <label className="flex items-center justify-center text-center mt-3 text-sm text-gray-400">
          Upon submitting your tool, it will be required to pass verification
          before being posted to Hidden Tools.
        </label>
      </div>
    </>
  );
};

export default Tool;
