import { Validator } from "."
import { getNumbers } from "../helpers";

function RgFormat(v0,errChar='?'){
  var v = v0.toUpperCase().replace(/[^\dX]/g,'');
  return (v.length==8 || v.length==9)?
     v.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/,'$1.$2.$3-$4'):
     (errChar+v0)
  ;
} 

export const rgValidationHandler: Validator = async (value) => {
  return /(^\d{1,2})(\d{3})(\d{3})-?(\d{1}|X|x$)/g.exec(getNumbers(value.toString())) !== null
}
