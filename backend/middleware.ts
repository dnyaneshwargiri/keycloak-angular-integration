const Keycloak = require("keycloak-connect");
const session = require("express-session");
const memoryStore = new session.MemoryStore();
const kcConfig = {
  clientId: "dny-netflix",
  bearerOnly: true,
  serverUrl: "http://localhost:8080",
  realm: "master",
  realmPublicKey:
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4kheXp3M5+Ws7m9GlHP54vJzeP54UgRAUGoNA/DPOicy9pFLtMx/tJzHMJf1wMfBK2JxXzgIzsF4TJR/RTwhn8q7rY2KWwMkFHj13GEtPlFkOp2SXCF0sKoVTQOG2xNuSYkEa7ZjSHO+3yR3Nd5LhbMGzo5i/6kxSd/ng+gtQx/P2pHjED2fZYsaZUzC38K000zrd1jqMPZbeXFLb8NMl/Mgd645R9SjJ7nR/H7q63LxDRNOONtLHOO/B/FfmqVHyx15aF6Pbutc46JUXqAatv3aWNk07460yeqMTcQii5rgVf/JaHc8Prsq+GC1pU5v8DdB/0YomJaTyvl5EUv4mwIDAQAB",
};

export const keycloak = new Keycloak({ store: memoryStore }, kcConfig);
