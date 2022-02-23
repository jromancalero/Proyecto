<?php

namespace App\Actions\Fortify;

use Laravel\Fortify\Rules\Password;
use Illuminate\Contracts\Validation\Rule;
class DNIValidationRules implements Rule
{

    public function __construct(){

    }

    public function message(){
        return "Introduce un DNI valido";
    }

    public function passes($attribute,$value){

    return true;
        /* if ($value === '' || $value == null) {
            return false;
        }
        $cadenaValidacion = "TRWAGMYFPDXBNJZSQVHLCKE";
        $value = rtrim($value);
        $value = substr($value, 0, -1);
        $charValidar = $value % 23;

        if ($charValidar !== $cadenaValidacion[$charValidar]) {
            return false;
        } else {
            return true;
        } */
    }
    /**
     * Get the validation rules used to validate passwords.
     *
     *
     */

}
