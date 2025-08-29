import { useEffect, useState } from "react";
import { client, urlFor } from "../../sanity";
import { PortableText } from "@portabletext/react";

const Details = () => {
  const [data, setData] = useState([]); // start with empty array

  useEffect(() => {
    client
      .fetch(
        `*[_type == "details"]{
          title,
          image,
          content
        }`
      )
      .then((res) => setData(res))
      .catch(console.error);
  }, []);

  if (!data.length) return <p>Loading...</p>;

  return (
    <div className="dotta">
      <div className="details">
        {data.map((item, index) => (
          <div key={index} className="details_sub">
            <h2 className="d_title">{item.title}</h2>
            {item.image && (
              <img
                src={urlFor(item.image).url()}
                alt={item.title}
                className="detail_i"
              />
            )}
            <PortableText
              value={item.content}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="detai_p">{children}</p>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside ml-5">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside ml-5">
                      {children}
                    </ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => (
                    <li style={{ color: "#6699cc" }}>{children}</li>
                  ),
                  number: ({ children }) => <li>{children}</li>,
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold #fff">{children}</strong>
                  ),
                },
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
