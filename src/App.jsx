import FileExplorer from "./FileExplorer";

function App() {
  // const [count, setCount] = useState(0);
  const data = [
    {
      id: 1,
      name: "README.md",
    },
    {
      id: 2,
      name: "Documents",
      children: [
        {
          id: 3,
          name: "Word.doc",
        },
        {
          id: 4,
          name: "Powerpoint.ppt",
        },
      ],
    },
    {
      id: 5,
      name: "Downloads",
      children: [
        {
          id: 6,
          name: "unnamed.txt",
        },
        {
          id: 7,
          name: "Misc",
          children: [
            {
              id: 8,
              name: "foo.txt",
            },
            {
              id: 9,
              name: "bar.txt",
            },
            {
              id: 10,
              name: "one more nested",
              children: [
                {
                  id: 11,
                  name: "foo_one.txt",
                },
                {
                  id: 12,
                  name: "bar_one.txt",
                },
                {
                  id: 13,
                  name: "one.txt",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return <FileExplorer data={data} />;
}

export default App;
