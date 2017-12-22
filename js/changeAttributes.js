// Module: SML, Muhammad Yahya, Supervisor: Prof.Dr. Franz-Josef Behr
const LOGOELEMENT = document.querySelector('.w3schools-logo');
if (LOGOELEMENT.hasAttribute('target')) {
  console.log(LOGOELEMENT.getAttribute('target'));
}else {
  LOGOELEMENT.setAttribute('target', '_blank');
}
console.log(LOGOELEMENT.getAttributes);
