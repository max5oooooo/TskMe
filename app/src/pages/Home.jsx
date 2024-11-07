import { useDispatch } from "react-redux";
import useDictionary from "../hook/useDictionary";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

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
      <nav className="flex justify-between items-center p-6 bg-[#111827] text-white">
        <h1 className="text-2xl font-semibold text-primary">{dictionary.HOME_CTA_TITLE}</h1>
        <button
          onClick={handleLogin}
          className="px-6 py-2 bg-btn-high rounded-lg text-white hover:bg-btn-medium transition duration-300"
        >
          {dictionary.HOME_CTA_BUTTON}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-16">
        <h2 className="text-4xl font-semibold">{dictionary.HOME_HERO_TITLE}</h2>
        <p className="mt-4 text-xl">{dictionary.HOME_HERO_SUBTITLE}</p>
        <button
          onClick={handleLogin}
          className="mt-8 px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition duration-300"
        >
          {dictionary.HOME_HERO_CTA_BUTTON}
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold text-primary">{dictionary.HOME_FEATURES_TITLE}</h2>
        <p className="mt-4 text-lg">{dictionary.HOME_FEATURES_SUBTITLE}</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {/* Feature 1 */}
          <div className="feature-card bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary">{dictionary.HOME_FEATURE_1_TITLE}</h3>
            <p>{dictionary.HOME_FEATURE_1_DESCRIPTION}</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary">{dictionary.HOME_FEATURE_2_TITLE}</h3>
            <p>{dictionary.HOME_FEATURE_2_DESCRIPTION}</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card bg-secondary p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-primary">{dictionary.HOME_FEATURE_3_TITLE}</h3>
            <p>{dictionary.HOME_FEATURE_3_DESCRIPTION}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary text-center">
        <h2 className="text-3xl font-semibold text-primary">{dictionary.HOME_ABOUT_TITLE}</h2>
        <p className="mt-4 text-lg text-primary">{dictionary.HOME_ABOUT_SUBTITLE}</p>
        <div className="mt-8 px-4 max-w-3xl mx-auto">
          <p className="text-lg text-primary">
            TskMe è un'app pensata per chi ha bisogno di organizzare le proprie task in modo efficiente e intuitivo.
            Con un'interfaccia semplice e chiara, permette di gestire e monitorare le tue attività quotidiane, assegnando priorità e scadenze per garantire che nulla venga dimenticato.
          </p>
          <p className="mt-4 text-lg text-primary">
            L'app offre funzionalità avanzate come la categorizzazione delle task, la possibilità di collaborare con il team,
            e la gestione di progetti complessi con una visualizzazione chiara e immediata.
            Che si tratti di un piccolo compito o di un progetto a lungo termine, TskMe ti aiuta a mantenere tutto sotto controllo.
          </p>
          <p className="mt-4 text-lg text-primary">
            Inizia a usare TskMe oggi stesso e scopri come organizzare al meglio la tua giornata lavorativa con pochi semplici passaggi.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-btn-low text-white text-center py-16">
        <h2 className="text-3xl font-semibold">{dictionary.HOME_CTA_TITLE}</h2>
        <p className="mt-4">{dictionary.HOME_CTA_DESCRIPTION}</p>
        <button
          onClick={handleLogin}
          className="mt-8 px-8 py-3 bg-white text-btn-high rounded-lg hover:bg-gray-100 transition duration-300"
        >
          {dictionary.HOME_CTA_BUTTON}
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white text-center py-8">
        <p>&copy; 2024 TskMe. All rights reserved.</p>
        <p>{dictionary.HOME_FOOTER_TEXT}</p>
      </footer>
    </>
  );
};

export default Home;