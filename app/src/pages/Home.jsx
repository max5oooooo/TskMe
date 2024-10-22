import useDictionary from "../hook/useDictionary";

const Home = () => {
  const dictionary = useDictionary();

  return (
    <>
        <h1>{dictionary.HOME_CTA_TITLE}</h1>
    </>
  )
}

export default Home