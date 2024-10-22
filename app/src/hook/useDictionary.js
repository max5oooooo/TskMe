import dict from '../lang/dict';
import { useLanguage } from './useLanguage';

const useDictionary = () => {
    const [lang] = useLanguage();
    
    return dict[lang];
}

export default useDictionary