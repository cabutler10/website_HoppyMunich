import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import dictionaryEN from "./dictionaryEN.json";
import dictionaryDE from "./dictionaryDE.json";
import NumberFormat from "component/number/NumberFormat";

const options = {
  // we are not using NS for the moment
  ns: ["translations"],
  defaultNS: "translations",

  load: "languageOnly",

  keySeparator: ".", // we use content as keys

  interpolation: {
    format: function(value, format, lng) {
      if (format === "percentage")
        return NumberFormat({ data: value, type: "percent" });
      return value;
    },
    formatSeparator: ","
  },

  // language detector configuration
  detection: {
    // query string first to help in development, htmlTag as it is set by LR portal, Cookie and others as fallback
    order: [
      "querystring",
      "liferayLangDetector",
      "htmlTag",
      "cookie",
      "localStorage",
      "navigator"
    ]
  },
  react: {
    wait: true
  }
};

//TODO KDu: Should we log "missing keys?"
const CustomBackend = {
  type: "backend",
  init: function(services, backendOptions, i18nextOptions) {
    /* use services and options */
  },
  read: function(language, namespace, callback) {
    // always check for custom dictionary
    fetch(`/navigator/rest/dictionary/${language}`, {
      credentials: "same-origin",
      accept: "application/json; charset=utf-8"
    })
      .then(response => {
        if (response.ok) return response;
        throw new Error(`Unable to fetch dictionary for language ${language}`);
      })
      .then(response => {
        return response.json();
      })
      .then(dictionary => {
        callback(null, dictionary);
      })
      .catch(error => {
        switch (language) {
          // fallback to bundled dictionary of that language if available
          // dev is the default fallback language of i18next https://www.i18next.com/principles/fallback.html
          case "dev":
            callback(null, dictionaryEN);
            break;
          case "en":
            callback(null, dictionaryEN);
            break;
          case "de":
            callback(null, dictionaryDE);
            break;
            break;
          default:
            callback(error.message, false);
        }
      });
  },

  // optional
  readMulti: function(languages, namespaces, callback) {
    throw new Error("Loading of multiple dictionaries not supported yet.");
  },
  create: function(languages, namespace, key, fallbackValue) {
    /*nothing to do for now */
  }
};

export default () => {
  const langDetector = new LanguageDetector();
  langDetector.addDetector(liferayLangDetector);

  i18n
    .use(CustomBackend)
    .use(langDetector)
    .init(options);
  return i18n;
};
