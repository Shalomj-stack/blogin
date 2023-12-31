import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className='flex-col flex-center w-full'>
      <h1 className='head_text text-center'>
        BlogIn
        <br className='max-mid:hidden' />
        <span className='orange_gradient text-center'>Tell Your Story</span>
      </h1>
      <p className='desc text-center'>
        BlogIn is a blogsite created by SJStack
      </p>
      <Feed />
    </section>
  );
};

export default Home;
