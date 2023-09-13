import { U as defineStore, z as ref } from "./index.a7fc5dec.js";
const useViewWrapper = defineStore("viewWrapper", () => {
  const isPushed = ref(false);
  const isPushedBlock = ref(false);
  const pageTitle = ref("Bienvenido");
  function setPushed(value) {
    isPushed.value = value;
  }
  function setPushedBlock(value) {
    isPushedBlock.value = value;
  }
  function setPageTitle(value) {
    pageTitle.value = value;
  }
  return {
    isPushed,
    isPushedBlock,
    pageTitle,
    setPushed,
    setPushedBlock,
    setPageTitle
  };
});
export { useViewWrapper as u };
