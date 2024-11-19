import { useDispatch } from "react-redux";
import useDictionary from "../hook/useDictionary";
import { login } from "../store/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import SwitchLanguage from "../components/shared/SwitchLanguage";

/**
 * 
 * 
 */

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dictionary = useDictionary();

  // Funzione di login
  const handleLogin = () => {
    dispatch(login({ token: "1234", user: { id: 1, first_name: "Giovanni", profile_image: null } }));
    navigate("/console");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-white text-black">
        <h1 className="text-2xl font-semibold text-primary"><i class="fa-regular fa-lemon" aria-hidden="true"></i>TSK Me</h1>

        <div className="flex space-x-6">
          {/* Links per le sezioni */}
          <Link to="#features" smooth duration={500} className="hover:text-[#40916C] transition duration-300">
            Features Section
          </Link>
          <Link to="#about" smooth duration={500} className="hover:text-[#40916C] transition duration-300">
            About Section
          </Link>
          <Link to="#cta" smooth duration={500} className="hover:text-[#40916C] transition duration-300">
            Call to Action
          </Link>

        </div>
        <div className="flex gap-1">
          <button
            onClick={handleLogin}
            className="rounded-full border border-slate-100 shadow p-3 px-5 items-center cursor-pointer bg-primary text-white"
          >
            {dictionary.HOME_CTA_BUTTON}
          </button>
          <button
            onClick={handleLogin}
            className="rounded-full border border-slate-100 shadow p-3 px-5 items-center cursor-pointer bg-primary text-white"
          >
            Registrati
          </button>
          <SwitchLanguage />
        </div>

      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-6 md:px-16 flex items-center">
        <div className="flex-1 px-8 max-w-lg mx-auto">
          <h2 className="text-4xl font-semibold">{dictionary.HOME_HERO_TITLE}</h2>
          <p className="mt-4 text-xl">{dictionary.HOME_HERO_SUBTITLE}</p>
          <button
            onClick={handleLogin}
            className="mt-8 px-8 py-3 rounded-full border border-slate-100 shadow items-center cursor-pointer bg-white text-primary block mx-auto"
          >
            {dictionary.HOME_HERO_CTA_BUTTON}
          </button>
        </div>
        <div className="flex-1">
          {/* Qui puoi inserire la tua immagine */}
          <img
            src="https://images.ctfassets.net/xjcz23wx147q/2oiMdOggDxqcAwWPBbWrOZ/bebd506e5bcf49b163efca81049729be/pm-marketing-hero.webp"
            alt="Hero Image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="#about" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-primary">{dictionary.HOME_ABOUT_TITLE}</h2>
        <p className="mt-4 text-lg text-primary">{dictionary.HOME_ABOUT_SUBTITLE}</p>
        <div className="mt-8 px-4 max-w-3xl mx-auto p-4 font-bold">
          <p className="text-lg text-black">{dictionary.HOME_ABOUT_BODY_1}</p>
          <p className="mt-4 text-lg text-black">{dictionary.HOME_ABOUT_BODY_2}</p>
          <p className="mt-4 text-lg text-black">{dictionary.HOME_ABOUT_BODY_3}</p>
        </div>
      </section>

      {/* Sezione Come Funziona (Cascata alternata) */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-primary">{dictionary.HOME_HDIW_TITLE}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4">
          {/* Prima colonna: Titolo e descrizione */}
          <div className="flex flex-col justify-center items-start space-y-4 min-h-[400px]">
            <p className="text-lg text-black">{dictionary.HOME_HDIW_BODY}</p>
          </div>
          {/* Seconda colonna: Foto dell'app */}
          <div className="flex justify-center items-center min-h-[400px]">
            <img src="path-to-your-app-image.jpg" alt="App Screenshot" className="w-full h-auto object-cover max-w-lg" />
          </div>
        </div>
      </section>

      {/* Sezione Analytics */}
      <section className="py-16 bg-[#B7E4C7] text-center">
        <h2 className="text-3xl font-semibold text-primary">{dictionary.HOME_ANALYTICS_TITLE}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 px-4">
          {/* Prima colonna: Foto */}
          <div className="flex justify-center items-center min-h-[400px]">
            <img src="path-to-your-analytics-image.jpg" alt="Analytics Screenshot" className="w-full h-auto object-cover max-w-lg" />
          </div>
          {/* Seconda colonna: Descrizione */}
          <div className="flex flex-col justify-center items-start space-y-4 min-h-[400px]">
            <p className="text-lg text-black">{dictionary.HOME_ANALYTICS_BODY}</p>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="#features" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-primary">{dictionary.HOME_FEATURES_TITLE}</h2>
        <p className="mt-4 text-lg">{dictionary.HOME_FEATURES_SUBTITLE}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {/* Feature 1 - Tecnologie all'avanguardia */}
          <div className="feature-card bg-secondary p-6 rounded-lg shadow-md">
            <div className="mb-4">
              {/* Icona */}
              <div className="flex justify-center items-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#40916C" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>


            </div>
            <h3 className="text-2xl font-semibold text-primary">{dictionary.HOME_FEATURE_1_TITLE}</h3>
            <p>{dictionary.HOME_FEATURE_1_DESCRIPTION}</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-secondary p-6 rounded-lg shadow-md">
            <div className="mb-4">
              {/* Icona */}
              <div className="flex justify-center items-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#40916C" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>

            </div>
            <h3 className="text-2xl font-semibold text-primary">{dictionary.HOME_FEATURE_2_TITLE}</h3>
            <p>{dictionary.HOME_FEATURE_2_DESCRIPTION}</p>
          </div>

          {/* Feature 3 - Facile da usare */}
          <div className="feature-card bg-secondary p-6 rounded-lg shadow-md">
            <div className="mb-4">
              {/* Icona */}
              <div className="flex justify-center items-center h-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#40916C" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>

            </div>
            <h3 className="text-2xl font-semibold text-primary">{dictionary.HOME_FEATURE_3_TITLE}</h3>
            <p>{dictionary.HOME_FEATURE_3_DESCRIPTION}</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="#cta" className="bg-primary text-white text-center py-16">
        <h2 className="text-3xl font-semibold">{dictionary.HOME_HERO_CTA_BUTTON}</h2>
        <p className="mt-4">{dictionary.HOME_CTA_DESCRIPTION}</p>
        <div className="flex justify-center align-center gap-2">
          <button
            onClick={handleLogin}
            className="rounded-full border border-slate-100 mt-8 px-8 py-3 shadow cursor-pointer bg-white text-primary"
          >
            {dictionary.HOME_CTA_BUTTON}
          </button>
          <button
            onClick={handleLogin}
            className="mt-8 px-8 py-3 rounded-full border border-slate-100 shadow cursor-pointer bg-white text-primary"
          >
            Registrati
          </button>
        </div>

      </section>
    </>
  );
};

export default Home;