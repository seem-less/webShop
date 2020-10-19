import {errors} from '../../functions';

const Error = ( { fieldName, errors  }:{ fieldName:errors['fieldName'], errors:errors|null  } ) => {
	
	return(
		errors && ( errors.hasOwnProperty( fieldName ) ) ? (
			<div className="invalid-feedback d-block">{ errors[fieldName] }</div>
		) : null
	)
};

export default Error;
