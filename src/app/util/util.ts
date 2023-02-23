import { environment } from "src/environments/environment";

export class Util {
    static httpOptions(url: string, httpOptions: any) {
        throw new Error('Method not implemented.');
    }


    public static authentication= environment.localhost+'/oauth/token';

    public static DIAS = '[0-9]{1,3}';
    public static ESPECIAL = '^[a-zA-Z0-5]*$';
    public static FIJO_VALID = '[0-9]{6,15}';
    public static CORREO_VALID = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
    public static CAMPO_TALLAC = '[0-9]{1,2}';
    public static CAMPO_NUMERO = '[0-9]{4,10}';
    public static CAMPO_SALARIO = '[0-9]{6,10}';
    public static CAMPO_IDENTIFICACION = '[0-9]{5,16}';
    public static TELEFONO_VALID = '[0-9]{15}';
    public static CAMPO_NUMERICO = '[0-9]{0,15}';
    public static CAMPO_ALFANUMERICO = '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$';
    public static CAMPO_ALFANUM = '/^[0-9a-zA-Z]+$/';
    public static CAMPO_CELULAR = '[3-9]\\d{9}';
    public static DIRECCION = '/^(([^<>()\[\]\\.,;:\s”]+(\.[^<>()\[\]\\.,;:\s”]+)*)|(“.+”))/';
    public static NUMERICO = '/^([0-9])*$/';
    public static CARACTERES = '[A-Za-z]*';
    public static MAYUSCULAS = '/^[A-Z]/';
    public static ESPECIALES = '/^[a-zA-ZÍñÑáéíóúÁÉÍÓÚ~ç]*$/';
    public static DIRECCIONR = '^[a-zA-ZñÑáéíóúÁÉÍÓÚ  1234567890#-]*$';
    public static PRUEBA = '[0-9ASM]{0,15}';
}
