import router from 'next/router';

const Header = () => {
  const handleNavigateHome = async () => {
    await router.push('/');
  };

  const handleNavigateBookmarkPage = async () => {
    await router.push('/bookmarks');
  };

  return (
    <header className="max-w-3xl m-auto h-16 flex items-center justify-between bg-black">
      <button
        className="cursor-pointer text-4xl font-bold text-red-400"
        onClick={handleNavigateHome}
      >
        ANIFLIX
      </button>

      <button
        onClick={handleNavigateBookmarkPage}
        className="hover:border-white border-black border-b-[1px] border-dotted pb-1"
      >
        ❤️ Bookmarked Page
      </button>
    </header>
  );
};

export default Header;
