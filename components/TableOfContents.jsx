import React, { useState, useEffect } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeId, setActiveId] = useState();

  const handleHeadingClick = (id) => {
    document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id);

        if (visibleHeadings.length > 0) {
          setActiveId(visibleHeadings[0]);
        }
      },
      {
        rootMargin: '-128px 0px -40% 0px',
      }
    );

    headings.forEach((element) => {
      if (element && element instanceof Element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="table-of-contents container border-2 p-8 rounded-lg shadow-md sticky top-32">
      <h2 className="text-2xl font-semibold mb-8">Sadržaj</h2>
      <ul className="my-1">
        {headings.map((heading) => (
          <li key={heading.id} className="grid grid-cols-12 group">
            <div className="col-span-1 h-full w-px bg-slate-500 group-hover:bg-pink-500  group-hover:w-2 duration-300"></div>
            <a
              href={`#${heading.id}`}
              className="scroll-mt-3 col-span-11 py-1 group-hover:text-pink-500 text-slate-600 duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleHeadingClick(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
